/* Question Bank: inventory of every registered MCQ and written question type. */
(function () {
  const EQS = window.EQS;
  const $ = (id) => document.getElementById(id);
  const listEl = $("bankList");
  const searchEl = $("bankSearch");
  const topicEl = $("bankTopic");
  const typeEl = $("bankType");
  const kindEl = $("bankKind");
  const difficultyEl = $("bankDifficulty");
  const graphsEl = $("bankGraphs");
  const visibleCount = $("visibleCount");
  const summaryEl = $("bankSummary");
  const coverageEl = $("coverageTable");

  EQS.TOPICS.forEach((t) => {
    const opt = document.createElement("option");
    opt.value = t.id;
    opt.textContent = t.name;
    topicEl.appendChild(opt);
  });

  const topicOrder = {};
  EQS.TOPICS.forEach((t, i) => (topicOrder[t.id] = i));

  const entries = EQS.registry
    .slice()
    .sort((a, b) => {
      const ta = topicOrder[a.topic] == null ? 99 : topicOrder[a.topic];
      const tb = topicOrder[b.topic] == null ? 99 : topicOrder[b.topic];
      if (ta !== tb) return ta - tb;
      if (a.subtopic !== b.subtopic) return a.subtopic.localeCompare(b.subtopic);
      return a.id.localeCompare(b.id);
    });

  const modeName = { numeric: "Numeric", theory: "Theory", application: "Application" };

  function supports(entry, type) {
    return entry.supports.indexOf(type) >= 0;
  }

  function tag(text, cls) {
    return '<span class="bank-tag ' + (cls || "") + '">' + text + "</span>";
  }

  function buildSummary() {
    const mcq = entries.filter((e) => supports(e, "mcq")).length;
    const written = entries.filter((e) => supports(e, "written")).length;
    const graph = entries.filter((e) => e.graph).length;
    const numeric = entries.filter((e) => e.mode === "numeric").length;
    const fixed = entries.filter((e) => e.static).length;
    const cells = [
      ["Entries", entries.length, "all registered question types"],
      ["MCQ", mcq, "types that generate an MCQ"],
      ["Written", written, "types that generate a written question"],
      ["Graph", graph, "SVG / labelled-area types"],
      ["Numeric", numeric, "calculation templates"],
      ["Fixed bank", fixed, "exact bank questions"]
    ];
    summaryEl.innerHTML = cells
      .map(
        (c) =>
          '<div class="bank-summary-cell"><div class="k">' + c[0] + '</div><div class="v">' + c[1] +
          '</div><p>' + c[2] + "</p></div>"
      )
      .join("");
  }

  function buildCoverage() {
    const rows = EQS.TOPICS.map((t) => {
      const es = entries.filter((e) => e.topic === t.id);
      return [
        t.name,
        t.week,
        es.filter((e) => supports(e, "mcq")).length,
        es.filter((e) => supports(e, "written")).length,
        es.filter((e) => e.graph).length,
        es.filter((e) => e.mode === "numeric").length,
        es.filter((e) => e.static).length
      ];
    });
    coverageEl.innerHTML = EQS.table(
      ["Topic", "Week", "MCQ", "Written", "Graph", "Numeric", "Fixed"],
      rows,
      "coverage-table"
    );
  }

  function samplePreview(entry) {
    try {
      const q = entry.gen();
      let block = supports(entry, "mcq") ? q.mcq : q.written;
      if (!block && q.written) block = q.written;
      if (!block || !block.prompt) return "";
      let raw = block.prompt;
      if (entry.graph) raw = raw.replace(/<figure[\s\S]*?<\/figure>/g, " ");
      const text = raw.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
      return text.length > 190 ? text.slice(0, 187).trimEnd() + "…" : text;
    } catch (e) {
      return "";
    }
  }

  const meta = entries.map((entry) => {
    const topic = EQS.topicById[entry.topic];
    const preview = samplePreview(entry);
    const text = [
      topic ? topic.name : entry.topic,
      entry.subtopic,
      entry.source,
      entry.mode,
      entry.supports.join(" "),
      entry.difficulty,
      entry.graph ? "graph diagram svg" : "",
      entry.static ? "fixed bank" : "generated template",
      preview
    ]
      .join(" ")
      .toLowerCase();
    return { entry, text, preview, el: null };
  });

  function summaryFor(entry, preview) {
    const topic = EQS.topicById[entry.topic];
    const tags = [];
    if (supports(entry, "mcq")) tags.push(tag("MCQ", "mcq"));
    if (supports(entry, "written")) tags.push(tag("Written", "written"));
    tags.push(tag(modeName[entry.mode] || entry.mode, "mode"));
    if (entry.graph) tags.push(tag("Graph", "graph"));
    tags.push(tag(entry.difficulty, "diff-" + entry.difficulty));
    const sample = entry.static ? "" : '<span class="bank-sample-flag">Sample</span> ';
    return (
      '<span class="bank-topic">' + EQS.esc(topic ? topic.short : entry.topic) + "</span>" +
      '<span class="bank-sub">' + EQS.esc(entry.subtopic || "General") + "</span>" +
      '<span class="bank-tags">' + tags.join("") + "</span>" +
      '<span class="bank-preview">' + sample + EQS.esc(preview || "Expand to load a sample.") + "</span>"
    );
  }

  function noteFor(entry) {
    const source = entry.source ? " · " + EQS.esc(entry.source) : "";
    if (entry.mode === "theory") {
      return "Fixed bank question. This exact question is part of the generator pool" + source + ".";
    }
    if (entry.graph) {
      return "Graph template. The labelled areas, point labels and some question wording change each time; this is one sample" + source + ".";
    }
    if (entry.mode === "application") {
      return "Application template. The scenario, values and sometimes the question asked change each time; this is one sample" + source + ".";
    }
    return "Generated template. Values, companies and, where relevant, labels change each time; this is one sample" + source + ".";
  }

  function mcqSection(m) {
    const options = m.options
      .map(
        (o, i) =>
          '<li class="bank-option' + (i === m.correct ? " correct" : "") + '">' +
          '<span class="bank-opt-no">' + (i + 1) + "</span><span>" + o + "</span>" +
          (i === m.correct ? '<span class="bank-correct-mark">correct</span>' : "") +
          "</li>"
      )
      .join("");
    const why = m.explanation
      ? '<details class="bank-why"><summary>Explanation</summary>' + EQS.mathify(m.explanation) + "</details>"
      : "";
    return (
      '<section class="bank-section">' +
      '<div class="bank-label">MCQ version</div>' +
      '<div class="bank-question">' + EQS.mathify(m.prompt) + "</div>" +
      '<ol class="bank-options">' + options + "</ol>" +
      '<div class="bank-answer"><strong>Correct answer:</strong> ' + m.options[m.correct] + "</div>" +
      why +
      (m.trap ? '<p class="small-note"><strong>Trap:</strong> ' + EQS.mathify(m.trap) + "</p>" : "") +
      "</section>"
    );
  }

  function writtenSection(w) {
    const rubric = w.rubric && w.rubric.length
      ? '<p class="small-note" style="margin-top:10px;"><strong>Marking checklist:</strong></p><ul class="clean-list">' +
        w.rubric.map((r) => "<li>" + EQS.esc(r) + "</li>").join("") +
        "</ul>"
      : "";
    return (
      '<section class="bank-section">' +
      '<div class="bank-label">Written version</div>' +
      '<div class="bank-question">' + EQS.mathify(w.prompt) + "</div>" +
      '<details class="bank-why"><summary>Model answer &amp; rubric</summary>' +
      EQS.mathify(w.answer) + rubric +
      (w.trap ? '<p class="small-note"><strong>Trap:</strong> ' + EQS.mathify(w.trap) + "</p>" : "") +
      "</details></section>"
    );
  }

  function fill(details, entry, force) {
    if (!force && details.dataset.filled === "1") return;
    const body = details.querySelector(".bank-body");
    let q;
    try {
      q = entry.gen();
    } catch (e) {
      body.innerHTML = '<p class="small-note">This sample could not be generated. Try again.</p>';
      return;
    }
    const sections = [];
    if (supports(entry, "mcq") && q.mcq) sections.push(mcqSection(q.mcq));
    if (supports(entry, "written") && q.written) sections.push(writtenSection(q.written));
    body.innerHTML =
      '<div class="bank-note">' + noteFor(entry) + "</div>" +
      sections.join("") +
      (entry.mode !== "theory"
        ? '<div class="btn-row" style="margin-top:14px;"><button class="btn small bank-regen" type="button">New sample</button></div>'
        : "");
    details.dataset.filled = "1";
    const regen = body.querySelector(".bank-regen");
    if (regen) {
      regen.addEventListener("click", () => fill(details, entry, true));
    }
  }

  function createItem(entry, preview) {
    const details = document.createElement("details");
    details.className = "bank-item";
    details.dataset.id = entry.id;
    const summary = document.createElement("summary");
    summary.innerHTML = summaryFor(entry, preview);
    const body = document.createElement("div");
    body.className = "bank-body";
    body.innerHTML = '<p class="small-note">Expand to load a sample question and answer.</p>';
    details.appendChild(summary);
    details.appendChild(body);
    details.addEventListener("toggle", () => {
      if (details.open) fill(details, entry, false);
    });
    return details;
  }

  meta.forEach((m) => {
    m.el = createItem(m.entry, m.preview);
    listEl.appendChild(m.el);
  });

  function applyFilters() {
    const q = searchEl.value.trim().toLowerCase();
    const topic = topicEl.value;
    const type = typeEl.value;
    const kind = kindEl.value;
    const diff = difficultyEl.value;
    const graphs = graphsEl.checked;
    let visible = 0;
    meta.forEach((m) => {
      const e = m.entry;
      let ok = true;
      if (topic !== "all" && e.topic !== topic) ok = false;
      if (type !== "all" && !supports(e, type)) ok = false;
      if (kind !== "all" && e.mode !== kind) ok = false;
      if (diff !== "all" && e.difficulty !== diff) ok = false;
      if (graphs && !e.graph) ok = false;
      if (q && !m.text.includes(q)) ok = false;
      m.el.hidden = !ok;
      if (ok) visible++;
    });
    visibleCount.textContent = "Showing " + visible + " of " + meta.length + " question types.";
    const empty = $("bankEmpty");
    if (empty) empty.hidden = visible !== 0;
  }

  searchEl.addEventListener("input", applyFilters);
  topicEl.addEventListener("change", applyFilters);
  typeEl.addEventListener("change", applyFilters);
  kindEl.addEventListener("change", applyFilters);
  difficultyEl.addEventListener("change", applyFilters);
  graphsEl.addEventListener("change", applyFilters);

  $("expandAll").addEventListener("click", () => {
    meta.filter((m) => !m.el.hidden).forEach((m) => {
      m.el.open = true;
      fill(m.el, m.entry, false);
    });
  });
  $("collapseAll").addEventListener("click", () => {
    meta.forEach((m) => (m.el.open = false));
  });

  try {
    const requested = new URLSearchParams(window.location.search).get("topic");
    if (requested && EQS.topicById[requested]) topicEl.value = requested;
  } catch (e) {
    /* ignore malformed URL */
  }

  buildSummary();
  buildCoverage();
  applyFilters();
})();
