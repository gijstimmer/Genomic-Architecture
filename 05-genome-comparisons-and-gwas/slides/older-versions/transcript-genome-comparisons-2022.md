# Genome Comparisons — Sjoerd Seekles (2022 version)

> Text transcription of `genome-comparisons-seekles-2022.pdf`, one section per slide. Figures, images and diagrams are not included: check the original slides for those.

## Slide 1 — Genome

Genome
comparisons
Sjoerd Seekles

## Slide 2 — Sjoerd Seekles

Sjoerd Seekles
- Msc in Leiden – Biotech
- Internship Han de Winde on ISS12 Pseudumonas putida

- PhD in Leiden – Arthur Ram
- Heterogeneity in spores of food spoiling fungi focus Aspergillus niger

- Skills
- (Fungal) genetics & genomics, bioinformatics (genome comparisons)

## Slide 3 — Switzerland

Switzerland
- Post-doctoral researcher at the
University of Lausanne
- Group prof. Sophie Martin
- Fission yeast
(Schizosaccharomyces pombe)
mating
- molecular machinery guiding cellcell fusion, pheromone signaling
and mate choice
- Compare wild isolates of fission
yeast

## Slide 4 — Presentation in two parts

Presentation in two parts
- Part 1
- from raw sequence reads > completely annotated genomes

- Break
- Part 2
- From genome files > successful comparisons of genomes

## Slide 5 — Join at

Join at

attend.sl/w14r

Attendees:

0

## Slide 6 — What words do you associate with

What words do you associate with
genomes?

Time left: -

Vote at: attend.sl/w14r

Votes:

0

## Slide 7 — What words do you associate with genomes?

What words do you associate with genomes?

Time left: -

Votes:

0

## Slide 8 — Genomes

Genomes
- DNA or RNA
- Eukaryote or Prokaryote
- Genes
- Open reading frame (ORF)
- Coding and non-coding regions
- Genomic variation / mutations
- Chromosomes
- Comparing genomes?

## Slide 9 — Popular all in one programs

Popular all in one programs
- Geneious
- User friendly UI
- Everything in one spot

- Galaxy project
- Use modules you choose

- All follow the same basic steps
- Linux based software
https://www.geneious.com/
Enis Afgan, Dannon Baker, Bérénice Batut, Marius van den Beek, Dave Bouvier, Martin Čech, John Chilton,
Dave Clements, Nate Coraor, Björn A Grüning, Aysam Guerler, Jennifer Hillman-Jackson, Saskia
Hiltemann, Vahid Jalili, Helena Rasche, Nicola Soranzo, Jeremy Goecks, James Taylor, Anton Nekrutenko,
Daniel Blankenberg, The Galaxy platform for accessible, reproducible and collaborative biomedical
analyses: 2018 update, Nucleic Acids Research, Volume 46, Issue W1, 2 July 2018, Pages W537–
W544, https://doi.org/10.1093/nar/gky379

## Slide 10 — Where to start?

Where to start?
- Know the genomes you are comparing
- Plants / Fungi / Bacteria /
Mammalian etc.
- Research question
- Internet
- NCBI (Genbank)

- Sequencing

## Slide 11 — Marta’s UV mutant

Marta’s UV mutant
- Marta did UV mutagenesis using a lab strain yeast
- Found interesting phenotype of this UV mutant
- How to know what change in the genome caused this interesting
phenotype?
- Sequence the UV mutant to obtain the genome

## Slide 12 — From

From
sequencing to
genome file
- Sequencing will give you raw reads
- .fastq files
- FastQC
- Read trimming
- Genome assembly (many software
possibilities!)
- ‘de novo’ versus reference mappers
- Short read, long read and hybrid
assemblers
- Thereby creating a genome file (.fasta)
often in pieces (scaffolds)

https://www.synthego.com/help/sanger-sequencing-quality

Andrews S. (2010). FastQC: a quality control tool for high
throughput sequence data. Available online
at: http://www.bioinformatics.babraham.ac.uk/projects/fastqc

## Slide 13 — How does this genome assembly work?

How does this genome assembly work?
- Assemble (small) reads into one (or several big) pieces of genome
- De novo assembly is like Lego
- Reference mapper uses template DNA

- Software choice is often preference, however

- Match the sequencing type (long reads vs short reads) to the assembler!
- Is there a reference genome available? Reference mapper might be best

- Software settings to pay attention to

- Very little, perhaps kmer-length (this is genome size dependent!!)

- Examples from SPAdes program, using paired-end Illumina reads:

- Spades.py –k 21,33,55,77 -1 JB858_1.fastq -2 JB858_2.fastq –o JB858.fasta
Bankevich A, Nurk S, Antipov D, Gurevich AA, Dvorkin M, Kulikov AS, Lesin VM, Nikolenko SI, Pham S,
Prjibelski AD, Pyshkin AV, Sirotkin AV, Vyahhi N, Tesler G, Alekseyev MA, Pevzner PA. SPAdes: a new
genome assembly algorithm and its applications to single-cell sequencing. J Comput Biol. 2012
May;19(5):455-77. doi: 10.1089/cmb.2012.0021. Epub 2012 Apr 16. PMID: 22506599; PMCID: PMC3342519.

## Slide 14 — Marta used Illumina to sequence a yeast

Marta used Illumina to sequence a yeast
mutant, obtained with UV mutagenesis.
She wants to have a complete genome,
which assembly techniques would be
best to use? (multiple options can be
correct)

Time left: -

Vote at: attend.sl/w14r

Votes:

0

## Slide 15 — correct)

Marta used Illumina to sequence a yeast mutant, obtained with UV mutagenesis. She wants to have
a complete genome, which assembly techniques would be best to use? (multiple options can be
correct)

Time left: -

Votes:

0

## Slide 16 — From genome assembly to annotation

From genome assembly to annotation
- Proper annotation of genomes is a lot harder
- Eukaryote vs Prokaryote
- RNA-seq helps immensely

- Methods
- Ab initio
- Evidence-based

- Most recommended is a combination of the two
- Augustus + Braker2 is a great option
Stanke M, Morgenstern B. AUGUSTUS: a web server for gene prediction in eukaryotes that allows user-defined constraints. Nucleic
Acids Res. 2005 Jul 1;33(Web Server issue):W465-7. doi: 10.1093/nar/gki458. PMID: 15980513; PMCID: PMC1160219.
Tomáš Brůna, Katharina J Hoff, Alexandre Lomsadze, Mario Stanke, Mark Borodovsky, BRAKER2: automatic eukaryotic genome annotation with GeneMark-EP+
and AUGUSTUS supported by a protein database, NAR Genomics and Bioinformatics, Volume 3, Issue 1, March 2021,
lqaa108, https://doi.org/10.1093/nargab/lqaa108

## Slide 17 — Genome annotation – Augustus + Braker

Genome annotation – Augustus + Braker
- Mask repeat regions
- Align RNA-seq reads
- Braker2 and Augustus gene prediction

- Braker generates a set of training genes based on RNA-seq (if any)
- Augustus, having certain gene prediction rules, gets trained on the Braker
dataset
- Final prediction of genes by Augustus, taking “hints” from RNA-seq

- Here, settings matter a lot more! Use correct species settings!
- Example of getting annotation file (.gff3)

- Augustus --gff3=on --progress=true --species=schizosaccharomyces_pombe
JB858.fasta > JB858.gff3

## Slide 18 — Task completed! Or...?

Task completed! Or...?
- Quality control
- BUSCO

- Marta has a yeast genome that is fully annotated!
- But… does this answer her research question?
- Turns out she is not interested in the genome specifically; she wants
to know which mutation in this UV mutant yeast strain causes the
interesting phenotype observed in the lab

## Slide 19 — Which of the following terms do you

Which of the following terms do you
know? And do you know their
differences?

Time left: -

Vote at: attend.sl/w14r

Votes:

0

## Slide 20 — Which of the following terms do you know? And do you know their

Which of the following terms do you know? And do you know their
differences?

Time left: -

Votes:

0

## Slide 21 — Genome comparisons terminology

Genome comparisons terminology
- Single nucleotide polymorphisms (SNPs)

- Single nucleotide changes that represent at least 1% of the species’ population
- Historically used for wild strains or known alterations common within a species
- For example, your blood type

- Single nucleotide variants (SNVs)

- Single nucleotide changes, period. Marta’s lab-made UV mutant contains SNVs but
would officially not be considered SNPs.

- Genomic variants

- All genomic changes, this includes larger deletions, insertions and genome rearrangements. This also includes SNVs and is therefore the safest but least precise
term.

## Slide 22 — Break

Break
We need some coffee!

## Slide 23 — GWAS

GWAS
Let’s compare some yeast genomes

## Slide 24 — How is my mutant strain different from wild

How is my mutant strain different from wild
type?
- When comparing genomes you need
- Reference genome
- Sequenced your strain of interest

- Start with raw sequence files from your mutant yeast strain
- This time you use reference mapper like Bowtie2

- Reference is the genome of your parental strain / normal lab strain

- So, you downloaded the genome of fission yeast from internet
(preferably the same strain!!) and use Bowtie2 for mapping of your
raw reads from the sequence machine
Langmead B, Salzberg SL. Fast gapped-read alignment with Bowtie 2. Nat Methods. 2012 Mar 4;9(4):357-9. doi: 10.1038/nmeth.1923.
PMID: 22388286; PMCID: PMC3322381.

## Slide 25 — Reference mapper to compare genomes

Reference mapper to compare genomes
- Genome Wide Association Studies (GWAS)
- Comparing SNVs

- Map the raw reads of Marta’s mutant yeast
to the fasta genome file of its parental strain the wild type
- Bowtie2
- SAMtools (results in BAM files)

Twelve years of SAMtools and BCFtools
Petr Danecek, James K Bonfield, Jennifer Liddle, John Marshall, Valeriu Ohan, Martin O Pollard, Andrew Whitwham, Thomas Keane, Shane A McCarthy, Robert M Davies, Heng Li
GigaScience, Volume 10, Issue 2, February 2021, giab008, https://doi.org/10.1093/gigascience/giab008

## Slide 26 — Visualize your mapping

Visualize your mapping
These raw reads mapped to the reference genome can be visualized, see example IGV

BAM

James T. Robinson, Helga Thorvaldsdóttir, Wendy Winckler, Mitchell Guttman, Eric S. Lander, Gad Getz, Jill P. Mesirov. Integrative Genomics Viewer.
Nature Biotechnology 29, 24–26 (2011). A public access version is also available: PMC3346182.

## Slide 27 — From BAM file to possible SNVs

From BAM file to possible SNVs
- Variant caller
- Many programs,
settings are important
- These programs
determine what is
called a variant and
what not

- VCF1 = FreeBayes
- Liberal

BAM
VCF1

- VCF2 =
GATK Haplotypecaller VCF2
- Strict

https://arxiv.org/abs/1207.3907
Poplin R, Ruano-Rubio V, DePristo MA, Fennell TJ, Carneiro MO, Van der Auwera GA, Kling DE, Gauthier LD, Levy-Moonshine A, Roazen D, Shakir K, Thibault J, Chandran
S, Whelan C, Lek M, Gabriel S, Daly MJ, Neale B, MacArthur DG, Banks E. (2017). Scaling accurate genetic variant discovery to tens of thousands of
samples bioRxiv, 201178. DOI: 10.1101/201178

## Slide 28 — From a file with SNVs (.vcf) to impact

From a file with SNVs (.vcf) to impact
- Once you pinpointed the SNVs, you need to make educated guesses
- How? Let’s say you have 1000 SNVs, how to determine the most likely
candidate?

## Slide 29 — From a file with SNVs (.vcf) to impact

From a file with SNVs (.vcf) to impact
- Once you pinpointed the SNVs, you need to make educated guesses
- How? Let’s say you have 1000 SNVs, how to determine the most likely
candidate?

- SNVs inside genes more important than outside genes?
- SNVs causing a frameshift inside gene (deleterious) more important
than silent mutations?
- SnpEff

- Classifies high and low impact SNPs based on annotation file

"A program for annotating and predicting the effects of single nucleotide polymorphisms, SnpEff: SNPs in the genome of Drosophila melanogaster strain w1118; iso-2; iso-3.",
Cingolani P, Platts A, Wang le L, Coon M, Nguyen T, Wang L, Land SJ, Lu X, Ruden DM. Fly (Austin). 2012 Apr-Jun;6(2):80-92. PMID: 22728672

## Slide 30 — Genome comparisons - Advanced

Genome comparisons - Advanced
- SNVs are small changes, what about larger genomic changes?
- Genome vs genome mapping
- MUMmer / NUCmer

- Large, but simple, alignments

"Versatile and open software for comparing large genomes." S. Kurtz, A. Phillippy, A.L. Delcher, M. Smoot, M. Shumway, C. Antonescu, and
S.L. Salzberg, Genome Biology (2004), 5:R12

## Slide 31 — Done?

Done?
- Marta calculated the SNVs and made an overview in Excel
- She found 10 SNVs, 2 are inside a gene
- According to SnpEff, one is low impact (one AA change) and one is
high impact (causes early stop codon)

## Slide 32 — Is Marta done? Has she deciphered the

Is Marta done? Has she deciphered the
causal mutation?

Time left: -

Vote at: attend.sl/w14r

Votes:

0

## Slide 33 — Is Marta done? Has she deciphered the causal mutation?

Is Marta done? Has she deciphered the causal mutation?

Time left: -

Votes:

0

## Slide 34 — Causality must be experimentally verified!

Causality must be experimentally verified!
- We have a likely candidate, but cannot conclude this SNV is the cause
of the changed phenotype of Marta’s mutant
- Need to experimentally verify the mutation causes the phenotype by
- Restoring the mutation in the UV-mutant yeast strain back to wild type
- Introducing the mutation in the wild-type yeast parental strain

## Slide 35 — What about more than 2 strains?

What about more than 2 strains?
- Filamentous fungus Penicillium roqueforti
- Blue cheese fungus
- Spoils (non-cheese) dairy products
- Survive food preservatives such as sorbate
- New research question
- We have 34 Penicillium roqueforti isolates from all
over the world
- Some have high sorbate resistance, others low
- What gene(s) cause sorbate resistance?
Punt M, Seekles SJ, van Dam JL, de Adelhart Toorop C, Martina RR, Houbraken J, et al. (2022) High sorbic acid resistance
of Penicillium roqueforti is mediated by the SORBUS gene cluster. PLoS Genet 18(6): e1010086.
https://doi.org/10.1371/journal.pgen.1010086

## Slide 36 — Six strains have high sorbate resistance

Six strains have high sorbate resistance

## Slide 37 — Genomes retrieved, but how to proceed?

Genomes retrieved, but how to proceed?
- What genetic element causes the high sorbate resistance?
- Whole genomes sequencing (Illumina)
- Created fasta files with annotation
- Fastq > fasta using SPAdes
- Gene annotation using AUGUSTUS, provided RNA-seq data

- How do we get our genes of interest? Which strains to compare?

## Slide 38 — How do we compare this large number of

How do we compare this large number of
genomes to find our genes of interest?
(multiple options can be correct)

Time left: -

Vote at: attend.sl/w14r

Votes:

0

## Slide 39 — How do we compare this large number of genomes to find our genes

How do we compare this large number of genomes to find our genes
of interest? (multiple options can be correct)

Time left: -

Votes:

0

## Slide 40 — All options have uses, let’s discuss

All options have uses, let’s discuss
1. Take a single high resistance and low resistance strain to compare
- This is what we did with Marta.
- Fast, but might leave you with too many possibilities

2. Take a high and low resistance strain that are closely related
3. Take two high resistance strains that are relatively unrelated
Options 2 & 3 are relatively fast and good approaches, need phylogeny!

## Slide 41 — Phylogenetic tree

Phylogenetic tree
- Which strains are more related?
- 16S / ITS sequencing, MEGA
- Using whole genomes
- Orthofinder

- Concatenated protein files of orthologues
- Alignment (MAFFT)

- RaxML

- From alignments make phylogenetic
tree
- Bootstrap (1000x)

- Tree visualization
- Which strains make sense to compare?
- Six high resistance strains marked in blue

Emms, D.M., Kelly, S. OrthoFinder: phylogenetic orthology inference for comparative genomics. Genome Biol 20, 238 (2019). https://doi.org/10.1186/s13059-019-1832y
A. Stamatakis: "RAxML Version 8: A tool for Phylogenetic Analysis and Post-Analysis of Large Phylogenies". In Bioinformatics, 2014, open access.

## Slide 42 — Comparing multiple strains

Comparing multiple strains
4. Take six resistant strains and compare to non-resistant reference
5. Take 28 non-resistant strains and 5 resistant strains and compare to
resistant reference
It makes sense to use high resistant strain as reference, why?
Make the individual comparisons 1 by 1 and overlap the data
See which SNV is unique for your reference strain
Computational or time intensive method!

## Slide 43 — Comparing all vs all

Comparing all vs all
- Why don’t we just compare everything?!
- Computationally demanding
- What are we comparing?
- Group based on sorbate resistance
- Phenotype and hypothesis should be leading
- High resistant strain = reference

## Slide 44 — We made all the vcf and nucmer files, now

We made all the vcf and nucmer files, now
what?!
- How to get an overview of all these SNV comparisons (option 5)?
- Filter based on significance of SNV
- SnpEff
- Relate SNVs to high impact on genes, combine data in big Excel sheet

- Link SNV presence to phenotype with PLINK
- SNV more often present in high resistant strain, absent in sensitive strain

- Calculate p-values for each SNV with PLINK
- Commonly used visualization is a Manhattan plot

## Slide 46 — Scaffold 43

Scaffold 43
- Green = presence
- Present in all sorbate resistant strains
- Absent in the other strains

## Slide 47 — Test causality

Test causality
- Scaffold 43 deleted in
sorbate resistant strain
- Figure shows that deletion
mutants SC1 and SC2 became
sorbate sensitive

## Slide 48 — Summary

Summary
- Know your research question and hypothesis
- Raw reads

- Make fasta using assembler (SPAdes) and annotation (AUGUSTUS)
- Compare to existing genome using reference mapper (Bowtie2)

- Determine SNVs and impact

- Variant caller like GATK – Haplotype caller
- SnpEff or PLINK impact of SNVs

- Visualize using IGV or Manhattan plot

## Slide 49 — Questions?

Questions?

Always contact me:
Sjoerd.Seekles@unil.ch
