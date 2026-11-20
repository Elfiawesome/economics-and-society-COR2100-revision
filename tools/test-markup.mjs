import fs from "node:fs";
import path from "node:path";
import { JSDOM } from "jsdom";

const site = path.resolve("site");
const pages = ["index.html", "notes.html", "questions.html", "practice.html", "exam.html", "cheatsheet.html"];
const problems = [];

for (const page of pages) {
  const html = fs.readFileSync(path.join(site, page), "utf8");
  const dom = new JSDOM(html);
  const doc = dom.window.document;
  const ids = Array.from(doc.querySelectorAll("[id]")).map((x) => x.id);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) problems.push(page + ": duplicate ids: " + [...new Set(dupes)].join(", "));
  for (const a of doc.querySelectorAll('a[href^="#"]')) {
    const id = a.getAttribute("href").slice(1);
    if (id && !doc.getElementById(id)) problems.push(page + ": missing anchor #" + id);
  }
  for (const el of doc.querySelectorAll('link[rel="stylesheet"], script[src]')) {
    const src = el.getAttribute("href") || el.getAttribute("src");
    if (!src || /^https?:/.test(src) || src.startsWith("data:")) continue;
    if (!fs.existsSync(path.join(site, src))) problems.push(page + ": missing local asset " + src);
  }
  const h1 = doc.querySelectorAll("h1").length;
  if (h1 !== 1) problems.push(page + ": expected 1 h1, got " + h1);
}
console.log(problems.length ? problems.join("\n") : "Markup/link checks passed.");
if (problems.length) process.exitCode = 1;
