# Tools: NGS Sample Preparation — Yavuz Ariyurek

> Text transcription of `3-ngs-sample-prep-ariyurek.pdf`, one section per slide. Figures, images and diagrams are not included: check the original slides for those.

## Slide 1 — Sample to Data

Sample to Data
Yavuz Ariyurek
Leiden Genome Technology Center
LUMC
03 November 2025

## Slide 4 — What can be sequenced?

What can be sequenced?
Whole genome DNA
- Shotgun libraries
- Whole genome amplification (WGA)

Targeted DNA
- Capture / whole exome sequencing (WES)
- Amplicon sequencing / gene panel

Bulk RNA
- Direct
- cDNA synthesis

Single-cells
- RNA
- DNA (ATAC-seq, Methyl-seq, copy number variation)

## Slide 5 — Variant Detection – short reads

Variant Detection – short reads

Germline or Somatic?
DNA/RNA Modifications included
Denovo Assembly

## Slide 6 — Peak Detection - example

Peak Detection - example
RNA-seq
smallRNA
ATAC-seq
CopyNumberVariation
..

https://www.illumina.com/content/dam/illuminamarketing/documents/applications/ngs-library-prep/for-allyou-seq-single-cell.pdf

## Slide 7 — Sample prep workflow

Sample prep workflow

Extraction

no

Quality Control
Fragmentation?

no

Adapter ligation
Size selection?

yes

Shear or
digest

Gel, beads,
BluePippin

Library Quality Control

Sequencing

## Slide 8 — DNA extraction

DNA extraction
- Extraction = breaking down the extracellular matrix and opening the cell
membranes using enzymes, solvents, or surfactants. The DNA in the
resulting mixture must then be isolated.
- Phenol – gold standard but tricky to work with
- Spin columns – easy, but purified DNA is short
- Gravity-based column – DNA is >50kb but slower than spin column
- Chloroform – alternative to phenol
- Agarose plug – requires single-cell suspension
- Magnetic beads – easy to automate

## Slide 9 — DNA QC

DNA QC
Check for inhibitors of enzymatic reactions
Sample-specific: Hemoglobin, bile salts
Extraction-specific: EDTA, heparin, phenol:chloroform
Use UV spectrophotometry to assess the purity of the DNA
Substance

Absorbance

260/280 Value

260/230 Value

Pure DNA

260 nm

~ 1.8

2.0-2.2

EDTA, Carbs, Phenol

230 nm

< 1.5

< 2.0

Guanidine HCl

230 nm

< 1.5

< 2.0

Use fluorometric-based methods for quantitation (Qubit, Pico/RiboGreen)

## Slide 10 — DNA amplification

DNA amplification
- Shotgun libraries: >1ug starting material, high quality, skip this step
- Inputs <1ug may need amplification
- PCR – targeted amplification of 1-100s of loci
- MDA – multiple displacement amplification, “unbiased” whole genome
amplification (WGA) utilizing random hexamers, better for SNVs
- MALBEC – better for copy number variation

## Slide 11 — DNA fragmentation 200bp-1000bp

DNA fragmentation 200bp-1000bp
- Shotgun libraries must be fragmented before Illumina or Ion Proton
sequencing, but not for PacBio or ONT sequencing
- Mechanical or enzymatic?
- Mechanical shearing – uses sound or columns to randomly fragment DNA
- Enzymatic fragmentation – no upfront investment, just a tube of enzyme, but
suffers from preferential cleavage
Enzymatic fragmentation

Mechanical
shearing

Covaris website

Illumina website

## Slide 12 — DNA fragmentation Long Read

DNA fragmentation Long Read
- Depends on platform or quality of gDNA
- Is Ultra Long Reads or phasing needed?
- PacBio ideal insert size for ccs reads: 20-24kb
- ONT ideal insert size for production: 20-40kb
- Mechanical shearing:
- Megaruptor
- Needle shearing
- High Throughput DNA shearing using
Automation

## Slide 13 — gDNA quality varies (1)

gDNA quality varies (1)

Good quality gDNA

PacBio: needs shearing
ONT: needs shearing unless Long reads
are required

PacBio: needs shearing
ONT: needs Size Selection to increase N50

## Slide 14 — gDNA quality varies (2)

gDNA quality varies (2)

apoptotic banding

needs work
PacBio: needs SizeSelection and shearing
ONT: needs Size Selection

## Slide 15 — DNA size-selection

DNA size-selection
- For short-read sequencers, a narrow size range is required (200700bp)
- For long-read sequencers, we want to remove small fragments
- Gel purification
- Agarose
- BluePippin

- Bead purification
- XP beads

Roche website

Sage science website

## Slide 16 — Adapter ligation - Illumina

Adapter ligation - Illumina

3. Ligate index adapter

1. End Repair

2. A-tailing

4. Amplification

## Slide 17 — DNA Library QC

DNA Library QC
- Quantity
- Fluorescence
- qPCR
- ddPCR

- Quality
- Bioanalyzer
- Femto Pulse

## Slide 18 — Targeted DNA library prep

Targeted DNA library prep
- Capture – Whole exome sequencing (WES)
- Amplicons – PCR-based amplification of 1-100s of loci

- CRISPR-Cas9 – Amplification-free targeted excision of small regions of
the genome
- Adaptive Sampling – Enrichment during sequencing (ONT only)

## Slide 19 — Amplicon sequencing

Amplicon sequencing

## Slide 20 — WES/Capture workflow

WES/Capture workflow

## Slide 21 — Tagmentation

Tagmentation

## Slide 22 — EpiGentek website

EpiGentek website

RNA extraction
TRIzol (Guanidinium-acid-phenol)
(+) High yield/mg starting material, high quality
(-) Slower, hard to automate, organic solvents

Don't skip DNase step!

Magnetic particles
(+) Fast, easy to automate,
efficient
(-) Carry-over of magnetic
particles

Column-based
(+) Convenient, can be automated
(-) Clogging, fixed capacity/yield,
DNA carryover

## Slide 23 — RNA QC

RNA QC
- A260/280 ratio of ~2.0 (1.9-2.1 is acceptable)
- RNA integrity number (RIN) score: 0 (bad) to 10 (good)

- RIN values of >6 are sufficient for library prep
- RIN<6 is still viable for library prep but harder to compare to RIN>6

## Slide 24 — RNA -> cDNA*

RNA -> cDNA*
Start with total RNA
- 80% rRNA, 1-3% polyA+ RNA, tRNA, smallRNA (miRNA, snoRNA, piRNA), lincRNA
Strategy

Type of RNA

Unprocessed RNA
content

Isolation method

Poly A+ selection

Coding

Low

Poly(dT) bead capture or primer

rRNA depletion

Coding, noncoding

High

Remove rRNA (hybridization or digestion)

Small RNA ligation

noncoding

High

smallRNA-specific adapter ligation

*N.B. Direct RNA sequencing is also possible with Oxford Nanopore

## Slide 25 — direct RNA sequencing-> modification

direct RNA sequencing-> modification

Signal Transduction and Targeted Therapy (Sig Transduct Target Ther) ISSN 2059-3635 (online)

## Slide 26 — Stranded RNA-seq - Illumina

Stranded RNA-seq - Illumina

## Slide 27 — Long Read vs Short Read

Long Read vs Short Read

> 22Kb Aligned Read

## Slide 28 — Long Read – Enriches detection in gDNA

Long Read – Enriches detection in gDNA
gDNA

## Slide 29 — Long Read – Enhances detection in cDNA

Long Read – Enhances detection in cDNA
Transcriptome

Illumina

PacBio/ONT
ONT

## Slide 30 — Sample prep - PacBio

Sample prep - PacBio

Size Selection followed by
Standard Library prep PacBIo

## Slide 31 — Sample prep – PacBio chimeric reads

Sample prep – PacBio chimeric reads
IGV plot:

20% chimeric reads

## Slide 32 — Sample prep artefacts – PacBio chimeric reads

Sample prep artefacts – PacBio chimeric reads
Insert-Size Mapped reads:

size
selection

Insert-Size soft clipped reads:

Library
prep

## Slide 33 — Oxford Nanopore: NoAmp Cas9 enrichment

Oxford Nanopore: NoAmp Cas9 enrichment

PacBio kit is called PureTarget
High Depth >200x
Native gDNA sequenced
DNA modification retained
No Amplification bias
Multiplexing Samples

Targeted nanopore sequencing with Cas9-guided adapter ligation. Nat Biotechnol 38, 433–438 (2020).
https://doi.org/10.1038/s41587-020-0407-5

## Slide 34 — PacBio PureTarget demo data - SequelIIe:

PacBio PureTarget demo data - SequelIIe:
https://downloads.pacbcloud.com/public/dataset/PureTargetRE/

Sample 1

paternal allele
maternal allele

Plus strand mapping

Minus strand mapping

Sample 2

## Slide 35 — PacBio PureTarget demo data - Revio - same samples:

PacBio PureTarget demo data - Revio - same samples:
https://downloads.pacbcloud.com/public/dataset/PureTargetRE/

Sample 1

paternal allele

Plus strand mapping

maternal allele

Minus strand mapping

Sample 2

## Slide 36 — PacBio PureTarget demo data - Revio:

PacBio PureTarget demo data - Revio:
Different samples, different target

Plus strand mapping

Sample 3

paternal allele
maternal allele

Sample 4

Minus strand mapping

## Slide 37 — PacBio PureTarget demo data - Revio:

PacBio PureTarget demo data - Revio:

maternal allele

Sample 3

paternal allele

maternal allele

Sample 3:
Methylation
Profile (5mC)

## Slide 38 — Benchmark ONT and PacBio Revio WGS (40x)

Benchmark ONT and PacBio Revio WGS (40x)

Revio

ONT

## Slide 39 — ONT and PacBio Revio Benchmark (2)

ONT and PacBio Revio Benchmark (2)

Revio

ONT

## Slide 40 — Cas9 enrichment ONT

Cas9 enrichment ONT

## Slide 41 — Cas9 enrichment ONT – discrepancy between basecalls

Cas9 enrichment ONT – discrepancy between basecalls

unexpected:
= (CAA)n
expected:
= (CAG)n

Solution is to use the "expected" allele for genotyping and wait for the update of ONT's basecaller

## Slide 42 — Oxford Nanopore: Adaptive Sampling

Oxford Nanopore: Adaptive Sampling
“Adaptive Sampling” is Selective sequencing of targeted regions

Adaptive Sampling used for:
- gDNA (including methylation)
- Amplicon Balancing
- Barcode Balancing

## Slide 43 — Oxford Nanopore: Adaptive Sampling

Oxford Nanopore: Adaptive Sampling

Adaptive Sampling requirements
Effect of 3h running:

Target list:
chr17

17162212
31044927
35042208
37636431
39615349
41704604
42994295
48674763
58642573
61629139
65478563

17287188
31432116
35171522
37795105
39716554
41836931
43220245
48778750
58785611
61913528
65611648

+

Easy setup:
- High end GPU
- Requirement: BED file
- Maximum size of region of interest: 300Mb
- Minimum size of region of interest: 300kb

## Slide 44 — Adaptive Sampling – Full Run

Adaptive Sampling – Full Run

- Multiplexing 4-6 sample per PromethION chip
- Run for 72h
- Enough depth for Germline SNV/SV detection

## Slide 45 — Oxford Nanopore: Adaptive Sampling

Oxford Nanopore: Adaptive Sampling
and –
Methylation
AdaptiveSNV
Sampling
DNA Modifications are retained

## Slide 46 — Dorado correct – remove noise from ONT data

Dorado correct – remove noise from ONT data

Pros:
Cons:

cleans up the system error – improves DeNovo Assembly
requires >10kb fragments, GPU

## Slide 47 — Single-cell omics

Single-cell omics

## Slide 48 — Single-cell sequencing – different ways

Single-cell sequencing – different ways
Afbeeldingsresultaat voor tissue dissociation single-cell sequencing

- QC tools
- Online resources
- Microscope
- Cell counters
- TC20 (BioRad)
- Luna FX7 (Logos BioSystems)

## Slide 49 — Commercial Single-cell sequencing platforms

Commercial Single-cell sequencing platforms
Kit Name

Abbreviation Technology Group

Chromium Single Cell 3' Reagent Kit, v3.1 Chemistry. (10x Genomics) 10X 3'

Emulsion

Chromium Single Cell 5' Reagent Kit, v2 Chemistry. (10x Genomics)

10X 5'

Emulsion

Chromium Fixed RNA Profiling Reagent Kit. (10x Genomics)

10X FRP

Emulsion

PIPseq T20 3' Single Cell RNA Kit v4.0. (Fluent Biosciences)

Fluent

Emulsion

BD Rhapsody WTA Reagent Kit. (Becton Dickinson)

BD

Microwell

HIVE CLX SCRNA Seq Kit. (Honeycomb Biotechn.)

Honeycomb

Microwell

GEXSCOPE® Single Cell RNA Library Kit. (Singleron Biotech.)

Singleron

Microwell

Evercode WT v2. (Parse Biosciences)

Parse

Combinatorial Indexing

Single Cell RNA Kit. (Scale Biosciences)

Scale

Combinatorial Indexing

ASTERIA Single-cell RNASeq Kit. (Scipio Bioscience)

Scipio

Matrigel

Comparative Analysis of Commercial Single-Cell RNA Sequencing Technologies:
https://doi.org/10.1101/2024.06.18.599579

## Slide 50 — Single-cell sequencing – example of improvements

Single-cell sequencing – example of improvements
Check version numbers when reading and comparing performance

## Slide 51 — Single-cell sequencing – Know your cells

Single-cell sequencing – Know your cells
- Optimize your tissue dissociation to obtain high viability cell suspensions
- Check viability of sample over time, but don't waste your sample
- Work fast but not rushed
- Stagger your samples so they don't sit for too long
- Keep samples at 4°C when possible
- Keep cells in the buffer where they are the happiest up until cell capture
- If viability decreases over a short period of time this will be reflected in transcriptional
data
- Poor viability → high % mitochondrial counts and high background due to free floating
RNA
- Number of trypan positive cells x number of wasted sequencing reads
- Dying cells can pass QC and be regarded transcriptionally 'healthy'

## Slide 52 — Single-cell sequencing – example nuclei quality

Single-cell sequencing – example nuclei quality

## Slide 53 — Single-cell – types

Single-cell – types
Different types of RNA-seq data

Different types of Spatial data

- Target -> In situ or transfer mRNA to slide
- Source of data -> Probes or full cDNA
- Detection -> Decoding probes or NGS

## Slide 54 — Single-cell @ LGTC

Single-cell @ LGTC
10xGenomics
- Chromium X
- CytAssist
- Xenium
BD Rhapsody

Exploring:
- Elemental Bioscience
- PipSeq -> Fluent Bioscience
- Atrandi Biosciences

## Slide 55 — Single-cell – Visium CytAssist

Single-cell – Visium CytAssist

Transfer either the mRNA or hybridized probes to surface of slide
●

10x Genomics Application Note

## Slide 56 — 10X Genomics Xenium

10X Genomics Xenium
Xenium Tissue Array

Single-cell – Xenium – Tissue Array

Detected number of genes: 100-5000

## Slide 57 — Single-cell – Xenium

Single-cell – Xenium

- Connectivity of cells
- Sub-Cellular detection
- Challenging is cell segmentation

## Slide 58 — 10X Genomics Xenium

10X Genomics Xenium
Alternatives for 10xGenomics

Single-cell – Competition for 10xGenomics

## Slide 59 — Alternatives for Spatial Transcriptomics

Alternatives for Spatial Transcriptomics
Capture mRNA and sequencing cDNA

Systematic comparison of sequencing-based spatial transcriptomic methods
You, Y., Fu, Y., Li, L. et al. Systematic comparison of sequencing-based spatial transcriptomic methods. Nat Methods 21, 1743–1754 (2024). https://doi.org/10.1038/s41592-024-02325-3

## Slide 60 — Conclusions

Conclusions
- The vendor didn't use your sample to produce data
- Think before you start
- Junk in, junk out
- QC is VERY important.
- If you’re unsure, ask for support! (info@lgtc.nl)

## Slide 61 — Helpful sample prep links

Helpful sample prep links
- DNA library prep overview
- Assessment of nucleic acid quality

- Review of library prep challenges
- Illumina support page detailing sample-specific and extractionspecific contaminants
