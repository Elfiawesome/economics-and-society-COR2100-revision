/* Exam simulator: 25 MCQ + 25 written, timer, navigator, auto-marking and written self-grading. */
(function () {
  const EQS = window.EQS;
  const $ = (id) => document.getElementById(id);
  const startScreen = $("startScreen");
  const examScreen = $("examScreen");
  const resultsScreen = $("resultsScreen");
  const resumeArea = $("resumeArea");
  const examMain = $("examMain");
  const qnav = $("qnav");
  const timerEl = $("timer");
  const examLabel = $("examLabel");
  const answeredLabel = $("answeredLabel");
  const flagBtn = $("flagBtn");
  const submitTop = $("submitTop");
  const resultsArea = $("resultsArea");

  const KEY = "eqs_exam_v2";
  const FULL_SECONDS = 120 * 60;
  const QUICK_SECONDS = 40 * 60;
  let state = null;
  let timerId = null;
  let reviewFilter = "all";

  function save() {
    if (state) EQS.store.set(KEY, state);
  }

  function active() {
    return state && state.started && !state.submitted;
  }

  function modeLabel(mode) {
    return mode === "quick" ? "Quick drill" : "Full paper";
  }

  function fmtClock(totalSeconds) {
    const s = Math.max(0, Math.floor(totalSeconds));
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    if (h > 0) return h + ":" + String(m).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
    return String(m).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
  }

  function fmtDuration(ms) {
    return fmtClock(ms / 1000);
  }

  function remainingSeconds() {
    return Math.max(0, Math.round((state.deadline - Date.now()) / 1000));
  }

  function answeredCount() {
    if (!state) return 0;
    let n = 0;
    state.questions.forEach((item, i) => {
      const a = state.answers[i];
      if (item.section === "mcq") {
        if (a != null) n++;
      } else if (a && String(a).trim().length) {
        n++;
      }
    });
    return n;
  }

  function questionMarks(i) {
    const item = state.questions[i];
    if (!item) return 0;
    if (item.section === "mcq") {
      return state.answers[i] === item.q.mcq.correct ? 2 : 0;
    }
    const g = state.selfGrades[i];
    return g == null ? 0 : g;
  }

  function totalPossible() {
    return state ? state.questions.length * 2 : 0;
  }

  function totals() {
    let mcq = 0, mcqMax = 0, written = 0, writtenMax = 0, graded = 0;
    state.questions.forEach((item, i) => {
      if (item.section === "mcq") {
        mcqMax += 2;
        mcq += questionMarks(i);
      } else {
        writtenMax += 2;
        if (state.selfGrades[i] != null) {
          graded++;
          written += state.selfGrades[i];
        }
      }
    });
    return { mcq, mcqMax, written, writtenMax, graded, total: mcq + written, max: mcqMax + writtenMax };
  }

  function renderStart() {
    document.title = "Exam Simulator — E&S Final";
    const saved = EQS.store.get(KEY, null);
    startScreen.hidden = false;
    examScreen.hidden = true;
    resultsScreen.hidden = true;
    if (!saved) {
      resumeArea.innerHTML = "";
      return;
    }
    if (saved.submitted) {
      const t = saved.mcqMarks || 0;
      const w = Object.values(saved.selfGrades || {}).reduce((a, b) => a + Number(b || 0), 0);
      const max = saved.questions.length * 2;
      resumeArea.innerHTML =
        '<div class="panel" style="margin-bottom:22px;">' +
        '<div class="eyebrow" style="color:var(--muted);">Last paper saved</div>' +
        '<h3 style="margin-top:8px;">' + modeLabel(saved.mode) + ' · ' + ((t + w) / max * 100).toFixed(0) + '% recorded</h3>' +
        '<p class="muted">MCQ auto marks: ' + t + '. Written self-marks: ' + w + ' / ' + (saved.questions.filter(function (x) { return x.section === "written"; }).length * 2) + '. You can reopen the review and adjust written marks.</p>' +
        '<div class="btn-row"><button class="btn primary" id="viewLast" type="button">View last result</button><button class="btn" id="discardLast" type="button">Discard</button></div>' +
        "</div>";
      $("viewLast").addEventListener("click", () => {
        state = saved;
        showResults();
      });
      $("discardLast").addEventListener("click", () => {
        EQS.store.del(KEY);
        renderStart();
      });
    } else {
      const remain = Math.max(0, Math.round((saved.deadline - Date.now()) / 1000));
      resumeArea.innerHTML =
        '<div class="panel" style="margin-bottom:22px; border-left:5px solid var(--accent);">' +
        '<div class="eyebrow" style="color:var(--muted);">Unfinished paper found</div>' +
        '<h3 style="margin-top:8px;">' + modeLabel(saved.mode) + ' · ' + fmtClock(remain) + ' remaining</h3>' +
        '<p class="muted">' + answeredCountOf(saved) + ' / ' + saved.questions.length + ' answered. Resume where you left off, or discard and start fresh.</p>' +
        '<div class="btn-row"><button class="btn primary" id="resumeBtn" type="button">Resume paper</button><button class="btn" id="discardBtn" type="button">Discard</button></div>' +
        "</div>";
      $("resumeBtn").addEventListener("click", () => {
        state = saved;
        if (remainingSeconds() <= 0) {
          startTimer();
          submitExam(true);
        } else {
          showExam();
        }
      });
      $("discardBtn").addEventListener("click", () => {
        EQS.store.del(KEY);
        state = null;
        renderStart();
      });
    }
  }

  function answeredCountOf(s) {
    let n = 0;
    s.questions.forEach((item, i) => {
      const a = s.answers[i];
      if (item.section === "mcq") {
        if (a != null) n++;
      } else if (a && String(a).trim().length) n++;
    });
    return n;
  }

  function newExam(mode) {
    const full = mode !== "quick";
    const set = EQS.buildSet({
      mcqCount: full ? 25 : 10,
      writtenCount: full ? 25 : 5,
      topics: EQS.TOPIC_IDS,
      difficulty: "mixed"
    });
    if (!set.mcqs.length || !set.writtens.length) {
      alert("Could not generate the paper. Reload and try again.");
      return;
    }
    const questions = []
      .concat(set.mcqs.map((q) => ({ section: "mcq", q: q })))
      .concat(set.writtens.map((q) => ({ section: "written", q: q })));
    state = {
      version: 2,
      mode: mode,
      started: true,
      submitted: false,
      questions: questions,
      answers: {},
      flags: {},
      selfGrades: {},
      current: 0,
      startedAt: Date.now(),
      deadline: Date.now() + (full ? FULL_SECONDS : QUICK_SECONDS) * 1000,
      submittedAt: null,
      mcqMarks: null
    };
    save();
    showExam();
  }

  function showExam() {
    startScreen.hidden = true;
    resultsScreen.hidden = true;
    examScreen.hidden = false;
    examLabel.textContent = modeLabel(state.mode);
    startTimer();
    renderExam();
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function startTimer() {
    if (timerId) clearInterval(timerId);
    tick();
    timerId = setInterval(tick, 1000);
  }

  function tick() {
    if (!state || state.submitted) return;
    const remain = remainingSeconds();
    timerEl.textContent = fmtClock(remain);
    timerEl.classList.toggle("low", remain <= 300);
    document.title = (remain <= 300 ? "⏳ " : "") + fmtClock(remain) + " — E&S Exam";
    if (remain <= 0) {
      submitExam(true);
    }
  }

  function currentItem() {
    return state.questions[state.current];
  }

  function renderExam() {
    if (!state) return;
    const i = state.current;
    const item = currentItem();
    const q = item.q;
    const t = EQS.topicById[q.topic];
    const section = item.section === "mcq" ? "Section A · MCQ" : "Section B · Written";
    const meta =
      '<div class="q-meta">' +
      '<span class="tag topic">' + EQS.esc(t ? t.short : q.topic) + "</span>" +
      '<span class="tag">' + EQS.esc(q.subtopic || "General") + "</span>" +
      '<span class="tag' + (q.difficulty === "hard" ? " hard" : "") + '">' + EQS.esc(q.difficulty || "medium") + "</span>" +
      '<span class="tag">' + section + "</span>" +
      "</div>";

    let body = "";
    if (item.section === "mcq") {
      const selected = state.answers[i];
      const options = q.mcq.options
        .map((opt, k) => {
          return (
            '<button class="option' + (selected === k ? " selected" : "") + '" type="button" data-opt="' + k + '">' +
            '<span class="key">' + (k + 1) + "</span><span>" + opt + "</span></button>"
          );
        })
        .join("");
      body =
        '<div class="q-prompt">' + EQS.mathify(q.mcq.prompt) + "</div>" +
        '<div class="options" id="examOptions">' + options + "</div>" +
        '<p class="hint">Choose one answer. It is saved automatically.</p>';
    } else {
      const value = state.answers[i] || "";
      body =
        '<div class="q-prompt">' + EQS.mathify(q.written.prompt) + "</div>" +
        '<div class="written-area"><textarea id="examText" placeholder="Write your answer. Aim for: formula → substitution → result → interpretation.">' +
        EQS.esc(value) + "</textarea></div>" +
        '<p class="hint" id="wordCount">' + wordCount(value) + " words · saved automatically</p>";
    }

    examMain.innerHTML =
      '<div class="exam-card">' +
      '<div class="exam-q-head"><span class="exam-q-no">Question ' + (i + 1) + " of " + state.questions.length + "</span>" +
      '<span class="exam-q-type">' + (item.section === "mcq" ? "MCQ · 2 marks" : "Written · 2 marks") + "</span></div>" +
      meta +
      '<div class="q-title">' + (q.source || "") + "</div>" +
      body +
      '<div class="exam-footer">' +
      '<div class="btn-row">' +
      '<button class="btn" id="prevBtn" type="button"' + (i === 0 ? " disabled" : "") + ">← Previous</button>" +
      '<button class="btn" id="nextBtn" type="button"' + (i === state.questions.length - 1 ? " disabled" : "") + ">Next →</button>" +
      "</div>" +
      '<div class="btn-row">' +
      '<button class="btn small" id="flagInline" type="button">' + (state.flags[i] ? "Unflag" : "Flag") + "</button>" +
      '<button class="btn small" id="submitBottom" type="button">Submit paper</button>' +
      "</div></div></div>";

    if (item.section === "mcq") {
      Array.from(document.querySelectorAll("#examOptions .option")).forEach((el) => {
        el.addEventListener("click", () => {
          state.answers[i] = Number(el.dataset.opt);
          save();
          Array.from(document.querySelectorAll("#examOptions .option")).forEach((x) => x.classList.remove("selected"));
          el.classList.add("selected");
          updateAnswered();
          renderNav();
        });
      });
    } else {
      const ta = $("examText");
      ta.addEventListener("input", () => {
        state.answers[i] = ta.value;
        save();
        $("wordCount").textContent = wordCount(ta.value) + " words · saved automatically";
        updateAnswered();
        renderNav();
      });
    }

    $("prevBtn").addEventListener("click", () => goTo(i - 1));
    $("nextBtn").addEventListener("click", () => goTo(i + 1));
    $("flagInline").addEventListener("click", toggleFlag);
    $("submitBottom").addEventListener("click", () => askSubmit());
    updateAnswered();
    renderNav();
  }

  function wordCount(s) {
    return String(s || "").trim().split(/\s+/).filter(Boolean).length;
  }

  function updateAnswered() {
    answeredLabel.textContent = answeredCount() + " / " + state.questions.length + " answered";
  }

  function renderNav() {
    if (!state) return;
    qnav.innerHTML = state.questions
      .map((item, i) => {
        const cls = [];
        if (i === state.current) cls.push("current");
        if (state.flags[i]) cls.push("flagged");
        const a = state.answers[i];
        const isAnswered = item.section === "mcq" ? a != null : a && String(a).trim().length;
        if (isAnswered) cls.push("answered");
        return (
          '<button type="button" class="' + cls.join(" ") + '" data-goto="' + i + '" title="' +
          (item.section === "mcq" ? "MCQ" : "Written") + " · " + EQS.esc(EQS.topicById[item.q.topic].short) +
          '">' + (i + 1) + "</button>"
        );
      })
      .join("");
    Array.from(qnav.querySelectorAll("[data-goto]")).forEach((b) => {
      b.addEventListener("click", () => goTo(Number(b.dataset.goto)));
    });
    flagBtn.textContent = state.flags[state.current] ? "Unflag question" : "Flag question";
  }

  function goTo(i) {
    if (!state) return;
    if (i < 0 || i >= state.questions.length) return;
    state.current = i;
    save();
    renderExam();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleFlag() {
    if (!state) return;
    state.flags[state.current] = !state.flags[state.current];
    save();
    renderNav();
    const inline = $("flagInline");
    if (inline) inline.textContent = state.flags[state.current] ? "Unflag" : "Flag";
  }

  function askSubmit() {
    if (!state || state.submitted) return;
    const unanswered = state.questions.length - answeredCount();
    const msg =
      "Submit the paper now?" +
      (unanswered > 0 ? "\n\nYou have " + unanswered + " unanswered question" + (unanswered === 1 ? "" : "s") + "." : "") +
      "\n\nWritten answers will be self-marked after submission.";
    if (window.confirm(msg)) submitExam(false);
  }

  function submitExam(auto) {
    if (!state || state.submitted) return;
    state.submitted = true;
    state.submittedAt = Date.now();
    state.mcqMarks = state.questions.reduce((sum, item, i) => {
      return sum + (item.section === "mcq" ? questionMarks(i) : 0);
    }, 0);
    save();
    if (timerId) clearInterval(timerId);
    timerId = null;
    document.title = "Results — E&S Exam";
    showResults();
  }

  function showResults() {
    startScreen.hidden = true;
    examScreen.hidden = true;
    resultsScreen.hidden = false;
    reviewFilter = "all";
    renderResults();
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function renderResults() {
    const t = totals();
    const pct = t.max ? (t.total / t.max) * 100 : 0;
    const used = state.submittedAt ? state.submittedAt - state.startedAt : 0;
    const topicStats = topicBreakdown();
    resultsArea.innerHTML =
      '<div class="result-hero">' +
      '<div class="eyebrow" style="color:var(--muted);">' + modeLabel(state.mode) + " · submitted</div>" +
      '<div class="split" style="align-items:end; margin-top:10px;">' +
      '<div><div class="score-big" id="scorePct">' + pct.toFixed(0) + "%</div>" +
      '<p class="muted" style="margin-top:10px;"><span id="scoreFraction">' + t.total + " / " + t.max + '</span> marks · written section is self-marked</p></div>' +
      '<div><div class="result-grid">' +
      '<div class="cell"><div class="k">MCQ</div><div class="v" id="mcqScore">' + t.mcq + " / " + t.mcqMax + "</div></div>" +
      '<div class="cell"><div class="k">Written</div><div class="v" id="writtenScore">' + t.written + " / " + t.writtenMax + "</div></div>" +
      '<div class="cell"><div class="k">Graded</div><div class="v" id="gradedCount">' + t.graded + " / " + state.questions.filter(function (x) { return x.section === "written"; }).length + "</div></div>" +
      '<div class="cell"><div class="k">Time used</div><div class="v">' + fmtDuration(used) + "</div></div>" +
      "</div></div></div>" +
      '<div class="callout note" style="margin-bottom:0;"><span class="label">How to read this</span><p>MCQ marks are objective. Written marks are your own self-assessment against the model answer and checklist. Mark yourself strictly: the goal is to find weak topics, not to inflate the score. Adjust any written mark below if you were too generous or too harsh.</p></div>' +
      "</div>" +
      '<div class="panel" style="margin-bottom:22px;">' +
      "<h3 style='margin-top:0;'>Topic breakdown</h3>" +
      '<div class="topic-breakdown" id="topicBreakdown">' + topicRows(topicStats) + "</div>" +
      '<div class="btn-row" style="margin-top:18px;">' +
      '<button class="btn primary" id="retakeFull" type="button">New full paper</button>' +
      '<button class="btn" id="retakeQuick" type="button">New quick drill</button>' +
      '<button class="btn ghost" id="backStart" type="button">Back to start</button>' +
      '<button class="btn ghost" id="printResult" type="button">Print</button>' +
      "</div></div>" +
      '<div class="section-head" style="margin-top:28px;"><div><div class="eyebrow">Review</div><h2 style="margin-bottom:0;">Every question.</h2></div>' +
      '<div class="btn-row" id="filterRow">' +
      '<button class="btn small primary" data-filter="all" type="button">All</button>' +
      '<button class="btn small" data-filter="mcq" type="button">MCQ</button>' +
      '<button class="btn small" data-filter="written" type="button">Written</button>' +
      '<button class="btn small" data-filter="missed" type="button">Missed / ungraded</button>' +
      "</div></div>" +
      '<div id="reviewList"></div>';

    $("retakeFull").addEventListener("click", () => newExam("full"));
    $("retakeQuick").addEventListener("click", () => newExam("quick"));
    $("backStart").addEventListener("click", () => {
      renderStart();
      window.scrollTo({ top: 0, behavior: "auto" });
    });
    $("printResult").addEventListener("click", () => window.print());
    Array.from(document.querySelectorAll("[data-filter]")).forEach((b) => {
      b.addEventListener("click", () => {
        reviewFilter = b.dataset.filter;
        Array.from(document.querySelectorAll("[data-filter]")).forEach((x) => x.classList.toggle("primary", x === b));
        renderReview();
      });
    });
    renderReview();
  }

  function topicBreakdown() {
    const out = {};
    state.questions.forEach((item, i) => {
      const id = item.q.topic;
      if (!out[id]) out[id] = { earned: 0, max: 0, n: 0 };
      out[id].max += 2;
      out[id].n += 1;
      out[id].earned += questionMarks(i);
    });
    return out;
  }

  function topicRows(stats) {
    return EQS.TOPICS.filter((t) => stats[t.id])
      .map((t) => {
        const s = stats[t.id];
        const pct = s.max ? Math.round((s.earned / s.max) * 100) : 0;
        return (
          '<div class="row"><span>' + EQS.esc(t.name) + '</span><span class="mono" style="text-align:right;">' + s.earned + " / " + s.max + '</span><span class="mono" style="text-align:right;">' + pct + '%</span>' +
          '<div class="bar"><span style="width:' + pct + '%"></span></div></div>'
        );
      })
      .join("");
  }

  function updateResultsScore() {
    const t = totals();
    const pct = t.max ? (t.total / t.max) * 100 : 0;
    const sp = $("scorePct");
    if (!sp) return;
    sp.textContent = pct.toFixed(0) + "%";
    $("scoreFraction").textContent = t.total + " / " + t.max + " marks";
    $("mcqScore").textContent = t.mcq + " / " + t.mcqMax;
    $("writtenScore").textContent = t.written + " / " + t.writtenMax;
    const writtenTotal = state.questions.filter((x) => x.section === "written").length;
    $("gradedCount").textContent = t.graded + " / " + writtenTotal;
    $("topicBreakdown").innerHTML = topicRows(topicBreakdown());
  }

  function renderReview() {
    const list = $("reviewList");
    if (!list) return;
    const items = state.questions
      .map((item, i) => ({ item, i }))
      .filter(({ item, i }) => {
        if (reviewFilter === "mcq" && item.section !== "mcq") return false;
        if (reviewFilter === "written" && item.section !== "written") return false;
        if (reviewFilter === "missed") {
          if (item.section === "mcq") return state.answers[i] !== item.q.mcq.correct;
          return state.selfGrades[i] == null || state.selfGrades[i] === 0;
        }
        return true;
      });

    list.innerHTML =
      '<p class="small-note">Showing ' + items.length + " question" + (items.length === 1 ? "" : "s") + ".</p>" +
      items
        .map(({ item, i }) => {
          const q = item.q;
          const topic = EQS.topicById[q.topic];
          if (item.section === "mcq") {
            const chosen = state.answers[i];
            const correct = q.mcq.correct;
            const cls = chosen == null ? "unanswered" : chosen === correct ? "correct" : "incorrect";
            const label = chosen == null ? "Unanswered" : chosen === correct ? "Correct" : "Incorrect";
            return (
              '<article class="review-item ' + cls + '">' +
              '<div class="review-head"><span>Q' + (i + 1) + " · MCQ</span><span>" + EQS.esc(topic.short) + "</span><span>" + label + " · " + questionMarks(i) + "/2</span></div>" +
              '<div class="review-prompt">' + EQS.mathify(q.mcq.prompt) + "</div>" +
              '<div class="answer-box"><span class="label">Your answer</span>' + (chosen == null ? "No answer" : q.mcq.options[chosen]) + "</div>" +
              '<div class="answer-box"><span class="label">Correct answer</span><strong>' + q.mcq.options[correct] + "</strong></div>" +
              '<div class="review-prompt"><strong>Why:</strong> ' + EQS.mathify(q.mcq.explanation || "") + "</div>" +
              (q.mcq.trap ? '<p class="small-note"><strong>Trap:</strong> ' + EQS.mathify(q.mcq.trap) + "</p>" : "") +
              "</article>"
            );
          }
          const g = state.selfGrades[i];
          const cls = g == null ? "unanswered" : g >= 1 ? "correct" : "incorrect";
          const rubric = q.written.rubric && q.written.rubric.length
            ? '<p class="small-note"><strong>Checklist:</strong></p><ul class="clean-list">' + q.written.rubric.map((r) => "<li>" + EQS.esc(r) + "</li>").join("") + "</ul>"
            : "";
          return (
            '<article class="review-item ' + cls + '" data-review="' + i + '">' +
            '<div class="review-head"><span>Q' + (i + 1) + " · Written</span><span>" + EQS.esc(topic.short) + "</span><span id='marks-" + i + "'>" + (g == null ? "Not graded" : g + "/2") + "</span></div>" +
            '<div class="review-prompt">' + EQS.mathify(q.written.prompt) + "</div>" +
            '<div class="answer-box"><span class="label">Your answer</span>' + (state.answers[i] ? EQS.esc(state.answers[i]).replace(/\n/g, "<br>") : "<em>No answer</em>") + "</div>" +
            '<div class="model-answer"><h4>Model answer</h4>' + EQS.mathify(q.written.answer) + rubric + "</div>" +
            '<div class="self-grade" data-grade-for="' + i + '">' +
            '<button class="btn small' + (g === 0 ? " primary" : "") + '" data-grade="0" type="button">0 · Missed</button>' +
            '<button class="btn small' + (g === 1 ? " primary" : "") + '" data-grade="1" type="button">1 · Partial</button>' +
            '<button class="btn small' + (g === 2 ? " primary" : "") + '" data-grade="2" type="button">2 · Full</button>' +
            "</div>" +
            "</article>"
          );
        })
        .join("");

    Array.from(list.querySelectorAll("[data-grade]")).forEach((btn) => {
      btn.addEventListener("click", () => {
        const i = Number(btn.closest("[data-grade-for]").dataset.gradeFor);
        const score = Number(btn.dataset.grade);
        state.selfGrades[i] = score;
        save();
        const item = btn.closest(".review-item");
        item.classList.remove("unanswered", "correct", "incorrect");
        item.classList.add(score >= 1 ? "correct" : "incorrect");
        const marks = document.getElementById("marks-" + i);
        if (marks) marks.textContent = score + "/2";
        const row = btn.closest("[data-grade-for]");
        Array.from(row.querySelectorAll("[data-grade]")).forEach((b) => b.classList.toggle("primary", b === btn));
        updateResultsScore();
      });
    });
  }

  startScreen.hidden = false;

  document.addEventListener("keydown", (e) => {
    if (!active() || resultsScreen.hidden === false) return;
    const tag = (e.target && e.target.tagName || "").toLowerCase();
    if (tag === "textarea" || tag === "input" || tag === "select") return;
    if (["1", "2", "3", "4"].includes(e.key)) {
      const item = currentItem();
      if (item && item.section === "mcq") {
        const k = Number(e.key) - 1;
        const el = document.querySelector('#examOptions [data-opt="' + k + '"]');
        if (el) el.click();
      }
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(state.current + 1);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(state.current - 1);
    }
    if (e.key === "f" || e.key === "F") {
      e.preventDefault();
      toggleFlag();
    }
  });

  submitTop.addEventListener("click", askSubmit);
  flagBtn.addEventListener("click", toggleFlag);
  $("startFull").addEventListener("click", () => newExam("full"));
  $("startQuick").addEventListener("click", () => newExam("quick"));

  window.addEventListener("beforeunload", (e) => {
    if (active()) {
      e.preventDefault();
      e.returnValue = "";
    }
  });

  renderStart();
})();
