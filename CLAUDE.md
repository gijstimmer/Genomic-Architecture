# CLAUDE.md

This repo holds the course material for the MSc course **Genomic Architecture** (Leiden University, Han de Winde, Oct–Nov 2026). The goal is structured exam preparation: final exam on 18 Nov 2026 (digital, multiple choice and open questions).

- **One folder per lecture**, named `NN-short-name/` and numbered in schedule order (`00-prep-…`, `01-…`, …). Each contains `slides/` (originals), `transcript-*.md` (slide-by-slide text), `study.html` + `study-content.js` (interactive study page) and a `README.md`.
- Use the **`transcript-*.md` files** as the source when generating content (summaries, questions, cheat sheets). Go to the slides only for figures. Transcripts are generated text extracts, so they contain no figures, and diagram labels can be jumbled.
- **Study pages:** `assets/study.js` renders everything. A lecture's content lives only in its `study-content.js` (`GA.register({...})`: sections → cards with HTML, plus `questions` of `type: "mc"` (options + answer index + explain) or `type: "open"` (model answer)). `study.html` is a fixed 10-line shell, so copy one from another lecture and change the id.
- **Adding a new lecture:**
  1. Create the folder and put the slides in `slides/`.
  2. Make the transcript.
  3. Write `study-content.js` and copy `study.html`.
  4. Add a `<script>` line in `exam-drill/index.html`.
  5. Set the tile in `index.html` to `"ready"` with the folder name.
  6. Add rows to the root `README.md` tables.
- `00-course-info/` has the schedule (`schedule-2026.md`), course info and kick-off. Check the schedule for lecture titles and lecturers.
- Lecture 03 (bacteria & HGT, 29 Oct) has no slides yet. Lectures from 3 Nov onwards still have to be added.
- Keep the shared design (CSS tokens, light/dark themes) in `assets/study.css`. Don't inline styles per page.
