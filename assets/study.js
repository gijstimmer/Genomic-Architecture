/* Shared renderer for the Genomic Architecture study pages.
 *
 * Each lecture folder has a `study-content.js` that calls GA.register({...}).
 * A lecture page (study.html) calls GA.lecturePage(id) to render that lecture.
 * The exam drill (exam-drill/index.html) loads every study-content.js and calls GA.drillPage().
 *
 * Content format (see any study-content.js):
 *   { id, num, title, lecturer, date, slides: [file names], summary,
 *     objectives: [..], takeHome: [..],
 *     sections: [{ title, src, cards: [{ t, html }] }],
 *     questions: [{ type: 'mc', q, options: [..], answer: index, explain, src }
 *                 | { type: 'open', q, answer, src }] }
 * html strings may use <span class="key">, <div class="exam">, <div class="seq">, tables, lists.
 */
(function () {
  const GA = (window.GA = window.GA || {});
  GA.lectures = GA.lectures || [];
  GA.register = (lec) => GA.lectures.push(lec);

  /* ---------- small helpers ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const el = (tag, attrs = {}, html) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") n.className = v;
      else if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v);
    }
    if (html !== undefined) n.innerHTML = html;
    return n;
  };
  const store = {
    get(k, d) { try { const v = localStorage.getItem("ga:" + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("ga:" + k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } },
  };
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const qid = (lec, i) => lec.id + ":" + i;

  /* ---------- theme ---------- */
  function applyTheme() { const t = store.get("theme", null); if (t) document.documentElement.setAttribute("data-theme", t); }
  function themeButton() {
    return el("button", { class: "btn", title: "Toggle light/dark", onclick: () => {
      const cur = document.documentElement.getAttribute("data-theme") ||
        (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      const next = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next); store.set("theme", next);
    } }, "◐ Theme");
  }
  applyTheme();

  /* ---------- quiz rendering (shared by lecture page and drill) ---------- */
  function renderQuiz(container, items, opts = {}) {
    // items: [{ lec, i, q }]
    container.innerHTML = "";
    const missed = new Set(store.get("missed", []));
    let answered = 0, correct = 0;
    const scoreEl = el("div", { class: "score" });
    const updateScore = () => { scoreEl.textContent = `${correct} / ${answered} correct · ${items.length} questions`; };
    const head = el("div", { class: "qhead" });
    head.append(scoreEl);
    if (opts.controls) head.append(opts.controls);
    container.append(head);
    updateScore();

    const record = (key, ok) => {
      answered++; if (ok) { correct++; missed.delete(key); } else missed.add(key);
      store.set("missed", [...missed]); updateScore();
    };

    items.forEach(({ lec, i, q }, n) => {
      const key = qid(lec, i);
      const card = el("div", { class: "q" });
      const meta = [`Q${n + 1}`, q.type === "mc" ? "multiple choice" : "open question"];
      card.append(el("div", { class: "qn" },
        meta.map((m) => `<span>${m}</span>`).join("") +
        (opts.showLecture ? `<span class="tag">L${lec.num} · ${lec.short || lec.title}</span>` : "") +
        (q.src ? `<span>${q.src}</span>` : "")));
      card.append(el("div", { class: "stem" }, q.q));

      if (q.type === "mc") {
        const order = shuffle(q.options.map((o, k) => k));
        const box = el("div", { class: "opts" });
        const explain = el("div", { class: "explain hidden" },
          `<b>Answer:</b> ${q.options[q.answer]}${q.explain ? "<br>" + q.explain : ""}`);
        order.forEach((k, pos) => {
          const b = el("button", { class: "opt" }, `<span class="l">${"ABCDEF"[pos]}</span><span>${q.options[k]}</span>`);
          b.addEventListener("click", () => {
            box.querySelectorAll(".opt").forEach((x) => (x.disabled = true));
            b.classList.add(k === q.answer ? "right" : "wrong");
            box.children[order.indexOf(q.answer)].classList.add("right");
            explain.classList.remove("hidden");
            record(key, k === q.answer);
          });
          box.append(b);
        });
        card.append(box, explain);
      } else {
        const ta = el("textarea", { placeholder: "Write your answer first (optional), then reveal the model answer…" });
        const ans = el("div", { class: "explain hidden" }, `<b>Model answer:</b> ${q.answer}`);
        const grade = el("div", { class: "open-actions hidden" });
        const done = (ok) => { grade.innerHTML = `<span class="score">${ok ? "Marked as correct" : "Marked for review"}</span>`; record(key, ok); };
        grade.append(
          el("button", { class: "btn good", onclick: () => done(true) }, "✓ I had it"),
          el("button", { class: "btn bad", onclick: () => done(false) }, "✗ Review again"));
        const reveal = el("button", { class: "btn", onclick: () => { ans.classList.remove("hidden"); grade.classList.remove("hidden"); reveal.remove(); } }, "Reveal answer");
        card.append(ta, el("div", { class: "open-actions" }), ans, grade);
        card.children[3].append(reveal);
      }
      container.append(card);
    });
  }

  /* ---------- lecture page ---------- */
  GA.lecturePage = function (id) {
    const lec = GA.lectures.find((l) => l.id === id);
    const app = $("#app");
    document.title = `L${lec.num} ${lec.short || lec.title}`;

    app.append(el("nav", { class: "crumbs" },
      `<a href="../index.html">Genomic Architecture</a><span>›</span><span>Lecture ${lec.num}</span>`));
    app.append(el("header", { class: "top" },
      `<div class="eyebrow">Lecture ${lec.num} · ${lec.date}</div>
       <h1>${lec.titleHtml || lec.title}</h1>
       <p class="lede">${lec.summary}</p>
       <div class="meta"><span><b>Lecturer:</b> ${lec.lecturer}</span>
       <span><b>Slides:</b> ${lec.slides.map((s) => `<a href="slides/${s}">${s}</a>`).join(", ")}</span></div>`));

    const learn = el("div", { class: "section-wrap", style: "display:grid;gap:18px" });
    const quiz = el("div", { style: "display:grid;gap:14px" });
    quiz.classList.add("hidden");

    const tabs = el("div", { class: "tabs", role: "tablist" });
    const setTab = (which) => {
      tabs.querySelectorAll(".tab").forEach((t) => t.setAttribute("aria-selected", t.dataset.t === which));
      learn.classList.toggle("hidden", which !== "learn");
      quiz.classList.toggle("hidden", which !== "quiz");
      store.set("tab:" + id, which);
    };
    [["learn", "Learn"], ["quiz", `Quiz (${lec.questions.length})`]].forEach(([k, label]) =>
      tabs.append(el("button", { class: "tab", role: "tab", "data-t": k, onclick: () => setTab(k) }, label)));
    const tools = el("div", { class: "tools" });
    tools.append(
      el("button", { class: "btn", onclick: () => learn.querySelectorAll("details").forEach((d) => (d.open = true)) }, "Expand all"),
      el("button", { class: "btn", onclick: () => learn.querySelectorAll("details").forEach((d) => (d.open = false)) }, "Collapse all"),
      themeButton());
    const bar = el("div", { class: "bar" }); bar.append(tabs, tools);
    app.append(bar);

    // Learn tab
    if (lec.objectives) learn.append(el("div", { class: "box" }, `<h2>Learning goals</h2><ul>${lec.objectives.map((o) => `<li>${o}</li>`).join("")}</ul>`));
    lec.sections.forEach((s) => {
      const sec = el("section", { class: "section" }, `<h2>${s.title}</h2>${s.src ? `<div class="src">${s.src}</div>` : ""}`);
      s.cards.forEach((c) => {
        const d = el("details", { class: "card" }, `<summary>${c.t}</summary><div class="body">${c.html}</div>`);
        sec.append(d);
      });
      learn.append(sec);
    });
    if (lec.takeHome) learn.append(el("div", { class: "box" }, `<h2>Take-home messages</h2><ul>${lec.takeHome.map((o) => `<li>${o}</li>`).join("")}</ul>`));
    learn.append(el("div", { style: "text-align:center" }, ""));
    learn.lastChild.append(el("button", { class: "btn primary", onclick: () => { setTab("quiz"); scrollTo(0, 0); } }, "Test yourself →"));

    // Quiz tab
    const drawQuiz = (shuffled) => {
      const items = lec.questions.map((q, i) => ({ lec, i, q }));
      const controls = el("div", { class: "tools" });
      controls.append(
        el("button", { class: "btn", onclick: () => drawQuiz(true) }, "Shuffle & restart"),
        el("a", { class: "btn", href: "../exam-drill/index.html", style: "text-decoration:none" }, "Course-wide drill →"));
      renderQuiz(quiz, shuffled ? shuffle(items) : items, { controls });
    };
    drawQuiz(false);

    app.append(learn, quiz);
    app.append(el("footer", {}, "Summaries and questions are study aids written from the lecture slides — when in doubt, the slides and the lecture recording are authoritative."));
    setTab(store.get("tab:" + id, "learn"));
  };

  /* ---------- exam drill ---------- */
  GA.drillPage = function () {
    const app = $("#app");
    const lecs = GA.lectures.slice().sort((a, b) => a.num.localeCompare(b.num));
    const all = lecs.flatMap((lec) => lec.questions.map((q, i) => ({ lec, i, q })));
    const sel = new Set(store.get("drill:sel", lecs.map((l) => l.id)));
    let type = "all", size = 20, mode = "random";

    app.append(el("nav", { class: "crumbs" }, `<a href="../index.html">Genomic Architecture</a><span>›</span><span>Exam drill</span>`));
    app.append(el("header", { class: "top" },
      `<div class="eyebrow">Course-wide practice</div><h1>Exam <em>drill</em></h1>
       <p class="lede">Mixed questions from every lecture, like the final exam (multiple choice + open questions).
       Pick the lectures, draw a set, and use “Missed only” to repeat what you got wrong — your misses are remembered in this browser.</p>`));

    const panel = el("div", { class: "box", style: "display:grid;gap:12px" });
    const lecChips = el("div", { class: "filters" });
    lecs.forEach((l) => {
      const c = el("button", { class: "chip", "aria-pressed": sel.has(l.id) }, `L${l.num} ${l.short || l.title} <span class="score">${l.questions.length}</span>`);
      c.addEventListener("click", () => { sel.has(l.id) ? sel.delete(l.id) : sel.add(l.id); c.setAttribute("aria-pressed", sel.has(l.id)); store.set("drill:sel", [...sel]); });
      lecChips.append(c);
    });
    const group = (label, values, get, set) => {
      const g = el("div", { class: "filters" }); g.append(el("span", { class: "score", style: "align-self:center" }, label));
      values.forEach(([v, t]) => {
        const c = el("button", { class: "chip", "aria-pressed": get() === v }, t);
        c.addEventListener("click", () => { set(v); g.querySelectorAll(".chip").forEach((x) => x.setAttribute("aria-pressed", x === c)); });
        g.append(c);
      });
      return g;
    };
    panel.append(el("div", { class: "score" }, "Lectures"), lecChips,
      group("Type", [["all", "Both"], ["mc", "Multiple choice"], ["open", "Open"]], () => type, (v) => (type = v)),
      group("Size", [[10, "10"], [20, "20"], [40, "40"], [9999, "All"]], () => size, (v) => (size = v)),
      group("Mode", [["random", "Random"], ["missed", "Missed only"]], () => mode, (v) => (mode = v)));
    const go = el("button", { class: "btn primary" }, "Draw questions");
    const tools = el("div", { class: "tools" }); tools.append(go, themeButton(),
      el("button", { class: "btn", onclick: () => { store.set("missed", []); alert("Missed list cleared."); } }, "Clear missed list"));
    panel.append(tools);
    app.append(panel);

    const out = el("div", { style: "display:grid;gap:14px" });
    app.append(out);
    go.addEventListener("click", () => {
      const missed = new Set(store.get("missed", []));
      let pool = all.filter((x) => sel.has(x.lec.id) && (type === "all" || x.q.type === type));
      if (mode === "missed") pool = pool.filter((x) => missed.has(qid(x.lec, x.i)));
      if (!pool.length) { out.innerHTML = `<div class="box">No questions match — ${mode === "missed" ? "you have no missed questions for this selection 🎉" : "select at least one lecture"}.</div>`; return; }
      renderQuiz(out, shuffle(pool).slice(0, size), { showLecture: true });
      out.scrollIntoView({ behavior: "smooth" });
    });
  };

  /* ---------- hub page ---------- */
  GA.themeButton = themeButton;
})();
