import { JSDOM, VirtualConsole } from "jsdom";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const vc = new VirtualConsole();
const errors = [];
vc.on("jsdomError", (e) => errors.push("jsdomError: " + e.message));
vc.on("error", (...a) => errors.push("console.error: " + a.join(" ")));

const dom = await JSDOM.fromURL("http://localhost:4173/practice.html", {
  runScripts: "dangerously",
  resources: "usable",
  pretendToBeVisual: true,
  virtualConsole: vc,
  beforeParse(w) {
    w.scrollTo = () => {};
    w.confirm = () => true;
    w.Element.prototype.scrollIntoView = () => {};
  }
});
await sleep(700);
const w = dom.window;
const d = w.document;
const topicSelect = d.getElementById("topicSelect");
const typeSelect = d.getElementById("typeSelect");
const diffSelect = d.getElementById("difficultySelect");
const problems = [];
const topics = Array.from(topicSelect.options).map((o) => o.value);

for (const topic of topics) {
  for (const type of ["mcq", "written"]) {
    for (const diff of ["easy", "medium", "hard"]) {
      topicSelect.value = topic;
      typeSelect.value = type;
      diffSelect.value = diff;
      typeSelect.dispatchEvent(new w.Event("change", { bubbles: true }));
      await sleep(20);
      const card = d.querySelector("#qStage .q-card");
      if (!card) { problems.push(topic + "/" + type + "/" + diff + ": no card"); continue; }
      const text = card.textContent;
      if (/undefined|NaN|\[object Object\]/.test(text)) problems.push(topic + "/" + type + "/" + diff + ": bad text");
      if (type === "mcq") {
        const opts = d.querySelectorAll(".option");
        if (opts.length !== 4) problems.push(topic + "/" + type + "/" + diff + ": options=" + opts.length);
        else {
          opts[1].click();
          const check = d.getElementById("checkBtn");
          if (!check) problems.push(topic + "/mcq/" + diff + ": no check button");
          else {
            check.click();
            if (!d.querySelector("#feedback .feedback")) problems.push(topic + "/mcq/" + diff + ": no feedback");
          }
        }
      } else {
        const ta = d.getElementById("writtenAnswer");
        if (!ta) problems.push(topic + "/written/" + diff + ": no textarea");
        else {
          const rev = d.getElementById("revealBtn");
          if (!rev) problems.push(topic + "/written/" + diff + ": no reveal button");
          else {
            rev.click();
            if (!d.querySelector(".model-answer")) problems.push(topic + "/written/" + diff + ": no model answer");
            const grade = d.querySelector("[data-score]");
            if (!grade) problems.push(topic + "/written/" + diff + ": no grade button");
            else grade.click();
          }
        }
      }
    }
  }
}
w.close();
if (errors.length) problems.push(...errors);
console.log(problems.length ? "Problems:\n" + problems.join("\n") : "Practice topic sweep passed (" + topics.length + " topics × 2 types × 3 difficulties).");
if (problems.length) process.exitCode = 1;
