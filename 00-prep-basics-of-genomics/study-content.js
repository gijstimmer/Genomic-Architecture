GA.register({
  id: "00",
  num: "00",
  short: "Basics of Genomics",
  title: "Basics of Genomics",
  titleHtml: "Basics of <em>Genomics</em>",
  lecturer: "Jo-Anne Verschoor",
  date: "Self-study prep (before 27 Oct)",
  slides: ["basics-of-genomics.pptx"],
  summary: "Self-study recap you are expected to know at the start: DNA structure, replication, the central dogma, prokaryotic vs eukaryotic gene expression, regulation and DNA packaging.",
  objectives: [
    "Describe DNA and explain its chemical structure",
    "Understand and explain DNA replication",
    "Explain the central dogma (DNA → RNA → protein)",
    "Explain the difference between prokaryotes and eukaryotes through the central dogma",
    "Name the different regulation mechanisms",
  ],
  sections: [
    {
      title: "1 · DNA: the building blocks",
      src: "Slides 4–11",
      cards: [
        { t: "Nucleotide = sugar + base + phosphate", html: `
          <ul>
            <li><b>Sugar:</b> <span class="key">deoxyribose</span> in DNA (no 2′-OH), <b>ribose</b> in RNA.</li>
            <li><b>Bases:</b> <span class="key">purines</span> (two rings) = A, G · <span class="key">pyrimidines</span> (one ring) = C, T (DNA) / U (RNA).</li>
            <li>Sugar + base = <i>nucleoside</i>; add a phosphate group → <i>nucleotide</i>.</li>
          </ul>
          <div class="exam">Mnemonic: "PURe As Gold" → purines are A and G; "CUT the PY" → C, U, T are pyrimidines.</div>` },
        { t: "Base pairing and the double helix", html: `
          <ul>
            <li>A pairs with T (2 H-bonds), G pairs with C (3 H-bonds) → GC-rich DNA is more stable.</li>
            <li>Always a <b>purine + pyrimidine</b>: purine+purine is too wide, pyrimidine+pyrimidine too narrow — only purine+pyrimidine gives the constant helix width seen in X-ray data.</li>
            <li>Strands are <b>antiparallel</b> (5′→3′ paired with 3′→5′).</li>
          </ul>` },
        { t: "History: DNA vs protein as the genetic material", html: `
          <p>For a long time it was not known that DNA carried the genetic units; there was an "arms race" between proponents of protein and of DNA as hereditary material, settled by the experiments leading up to the double-helix model (Watson & Crick, 1953, using Franklin's X-ray data).</p>` },
      ],
    },
    {
      title: "2 · Genomes and DNA replication",
      src: "Slides 14–18",
      cards: [
        { t: "Definitions: DNA, genome, genomics", html: `
          <ul>
            <li><b>DNA</b>: biological macromolecule of two long polymer strands carrying the genetic instructions for development, function, growth and reproduction.</li>
            <li><b>Genome</b>: the <span class="key">complete genetic make-up</span> of an organism or cell.</li>
            <li><b>Genomics</b>: biology of the structure, function, evolution and mapping of genomes ("what <i>may</i> happen").</li>
          </ul>
          <p>Compare: transcriptome = "what <i>can</i> happen", proteome = "what <i>should</i> happen".</p>` },
        { t: "Other facts about genomes", html: `
          <ul>
            <li>Only small parts of the genome code for proteins; the rest includes regulatory regions, targets, <b>pseudogenes</b>, <b>repeats</b> and expression machinery (rRNA, tRNA genes).</li>
            <li>Within a species, <span class="key">SNPs</span> (single-nucleotide polymorphisms) distinguish individuals — and can have large effects.</li>
          </ul>` },
        { t: "Replication fork — the enzymes", html: `
          <table><tr><th>Enzyme</th><th>Job</th></tr>
          <tr><td>Topoisomerase</td><td>relaxes supercoiled DNA ahead of the fork</td></tr>
          <tr><td>Helicase</td><td>unwinds the double helix</td></tr>
          <tr><td>Single-strand binding proteins</td><td>keep the separated strands apart</td></tr>
          <tr><td>Primase</td><td>makes a short RNA primer</td></tr>
          <tr><td>DNA polymerase III</td><td>main replicative polymerase (bacteria)</td></tr>
          <tr><td>DNA polymerase I</td><td>removes primers and fills the gaps</td></tr>
          <tr><td>Ligase</td><td>seals the nicks (joins Okazaki fragments)</td></tr></table>
          <p>Synthesis is <span class="key">always 5′→3′</span>, so one strand is made continuously (<b>leading</b>) and the other in Okazaki fragments (<b>lagging</b>).</p>
          <div class="exam">Replication is the basis of PCR (DNA amplification): primers + polymerase + dNTPs, repeated cycles.</div>` },
      ],
    },
    {
      title: "3 · Central dogma: transcription",
      src: "Slides 19–34",
      cards: [
        { t: "Central dogma (Crick, 1958)", html: `<div class="flow"><span>DNA</span><i>→ transcription →</i><span>RNA</span><i>→ translation →</i><span>protein</span></div><p>DNA also replicates itself; some viruses use RNA as their genetic material (and reverse transcription exists).</p>` },
        { t: "Prokaryotic genes", html: `
          <ul>
            <li>Gene layout: <b>promoter</b> → <b>ribosome binding site</b> (Shine–Dalgarno) → start codon … stop codon → <b>terminator</b>.</li>
            <li>RNA polymerase + <span class="key">sigma factor</span> recognises the promoter.</li>
            <li>Genes are often clustered in <span class="key">operons</span> → <b>polycistronic mRNA</b> (one mRNA, several proteins).</li>
            <li>Small promoters, regulatory elements upstream of the operon.</li>
            <li>No nucleus → transcription and translation are coupled.</li>
          </ul>` },
        { t: "Eukaryotic genes", html: `
          <ul>
            <li><b>Single genes</b>, <b>monocistronic</b> mRNA.</li>
            <li>Large promoter regions (up to 1000s of bp); regulatory elements upstream, downstream and in introns/exons.</li>
            <li>Initiation needs a <span class="key">transcription initiation complex</span>: activators bound to distal <b>enhancers</b>, a DNA-bending protein brings them to the promoter (<b>TATA box</b>), mediator proteins + general transcription factors recruit <b>RNA polymerase II</b>.</li>
          </ul>` },
        { t: "RNA processing: cap, splicing, poly-A", html: `
          <ul>
            <li>Primary transcript = <b>pre-mRNA</b> (exons + introns).</li>
            <li><b>5′ cap</b> (modified G) added; <b>poly-A tail</b> added after cleavage downstream of the poly-A signal (AAUAAA).</li>
            <li><b>Splicing</b>: introns removed, exons joined. Exon → expressed; intron → removed.</li>
            <li>Mature mRNA: 5′ cap – 5′ UTR – coding segment (start→stop) – 3′ UTR – poly-A tail.</li>
            <li><span class="key">Alternative splicing</span> and alternative poly-adenylation → several proteins from one gene. DNA mutations can cause aberrant splicing.</li>
          </ul>` },
      ],
    },
    {
      title: "4 · Translation and mutations",
      src: "Slides 35–41",
      cards: [
        { t: "RNA, transcriptome and translation", html: `
          <ul>
            <li><b>Transcriptome</b>: all RNA transcripts (coding and non-coding) in a cell / collection of cells.</li>
            <li>Ribosome reads mRNA codons (triplets); tRNAs carry amino acids and pair via their <b>anticodon</b>.</li>
            <li>Genetic code: 64 codons, 61 sense + 3 stops (UAA, UAG, UGA); AUG = Met = start. The code is <b>redundant</b> (degenerate).</li>
            <li>Prokaryotes: translation in the cytoplasm, co-transcriptional. Eukaryotes: mRNA exported from nucleus, translated by cytosolic or ER-bound ribosomes.</li>
          </ul>` },
        { t: "Types of small-scale mutations", html: `
          <table><tr><th>Type</th><th>Effect</th></tr>
          <tr><td><b>Silent</b></td><td>substitution, same amino acid (redundant code)</td></tr>
          <tr><td><b>Missense</b></td><td>substitution → different amino acid</td></tr>
          <tr><td><b>Nonsense</b></td><td>substitution → premature stop codon</td></tr>
          <tr><td><b>Frameshift</b></td><td>insertion/deletion of 1 or 2 nt → reading frame shifts, usually garbage + early stop</td></tr>
          <tr><td>3-nt deletion</td><td>removes one amino acid, frame maintained</td></tr></table>` },
        { t: "Proteins and the proteome", html: `<p>Proteins are the "work horses": structure (muscle, hair), enzymes, antibodies. The <b>proteome</b> is the entire complement of proteins that is or can be expressed by a cell, tissue or organism.</p>` },
      ],
    },
    {
      title: "5 · Regulation and DNA packaging",
      src: "Slides 42–46",
      cards: [
        { t: "Regulation at every level of the central dogma", html: `
          <table><tr><th>Level</th><th>Mechanisms</th></tr>
          <tr><td>DNA / transcription</td><td>gene copy number, promoter activity, repression/induction by transcription factors, DNA methylation</td></tr>
          <tr><td>RNA / translation</td><td>mRNA lifetime, codon usage, tRNA levels, ribosome binding, alternative splicing, RNA interference</td></tr>
          <tr><td>Protein</td><td>protein turnover, chemical modification (phosphorylation), inhibition (blocking/degradation), allosteric change</td></tr></table>` },
        { t: "Chromosomes, histones, nucleosomes", html: `
          <ul>
            <li>~2 m of DNA per human cell is packed with <b>histones</b> into <b>nucleosomes</b> (DNA wrapped around a histone octamer) → chromatin → chromosomes.</li>
            <li>Histone modifications open or close chromatin and so regulate access.</li>
          </ul>` },
        { t: "Epigenetics", html: `<p><b>Epigenetics</b>: changes that regulate genome activity <span class="key">without changing the DNA sequence</span> — molecules attached to DNA/histones (e.g. methylation, acetylation) and compaction of the DNA. (The slides call these "non-hereditary"; note that some epigenetic marks <i>can</i> be passed on through cell divisions.)</p>` },
      ],
    },
  ],
  takeHome: [
    "DNA = deoxyribose + phosphate + bases; A–T and G–C pairing, purine with pyrimidine, antiparallel strands",
    "Replication is semi-conservative, 5′→3′, leading/lagging strand, with helicase, primase, Pol III, Pol I, ligase, topoisomerase",
    "Prokaryotes: operons, polycistronic mRNA, sigma factor, coupled transcription–translation",
    "Eukaryotes: monocistronic, large promoters/enhancers, RNA Pol II + initiation complex, cap/splicing/poly-A, alternative splicing",
    "Regulation can occur at DNA, RNA and protein levels; epigenetics changes activity, not sequence",
  ],
  questions: [
    { type: "mc", q: "Which bases are purines?", options: ["Adenine and guanine", "Cytosine and thymine", "Adenine and thymine", "Cytosine and uracil"], answer: 0, explain: "Purines have a double ring: A and G. Pyrimidines (single ring): C, T, U.", src: "Slide 7" },
    { type: "mc", q: "Why does a base pair always consist of one purine and one pyrimidine?", options: ["Only that combination gives the constant helix width observed by X-ray diffraction", "Purines cannot form hydrogen bonds with each other", "Pyrimidines are only found in RNA", "It is required for the 5′→3′ direction of synthesis"], answer: 0, explain: "Purine+purine is too wide and pyrimidine+pyrimidine too narrow.", src: "Slide 10" },
    { type: "mc", q: "Which enzyme removes RNA primers and fills the resulting gaps in bacterial DNA replication?", options: ["DNA polymerase I", "DNA polymerase III", "Primase", "Helicase"], answer: 0, explain: "Pol III does the bulk of replication; Pol I replaces primers; ligase seals.", src: "Slide 17" },
    { type: "mc", q: "Why is the lagging strand synthesised discontinuously?", options: ["DNA polymerase can only add nucleotides in the 5′→3′ direction", "Helicase only unwinds one strand", "The lagging strand has no origin of replication", "Primase only works on the leading strand"], answer: 0, explain: "Antiparallel strands + 5′→3′-only synthesis → Okazaki fragments on one strand.", src: "Slide 17" },
    { type: "mc", q: "A polycistronic mRNA is typical for…", options: ["a bacterial operon", "a eukaryotic gene with many introns", "mitochondrial tRNA genes only", "alternatively spliced eukaryotic transcripts"], answer: 0, explain: "Operons are transcribed as one mRNA that encodes several proteins.", src: "Slide 22" },
    { type: "mc", q: "Which factor directs bacterial RNA polymerase to the promoter?", options: ["Sigma factor", "TATA-binding mediator", "Poly-A polymerase", "Spliceosome"], answer: 0, src: "Slide 21" },
    { type: "mc", q: "Which feature is NOT part of a mature eukaryotic mRNA?", options: ["Introns", "5′ cap", "Poly-A tail", "5′ and 3′ UTRs"], answer: 0, explain: "Introns are spliced out of the pre-mRNA.", src: "Slide 30" },
    { type: "mc", q: "A single nucleotide substitution changes a codon into UAG. This is a…", options: ["nonsense mutation", "missense mutation", "silent mutation", "frameshift mutation"], answer: 0, explain: "UAG is a stop codon → premature termination.", src: "Slide 38" },
    { type: "mc", q: "Deleting exactly three nucleotides inside a coding sequence will most likely…", options: ["remove one amino acid while keeping the reading frame", "cause a frameshift", "always create a stop codon", "have no effect because the code is redundant"], answer: 0, src: "Slide 38" },
    { type: "mc", q: "Which of these is a regulatory mechanism at the RNA level?", options: ["RNA interference", "Phosphorylation", "Gene copy number", "Allosteric change"], answer: 0, explain: "Phosphorylation and allostery act on proteins; copy number on DNA.", src: "Slide 43" },
    { type: "mc", q: "Epigenetic regulation is best described as…", options: ["changes in genome activity without changes in DNA sequence", "point mutations in promoters", "horizontal transfer of regulatory genes", "alternative splicing caused by mutations"], answer: 0, src: "Slide 46" },
    { type: "mc", q: "What is a nucleosome?", options: ["DNA wrapped around a histone protein core", "A ribosome bound to mRNA", "The nucleolus inside the nucleus", "A cluster of tRNA genes"], answer: 0, src: "Slide 44" },
    { type: "open", q: "Give three differences between prokaryotic and eukaryotic gene expression.", answer: "(1) Prokaryotes: operons with polycistronic mRNA; eukaryotes: single genes, monocistronic mRNA. (2) Prokaryotes: small promoters, RNA pol + sigma factor; eukaryotes: large promoters/enhancers, RNA Pol II with general TFs, mediator, initiation complex. (3) Eukaryotes process pre-mRNA (5′ cap, splicing of introns, poly-A tail; alternative splicing); prokaryotes have no introns/processing in general. (4) Prokaryotes couple transcription and translation (no nucleus); in eukaryotes they are separated in nucleus and cytoplasm.", src: "Slides 21–34" },
    { type: "open", q: "Name the enzymes at the replication fork and their roles, in order of action.", answer: "Topoisomerase (relieves supercoiling) → helicase (unwinds) → single-strand binding proteins (stabilise ssDNA) → primase (RNA primer) → DNA Pol III (elongates 5′→3′; leading continuous, lagging as Okazaki fragments) → DNA Pol I (replaces primers) → ligase (joins fragments).", src: "Slide 17" },
    { type: "open", q: "Explain how alternative splicing increases the coding capacity of a genome.", answer: "One pre-mRNA can be spliced in different ways (exon skipping, alternative 5′/3′ splice sites, retained introns, alternative poly-A sites), producing several mRNA isoforms and thus several protein variants from a single gene — so the number of proteins can greatly exceed the number of genes.", src: "Slides 31–33" },
  ],
});
