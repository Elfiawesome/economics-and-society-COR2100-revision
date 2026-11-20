# E&S Final Study System

Static study site built from the Week 1–12 slides, weekly quizzes, Week 8 midterm practice, Week 12 final review and transcript.

## Live site (GitHub Pages)

The site publishes from `site/` through `.github/workflows/pages.yml`. Once Pages is enabled, the URL should be:

**https://elfiawesome.github.io/economics-and-society-COR2100-revision/**

To enable it the first time:

1. Push the commit containing `.github/workflows/pages.yml`, `site/.nojekyll` and the site files.
2. Open the repository on GitHub → **Settings** → **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the **Actions** tab → **Deploy static site to GitHub Pages** → **Run workflow** (a push to `master`/`main` also triggers it).
5. Wait for the deployment to finish. The live URL appears in the deployment and in **Settings → Pages**.

The workflow uploads the `site/` folder directly, so there is no build step, no `node_modules` on Pages, and no duplicated `docs/` folder. The site uses relative links, so it works correctly under the repository subpath (`/<repo-name>/`).

If Pages is currently set to “Deploy from a branch”, switch it to **GitHub Actions**; otherwise the workflow will not publish.

## Run it

No npm packages are required to run the site. From the project root:

```powershell
node server.mjs
```

Then open <http://localhost:4173>. If your PowerShell execution policy allows npm scripts, `npm start` does the same thing.

The site itself has no dependencies. `npm install` is only needed if you want to run the jsdom page tests (`npm run test:pages`).

You can also open `site/index.html` directly in a browser; the site is fully static and has no build step. The local server is only there to make relative paths clean.

## Pages

- `site/questions.html` — Question Bank. A searchable inventory of every MCQ and written question type, with a coverage table by topic, format/kind/difficulty filters, and expandable samples showing the question, options, correct answer, explanation and model answer.
- `site/notes.html` — all 12 topics reorganized into causal order. Elasticity is consolidated into demand; Week 4 monopoly is merged with the Week 12 final review; Week 7–10 is one growth sequence; Week 11 is one policy framework. Admin slides are removed.
- `site/cheatsheet.html` — every formula, graph-reading recipe, exam trigger table and trap list, arranged for the handwritten A4 cheat sheet.
- `site/practice.html` — infinite question generator. Numeric questions get new values, companies and countries; theory and application questions are mixed in. Full solutions and marking checklists. The **Graphs & diagrams only** checkbox (or `practice.html?graphs=1`) drills labelled-area and graph-reading questions.
- `site/exam.html` — 25 MCQ + 25 written exam simulator. Two-hour timer, question navigator, auto-marked MCQs, self-marked written section, topic breakdown and review. Every full paper is guaranteed to include at least 3 graph MCQs and 2 graph written questions.

## Tech stack

- Vanilla HTML/CSS/JS. No external libraries, no CDN, no build step.
- `server.mjs` uses only Node's built-in `http`, `fs` and `path`.
- `tools/extract_pdfs.py` uses the local `.venv` and `pypdf` to extract slide text. It is not needed to run the site.
- `tools/test-generators.mjs` loads every generator in Node and checks option counts, duplicates, bad text, topic balance and 20 full 25+25 exam builds.

## How the generator works

`site/js/core.js` provides the registry and helpers. Each generator is registered with a topic, subtopic, difficulty and a `gen()` function that returns:

```js
{
  mcq: { prompt, options, correct, explanation },
  written: { prompt, answer, rubric }
}
```

Numeric generators use `EQS.numeric(...)`; application generators use `EQS.theory(...)`; static theory banks use `EQS.addMcqBank(...)` and `EQS.addWrittenBank(...)`.

To add a question, add an item to the relevant bank in `site/js/bank-*.js`, or create a generator in `site/js/gen-*.js`. Run:

```powershell
npm run test:generators
```

The exam builder distributes 25 MCQs and 25 written questions across all 12 topics, avoids duplicate prompts and builds both sections from the same registry. Written questions can come from numeric generators or the written theory bank.

## Marking

Each question is worth 2 marks in the simulator. MCQs are auto-marked. Written answers show a model answer and a checklist; you self-mark 0 (missed), 1 (partial) or 2 (full). The full paper is out of 100.

## Project layout

```
.github/workflows/pages.yml   # GitHub Pages deployment
site/
  .nojekyll
  index.html
  notes.html
  questions.html
  practice.html
  exam.html
  cheatsheet.html
  css/style.css
  js/
    core.js
    bank-micro-mcq.js
    bank-macro-mcq.js
    bank-written.js
    gen-foundations.js
    gen-demand.js
    gen-consumer-costs.js
    gen-monopoly.js
    gen-government.js
    gen-macro.js
    gen-institutions-policy.js
    gen-graphs.js
    notes.js
    questions.js
    practice.js
    exam.js
tools/
  extract_pdfs.py
  test-generators.mjs
server.mjs
```

## Notes on the source material

- The weekly quiz answers are used as style and coverage references, not copied verbatim.
- The Week 12 final review and transcript are the source for the monopoly worked problems, growth problems and the fiscal/monetary policy recap.
- The site follows the course's conventions: initial-value percentage changes, `MR = MC` then price from demand, base-year real GDP, GDP deflator, PPP price ratio, and Rule of 70 using the growth rate in percent.
