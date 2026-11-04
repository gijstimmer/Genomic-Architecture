# Genomic Architecture

Course material and study aids for the MSc course **Genomic Architecture** (Leiden University, coordinator Han de Winde), 27 Oct – 20 Nov 2026.

- **Start here:** open [index.html](index.html) in a browser. It is the study hub, with one interactive page per lecture and a course-wide **exam drill**.
- Every lecture has its **own folder** with the original slides, a slide-by-slide Markdown transcription and an interactive study page (`study.html`: concept summary + quiz).
- [exam-drill/](exam-drill/index.html) mixes multiple-choice and open questions from all lectures, like the final exam. Use "Missed only" mode to repeat the questions you got wrong (remembered in your browser).

> Tip: clone the repo and open the HTML files locally (double-click `index.html`). GitHub shows the HTML source, not the rendered page.

## Assessment

| Part | Weight |
|---|---|
| Final exam, **Wed 18 Nov 13:00–16:00**, USC (digital: multiple choice + open questions). Retake Fri 18 Dec | 75% |
| Group project: poster (hand in Thu 19 Nov before 13:00) + mini-symposium Fri 20 Nov | 25% |
| Bioinformatics workshops and assignments | pass/fail |

Support literature: Lesk, *Introduction to Genomics* (3rd ed., 2017); Brock, *Biology of Microorganisms* (15th ed.); Campbell, *Biology* (11th/12th ed.).

## Course overview

| # | Date | Lecture | Lecturer | Folder | Study page |
|---|---|---|---|---|---|
| — | — | Course info: kick-off, schedule, timetable, assessment | Han de Winde | [00-course-info/](00-course-info/) | — |
| 00 | prep | Basics of Genomics (self-study) | Jo-Anne Verschoor | [00-prep-basics-of-genomics/](00-prep-basics-of-genomics/) | [study](00-prep-basics-of-genomics/study.html) |
| 01 | Tue 27 Oct | Genome Diversity, basis of life! | Han de Winde | [01-intro-genome-diversity/](01-intro-genome-diversity/) | [study](01-intro-genome-diversity/study.html) |
| 02 | Wed 28 Oct | Genomic architecture of viruses & phages | Adam Sidi Mabrouk | [02-viruses-and-phages/](02-viruses-and-phages/) | [study](02-viruses-and-phages/study.html) |
| 03 | Thu 29 Oct | Genomic architecture & HGT of bacteria | Astri Kusumawardhani | [03-bacteria-and-hgt/](03-bacteria-and-hgt/) | *no slides yet* |
| 04 | Fri 30 Oct | Tools for genomes: sequencing, assembly, sample prep | Henkel & Vriesendorp; Ariyurek | [04-tools-sequencing-and-assembly/](04-tools-sequencing-and-assembly/) | [study](04-tools-sequencing-and-assembly/study.html) |
| 05 | Mon 2 Nov | Genome comparisons & GWAS | Sjoerd Seekles | [05-genome-comparisons-and-gwas/](05-genome-comparisons-and-gwas/) | [study](05-genome-comparisons-and-gwas/study.html) |

Upcoming (add a folder when the slides are out): bioinformatics workshop (3 Nov) · genome evolution & taxonomy, *Aspergillus* (4 Nov) · comparative genomics & yeast (5 Nov) · polyketides & central metabolism (6 Nov) · metagenomics (9 Nov) · sponge microbiomes, *Triturus* (10 Nov) · plant microbiomes (12 Nov) · ancient DNA, human genetics (13 Nov).

---

## 00 — Basics of Genomics (self-study)
| Material | Contents | Transcript | Slides |
|---|---|---|---|
| Basics of Genomics | DNA structure, replication enzymes, central dogma, prokaryotic vs eukaryotic transcription, splicing, translation, mutation types, regulation levels, nucleosomes, epigenetics | [md](00-prep-basics-of-genomics/transcript-basics-of-genomics.md) | [pptx](00-prep-basics-of-genomics/slides/basics-of-genomics.pptx) |

## 01 — Genome Diversity, basis of life!
| Material | Contents | Transcript | Slides |
|---|---|---|---|
| Intro lecture | Definitions of genomic architecture (Koonin, Zalenski), species numbers, gene numbers, pangenome, endosymbiosis & hybrid genomes, genome sizes, model organisms, mutations, HGT, transposons, gene duplication, orthologs/paralogs | [md](01-intro-genome-diversity/transcript-genome-diversity-basis-of-life.md) | [pptx](01-intro-genome-diversity/slides/genome-diversity-basis-of-life-de-winde.pptx) |

## 02 — Viruses & phages
| Material | Contents | Transcript | Slides |
|---|---|---|---|
| Phage lecture | Virus abundance & genome sizes, lytic/lysogenic cycle, phage therapy, receptor/biofilm/OMV defences, superinfection exclusion, restriction–modification, CRISPR-Cas (Barrangou 2008, class 1/2), abortive infection, cell-wall deficiency, coevolution | [md](02-viruses-and-phages/transcript-genomic-architecture-of-phages.md) | [pdf](02-viruses-and-phages/slides/genomic-architecture-of-phages-mabrouk.pdf) |

## 04 — Tools for genomes
| Material | Contents | Transcript | Slides |
|---|---|---|---|
| DNA sequencing | Sanger, Illumina SBS, PacBio SMRT, Oxford Nanopore; comparison table; platform choice | [md](04-tools-sequencing-and-assembly/transcript-1-dna-sequencing.md) | [pdf](04-tools-sequencing-and-assembly/slides/1-dna-sequencing-henkel-vriesendorp.pdf) |
| Assembly & functional genomics | Shotgun assembly, contigs/scaffolds/N50, three assembly problems, long-read assembly, synteny; ChIP-seq, ATAC-seq, RNA-seq, differential expression, scRNA-seq, spatial transcriptomics | [md](04-tools-sequencing-and-assembly/transcript-2-assembly-and-functional-genomics.md) | [pdf](04-tools-sequencing-and-assembly/slides/2-assembly-and-functional-genomics-henkel-vriesendorp.pdf) |
| NGS sample prep | Extraction, QC (260/280, 260/230, RIN), fragmentation, adapters, size selection, targeted sequencing, adaptive sampling, RNA library strategies, single-cell platforms | [md](04-tools-sequencing-and-assembly/transcript-3-ngs-sample-prep.md) | [pdf](04-tools-sequencing-and-assembly/slides/3-ngs-sample-prep-ariyurek.pdf) |

## 05 — Genome comparisons & GWAS
| Material | Contents | Transcript | Slides |
|---|---|---|---|
| Seekles 2026 | FASTQ → QC/trim → SPAdes → AUGUSTUS/BRAKER2 → BUSCO; SNP vs SNV; Bowtie2 → BAM → GATK/FreeBayes → VCF → SnpEff; MUMmer, synteny; causality; *P. roqueforti* sorbate GWAS (phylogeny, PLINK, Manhattan plot); bulked segregant analysis, QTL-seq | [md](05-genome-comparisons-and-gwas/transcript-genome-comparisons-and-gwas.md) | [pdf](05-genome-comparisons-and-gwas/slides/genome-comparisons-and-gwas-seekles-2026.pdf) |
| Seekles 2022 (older version) | Same lecture without the GWAS/BSA part | [md](05-genome-comparisons-and-gwas/slides/older-versions/transcript-genome-comparisons-2022.md) | [pdf](05-genome-comparisons-and-gwas/slides/older-versions/genome-comparisons-seekles-2022.pdf) |

## Repository structure

```
index.html                     study hub (open this)
assets/                        shared CSS + JS for all study pages
exam-drill/index.html          course-wide mixed quiz
00-course-info/                kick-off, schedule, timetable, assessment (+ .md versions)
NN-lecture-name/
  README.md                    what's in this folder
  slides/                      original slides (pdf/pptx)
  transcript-*.md              slide-by-slide text transcription
  study.html                   interactive study page
  study-content.js             the concepts + questions shown on study.html
```

Transcriptions are text-only (figures are not included). Summaries and questions are study aids written from the slides; the slides and lecture recordings are authoritative.
