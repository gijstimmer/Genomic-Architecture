GA.register({
  id: "01",
  num: "01",
  short: "Genome Diversity",
  title: "Genome Diversity, basis of life!",
  titleHtml: "Genome Diversity, <em>basis of life</em>",
  lecturer: "Han de Winde",
  date: "Tue 27 Oct 2026",
  slides: ["genome-diversity-basis-of-life-de-winde.pptx"],
  summary: "What 'genomic architecture' means, how many species and genomes there are, how prokaryotic and eukaryotic genomes differ in size and content, the endosymbiotic (hybrid) origin of eukaryotic genomes, and the mechanisms that drive genome evolution.",
  objectives: [
    "Give both definitions of genomic architecture (Koonin; Zalenski)",
    "Know the order of magnitude of species numbers, gene numbers and genome sizes",
    "Explain core vs accessory genes and the pangenome",
    "Explain why eukaryotes have hybrid genomes (endosymbiosis)",
    "Name the mechanisms of genome evolution and define ortholog / paralog / homolog",
  ],
  sections: [
    {
      title: "1 · What is genomic architecture?",
      src: "Slides 2–3, 62–63",
      cards: [
        { t: "Two definitions — know both", html: `
          <p><b>Koonin (2009):</b> genomic architecture is <span class="key">the totality of non-random arrangements of functional elements</span> (genes, regulatory regions, etc.) in the genome.</p>
          <p><b>Zalenski (1998):</b> genomic architecture is</p>
          <ul><li>the <b>spatial arrangement of chromosomes</b> within the nuclear volume, and</li>
          <li>the <b>relative linear organisation of DNA sequences</b> of different types (unique, repetitive, …).</li></ul>
          <div class="exam">The lecture opens and closes with these definitions — a likely open-question starter ("Define genomic architecture and give an example").</div>` },
        { t: "Recap of the basics (central dogma)", html: `<p>Slides 4–13 recap DNA/RNA bases, replication, the genetic code, translation, mutation types, eukaryotic gene structure and nucleosomes. See <a href="../00-prep-basics-of-genomics/study.html">Lecture 00 — Basics of Genomics</a>.</p>` },
      ],
    },
    {
      title: "2 · How much diversity is there?",
      src: "Slides 14–27",
      cards: [
        { t: "Number of species (Mora et al. 2011, PLoS Biol)", html: `
          <ul>
            <li>~<b>8.7 million</b> eukaryotic species, of which ~2.2 million marine.</li>
            <li>Only ~<b>1.7 million</b> described.</li>
            <li>~<b>86%</b> of land species and <b>91%</b> of ocean species are still undescribed.</li>
            <li>Including prokaryotes: <b>hundreds of millions to trillions</b> of species.</li>
          </ul>` },
        { t: "Tree of life: three domains", html: `<p>Bacteria, Archaea and Eukarya. Prokaryotes (Bacteria + Archaea) have the <b>largest biochemical and structural diversity</b>.</p>` },
        { t: "Gene numbers in prokaryotes", html: `
          <ul>
            <li>Bacteria/archaea: <span class="key">~500 – 6000 genes</span>.</li>
            <li>Largest known bacterial genome: myxobacterium <i>Sorangium cellulosum</i> — circular chromosome of 13.0 Mbp, 9367 predicted protein-coding genes.</li>
          </ul>` },
        { t: "Shared gene families, core vs accessory genes, pangenome", html: `
          <ul>
            <li>&gt;200 gene families are common to all branches of the tree of life.</li>
            <li><b>Core genes</b>: present in all members of a species; essential cellular functions.</li>
            <li><b>Accessory genes</b>: present in some members; adaptive/beneficial traits, shaping diversity and evolutionary potential.</li>
            <li>Core + accessory = the <span class="key">pangenome</span>. Specialisation → speciation.</li>
          </ul>` },
      ],
    },
    {
      title: "3 · Prokaryotic and eukaryotic cells",
      src: "Slides 28–37",
      cards: [
        { t: "Bacterial cell", html: `<p>Nucleoid (no nucleus) with a usually circular chromosome, ribosomes, plasma membrane, cell wall, capsule, fimbriae, flagella. Model organism: <i>E. coli</i>.</p>` },
        { t: "Eukaryotic cell", html: `<p>Nucleus with chromatin and nucleolus, ER, Golgi, mitochondria, (chloroplasts in plants), lysosomes, peroxisomes, cytoskeleton.</p>` },
        { t: "Endosymbiosis → eukaryotes have hybrid genomes", html: `
          <ul>
            <li>Mitochondria (from an α-proteobacterium) and chloroplasts (from a cyanobacterium) derive from engulfed bacteria.</li>
            <li>Eukaryotic genetic information has a dual origin: an ancestral (anaerobic) host cell <b>+</b> bacteria → <span class="key">hybrid genome</span>.</li>
            <li>Organelle genomes are <b>degenerate, reduced</b> versions of bacterial genomes; many genes moved to the nuclear genome.</li>
            <li>Human mtDNA: <b>16,569 bp</b>, encoding <b>13 proteins, 2 rRNAs, 22 tRNAs</b>. Yeast mtDNA: ~78,000 bp.</li>
          </ul>` },
      ],
    },
    {
      title: "4 · Genome size diversity",
      src: "Slides 38–45",
      cards: [
        { t: "Genome sizes span orders of magnitude", html: `
          <p>Compared with a typical bacterium the human genome has:</p>
          <ul>
            <li>~<b>1000×</b> as many base pairs,</li>
            <li>~<b>20×</b> as many genes,</li>
            <li>~<b>10,000×</b> as much non-coding DNA.</li>
            <li>~<b>98%</b> of the human genome is non-coding vs ~<b>11%</b> in <i>E. coli</i>.</li>
          </ul>
          <div class="exam">Genome size does not scale with organism complexity (the "C-value paradox"): extra size is mostly non-coding and repetitive DNA.</div>` },
        { t: "Eukaryotic model organisms", html: `<table><tr><th>Organism</th><th>Group</th></tr>
          <tr><td><i>Saccharomyces cerevisiae</i></td><td>baker's yeast (unicellular fungus)</td></tr>
          <tr><td><i>Arabidopsis thaliana</i></td><td>thale cress (plant)</td></tr>
          <tr><td><i>Caenorhabditis elegans</i></td><td>nematode</td></tr>
          <tr><td><i>Drosophila melanogaster</i></td><td>fruit fly</td></tr>
          <tr><td><i>Homo sapiens</i></td><td>us</td></tr></table>` },
      ],
    },
    {
      title: "5 · How do genomes evolve?",
      src: "Slides 47–60",
      cards: [
        { t: "Mutations are key", html: `
          <ul>
            <li>Genome alterations come from failures in <b>copying and maintaining DNA</b>; replication and repair are extremely accurate but not perfect.</li>
            <li>In bacteria, "magic by numbers": huge populations and fast generation times mean even rare mutations occur often.</li>
          </ul>` },
        { t: "Mechanisms of genome change", html: `
          <ul>
            <li><b>Point mutations</b> (substitutions, small indels)</li>
            <li><b>Genome rearrangements</b>: inversions, translocations, deletions, duplications (e.g. genome alignment of eight <i>Yersinia</i> isolates)</li>
            <li><b>Transposons</b> (mobile genetic elements, "jumping genes")</li>
            <li><b>Horizontal gene transfer (HGT)</b></li>
            <li><b>Gene duplication</b> — an important source of genetic novelty</li>
          </ul>` },
        { t: "Ortholog, paralog, homolog", html: `
          <table><tr><th>Term</th><th>Definition</th></tr>
          <tr><td><b>Orthologs</b></td><td>genes in two <i>different species</i> derived from the same ancestral gene in their last common ancestor (separated by <b>speciation</b>)</td></tr>
          <tr><td><b>Paralogs</b></td><td>related genes resulting from a <b>gene duplication</b> within a single genome</td></tr>
          <tr><td><b>Homologs</b></td><td>genes related by descent in either way (umbrella term)</td></tr></table>
          <p>Gene duplication gives rise to <b>gene families</b> (e.g. the globin family). Gene evolution is traced by sequence comparison: conserved sequences reveal relationships.</p>
          <div class="exam">Classic exam question: give the definitions and draw a tree with a duplication and a speciation event, then label orthologs vs paralogs.</div>` },
      ],
    },
  ],
  takeHome: [
    "Genomic architecture = non-random arrangement of functional elements (Koonin) / spatial + linear organisation of DNA (Zalenski)",
    "~8.7 M eukaryotic species, most undescribed; prokaryotes far more diverse",
    "Prokaryotes 500–6000 genes; pangenome = core + accessory genes",
    "Eukaryotic genomes are hybrids: mitochondria and chloroplasts are reduced bacterial genomes",
    "Human vs bacterium: 1000× bp, 20× genes, 10,000× non-coding DNA (98% vs 11% non-coding)",
    "Genomes evolve via mutations, rearrangements, transposons, HGT and gene duplication; know orthologs/paralogs/homologs",
    "To do: complete the Basic Knowledge self-test in Brightspace",
  ],
  questions: [
    { type: "mc", q: "According to Koonin (2009), genomic architecture is…", options: ["the totality of non-random arrangements of functional elements in the genome", "the 3D structure of the nucleus only", "the total number of base pairs in a genome", "the set of all genes shared by a species"], answer: 0, src: "Slide 2" },
    { type: "mc", q: "Approximately how many eukaryotic species are estimated to exist (Mora et al. 2011)?", options: ["~8.7 million", "~1.7 million", "~870,000", "~87 million"], answer: 0, explain: "~1.7 million are described; ~8.7 million estimated.", src: "Slide 18" },
    { type: "mc", q: "The typical range of gene numbers in bacteria and archaea is…", options: ["500 – 6000", "50 – 500", "6000 – 20,000", "20,000 – 25,000"], answer: 0, src: "Slide 21" },
    { type: "mc", q: "The pangenome of a species consists of…", options: ["core genes plus accessory genes", "only the genes essential for life", "all genes in all species of a genus", "nuclear plus mitochondrial genes"], answer: 0, src: "Slide 27" },
    { type: "mc", q: "Why are eukaryotic genomes called 'hybrid' genomes?", options: ["Their genetic information derives from an ancestral host cell plus endosymbiotic bacteria", "They contain both DNA and RNA genes", "They result from hybridisation between two species", "They have both linear and circular chromosomes by default"], answer: 0, src: "Slides 36–37" },
    { type: "mc", q: "The human mitochondrial genome encodes…", options: ["13 proteins, 2 rRNAs and 22 tRNAs", "37 proteins and no RNAs", "about 1000 proteins", "only tRNAs"], answer: 0, explain: "16,569 bp; 13 + 2 + 22 = 37 genes.", src: "Slide 37" },
    { type: "mc", q: "Roughly what percentage of the human genome is non-coding, compared with E. coli?", options: ["~98% vs ~11%", "~50% vs ~50%", "~75% vs ~2%", "~11% vs ~98%"], answer: 0, src: "Slide 40" },
    { type: "mc", q: "Compared with a typical bacterium, the human genome has about…", options: ["1000× more bp but only ~20× more genes", "20× more bp and 1000× more genes", "the same number of genes", "10× more bp and 10× more genes"], answer: 0, src: "Slide 40" },
    { type: "mc", q: "Two genes in human and mouse that derive from a single gene in their last common ancestor are…", options: ["orthologs", "paralogs", "pseudogenes", "transposons"], answer: 0, src: "Slide 55" },
    { type: "mc", q: "α-globin and β-globin within the human genome arose by duplication. They are…", options: ["paralogs", "orthologs", "xenologs from HGT", "alleles"], answer: 0, src: "Slides 55–57" },
    { type: "mc", q: "Which is described as an important source of genetic novelty during evolution?", options: ["Gene duplication", "DNA ligation", "Polyadenylation", "Codon redundancy"], answer: 0, src: "Slide 54" },
    { type: "mc", q: "Which organism has the largest known bacterial genome mentioned in the lecture?", options: ["Sorangium cellulosum", "Escherichia coli", "Mycoplasma genitalium", "Bacillus subtilis"], answer: 0, explain: "~13 Mbp, 9367 predicted genes.", src: "Slide 22" },
    { type: "open", q: "Give the two definitions of genomic architecture discussed in the lecture and give one example of a non-random arrangement of functional elements.", answer: "Koonin: the totality of non-random arrangements of functional elements (genes, regulatory regions) in the genome. Zalenski: the spatial arrangement of chromosomes in the nucleus and the relative linear organisation of DNA sequence types (unique, repetitive). Examples: bacterial operons (co-regulated genes clustered), gene clusters for secondary metabolites, synteny/conserved gene order, origin/terminus organisation of bacterial chromosomes.", src: "Slides 2–3" },
    { type: "open", q: "Define orthologs, paralogs and homologs and explain how they arise.", answer: "Homologs: genes related by common descent (umbrella). Orthologs: homologs in different species that diverged by a speciation event from one gene in the last common ancestor. Paralogs: homologs that arose by gene duplication within one genome; after duplication one copy can diverge and gain new function, giving gene families.", src: "Slide 55" },
    { type: "open", q: "List the main mechanisms by which genomes evolve.", answer: "Point mutations (replication/repair errors), small insertions/deletions, genome rearrangements (inversions, translocations, large deletions), gene and genome duplication, transposons/mobile elements, horizontal gene transfer; plus selection and drift acting on that variation.", src: "Slides 48–56" },
    { type: "open", q: "Explain the evidence that eukaryotic organelle genomes have a bacterial origin.", answer: "Mitochondria and chloroplasts have their own small circular genomes that resemble reduced bacterial genomes; their genes are phylogenetically related to α-proteobacteria / cyanobacteria; they have bacterial-type ribosomes; many of their original genes have been transferred to the nucleus (endosymbiotic gene transfer), leaving degenerate, reduced organelle genomes (e.g. human mtDNA 16.6 kb, 37 genes).", src: "Slides 32–37" },
  ],
});
