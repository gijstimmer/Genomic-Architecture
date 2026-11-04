GA.register({
  id: "02",
  num: "02",
  short: "Viruses & Phages",
  title: "Genomic architecture of viruses & phages",
  titleHtml: "Viruses &amp; <em>phages</em>",
  lecturer: "Adam Sidi Mabrouk",
  date: "Wed 28 Oct 2026 (video lecture)",
  slides: ["genomic-architecture-of-phages-mabrouk.pdf"],
  summary: "What viruses and bacteriophages are, the lytic and lysogenic life cycles, phage therapy, and the arms race between bacterial defence systems (receptor changes, biofilms, superinfection exclusion, restriction–modification, CRISPR-Cas, abortive infection, cell-wall deficiency) and phage counter-defences.",
  objectives: [
    "Describe viruses/phages: abundance, genome sizes, structure",
    "Explain the lytic vs lysogenic life cycle",
    "Discuss pros and cons of phage therapy",
    "Explain each bacterial defence mechanism and how phages counter it (coevolution)",
    "Explain the three stages of CRISPR-Cas immunity and Class 1 vs Class 2 systems",
  ],
  sections: [
    {
      title: "1 · What are viruses and phages?",
      src: "Slides 3–12",
      cards: [
        { t: "Seeing phages: cryo-electron microscopy", html: `<p>Light has a wavelength of 400–700 nm; electrons ~1 nm → electron microscopy resolves phages. Cryo-EM images frozen (~−180 °C) samples. Phage structure: <b>capsid</b> (head, contains the genome) + <b>tail</b> (attachment and injection).</p>` },
        { t: "Most common biological entity on Earth", html: `
          <ul>
            <li>~<span class="key">10<sup>31</sup></span> viruses in total; ~10<sup>10</sup> per litre of surface seawater (more than the number of humans).</li>
            <li>94% of nucleic-acid-containing particles in the oceans, but a tiny share of biomass (avg. ~54 nm diameter).</li>
          </ul>` },
        { t: "Definition and genome diversity", html: `
          <p><b>Virus</b>: an infectious agent that replicates <span class="key">only inside living cells</span> of an organism. Viruses infect all forms of life.</p>
          <ul>
            <li>Genomes can be DNA or RNA, single- or double-stranded. Examples on the slide: coronavirus ~30 kb, rabies 12 kb, tobacco mosaic virus 6.5 kb, Sputnik (a virophage) 18 kb, His1 (archaeal virus) 15.5 kb.</li>
            <li><b>Phage</b> genomes range from ~<b>5 kb to 600 kb</b>; phages with genomes &gt;200 kb are called <span class="key">jumbo phages</span>.</li>
          </ul>` },
        { t: "First report of phages", html: `<p>Cholera outbreak, 1892: people who drank "holy water" from the Ganges were cured — the water was full of bacteriophages that killed <i>Vibrio cholerae</i>.</p>` },
      ],
    },
    {
      title: "2 · Life cycles",
      src: "Slides 13–15, 45–48",
      cards: [
        { t: "Lytic cycle (6 steps)", html: `
          <div class="flow"><span>1 Recognition</span><i>→</i><span>2 Binding</span><i>→</i><span>3 Injection of DNA/RNA</span><i>→</i><span>4 Replication of genome</span><i>→</i><span>5 Production of phage proteins</span><i>→</i><span>6 Assembly + lysis</span></div>
          <p>Phages bind to specific receptors on the cell wall (different for Gram-positive and Gram-negative bacteria) → high <b>host specificity</b>.</p>` },
        { t: "Lysogenic cycle", html: `
          <ul>
            <li>The phage genome <b>integrates</b> into the bacterial chromosome as a <span class="key">prophage</span> and is copied along with it; requires a phage-encoded <b>integrase</b>.</li>
            <li>Can later be induced to switch to the lytic cycle (e.g. lytic phage MS2 can induce lysogenic phage λ).</li>
            <li>A lysogen is resistant to related phages → <b>superinfection exclusion</b> (see defences).</li>
          </ul>` },
      ],
    },
    {
      title: "3 · Phage therapy",
      src: "Slides 16–24, 41",
      cards: [
        { t: "History", html: `<p>1892 "holy water" → 1917 d'Hérelle discovers an anti-<i>Shigella</i> "microbe" → 1919 Salmonella-infected chickens treated → 1921 five patients treated against <i>Shigella</i> → 1927 first clinical trials for cholera → 1928 discovery of antibiotics (age of antibiotics) → 2014 antibiotic resistance declared a crisis → resurgence of phage therapy.</p>` },
        { t: "Advantages of phages as antibiotics", html: `
          <ul>
            <li>Drugs that <b>amplify themselves</b> at the infection site</li>
            <li>Not harmful to humans; cleared by the body; fewer side effects</li>
            <li>Can be <b>highly specific</b> → keeps the microbiome intact (host range varies markedly)</li>
          </ul>` },
        { t: "Problem: evolution of resistance", html: `<p>After phage addition bacterial counts (CFU) crash, but resistant mutants regrow within hours while free phage (PFU) keeps rising then plateaus. Dynamics in a host can vary wildly.</p>` },
        { t: "Resistance comes at a cost (trade-offs)", html: `
          <ul>
            <li>Phages that bind <b>efflux pumps</b>: resistant mutants lose/alter the pump → <span class="key">more susceptible to antibiotics</span> → argument for combination therapy.</li>
            <li>Phages that bind <b>virulence factors</b> (LPS O1 antigen, capsule): resistant mutants become <b>less virulent</b>.</li>
          </ul>` },
      ],
    },
    {
      title: "4 · Bacterial defences and phage counter-defences",
      src: "Slides 25–48, 81–91",
      cards: [
        { t: "Overview — know this table", html: `
          <table><tr><th>Stage</th><th>Bacterial defence</th><th>Phage counter</th></tr>
          <tr><td>Adsorption</td><td>Mutate / mask receptor (efflux pumps, porins, flagella, pili)</td><td>"Adapted" phage recognises the mutated receptor</td></tr>
          <tr><td>Adsorption</td><td>Biofilm: extracellular polysaccharide (EPS) matrix traps phage</td><td>Phage secretes matrix-degrading enzymes (depolymerases)</td></tr>
          <tr><td>Adsorption</td><td>Outer membrane vesicles (OMVs) as decoys</td><td>—</td></tr>
          <tr><td>Adsorption</td><td>Modify pilus</td><td>Phage prefers / degrades the modification</td></tr>
          <tr><td>DNA entry</td><td>Superinfection exclusion (SIE) by resident prophage</td><td>—</td></tr>
          <tr><td>Inside cell</td><td>Restriction–modification (R-M)</td><td>Modified bases, masking proteins, own methylase, anti-restriction proteins, loss of sites</td></tr>
          <tr><td>Inside cell</td><td>CRISPR-Cas (adaptive)</td><td>Escape mutations in protospacer (spacer diversity limits this)</td></tr>
          <tr><td>Last resort</td><td>Abortive infection (Rex, toxin–antitoxin)</td><td>—</td></tr>
          <tr><td>Physical</td><td>Shed cell wall (cell-wall-deficient cells)</td><td>—</td></tr></table>
          <p>Constant attack and counter-attack = <span class="key">coevolution</span>. That's why not all bacteria are resistant and phages persist.</p>` },
        { t: "Blocking adsorption: receptors and biofilm", html: `
          <ul>
            <li>Receptors used by phages: efflux pumps, porins, flagella, pili, LPS, capsule.</li>
            <li>Host mutates the receptor → phage can't bind; second-generation "adapted" phage recognises the mutated receptor.</li>
            <li><b>Biofilm</b>: consortium of cells embedded in an extracellular (EPS) matrix. Life cycle: single cell lands → aggregation/attachment → growth + matrix production → mature biofilm → dispersal. Phages get stuck in the matrix; some phages secrete enzymes to degrade it.</li>
            <li><b>OMVs</b>: outer membrane vesicles carrying receptors act as decoys.</li>
          </ul>` },
        { t: "Superinfection exclusion (SIE)", html: `
          <p>"A pre-existing viral infection prevents a secondary infection with the same or a closely related virus." A resident (lysogenic) prophage blocks DNA entry of new phages, e.g. T4 proteins <b>Imm</b> (blocks DNA translocation) and <b>Sp</b> (blocks peptidoglycan degradation). Works best against <i>homotypic</i> phages.</p>
          <p>Example: bacteria with integrated phage "Pablito" are resistant to Pablito (needs an integrase to be lysogenic).</p>` },
        { t: "Restriction–modification (R-M)", html: `
          <ul>
            <li>Innate defence that distinguishes <b>self from non-self</b> DNA.</li>
            <li><b>Restriction</b>: endonuclease cuts both strands at specific recognition sites in foreign DNA.</li>
            <li><b>Modification</b>: a methyltransferase methylates the same sites in the host's own DNA → protected.</li>
            <li>Sites are <span class="key">palindromic</span>, e.g. BamHI: <span class="mono">5′-GGATCC-3′ / 3′-CCTAGG-5′</span>; EcoRI: GAATTC.</li>
            <li>~90% of genomes have ≥1 R-M system, ~80% have multiple; &gt;19,000 known systems.</li>
            <li>Site length determines expected frequency (4-cutter every 4<sup>4</sup>=256 bp; 6-cutter every 4<sup>6</sup>=4096 bp). More sites per phage genome = more efficient restriction.</li>
            <li>Basis of recombinant DNA technology.</li>
          </ul>
          <p><b>Phage counter-strategies:</b> (1) unusual/modified bases, (2) masking proteins hiding sites, (3) stimulate host methylase or encode their own, (4) anti-restriction proteins; also losing recognition sites by point mutation (e.g. staphylococcal phage K lacks GATC sites).</p>
          <div class="exam">If a phage escapes restriction once, its progeny DNA becomes methylated by the host and is then protected against that same R-M system.</div>` },
        { t: "Abortive infection — cellular suicide", html: `
          <ul>
            <li><b>Rex system</b> (λ lysogens): phage DNA binds and activates <b>RexA</b> → RexA turns on <b>RexB</b> → pores in the membrane → cell dies before phages are produced.</li>
            <li><b>Toxin–antitoxin (TA)</b>: cell makes both in equal amounts; phage infection inhibits the antitoxin → free toxin → cell death.</li>
            <li>Altruistic: the infected cell dies, protecting the clonal population.</li>
          </ul>` },
        { t: "Cell-wall deficiency (CWD) as escape", html: `
          <ul>
            <li>Many phages target the cell wall. <i>Streptomyces</i>, <i>E. coli</i> and <i>B. subtilis</i> can shed their wall after phage infection (Ongenae et al. 2021).</li>
            <li>In <b>osmoprotective</b> (high-sugar) medium: more colonies survive, fewer phages produced.</li>
            <li>Cost: wall-deficient cells are very fragile and need an osmoprotective environment; but they are also resistant to wall-targeting antibiotics.</li>
          </ul>` },
        { t: "Many more systems", html: `<p>BREX, Zorya, Thoeris, Druantia, Hachiman, Shedu, Gabija, Septu, Lamassu, Kiwa, Wadjet, … — bacteria have numerous, redundant defence strategies.</p>` },
      ],
    },
    {
      title: "5 · CRISPR-Cas: adaptive immunity in prokaryotes",
      src: "Slides 62–79",
      cards: [
        { t: "What is CRISPR?", html: `
          <ul>
            <li><b>C</b>lustered <b>R</b>egularly <b>I</b>nterspaced <b>S</b>hort <b>P</b>alindromic <b>R</b>epeats.</li>
            <li>Present in ~<b>50% of bacteria</b> and <b>&gt;90% of archaea</b>.</li>
            <li>Immune <span class="key">memory</span>: acquired during the cell's lifetime (like our adaptive immune system) and <b>inherited</b> by daughter cells.</li>
            <li>CRISPR array = species-specific <b>repeats</b> alternating with <b>spacers</b>; spacers match phage/plasmid sequences — that match was the first hint of its function. Flanked by <b>cas</b> genes.</li>
          </ul>` },
        { t: "Three stages", html: `
          <ol>
            <li><b>Adaptation</b>: the <span class="key">Cas1–Cas2</span> complex selects a piece of foreign DNA (protospacer) and integrates it as a new spacer at the array.</li>
            <li><b>crRNA maturation (expression)</b>: the array is transcribed into a long pre-crRNA, processed by Cas proteins (in type II with tracrRNA + RNase III) into mature crRNAs.</li>
            <li><b>Interference</b>: crRNA guides Cas nucleases (e.g. Cas9) to the matching foreign nucleic acid, which is cleaved.</li>
          </ol>` },
        { t: "Class 1 vs Class 2", html: `
          <table><tr><th></th><th>Class 1</th><th>Class 2</th></tr>
          <tr><td>Effector</td><td>multi-protein complex, lots of Cas genes</td><td>single protein (e.g. Cas9)</td></tr>
          <tr><td>Architecture</td><td>highly variable</td><td>simpler, less variable</td></tr>
          <tr><td>Occurrence</td><td>bacteria and archaea</td><td>almost exclusively bacteria</td></tr>
          <tr><td>Use</td><td>—</td><td>better suited for genome editing</td></tr></table>
          <p>cas1 and cas2 (the adaptation module) are shared across systems.</p>` },
        { t: "Key experiment: Barrangou et al. 2008 (Science)", html: `
          <ul>
            <li><i>Streptococcus thermophilus</i> (dairy) exposed to phages 858 and 2972.</li>
            <li>Resistant survivors had acquired <b>new spacers</b> matching one or both phages; WT without new spacers = 100% sensitive.</li>
            <li>Deleting the new spacer or <b>cas9</b> abolished resistance; deleting <b>cas4</b>-region didn't. Cas9-deficient strains also lacked the ability to acquire spacers.</li>
            <li>→ Proved CRISPR provides acquired, sequence-specific immunity.</li>
          </ul>` },
        { t: "Spacer diversity drives phage extinction", html: `<p>Diversity arises within a cell (repeated exposure) and between cells (each acquires different spacers). With many strains carrying diverse spacers, phages <b>go extinct</b> because they cannot evolve escape mutations against all spacers at once; without CRISPR, phages persist.</p>` },
        { t: "CRISPR-Cas9 for genome editing", html: `<p>Doudna & Charpentier (Nobel Prize 2020) turned the class 2 Cas9 system into a programmable genome-editing tool: a guide RNA directs Cas9 to cut a chosen target sequence.</p>` },
      ],
    },
  ],
  takeHome: [
    "Bacteria are constantly under attack by bacteriophages (~10^31 viruses on Earth)",
    "Bacteria evolve defences: hide/mutate receptors, restriction–modification, CRISPR, abortive infection, CWD, and many more",
    "Being resistant comes at a cost (trade-off), e.g. antibiotic sensitivity or reduced virulence",
    "Phages adapt too → coevolution",
  ],
  questions: [
    { type: "mc", q: "Phages with genomes larger than ~200 kb are called…", options: ["jumbo phages", "virophages", "prophages", "temperate phages"], answer: 0, src: "Slide 9" },
    { type: "mc", q: "What is the estimated total number of viruses on Earth?", options: ["~10^31", "~10^19", "~10^10", "~10^50"], answer: 0, explain: "10^10 is per litre of seawater; 10^19 is the number of sand grains.", src: "Slide 7" },
    { type: "mc", q: "Which step is unique to the lysogenic cycle?", options: ["Integration of the phage genome into the host chromosome", "Binding to a receptor", "Injection of DNA", "Assembly of new capsids"], answer: 0, explain: "Requires an integrase; the integrated phage is a prophage.", src: "Slides 45–47" },
    { type: "mc", q: "A resistant mutant against a phage that uses an efflux pump as receptor is likely to…", options: ["become more susceptible to antibiotics", "become more virulent", "lose its CRISPR array", "become lysogenic"], answer: 0, explain: "Trade-off: altering the pump reduces antibiotic efflux → supports combination therapy.", src: "Slide 41" },
    { type: "mc", q: "Superinfection exclusion means that…", options: ["a pre-existing viral infection prevents a secondary infection by the same or a related virus", "bacteria exclude all phages by forming biofilms", "phages kill the host before others can infect", "CRISPR prevents infection by any phage"], answer: 0, src: "Slide 43" },
    { type: "mc", q: "How does a bacterium protect its own DNA from its restriction enzymes?", options: ["By methylating the recognition sites", "By lacking any recognition sites", "By coating its DNA with Cas proteins", "By keeping the restriction enzyme in the periplasm"], answer: 0, src: "Slide 54" },
    { type: "mc", q: "Restriction-enzyme recognition sites such as GGATCC are typically…", options: ["palindromic", "AT-rich repeats", "always 12 bp long", "located only in promoters"], answer: 0, src: "Slide 55" },
    { type: "mc", q: "Approximately what share of prokaryotic genomes carries at least one R-M system?", options: ["~90%", "~50%", "~10%", "100%"], answer: 0, src: "Slide 53" },
    { type: "mc", q: "Which is NOT a phage counter-strategy against restriction–modification?", options: ["Integrating new spacers into the host array", "Using modified bases", "Expressing its own methylase", "Masking restriction sites with proteins"], answer: 0, explain: "Spacer acquisition is the host's CRISPR adaptation step.", src: "Slide 60" },
    { type: "mc", q: "During CRISPR adaptation, which complex integrates new spacers?", options: ["Cas1–Cas2", "Cas9–tracrRNA", "RexA–RexB", "RNase III"], answer: 0, src: "Slide 65" },
    { type: "mc", q: "CRISPR-Cas systems are found in about…", options: ["50% of bacteria and >90% of archaea", "90% of bacteria and 50% of archaea", "all bacteria and no archaea", "10% of bacteria and 10% of archaea"], answer: 0, src: "Slide 62" },
    { type: "mc", q: "Which statement about Class 2 CRISPR-Cas systems is correct?", options: ["They use a single effector protein and are better suited for genome editing", "They have many Cas genes and highly variable architecture", "They are mostly found in archaea", "They lack cas1 and cas2"], answer: 0, src: "Slides 67–68" },
    { type: "mc", q: "In Barrangou et al. (2008), what made S. thermophilus resistant to phage?", options: ["Acquisition of new spacers matching phage sequences", "Loss of the cas9 gene", "Methylation of the phage genome", "Formation of a biofilm"], answer: 0, explain: "Deleting cas9 abolished resistance.", src: "Slides 70–73" },
    { type: "mc", q: "In the Rex abortive-infection system…", options: ["phage DNA activates RexA, which activates RexB to form membrane pores", "RexB degrades phage DNA", "RexA methylates the host genome", "Rex proteins block phage adsorption"], answer: 0, src: "Slide 81" },
    { type: "mc", q: "In a toxin–antitoxin defence system, cell death after phage infection is triggered because…", options: ["the phage inhibits the antitoxin, freeing the toxin", "the phage produces the toxin", "the toxin is overexpressed by the CRISPR array", "the antitoxin is secreted out of the cell"], answer: 0, src: "Slide 82" },
    { type: "mc", q: "Why do cell-wall-deficient bacteria survive phage infection better in osmoprotective medium?", options: ["Without a wall the phage cannot properly attach/infect, and the medium prevents the fragile cells from bursting", "The sugar inactivates phages directly", "High sugar activates CRISPR", "Wall-deficient cells grow faster than phages replicate"], answer: 0, src: "Slides 84–87" },
    { type: "mc", q: "With high CRISPR spacer diversity in a population, phages tend to…", options: ["go extinct, because they cannot escape all spacers at once", "become lysogenic", "evolve faster and dominate", "switch to RNA genomes"], answer: 0, src: "Slides 74–75" },
    { type: "open", q: "Describe the three stages of CRISPR-Cas immunity.", answer: "1) Adaptation: Cas1–Cas2 capture a fragment of invading DNA (protospacer) and insert it as a new spacer at the leader end of the CRISPR array. 2) crRNA biogenesis/maturation: the array is transcribed into pre-crRNA, which is processed by Cas proteins (type II: tracrRNA + RNase III) into mature crRNAs each containing one spacer. 3) Interference: crRNA–Cas complex (e.g. Cas9) scans for complementary foreign DNA/RNA and cleaves it. Memory is heritable.", src: "Slide 65" },
    { type: "open", q: "Give four bacterial defence strategies against phages and for two of them a phage counter-strategy.", answer: "Receptor mutation/masking (counter: adapted phage recognising mutated receptor); biofilm/EPS matrix (counter: matrix-degrading enzymes); OMV decoys; superinfection exclusion; restriction–modification (counter: modified bases, own methylase, masking or anti-restriction proteins, loss of sites); CRISPR-Cas (counter: escape mutations / anti-CRISPR); abortive infection (Rex, toxin–antitoxin); cell-wall shedding.", src: "Slides 25–91" },
    { type: "open", q: "Discuss advantages and disadvantages of phage therapy compared with antibiotics.", answer: "Advantages: self-amplifying at the infection site, highly specific (microbiome kept intact), non-toxic to humans, cleared by the body, fewer side effects, active against antibiotic-resistant bacteria. Disadvantages: narrow/variable host range (need to match phage to strain), rapid evolution of resistance, immune clearance. Resistance can carry a fitness cost (e.g. efflux-pump phages restore antibiotic sensitivity, virulence-factor phages lower virulence), so combination therapy with antibiotics is attractive.", src: "Slides 16–41" },
    { type: "open", q: "Explain why restriction–modification allows a bacterium to discriminate self from non-self, and why a phage that escapes once can spread through the population.", answer: "The restriction enzyme cuts unmethylated recognition sites, while the cognate methyltransferase methylates those same sites in the host genome, so only foreign (unmethylated) DNA is cut. If a phage genome is accidentally methylated by the host methylase before it is cut, its progeny are methylated and immune to that R-M system; they can then infect neighbouring cells with the same R-M system until they pass through a host with a different system.", src: "Slides 46, 54" },
  ],
});
