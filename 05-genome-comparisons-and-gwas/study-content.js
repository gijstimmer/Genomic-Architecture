GA.register({
  id: "05",
  num: "05",
  short: "Genome Comparisons & GWAS",
  title: "Genome comparisons & GWAS",
  titleHtml: "Genome comparisons &amp; <em>GWAS</em>",
  lecturer: "Sjoerd Seekles",
  date: "Mon 2 Nov 2026",
  slides: ["genome-comparisons-and-gwas-seekles-2026.pdf", "older-versions/genome-comparisons-seekles-2022.pdf"],
  summary: "The bioinformatics pipeline from raw reads to a causal mutation: QC and trimming, assembly, annotation, reference mapping, variant calling and impact prediction; then comparing many strains (phylogeny, PLINK, Manhattan plots — the Penicillium roqueforti SORBUS example), bulked segregant analysis and QTL mapping, and why causality must be tested experimentally.",
  objectives: [
    "Describe the pipeline: FASTQ → QC/trimming → assembly (FASTA) → annotation (GFF3) → QC (BUSCO)",
    "Explain reference mapping (SAM/BAM), variant calling (VCF) and impact prediction (SnpEff)",
    "Distinguish SNP, SNV and genomic variant; know CDS, UTR, ORF, locus",
    "Design a multi-strain comparison using phylogeny and phenotype (GWAS, PLINK, Manhattan plot)",
    "Explain bulked segregant analysis and QTL mapping, and why causality must be verified",
  ],
  sections: [
    {
      title: "Part 1 · From raw reads to a genome",
      src: "Slides 8–22",
      cards: [
        { t: "Research example: Marta's UV mutant", html: `<p>Marta UV-mutagenised a lab yeast strain and found an interesting phenotype (e.g. a purple pigment). Question: <b>which genome change causes it?</b> → sequence the mutant. Start every analysis by knowing your organisms and your research question; reference genomes are on NCBI (GenBank). All-in-one tools: Geneious (user-friendly), Galaxy (modular); most tools are Linux-based.</p>` },
        { t: "File formats along the pipeline", html: `
          <table><tr><th>Format</th><th>Contains</th><th>Made by</th></tr>
          <tr><td><b>FASTQ</b></td><td>raw reads + per-base quality scores</td><td>sequencer</td></tr>
          <tr><td><b>FASTA</b></td><td>sequences (assembly: chromosomes/scaffolds/contigs)</td><td>assembler (SPAdes)</td></tr>
          <tr><td><b>GFF3</b></td><td>annotation: gene features and coordinates</td><td>AUGUSTUS / BRAKER2</td></tr>
          <tr><td><b>SAM / BAM</b></td><td>reads aligned to a reference (BAM = binary, sorted)</td><td>Bowtie2 + SAMtools</td></tr>
          <tr><td><b>VCF</b></td><td>variant calls (SNVs, indels)</td><td>FreeBayes / GATK HaplotypeCaller</td></tr></table>
          <div class="flow"><span>FASTQ</span><i>→ QC/trim →</i><span>FASTA</span><i>→ annotate →</i><span>GFF3</span></div>
          <div class="flow"><span>FASTQ</span><i>→ map to reference →</i><span>SAM/BAM</span><i>→ call variants →</i><span>VCF</span><i>→ SnpEff →</i><span>impact</span></div>` },
        { t: "Quality control and trimming", html: `
          <ul>
            <li><b>FastQC</b>: Illumina reads come from light pulses and a PCR-based method → errors; FastQC shows per-base quality (good vs bad runs).</li>
            <li><b>Read trimming</b> = shortening reads: remove low-quality bases/reads and known <span class="key">adapter sequences</span>.</li>
            <li>Why adapters end up in reads: adapters attach fragments to the flow cell and provide the primer site; when the fragment is shorter than the read length, the adapter on the opposite side is sequenced too.</li>
            <li>Tools: <b>BBDuk</b>, Trimmomatic, cutadapt. E.g. <span class="mono">bbduk.sh … ref=adapters.fa ktrim=r</span> (adapters), <span class="mono">maq=20</span> (min. average quality).</li>
          </ul>` },
        { t: "Genome assembly: de novo vs reference", html: `
          <ul>
            <li><b>De novo</b> assembly is like Lego: build the genome from overlapping reads without a template.</li>
            <li><b>Reference mapping</b> uses an existing genome as template — best if a (closely related) reference exists.</li>
            <li>Match the assembler to the read type: short-read, long-read, or <b>hybrid</b> assemblers.</li>
            <li>Key setting: <b>k-mer length</b> (genome-size dependent). Example: <span class="mono">spades.py -k 21,33,55,77 -1 R1.fastq -2 R2.fastq</span>.</li>
            <li>Result: FASTQ → <b>FASTA</b> (chromosomes, scaffolds, contigs).</li>
          </ul>` },
      ],
    },
    {
      title: "Part 2 · Annotation and terminology",
      src: "Slides 23–33",
      cards: [
        { t: "Gene annotation", html: `
          <ul>
            <li>Much harder than assembly, especially for eukaryotes (introns). <b>Transcriptome (RNA-seq) data helps immensely.</b></li>
            <li>Methods: <b>ab initio</b> (gene-model rules) and <b>evidence-based</b> (RNA-seq, proteins) — best is a <span class="key">combination</span>.</li>
            <li><b>BRAKER2 + AUGUSTUS</b>: mask repeats → align RNA-seq → BRAKER builds a training gene set → AUGUSTUS is trained on it and predicts genes using RNA-seq "hints". Settings matter here: use the right <span class="mono">--species</span>. Output: <b>GFF3</b>.</li>
          </ul>` },
        { t: "Annotation QC: IGV and BUSCO", html: `<ul><li>Visual check in <b>IGV</b> (Integrative Genomics Viewer).</li><li><b>BUSCO</b>: checks how many conserved, essential single-copy genes (expected for that lineage) are found in your annotation. Below ~<b>90%</b> → redo the annotation with different settings.</li></ul>` },
        { t: "Gene structure naming", html: `<ul><li><b>CDS</b>: coding sequence; <b>UTR</b>: untranslated region (5′ and 3′); introns; non-coding RNAs (ncRNA).</li><li><b>ORF</b>: everything between start and stop codon.</li><li><b>Locus</b>: any given section of the genome; plural <b>loci</b>.</li></ul>` },
        { t: "SNP vs SNV vs genomic variant", html: `
          <table><tr><th>Term</th><th>Meaning</th></tr>
          <tr><td><b>SNP</b></td><td>single-nucleotide change present in ≥1% of a species' population (natural variation, e.g. blood type)</td></tr>
          <tr><td><b>SNV</b></td><td>any single-nucleotide change, period — Marta's lab-made UV mutations are SNVs, not SNPs</td></tr>
          <tr><td><b>Genomic variant</b></td><td>all changes incl. larger indels and rearrangements (and SNVs) — safest but least precise</td></tr></table>` },
      ],
    },
    {
      title: "Part 3 · Comparing two genomes (mutant vs wild type)",
      src: "Slides 34–48",
      cards: [
        { t: "Map the mutant reads to the parental reference", html: `
          <ul>
            <li>Need: a <b>reference genome</b> (preferably the exact parental strain) + reads of your strain.</li>
            <li><b>Bowtie2</b> maps raw reads → SAM; <b>SAMtools</b> converts/sorts to BAM. Visualise in <b>IGV</b>.</li>
          </ul>` },
        { t: "Variant calling", html: `<p>A variant caller decides which differences are real variants; settings matter. <b>FreeBayes</b> = liberal (more calls), <b>GATK HaplotypeCaller</b> = strict. Output: <b>VCF</b>.</p>` },
        { t: "Prioritising candidate SNVs", html: `
          <ul>
            <li>With 1000 SNVs, make educated guesses: inside genes > outside genes; frameshift / premature stop (deleterious) > silent.</li>
            <li><b>SnpEff</b> classifies variants as high/low impact using the annotation file.</li>
            <li>Larger changes: whole-genome vs whole-genome alignment with <b>MUMmer/NUCmer</b>; <b>synteny plots</b> show conserved gene order and rearrangements.</li>
          </ul>` },
        { t: "Causality must be experimentally verified!", html: `
          <p>Marta found 10 SNVs, 2 in genes; one high-impact (early stop). Likely candidate — but <span class="key">not proven</span>. Verify by:</p>
          <ul><li>restoring the mutation back to wild type in the mutant, and/or</li><li>introducing the mutation into the wild-type parent</li></ul>
          <p>Nowadays usually with <b>CRISPR/Cas9</b> base editing.</p>
          <div class="exam">"Is Marta done?" — No. Correlation ≠ causation; always test with a reconstruction experiment.</div>` },
      ],
    },
    {
      title: "Part 4 · Many strains: GWAS and phylogeny",
      src: "Slides 50–62",
      cards: [
        { t: "Example: sorbate resistance in Penicillium roqueforti", html: `<p>34 isolates of the blue-cheese / dairy-spoilage fungus; 6 show high resistance to the preservative sorbic acid. Which gene(s) cause it? Genomes sequenced (Illumina), assembled (SPAdes), annotated (AUGUSTUS + RNA-seq). (Punt, Seekles et al. 2022, PLoS Genet)</p>` },
        { t: "Which strains to compare?", html: `
          <ol>
            <li>One high vs one low resistance strain — fast, but too many candidate differences.</li>
            <li>High vs low strain that are <b>closely related</b> — few background differences.</li>
            <li>Two high strains that are <b>unrelated</b> — shared variants likely relevant.</li>
          </ol>
          <p>Options 2 and 3 need a <b>phylogeny</b>: 16S/ITS (MEGA) or whole genomes → <b>OrthoFinder</b> (orthologues) → concatenated alignment (<b>MAFFT</b>) → tree with <b>RAxML</b> (1000 bootstraps).</p>
          <p>Multi-strain: use a <b>high-resistance strain as reference</b> (the trait is a gain; you look for something present in resistant strains and absent in others), compare one by one and overlap. All-vs-all is computationally demanding; phenotype and hypothesis should lead.</p>` },
        { t: "PLINK and Manhattan plots", html: `
          <ul>
            <li>Filter SNVs by impact (SnpEff), combine data.</li>
            <li><b>PLINK</b> links SNV presence to phenotype and calculates a <b>p-value per SNV</b>.</li>
            <li><b>Manhattan plot</b>: genomic position (x) vs −log₁₀(p) (y); peaks = associated loci.</li>
            <li>Result: <b>scaffold 43</b> (the SORBUS gene cluster) present in all resistant strains, absent in others. Deletion mutants SC1/SC2 became sorbate-sensitive → causality confirmed.</li>
          </ul>` },
      ],
    },
    {
      title: "Part 5 · Bulked segregant analysis and QTL mapping",
      src: "Slides 63–69",
      cards: [
        { t: "When you need it", html: `<p>If a strain has 1000–10,000+ unique SNVs (heavy mutagenesis or a wild isolate) and no other strain shares the phenotype, simple comparison fails → "clean up" the genome by crossing.</p>` },
        { t: "Bulked segregant analysis (BSA)", html: `
          <ol>
            <li>Mate the strain with the phenotype to a strain without it.</li>
            <li>Phenotype the offspring (<b>segregants</b>); pool positives (pool 1) and negatives (pool 2), ~50 per pool.</li>
            <li>Sequence each pooled DNA mixture.</li>
            <li>Unlinked SNVs: ~<b>50%</b> of reads in both pools. Causal SNV: ~<b>100%</b> in the positive pool, ~<b>0%</b> in the negative pool (linked neighbours show elevated frequencies too).</li>
          </ol>` },
        { t: "QTL mapping", html: `<p><b>Quantitative trait locus</b> mapping: locate the locus that causes the trait. With reads from both parents and both bulks, <b>QTL-seq</b> computes SNP-index differences along the genome → peak (e.g. Chr I ~4.8 Mb) narrows 10,000+ SNVs to a small region. Then: <b>test causality</b>.</p>` },
        { t: "Pipeline summary", html: `<div class="flow"><span>Research question</span><i>→</i><span>raw reads (QC, trim)</span><i>→</i><span>SPAdes + AUGUSTUS</span><i>→</i><span>Bowtie2 to reference</span><i>→</i><span>GATK → VCF</span><i>→</i><span>SnpEff / PLINK</span><i>→</i><span>BSA + QTL-seq</span><i>→</i><span>IGV / Manhattan plot</span><i>→</i><span>CRISPR validation</span></div>` },
      ],
    },
  ],
  takeHome: [
    "Know your research question and hypothesis first",
    "FASTQ → QC/trim (FastQC, BBDuk) → assemble (SPAdes, FASTA) → annotate (BRAKER2 + AUGUSTUS, GFF3) → BUSCO ≥ ~90%",
    "Compare to a reference: Bowtie2 → SAM/BAM → variant caller (GATK strict / FreeBayes liberal) → VCF → SnpEff impact",
    "SNP (≥1% population) ≠ SNV (any single change) ⊂ genomic variant",
    "Many strains: use phylogeny + phenotype to choose comparisons; PLINK p-values, Manhattan plot",
    "Many unique SNVs: bulked segregant analysis + QTL-seq",
    "Causality must always be verified experimentally (e.g. CRISPR/Cas9)",
  ],
  questions: [
    { type: "mc", q: "Which file format contains raw reads together with per-base quality scores?", options: ["FASTQ", "FASTA", "VCF", "GFF3"], answer: 0, src: "Slide 12" },
    { type: "mc", q: "Why must adapter sequences be trimmed from Illumina reads?", options: ["When a fragment is shorter than the read length, the adapter on the other side is read into the sequence", "Adapters are always low quality", "Adapters contain the sample barcode which must be hidden", "Assemblers cannot read the letter N"], answer: 0, src: "Slide 15" },
    { type: "mc", q: "Marta's lab-made UV mutant carries single-base changes. Officially these are…", options: ["SNVs", "SNPs", "QTLs", "structural variants"], answer: 0, explain: "SNPs must be present in ≥1% of a population.", src: "Slide 32" },
    { type: "mc", q: "Which tool combination is recommended for eukaryotic gene annotation?", options: ["BRAKER2 + AUGUSTUS with RNA-seq hints", "Bowtie2 + SAMtools", "FastQC + BBDuk", "PLINK + SnpEff"], answer: 0, src: "Slides 23–24" },
    { type: "mc", q: "A BUSCO score of 72% for your annotation suggests…", options: ["the annotation is incomplete; redo it with different settings", "the genome is contaminated", "the assembly has a high N50", "the organism has lost essential genes"], answer: 0, src: "Slide 25" },
    { type: "mc", q: "To find mutations in a mutant compared with its parent, you map the mutant's raw reads to the parental genome with…", options: ["Bowtie2", "SPAdes", "AUGUSTUS", "RAxML"], answer: 0, src: "Slides 35–36" },
    { type: "mc", q: "Which variant caller is described as 'strict'?", options: ["GATK HaplotypeCaller", "FreeBayes", "SnpEff", "MUMmer"], answer: 0, src: "Slide 38" },
    { type: "mc", q: "SnpEff is used to…", options: ["predict the impact of variants based on the annotation", "call variants from BAM files", "assemble genomes", "build phylogenetic trees"], answer: 0, src: "Slide 40" },
    { type: "mc", q: "Which tool aligns whole genomes to each other to detect large changes?", options: ["MUMmer / NUCmer", "Bowtie2", "FastQC", "Trimmomatic"], answer: 0, src: "Slide 41" },
    { type: "mc", q: "Marta finds a high-impact SNV causing an early stop codon. What must she do next?", options: ["Verify causality, e.g. by restoring/introducing the mutation with CRISPR/Cas9", "Publish: a stop codon is proof", "Re-run the variant caller with liberal settings", "Sequence with long reads"], answer: 0, src: "Slide 48" },
    { type: "mc", q: "In a Manhattan plot, the y-axis shows…", options: ["−log10(p-value) of association", "read coverage", "genome size", "allele frequency in the reference"], answer: 0, src: "Slide 59" },
    { type: "mc", q: "In the P. roqueforti study, why use a high-resistance strain as the reference?", options: ["Resistance is due to something present in resistant strains, so you look for elements unique to them", "High-resistance strains have better assemblies", "Low-resistance strains cannot be sequenced", "It reduces the number of SNPs to zero"], answer: 0, src: "Slides 57–58" },
    { type: "mc", q: "Which pipeline builds a whole-genome phylogeny as in the lecture?", options: ["OrthoFinder → MAFFT alignment → RAxML with bootstraps", "Bowtie2 → GATK → SnpEff", "SPAdes → AUGUSTUS → BUSCO", "FastQC → BBDuk → PLINK"], answer: 0, src: "Slide 56" },
    { type: "mc", q: "In bulked segregant analysis, a causal SNV is expected at…", options: ["~100% in the positive pool and ~0% in the negative pool", "~50% in both pools", "~0% in both pools", "~100% in both pools"], answer: 0, src: "Slide 66" },
    { type: "mc", q: "Bulked segregant analysis is most useful when…", options: ["one strain has thousands of unique SNVs and no other strain shares the phenotype", "you have 34 strains with the same phenotype", "you only need a genome assembly", "the organism cannot be crossed"], answer: 0, src: "Slide 64" },
    { type: "open", q: "Describe the bioinformatics pipeline from Illumina raw reads to a list of candidate causal mutations in a mutant strain, naming tools and file formats.", answer: "FASTQ → quality control (FastQC) → trimming of adapters/low-quality bases (BBDuk/Trimmomatic/cutadapt) → map reads to the parental reference genome (Bowtie2) → SAM → BAM, sort (SAMtools) → visualise (IGV) → call variants (GATK HaplotypeCaller strict / FreeBayes liberal) → VCF → annotate impact with SnpEff using the GFF3 annotation → prioritise high-impact variants inside genes (frameshift, stop) → verify causality experimentally (CRISPR/Cas9 reversion or introduction).", src: "Slides 12–48" },
    { type: "open", q: "Explain the difference between SNP, SNV and genomic variant.", answer: "SNP: single-nucleotide change present in at least ~1% of a species' population (natural, common variation). SNV: any single-nucleotide change regardless of frequency (e.g. lab-induced). Genomic variant: any change in the genome including SNVs, indels, larger deletions/insertions and rearrangements — broadest, least precise term.", src: "Slide 32" },
    { type: "open", q: "Explain how bulked segregant analysis and QTL mapping identify a causal locus.", answer: "Cross the strain with the trait to one without; phenotype many segregants; pool positive and negative segregants separately (~50 each); sequence the pools. Unlinked variants segregate randomly (~50% allele frequency in both pools); the causal variant (and tightly linked neighbours) is ~100% in the positive and ~0% in the negative pool. QTL-seq plots the difference in SNP index along the genome; the peak region marks the QTL, reducing thousands of SNVs to a small region whose candidates are then tested experimentally.", src: "Slides 65–68" },
    { type: "open", q: "You have 34 fungal isolates, 6 of them resistant to a preservative. Design a genome-comparison strategy to find the responsible gene(s).", answer: "Sequence, assemble and annotate all genomes; build a phylogeny (OrthoFinder → MAFFT → RAxML) to see relatedness; compare closely related resistant vs sensitive strains and/or unrelated resistant strains; use a resistant strain as reference and map/align the others (Bowtie2 + variant calling, NUCmer for large insertions/deletions); filter by impact (SnpEff); associate presence/absence with phenotype (PLINK, p-values, Manhattan plot) → candidate region (e.g. scaffold 43 / SORBUS cluster present only in resistant strains); confirm by deletion mutants losing resistance.", src: "Slides 50–62" },
  ],
});
