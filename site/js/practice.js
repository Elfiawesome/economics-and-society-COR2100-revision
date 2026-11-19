/* Practice mode UI: infinite generated questions with full solutions. */
(function () {
  const EQS = window.EQS;
  const $ = (id) => document.getElementById(id);
  const topicSelect = $("topicSelect");
  const typeSelect = $("typeSelect");
  const difficultySelect = $("difficultySelect");
  const newBtn = $("newBtn");
  const resetBtn = $("resetBtn");
  const stage = $("qStage");
  const statAttempts = $("statAttempts");
  const statAccuracy = $("statAccuracy");
  const statStreak = $("statStreak");
  const topicProgress = $("topicProgress");

  const STORAGE_KEY = "eqs_practice_v1";
  let stats = EQS.store.get(STORAGE_KEY, { attempts: 0, score: 0, streak: 0, best: 0, topics: {} });
  if (!stats.topics) stats.topics = {};
  let current = null;
  let answered = false;
  let selected = null;
  let revealed = false;
  let graded = false;
  const recent = [];

  EQS.TOPICS.forEach((t) => {
    const opt = document.createElement("option");
    opt.value = t.id;
    opt.textContent = t.name;
    topicSelect.appendChild(opt);
  });

  try {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get("topic");
    if (requested && EQS.topicById[requested]) topicSelect.value = requested;
    const requestedType = params.get("type");
    if (requestedType === "mcq" || requestedType === "written") typeSelect.value = requestedType;
    const requestedDiff = params.get("difficulty");
    if (["easy", "medium", "hard"].includes(requestedDiff)) difficultySelect.value = requestedDiff;
  } catch (e) {
    /* ignore malformed URL */
  }

  function saveStats() {
    EQS.store.set(STORAGE_KEY, stats);
  }

  function accuracyText(score, attempts) {
    if (!attempts) return "—";
    return Math.round((score / attempts) * 100) + "%";
  }

  function updateStats() {
    statAttempts.textContent = stats.attempts;
    statAccuracy.textContent = accuracyText(stats.score, stats.attempts);
    statStreak.textContent = stats.streak;
    const rows = EQS.TOPICS.map((t) => {
      const s = stats.topics[t.id] || { attempts: 0, score: 0 };
      return { t, s };
    }).filter((x) => x.s.attempts > 0);
    if (!rows.length) {
      topicProgress.innerHTML = '<div class="hint">Your topic accuracy will appear here after a few questions.</div>';
      return;
    }
    topicProgress.innerHTML =
      '<div class="hint" style="margin-bottom:2px;">Topic accuracy</div>' +
      rows
        .map(({ t, s }) => {
          const pct = Math.round((s.score / s.attempts) * 100);
          return (
            '<div class="row"><span>' + t.short + '</span><span class="mono" style="text-align:right;">' + pct + "%</span>" +
            '<div class="bar"><span style="width:' + pct + '%"></span></div></div>'
          );
        })
        .join("");
  }

  function record(score) {
    if (!current) return;
    stats.attempts += 1;
    stats.score += score;
    const s = stats.topics[current.topic] || { attempts: 0, score: 0 };
    s.attempts += 1;
    s.score += score;
    stats.topics[current.topic] = s;
    if (score >= 1) {
      stats.streak += 1;
      stats.best = Math.max(stats.best || 0, stats.streak);
    } else {
      stats.streak = 0;
    }
    saveStats();
    updateStats();
  }

  function topicTag(id) {
    const t = EQS.topicById[id];
    return t ? t.short : id;
  }

  function generate() {
    const topic = topicSelect.value;
    const typeChoice = typeSelect.value;
    const type = typeChoice === "mixed" ? EQS.pick(["mcq", "written"]) : typeChoice;
    const difficulty = difficultySelect.value;
    let q = EQS.generateOne({
      topics: topic === "mixed" ? EQS.TOPIC_IDS : [topic],
      type: type,
      difficulty: difficulty,
      excludePrompts: new Set(recent)
    });
    if (!q) {
      q = EQS.generateOne({
        topics: topic === "mixed" ? EQS.TOPIC_IDS : [topic],
        type: type,
        difficulty: "mixed",
        excludePrompts: new Set(recent)
      });
    }
    if (!q) {
      stage.innerHTML = '<div class="q-card"><div class="q-title">No question generated</div><p>Try another topic or difficulty.</p></div>';
      return;
    }
    current = q;
    answered = false;
    selected = null;
    revealed = false;
    graded = false;
    recent.push(q.key);
    if (recent.length > 25) recent.shift();
    render();
  }

  function meta() {
    const q = current;
    const typeLabel = q.type === "mcq" ? "Multiple choice" : "Written";
    const diff = q.difficulty || "medium";
    return (
      '<div class="q-meta">' +
      '<span class="tag topic">' + EQS.esc(topicTag(q.topic)) + "</span>" +
      '<span class="tag">' + EQS.esc(q.subtopic || "General") + "</span>" +
      '<span class="tag' + (diff === "hard" ? " hard" : "") + '">' + EQS.esc(diff) + "</span>" +
      '<span class="tag">' + typeLabel + "</span>" +
      (q.source ? '<span class="tag">' + EQS.esc(q.source) + "</span>" : "") +
      "</div>"
    );
  }

  function render() {
    if (!current) return;
    if (current.type === "mcq") renderMcq();
    else renderWritten();
  }

  function renderMcq() {
    const q = current;
    const m = q.mcq;
    const options = m.options
      .map((opt, i) => {
        return (
          '<button class="option" type="button" data-i="' + i + '">' +
          '<span class="key">' + (i + 1) + "</span><span>" + opt + "</span></button>"
        );
      })
      .join("");
    stage.innerHTML =
      '<div class="q-card">' +
      meta() +
      '<div class="q-title">Question</div>' +
      '<div class="q-prompt">' + EQS.mathify(m.prompt) + "</div>" +
      '<div class="options" id="options">' + options + "</div>" +
      '<div class="q-actions">' +
      '<button class="btn primary" id="checkBtn" type="button" disabled>Check answer</button>' +
      '<button class="btn" id="nextBtn" type="button">Next question</button>' +
      '<span class="hint">' + (q.source || "") + "</span>" +
      "</div>" +
      '<div id="feedback"></div>' +
      "</div>";

    const optionEls = Array.from(document.querySelectorAll(".option"));
    optionEls.forEach((el) => {
      el.addEventListener("click", () => {
        if (answered) return;
        selected = Number(el.dataset.i);
        optionEls.forEach((x) => x.classList.remove("selected"));
        el.classList.add("selected");
        $("checkBtn").disabled = false;
      });
    });
    $("checkBtn").addEventListener("click", checkMcq);
    $("nextBtn").addEventListener("click", generate);
  }

  function checkMcq() {
    if (answered || selected == null || !current) return;
    answered = true;
    const m = current.mcq;
    const optionEls = Array.from(document.querySelectorAll(".option"));
    optionEls.forEach((el, i) => {
      el.classList.remove("selected");
      if (i === m.correct) el.classList.add("correct");
      else if (i === selected) el.classList.add("incorrect");
      el.disabled = true;
    });
    const isRight = selected === m.correct;
    record(isRight ? 1 : 0);
    const fb = $("feedback");
    fb.innerHTML =
      '<div class="feedback ' + (isRight ? "good" : "bad") + '">' +
      "<h4>" + (isRight ? "Correct" : "Not quite") + "</h4>" +
      "<p><strong>Correct answer:</strong> " + m.options[m.correct] + "</p>" +
      EQS.mathify(m.explanation || "") +
      (m.trap ? '<p class="small-note"><strong>Trap:</strong> ' + EQS.mathify(m.trap) + "</p>" : "") +
      "</div>";
    $("checkBtn").disabled = true;
    $("checkBtn").textContent = "Checked";
    fb.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function renderWritten() {
    const q = current;
    const w = q.written;
    stage.innerHTML =
      '<div class="q-card">' +
      meta() +
      '<div class="q-title">Written question</div>' +
      '<div class="q-prompt">' + EQS.mathify(w.prompt) + "</div>" +
      '<div class="written-area"><textarea id="writtenAnswer" placeholder="Write your answer here. Then reveal the model answer and mark yourself honestly."></textarea></div>' +
      '<div class="q-actions">' +
      '<button class="btn primary" id="revealBtn" type="button">Reveal model answer</button>' +
      '<button class="btn" id="nextBtn" type="button">Next question</button>' +
      "</div>" +
      '<div id="modelArea"></div>' +
      "</div>";
    $("revealBtn").addEventListener("click", revealWritten);
    $("nextBtn").addEventListener("click", generate);
  }

  function revealWritten() {
    if (revealed || !current) return;
    revealed = true;
    const w = current.written;
    const rubric = w.rubric && w.rubric.length
      ? '<p class="small-note" style="margin-top:14px;"><strong>Marking checklist:</strong></p><ul class="clean-list">' +
        w.rubric.map((r) => "<li>" + EQS.esc(r) + "</li>").join("") + "</ul>"
      : "";
    const modelArea = $("modelArea");
    modelArea.innerHTML =
      '<div class="model-answer">' +
      "<h4>Model answer</h4>" +
      EQS.mathify(w.answer) +
      rubric +
      (w.trap ? '<p class="small-note"><strong>Trap:</strong> ' + EQS.mathify(w.trap) + "</p>" : "") +
      "</div>" +
      '<div class="feedback neutral" id="gradeBox">' +
      "<h4>Self-mark</h4><p>How close were you? Be strict: this is what the written section will reward.</p>" +
      '<div class="self-grade">' +
      '<button class="btn small" data-score="1" type="button">Full — 1</button>' +
      '<button class="btn small" data-score="0.5" type="button">Partial — 0.5</button>' +
      '<button class="btn small" data-score="0" type="button">Missed — 0</button>' +
      "</div></div>";
    Array.from(modelArea.querySelectorAll("[data-score]")).forEach((btn) => {
      btn.addEventListener("click", () => {
        if (graded) return;
        graded = true;
        const score = Number(btn.dataset.score);
        record(score);
        const box = $("gradeBox");
        box.className = "feedback " + (score >= 1 ? "good" : score > 0 ? "neutral" : "bad");
        box.innerHTML =
          "<h4>Recorded</h4><p>" +
          (score >= 1 ? "Full marks. Keep this structure." : score > 0 ? "Partial. Identify which checklist item you missed." : "Missed. Reread the model answer and the relevant notes section before moving on.") +
          "</p>";
        modelArea.querySelectorAll("[data-score]").forEach((b) => (b.disabled = true));
      });
    });
    $("revealBtn").disabled = true;
    modelArea.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  document.addEventListener("keydown", (e) => {
    const tag = (e.target && e.target.tagName || "").toLowerCase();
    if (tag === "textarea" || tag === "input" || tag === "select") return;
    if (!current) return;
    if (e.key === "n" || e.key === "N") {
      e.preventDefault();
      generate();
      return;
    }
    if (current.type === "mcq") {
      if (["1", "2", "3", "4"].includes(e.key) && !answered) {
        const idx = Number(e.key) - 1;
        const el = document.querySelector('.option[data-i="' + idx + '"]');
        if (el) el.click();
      }
      if (e.key === "Enter") {
        e.preventDefault();
        if (!answered && selected != null) checkMcq();
        else if (answered) generate();
      }
    } else {
      if (e.key === "Enter" && !revealed) {
        e.preventDefault();
        revealWritten();
      }
    }
  });

  newBtn.addEventListener("click", generate);
  typeSelect.addEventListener("change", generate);
  topicSelect.addEventListener("change", generate);
  difficultySelect.addEventListener("change", generate);
  resetBtn.addEventListener("click", () => {
    if (!window.confirm("Reset all practice statistics?")) return;
    stats = { attempts: 0, score: 0, streak: 0, best: 0, topics: {} };
    saveStats();
    updateStats();
  });

  updateStats();
  generate();
})();
