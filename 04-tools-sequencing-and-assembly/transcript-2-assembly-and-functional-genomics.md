# Genome Assembly & Functional Genomics — Christiaan Henkel & Bastienne Vriesendorp

> Text transcription of `2-assembly-and-functional-genomics-henkel-vriesendorp.pdf`, one section per slide. Figures, images and diagrams are not included: check the original slides for those.

## Slide 1 — Genome assembly &

Genome assembly &
functional genomics
Christiaan Henkel
Bastienne Vriesendorp

## Slide 2 — Why DNA sequencing?

Why DNA sequencing?
structural/comparative genomics
genome sequencing
functional genomics:
gene expression analyses, chromatin
structure, DNA binding elements

genome diagnostics
human variation (SNPs,
structural)
species diagnostics
metagenomics, eDNA, ancient DNA

synthetic biology
information storage

## Slide 3 — De novo genome assembly

De novo genome assembly

## Slide 6 — Genome assembly is still a hard problem

Genome assembly is still a hard problem

## Slide 8 — The ﬁrst problem: sequencing limitations

The ﬁrst problem: sequencing limitations

The second problem: technical errors

The third problem: genomic architecture

## Slide 9 — Genome sequencing

Genome sequencing

contigs
scaffolds
chromosome-scale maps
genomes

sequence length

1 kbp

1 Mbp

1 Gbp

## Slide 10 — The ﬁrst genome assembly problem

The ﬁrst genome assembly problem
- Genomes are very long

- Sequencing reads are relatively short
- Isolating full chromosome DNA molecules is almost impossible
(because of strand breaks)
- How can we reconstruct a very long sequence from very short reads?

## Slide 11 — Shotgun genome assembly

Shotgun genome assembly
- Bottom-up approach

- generate random small fragments from the entire genome
- sequence many fragments (every position >8-50×)
- let the computer sort it out based on overlapping reads
- entire process is relatively fast and cheap
- assembly is error-prone and computationally challening

## Slide 12 — Genome sequencing

Genome sequencing
genome
in vivo

library
in vitro

reads

in silico

de novo
assembly

## Slide 13 — From genome to contigs and scaffolds

From genome to contigs and scaffolds
SNP

repeat

genome
(relatively) short reads
error

low coverage

contig graph

long or paired reads

scaﬀold

NNNNNNNNNNN

NNNNNNNNNNNNNNNNNNNNNNNNNN

## Slide 14 — Assembly of reads

Assembly of reads
Different tools/algorithms:

PLOS: Jünemann et al., 2014. GABenchToB: A
Genome Assembly Benchmark Tuned on Bacteria and
Benchtop Sequencers. PLoS ONE 9(9): e107014.

https://github.com/nadegeguiglielmoni
/genome_assembly_tools/
11/7/2025

14

## Slide 15 — Some terminology

Some terminology
- Genome assembly methods do not always reconstruct full molecules
(plasmids, chromosomes)

- Basic reconstructed fragments are contigs and scaffolds
- Contig: contiguous sequence
- Scaﬀold: multiple ordered contigs, perhaps with gaps (NNNs)
- Coverage: sampling depth of the genome, typically >30×
- N50: typical contig/scaﬀold/fragment length

## Slide 16 — N50: typical fragment length

N50: typical fragment length
- Length-weighted median length
- “Completeness” of an assembly (50% of the genome is in contigs of size N50)
- Or:
- sort all fragments by length
- record the cumulative assembly length
- the N50 is equal to the fragment length at which the cumulative length is 50% of
the total length

N50

mean

median

- Higher N50: more complete and higher quality

## Slide 17 — Short-read assembly quality

Short-read assembly quality
Small, simple genomes

100% complete
1–100 contigs
N50 ~1 Mbp

Large, complex
genomes

<90% complete
>10000 contigs
N50 ~100 kbp

Massive genomes

<50% complete
millions of contigs
N50 <1000 bp

## Slide 18 — The ﬁrst problem: sequencing limitations

The ﬁrst problem: sequencing limitations

The second problem: technical errors

The third problem: genomic architecture

## Slide 19 — Technical challenges

Technical challenges
- Uncorrected sequencing errors: misassemblies
- Sequencing bias: no or low coverage

“..all technologies exhibit error-rate biases in highand low-GC regions resulting in low coverage”

Ross, M.G., Russ, C., Costello, M. et al. Characterizing and measuring bias in
sequence data. Genome Biol 14, R51 (2013). https://doi.org/10.1186/gb2013-14-5-r51

## Slide 20 — The ﬁrst problem: sequencing limitations

The ﬁrst problem: sequencing limitations

The second problem: technical errors

The third problem: genomic architecture

## Slide 21 — The third problem of genome assembly

The third problem of genome assembly

Local genomic content may not contain enough information
to reconstruct the global structure

## Slide 22 — Repetitive content complicates assembly

Repetitive content complicates assembly

11/7/2025

22

## Slide 23 — Repetitive content complicates assembly

Repetitive content complicates assembly
A

R

B

R

genome

C

‘graph’ data structure

B
R

A

C
A

R

A

R

B

best path assembly

C

R
A

R

B
R

B

R
C

shortcut assemblies
safe contigs

## Slide 24 — Other sources of potential complications..

Other sources of potential complications..

## Slide 25 — More assembly diﬃculties

More assembly diﬃculties
- Chromosome ends

- Uncorrected sequencing errors
- Polymorphisms
- No or low coverage (sequencing bias)
- Repetitive structures
- Sequencing error
- Sequencing bias: or example, Illumina sequencing platform has base composition bias
(favoring GC balanced regions), which usually results in uneven sequencing depth across genome;

## Slide 26 — Assembly using long reads

Assembly using long reads

## Slide 27 — Genome sequencing

Genome sequencing

contigs
scaffolds
chromosome-scale maps
genomes

sequence length

1 kbp

1 Mbp

1 Gbp

## Slide 28 — From genome to contigs and scaffolds

From genome to contigs and scaffolds
SNP

repeat

genome
(relatively) short reads
error

low coverage

contig graph

long or paired reads

scaﬀold

NNNNNNNNNNN

NNNNNNNNNNNNNNNNNNNNNNNNNN

## Slide 29 — Assembly using long reads

Assembly using long reads
- Current long read technologies provide suﬃcient amounts of reads to support
de novo assembly (instead of scaﬀolding use only)
- This is useful, as long reads span ambiguities in the genome/graph
(e.g. LTR retrotransposons: ~10 Kbp)
- Problem: the sequence identity is relatively low (raw ~98 %, HiFi/duplex better)
- Therefore it is harder to find reliable overlaps
- Complicated graph and high computational demands

- Sequences have to be polished by taking the consensus of high coverage
→ Q50 (<1 mistake per 100 Kbp)

## Slide 30 — Our European eel genome assemblies

Our European eel genome assemblies
Sequencing

Assembly

Statistics

Illumina GAIIx

CLC bi0
SSPACE

186281
scaffolds
N50 78 kbp

TULIP

2366 scaffolds
N50 1.23 Mbp

I

Evolution of complex body plans
(2010–2012)

II

First vertebrate genome assembled Oxford Nanopore MinION R7–R9
using nanopore
Illumina HiSeq
(2015–2017)

III

Phylogenomics resolve early teleost Oxford Nanopore PromethION R9.4 wtdbg2
evolution
Illumina HiC
Juicebox
(2019–2023)

19 scaffolds
N50 55.5 Mbp

## Slide 31 — Long reads: Synteny analysis

Long reads: Synteny analysis
- Synteny is the conservation of (local) gene order
- Offers a strong phylogenetic signal
- (Mostly) independent from sequence comparisons

## Slide 32 — From genome duplication to innovation?

From genome duplication to innovation?

## Slide 33 — Summary

Summary
Genome assembly from sequencing reads is a hard problem

All genome assemblies contain errors! Beware of contig ends and
scaﬀold gaps, they may indicate problematic genomic complexity

With long-read sequencing technology, new bioinformatics, and mapping
technologies, assemblies start to reach telomere-to-telomere quality

## Slide 34 — Why DNA sequencing?

Why DNA sequencing?
structural/comparative genomics
genome sequencing
functional genomics
gene expression analyses, chromatin
structure, DNA binding elements

- ChIP-seq
chromatin immunoprecipitation
- ATAC-seq
assay transposase-accessible chromatin
- RNA-seq
cDNA sequencing
- Single-cell RNA-seq
- Spatial transcriptomics

## Slide 35 — What is functional genomics?

What is functional genomics?
- The field that aims to understand
how genes lead to phenotypes

- Focuses on cellular information
processing mechanisms
- Gene expression (transcriptomics)
- Regulation of gene expression
(epigenetics)

## Slide 36 — Gene regulatory networks

Gene regulatory networks

Rau et al. 2012

## Slide 37 — Epigenetics

Epigenetics

Epigenetics: non-hereditary changes to the genome regulate its activity
whatisepigenetics.com

## Slide 38 — Cellular mechanisms

Cellular mechanisms
epigenomics

genomics

transcriptomics

Shendure & Aiden 2012

## Slide 39 — Cellular mechanisms

Cellular mechanisms
bisulfite sequencing

nanopore methylation

ChIP-seq
ATAC-seq

Hi-C

RNA-seq

ribo-seq
Shendure & Aiden 2012

## Slide 40 — Major functional genomics protocols

Major functional genomics protocols
- ChIP-seq: chromatin immunoprecipitation + sequencing
Library of DNA binding sites to which specific proteins are bound (e.g. histones,
transcription factors)
Epigenomics assay for genome (in)activity
- ATAC-seq: assay for transposase-accessible chromatin + sequencing
Library of DNA to which few/no proteins are bound
Epigenomics assay for genome activity
- RNA-seq: transcriptome (mRNA) sequencing
Library of cDNA
Assay for transcriptional activity

## Slide 41 — ChIP-seq (immunoprecipitation)

ChIP-seq (immunoprecipitation)
(epi)genome
(DNA + protein)
in vivo

crosslinking proteins,
immunoprecipitation
in vitro

library of binding sites

reads
alignment
in silico

## Slide 42 — Major functional genomics protocols

Major functional genomics protocols
- ChIP-seq: chromatin immunoprecipitation + sequencing
Library of DNA binding sites to which specific proteins are bound (e.g. histones,
transcription factors)
Epigenomics assay for genome (in)activity
- ATAC-seq: assay for transposase-accessible chromatin + sequencing
Library of DNA to which few/no proteins are bound
Epigenomics assay for genome activity
- RNA-seq: transcriptome (mRNA) sequencing
Library of cDNA
Assay for transcriptional activity

## Slide 43 — ATAC-seq (transposase accessibility)

ATAC-seq (transposase accessibility)
(epi)genome
in vivo

‘tagmentation’
in vitro

library
reads
alignment

in silico

## Slide 44 — Major functional genomics protocols

Major functional genomics protocols
- ChIP-seq: chromatin immunoprecipitation + sequencing
Library of DNA binding sites to which specific proteins are bound (e.g. histones,
transcription factors)
Epigenomics assay for genome (in)activity
- ATAC-seq: assay for transposase-accessible chromatin + sequencing
Library of DNA to which few/no proteins are bound
Epigenomics assay for genome activity
- RNA-seq: transcriptome (mRNA) sequencing
Library of cDNA
Assay for transcriptional activity

## Slide 45 — cDNA sequencing (RNA-seq)

cDNA sequencing (RNA-seq)
genome

mRNA
in vivo

cDNA

in vitro

library
reads
reference

in silico

expression values

## Slide 46 — Transcriptomics applications

Transcriptomics applications
RNA-seq:
Precise expression levels for entire tissues
Comparative expression studies
Transcriptional regulation inference

Single-cell RNA-seq:
Single-cell library preparation for sequencing
Cell type discovery
Spatial transcriptomics
Lineage tracing

## Slide 47 — RNA-seq (transcriptomics)

RNA-seq (transcriptomics)
- Deep sequencing of cDNA (exception: nanopore direct RNA)
- Uses a sequencer as a ‘molecule counter’
- Gene expression level ~ number of reads per gene
- Expression levels differ by several orders of magnitude
- Possible objectives:
- quantification of gene expression (Illumina sequencing)
- determination of differential gene expression
- identification of splice isoforms (long-read sequencing)

## Slide 48 — Short-read sequencing for RNA-seq

Short-read sequencing for RNA-seq
- Almost all RNA-seq uses Illumina short-read sequencing for molecule counting
- The number of reads aligning to a gene in the genome ~ the expression level
- Corrections necessary for gene length!

## Slide 49 — Long-read transcript sequencing

Long-read transcript sequencing
- Emerging as an alternative for short reads as 3rd-gen throughput increases
- Long-read sequencing potentially contains information on
- Pre-mRNA Isoforms
- Isoforms (splicing variants)

- RNA base modifications (epitranscriptomics)?

## Slide 50 — Differential gene expression

Differential gene expression
- 10–30 million reads/sample
Log10 sample B expression level

- Every (blue) dot is a gene
- Note the logarithmic scale!

Log10 sample A expression level

## Slide 51 — Differential gene expression

Differential gene expression
- 10–30 million reads/sample
Log10 sample B expression level

- Every (blue) dot is a gene
- Note the logarithmic scale!
- Green: differentially expressed between
the two conditions

Log10 sample A expression level

## Slide 52 — Differential gene expression

Differential gene expression

Control vs. treatment

Statistical assessment of which genes in expression level differ between samples

Requires multiple (at least 3) samples per condition

Only meaningful for intrinsically comparable samples!

Normalization: making genes and samples comparable (by e.g. scaling)

## Slide 53 — Transcriptomics applications

Transcriptomics applications
RNA-seq
Precise expression levels for entire tissues
Comparative expression studies
Transcriptional regulation inference

Single-cell RNA-seq:
Single-cell library preparation for sequencing
Cell type discovery
Spatial transcriptomics
Lineage tracing

## Slide 54 — Methods of the year

Methods of the year
2013: single-cell sequencing
2019: single-cell multimodal omics analysis
2020: spatially resolved transcriptomics

## Slide 56 — Single-cell and bulk RNA-seq

Single-cell and bulk RNA-seq
single-cell
analysis

tissue

single-cell input

bulk
analysis

bulk RNA input

each cell type has a
distinct expression profile

average gene expression
from all cells

reveals heterogeneity and
subpopulation expression
variability

cellular heterogeneity
masked

## Slide 57 — Single-cell and bulk RNA-seq

Single-cell and bulk RNA-seq
- Bulk RNA-seq: reliable transcript quantification, but averaged over all cells (cell
types)
- Single-cell RNA-seq: less reliable quantification, but per cell type
Artefacts caused by
- low sequencing depth
- 3′-biased protocols (polyA selection)
- RT dropout (not all transcripts are amplified)
- Computational processing
- Bulk RNA-seq is relatively affordable (but needs multiple samples),
scRNA-seq is expensive (but you can get away with fewer samples)

- Deconvolution uses scRNA-seq profiles to interpret bulk RNA-seq samples

## Slide 58 — Illumina multiplexing (barcoding)

Illumina multiplexing (barcoding)
- You do not always need >200 million sequencing reads per sample

- RNA-seq depth: 10–50 million reads
- Solution: include unique ‘barcode’ sequences in the adapters
- This allows you to divide an Illumina flowcell lane amongst up to 380
samples

barcode 1 + sample 1

barcode 2 + sample 2

## Slide 59 — Single-cell RNA-seq

Single-cell RNA-seq

Two barcodes per cDNA:
- One cell-specific (gel bead-specific)

- One transcript-specific (universal molecular identifier UMI)
to enable precise tracing of reads to cells and transcripts.

## Slide 60 — Single-cell RNA-seq

Single-cell RNA-seq

## Slide 61 — Single-cell RNA-seq

Single-cell RNA-seq

## Slide 62 — Single-nuclei sequencing

Single-nuclei sequencing
- scRNA-seq requires dissociation of cells from a tissue (enzymatic, mechanic)

- This can damage cells (depending on the cell type)
and lead to an altered representation of cellular abundance
- Alternative: use cellular nuclei instead

## Slide 63 — After sequencing: a large, sparse table

After sequencing: a large, sparse table
- 1000–1000000 cells
- 20000 genes
- Most entries are zero:
- Sequencing depth is low-moderate (~50000 reads)
- Not all transcripts are amplified (random dropout)

- Other issues:
- Normalization
- Doublets

## Slide 64 — Pituitary scRNA-seq

Pituitary scRNA-seq
- Hypothesis: one cell type, one hormone
- Adult females (24) and males (23)
- 10x Genomics platform

- 2592/3804 cells
- 57.4K/33.0K reads per cell (median)

cell types

## Slide 65 — Single-cell RNA-seq: cell clustering

Single-cell RNA-seq: cell clustering
- Every dot is a transcriptome profile
- Visualization in 2 dimensions:
similar profiles are close together
- Reveals 16 different cell type
clusters

- Suggests differentiation
relationships between cell types

## Slide 66 — Single-cell RNA-seq: cell type assignment

Single-cell RNA-seq: cell type assignment
lhb

fshb

Lh gonadotropes
Fsh gonadotropes

Siddique et al. 2021

## Slide 67 — Single-cell RNA-seq:

Single-cell RNA-seq:

Luthfi Nurhidayat

## Slide 68 — Spatial transcriptomics

Spatial transcriptomics
- 10x Genomics barcoding on a
microscope slide instead of on beads
- 5000 spots, 55 µm diameter
- Barcode allows assignment of a spot location
to every transcriptome profile

## Slide 69 — Spatial transcriptomics

Spatial transcriptomics

## Slide 70 — Summary

Summary
- RNA-seq provides high-quality gene expression measurements
for all genes in a sample
- Single-cell RNA-seq (scRNA-seq) allows classification of cell types
- Spatial transcriptomics combine (single-cell) RNA-seq with
in situ expression measurements

- Single-cell studies are revolutionizing developmental biology
