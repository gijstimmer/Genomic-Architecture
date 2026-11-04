# DNA Sequencing — Christiaan Henkel & Bastienne Vriesendorp

> Text transcription of `1-dna-sequencing-henkel-vriesendorp.pdf`, one section per slide. Figures, images and diagrams are not included: check the original slides for those.

## Slide 1 — DNA sequencing

DNA sequencing
Christiaan Henkel
Bastienne Vriesendorp

MSc course Genomic Architecture 3-11-2025

## Slide 2 — Background

Background

Christiaan Henkel
Genome scientist at Norwegian
University of Life Sciences in Ås,
near Oslo.
At IBL: courses on Bioinformatics
and genomics

Bastienne Vriesendorp
Since 2021 at IBL: Facility
manager bioinformatics, teacher,
coordinator Bioinformatics BSc

## Slide 3 — Bioinformatics at IBL

Bioinformatics at IBL

Bioinformatics Atelier at 5th floor

Chao Du

Belmin Bajramovic

## Slide 4 — Importance of DNA sequencing in biology

Importance of DNA sequencing in biology

## Slide 5 — DNA sequencing

DNA sequencing
genomics

semiconductors
computers
1950

DNA editing
synthetic biology

1975

2000

2025

2050

## Slide 8 — DNA sequencing

DNA sequencing
genomics

semiconductors
computers
1950

DNA editing
synthetic biology

1975

2000

2025

2050

## Slide 10 — sequencing read:

sequencing read:
the result of sequencing a single
DNA fragment
(a computer text file of ATCGs)

## Slide 11 — first generation

first generation
single, short reads
second generation
many, shorter reads
third generation
many long reads

## Slide 12 — DNA sequencing generations

DNA sequencing generations
First generation
- Sanger sequencing (1977)
Second generation (next generation sequencing, NGS)
- 454 pyrosequencing (2005)/Thermo Fisher Ion Torrent (2010)
- Solexa/Illumina sequencing by synthesis (2005)
- Complete Genomics/MGI DNA nanoballs (2006?)
- Life Technologies SOLiD (2006)
- Element avidity (2023)
Third generation (also NGS)
- Pacific Biosciences single-molecule, real-time sequencing (2011)
- Oxford Nanopore Technologies sequencing (2014)

## Slide 13 — Sanger sequencing

Sanger sequencing
Principle: use DNA polymerase to copy the DNA,
incorpate chain-terminating agents to stop DNA
synthesis, generating many DNA strands of
varying lenghts.

Frederick Sanger

## Slide 14 — Sanger sequencing

Sanger sequencing
Based on chain termination by dideoxynucleotides (ddNTPs)

Example: DNA amplification in the presence of dNTP and ddATP
Template
Copy
Fragments

3’ ATCGCGATGCTAGCATGAACTGTCGA
5’ TAGCGCTACGATCGTACTTGACAGCT
5’ TAGCGCTACGATCGTACTTGACA
5’ TAGCGCTACGATCGTACTTGA
5’ TAGCGCTACGATCGTA
5’ TAGCGCTACGA

## Slide 15 — Sanger sequencing

Sanger sequencing
primer

read
template

Experimental challenge:
disentangle the signal consisting of four nucleotides and many fragment lengths

## Slide 16 — Sanger’s solution

Sanger’s solution
Sanger’s solution:
- Four separate reaction volumes
(ddATP, ddTTP, ddCTP, ddGTP)
- Radioactive labels
- Length separation by gel electrophoresis
- Sequencing read: four lanes
Automatic:
- A single reaction volume
- Fluorescent labels
- Length separation by gel electrophoresis

GATC

GAATTC

## Slide 18 — Applied Biosystems 3730 xl

Applied Biosystems 3730 xl
- Samples in 96, 384 wells plates (stack of 16)
- 96 capillaries (36–50 cm)
- Read length 400–900 bp
- Throughput max. 2.88 Mbp/day

## Slide 19 — 2nd generation (NGS) sequencing

2nd generation (NGS) sequencing
- A sequencing library consists of many, small, ‘randomly’ generated DNA fragments
- A universal primer template (an adapter sequence) must be attached to every fragment

- Many (millions to billions) simultaneous, independent sequencing reactions
- Signal confusion!

## Slide 20 — Illumina: “sequencing by synthesis (SBS)”

Illumina: “sequencing by synthesis (SBS)”

## Slide 22 — Illumina sequencing: library prep

Illumina sequencing: library prep

## Slide 23 — Illumina sequencing: amplification

Illumina sequencing: amplification

## Slide 24 — Illumina SBS sequencing & signal detection

Illumina SBS sequencing & signal detection

## Slide 25 — Illumina sequencing: signal detection

Illumina sequencing: signal detection

## Slide 26 — DOIhttps://doi.org/10.103

DOIhttps://doi.org/10.103
9/C1CC11078K

## Slide 27 — Illumina sequencing instruments

Illumina sequencing instruments

## Slide 28 — Illumina reads are intrinsically short

Illumina reads are intrinsically short
- Amplification is less reliable for longer fragments

- Trade-off between fragment length and spot density (nr. of reads)

short fragments

very long fragments

- Sequencing reactions are never 100% efficient
- Therefore, after many sequencing ‘cycles’, fragments in spots go out of sync

cycle 1

cycle 50

cycle 100

cycle 250

## Slide 29 — Illumina reads are intrinsically short

Illumina reads are intrinsically short
- Illumina read quality: typically >99.9% of nt identified correctly (Q30)
- Quality decreases along the read

## Slide 30 — Illumina sequencing: paired ends

Illumina sequencing: paired ends

## Slide 31 — Illumina sequencing summary

Illumina sequencing summary
Extremely high throughput (16 Tbp per NovaSeq X run: 16000000000000 bp)
High quality data (>99.9% sequence identity, Q30)

Very short reads (usually up to 2×150 bp)
- Reads are much shorter than in first-generation sequencing (<1 kbp)
- Short reads are great ( ) for quantitative applications
(e.g. counting the numbers of a specific DNA/RNA species)
- Longer reads are desirable for structural applications
(e.g. genome sequencing, transcript isoforms)

## Slide 32 — Sanger vs. Illumina

Sanger vs. Illumina
- Both Sanger and second-generation sequencing require
amplification of DNA prior to sequencing (signal boost)
- Sanger: single long fragment

- Next-generation sequencing: many short fragments (a
sequencing library)

Sanger: accurate and reliable, good for validation

Illumin: fast and cost-effective

## Slide 33 — Third-generation sequencing: no amplification

Third-generation sequencing: no amplification
- Amplification limits the read length:
- PCR is limited to thousands of nucleotides
- After hundreds of synthesis cycles, clusters lose sync (sequencing out of phase)
- Not all DNA amplifies with equal efficiency (e.g. bias against CG-rich DNA)
- Third-generation sequencing uses single molecules, without amplification

## Slide 34 — Long-read sequencing platforms

Long-read sequencing platforms

Revio

PromethION

## Slide 35 — PacBio single-molecule, real time (SMRT)

PacBio single-molecule, real time (SMRT)
- “Principle of sequencing while synthesizing”
- Sequencing lengths up to 30kb, throughputs up to 20 Gb
Sequencing takes place in
millions of tiny wells (zeromode waveguides)

Ligation of adapters

## Slide 37 — PacBio single-molecule, real time (SMRT)

PacBio single-molecule, real time (SMRT)

## Slide 38 — Pacbio can use polymerase kinetics to detect

Pacbio can use polymerase kinetics to detect
base modifications

## Slide 40 — Nanopore sequencing

Nanopore sequencing

https://nanoporetech.com/products
/sequence/minion-in-action

## Slide 41 — Deamer’s sketch in his

Deamer’s sketch in his
1989 lab notebook.

## Slide 42 — Nanopore sequencing

Nanopore sequencing

## Slide 43 — Nanopore sequencing

Nanopore sequencing

Flow cell

Motor protein

electrically-resistant
polymer membrane

## Slide 44

- MinION
- Free device, flowcells $1000
- 512 channels
- ~500 nt/second
- 20 Gbp/flowcell

## Slide 46 — Nanopore data quality

Nanopore data quality
- Read lengths up to 4 Mbp
(basically, depends on the DNA prep)
- No theoretical limit of length – except
quality of DNA

- Translation of currents to
sequences (basecalling
algorithms) based on neural
networks
- Read quality improving with
improved basecallers
Hans Jansen, John Tyson

## Slide 47 — Methylation analysis

Methylation analysis

Xu, L., Seki, M. Recent advances in the detection of base
modifications using the Nanopore sequencer. J Hum Genet 65,
25–33 (2020). https://doi.org/10.1038/s10038-019-0679-0

## Slide 48 — Third-generation sequencing: no amplification

Third-generation sequencing: no amplification
Read length is not limited by amplification (but by other factors)
Less CG-bias (but some other biases appear)

Single molecules are harder to detect
- Advanced optics/sensors
- Fewer molecules simultaneously (lower read numbers)
- Higher sequencing error
High consensus accuracy: read the same molecule multiple times
- PacBio HiFi: 1 error per 1000 bp (Q30)
- Oxford Nanopore duplex (Q20+)

## Slide 49 — Summary of sequencing techologies

Summary of sequencing techologies
Sanger

Illumina

PacBio

Oxford Nanopore

Technology

Dideoxy chain
termination

Sequencing by
synthesis

Single molecule,
real-time (SMRT)

Nanopore sensing

Typical read length

<900

2×150

25 kbp HiFi

10 kbp – 4 Mbp

Data/flowcell

<2.88 Mbp per day

7.5 Tbp

100 Gbp

370 Gbp

Run time

A few hours

13–48 hours

<30 hours

<72 hours

Errors

<0.1%

>85% Q30

Q30 HiFi

Q20 (simplex)

## Slide 51 — Which sequencing platform to use?

Which sequencing platform to use?
Sanger sequencing is still very useful
(for instance, if you want to check a single clone)

Illumina sequencing is the NGS standard, with versatile protocols
and especially useful for quantitative applications

PacBio and Oxford Nanopore sequencing are most useful for genome
sequencing and structural studies (isoforms, structural genomic variation)
