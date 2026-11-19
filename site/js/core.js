/* Core helpers, topic registry and question-generation engine.
   Works in the browser and in Node (for the generator test harness). */
(function (g) {
  const EQS = (g.EQS = g.EQS || {});
  EQS.VERSION = "1.0.0";

  EQS.TOPICS = [
    { id: "foundations", name: "Thinking Like an Economist", short: "Foundations", week: "Week 1", group: "Micro" },
    { id: "demand-supply", name: "Demand, Supply & Equilibrium", short: "Demand & Supply", week: "Week 2", group: "Micro" },
    { id: "elasticity", name: "Elasticity", short: "Elasticity", week: "Weeks 2–3", group: "Micro" },
    { id: "consumer-choice", name: "Consumer Choice & Surplus", short: "Consumer Choice", week: "Week 3", group: "Micro" },
    { id: "costs-competition", name: "Costs, Profit & Perfect Competition", short: "Costs & Competition", week: "Weeks 3–4", group: "Micro" },
    { id: "monopoly", name: "Monopoly & Regulation", short: "Monopoly", week: "Week 4 + 12", group: "Micro" },
    { id: "government-failure", name: "Externalities, Public Goods & Government", short: "Market Failure", week: "Week 5", group: "Micro" },
    { id: "macro-measurement", name: "Measuring the Macroeconomy", short: "GDP & Prices", week: "Week 6", group: "Macro" },
    { id: "productivity", name: "Productivity & Why Countries Are Rich", short: "Productivity", week: "Week 7", group: "Macro" },
    { id: "growth", name: "Economic Growth", short: "Growth", week: "Week 9 + 12", group: "Macro" },
    { id: "institutions", name: "Institutions & Prosperity", short: "Institutions", week: "Week 10", group: "Macro" },
    { id: "policy", name: "Booms, Busts & Policy", short: "Policy", week: "Week 11 + 12", group: "Macro" }
  ];
  EQS.TOPIC_IDS = EQS.TOPICS.map((t) => t.id);
  EQS.topicById = {};
  EQS.TOPICS.forEach((t) => {
    EQS.topicById[t.id] = t;
  });

  /* ---------- randomness ---------- */
  EQS.ri = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  EQS.rf = function (min, max, dp) {
    const x = Math.random() * (max - min) + min;
    const p = Math.pow(10, dp == null ? 2 : dp);
    return Math.round(x * p) / p;
  };
  EQS.pick = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };
  EQS.chance = function (p) {
    return Math.random() < p;
  };
  EQS.shuffle = function (arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a;
  };
  EQS.sample = function (arr, n) {
    return EQS.shuffle(arr).slice(0, n);
  };
  EQS.unique = function (arr) {
    return Array.from(new Set(arr));
  };

  /* ---------- formatting ---------- */
  EQS.num = function (n, dp) {
    if (typeof n !== "number" || !isFinite(n)) return "—";
    const d = dp == null ? 0 : dp;
    return n.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
  };
  EQS.money = function (n, dp) {
    if (typeof n !== "number" || !isFinite(n)) return "—";
    const d = dp == null ? 0 : dp;
    return (n < 0 ? "−$" : "$") + Math.abs(n).toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
  };
  EQS.pct = function (n, dp) {
    if (typeof n !== "number" || !isFinite(n)) return "—";
    const d = dp == null ? 1 : dp;
    return n.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d }) + "%";
  };
  EQS.signedPct = function (n, dp) {
    if (typeof n !== "number" || !isFinite(n)) return "—";
    return (n > 0 ? "+" : "") + EQS.pct(n, dp);
  };
  EQS.pp = function (n, dp) {
    return EQS.num(n, dp == null ? 1 : dp) + " pp";
  };
  EQS.ratio = function (n, dp) {
    return EQS.num(n, dp == null ? 1 : dp) + "×";
  };
  EQS.roundTo = function (n, step) {
    return Math.round(n / step) * step;
  };
  EQS.ceilTo = function (n, step) {
    return Math.ceil(n / step) * step;
  };
  EQS.floorTo = function (n, step) {
    return Math.floor(n / step) * step;
  };
  EQS.clamp = function (n, lo, hi) {
    return Math.max(lo, Math.min(hi, n));
  };
  EQS.sum = function (arr) {
    return arr.reduce((a, b) => a + b, 0);
  };

  /* ---------- HTML helpers ---------- */
  EQS.esc = function (s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  };
  EQS.table = function (headers, rows, cls) {
    const head = headers.map((h) => "<th>" + h + "</th>").join("");
    const body = rows
      .map((r) => "<tr>" + r.map((c) => "<td>" + c + "</td>").join("") + "</tr>")
      .join("");
    return '<div class="table-wrap"><table class="data-table ' + (cls || "") + '"><thead><tr>' + head + "</tr></thead><tbody>" + body + "</tbody></table></div>";
  };
  EQS.list = function (items, cls) {
    return '<ul class="' + (cls || "clean-list") + '">' + items.map((i) => "<li>" + i + "</li>").join("") + "</ul>";
  };

  /* Lightweight LaTeX-ish formatter for the formula fragments used in the banks.
     No external library: \(...\) becomes a formula span, fractions become (a)/(b). */
  function mathInner(s) {
    let out = String(s);
    for (let i = 0; i < 4; i++) {
      out = out
        .replace(/\\dfrac\{([^{}]+)\}\{([^{}]+)\}/g, "($1)/($2)")
        .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, "($1)/($2)");
    }
    out = out.replace(/\\text\{([^{}]+)\}/g, "$1");
    out = out.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    out = out
      .replace(/\^\{([^{}]+)\}/g, "<sup>$1</sup>")
      .replace(/_\{([^{}]+)\}/g, "<sub>$1</sub>")
      .replace(/\^([A-Za-z0-9])/g, "<sup>$1</sup>")
      .replace(/_([A-Za-z0-9])/g, "<sub>$1</sub>")
      .replace(/\\times/g, "×")
      .replace(/\\div/g, "÷")
      .replace(/\\approx/g, "≈")
      .replace(/\\geq?/g, "≥")
      .replace(/\\leq?/g, "≤")
      .replace(/\\rightarrow|\\to/g, "→")
      .replace(/\\Delta/g, "Δ")
      .replace(/\\pi/g, "π")
      .replace(/\\cdot/g, "·")
      .replace(/\\%/g, "%")
      .replace(/\\[,;:!]/g, " ")
      .replace(/\\\\/g, " ")
      .replace(/\\/g, "");
    return out;
  }
  EQS.mathify = function (html) {
    if (html == null) return "";
    return String(html)
      .replace(/\\\[([\s\S]+?)\\\]/g, function (m, inner) {
        return '<span class="formula formula-block">' + mathInner(inner) + "</span>";
      })
      .replace(/\\\(([\s\S]+?)\\\)/g, function (m, inner) {
        return '<span class="formula">' + mathInner(inner) + "</span>";
      });
  };

  /* ---------- MCQ option construction ---------- */
  EQS.optionsFrom = function (correct, wrong) {
    const seen = new Set();
    const all = [];
    const add = (x) => {
      const s = String(x);
      if (!seen.has(s)) {
        seen.add(s);
        all.push({ text: s, isCorrect: s === String(correct) });
      }
    };
    add(correct);
    for (const w of wrong || []) {
      if (all.length >= 4) break;
      add(w);
    }
    if (all.length < 4) {
      const cstr = String(correct);
      const m = cstr.match(/[−-]?\d[\d,]*\.?\d*/);
      if (m) {
        const raw = parseFloat(m[0].replace(/[−,]/g, "-"));
        const prefix = cstr.slice(0, m.index);
        const suffix = cstr.slice(m.index + m[0].length);
        const dp = (m[0].split(".")[1] || "").length;
        [0.5, 1.5, 2, 0.75, 1.25].forEach((mult) => {
          if (all.length >= 4) return;
          const v = Math.round(raw * mult * 100) / 100;
          add(prefix + EQS.num(v, dp) + suffix);
        });
      }
    }
    const fillers = [
      "Cannot be determined from the information given",
      "None of the above",
      "The answer depends on additional information",
      "Not enough information to answer"
    ];
    for (const f of fillers) {
      if (all.length >= 4) break;
      add(f);
    }
    const shuffled = EQS.shuffle(all);
    return {
      options: shuffled.map((o) => o.text),
      correct: shuffled.findIndex((o) => o.isCorrect)
    };
  };

  /* ---------- registry ---------- */
  EQS.registry = [];
  EQS._uid = 0;

  EQS.register = function (def) {
    if (!def || typeof def.gen !== "function" || !def.topic) return;
    const entry = {
      id: def.id || "gen-" + ++EQS._uid,
      topic: def.topic,
      subtopic: def.subtopic || "",
      difficulty: def.difficulty || "medium",
      mode: def.mode || "numeric",
      supports: def.supports || ["mcq", "written"],
      source: def.source || "",
      static: !!def.static,
      gen: def.gen
    };
    EQS.registry.push(entry);
    return entry;
  };

  EQS.registerNumeric = function (def) {
    return EQS.register(Object.assign({ mode: "numeric" }, def));
  };

  EQS.addMcqBank = function (topic, items) {
    items.forEach((item, i) => {
      EQS.register({
        id: "bank-mcq-" + topic + "-" + i,
        topic: topic,
        subtopic: item.subtopic || "",
        difficulty: item.difficulty || "medium",
        mode: "theory",
        supports: ["mcq"],
        source: item.source || "",
        static: true,
        gen: function () {
          const o = EQS.optionsFrom(item.correct, item.wrong);
          return {
            topic: topic,
            subtopic: item.subtopic || "",
            difficulty: item.difficulty || "medium",
            source: item.source || "",
            mcq: {
              prompt: item.q,
              options: o.options,
              correct: o.correct,
              explanation: item.why || ""
            }
          };
        }
      });
    });
  };

  EQS.addWrittenBank = function (topic, items) {
    items.forEach((item, i) => {
      EQS.register({
        id: "bank-written-" + topic + "-" + i,
        topic: topic,
        subtopic: item.subtopic || "",
        difficulty: item.difficulty || "medium",
        mode: "theory",
        supports: ["written"],
        source: item.source || "",
        static: true,
        gen: function () {
          return {
            topic: topic,
            subtopic: item.subtopic || "",
            difficulty: item.difficulty || "medium",
            source: item.source || "",
            written: {
              prompt: item.q,
              answer: item.answer || item.model || "",
              rubric: item.rubric || null
            }
          };
        }
      });
    });
  };

  /* Numeric helper: builds both an MCQ and a written question around one scenario.
     cfg: {topic, subtopic, difficulty, source, prompt, writtenPrompt, correct, wrong,
           explanation, answer, rubric, trap, key} */
  EQS.numeric = function (cfg) {
    const o = EQS.optionsFrom(cfg.correct, cfg.wrong || []);
    return {
      topic: cfg.topic,
      subtopic: cfg.subtopic || "",
      difficulty: cfg.difficulty || "medium",
      source: cfg.source || "",
      key: cfg.key || "",
      mcq: {
        prompt: cfg.prompt,
        options: o.options,
        correct: o.correct,
        explanation: cfg.explanation || cfg.answer || "",
        trap: cfg.trap || ""
      },
      written: {
        prompt: cfg.writtenPrompt || (cfg.prompt + " Show your working."),
        answer: cfg.answer || cfg.explanation || "",
        rubric: cfg.rubric || null,
        trap: cfg.trap || ""
      }
    };
  };

  /* Theory helper for one-off generated application questions. */
  EQS.theory = function (cfg) {
    const o = EQS.optionsFrom(cfg.correct, cfg.wrong || []);
    return {
      topic: cfg.topic,
      subtopic: cfg.subtopic || "",
      difficulty: cfg.difficulty || "medium",
      source: cfg.source || "",
      key: cfg.key || "",
      mcq: {
        prompt: cfg.prompt,
        options: o.options,
        correct: o.correct,
        explanation: cfg.explanation || cfg.why || ""
      },
      written: cfg.writtenPrompt
        ? {
            prompt: cfg.writtenPrompt,
            answer: cfg.answer || cfg.explanation || "",
            rubric: cfg.rubric || null
          }
        : null
    };
  };

  EQS.norm = function (s) {
    return String(s || "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  };

  /* Generate one question.
     opts: {topic|topics, type:'mcq'|'written', difficulty, excludePrompts:Set, excludeIds:Set} */
  EQS.generateOne = function (opts) {
    const topics = opts.topics || (opts.topic ? [opts.topic] : EQS.TOPIC_IDS);
    const type = opts.type || "mcq";
    const diff = opts.difficulty || "mixed";
    const excludePrompts = opts.excludePrompts || new Set();
    const excludeIds = opts.excludeIds || new Set();
    const starts = EQS.shuffle(topics.slice());
    for (const topic of starts) {
      const q = EQS.generateForTopic(topic, type, diff, excludePrompts, excludeIds);
      if (q) return q;
    }
    if (diff !== "mixed") {
      return EQS.generateOne(Object.assign({}, opts, { difficulty: "mixed" }));
    }
    return null;
  };

  EQS.generateForTopic = function (topic, type, diff, excludePrompts, excludeIds) {
    let pool = EQS.registry.filter(
      (e) => e.topic === topic && e.supports.indexOf(type) >= 0 && (diff === "mixed" || e.difficulty === diff)
    );
    if (!pool.length) {
      pool = EQS.registry.filter((e) => e.topic === topic && e.supports.indexOf(type) >= 0);
    }
    if (!pool.length) return null;
    const entries = EQS.shuffle(pool);
    for (const entry of entries) {
      if (entry.static && excludeIds.has(entry.id)) continue;
      for (let attempt = 0; attempt < 14; attempt++) {
        let q;
        try {
          q = entry.gen();
        } catch (err) {
          q = null;
        }
        if (!q) continue;
        const block = type === "mcq" ? q.mcq : q.written;
        if (!block || !block.prompt) continue;
        const key = EQS.norm(block.prompt);
        if (excludePrompts.has(key)) continue;
        return {
          entryId: entry.id,
          mode: entry.mode,
          static: entry.static,
          type: type,
          topic: entry.topic,
          subtopic: q.subtopic || entry.subtopic,
          difficulty: q.difficulty || entry.difficulty,
          source: q.source || entry.source,
          key: key,
          mcq: q.mcq || null,
          written: q.written || null
        };
      }
    }
    return null;
  };

  EQS.distribute = function (total, n) {
    const base = Math.floor(total / n);
    let extra = total - base * n;
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(base + (extra > 0 ? 1 : 0));
      if (extra > 0) extra--;
    }
    return arr;
  };

  /* Build a balanced exam set. Extra questions favour the first topics in the list. */
  EQS.buildSet = function (opts) {
    const topics = opts.topics && opts.topics.length ? opts.topics : EQS.TOPIC_IDS;
    const mcqCount = opts.mcqCount == null ? 25 : opts.mcqCount;
    const writtenCount = opts.writtenCount == null ? 25 : opts.writtenCount;
    const difficulty = opts.difficulty || "mixed";
    const usedPrompts = new Set();
    const usedStatic = new Set();
    const mcqs = [];
    const writtens = [];

    function fill(list, type, count) {
      const counts = EQS.distribute(count, topics.length);
      let deficit = 0;
      topics.forEach((topic, i) => {
        for (let k = 0; k < counts[i]; k++) {
          const q = EQS.generateForTopic(topic, type, difficulty, usedPrompts, usedStatic);
          if (q) {
            usedPrompts.add(q.key);
            if (q.static) usedStatic.add(q.entryId);
            list.push(q);
          } else {
            deficit++;
          }
        }
      });
      let guard = 0;
      while (list.length < count && guard++ < count * 12) {
        const q = EQS.generateOne({
          topics: topics,
          type: type,
          difficulty: difficulty,
          excludePrompts: usedPrompts,
          excludeIds: usedStatic
        });
        if (!q) break;
        usedPrompts.add(q.key);
        if (q.static) usedStatic.add(q.entryId);
        list.push(q);
      }
      return deficit;
    }

    fill(mcqs, "mcq", mcqCount);
    fill(writtens, "written", writtenCount);
    return {
      mcqs: EQS.shuffle(mcqs),
      writtens: EQS.shuffle(writtens),
      topics: topics,
      difficulty: difficulty
    };
  };

  /* ---------- storage ---------- */
  EQS.store = {
    get: function (key, fallback) {
      try {
        const raw = g.localStorage ? g.localStorage.getItem(key) : null;
        return raw ? JSON.parse(raw) : fallback;
      } catch (e) {
        return fallback;
      }
    },
    set: function (key, value) {
      try {
        if (g.localStorage) g.localStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
        /* ignore quota / privacy errors */
      }
    },
    del: function (key) {
      try {
        if (g.localStorage) g.localStorage.removeItem(key);
      } catch (e) {
        /* ignore */
      }
    }
  };

  EQS.topicName = function (id) {
    return (EQS.topicById[id] && EQS.topicById[id].name) || id;
  };
})(typeof window !== "undefined" ? window : globalThis);
