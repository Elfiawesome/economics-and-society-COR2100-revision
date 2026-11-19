/* Procedural generators: monopoly, welfare and regulation. */
(function (g) {
  const EQS = g.EQS;

  function monopolyParams() {
    const Qstar = EQS.ri(2, 12) * 10;
    const b = EQS.ri(1, 5);
    const c = EQS.ri(2, 18);
    const a = c + 2 * b * Qstar;
    const Pstar = c + b * Qstar;
    const maxF = Math.max(0, Math.floor(b * Qstar * Qstar * 0.45));
    const F = EQS.ri(0, maxF);
    const Qc = 2 * Qstar;
    const profit = (Pstar - c) * Qstar - F;
    const cs = 0.5 * (a - Pstar) * Qstar;
    const ps = (Pstar - c) * Qstar;
    const dwl = 0.5 * (Pstar - c) * (Qc - Qstar);
    return { Qstar, b, c, a, Pstar, F, Qc, profit, cs, ps, dwl };
  }

  EQS.registerNumeric({
    topic: "monopoly",
    subtopic: "Profit maximisation",
    difficulty: "medium",
    source: "Week 4 · Monopoly",
    gen: function () {
      const m = monopolyParams();
      const prompt =
        "<p>A monopolist faces demand <span class='formula'>P = " + m.a + " − " + m.b +
        "Q</span> and has constant marginal cost MC = " + EQS.money(m.c) + ". Fixed cost is " + EQS.money(m.F) +
        ". What is the profit-maximising quantity?</p>";
      const answer =
        "<p>For linear demand P = a − bQ, marginal revenue is MR = a − 2bQ = " + m.a + " − " + (2 * m.b) + "Q.</p>" +
        "<p>Set MR = MC:</p><p class='formula-line'>" + m.a + " − " + (2 * m.b) + "Q = " + m.c + " → Q* = " + m.Qstar + "</p>" +
        "<p>Price from the demand curve: P* = " + m.a + " − " + m.b + "(" + m.Qstar + ") = " + EQS.money(m.Pstar) + ".</p>" +
        "<p>Profit = (P − MC)Q − FC = (" + EQS.money(m.Pstar) + " − " + EQS.money(m.c) + ") × " + m.Qstar + " − " + EQS.money(m.F) + " = " + EQS.money(m.profit) + ".</p>";
      return EQS.numeric({
        topic: "monopoly",
        subtopic: "Profit maximisation",
        difficulty: "medium",
        source: "Week 4 · Monopoly",
        key: "mono-q-" + m.a + "-" + m.b + "-" + m.c + "-" + m.F,
        prompt: prompt,
        writtenPrompt:
          "<p>A monopolist faces demand <span class='formula'>P = " + m.a + " − " + m.b +
          "Q</span> and has constant marginal cost MC = " + EQS.money(m.c) + ". Fixed cost is " + EQS.money(m.F) +
          ".</p><p>(a) Derive marginal revenue. (b) Find the profit-maximising quantity and price. (c) Calculate profit. (d) Calculate consumer surplus, producer surplus and deadweight loss. (e) Find the efficient price and quantity.</p>",
        correct: m.Qstar + " units",
        wrong: [m.Qc + " units", (m.Qstar / 2) + " units", (m.Qstar + m.b) + " units"],
        answer: answer,
        explanation: "<p>MR = " + m.a + " − " + (2 * m.b) + "Q; setting MR = MC gives Q* = " + m.Qstar + ".</p>",
        trap: "MR has twice the slope of linear demand. The price is read from demand, not MR.",
        rubric: ["Derives MR", "Solves MR = MC", "Reads price from demand", "Computes profit"]
      });
    }
  });

  EQS.registerNumeric({
    topic: "monopoly",
    subtopic: "Profit maximisation",
    difficulty: "medium",
    source: "Week 4 + 12 · Monopoly",
    gen: function () {
      const m = monopolyParams();
      const prompt =
        "<p>A monopolist faces demand <span class='formula'>P = " + m.a + " − " + m.b +
        "Q</span> and has constant MC = " + EQS.money(m.c) + " and fixed cost " + EQS.money(m.F) +
        ". What is the monopolist's profit at the profit-maximising quantity?</p>";
      const answer =
        "<p>MR = " + m.a + " − " + (2 * m.b) + "Q. Setting MR = MC gives Q* = " + m.Qstar +
        " and P* = " + EQS.money(m.Pstar) + ".</p>" +
        "<p>At Q* = " + m.Qstar + ", ATC = MC + FC/Q = " + EQS.money(m.c) + " + " + EQS.money(m.F) + "/" + m.Qstar + " = " + EQS.money(m.c + m.F / m.Qstar, 2) + ".</p>" +
        "<p>Profit = (P − ATC) × Q = (" + EQS.money(m.Pstar) + " − " + EQS.money(m.c + m.F / m.Qstar, 2) + ") × " + m.Qstar + " = <strong>" + EQS.money(m.profit) + "</strong>.</p>" +
        "<p>Check with TR − TC: TR = " + EQS.money(m.Pstar * m.Qstar) + "; TC = FC + MC×Q = " + EQS.money(m.F + m.c * m.Qstar) + "; profit = " + EQS.money(m.profit) + ".</p>";
      return EQS.numeric({
        topic: "monopoly",
        subtopic: "Profit",
        difficulty: "medium",
        source: "Week 4 + 12 · Monopoly",
        key: "mono-profit-" + m.a + "-" + m.b + "-" + m.c + "-" + m.F,
        prompt: prompt,
        writtenPrompt:
          "<p>A monopolist faces demand <span class='formula'>P = " + m.a + " − " + m.b +
          "Q</span>, constant MC = " + EQS.money(m.c) + ", and fixed cost " + EQS.money(m.F) +
          ".</p><p>(a) Find Q* and P*. (b) Calculate ATC at Q*. (c) Calculate profit using (P − ATC) × Q. (d) Verify your answer using TR − TC.</p>",
        correct: EQS.money(m.profit),
        wrong: [EQS.money(m.Pstar * m.Qstar), EQS.money(m.ps), EQS.money(m.profit + 137)],
        answer: answer,
        explanation: "<p>π = (P − ATC)Q = " + EQS.money(m.profit) + ".</p>",
        trap: "Fixed cost lowers profit but does not change the profit-maximising quantity.",
        rubric: ["Finds Q* and P*", "Computes ATC including fixed cost", "Uses both profit formulas"]
      });
    }
  });

  EQS.registerNumeric({
    topic: "monopoly",
    subtopic: "Deadweight loss",
    difficulty: "hard",
    source: "Week 4 + 12 · Monopoly",
    gen: function () {
      const m = monopolyParams();
      const prompt =
        "<p>A monopolist faces demand <span class='formula'>P = " + m.a + " − " + m.b +
        "Q</span> and constant MC = " + EQS.money(m.c) + ". What is the deadweight loss from monopoly?</p>";
      const answer =
        "<p>Monopoly quantity: MR = MC gives Q<sub>M</sub> = " + m.Qstar + " and P<sub>M</sub> = " + EQS.money(m.Pstar) + ".</p>" +
        "<p>Competitive quantity: P = MC gives " + m.a + " − " + m.b + "Q = " + m.c + ", so Q<sub>C</sub> = " + m.Qc + ".</p>" +
        "<p>Deadweight loss is the triangle between demand and MC from Q<sub>M</sub> to Q<sub>C</sub>:</p>" +
        "<p class='formula-line'>DWL = ½ × (P<sub>M</sub> − MC) × (Q<sub>C</sub> − Q<sub>M</sub>) = ½ × (" + m.Pstar + " − " + m.c + ") × (" + m.Qc + " − " + m.Qstar + ") = <strong>" + EQS.money(m.dwl) + "</strong>.</p>" +
        "<p>Consumer surplus at the monopoly outcome is ½ × (" + m.a + " − " + m.Pstar + ") × " + m.Qstar + " = " + EQS.money(m.cs) + ".</p>";
      return EQS.numeric({
        topic: "monopoly",
        subtopic: "Deadweight loss",
        difficulty: "hard",
        source: "Week 4 + 12 · Monopoly",
        key: "mono-dwl-" + m.a + "-" + m.b + "-" + m.c + "-" + m.F,
        prompt: prompt,
        writtenPrompt:
          "<p>A monopolist faces demand <span class='formula'>P = " + m.a + " − " + m.b +
          "Q</span> and constant MC = " + EQS.money(m.c) + ".</p><p>(a) Find the monopoly quantity and price. (b) Find the competitive quantity where P = MC. (c) Calculate consumer surplus, producer surplus and deadweight loss. (d) Explain why the DWL arises.</p>",
        correct: EQS.money(m.dwl),
        wrong: [EQS.money(m.dwl * 2), EQS.money(m.dwl * 0.5), EQS.money(m.dwl * 1.5)],
        answer: answer,
        explanation: "<p>DWL = ½ × (P<sub>M</sub> − MC) × (Q<sub>C</sub> − Q<sub>M</sub>) = " + EQS.money(m.dwl) + ".</p>",
        trap: "Use the competitive quantity (P = MC) as the right edge of the DWL triangle, not the monopoly quantity.",
        rubric: ["Finds monopoly and competitive quantities", "Uses the DWL triangle", "Explains the lost mutually beneficial units"]
      });
    }
  });

  EQS.registerNumeric({
    topic: "monopoly",
    subtopic: "Efficient vs fair-return pricing",
    difficulty: "medium",
    source: "Week 4 + 12 · Regulation",
    gen: function () {
      const atc = EQS.ri(4, 20);
      let mc = EQS.ri(2, 18);
      if (mc === atc) mc = atc + EQS.pick([-2, 2]);
      if (mc < 1) mc = 1;
      const Q = EQS.ri(50, 500);
      const efficientProfitPerUnit = mc - atc;
      const prompt =
        "<p>At its current output, a monopolist has ATC = " + EQS.money(atc) + " and MC = " + EQS.money(mc) +
        ". Under efficient (socially optimal) pricing, what is the firm's profit per unit?</p>";
      const answer =
        "<p>Efficient pricing sets P = MC = " + EQS.money(mc) + ".</p>" +
        "<p>Profit per unit = P − ATC = " + EQS.money(mc) + " − " + EQS.money(atc) + " = <strong>" + EQS.money(efficientProfitPerUnit) + "</strong>.</p>" +
        "<p>Under fair-returns pricing, P = ATC = " + EQS.money(atc) + ", so profit per unit is $" + "0.</p>" +
        "<p>" + (efficientProfitPerUnit < 0 ? "Because ATC exceeds MC, efficient pricing forces a loss and requires a subsidy or public ownership." : "Because MC exceeds ATC, efficient pricing still leaves positive profit per unit in this case.") + "</p>";
      return EQS.numeric({
        topic: "monopoly",
        subtopic: "Regulation",
        difficulty: "medium",
        source: "Week 4 + 12 · Regulation",
        key: "reg-" + atc + "-" + mc + "-" + Q,
        prompt: prompt,
        writtenPrompt:
          "<p>At its current output, a monopolist has ATC = " + EQS.money(atc) + " and MC = " + EQS.money(mc) +
          ".</p><p>(a) What price would a regulator set under efficient pricing? (b) What price under fair-returns pricing? (c) Calculate profit per unit in each case. (d) Which pricing rule is more likely to keep a natural monopoly viable without a subsidy? Explain.</p>",
        correct: EQS.money(efficientProfitPerUnit) + " per unit",
        wrong: [EQS.money(efficientProfitPerUnit + 1) + " per unit", EQS.money(efficientProfitPerUnit - 1) + " per unit", EQS.money(efficientProfitPerUnit + 2) + " per unit"],
        answer: answer,
        explanation: "<p>Efficient price = MC, so profit per unit = MC − ATC = " + EQS.money(efficientProfitPerUnit) + ".</p>",
        trap: "The question asks for profit per unit, not total profit. Fair-returns pricing always gives zero profit per unit.",
        rubric: ["Applies P = MC", "Applies P = ATC", "Distinguishes per-unit from total", "Explains the viability trade-off"]
      });
    }
  });

  EQS.registerNumeric({
    topic: "monopoly",
    subtopic: "Price and quantity effects",
    difficulty: "medium",
    source: "Week 4 · Marginal revenue",
    gen: function () {
      let b, Q1, dQ, Q2, P1, P2, a;
      let guard = 0;
      do {
        b = EQS.ri(1, 4);
        Q1 = EQS.ri(20, 100);
        dQ = EQS.ri(5, 40);
        Q2 = Q1 + dQ;
        P1 = EQS.ri(10, 60);
        P2 = P1 - b * dQ;
      } while (P2 < 1 && guard++ < 40);
      if (P2 < 1) {
        b = 1;
        P1 = 60;
        dQ = 10;
        Q1 = 40;
        Q2 = Q1 + dQ;
        P2 = P1 - b * dQ;
      }
      a = P1 + b * Q1;
      const tr1 = P1 * Q1;
      const tr2 = P2 * Q2;
      const change = tr2 - tr1;
      const gain = P2 * dQ;
      const loss = (P1 - P2) * Q1;
      const prompt =
        "<p>A monopolist faces demand <span class='formula'>P = " + a + " − " + b + "Q</span>. It cuts price from " +
        EQS.money(P1) + " to " + EQS.money(P2) + ". What is the change in total revenue?</p>";
      const answer =
        "<p>At P1 = " + EQS.money(P1) + ", Q1 = (" + a + " − " + P1 + ")/" + b + " = " + Q1 + ", so TR1 = " + EQS.money(tr1) + ".</p>" +
        "<p>At P2 = " + EQS.money(P2) + ", Q2 = (" + a + " − " + P2 + ")/" + b + " = " + Q2 + ", so TR2 = " + EQS.money(tr2) + ".</p>" +
        "<p>Change in TR = " + EQS.money(tr2) + " − " + EQS.money(tr1) + " = <strong>" + EQS.money(change) + "</strong>.</p>" +
        "<p>Decomposition: quantity effect = P2 × ΔQ = " + EQS.money(P2) + " × " + dQ + " = +" + EQS.money(gain) +
        "; price effect = (P1 − P2) × Q1 = " + EQS.money(P1 - P2) + " × " + Q1 + " = −" + EQS.money(loss) +
        ". Net = " + EQS.money(gain) + " − " + EQS.money(loss) + " = " + EQS.money(change) + ".</p>";
      return EQS.numeric({
        topic: "monopoly",
        subtopic: "Price and quantity effects",
        difficulty: "medium",
        source: "Week 4 · Marginal revenue",
        key: "peqe-" + a + "-" + b + "-" + P1 + "-" + P2,
        prompt: prompt,
        writtenPrompt:
          "<p>A monopolist faces demand <span class='formula'>P = " + a + " − " + b + "Q</span>. It cuts price from " +
          EQS.money(P1) + " to " + EQS.money(P2) + ".</p><p>(a) Calculate quantity before and after the price cut. (b) Calculate TR before and after. (c) Calculate the change in TR. (d) Decompose the change into the quantity effect and the price effect. (e) Why is MR below price?</p>",
        correct: EQS.money(change),
        wrong: [EQS.money(gain), EQS.money(-loss), EQS.money(tr2)],
        answer: answer,
        explanation: "<p>ΔTR = " + EQS.money(change) + " = quantity effect +" + EQS.money(gain) + " − price effect " + EQS.money(loss) + ".</p>",
        trap: "The price cut applies to all existing units, not just the new ones.",
        rubric: ["Finds quantities at both prices", "Computes TR change", "Decomposes into price and quantity effects"]
      });
    }
  });

  EQS.registerNumeric({
    topic: "monopoly",
    subtopic: "Units trap",
    difficulty: "medium",
    source: "Week 12 · Monopoly review",
    gen: function () {
      const scale = EQS.pick([100, 1000]);
      const axisQ = EQS.ri(2, 9) * 5;
      const Q = axisQ * scale;
      const P = EQS.ri(4, 12);
      const atc = Math.max(1, P - EQS.ri(1, 5));
      const profit = (P - atc) * Q;
      const prompt =
        "<p>A monopolist's graph has quantity measured in " + (scale === 100 ? "hundreds" : "thousands") +
        " of gallons. The MR = MC point is at " + axisQ + " on the horizontal axis. At that quantity, the demand price is " +
        EQS.money(P) + " per gallon and ATC is " + EQS.money(atc) +
        " per gallon. What is the firm's profit?</p>";
      const answer =
        "<p>The axis is in " + (scale === 100 ? "hundreds" : "thousands") + ", so the true quantity is " +
        axisQ + " × " + scale + " = " + EQS.num(Q) + " gallons.</p>" +
        "<p>Profit = (P − ATC) × Q = (" + EQS.money(P) + " − " + EQS.money(atc) + ") × " + EQS.num(Q) + " = <strong>" + EQS.money(profit) + "</strong>.</p>" +
        "<p>Using " + axisQ + " gallons instead of " + EQS.num(Q) + " would understate profit by a factor of " + scale + ".</p>";
      return EQS.numeric({
        topic: "monopoly",
        subtopic: "Units trap",
        difficulty: "medium",
        source: "Week 12 · Monopoly review",
        key: "units-" + scale + "-" + axisQ + "-" + P + "-" + atc,
        prompt: prompt,
        writtenPrompt:
          "<p>A monopolist's graph has quantity measured in " + (scale === 100 ? "hundreds" : "thousands") +
          " of gallons. The MR = MC point is at " + axisQ + " on the horizontal axis. At that quantity, the demand price is " +
          EQS.money(P) + " per gallon and ATC is " + EQS.money(atc) + " per gallon.</p><p>(a) What is the true profit-maximising quantity in gallons? (b) Calculate profit. (c) Explain why using the axis number " +
          axisQ + " directly would be wrong.</p>",
        correct: EQS.money(profit),
        wrong: [EQS.money((P - atc) * axisQ), EQS.money((P - atc) * axisQ * 10), EQS.money(P * Q)],
        answer: answer,
        explanation: "<p>Q = " + axisQ + " × " + scale + " = " + EQS.num(Q) + "; profit = " + EQS.money(profit) + ".</p>",
        trap: "Always check the units on both axes before computing profit or DWL.",
        rubric: ["Converts axis units correctly", "Computes profit", "Explains the unit conversion"]
      });
    }
  });

  EQS.registerNumeric({
    topic: "monopoly",
    subtopic: "Profit from a table",
    difficulty: "medium",
    source: "Week 12 · Monopoly review",
    gen: function () {
      const b = EQS.ri(1, 3);
      const c = EQS.ri(5, 15);
      const Qstar = 30;
      const a = c + 2 * b * Qstar;
      const F = EQS.ri(2, 12) * 50;
      const rows = [];
      for (let q = 0; q <= 60; q += 10) {
        const P = a - b * q;
        const TR = P * q;
        const TC = F + c * q;
        const prevTR = q === 0 ? 0 : (a - b * (q - 10)) * (q - 10);
        const MR = q === 0 ? "—" : EQS.money((TR - prevTR) / 10);
        const ATC = q === 0 ? "—" : EQS.money(TC / q, 2);
        rows.push([q, EQS.money(P), EQS.money(TR), MR, EQS.money(TC), ATC, q === 0 ? "—" : EQS.money(c)]);
      }
      const Pstar = a - b * Qstar;
      const profit = (Pstar - c) * Qstar - F;
      const prompt =
        "<p>A monopolist faces the following revenue and cost table:</p>" +
        EQS.table(["Q", "Price", "TR", "MR", "TC", "ATC", "MC"], rows) +
        "<p>What is the profit-maximising quantity, and what is the profit at that quantity?</p>";
      const answer =
        "<p>MR = MC = " + EQS.money(c) + " at Q = " + Qstar + ". The price at that quantity is " + EQS.money(Pstar) + ".</p>" +
        "<p>Profit = TR − TC = " + EQS.money(Pstar * Qstar) + " − " + EQS.money(F + c * Qstar) + " = <strong>" + EQS.money(profit) + "</strong>.</p>" +
        "<p>Using the other formula: ATC at Q = " + Qstar + " is " + EQS.money((F + c * Qstar) / Qstar, 2) +
        ", so profit = (P − ATC) × Q = (" + EQS.money(Pstar) + " − " + EQS.money((F + c * Qstar) / Qstar, 2) + ") × " + Qstar + " = " + EQS.money(profit) + ".</p>";
      return EQS.numeric({
        topic: "monopoly",
        subtopic: "Profit from a table",
        difficulty: "medium",
        source: "Week 12 · Monopoly review",
        key: "table-" + a + "-" + b + "-" + c + "-" + F,
        prompt: prompt,
        writtenPrompt:
          "<p>A monopolist faces the following revenue and cost table:</p>" +
          EQS.table(["Q", "Price", "TR", "MR", "TC", "ATC", "MC"], rows) +
          "<p>(a) Identify the profit-maximising quantity and price. (b) Calculate profit using TR − TC. (c) Verify using (P − ATC) × Q. (d) Suppose a regulator imposes efficient pricing. What price and quantity result, and what is profit? (e) What is the fair-returns price and profit?</p>",
        correct: "Q = " + Qstar + "; profit = " + EQS.money(profit),
        wrong: [
          "Q = " + (Qstar + 10) + "; profit = " + EQS.money((a - b * (Qstar + 10) - c) * (Qstar + 10) - F),
          "Q = " + (Qstar - 10) + "; profit = " + EQS.money((a - b * (Qstar - 10) - c) * (Qstar - 10) - F),
          "Q = " + Qstar + "; profit = " + EQS.money(Pstar * Qstar)
        ],
        answer: answer,
        explanation: "<p>MR = MC at Q = " + Qstar + "; profit = " + EQS.money(profit) + ".</p>",
        trap: "The profit-maximising quantity is where MR = MC, not where profit is highest in the table column if the table is incomplete.",
        rubric: ["Finds MR = MC", "Reads price from demand", "Computes profit both ways"]
      });
    }
  });
})(typeof window !== "undefined" ? window : globalThis);
