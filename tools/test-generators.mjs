import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const files = [
  "site/js/core.js",
  "site/js/bank-micro-mcq.js",
  "site/js/bank-macro-mcq.js",
  "site/js/bank-written.js",
  "site/js/gen-foundations.js",
  "site/js/gen-demand.js",
  "site/js/gen-consumer-costs.js",
  "site/js/gen-monopoly.js",
  "site/js/gen-government.js",
  "site/js/gen-macro.js",
  "site/js/gen-institutions-policy.js",
  "site/js/gen-graphs.js"
];

for (const f of files) {
  const code = fs.readFileSync(path.join(root, f), "utf8");
  vm.runInThisContext(code, { filename: f });
}

const EQS = globalThis.EQS;
const problems = [];
const bad = (msg) => {
  if (problems.length < 40) problems.push(msg);
};
const hasBadText = (s) =>
  /undefined|NaN|\[object Object\]|Infinity/.test(String(s || ""));

function validateQ(q, label, expect) {
  if (!q) return bad(label + ": returned null");
  if (expect === "mcq") {
    if (!q.mcq) return bad(label + ": missing mcq");
    const m = q.mcq;
    if (!m.prompt) bad(label + ": empty mcq prompt");
    if (!Array.isArray(m.options) || m.options.length !== 4) bad(label + ": expected 4 options, got " + (m.options && m.options.length));
    if (m.options && new Set(m.options).size !== m.options.length) bad(label + ": duplicate options " + JSON.stringify(m.options));
    if (!(m.correct >= 0 && m.correct < 4)) bad(label + ": bad correct index " + m.correct);
    if (!m.explanation) bad(label + ": empty explanation");
    if (hasBadText(m.prompt + " " + m.options.join(" ") + " " + m.explanation)) bad(label + ": bad text in mcq");
    if (m.options.some((o) => !String(o).trim())) bad(label + ": blank option");
  } else {
    if (!q.written) return bad(label + ": missing written");
    const w = q.written;
    if (!w.prompt) bad(label + ": empty written prompt");
    if (!w.answer) bad(label + ": empty written answer");
    if (hasBadText(w.prompt + " " + w.answer)) bad(label + ": bad text in written");
  }
}

const byTopic = {};
for (const t of EQS.TOPICS) byTopic[t.id] = { mcq: 0, written: 0, numeric: 0, theory: 0 };

for (const entry of EQS.registry) {
  const slot = byTopic[entry.topic];
  if (!slot) {
    bad("Unknown topic: " + entry.topic);
    continue;
  }
  for (const type of entry.supports) {
    if (type === "mcq") slot.mcq++;
    if (type === "written") slot.written++;
  }
  if (entry.mode === "numeric") slot.numeric++;
  else slot.theory++;
  const runs = 60;
  for (let i = 0; i < runs; i++) {
    let q;
    try {
      q = entry.gen();
    } catch (err) {
      bad(entry.id + " threw: " + err.message);
      break;
    }
    for (const type of entry.supports) validateQ(q, entry.id + " [" + type + "]", type);
  }
}

console.log("\nRegistry counts by topic:");
for (const t of EQS.TOPICS) {
  const s = byTopic[t.id];
  console.log(
    "  " + t.id.padEnd(20) + " mcq=" + String(s.mcq).padStart(3) + "  written=" + String(s.written).padStart(3) +
    "  numeric=" + String(s.numeric).padStart(2) + "  theory=" + String(s.theory).padStart(2)
  );
}

for (const t of EQS.TOPICS) {
  const s = byTopic[t.id];
  if (s.mcq < 2) bad("Topic " + t.id + " has fewer than 2 MCQ generators");
  if (s.written < 2) bad("Topic " + t.id + " has fewer than 2 written generators");
}

console.log("\nBuilding 20 full exam sets...");
for (let run = 0; run < 20; run++) {
  const set = EQS.buildSet({ mcqCount: 25, writtenCount: 25 });
  if (set.mcqs.length !== 25) bad("Exam run " + run + ": mcq count " + set.mcqs.length);
  if (set.writtens.length !== 25) bad("Exam run " + run + ": written count " + set.writtens.length);
  const mp = set.mcqs.map((q) => q.key);
  const wp = set.writtens.map((q) => q.key);
  if (new Set(mp).size !== mp.length) bad("Exam run " + run + ": duplicate MCQ prompts");
  if (new Set(wp).size !== wp.length) bad("Exam run " + run + ": duplicate written prompts");
  if (new Set(mp.concat(wp)).size !== mp.length + wp.length) bad("Exam run " + run + ": prompt appears in both sections");
  const graphMcq = set.mcqs.filter((q) => q.graph).length;
  const graphWritten = set.writtens.filter((q) => q.graph).length;
  if (graphMcq < 3) bad("Exam run " + run + ": only " + graphMcq + " graph MCQs");
  if (graphWritten < 2) bad("Exam run " + run + ": only " + graphWritten + " graph written questions");
  const dist = {};
  for (const q of set.mcqs) dist[q.topic] = (dist[q.topic] || 0) + 1;
  if (Object.keys(dist).length < 10) bad("Exam run " + run + ": MCQ not balanced across topics: " + JSON.stringify(dist));
  for (const q of set.mcqs) validateQ(q, "exam-mcq-" + run, "mcq");
  for (const q of set.writtens) validateQ(q, "exam-written-" + run, "written");
}
console.log("Done.");

if (problems.length) {
  console.log("\nPROBLEMS (" + problems.length + " shown):");
  problems.forEach((p) => console.log(" - " + p));
  process.exitCode = 1;
} else {
  console.log("\nAll generator checks passed.");
}
