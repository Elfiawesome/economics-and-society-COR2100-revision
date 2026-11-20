/* Procedural graph/diagram questions: labelled areas, points and curves.
   Every prompt embeds an inline SVG so the same question works in practice and exam mode. */
(function (g) {
  const EQS = g.EQS;

  const W = 680;
  const H = 420;

  function axes() {
    return (
      '<rect x="0" y="0" width="' + W + '" height="' + H + '" fill="#fffdf8"/>' +
      '<line class="axis" x1="70" y1="350" x2="650" y2="350"/>' +
      '<line class="axis" x1="70" y1="350" x2="70" y2="40"/>' +
      '<text x="655" y="345" text-anchor="end">Q</text>' +
      '<text x="58" y="50" text-anchor="end">P</text>'
    );
  }

  function figure(inner, aria, caption) {
    return (
      '<figure class="q-graph"><svg viewBox="0 0 680 420" role="img" aria-label="' +
      EQS.esc(aria) +
      '">' +
      axes() +
      inner +
      "</svg><figcaption>" +
      (caption || "Graph is illustrative; not drawn exactly to scale.") +
      "</figcaption></figure>"
    );
  }

  function line(x1, y1, x2, y2, cls) {
    return '<line class="' + (cls || "curve") + '" x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '"/>';
  }

  function poly(points, cls) {
    return '<polygon class="' + (cls || "shade-soft") + '" points="' + points + '"/>';
  }

  function dash(x1, y1, x2, y2) {
    return '<line class="dash" x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '"/>';
  }

  function dot(x, y) {
    return '<circle class="point" cx="' + x + '" cy="' + y + '" r="3.6"/>';
  }

  function txt(x, y, text, cls, anchor) {
    return (
      '<text x="' + x + '" y="' + y + '" text-anchor="' + (anchor || "middle") + '"' +
      (cls ? ' class="' + cls + '"' : "") + ">" + text + "</text>"
    );
  }

  function assignLabels(keys) {
    const letters = EQS.shuffle(["A", "B", "C", "D"]);
    const map = {};
    keys.forEach((k, i) => (map[k] = letters[i]));
    return map;
  }

  function combo(labels, keys) {
    return keys.map((k) => labels[k]).join(" + ");
  }

  function wrongFrom(correct, pool) {
    const out = EQS.unique(pool.filter((x) => x !== correct));
    return out.slice(0, 3);
  }

  function figureCaption(text) {
    return text + " Areas are labelled; use the curves and dashed guides to identify the relevant region.";
  }

  /* ---------------- 1. Monopoly welfare areas ---------------- */
  EQS.registerNumeric({
    topic: "monopoly",
    subtopic: "Graph interpretation",
    difficulty: "hard",
    graph: true,
    source: "Week 4 + 12 · Monopoly graph",
    gen: function () {
      const labels = assignLabels(["CS", "PROFIT", "FIXED", "DWL"]);
      const Qm = 318.8;
      const Pm = 179.4;
      const Qc = 440;
      const atcY = 210.8;
      const mcY = 240;
      const fig = figure(
        line(70, 55, 600, 320) +
          line(70, 55, 420, 320) +
          line(70, 240, 630, 240) +
          line(70, 185, 600, 245) +
          dash(70, Pm, Qm, Pm) +
          dash(Qm, Pm, Qm, 350) +
          dash(Qc, mcY, Qc, 350) +
          dash(70, atcY, Qm, atcY) +
          dash(70, mcY, 630, mcY) +
          dot(Qm, Pm) +
          dot(Qm, mcY) +
          dot(Qc, mcY) +
          txt(160, 140, labels.CS, "area-label") +
          txt(235, 194, labels.PROFIT, "area-label") +
          txt(235, 226, labels.FIXED, "area-label") +
          txt(342, 215, labels.DWL, "area-label") +
          txt(560, 314, "Demand", "lbl", "end") +
          txt(398, 315, "MR", "lbl", "start") +
          txt(625, 235, "MC", "lbl", "end") +
          txt(520, 228, "ATC", "lbl", "end") +
          txt(62, 183, "Pm", "", "end") +
          txt(Qm, 368, "Qm") +
          txt(Qc, 368, "Qc"),
        "Monopoly graph with demand, marginal revenue, marginal cost and average total cost curves, labelled areas A to D, quantities Qm and Qc, and price Pm",
        figureCaption("Monopoly.")
      );

      const variants = [
        {
          keys: ["CS"],
          q: "Which labelled area represents consumer surplus under monopoly?",
          why: "Consumer surplus is the area below demand and above the price paid, up to the monopoly quantity."
        },
        {
          keys: ["PROFIT"],
          q: "Which labelled area represents the monopolist's profit?",
          why: "Profit is the rectangle (P − ATC) × Q, the area between price and ATC over the monopoly quantity."
        },
        {
          keys: ["DWL"],
          q: "Which labelled area represents deadweight loss?",
          why: "DWL is the triangle between demand and MC from the monopoly quantity to the competitive quantity."
        },
        {
          keys: ["PROFIT", "FIXED"],
          q: "Which labelled area or combination represents producer surplus?",
          why: "Producer surplus is revenue minus variable cost: profit plus the area that covers fixed cost, (ATC − MC) × Q."
        },
        {
          keys: ["CS", "PROFIT", "FIXED"],
          q: "Which combination represents total surplus under monopoly?",
          why: "Total surplus is consumer surplus plus producer surplus; DWL is the part that is lost entirely."
        },
        {
          keys: ["CS", "PROFIT", "FIXED", "DWL"],
          q: "Which combination would be consumer surplus if the market were perfectly competitive?",
          why: "Under perfect competition, price equals MC, so consumer surplus is the whole area below demand and above MC up to the competitive quantity."
        },
        {
          keys: ["FIXED"],
          q: "Which area represents the part of producer surplus that covers fixed cost?",
          why: "The area between ATC and MC over Qm is (ATC − MC) × Q, which is the fixed cost per unit times quantity."
        }
      ];

      const v = EQS.pick(variants);
      const correct = combo(labels, v.keys);
      const pool = [
        labels.CS,
        labels.PROFIT,
        labels.FIXED,
        labels.DWL,
        combo(labels, ["CS", "PROFIT"]),
        combo(labels, ["PROFIT", "FIXED"]),
        combo(labels, ["CS", "FIXED"]),
        combo(labels, ["CS", "DWL"]),
        combo(labels, ["CS", "PROFIT", "FIXED"]),
        combo(labels, ["PROFIT", "FIXED", "DWL"]),
        combo(labels, ["CS", "PROFIT", "FIXED", "DWL"])
      ];
      const wrong = wrongFrom(correct, pool);
      const map =
        "<p><strong>Area map:</strong> consumer surplus = " + labels.CS + "; profit = " + labels.PROFIT +
        "; fixed-cost area = " + labels.FIXED + "; deadweight loss = " + labels.DWL + ".</p>";
      const answer =
        map +
        "<p><strong>Correct answer:</strong> " + correct + ".</p>" +
        "<p>Producer surplus = profit + fixed-cost area = " + combo(labels, ["PROFIT", "FIXED"]) +
        ". Total surplus under monopoly = " + combo(labels, ["CS", "PROFIT", "FIXED"]) +
        ". Under perfect competition, consumer surplus would be the whole area below demand and above MC: " +
        combo(labels, ["CS", "PROFIT", "FIXED", "DWL"]) + ".</p>";
      const written =
        fig +
        "<p>(a) Identify the area for consumer surplus. (b) Identify the area for the monopolist's profit. " +
        "(c) Identify producer surplus. (d) Identify deadweight loss. (e) Identify total surplus under monopoly. " +
        "(f) Which combination would be consumer surplus under perfect competition?</p>";

      return EQS.numeric({
        topic: "monopoly",
        subtopic: "Graph interpretation",
        difficulty: "hard",
        source: "Week 4 + 12 · Monopoly graph",
        key: "graph-monopoly-" + labels.CS + labels.PROFIT + labels.FIXED + labels.DWL + v.keys.join(""),
        prompt: fig + "<p>" + v.q + "</p>",
        writtenPrompt: written,
        correct: correct,
        wrong: wrong,
        answer: answer + "<p>" + v.why + "</p>",
        explanation: answer + "<p>" + v.why + "</p>",
        trap: "Producer surplus is not just profit: it also includes the area that covers fixed cost.",
        rubric: [
          "Locates consumer surplus",
          "Locates the profit rectangle",
          "Combines profit and fixed-cost area for producer surplus",
          "Locates deadweight loss",
          "Explains total surplus"
        ]
      });
    }
  });

  /* ---------------- 2. Binding price ceiling ---------------- */
  EQS.registerNumeric({
    topic: "government-failure",
    subtopic: "Graph interpretation",
    difficulty: "hard",
    graph: true,
    source: "Week 5 · Price controls graph",
    gen: function () {
      const labels = assignLabels(["CS", "PS", "DWL"]);
      const Q0 = 414.8;
      const Qs = 202.6;
      const Qd = 529.2;
      const Pc = 285;
      const fig = figure(
        line(70, 60, 600, 320) +
          line(70, 320, 600, 180) +
          line(70, Pc, 620, Pc, "curve-accent") +
          poly("70,285 202.6,285 202.6,125 70,60", "shade-soft") +
          poly("70,285 202.6,285 70,320", "shade-soft") +
          poly("202.6,125 414.8,228.9 202.6,285", "shade") +
          dash(Qs, Pc, Qs, 350) +
          dash(Qd, Pc, Qd, 350) +
          dash(Q0, 228.9, Q0, 350) +
          dot(Qs, Pc) +
          dot(Qd, Pc) +
          dot(Q0, 228.9) +
          txt(132, 218, labels.CS, "area-label") +
          txt(132, 307, labels.PS, "area-label") +
          txt(300, 235, labels.DWL, "area-label") +
          txt(590, 314, "Demand", "lbl", "end") +
          txt(590, 190, "Supply", "lbl", "end") +
          txt(610, 279, "Ceiling", "lbl", "end") +
          txt(Qs, 368, "Qs") +
          txt(Qd, 368, "Qd") +
          txt(Q0, 392, "Q0") +
          txt(370, 270, "shortage", "lbl"),
        "Price ceiling graph with demand, supply, a binding ceiling below equilibrium, quantities Qs and Qd, and labelled areas A to C",
        figureCaption("Binding price ceiling.")
      );

      const variants = [
        { keys: ["CS"], q: "Which labelled area represents consumer surplus with the price ceiling?", why: "CS is the area below demand and above the ceiling price, up to the quantity actually traded Qs." },
        { keys: ["PS"], q: "Which labelled area represents producer surplus with the price ceiling?", why: "PS is the area below the ceiling price and above supply, up to Qs." },
        { keys: ["DWL"], q: "Which labelled area represents deadweight loss?", why: "DWL is the triangle between demand and supply from Qs to Q0." },
        { keys: ["CS", "PS"], q: "Which combination represents total surplus with the price ceiling?", why: "Total surplus is CS + PS; the DWL triangle is the surplus lost because fewer units trade." }
      ];
      const v = EQS.pick(variants);
      const correct = combo(labels, v.keys);
      const pool = [
        labels.CS,
        labels.PS,
        labels.DWL,
        combo(labels, ["CS", "PS"]),
        combo(labels, ["CS", "DWL"]),
        combo(labels, ["PS", "DWL"]),
        combo(labels, ["CS", "PS", "DWL"])
      ];
      const wrong = wrongFrom(correct, pool);
      const answer =
        "<p><strong>Area map:</strong> CS = " + labels.CS + "; PS = " + labels.PS + "; DWL = " + labels.DWL + ".</p>" +
        "<p><strong>Correct answer:</strong> " + correct + ".</p>" +
        "<p>Quantity traded is Qs. Qd − Qs is the shortage. Winners: buyers who can purchase at the lower price. Losers: producers and buyers who cannot get the good.</p>";
      return EQS.numeric({
        topic: "government-failure",
        subtopic: "Graph interpretation",
        difficulty: "hard",
        source: "Week 5 · Price controls graph",
        key: "graph-ceiling-" + labels.CS + labels.PS + labels.DWL + v.keys.join(""),
        prompt: fig + "<p>" + v.q + "</p>",
        writtenPrompt:
          fig +
          "<p>(a) Identify consumer surplus with the ceiling. (b) Identify producer surplus with the ceiling. (c) Identify deadweight loss. " +
          "(d) Which quantity is traded? (e) What is the shortage? (f) Who gains and who loses from the ceiling?</p>",
        correct: correct,
        wrong: wrong,
        answer:
          answer +
          "<p>Written answers: CS = " + labels.CS + "; PS = " + labels.PS + "; DWL = " + labels.DWL +
          "; quantity traded = Qs; shortage = Qd − Qs.</p>",
        explanation: answer + "<p>" + v.why + "</p>",
        trap: "Quantity traded is the short side of the market, Qs, not Qd.",
        rubric: ["Identifies CS", "Identifies PS", "Identifies DWL", "States quantity traded and shortage", "Explains winners and losers"]
      });
    }
  });

  /* ---------------- 3. Tax wedge areas ---------------- */
  EQS.registerNumeric({
    topic: "government-failure",
    subtopic: "Graph interpretation",
    difficulty: "hard",
    graph: true,
    source: "Week 5 · Tax graph",
    gen: function () {
      const labels = assignLabels(["CS", "PS", "TAX", "DWL"]);
      const Q1 = 355.1;
      const Q0 = 414.8;
      const Pc = 199.7;
      const Ps = 244.7;
      const fig = figure(
        line(70, 60, 600, 320) +
          line(70, 320, 600, 180) +
          line(70, 275, 600, 135, "curve-accent") +
          poly("70,199.7 355.1,199.7 70,60", "shade-soft") +
          poly("70,244.7 355.1,244.7 70,320", "shade-soft") +
          poly("70,199.7 355.1,199.7 355.1,244.7 70,244.7", "shade-soft") +
          poly("355.1,199.7 414.8,228.9 355.1,244.7", "shade") +
          dash(Q1, Pc, Q1, 350) +
          dash(Q0, 228.9, Q0, 350) +
          dash(70, Pc, Q1, Pc) +
          dash(70, Ps, Q1, Ps) +
          dot(Q1, Pc) +
          dot(Q0, 228.9) +
          txt(145, 145, labels.CS, "area-label") +
          txt(145, 292, labels.PS, "area-label") +
          txt(195, 232, labels.TAX, "area-label") +
          txt(380, 236, labels.DWL, "area-label") +
          txt(590, 314, "Demand", "lbl", "end") +
          txt(590, 190, "Supply", "lbl", "end") +
          txt(590, 140, "Supply + tax", "lbl", "end") +
          txt(62, 204, "Pc", "", "end") +
          txt(62, 249, "Ps", "", "end") +
          txt(Q1, 368, "Q1") +
          txt(Q0, 392, "Q0") +
          txt(265, 215, "tax revenue", "lbl"),
        "Tax incidence graph with demand, supply, supply plus tax, consumer price Pc, producer price Ps, quantities Q1 and Q0, and labelled areas A to D",
        figureCaption("Tax wedge.")
      );

      const variants = [
        { keys: ["CS"], q: "Which labelled area represents consumer surplus after the tax?", why: "CS is the area below demand and above the price consumers pay, up to Q1." },
        { keys: ["PS"], q: "Which labelled area represents producer surplus after the tax?", why: "PS is the area below the price sellers keep and above supply, up to Q1." },
        { keys: ["TAX"], q: "Which labelled area represents tax revenue?", why: "Tax revenue is the tax per unit times the quantity traded: the rectangle between Pc and Ps over Q1." },
        { keys: ["DWL"], q: "Which labelled area represents deadweight loss?", why: "DWL is the triangle between demand and supply from Q1 to Q0." },
        { keys: ["CS", "PS", "TAX"], q: "Which combination represents total surplus after the tax?", why: "Total surplus is CS + PS + tax revenue; DWL is the part lost." }
      ];
      const v = EQS.pick(variants);
      const correct = combo(labels, v.keys);
      const pool = [
        labels.CS,
        labels.PS,
        labels.TAX,
        labels.DWL,
        combo(labels, ["CS", "PS"]),
        combo(labels, ["CS", "TAX"]),
        combo(labels, ["PS", "TAX"]),
        combo(labels, ["CS", "PS", "TAX"]),
        combo(labels, ["CS", "PS", "TAX", "DWL"])
      ];
      const wrong = wrongFrom(correct, pool);
      const answer =
        "<p><strong>Area map:</strong> CS = " + labels.CS + "; PS = " + labels.PS + "; tax revenue = " + labels.TAX +
        "; DWL = " + labels.DWL + ".</p><p><strong>Correct answer:</strong> " + correct + ".</p>" +
        "<p>Consumers pay Pc; sellers keep Ps. The wedge Pc − Ps is the tax per unit. The burden falls more on the less elastic side.</p>";
      return EQS.numeric({
        topic: "government-failure",
        subtopic: "Graph interpretation",
        difficulty: "hard",
        source: "Week 5 · Tax graph",
        key: "graph-tax-" + labels.CS + labels.PS + labels.TAX + labels.DWL + v.keys.join(""),
        prompt: fig + "<p>" + v.q + "</p>",
        writtenPrompt:
          fig +
          "<p>(a) Identify consumer surplus after the tax. (b) Identify producer surplus after the tax. (c) Identify tax revenue. " +
          "(d) Identify deadweight loss. (e) Identify total surplus after the tax. (f) Explain why the tax creates DWL.</p>",
        correct: correct,
        wrong: wrong,
        answer:
          answer +
          "<p>Written answers: CS = " + labels.CS + "; PS = " + labels.PS + "; tax revenue = " + labels.TAX +
          "; DWL = " + labels.DWL + "; total surplus = " + combo(labels, ["CS", "PS", "TAX"]) + ".</p>",
        explanation: answer + "<p>" + v.why + "</p>",
        trap: "Tax revenue is retained surplus, not lost surplus; DWL is only the triangle on the lost units.",
        rubric: ["Identifies CS", "Identifies PS", "Identifies tax revenue", "Identifies DWL", "Explains the tax wedge"]
      });
    }
  });

  /* ---------------- 4. Negative externality ---------------- */
  EQS.registerNumeric({
    topic: "government-failure",
    subtopic: "Graph interpretation",
    difficulty: "hard",
    graph: true,
    source: "Week 5 · Externality graph",
    gen: function () {
      const labels = assignLabels(["DWL", "EXT", "PRIV"]);
      const Qs = 293.3;
      const Qm = 363.1;
      const fig = figure(
        line(70, 60, 600, 320) +
          line(70, 320, 600, 200) +
          line(70, 270, 600, 150, "curve-accent") +
          poly("293.3,203.7 363.1,238 363.1,188", "shade") +
          dash(Qs, 203.7, Qs, 350) +
          dash(Qm, 238, Qm, 350) +
          dot(Qs, 203.7) +
          dot(Qm, 238) +
          txt(338, 216, labels.DWL, "area-label") +
          txt(250, 247, labels.EXT, "area-label") +
          txt(165, 260, labels.PRIV, "area-label") +
          txt(590, 314, "Demand = MSB", "lbl", "end") +
          txt(610, 195, "MPC", "lbl", "end") +
          txt(610, 145, "MSC", "lbl", "end") +
          txt(Qs, 368, "Qs") +
          txt(Qm, 392, "Qm") +
          txt(470, 181, "MEC", "lbl"),
        "Negative externality graph with demand, marginal private cost, marginal social cost, quantities Qs and Qm, and labelled areas A to C",
        figureCaption("Negative externality.")
      );

      const variants = [
        { type: "area", keys: ["DWL"], q: "Which labelled area represents deadweight loss?", why: "DWL is the triangle between MSC and demand from Qs to Qm." },
        { type: "area", keys: ["EXT"], q: "Which labelled area represents the external cost at the market quantity?", why: "The external cost is the band between MSC and MPC up to Qm." },
        { type: "area", keys: ["PRIV"], q: "Which labelled area represents private surplus at the market quantity?", why: "Private surplus is the area between demand and MPC up to Qm." },
        { type: "quantity", correct: "Qs", q: "Which quantity is socially optimal?", why: "The social optimum is where demand = MSC: Qs." },
        { type: "quantity", correct: "Qm", q: "Which quantity does the free market produce?", why: "The free market produces where demand = MPC: Qm." }
      ];
      const v = EQS.pick(variants);
      let correct, wrong, answer, pool;
      if (v.type === "area") {
        correct = combo(labels, v.keys);
        pool = [labels.DWL, labels.EXT, labels.PRIV, combo(labels, ["DWL", "EXT"]), combo(labels, ["EXT", "PRIV"]), combo(labels, ["DWL", "PRIV"])];
        wrong = wrongFrom(correct, pool);
        answer =
          "<p><strong>Area map:</strong> DWL = " + labels.DWL + "; external cost = " + labels.EXT +
          "; private surplus = " + labels.PRIV + ".</p><p><strong>Correct answer:</strong> " + correct + ".</p>" +
          "<p>Qs is the social optimum; Qm is the free-market quantity. The market overproduces because producers ignore MEC.</p>";
      } else {
        correct = v.correct;
        pool = ["Qs", "Qm", "Q0", "Qmax"];
        wrong = wrongFrom(correct, pool);
        answer =
          "<p><strong>Correct answer:</strong> " + correct + ".</p>" +
          "<p>Qs is where demand = MSC; Qm is where demand = MPC. The Pigouvian tax equals the vertical gap MSC − MPC at Qs.</p>";
      }
      return EQS.numeric({
        topic: "government-failure",
        subtopic: "Graph interpretation",
        difficulty: "hard",
        source: "Week 5 · Externality graph",
        key: "graph-ext-" + labels.DWL + labels.EXT + labels.PRIV + v.q,
        prompt: fig + "<p>" + v.q + "</p>",
        writtenPrompt:
          fig +
          "<p>(a) Which area is deadweight loss? (b) Which area is the external cost at Qm? (c) Which quantity is socially optimal? " +
          "(d) Which quantity does the free market produce? (e) What Pigouvian tax would achieve the social optimum? Explain why the market overproduces.</p>",
        correct: correct,
        wrong: wrong,
        answer:
          answer +
          "<p>Written answers: DWL = " + labels.DWL + "; external cost = " + labels.EXT +
          "; private surplus = " + labels.PRIV + "; social optimum = Qs; market quantity = Qm.</p>",
        explanation: answer + "<p>" + v.why + "</p>",
        trap: "At Qm, MSC is above demand; the vertical gap is the external cost, and the market produces too much.",
        rubric: ["Locates DWL", "Locates the external cost", "Identifies Qs and Qm", "Explains overproduction", "States the Pigouvian tax"]
      });
    }
  });

  /* ---------------- 5. Labour market wage floor ---------------- */
  EQS.registerNumeric({
    topic: "policy",
    subtopic: "Graph interpretation",
    difficulty: "hard",
    graph: true,
    source: "Week 11 · Labour market graph",
    gen: function () {
      const labels = assignLabels(["DWL"]);
      const Ld = 244.9;
      const Ls = 530.3;
      const E = 414.8;
      const Wf = 180;
      const fig = figure(
        line(70, 60, 600, 320) +
          line(70, 320, 600, 180) +
          line(70, Wf, 620, Wf, "curve-accent") +
          poly("244.9,180 414.8,228.9 244.9,273.8", "shade") +
          dash(Ld, Wf, Ld, 350) +
          dash(Ls, Wf, Ls, 350) +
          dot(Ld, Wf) +
          dot(Ls, Wf) +
          dot(E, 228.9) +
          txt(310, 240, labels.DWL, "area-label") +
          txt(590, 314, "Labour demand", "lbl", "end") +
          txt(590, 190, "Labour supply", "lbl", "end") +
          txt(610, 174, "Wage floor", "lbl", "end") +
          txt(Ld, 368, "Ld") +
          txt(Ls, 392, "Ls") +
          txt(E, 368, "E") +
          txt(370, 162, "unemployment", "lbl"),
        "Labour market graph with labour demand, labour supply, a wage floor above equilibrium, employment Ld, labour supply Ls, equilibrium E, unemployment gap and a labelled deadweight-loss area",
        figureCaption("Wage floor.")
      );

      const variants = [
        { type: "area", correct: labels.DWL, q: "Which labelled area represents the deadweight loss from the wage floor?", why: "DWL is the triangle between labour demand and labour supply from Ld to E." },
        { type: "segment", correct: "Ld to Ls", q: "Which segment represents unemployment at the wage floor?", why: "Unemployment is the gap between the number of people willing to work (Ls) and the number of jobs firms offer (Ld)." },
        { type: "point", correct: "Ld", q: "How much labour is employed at the wage floor?", why: "Firms hire the short side of the market, on the labour demand curve at the floor: Ld." },
        { type: "point", correct: "E", q: "Which point is the market-clearing equilibrium without the wage floor?", why: "E is where labour demand meets labour supply." }
      ];
      const v = EQS.pick(variants);
      let pool;
      if (v.type === "area") pool = [labels.DWL, "Ld to Ls", "E to Ls", "0 to Ld"];
      else if (v.type === "segment") pool = ["Ld to Ls", "0 to Ld", "0 to Ls", "Ls to Qmax"];
      else pool = ["Ld", "Ls", "E", "Qmax"];
      const wrong = wrongFrom(v.correct, pool);
      const answer =
        "<p><strong>Correct answer:</strong> " + v.correct + ".</p>" +
        "<p>At the wage floor, employment is Ld, labour supply is Ls, and unemployment is Ls − Ld. The DWL triangle is " +
        labels.DWL + ". Without the floor, the market clears at E.</p>";
      return EQS.numeric({
        topic: "policy",
        subtopic: "Graph interpretation",
        difficulty: "hard",
        source: "Week 11 · Labour market graph",
        key: "graph-labour-" + labels.DWL + v.q,
        prompt: fig + "<p>" + v.q + "</p>",
        writtenPrompt:
          fig +
          "<p>(a) What is employment at the wage floor? (b) What is labour supply? (c) What is unemployment? " +
          "(d) Which area is DWL? (e) Which point is the market-clearing equilibrium? (f) Why does the wage floor create unemployment?</p>",
        correct: v.correct,
        wrong: wrong,
        answer:
          answer +
          "<p>Written answers: employment = Ld; labour supply = Ls; unemployment = Ls − Ld; DWL = " + labels.DWL +
          "; equilibrium = E.</p>",
        explanation: answer + "<p>" + v.why + "</p>",
        trap: "Employment is on the labour demand curve at the floor; unemployment is the gap to labour supply.",
        rubric: ["Identifies employment", "Identifies labour supply", "Calculates unemployment", "Locates DWL", "Explains wage rigidity"]
      });
    }
  });

  /* ---------------- 6. Demand shift graph ---------------- */
  EQS.registerNumeric({
    topic: "demand-supply",
    subtopic: "Graph interpretation",
    difficulty: "medium",
    graph: true,
    source: "Week 2 · Demand shift graph",
    gen: function () {
      const right = EQS.chance(0.5);
      const d2 = right ? [160, 100, 620, 320] : [70, 100, 530, 320];
      const e1x = 381.3;
      const e1y = 234.5;
      const e2x = right ? 418.0 : 363.0;
      const e2y = right ? 223.3 : 240.0;
      const fig = figure(
        line(100, 100, 560, 320) +
          line(d2[0], d2[1], d2[2], d2[3], "curve-accent") +
          line(100, 320, 560, 180) +
          dot(e1x, e1y) +
          dot(e2x, e2y) +
          dash(e1x, e1y, e1x, 350) +
          dash(e2x, e2y, e2x, 350) +
          txt(566, 306, "D1", "lbl", "start") +
          txt(right ? 628 : 538, 306, "D2", "lbl", right ? "start" : "end") +
          txt(566, 174, "S", "lbl", "start") +
          txt(e1x - 8, e1y - 8, "E1", "", "end") +
          txt(e2x + 8, e2y - 8, "E2", "", "start") +
          txt(e1x, 368, "Q1") +
          txt(e2x, 392, "Q2"),
        "Demand and supply graph with initial demand D1, a shifted demand curve D2, supply S, and equilibrium points E1 and E2",
        "Demand shift. D1 is the initial demand curve; D2 is the shifted curve; S is supply. E1 and E2 are the initial and new equilibria."
      );
      const effect = right ? "Price rises; quantity rises" : "Price falls; quantity falls";
      const wrongEffects = [
        "Price falls; quantity rises",
        "Price rises; quantity falls",
        "Price and quantity do not change"
      ];
      const variants = [
        {
          correct: right ? "Demand shifted right (increased)" : "Demand shifted left (decreased)",
          wrong: [
            right ? "Demand shifted left (decreased)" : "Demand shifted right (increased)",
            "Supply shifted right (increased)",
            "Supply shifted left (decreased)"
          ],
          q: "What happened in this market?",
          why: "The demand curve moved from D1 to D2; supply did not shift."
        },
        {
          correct: effect,
          wrong: wrongEffects,
          q: "Compared with E1, what happens to equilibrium price and quantity at E2?",
          why: "The new equilibrium is at the intersection of D2 and the unchanged supply curve."
        }
      ];
      const v = EQS.pick(variants);
      const answer =
        "<p><strong>Correct answer:</strong> " + v.correct + ".</p>" +
        "<p>The movement from E1 to E2 is a new equilibrium caused by a shift of demand, not a movement along demand. " +
        (right ? "Demand increased, so both price and quantity rose." : "Demand decreased, so both price and quantity fell.") +
        "</p>";
      return EQS.numeric({
        topic: "demand-supply",
        subtopic: "Graph interpretation",
        difficulty: "medium",
        source: "Week 2 · Demand shift graph",
        key: "graph-demandshift-" + (right ? "r" : "l") + v.q,
        prompt: fig + "<p>" + v.q + "</p>",
        writtenPrompt:
          fig +
          "<p>(a) Did demand or supply shift? (b) In which direction? (c) What happens to equilibrium price and quantity? " +
          "(d) Explain why this is a shift rather than a movement along the curve.</p>",
        correct: v.correct,
        wrong: v.wrong,
        answer: answer,
        explanation: answer + "<p>" + v.why + "</p>",
        trap: "A shift of demand changes the equilibrium; a movement along demand is caused only by the good's own price.",
        rubric: ["Identifies the curve that shifted", "States the direction", "Predicts price and quantity", "Distinguishes shift from movement"]
      });
    }
  });

  /* ---------------- 7. Elasticity curves ---------------- */
  EQS.registerNumeric({
    topic: "elasticity",
    subtopic: "Graph interpretation",
    difficulty: "medium",
    graph: true,
    source: "Week 3 · Elasticity graph",
    gen: function () {
      const labels = assignLabels(["FLAT", "STEEP", "VERT"]);
      const fig = figure(
        line(100, 120, 600, 300) +
          line(260, 60, 500, 380) +
          line(380, 60, 380, 340, "curve-accent") +
          dot(380, 220) +
          txt(600, 306, labels.FLAT, "lbl", "end") +
          txt(500, 388, labels.STEEP, "lbl", "end") +
          txt(380, 52, labels.VERT, "lbl") +
          txt(386, 214, "E", "", "start"),
        "Three demand curves crossing near point E: one flat, one steep and one vertical, labelled A, B and C",
        "Elasticity at a point. The three demand curves cross near E; compare how flat or steep each curve is."
      );
      const variants = [
        { correct: labels.VERT, q: "Which demand curve is perfectly inelastic?", why: "A vertical demand curve means quantity does not respond at all to price." },
        { correct: labels.FLAT, q: "At point E, which demand curve is more elastic?", why: "At a common point, the flatter curve has a larger percentage quantity response to a price change." },
        { correct: labels.STEEP, q: "At point E, which demand curve is more inelastic?", why: "The steeper curve has a smaller percentage quantity response at the same point." },
        { correct: labels.FLAT, q: "If price rises above E, which curve has the largest percentage fall in quantity demanded?", why: "Elastic demand responds proportionally more than price, so the flattest curve has the largest percentage fall." }
      ];
      const v = EQS.pick(variants);
      const pool = [labels.FLAT, labels.STEEP, labels.VERT, "All three have the same elasticity"];
      const wrong = wrongFrom(v.correct, pool);
      const answer =
        "<p><strong>Correct answer:</strong> " + v.correct + ".</p>" +
        "<p>At the same price and quantity, the flatter demand curve is more elastic; the steeper curve is more inelastic. " +
        "A vertical curve is perfectly inelastic. Elasticity is not the same as slope: it also depends on P/Q.</p>";
      return EQS.numeric({
        topic: "elasticity",
        subtopic: "Graph interpretation",
        difficulty: "medium",
        source: "Week 3 · Elasticity graph",
        key: "graph-elasticity-" + labels.FLAT + labels.STEEP + labels.VERT + v.q,
        prompt: fig + "<p>" + v.q + "</p>",
        writtenPrompt:
          fig +
          "<p>(a) Which curve is perfectly inelastic? (b) At E, which curve is more elastic? (c) Which is more inelastic? " +
          "(d) If price rises above E, which curve has the largest percentage fall in quantity? (e) Explain why a flatter curve is more elastic at a common point.</p>",
        correct: v.correct,
        wrong: wrong,
        answer: answer,
        explanation: answer + "<p>" + v.why + "</p>",
        trap: "Elasticity is not just slope; at a common point, flatter means more elastic, but the P/Q ratio still matters.",
        rubric: ["Identifies the vertical curve", "Compares flat and steep curves", "Explains elasticity vs slope", "Links to quantity response"]
      });
    }
  });
})(typeof window !== "undefined" ? window : globalThis);
