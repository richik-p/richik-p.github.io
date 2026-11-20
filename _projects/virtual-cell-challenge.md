---
layout: page
title: "HalcyonAI: Virtual Cell Challenge 2026"
description: A virtual AI model of a cell, built without large-scale private data. 11th of 1,500+ teams.
img: assets/img/projects/virtual-cell-challenge.png
importance: 1
category: research
chart:
  echarts: true
---

{% include figure.liquid path="assets/img/projects/virtual-cell-challenge/halcyonai.png" alt="HalcyonAI emblem: ten donor strands grafted onto one cell" zoomable=true %}

Here is how I placed **11th out of 1,500+ teams** around the world in Arc Institute's Virtual Cell Challenge 2026!!!

All without access to large-scale private datasets like the top teams in the challenge.

**The task: a virtual AI model of a cell.**

Arc Institute's Virtual Cell Challenge 2026 asked teams to predict how 300 CRISPRi gene knockdowns change single-cell gene expression in cell lines with no perturbation data at all, only their unperturbed control cells. Predictions were scored on six metrics covering the bulk expression profile, which genes change significantly, and by how much.

My final model, HalcyonAI, scored 0.300 and had a top-3 perturbation-discrimination score (PDS).

{% include figure.liquid path="assets/img/projects/virtual-cell-challenge/final-standings.png" alt="Final top-20 standings and per-metric scores" caption="Final top 20, and my score on each metric against the rest of it." zoomable=true %}

**How I got there**

My first model scored terribly, right around the baseline. I tried many approaches early on, but building the model around statistical transfer, carrying measured knockdown responses over from other cell lines, showed the best signs, so I chose to continue down that path. In October I rebuilt the pipeline as HalcyonAI, starting from a recipe another team shared with me. From there it was one change at a time, each with a predicted score written down before upload. Between October 2 and October 11 it climbed from 141st to 4th on the validation leaderboard.

After that I kept iterating. Each upload tested one idea: a new public donor screen, a better way to choose which genes change, a smarter way to size each knockdown. Some ideas I had written off came back as wins, like a stem-cell screen I had dismissed in September that later pushed the score past 0.31. Others looked great on my own benchmarks and fell flat on the leaderboard, which taught me to measure how far each benchmark could be trusted.

<div id="vcc-journey" style="width: 100%; height: 440px; margin-top: 1rem"></div>
<p class="caption" style="text-align: center">Every scored validation upload (dots), the best score so far (line) and the final test result (diamond). Hover or tap a point to see what changed.</p>
<script>
  (function () {
    var D = [
      ["2026-09-03", 0.1220, "Riptide", "early pipeline variant", 112, 0],
      ["2026-09-03", -0.0691, "k562xfer", "first upload: K562 responses copied straight onto control cells", null, 0],
      ["2026-09-04", 0.1464, "EmberNautilus", "early pipeline variant", 59, 0],
      ["2026-09-05", 0.1099, "Gilded-Koi", "early pipeline variant", 156, 0],
      ["2026-09-05", 0.1245, "lantern", "four-source donor bank", 123, 0],
      ["2026-09-05", 0.1242, "marionette", "new cell writer: significant genes planned separately", 120, 0],
      ["2026-09-05", 0.1610, "mirage", "cell writer at full strength", 51, 0],
      ["2026-09-06", 0.1818, "prism", "new rule for choosing which genes change", 29, 0],
      ["2026-09-06", 0.1329, "quartet", "adds HEK293T as a donor", 101, 0],
      ["2026-09-07", 0.1983, "trellis", "donors weighted by support and reliability", 14, 0],
      ["2026-09-07", 0.1804, "zenith", "donor-weighting test", 40, 0],
      ["2026-09-09", 0.2008, "apex2", "safe gene calls, bolder magnitudes", 21, 0],
      ["2026-09-09", 0.1894, "keystone", "capped the number of changed genes (backfired)", 34, 0],
      ["2026-09-10", 0.2018, "zephyr", "small tuning step", 27, 0],
      ["2026-09-11", 0.1285, "harbinger", "tried the then-leader's recipe; it needed data I didn't have", 179, 0],
      ["2026-09-15", 0.2018, "lodestar", "early pipeline variant", 33, 0],
      ["2026-09-15", 0.1998, "sextant", "early pipeline variant", 36, 0],
      ["2026-09-17", 0.2016, "astrolabe", "small tuning variant", 45, 1],
      ["2026-09-17", 0.2026, "astrolabe2", "small tuning variant", 43, 1],
      ["2026-09-18", 0.2024, "astrolabe3", "small tuning variant", 41, 1],
      ["2026-09-18", 0.2034, "astrolabe4", "small tuning variant", 40, 1],
      ["2026-09-19", 0.2051, "astrolabe6", "small tuning variant", 41, 1],
      ["2026-09-19", 0.1971, "cortex2", "alternative model test", 53, 1],
      ["2026-09-25", 0.2051, "astrolabe6_r2", "re-upload of astrolabe6", 67, 1],
      ["2026-09-26", 0.2049, "astrolabe7", "small tuning variant", 72, 1],
      ["2026-10-02", 0.2120, "astrolabe8", "each knockdown sized by donor agreement", 124, 1],
      ["2026-10-03", 0.2468, "halcyon1", "HalcyonAI v1: rebuilt around statistical transfer", 36, 2],
      ["2026-10-03", 0.2517, "halcyon3", "number of changed genes tied to replicated evidence", 32, 2],
      ["2026-10-04", 0.2642, "halcyon5", "better gene selection, updated K562 donor", 19, 2],
      ["2026-10-04", 0.2693, "halcyon6", "fold-change sizes tuned", 18, 2],
      ["2026-10-05", 0.2704, "halcyon8b", "three changes at once; missed, so one change per upload from here", 19, 2],
      ["2026-10-06", 0.2804, "halcyon10", "minimum number of changed genes", 16, 2],
      ["2026-10-06", 0.2814, "halcyon9", "floors and caps, zero-count repair", 16, 2],
      ["2026-10-07", 0.2841, "halcyon11", "fold-change sizes", 16, 2],
      ["2026-10-07", 0.2845, "halcyon12", "shrinkage curve", 15, 2],
      ["2026-10-08", 0.2937, "halcyon13", "predictions smoothed onto the new line's control-cell axes", 9, 2],
      ["2026-10-08", 0.2938, "halcyon15", "magnitude grading", 9, 2],
      ["2026-10-09", 0.2972, "halcyon20", "first test of control-axis deflation", 7, 2],
      ["2026-10-09", 0.2996, "halcyon22", "tiered control-axis deflation", 7, 2],
      ["2026-10-10", 0.3023, "halcyon26", "re-laid strongly down-regulated genes", 6, 2],
      ["2026-10-11", 0.3031, "halcyon27", "cap on changed genes lifted to 4,000 (rank 4)", 4, 2],
      ["2026-10-11", 0.3042, "halcyon28", "energy budget margin", 8, 2],
      ["2026-10-11", 0.3040, "halcyon31", "gene-call evidence re-weighted by donor", 9, 2],
      ["2026-10-12", 0.3052, "halcyon34", "H1 stem-cell screen for calls and totals", 6, 2],
      ["2026-10-12", 0.3080, "halcyon36", "replicated depth and guide off-target pairs", 7, 2],
      ["2026-10-13", 0.3105, "halcyon39", "hESC screen as an eighth donor: first score above 0.31", 9, 2],
      ["2026-10-14", 0.3109, "halcyon40", "hESC screen also used to pick genes", 10, 2],
      ["2026-10-14", 0.3119, "halcyon41", "hESC weighting", 9, 2],
      ["2026-10-15", 0.3124, "halcyon42", "hESC weighting", 10, 2],
      ["2026-10-16", 0.3146, "halcyon43", "allocation key from donor agreement", 9, 2],
      ["2026-10-19", 0.3151, "halcyon44", "generic-response tuning", 12, 2],
      ["2026-10-20", 0.3151, "halcyon45", "principal-component cleaning", 10, 2],
      ["2026-10-20", 0.3155, "halcyon46", "DLD-1 as a ninth donor", 13, 2],
      ["2026-10-21", 0.3164, "halcyon48", "random-effects pooling, PC twins, endothelial donor: last validation entry", 16, 2],
    ];
    var ERAS = [
      ["early pipelines", "#eb6834"],
      ["exploring", "#1baf7a"],
      ["HalcyonAI", "#2a78d6"],
    ];
    var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    function day(s) {
      var p = s.split("-");
      return MONTHS[parseInt(p[1], 10) - 1] + " " + parseInt(p[2], 10);
    }
    function tip(p) {
      var d = p.data.info;
      var head = "<b>" + d[2] + "</b> &middot; " + day(d[0]) + "<br/>score " + d[1].toFixed(3);
      if (d[4] !== null) head += " &middot; rank " + d[4];
      return head + "<br/>" + d[3];
    }
    var resized = false;
    function draw() {
      var el = document.getElementById("vcc-journey");
      if (!el || !window.echarts) return;
      var dark = typeof determineComputedTheme === "function" && determineComputedTheme() === "dark";
      var old = echarts.getInstanceByDom(el);
      if (old) old.dispose();
      var chart = echarts.init(el, dark ? "dark-fresh-cut" : null);
      var best = -1;
      var step = D.map(function (d) {
        best = Math.max(best, d[1]);
        return [d[0], best];
      });
      var series = [
        { name: "best so far", type: "line", step: "end", data: step, symbol: "none", silent: true, z: 1, lineStyle: { color: "#898781", width: 2 }, itemStyle: { color: "#898781" } },
      ];
      ERAS.forEach(function (e, i) {
        series.push({
          name: e[0],
          type: "scatter",
          symbolSize: 10,
          z: 2,
          itemStyle: { color: e[1] },
          data: D.filter(function (d) {
            return d[5] === i;
          }).map(function (d) {
            return { value: [d[0], d[1]], info: d };
          }),
        });
      });
      series.push({
        name: "final test result",
        type: "scatter",
        symbol: "diamond",
        symbolSize: 18,
        z: 3,
        itemStyle: { color: "#6250d6" },
        data: [{ value: ["2026-11-03", 0.2999], info: ["2026-11-03", 0.2999, "final test set", "MOLM-13, U-87 MG and AC16: 11th of 1,500+ teams", 11, 3] }],
        markLine: { symbol: "none", silent: true, lineStyle: { type: "dashed", color: "#898781" }, label: { formatter: "final round", position: "end" }, data: [{ xAxis: "2026-10-22" }] },
      });
      chart.setOption({
        backgroundColor: "transparent",
        grid: { left: 52, right: 18, top: 64, bottom: 36 },
        legend: { top: 0, itemGap: 14 },
        tooltip: { trigger: "item", formatter: tip },
        xAxis: { type: "time", min: "2026-09-01", max: "2026-11-08", splitLine: { show: false } },
        yAxis: { type: "value", min: -0.1, max: 0.35, name: "overall score", splitLine: { lineStyle: { opacity: 0.35 } } },
        series: series,
      });
      if (!resized) {
        resized = true;
        window.addEventListener("resize", function () {
          var c = echarts.getInstanceByDom(document.getElementById("vcc-journey"));
          if (c) c.resize();
        });
      }
    }
    window.addEventListener("load", draw);
    new MutationObserver(draw).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  })();
</script>

The final round used three new cell lines (MOLM-13, U-87 MG and AC16), gave no feedback, and counted only the last upload. I identified two of the lines from their control cells alone, built blind benchmarks on real perturbed cells, and shipped only changes that held up on knockdowns they had never seen.

{% include figure.liquid path="assets/img/projects/virtual-cell-challenge/generalisation.png" alt="Validation versus final test scores for the top 50 teams, and per-metric changes" caption="Validation to test: the drop was almost all bulk-profile error, while discrimination (PDS) held." zoomable=true %}

**How it works**

Every input is public data.

- Pool measured knockdown responses from public CRISPRi screens in 10 other cell lines, with inverse-variance and random-effects weights so weak or conflicting evidence shrinks.
- Adapt each predicted effect to the new line by smoothing it onto that line's own control-cell principal axes.
- Size each knockdown by how well the donor lines agree and by gene essentiality.
- Plan the bulk profile, the significant genes and the fold changes separately, then edit real control cells until all three land.

{% include figure.liquid path="assets/img/projects/virtual-cell-challenge/method-pipeline.png" alt="Pipeline diagram from donor screens through pooling, adaptation and cell writing" caption="The pipeline: pool donor evidence, adapt it to the new line, then plan and write the cells." zoomable=true %}

**One human, many agents**

I worked solo with AI coding agents (Claude Code and Codex). One human and self-improving AI agents make a powerful team: 200+ research tasks and written notes, specification-driven agentic coding, a strong verification harness to measure every improvement, and every one of 74 submissions formulated and tested by hand and intuition.

**What I learned**

- Real measurements go a long way. Carefully carrying over what other cell lines show was the strongest signal, even without private data.
- Fresh data helps most. A genuinely new public dataset paid off in full; re-processing data I already had paid far less.
- Trust only what holds up on new data. Tweaks tuned to the validation set often reversed on new knockdowns, so I kept only the ones that held.
- The open problem: every top model, mine included, flags far too many genes as changed, about 1,000 per knockdown when real cells show 25 to 100.

{% include figure.liquid path="assets/img/projects/virtual-cell-challenge/overcalling.png" alt="Genes called significant per knockdown, real data versus leading models" caption="Leading models call far more significant genes than real cells show." zoomable=true %}

**On LinkedIn**

<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7529411667483496448?collapsed=1" height="230" width="504" frameborder="0" allowfullscreen="" title="Embedded post" style="max-width: 100%; display: block; margin-bottom: 1.5rem"></iframe>

**Links**

- [LinkedIn post](https://lnkd.in/p/g5QyGB3x)
- [Virtual Cell Challenge](https://virtualcellchallenge.org/)
- [Final leaderboard](https://virtualcellchallenge.org/leaderboard)
