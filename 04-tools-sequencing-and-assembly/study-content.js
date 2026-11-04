GA.register({
  id: "04",
  num: "04",
  short: "Tools: Sequencing",
  title: "Tools for genomes: sequencing, assembly & sample prep",
  titleHtml: "Tools for genomes: <em>sequencing &amp; assembly</em>",
  lecturer: "Christiaan Henkel & Bastienne Vriesendorp; Yavuz Ariyurek (LGTC/LUMC)",
  date: "Fri 30 Oct 2026",
  slides: ["1-dna-sequencing-henkel-vriesendorp.pdf", "2-assembly-and-functional-genomics-henkel-vriesendorp.pdf", "3-ngs-sample-prep-ariyurek.pdf"],
  summary: "Three sequencing generations (Sanger, Illumina, PacBio, Nanopore) and when to use which; de novo genome assembly, contigs/scaffolds/N50 and why repeats make assembly hard; functional genomics (ChIP-seq, ATAC-seq, RNA-seq, single-cell and spatial transcriptomics); and the wet-lab side: extraction, QC, fragmentation, library prep, targeted sequencing.",
  objectives: [
    "Explain the principle, read length, throughput and errors of Sanger, Illumina, PacBio and Nanopore",
    "Choose the right platform for a research question",
    "Explain shotgun assembly, contigs, scaffolds, coverage and N50; name the three assembly problems",
    "Describe ChIP-seq, ATAC-seq, RNA-seq, scRNA-seq and spatial transcriptomics",
    "Describe the sample-prep workflow and its QC steps (260/280, 260/230, RIN)",
  ],
  sections: [
    {
      title: "Part A · DNA sequencing technologies",
      src: "Deck 1 (Henkel & Vriesendorp)",
      cards: [
        { t: "Read & generations", html: `
          <p>A <b>sequencing read</b> = the result of sequencing a single DNA fragment (a text file of ATCGs).</p>
          <table><tr><th>Generation</th><th>Reads</th><th>Platforms</th></tr>
          <tr><td>1st</td><td>single, short(ish) reads</td><td>Sanger (1977)</td></tr>
          <tr><td>2nd (NGS)</td><td>many, shorter reads</td><td>454 pyrosequencing (2005), Ion Torrent (2010), Solexa/<b>Illumina</b> SBS (2005), DNA nanoballs (MGI), SOLiD, Element avidity (2023)</td></tr>
          <tr><td>3rd (also NGS)</td><td>many, long reads, single molecules</td><td><b>PacBio</b> SMRT (2011), <b>Oxford Nanopore</b> (2014)</td></tr></table>` },
        { t: "Sanger sequencing (chain termination)", html: `
          <ul>
            <li>DNA polymerase copies the template; <span class="key">dideoxynucleotides (ddNTPs)</span> lack the 3′-OH and terminate synthesis → fragments of every length ending in a known base.</li>
            <li>Original: 4 separate reactions (ddA/T/C/G), radioactive labels, gel electrophoresis, 4 lanes. Automated: one reaction, 4 <b>fluorescent</b> labels, capillary electrophoresis.</li>
            <li>ABI 3730xl: 96 capillaries, read length <b>400–900 bp</b>, max 2.88 Mbp/day.</li>
            <li>Accurate and reliable → still the standard for <b>validation</b> (e.g. checking a single clone).</li>
          </ul>` },
        { t: "Illumina: sequencing by synthesis (SBS)", html: `
          <ol>
            <li><b>Library prep</b>: fragment DNA, ligate <b>adapters</b> (universal primer sites) to every fragment.</li>
            <li><b>Amplification</b>: bridge amplification on a flow cell → clusters of identical copies (signal boost).</li>
            <li><b>SBS</b>: fluorescently labelled reversible-terminator nucleotides added one per cycle; imaged; terminator removed; repeat.</li>
          </ol>
          <ul>
            <li>Reads are <span class="key">intrinsically short</span> (usually ≤2×150 bp): amplification is less reliable for long fragments; trade-off fragment length vs cluster density; reactions are never 100% efficient so clusters go <b>out of phase</b> after many cycles → quality drops along the read.</li>
            <li>Quality typically &gt;99.9% (<b>Q30</b>); throughput up to 16 Tbp per NovaSeq X run.</li>
            <li><b>Paired-end</b> reads: both ends of a fragment are read.</li>
            <li>Short reads are great for <b>quantitative</b> applications (counting molecules); long reads for <b>structural</b> ones (genomes, isoforms).</li>
          </ul>` },
        { t: "Third generation: no amplification", html: `
          <p>Why skip amplification? PCR is limited to thousands of nt, clusters lose sync, and amplification is biased (e.g. against GC-rich DNA). Third-gen sequences <b>single molecules</b>.</p>
          <ul>
            <li><b>PacBio SMRT</b>: polymerase in a zero-mode waveguide (millions of tiny wells) incorporates fluorescent nucleotides in real time. Reads up to ~30 kb. <b>Polymerase kinetics</b> reveal base modifications. HiFi (circular consensus) = Q30.</li>
            <li><b>Oxford Nanopore</b>: motor protein ratchets DNA through a protein nanopore in a membrane; changes in <b>ionic current</b> are basecalled by <b>neural networks</b>. MinION: 512 channels, ~500 nt/s, ~20 Gbp/flowcell. Read length up to 4 Mbp, limited only by DNA quality. Detects methylation directly; can sequence RNA directly.</li>
          </ul>
          <p>Trade-offs: single molecules are harder to detect → fewer reads, higher raw error; solved by reading the same molecule several times (HiFi Q30, Nanopore duplex Q20+).</p>` },
        { t: "Summary table (memorise)", html: `
          <table><tr><th></th><th>Sanger</th><th>Illumina</th><th>PacBio</th><th>Nanopore</th></tr>
          <tr><td>Principle</td><td>dideoxy chain termination</td><td>sequencing by synthesis</td><td>single-molecule real-time</td><td>nanopore current sensing</td></tr>
          <tr><td>Read length</td><td>&lt;900 bp</td><td>2×150 bp</td><td>~25 kbp HiFi</td><td>10 kbp – 4 Mbp</td></tr>
          <tr><td>Data</td><td>&lt;2.88 Mbp/day</td><td>7.5 Tbp/flowcell</td><td>100 Gbp</td><td>370 Gbp</td></tr>
          <tr><td>Run time</td><td>hours</td><td>13–48 h</td><td>&lt;30 h</td><td>&lt;72 h</td></tr>
          <tr><td>Errors</td><td>&lt;0.1%</td><td>&gt;85% ≥Q30</td><td>Q30 HiFi</td><td>Q20 simplex</td></tr>
          <tr><td>Best for</td><td>validation, single clones</td><td>quantitative (RNA-seq, counting), NGS standard</td><td colspan="2">genome assembly, structural variation, isoforms, modifications</td></tr></table>
          <div class="exam">Q-score: Q = −10·log₁₀(P<sub>error</sub>) → Q20 = 1 error/100 bp (99%), Q30 = 1/1000 (99.9%), Q50 = 1/100,000.</div>` },
      ],
    },
    {
      title: "Part B · Genome assembly",
      src: "Deck 2 (Henkel & Vriesendorp), slides 3–33",
      cards: [
        { t: "Why sequence DNA?", html: `<ul><li>Structural/comparative genomics: genome sequencing</li><li>Functional genomics: gene expression, chromatin structure, DNA-binding elements</li><li>Genome diagnostics: human variation (SNPs, structural), species diagnostics, metagenomics, eDNA, ancient DNA</li><li>Synthetic biology, information storage</li></ul>` },
        { t: "Shotgun (de novo) assembly", html: `
          <div class="flow"><span>genome (in vivo)</span><i>→</i><span>library (in vitro)</span><i>→</i><span>reads</span><i>→</i><span>de novo assembly (in silico)</span></div>
          <ul><li>Bottom-up: generate random small fragments from the whole genome, sequence each position many times (&gt;8–50×), let the computer find <b>overlaps</b>.</li>
          <li>Fast and cheap, but assembly is error-prone and computationally challenging.</li></ul>` },
        { t: "Terminology: contig, scaffold, coverage, N50", html: `
          <ul>
            <li><b>Contig</b>: contiguous sequence without gaps.</li>
            <li><b>Scaffold</b>: ordered (and oriented) contigs linked by long or paired reads, with gaps filled with <span class="mono">NNNN</span>.</li>
            <li><b>Coverage</b>: sampling depth, typically &gt;30×.</li>
            <li><b>N50</b>: length-weighted median. Sort fragments by length (longest first), add up lengths; N50 = length of the fragment at which the cumulative sum reaches 50% of the total assembly. Higher N50 = more contiguous assembly.</li>
          </ul>
          <div class="exam">Worked example: contigs 50, 30, 10, 5, 5 kb (total 100). Cumulative: 50 → 50% reached at the first contig → N50 = 50 kb. Contigs 30, 25, 20, 15, 10: cumulative 30, 55 → N50 = 25 kb.</div>` },
        { t: "The three assembly problems", html: `
          <ol>
            <li><b>Sequencing limitations</b>: genomes are very long, reads are short, full chromosomes can't be isolated intact (strand breaks).</li>
            <li><b>Technical errors</b>: uncorrected sequencing errors → misassemblies; sequencing <b>bias</b> (e.g. GC bias in Illumina) → no/low coverage.</li>
            <li><b>Genomic architecture</b>: local sequence doesn't contain enough information to reconstruct the global structure — <span class="key">repeats</span> longer than the reads create ambiguous paths in the assembly graph; also polymorphisms (heterozygosity) and chromosome ends.</li>
          </ol>
          <p>Short-read assembly quality: small simple genomes ~100% complete, 1–100 contigs, N50 ~1 Mbp; large complex genomes &lt;90%, &gt;10,000 contigs, N50 ~100 kbp; massive genomes &lt;50%, millions of contigs, N50 &lt;1 kbp.</p>` },
        { t: "Long-read assembly, synteny, eel example", html: `
          <ul>
            <li>Long reads <b>span repeats</b> (e.g. LTR retrotransposons ~10 kbp) → resolve graph ambiguities; now enough throughput for full de novo assembly.</li>
            <li>Problem: raw identity ~98% → harder to find overlaps, complex graphs, heavy computing; <b>polishing</b> by high-coverage consensus → Q50.</li>
            <li>European eel: Illumina (2012) 186,281 scaffolds, N50 78 kbp → Nanopore + Illumina (2017) 2366 scaffolds, N50 1.23 Mbp → PromethION + Hi-C (2023) <b>19 scaffolds</b> (chromosomes), N50 55.5 Mbp.</li>
            <li><b>Synteny</b> = conservation of local gene order; strong phylogenetic signal largely independent of sequence comparison; reveals genome duplications.</li>
            <li>All assemblies contain errors — beware contig ends and scaffold gaps. Modern assemblies approach <b>telomere-to-telomere</b>.</li>
          </ul>` },
      ],
    },
    {
      title: "Part C · Functional genomics",
      src: "Deck 2, slides 34–70",
      cards: [
        { t: "What is functional genomics?", html: `<p>The field that aims to understand <b>how genes lead to phenotypes</b>: cellular information processing, gene expression (transcriptomics) and its regulation (epigenetics, gene regulatory networks).</p>
          <table><tr><th>Layer</th><th>Assay</th></tr>
          <tr><td>DNA methylation</td><td>bisulfite sequencing, nanopore methylation</td></tr>
          <tr><td>Protein–DNA binding / chromatin</td><td>ChIP-seq, ATAC-seq</td></tr>
          <tr><td>3D genome</td><td>Hi-C</td></tr>
          <tr><td>Transcription</td><td>RNA-seq</td></tr>
          <tr><td>Translation</td><td>ribo-seq</td></tr></table>` },
        { t: "ChIP-seq vs ATAC-seq vs RNA-seq", html: `
          <table><tr><th>Assay</th><th>Library of…</th><th>Measures</th></tr>
          <tr><td><b>ChIP-seq</b></td><td>DNA bound by a <b>specific protein</b> (crosslink → immunoprecipitate with antibody)</td><td>binding sites of TFs / histone marks → genome (in)activity</td></tr>
          <tr><td><b>ATAC-seq</b></td><td>DNA with few/no proteins bound (Tn5 transposase "tagmentation" inserts adapters into open chromatin)</td><td>accessible chromatin → genome activity</td></tr>
          <tr><td><b>RNA-seq</b></td><td>cDNA from mRNA</td><td>transcriptional activity / expression levels</td></tr></table>` },
        { t: "RNA-seq and differential expression", html: `
          <ul>
            <li>Sequencer used as a <b>molecule counter</b>: number of reads per gene ~ expression level (correct for <b>gene length</b>!). Expression spans orders of magnitude (plot on log scale).</li>
            <li>Mostly Illumina for counting; long reads for <b>splice isoforms</b> and RNA modifications (epitranscriptomics).</li>
            <li>Differential expression: control vs treatment, statistical test per gene; needs <span class="key">≥3 biological replicates</span> per condition; only for comparable samples; requires <b>normalisation</b>.</li>
            <li>Depth: 10–30(–50) million reads per sample → <b>multiplexing</b> with barcodes in the adapters (up to ~380 samples per lane).</li>
          </ul>` },
        { t: "Bulk vs single-cell RNA-seq", html: `
          <table><tr><th></th><th>Bulk</th><th>Single-cell</th></tr>
          <tr><td>Output</td><td>average expression of all cells</td><td>profile per cell → cell types, heterogeneity</td></tr>
          <tr><td>Quantification</td><td>reliable</td><td>less reliable (low depth, 3′ bias, RT dropout, doublets)</td></tr>
          <tr><td>Cost</td><td>cheap, but needs replicates</td><td>expensive, fewer samples</td></tr></table>
          <ul>
            <li>10x Genomics: gel beads with a <b>cell barcode</b> + a <b>UMI</b> (unique molecular identifier) per transcript.</li>
            <li>Output: a large, <b>sparse</b> table (1000–1,000,000 cells × ~20,000 genes, mostly zeros).</li>
            <li>Clustering (2D plots, e.g. UMAP) reveals cell types (pituitary example: 16 clusters; Lh vs Fsh gonadotropes).</li>
            <li><b>Single-nuclei</b> seq avoids damage from tissue dissociation. <b>Deconvolution</b> uses scRNA-seq profiles to interpret bulk data.</li>
            <li><b>Spatial transcriptomics</b>: barcodes on a slide (Visium: ~5000 spots, 55 µm) → transcriptome + location. Methods of the year: 2013 single-cell seq, 2019 multimodal omics, 2020 spatial transcriptomics.</li>
          </ul>` },
      ],
    },
    {
      title: "Part D · From sample to data (NGS sample prep)",
      src: "Deck 3 (Ariyurek, LGTC)",
      cards: [
        { t: "What can be sequenced?", html: `<ul><li>Whole genome DNA: shotgun libraries, whole-genome amplification (WGA)</li><li>Targeted DNA: capture / whole exome sequencing (WES), amplicons / gene panels</li><li>Bulk RNA: direct, or via cDNA</li><li>Single cells: RNA, DNA (ATAC, methyl-seq, CNV)</li></ul>` },
        { t: "Workflow", html: `<div class="flow"><span>Extraction</span><i>→</i><span>QC</span><i>→</i><span>(Amplification)</span><i>→</i><span>Fragmentation</span><i>→</i><span>Adapter ligation</span><i>→</i><span>Size selection</span><i>→</i><span>Library QC</span><i>→</i><span>Sequencing</span></div>
          <p><b>"Junk in, junk out" — QC is VERY important.</b></p>` },
        { t: "DNA extraction methods", html: `<table><tr><th>Method</th><th>Note</th></tr>
          <tr><td>Phenol(-chloroform)</td><td>gold standard but tricky</td></tr><tr><td>Spin columns</td><td>easy, but DNA is short</td></tr>
          <tr><td>Gravity columns</td><td>DNA &gt;50 kb, slower</td></tr><tr><td>Agarose plug</td><td>needs single-cell suspension (ultra-long DNA)</td></tr>
          <tr><td>Magnetic beads</td><td>easy to automate</td></tr></table>` },
        { t: "QC numbers (DNA & RNA)", html: `
          <table><tr><th>Measure</th><th>Good value</th><th>Low value means…</th></tr>
          <tr><td>DNA A260/280</td><td>~1.8</td><td>protein/phenol contamination</td></tr>
          <tr><td>DNA A260/230</td><td>2.0–2.2</td><td>EDTA, carbohydrates, phenol, guanidine HCl (absorb at 230 nm)</td></tr>
          <tr><td>RNA A260/280</td><td>~2.0 (1.9–2.1)</td><td></td></tr>
          <tr><td>RNA integrity number (RIN)</td><td>0 (bad) – 10 (good); &gt;6 sufficient</td><td>degraded RNA</td></tr></table>
          <p>Quantify with <b>fluorometry</b> (Qubit, Pico/RiboGreen) rather than UV. Also check for enzyme inhibitors (haemoglobin, bile salts, EDTA, heparin). Library QC: quantity (fluorescence, qPCR, ddPCR) and size (Bioanalyzer, Femto Pulse).</p>` },
        { t: "Amplification, fragmentation, size selection, adapters", html: `
          <ul>
            <li>Shotgun libraries: &gt;1 µg high-quality DNA → no amplification. Low input: PCR (targeted), <b>MDA</b> (multiple displacement, random hexamers; better for SNVs), MALBAC (better for CNV).</li>
            <li><b>Fragmentation</b> to 200–1000 bp for Illumina/Ion; not for PacBio/ONT (but shear to 20–24 kb for PacBio HiFi, 20–40 kb for ONT). Mechanical (sonication/Covaris, Megaruptor, needle) vs enzymatic (cheap, but <b>preferential cleavage</b> bias).</li>
            <li><b>Size selection</b>: narrow 200–700 bp for short reads; remove small fragments for long reads. Gel/BluePippin or (XP) beads.</li>
            <li>Illumina adapter ligation: <b>end repair → A-tailing → ligate index adapter → amplification</b>. Tagmentation (Tn5) fragments and adds adapters in one step.</li>
          </ul>` },
        { t: "Targeted sequencing & RNA library strategies", html: `
          <ul>
            <li>Targeted DNA: <b>capture/WES</b>, <b>amplicons</b> (PCR, 1–100s of loci), <b>CRISPR-Cas9</b> amplification-free excision (keeps native modifications; PacBio PureTarget), ONT <b>adaptive sampling</b> (software rejects off-target molecules during sequencing; needs a BED file, GPU, ROI 300 kb–300 Mb).</li>
            <li>Total RNA is ~80% rRNA, 1–3% poly-A+ mRNA. Strategies: <b>poly-A selection</b> (coding; oligo-dT), <b>rRNA depletion</b> (coding + non-coding), <b>small RNA</b> adapter ligation. Don't skip the DNase step. Stranded RNA-seq keeps strand information; ONT direct RNA keeps modifications.</li>
            <li>Long reads improve detection of structural variants in gDNA and full-length isoforms in cDNA; artefacts exist (e.g. PacBio chimeric reads, basecaller errors in repeats like (CAG)n).</li>
          </ul>` },
        { t: "Single-cell & spatial (practical)", html: `<p>Platforms: emulsion (10x Chromium, Fluent), microwell (BD Rhapsody, Honeycomb, Singleron), combinatorial indexing (Parse, Scale). Know your cells: optimise dissociation for high viability, keep at 4 °C, work fast. Poor viability → high % mitochondrial reads and background. Spatial: Visium CytAssist (sequencing-based), Xenium (in-situ probes, 100–5000 genes, sub-cellular; cell segmentation is the challenge).</p>` },
      ],
    },
  ],
  takeHome: [
    "Sanger = accurate validation; Illumina = cheap, high-throughput, short, quantitative standard; PacBio/Nanopore = long reads for assembly, structural variation, isoforms, modifications",
    "Assembly is hard: short reads, errors/bias, and above all repeats (genomic architecture); long reads + Hi-C reach chromosome scale",
    "Know contig / scaffold / coverage / N50",
    "ChIP-seq = protein-bound DNA, ATAC-seq = open chromatin, RNA-seq = expression (≥3 replicates, normalise)",
    "scRNA-seq resolves cell types (barcodes + UMIs) at the cost of noisier quantification; spatial adds location",
    "Sample prep: junk in = junk out; know 260/280, 260/230 and RIN",
  ],
  questions: [
    { type: "mc", q: "Sanger sequencing relies on…", options: ["chain termination by dideoxynucleotides lacking a 3′-OH", "reversible terminators imaged on a flow cell", "changes in ionic current through a pore", "pyrophosphate release detected by light"], answer: 0, src: "Deck 1, slides 13–16" },
    { type: "mc", q: "Why are Illumina reads intrinsically short?", options: ["Clusters lose synchrony (phasing) over cycles and amplification works poorly on long fragments", "The polymerase falls off after 150 nt", "Adapters can only be ligated to short DNA", "The flow cell physically limits DNA to 150 bp"], answer: 0, src: "Deck 1, slide 28" },
    { type: "mc", q: "A Q30 base call corresponds to an accuracy of…", options: ["99.9%", "99%", "99.99%", "97%"], answer: 0, explain: "Q = −10·log10(P_error): Q30 → P = 0.001.", src: "Deck 1, slide 29" },
    { type: "mc", q: "Which technology detects base modifications from polymerase kinetics?", options: ["PacBio SMRT", "Illumina SBS", "Sanger", "Ion Torrent"], answer: 0, src: "Deck 1, slide 38" },
    { type: "mc", q: "In nanopore sequencing, the base sequence is inferred from…", options: ["changes in ionic current as DNA passes through a pore", "fluorescence of labelled nucleotides", "fragment lengths in capillary electrophoresis", "pH changes during incorporation"], answer: 0, explain: "Basecalling uses neural networks.", src: "Deck 1, slides 42–46" },
    { type: "mc", q: "You want to quantify gene expression in 24 samples at low cost. Best choice?", options: ["Illumina short reads with barcoded multiplexing", "Sanger sequencing", "PacBio HiFi", "Nanopore ultra-long reads"], answer: 0, src: "Deck 1, slides 31, 51" },
    { type: "mc", q: "Third-generation sequencing differs from second generation mainly because it…", options: ["sequences single molecules without amplification", "uses radioactive labels", "only produces paired-end reads", "has higher per-read accuracy without consensus"], answer: 0, src: "Deck 1, slide 33" },
    { type: "mc", q: "A scaffold is…", options: ["ordered contigs linked by long/paired reads, with gaps filled with Ns", "a single gap-free contiguous sequence", "the reference genome used for mapping", "a set of reads with identical barcodes"], answer: 0, src: "Deck 2, slide 15" },
    { type: "mc", q: "An assembly has contigs of 40, 25, 15, 10, 5, 5 kb (total 100 kb). What is the N50?", options: ["25 kb", "40 kb", "16.7 kb", "15 kb"], answer: 0, explain: "Cumulative: 40 (40%), 65 (65%) → the 50% mark is reached within the 25 kb contig.", src: "Deck 2, slide 16" },
    { type: "mc", q: "Which is the 'third problem' of genome assembly according to the lecture?", options: ["Genomic architecture: repeats mean local sequence lacks information on global structure", "Sequencing reads are too long", "Too much coverage", "Lack of computing power for Sanger reads"], answer: 0, src: "Deck 2, slides 20–23" },
    { type: "mc", q: "Why do long reads help genome assembly?", options: ["They span repeats such as ~10 kb LTR retrotransposons, resolving ambiguities", "They have lower raw error rates than Illumina", "They need lower coverage for polishing", "They avoid the need for any computation"], answer: 0, src: "Deck 2, slide 29" },
    { type: "mc", q: "Synteny refers to…", options: ["conservation of local gene order between genomes", "identical nucleotide sequences between species", "the number of chromosomes", "co-expression of genes"], answer: 0, src: "Deck 2, slide 31" },
    { type: "mc", q: "ATAC-seq measures…", options: ["accessible (open) chromatin using a Tn5 transposase", "binding sites of one specific transcription factor via antibodies", "DNA methylation via bisulfite conversion", "translation via ribosome footprints"], answer: 0, src: "Deck 2, slides 40–43" },
    { type: "mc", q: "ChIP-seq requires…", options: ["crosslinking and an antibody against the protein of interest", "poly-A selection", "a transposase that inserts adapters into open chromatin", "single-cell suspensions"], answer: 0, src: "Deck 2, slide 41" },
    { type: "mc", q: "What is the minimum number of biological replicates per condition advised for differential expression?", options: ["3", "1", "2", "10"], answer: 0, src: "Deck 2, slide 52" },
    { type: "mc", q: "In 10x single-cell RNA-seq, the UMI identifies…", options: ["individual transcript molecules", "the cell", "the sample/library", "the sequencing lane"], answer: 0, explain: "Cell barcode = cell; UMI = molecule (removes PCR duplicates).", src: "Deck 2, slide 59" },
    { type: "mc", q: "Compared with bulk RNA-seq, single-cell RNA-seq…", options: ["reveals cell-type heterogeneity but quantifies less reliably", "gives more reliable quantification per gene", "is cheaper per sample", "does not need barcodes"], answer: 0, src: "Deck 2, slides 56–57" },
    { type: "mc", q: "A DNA sample has A260/230 = 1.3. This suggests…", options: ["contamination with e.g. EDTA, carbohydrates, phenol or guanidine", "perfectly pure DNA", "RNA contamination only", "highly degraded DNA"], answer: 0, explain: "Pure DNA: 260/230 ≈ 2.0–2.2.", src: "Deck 3, slide 9" },
    { type: "mc", q: "An RNA sample with RIN = 8 is…", options: ["good quality, suitable for library prep", "completely degraded", "contaminated with DNA", "unusable for any sequencing"], answer: 0, src: "Deck 3, slide 23" },
    { type: "mc", q: "Which RNA library strategy keeps both coding and non-coding RNAs while removing the most abundant RNA species?", options: ["rRNA depletion", "Poly-A selection", "Small RNA ligation", "Oligo-dT priming"], answer: 0, src: "Deck 3, slide 24" },
    { type: "mc", q: "Oxford Nanopore 'adaptive sampling' is…", options: ["selective sequencing of target regions decided in real time during the run", "amplicon PCR before sequencing", "Cas9 cutting of target regions", "random down-sampling of reads after sequencing"], answer: 0, src: "Deck 3, slides 42–45" },
    { type: "mc", q: "The Illumina adapter-ligation steps in order are…", options: ["End repair → A-tailing → adapter ligation → amplification", "A-tailing → end repair → amplification → ligation", "Amplification → end repair → ligation → A-tailing", "Tagmentation → end repair → A-tailing → ligation"], answer: 0, src: "Deck 3, slide 16" },
    { type: "open", q: "Compare Sanger, Illumina, PacBio and Oxford Nanopore on principle, read length, accuracy and best application.", answer: "Sanger: ddNTP chain termination, <900 bp, very accurate (<0.1% error), low throughput → validation/single clones. Illumina: sequencing by synthesis with reversible terminators on amplified clusters, 2×150 bp, >99.9% (Q30), terabases → quantitative (RNA-seq, resequencing). PacBio SMRT: real-time single-molecule synthesis in ZMWs, ~15–25 kb HiFi, Q30 consensus, kinetics detect modifications → assembly, SVs, isoforms. ONT: ionic current through a nanopore, 10 kb–Mbp, Q20 simplex (duplex better), real-time/portable, direct RNA & methylation → assembly, SVs, field work.", src: "Deck 1, slide 49" },
    { type: "open", q: "Explain what N50 is, how you compute it and what it tells you about an assembly.", answer: "N50 is the length-weighted median of contig/scaffold lengths: sort fragments longest-first, sum lengths cumulatively; N50 is the length of the fragment at which 50% of the total assembly length is reached. Higher N50 = more contiguous (fewer, longer pieces). It says nothing about correctness (misassemblies can inflate it) or completeness of genes (use e.g. BUSCO).", src: "Deck 2, slide 16" },
    { type: "open", q: "Why do repeats make genome assembly difficult and how can this be solved?", answer: "Reads shorter than a repeat cannot tell which unique flanking sequences belong together; overlaps become ambiguous, the assembly graph contains branches/loops, and the assembler either breaks contigs at repeats or collapses/misjoins them. Solutions: long reads that span the repeat (PacBio HiFi, ONT), paired-end/mate-pair reads with known insert sizes for scaffolding, Hi-C / optical maps for chromosome-scale ordering.", src: "Deck 2, slides 21–29" },
    { type: "open", q: "Describe the differences between ChIP-seq, ATAC-seq and RNA-seq in what they capture and what biological question they answer.", answer: "ChIP-seq: crosslink protein–DNA, immunoprecipitate with antibody against a specific TF/histone mark, sequence bound DNA → where does protein X bind / where are active or repressive marks. ATAC-seq: Tn5 transposase inserts adapters into nucleosome-free, accessible DNA → which regions are open/potentially active (no antibody needed). RNA-seq: convert mRNA to cDNA and count reads per gene → which genes are expressed and how much; differential expression between conditions.", src: "Deck 2, slides 40–47" },
    { type: "open", q: "Outline the wet-lab workflow from tissue to an Illumina-ready DNA library, including the QC checkpoints.", answer: "Extraction (phenol/columns/beads) → QC: purity by UV (260/280 ~1.8, 260/230 2.0–2.2), quantity by fluorometry (Qubit), integrity by gel/Bioanalyzer, check for inhibitors → (amplification if low input: PCR, MDA) → fragmentation to 200–1000 bp (mechanical or enzymatic) → end repair → A-tailing → ligation of indexed adapters → size selection (beads/gel) → (PCR amplification) → library QC: quantity (qPCR/fluorescence/ddPCR) and size (Bioanalyzer) → pooling and sequencing.", src: "Deck 3, slides 7–17" },
  ],
});
