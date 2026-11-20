---
layout: page
title: "HalcyonAI: Virtual Cell Challenge 2026"
description: A virtual cell model that predicts CRISPRi knockdown responses in unseen cell lines. 11th of 1,500+ teams.
img: assets/img/projects/virtual-cell-challenge.png
importance: 1
category: research
---

{% include figure.liquid path="assets/img/projects/virtual-cell-challenge/halcyonai.png" alt="HalcyonAI emblem: ten donor strands grafted onto one cell" zoomable=true %}

I placed **11th out of 1,500+ teams** around the world in Arc Institute's Virtual Cell Challenge 2026, without any large-scale private datasets. My final model, HalcyonAI, scored 0.300, 0.0003 behind 10th, and had the 3rd-best perturbation-discrimination score (PDS) in the top 20.

The task was to build a virtual model of a cell: predict how 300 CRISPRi knockdowns change gene expression in three cell lines (MOLM-13, U-87 MG and AC16) with no perturbation data from those lines, only their unperturbed control cells. Six metrics score each prediction, and between them they read three different things: the bulk expression profile, which genes change significantly, and by how much.

**The research**

My first model scored below the baseline, so I took the scorer apart. The bulk metrics read pooled totals, the significance calls read where counts sit among individual cells, and fold changes read means, so the three could be planned separately instead of predicted as one blob.

September was about whether learning helps. I trained contrastive and cross-line neural networks on public screens, up to about 10 million parameters. With only about eight independent cell contexts to learn from, they blurred knockdowns together and lost to simply transferring measured responses. So I went the other way: gather every public CRISPRi screen I could align and treat prediction as evidence pooling.

In October I rebuilt the pipeline around statistical transfer, starting from a recipe another team shared with me, and ran it as an experiment loop: one change per upload, a predicted score written down before each, and the live result used to recalibrate my benchmarks. Those benchmarks turned out to misprice different kinds of change by different factors (new donor data transferred about one-to-one, re-processing old data about 0.2×), so I measured the exchange rates and priced every change with them. Between October 2 and October 11 the model climbed from 141st to 4th on the validation leaderboard.

The final round was blind: three new cell lines, no feedback, and only the last upload counted. I identified two of the lines from their control cells alone, then built benchmarks on real perturbed cells to judge changes without a leaderboard. They showed that changes tuned on the validation knockdowns reversed on new ones, so only steps that held out of sample shipped, and the last one was picked by a rule written before the results were read.

**How HalcyonAI works**

- **Pool the evidence.** Measured knockdown responses from public CRISPRi screens in 10 other cell lines, combined with inverse-variance and random-effects weights so weak or conflicting evidence shrinks.
- **Adapt to the new line.** Each predicted effect is smoothed onto the new line's own control-cell principal axes, and each knockdown is sized by donor agreement and gene essentiality.
- **Plan what the scorer reads.** The pooled profile, the set of significant genes and the fold-change sizes are planned separately.
- **Write the cells.** Counts are moved between real control cells until all three plans land, with checks that block zero-count genes and extreme values.

**How I worked**

I worked solo, with AI coding agents (Claude Code and Codex) doing most of the engineering: 200+ research tasks, 234 research notes, a verification harness, and 74 scored uploads, every one my call.

**What I learned**

- With only about eight independent cell contexts, transferring measured responses beat every neural network I trained.
- New, independent data paid off at face value. Re-processing data I already had paid about 0.2×.
- Changes tuned on the validation knockdowns reversed on new ones. Only steps that held out of sample survived.
- Every top model, mine included, calls far too many genes significant: about 1,000 per knockdown, against roughly 25 to 100 in real cells.

**Gallery**

<div class="project-gallery">
{% include figure.liquid path="assets/img/projects/virtual-cell-challenge/score-journey.png" alt="Validation scores of 68 uploads from September to October, with the final test score" caption="From below the baseline to 11th: every validation upload, the best score so far, and the final test result." zoomable=true %}

{% include figure.liquid path="assets/img/projects/virtual-cell-challenge/method-pipeline.png" alt="Pipeline diagram from donor screens through pooling, adaptation and cell writing" caption="The pipeline: pool donor evidence, adapt it to the new line, then plan and write the cells." zoomable=true %}

{% include figure.liquid path="assets/img/projects/virtual-cell-challenge/generalisation.png" alt="Validation versus final test scores for the top 50 teams, and per-metric changes" caption="Validation to test: the drop was almost all bulk-profile error, while discrimination (PDS) held." zoomable=true %}

{% include figure.liquid path="assets/img/projects/virtual-cell-challenge/overcalling.png" alt="Genes called significant per knockdown, real data versus leading models" caption="The open problem: leading models call far more significant genes than real cells show." zoomable=true %}

{% include figure.liquid path="assets/img/projects/virtual-cell-challenge/final-standings.png" alt="Final top-20 standings and per-metric scores" caption="Final top 20, and my score on each metric against the rest of it." zoomable=true %}
</div>

**Links**

- [LinkedIn post](https://lnkd.in/p/g5QyGB3x)
- [Virtual Cell Challenge](https://virtualcellchallenge.org/)
- [Final leaderboard](https://virtualcellchallenge.org/leaderboard)
