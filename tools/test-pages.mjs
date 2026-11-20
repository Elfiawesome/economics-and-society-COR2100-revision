import { JSDOM, VirtualConsole } from "jsdom";

const BASE = "http://localhost:4173/";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const problems = [];
const log = (s) => console.log(s);

async function load(page) {
  const errors = [];
  const vc = new VirtualConsole();
  vc.on("jsdomError", (e) => errors.push("jsdomError: " + e.message));
  vc.on("error", (...a) => errors.push("console.error: " + a.join(" ")));
  const dom = await JSDOM.fromURL(BASE + page, {
    runScripts: "dangerously",
    resources: "usable",
    pretendToBeVisual: true,
    virtualConsole: vc,
    beforeParse(window) {
      window.scrollTo = () => {};
      window.confirm = () => true;
      window.alert = (m) => errors.push("alert: " + m);
      if (window.Element) window.Element.prototype.scrollIntoView = () => {};
    }
  });
  await sleep(700);
  return { dom, errors };
}

function assert(cond, msg) {
  if (!cond) problems.push(msg);
}

log("Loading notes...");
{
  const { dom, errors } = await load("notes.html");
  const w = dom.window;
  assert(!!w.EQS, "notes: EQS missing");
  assert(w.document.querySelectorAll("#toc li").length > 40, "notes: TOC not populated");
  assert(w.document.querySelectorAll(".chapter").length >= 13, "notes: chapters missing");
  assert(w.document.querySelectorAll(".chapter-check input").length >= 12, "notes: study checkboxes missing");
  assert(w.document.querySelectorAll("#notesMain details").length >= 7, "notes: worked details missing");
  const search = w.document.getElementById("tocSearch");
  search.value = "monopoly";
  search.dispatchEvent(new w.Event("input", { bubbles: true }));
  const visible = Array.from(w.document.querySelectorAll("#toc li")).filter((x) => x.style.display !== "none").length;
  assert(visible > 0 && visible < 20, "notes: search filter did not narrow the TOC (" + visible + ")");
  if (errors.length) problems.push(...errors.map((e) => "notes: " + e));
  dom.window.close();
}

log("Loading cheatsheet...");
{
  const { dom, errors } = await load("cheatsheet.html");
  assert(dom.window.document.querySelectorAll(".mini-formula").length > 40, "cheatsheet: formula rows missing");
  if (errors.length) problems.push(...errors.map((e) => "cheatsheet: " + e));
  dom.window.close();
}

log("Loading practice...");
{
  const { dom, errors } = await load("practice.html");
  const w = dom.window;
  assert(!!w.EQS, "practice: EQS missing");
  assert(w.document.querySelectorAll("#topicSelect option").length >= 13, "practice: topic options missing");
  const stage = w.document.getElementById("qStage");
  assert(stage.textContent.trim().length > 0, "practice: no question rendered");
  const optionCount = w.document.querySelectorAll(".option").length;
  const hasText = !!w.document.getElementById("writtenAnswer");
  assert(optionCount === 4 || hasText, "practice: question did not render as MCQ or written");
  if (optionCount === 4) {
    w.document.querySelectorAll(".option")[0].click();
    const check = w.document.getElementById("checkBtn");
    assert(check && !check.disabled, "practice: check button not enabled after selection");
    check.click();
    assert(!!w.document.querySelector("#feedback .feedback"), "practice: no feedback after checking");
    assert(w.document.querySelectorAll(".option.correct").length === 1, "practice: correct option not marked");
  }
  const newBtn = w.document.getElementById("newBtn");
  const before = stage.textContent;
  newBtn.click();
  await sleep(50);
  assert(stage.textContent !== before || w.document.querySelectorAll("#qStage .q-card").length > 0, "practice: new question did not render");
  const graphOnly = w.document.getElementById("graphOnly");
  assert(!!graphOnly, "practice: graphs-only checkbox missing");
  if (graphOnly) {
    w.document.getElementById("typeSelect").value = "mcq";
    w.document.getElementById("typeSelect").dispatchEvent(new w.Event("change", { bubbles: true }));
    graphOnly.checked = true;
    graphOnly.dispatchEvent(new w.Event("change", { bubbles: true }));
    await sleep(80);
    assert(!!w.document.querySelector("#qStage .q-graph svg"), "practice: graphs-only did not render an SVG graph");
  }
  if (errors.length) problems.push(...errors.map((e) => "practice: " + e));
  dom.window.close();
}

log("Loading exam and sitting a full paper...");
{
  const { dom, errors } = await load("exam.html");
  const w = dom.window;
  const d = w.document;
  assert(!!w.EQS, "exam: EQS missing");
  const graphCheck = w.EQS.buildSet({ mcqCount: 25, writtenCount: 25 });
  assert(graphCheck.mcqs.filter((q) => q.graph).length >= 3, "exam: full set has too few graph MCQs");
  assert(graphCheck.writtens.filter((q) => q.graph).length >= 2, "exam: full set has too few graph written questions");
  const start = d.getElementById("startFull");
  assert(!!start, "exam: start button missing");
  start.click();
  await sleep(300);
  assert(d.getElementById("examScreen").hidden === false, "exam: exam screen did not open");
  assert(d.querySelectorAll("#qnav button").length === 50, "exam: navigator is not 50 questions (" + d.querySelectorAll("#qnav button").length + ")");
  assert(d.querySelectorAll("#examOptions .option").length === 4, "exam: first question is not a 4-option MCQ");
  d.querySelectorAll("#examOptions .option")[0].click();
  assert(d.querySelectorAll("#qnav button.answered").length === 1, "exam: answer not reflected in navigator");
  const timerText = d.getElementById("timer").textContent;
  assert(/^\d+:\d\d:\d\d$/.test(timerText), "exam: timer format wrong: " + timerText);
  // Jump to the first written question (question 26).
  const nav = d.querySelectorAll("#qnav button");
  nav[25].click();
  await sleep(50);
  assert(!!d.getElementById("examText"), "exam: written question did not render a textarea");
  const ta = d.getElementById("examText");
  ta.value = "This is a test answer with a formula and an interpretation.";
  ta.dispatchEvent(new w.Event("input", { bubbles: true }));
  assert(d.querySelectorAll("#qnav button.answered").length === 2, "exam: written answer not reflected in navigator");
  // Submit.
  d.getElementById("submitTop").click();
  await sleep(150);
  assert(d.getElementById("resultsScreen").hidden === false, "exam: results screen did not open");
  assert(!!d.getElementById("scorePct"), "exam: score summary missing");
  const reviews = d.querySelectorAll(".review-item").length;
  assert(reviews === 50, "exam: review list should have 50 questions, got " + reviews);
  const gradeButtons = d.querySelectorAll("[data-grade]");
  assert(gradeButtons.length === 75, "exam: expected 25 written × 3 grade buttons, got " + gradeButtons.length);
  const beforeScore = d.getElementById("scorePct").textContent;
  gradeButtons[2].click();
  await sleep(50);
  const afterScore = d.getElementById("scorePct").textContent;
  assert(beforeScore !== afterScore, "exam: self-grade did not update the score");
  if (errors.length) problems.push(...errors.map((e) => "exam: " + e));
  dom.window.close();
}

if (problems.length) {
  console.log("\nPAGE TEST PROBLEMS (" + problems.length + "):");
  problems.forEach((p) => console.log(" - " + p));
  process.exitCode = 1;
} else {
  console.log("\nAll page tests passed.");
}
