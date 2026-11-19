/* Procedural generators: demand, supply, equilibrium and elasticity. */
(function (g) {
  const EQS = g.EQS;

  const products = ["bubble tea", "chicken rice", "canned drinks", "movie tickets", "grab rides", "air conditioners", "roses", "instant noodles", "coffee", "printer ink", "hotel rooms", "MRT rides"];
  const firms = ["Grab", "Foodpanda", "FairPrice", "Shopee", "Singtel", "Netflix", "Uniqlo", "Starbucks", "Toast Box", "SP Group"];

  /* ---------- linear equilibrium and shortage/surplus ---------- */
  EQS.registerNumeric({
    topic: "demand-supply",
    subtopic: "Equilibrium",
    difficulty: "medium",
    source: "Week 2 · Equilibrium",
    gen: function () {
      const P0 = EQS.ri(10, 60);
      const b = EQS.ri(2, 7);
      const d = EQS.ri(2, 7);
      const c = EQS.ri(10, 50);
      const Q0 = c + d * P0;
      const a = Q0 + b * P0;
      const delta = EQS.ri(3, Math.max(3, Math.min(Math.floor(P0 / 2), Math.floor(Q0 / d) - 1)));
      const above = EQS.chance(0.5);
      const P1 = above ? P0 + delta : Math.max(1, P0 - delta);
      const Qd1 = a - b * P1;
      const Qs1 = c + d * P1;
      const gap = Math.abs(Qd1 - Qs1);
      const type = Qd1 > Qs1 ? "shortage" : "surplus";
      const prompt =
        "<p>In a competitive market, demand is <span class='formula'>Q<sub>d</sub> = " + a + " − " + b +
        "P</span> and supply is <span class='formula'>Q<sub>s</sub> = " + c + " + " + d + "P</span>.</p>" +
        "<p>At a price of " + EQS.money(P1) + ", is there a shortage or a surplus, and how large is it?</p>";
      const answer =
        "<p>At P = " + EQS.money(P1) + ":</p><p class='formula-line'>Q<sub>d</sub> = " + a + " − " + b + "(" + P1 + ") = " + Qd1 + "</p>" +
        "<p class='formula-line'>Q<sub>s</sub> = " + c + " + " + d + "(" + P1 + ") = " + Qs1 + "</p>" +
        "<p>Since " + (Qd1 > Qs1 ? "quantity demanded exceeds quantity supplied" : "quantity supplied exceeds quantity demanded") +
        ", there is a <strong>" + type + "</strong> of " + gap + " units.</p>" +
        "<p>The equilibrium price solves " + a + " − " + b + "P = " + c + " + " + d +
        "P, giving P* = " + EQS.money(P0) + " and Q* = " + Q0 + ". The price of " + EQS.money(P1) +
        " is " + (P1 < P0 ? "below" : "above") + " equilibrium, which is why the " + type + " appears.</p>";
      return EQS.numeric({
        topic: "demand-supply",
        subtopic: "Equilibrium",
        difficulty: "medium",
        source: "Week 2 · Equilibrium",
        key: "eq-" + a + "-" + b + "-" + c + "-" + d + "-" + P1,
        prompt: prompt,
        writtenPrompt:
          "<p>In a competitive market, demand is <span class='formula'>Q<sub>d</sub> = " + a + " − " + b +
          "P</span> and supply is <span class='formula'>Q<sub>s</sub> = " + c + " + " + d + "P</span>.</p><p>(a) Solve for the equilibrium price and quantity. (b) At a price of " +
          EQS.money(P1) + ", calculate quantity demanded and quantity supplied. (c) Is there a shortage or surplus, and how large is it? (d) Explain why the market price tends to move toward equilibrium.</p>",
        correct: gap + "-unit " + type,
        wrong: [
          gap + "-unit " + (type === "shortage" ? "surplus" : "shortage"),
          Qd1 + "-unit shortage",
          Qs1 + "-unit surplus"
        ],
        answer: answer,
        explanation: "<p>Q<sub>d</sub> = " + Qd1 + " and Q<sub>s</sub> = " + Qs1 + ", so there is a " + gap + "-unit " + type + ".</p>",
        trap: "Read the direction of the gap: Qd > Qs is a shortage; Qs > Qd is a surplus.",
        rubric: ["Solves the equilibrium", "Computes Qd and Qs at P1", "Identifies shortage vs surplus and the size"]
      });
    }
  });

  /* ---------- market demand as horizontal sum ---------- */
  EQS.registerNumeric({
    topic: "demand-supply",
    subtopic: "Market demand",
    difficulty: "medium",
    source: "Week 2 · Quiz 2 style",
    gen: function () {
      const name1 = EQS.pick(["Alex", "Sue", "Priya", "Chen"]);
      const name2 = EQS.pick(["Carlos", "Bella", "Rahul", "Mei"]);
      const b1 = EQS.ri(2, 6);
      const b2 = EQS.ri(2, 6);
      const choke1 = EQS.ri(10, 30);
      const choke2 = EQS.ri(8, 28);
      const a1 = b1 * choke1;
      const a2 = b2 * choke2;
      const P = EQS.ri(4, Math.max(5, Math.max(choke1, choke2) - 1));
      const q1 = Math.max(0, a1 - b1 * P);
      const q2 = Math.max(0, a2 - b2 * P);
      const total = q1 + q2;
      const prompt =
        "<p>Only two consumers buy in a market. " + name1 + "'s demand is <span class='formula'>Q<sub>1</sub> = " +
        a1 + " − " + b1 + "P</span> (or zero if this is negative), and " + name2 +
        "'s demand is <span class='formula'>Q<sub>2</sub> = " + a2 + " − " + b2 + "P</span> (or zero if this is negative). " +
        "At a price of " + EQS.money(P) + ", what is the total market quantity demanded?</p>";
      const answer =
        "<p>At P = " + EQS.money(P) + ":</p><p class='formula-line'>Q<sub>1</sub> = max(0, " + a1 + " − " + b1 + "×" + P + ") = " + q1 + "</p>" +
        "<p class='formula-line'>Q<sub>2</sub> = max(0, " + a2 + " − " + b2 + "×" + P + ") = " + q2 + "</p>" +
        "<p>Market demand is the horizontal sum at each price: Q = Q<sub>1</sub> + Q<sub>2</sub> = " + q1 + " + " + q2 + " = <strong>" + total + "</strong> units.</p>" +
        "<p>Remember that a consumer cannot demand a negative quantity; once the price exceeds the consumer's choke price, their quantity is zero.</p>";
      return EQS.numeric({
        topic: "demand-supply",
        subtopic: "Market demand",
        difficulty: "medium",
        source: "Week 2 · Quiz 2 style",
        key: "mktdemand-" + a1 + "-" + b1 + "-" + a2 + "-" + b2 + "-" + P,
        prompt: prompt,
        writtenPrompt:
          "<p>Only two consumers buy in a market. " + name1 + "'s demand is <span class='formula'>Q<sub>1</sub> = " +
          a1 + " − " + b1 + "P</span> and " + name2 + "'s demand is <span class='formula'>Q<sub>2</sub> = " +
          a2 + " − " + b2 + "P</span>, with quantity zero if the formula gives a negative number.</p><p>(a) Calculate each consumer's quantity demanded at P = " +
          EQS.money(P) + ". (b) What is market quantity demanded? (c) Explain why market demand is the horizontal sum, not the vertical sum, of individual demand curves.</p>",
        correct: total + " units",
        wrong: [(total + 10) + " units", (total + 20) + " units", Math.max(0, total - 10) + " units"],
        answer: answer,
        explanation: "<p>Q<sub>1</sub> = " + q1 + ", Q<sub>2</sub> = " + q2 + ", so market Q = " + total + ".</p>",
        trap: "Market demand adds quantities at a given price. Check for consumers dropping out at high prices.",
        rubric: ["Calculates each individual quantity", "Adds quantities", "Explains horizontal summation"]
      });
    }
  });

  /* ---------- competitive consumer and producer surplus ---------- */
  EQS.registerNumeric({
    topic: "demand-supply",
    subtopic: "Surplus",
    difficulty: "medium",
    source: "Week 2/4 · Surplus",
    gen: function () {
      const Qs = EQS.ri(20, 90);
      const b = EQS.ri(1, 4);
      const d = EQS.ri(1, 4);
      const c = EQS.ri(2, 25);
      const Ps = c + d * Qs;
      const a = Ps + b * Qs;
      const cs = 0.5 * (a - Ps) * Qs;
      const ps = 0.5 * (Ps - c) * Qs;
      const ts = cs + ps;
      const prompt =
        "<p>In a competitive market, demand is <span class='formula'>P = " + a + " − " + b +
        "Q</span> and supply is <span class='formula'>P = " + c + " + " + d + "Q</span>. What is consumer surplus at the competitive equilibrium?</p>";
      const answer =
        "<p>Equilibrium: " + a + " − " + b + "Q = " + c + " + " + d + "Q, so Q* = " + Qs + " and P* = " + EQS.money(Ps) + ".</p>" +
        "<p>Consumer surplus is the triangle below demand and above price:</p><p class='formula-line'>CS = ½ × (" + a + " − " + Ps + ") × " + Qs + " = " + EQS.money(cs) + ".</p>" +
        "<p>Producer surplus is the triangle below price and above supply: PS = ½ × (" + Ps + " − " + c + ") × " + Qs + " = " + EQS.money(ps) + ".</p>" +
        "<p>Total surplus = CS + PS = " + EQS.money(ts) + ".</p>";
      return EQS.numeric({
        topic: "demand-supply",
        subtopic: "Surplus",
        difficulty: "medium",
        source: "Week 2/4 · Surplus",
        key: "surplus-" + a + "-" + b + "-" + c + "-" + d,
        prompt: prompt,
        writtenPrompt:
          "<p>In a competitive market, demand is <span class='formula'>P = " + a + " − " + b +
          "Q</span> and supply is <span class='formula'>P = " + c + " + " + d + "Q</span>.</p><p>(a) Find the equilibrium price and quantity. (b) Calculate consumer surplus. (c) Calculate producer surplus and total surplus. (d) Explain what each area represents.</p>",
        correct: EQS.money(cs),
        wrong: [EQS.money(ps), EQS.money(ts), EQS.money(ts + cs)],
        answer: answer,
        explanation: "<p>CS = ½ × (" + a + " − " + Ps + ") × " + Qs + " = " + EQS.money(cs) + ".</p>",
        trap: "Use the demand intercept and the equilibrium price; do not use the supply intercept for CS.",
        rubric: ["Finds equilibrium", "Uses the correct triangle for CS", "Computes PS and TS consistently"]
      });
    }
  });

  /* ---------- one-curve shift application ---------- */
  const demandEvents = [
    { text: "household incomes rise and the good is normal", curve: "demand", dir: 1 },
    { text: "household incomes rise and the good is inferior", curve: "demand", dir: -1 },
    { text: "the price of a substitute rises", curve: "demand", dir: 1 },
    { text: "the price of a substitute falls", curve: "demand", dir: -1 },
    { text: "the price of a complement rises", curve: "demand", dir: -1 },
    { text: "the price of a complement falls", curve: "demand", dir: 1 },
    { text: "a health study makes consumers like the good more", curve: "demand", dir: 1 },
    { text: "a health scare makes consumers like the good less", curve: "demand", dir: -1 },
    { text: "the number of buyers rises", curve: "demand", dir: 1 },
    { text: "the number of buyers falls", curve: "demand", dir: -1 },
    { text: "buyers expect the price to be higher next month", curve: "demand", dir: 1 },
    { text: "buyers expect the price to be lower next month", curve: "demand", dir: -1 }
  ];
  const supplyEvents = [
    { text: "the price of an input rises", curve: "supply", dir: -1 },
    { text: "the price of an input falls", curve: "supply", dir: 1 },
    { text: "a new technology lowers production costs", curve: "supply", dir: 1 },
    { text: "an old machine breaks down and raises costs", curve: "supply", dir: -1 },
    { text: "the number of sellers rises", curve: "supply", dir: 1 },
    { text: "the number of sellers falls", curve: "supply", dir: -1 },
    { text: "sellers expect the price to be higher next month", curve: "supply", dir: -1 },
    { text: "sellers expect the price to be lower next month", curve: "supply", dir: 1 }
  ];

  function shiftEffect(curve, dir) {
    if (curve === "demand") {
      return dir > 0 ? { P: 1, Q: 1, label: "Demand shifts right: P rises, Q rises" } : { P: -1, Q: -1, label: "Demand shifts left: P falls, Q falls" };
    }
    return dir > 0 ? { P: -1, Q: 1, label: "Supply shifts right: P falls, Q rises" } : { P: 1, Q: -1, label: "Supply shifts left: P rises, Q falls" };
  }
  function effectText(p, q) {
    return "Price " + (p > 0 ? "rises" : "falls") + "; quantity " + (q > 0 ? "rises" : "falls");
  }

  EQS.register({
    topic: "demand-supply",
    subtopic: "Demand and supply shifts",
    difficulty: "medium",
    mode: "application",
    source: "Week 2 · Shift analysis",
    gen: function () {
      const product = EQS.pick(products);
      const event = EQS.pick(demandEvents.concat(supplyEvents));
      const eff = shiftEffect(event.curve, event.dir);
      const correct = effectText(eff.P, eff.Q);
      const wrong = [
        effectText(-eff.P, eff.Q),
        effectText(eff.P, -eff.Q),
        effectText(-eff.P, -eff.Q)
      ];
      const prompt =
        "<p>In the market for <strong>" + product + "</strong>, " + event.text +
        ". Assuming all else equal, what happens to the equilibrium price and quantity?</p>";
      const answer =
        "<p>" + (event.curve === "demand" ? "This event changes a determinant of <strong>demand</strong>" : "This event changes a determinant of <strong>supply</strong>") +
        ", so the " + event.curve + " curve shifts " + (event.dir > 0 ? "right" : "left") + ".</p>" +
        "<p>" + eff.label + ".</p>" +
        "<p>The other curve does not shift. The new equilibrium is found where the shifted curve meets the unchanged curve.</p>";
      return {
        topic: "demand-supply",
        subtopic: "Shifts",
        difficulty: "medium",
        source: "Week 2 · Shift analysis",
        mcq: { prompt: prompt, options: [], correct: 0, explanation: answer },
        written: {
          prompt:
            "<p>In the market for <strong>" + product + "</strong>, " + event.text +
            ".</p><p>(a) Which curve shifts, and in which direction? (b) What happens to equilibrium price and quantity? (c) Explain why the other curve does not shift.</p>",
          answer: answer,
          rubric: ["Identifies the correct curve and direction", "States the price and quantity effects", "Distinguishes a shift from a movement"]
        },
        _meta: { correct: correct, wrong: wrong, prompt: prompt, answer: answer }
      };
    }
  });
  /* Convert the application generator's raw payload into shuffled MCQ options at generation time. */
  const appShiftEntry = EQS.registry[EQS.registry.length - 1];
  const rawShiftGen = appShiftEntry.gen;
  appShiftEntry.gen = function () {
    const q = rawShiftGen();
    const o = EQS.optionsFrom(q._meta.correct, q._meta.wrong);
    q.mcq.options = o.options;
    q.mcq.correct = o.correct;
    delete q._meta;
    return q;
  };

  /* ---------- both curves shift ---------- */
  EQS.register({
    topic: "demand-supply",
    subtopic: "Both curves shift",
    difficulty: "hard",
    mode: "application",
    source: "Week 2 · Both shifts",
    gen: function () {
      const product = EQS.pick(products);
      let dEvent, sEvent, effD, effS, unamb;
      let guard = 0;
      do {
        dEvent = EQS.pick(demandEvents);
        sEvent = EQS.pick(supplyEvents);
        effD = shiftEffect("demand", dEvent.dir);
        effS = shiftEffect("supply", sEvent.dir);
        if (effD.P === effS.P) unamb = { var: "price", dir: effD.P };
        else if (effD.Q === effS.Q) unamb = { var: "quantity", dir: effD.Q };
        else unamb = null;
      } while (!unamb && guard++ < 30);
      if (!unamb) unamb = { var: "price", dir: 1 };
      const correct = unamb.var.charAt(0).toUpperCase() + unamb.var.slice(1) + " " + (unamb.dir > 0 ? "rises" : "falls") + " unambiguously";
      const wrong = [
        unamb.var.charAt(0).toUpperCase() + unamb.var.slice(1) + " " + (unamb.dir > 0 ? "falls" : "rises") + " unambiguously",
        "Both price and quantity rise unambiguously",
        "Neither price nor quantity changes"
      ];
      const prompt =
        "<p>In the market for <strong>" + product + "</strong>, two things happen at once: " + dEvent.text +
        ", and " + sEvent.text + ". Which outcome is unambiguous?</p>";
      const answer =
        "<p>Demand shifts " + (dEvent.dir > 0 ? "right" : "left") + ": " + effD.label + ".</p>" +
        "<p>Supply shifts " + (sEvent.dir > 0 ? "right" : "left") + ": " + effS.label + ".</p>" +
        "<p>The two shifts push price in " + (effD.P === effS.P ? "the same direction" : "opposite directions") +
        " and quantity in " + (effD.Q === effS.Q ? "the same direction" : "opposite directions") + ".</p>" +
        "<p>Therefore <strong>" + correct.toLowerCase() + "</strong>; the other variable is ambiguous without knowing the relative sizes of the shifts.</p>";
      return EQS.theory({
        topic: "demand-supply",
        subtopic: "Both curves shift",
        difficulty: "hard",
        source: "Week 2 · Both shifts",
        prompt: prompt,
        writtenPrompt:
          "<p>In the market for <strong>" + product + "</strong>, two things happen at once: " + dEvent.text +
          ", and " + sEvent.text + ".</p><p>(a) State the direction of each curve shift. (b) Which equilibrium variable is unambiguous, and in which direction? (c) Which variable is ambiguous, and why? (d) What additional information would resolve the ambiguity?</p>",
        correct: correct,
        wrong: wrong,
        explanation: answer,
        answer: answer,
        rubric: ["Identifies both shift directions", "Finds the unambiguous variable", "Explains why the other is ambiguous"]
      });
    }
  });

  /* ---------- price elasticity from two points ---------- */
  EQS.registerNumeric({
    topic: "elasticity",
    subtopic: "Price elasticity",
    difficulty: "medium",
    source: "Week 3 · Quiz 3 style",
    gen: function () {
      const P1 = EQS.ri(10, 80);
      const pctP = EQS.pick([10, 20, 25, 30, 40, 50]);
      const P2 = Math.round(P1 * (1 + pctP / 100) * 100) / 100;
      const Q1 = EQS.ri(80, 500);
      const target = EQS.pick([0.2, 0.3, 0.5, 0.75, 1, 1.2, 1.5, 2, 2.5]);
      let Q2 = Math.round(Q1 * (1 - target * pctP / 100));
      if (Q2 < 10) Q2 = 10;
      if (Q2 === Q1) Q2 = Q1 - 10;
      const pctQ = ((Q2 - Q1) / Q1) * 100;
      const ed = Math.round((pctQ / pctP) * 100) / 100;
      const abs = Math.abs(ed);
      const cls = abs > 1.0001 ? "elastic" : abs < 0.9999 ? "inelastic" : "unit elastic";
      const prompt =
        "<p>The price of a good rises from " + EQS.money(P1) + " to " + EQS.money(P2) +
        ", and quantity demanded falls from " + Q1 + " to " + Q2 +
        " units. Using the initial values to calculate percentage changes, what is the price elasticity of demand?</p>";
      const answer =
        "<p>Percentage change in quantity demanded:</p><p class='formula-line'>%ΔQ = (" + Q2 + " − " + Q1 + ") ÷ " + Q1 + " × 100 = " + EQS.pct(pctQ, 2) + "</p>" +
        "<p>Percentage change in price:</p><p class='formula-line'>%ΔP = (" + P2 + " − " + P1 + ") ÷ " + P1 + " × 100 = +" + EQS.pct(pctP, 2) + "</p>" +
        "<p class='formula-line'>E<sub>d</sub> = %ΔQ ÷ %ΔP = " + EQS.num(pctQ, 2) + "% ÷ " + EQS.num(pctP, 2) + "% = <strong>" + EQS.num(ed, 2) + "</strong></p>" +
        "<p>Since |E<sub>d</sub>| = " + EQS.num(abs, 2) + ", demand is <strong>" + cls + "</strong>.</p>";
      const wrong = [
        EQS.num(ed + 0.5, 2),
        EQS.num(ed - 0.5, 2),
        EQS.num(ed * 2, 2)
      ];
      return EQS.numeric({
        topic: "elasticity",
        subtopic: "Price elasticity",
        difficulty: "medium",
        source: "Week 3 · Quiz 3 style",
        key: "ed-" + P1 + "-" + P2 + "-" + Q1 + "-" + Q2,
        prompt: prompt,
        writtenPrompt:
          "<p>The price of a good rises from " + EQS.money(P1) + " to " + EQS.money(P2) +
          ", and quantity demanded falls from " + Q1 + " to " + Q2 +
          " units.</p><p>(a) Calculate the percentage change in quantity demanded and in price using the initial values. (b) Calculate the price elasticity of demand. (c) Is demand elastic, inelastic or unit elastic? (d) What happens to total consumer spending on the good?</p>",
        correct: EQS.num(ed, 2),
        wrong: wrong,
        answer: answer + "<p>Total spending moves in the same direction as price when demand is inelastic, and in the opposite direction when demand is elastic. Here, because demand is " + cls + ", spending " + (abs > 1 ? "falls" : abs < 1 ? "rises" : "is unchanged") + " when price rises.</p>",
        explanation: "<p>E<sub>d</sub> = " + EQS.num(ed, 2) + "; demand is " + cls + ".</p>",
        trap: "Use the initial values as the base, and compare |Ed| with 1.",
        rubric: ["Uses initial-value percentage changes", "Computes Ed correctly", "Classifies demand", "Links to total spending"]
      });
    }
  });

  /* ---------- elasticity and revenue ---------- */
  EQS.registerNumeric({
    topic: "elasticity",
    subtopic: "Elasticity and revenue",
    difficulty: "medium",
    source: "Week 3 · Elasticity",
    gen: function () {
      const edAbs = EQS.pick([0.2, 0.4, 0.6, 0.8, 1.2, 1.5, 2, 2.5]);
      const dir = EQS.chance(0.5) ? 1 : -1;
      const pctP = EQS.pick([5, 10, 15, 20, 25]);
      const pctQ = -(edAbs * pctP * dir);
      const elastic = edAbs > 1;
      const priceUp = dir > 0;
      const spending = elastic ? (priceUp ? "falls" : "rises") : (priceUp ? "rises" : "falls");
      const prompt =
        "<p>A good's price elasticity of demand is " + (priceUp ? "" : "") + "|E<sub>d</sub>| = " + edAbs +
        ". The price changes by " + (dir > 0 ? "+" : "−") + pctP + "%. What happens to total consumer spending on the good?</p>";
      const answer =
        "<p>%ΔQ = E<sub>d</sub> × %ΔP = " + (dir > 0 ? "−" : "+") + EQS.num(edAbs, 1) + "% × " + pctP + "% = " +
        (pctQ > 0 ? "+" : "") + EQS.num(pctQ, 1) + "%.</p>" +
        "<p>Because demand is <strong>" + (elastic ? "elastic" : "inelastic") + "</strong> (|E<sub>d</sub>| " + (elastic ? ">" : "<") + " 1), the quantity effect " +
        (elastic ? "dominates" : "is dominated by") + " the price effect. Total spending <strong>" + spending + "</strong>.</p>";
      return EQS.numeric({
        topic: "elasticity",
        subtopic: "Elasticity and revenue",
        difficulty: "medium",
        source: "Week 3 · Elasticity",
        key: "rev-" + edAbs + "-" + dir + "-" + pctP,
        prompt: prompt,
        writtenPrompt:
          "<p>A good's price elasticity of demand is |E<sub>d</sub>| = " + edAbs + ". The price changes by " +
          (dir > 0 ? "+" : "−") + pctP + "%.</p><p>(a) Calculate the percentage change in quantity demanded. (b) Is demand elastic or inelastic? (c) What happens to total consumer spending? (d) Explain using the price effect and quantity effect.</p>",
        correct: "Spending " + spending,
        wrong: ["Spending " + (spending === "rises" ? "falls" : "rises"), "Spending is unchanged", "Spending falls to zero"],
        answer: answer,
        explanation: "<p>With " + (elastic ? "elastic" : "inelastic") + " demand, a price " + (priceUp ? "rise" : "cut") + " makes total spending " + spending + ".</p>",
        trap: "Total spending is P × Q. Elasticity tells you which percentage change is larger.",
        rubric: ["Computes %ΔQ with the correct sign", "Classifies elasticity", "Determines the spending direction", "Explains the two effects"]
      });
    }
  });

  /* ---------- cross-price elasticity ---------- */
  EQS.registerNumeric({
    topic: "elasticity",
    subtopic: "Cross-price elasticity",
    difficulty: "easy",
    source: "Week 3 · Elasticity",
    gen: function () {
      const pairs = [
        { a: "coffee", b: "tea", rel: "substitutes", sign: 1 },
        { a: "taxi rides", b: "Grab rides", rel: "substitutes", sign: 1 },
        { a: "printer ink", b: "printers", rel: "complements", sign: -1 },
        { a: "hotel stays", b: "air travel", rel: "complements", sign: -1 },
        { a: "butter", b: "margarine", rel: "substitutes", sign: 1 },
        { a: "game consoles", b: "console games", rel: "complements", sign: -1 }
      ];
      const pair = EQS.pick(pairs);
      const pctP = EQS.pick([10, 20, 25, 30, 40]);
      const mag = EQS.pick([0.2, 0.4, 0.5, 0.8, 1, 1.2]);
      const pctQ = pair.sign * mag * pctP;
      const exy = Math.round((pctQ / pctP) * 100) / 100;
      const prompt =
        "<p>The price of <strong>" + pair.b + "</strong> changes by " + (pair.sign > 0 ? "+" : "+") + pctP +
        "%, and as a result the quantity demanded of <strong>" + pair.a + "</strong> changes by " +
        (pctQ > 0 ? "+" : "−") + EQS.num(Math.abs(pctQ), 1) +
        "%. What is the cross-price elasticity of demand for " + pair.a + " with respect to the price of " + pair.b + "?</p>";
      const answer =
        "<p class='formula-line'>E<sub>ab</sub> = %ΔQ<sub>a</sub> ÷ %ΔP<sub>b</sub> = " +
        (pctQ > 0 ? "+" : "−") + EQS.num(Math.abs(pctQ), 1) + "% ÷ +" + pctP + "% = <strong>" +
        (exy > 0 ? "+" : "") + EQS.num(exy, 2) + "</strong></p>" +
        "<p>The sign is " + (exy > 0 ? "positive" : "negative") + ", so " + pair.a + " and " + pair.b +
        " are <strong>" + pair.rel + "</strong>.</p>";
      return EQS.numeric({
        topic: "elasticity",
        subtopic: "Cross-price elasticity",
        difficulty: "easy",
        source: "Week 3 · Elasticity",
        key: "xed-" + pair.a + "-" + pair.b + "-" + pctP + "-" + mag,
        prompt: prompt,
        writtenPrompt:
          "<p>The price of <strong>" + pair.b + "</strong> rises by " + pctP + "%, and the quantity demanded of <strong>" +
          pair.a + "</strong> changes by " + (pctQ > 0 ? "+" : "−") + EQS.num(Math.abs(pctQ), 1) + "%.</p><p>(a) Calculate the cross-price elasticity. (b) What does the sign tell you about the relationship? (c) Are the goods strong or weak substitutes/complements? Explain using the magnitude.</p>",
        correct: (exy > 0 ? "+" : "") + EQS.num(exy, 2) + (exy > 0 ? ", substitutes" : ", complements"),
        wrong: [
          (exy > 0 ? "−" : "+") + EQS.num(Math.abs(exy), 2) + (exy > 0 ? ", complements" : ", substitutes"),
          EQS.num(1 / exy, 2) + ", unrelated",
          (exy > 0 ? "+" : "") + EQS.num(exy, 2) + ", inferior goods"
        ],
        answer: answer,
        explanation: "<p>E<sub>ab</sub> = " + EQS.num(exy, 2) + ". " + (exy > 0 ? "Positive" : "Negative") + " cross-price elasticity means " + pair.rel + ".</p>",
        trap: "The sign identifies substitutes vs complements; the magnitude measures strength.",
        rubric: ["Computes the elasticity", "Interprets the sign", "Uses the magnitude"]
      });
    }
  });

  /* ---------- income elasticity ---------- */
  EQS.registerNumeric({
    topic: "elasticity",
    subtopic: "Income elasticity",
    difficulty: "easy",
    source: "Week 3 · Elasticity",
    gen: function () {
      const goods = [
        { name: "instant noodles", type: "inferior", sign: -1, mag: 0.2 },
        { name: "budget meals", type: "inferior", sign: -1, mag: 0.5 },
        { name: "public transport", type: "normal necessity", sign: 1, mag: 0.4 },
        { name: "rice", type: "normal necessity", sign: 1, mag: 0.6 },
        { name: "restaurant meals", type: "normal luxury", sign: 1, mag: 1.5 },
        { name: "overseas holidays", type: "normal luxury", sign: 1, mag: 2.2 },
        { name: "designer handbags", type: "normal luxury", sign: 1, mag: 2.8 }
      ];
      const good = EQS.pick(goods);
      const pctI = EQS.pick([5, 10, 12, 15, 20]);
      const pctQ = good.sign * good.mag * pctI;
      const ey = Math.round((pctQ / pctI) * 100) / 100;
      const prompt =
        "<p>Household income changes by +" + pctI + "%, and the quantity demanded of <strong>" + good.name +
        "</strong> changes by " + (pctQ > 0 ? "+" : "−") + EQS.num(Math.abs(pctQ), 1) +
        "%. What is the income elasticity of demand, and what type of good is it?</p>";
      const answer =
        "<p class='formula-line'>E<sub>I</sub> = %ΔQ ÷ %ΔIncome = " + (pctQ > 0 ? "+" : "−") + EQS.num(Math.abs(pctQ), 1) +
        "% ÷ +" + pctI + "% = <strong>" + EQS.num(ey, 2) + "</strong></p>" +
        "<p>" + (ey < 0 ? "Negative income elasticity means the good is <strong>inferior</strong>." : ey > 1 ? "Positive and greater than 1 means the good is a <strong>normal luxury</strong>." : "Positive and between 0 and 1 means the good is a <strong>normal necessity</strong>.") + "</p>";
      return EQS.numeric({
        topic: "elasticity",
        subtopic: "Income elasticity",
        difficulty: "easy",
        source: "Week 3 · Elasticity",
        key: "yed-" + good.name + "-" + pctI + "-" + good.mag,
        prompt: prompt,
        writtenPrompt:
          "<p>Household income rises by " + pctI + "%, and the quantity demanded of <strong>" + good.name +
          "</strong> changes by " + (pctQ > 0 ? "+" : "−") + EQS.num(Math.abs(pctQ), 1) +
          "%.</p><p>(a) Calculate the income elasticity. (b) Classify the good as inferior, normal necessity or normal luxury. (c) Explain what the sign and magnitude mean in words.</p>",
        correct: EQS.num(ey, 2) + ", " + good.type,
        wrong: [
          EQS.num(-ey, 2) + ", " + (good.type === "inferior" ? "normal luxury" : "inferior"),
          EQS.num(1 / ey, 2) + ", " + good.type,
          EQS.num(ey, 2) + ", " + (good.type === "normal luxury" ? "normal necessity" : "normal luxury")
        ],
        answer: answer,
        explanation: "<p>E<sub>I</sub> = " + EQS.num(ey, 2) + ", so the good is " + good.type + ".</p>",
        trap: "A negative income elasticity means inferior, not 'bad'. A positive value above 1 means luxury.",
        rubric: ["Computes the elasticity", "Classifies the good correctly", "Interprets sign and magnitude"]
      });
    }
  });

  /* ---------- which elasticity? ---------- */
  EQS.register({
    topic: "elasticity",
    subtopic: "Choosing elasticity",
    difficulty: "easy",
    mode: "application",
    source: "Week 3 · Elasticity",
    gen: function () {
      const scenarios = [
        { text: "The price of Grab rides rises and the quantity of taxi rides demanded changes.", correct: "Cross-price elasticity of demand", why: "The price of a related good changed, so we measure the response of demand for another good." },
        { text: "Household income rises and the quantity of public transport demanded changes.", correct: "Income elasticity of demand", why: "Income changed, so we measure the income responsiveness of demand." },
        { text: "The price of coffee rises and the quantity of coffee demanded changes.", correct: "Price elasticity of demand", why: "The good's own price changed, so we use the own-price elasticity." },
        { text: "The price of a good rises and the quantity supplied changes.", correct: "Price elasticity of supply", why: "The response of quantity supplied to the good's own price is the price elasticity of supply." }
      ];
      const s = EQS.pick(scenarios);
      const prompt = "<p>" + s.text + " Which elasticity should be used?</p>";
      const answer =
        "<p><strong>" + s.correct + "</strong>.</p><p>" + s.why + "</p>" +
        "<p>Choosing the wrong elasticity would confuse a change in another good's price or in income with a change in the good's own price, giving a misleading number.</p>";
      return EQS.theory({
        topic: "elasticity",
        subtopic: "Choosing elasticity",
        difficulty: "easy",
        source: "Week 3 · Elasticity",
        prompt: prompt,
        writtenPrompt:
          "<p>" + s.text + "</p><p>(a) Which elasticity is relevant? (b) Write the formula. (c) What would the sign tell you? (d) Why would using a different elasticity be misleading?</p>",
        correct: s.correct,
        wrong: ["Price elasticity of demand", "Cross-price elasticity of demand", "Income elasticity of demand", "Price elasticity of supply"].filter((x) => x !== s.correct),
        explanation: answer,
        answer: answer,
        rubric: ["Chooses the correct elasticity", "Writes the correct formula", "Interprets the sign"]
      });
    }
  });

  /* ---------- point elasticity on a linear demand curve ---------- */
  EQS.registerNumeric({
    topic: "elasticity",
    subtopic: "Point elasticity",
    difficulty: "hard",
    source: "Week 3 · Elasticity extension",
    gen: function () {
      const b = EQS.ri(1, 5);
      const Q = EQS.ri(20, 100);
      const P = EQS.ri(10, 60);
      const a = Q + b * P;
      const ed = -b * (P / Q);
      const abs = Math.abs(ed);
      const cls = abs > 1 ? "elastic" : abs < 1 ? "inelastic" : "unit elastic";
      const prompt =
        "<p>Demand is <span class='formula'>Q = " + a + " − " + b + "P</span>. At the point where P = " +
        EQS.money(P) + " and Q = " + Q + ", what is the price elasticity of demand?</p>";
      const answer =
        "<p>For a linear demand curve, the point elasticity is</p><p class='formula-line'>E<sub>d</sub> = (ΔQ/ΔP) × (P/Q) = −" + b + " × (" + P + "/" + Q + ") = <strong>" + EQS.num(ed, 2) + "</strong>.</p>" +
        "<p>Since |E<sub>d</sub>| = " + EQS.num(abs, 2) + ", demand is <strong>" + cls + "</strong> at this point.</p>" +
        "<p>This is the same idea as the percentage formula: a 1% rise in price reduces quantity demanded by about " + EQS.num(abs, 2) + "% at this point.</p>";
      return EQS.numeric({
        topic: "elasticity",
        subtopic: "Point elasticity",
        difficulty: "hard",
        source: "Week 3 · Elasticity extension",
        key: "pointed-" + a + "-" + b + "-" + P + "-" + Q,
        prompt: prompt,
        writtenPrompt:
          "<p>Demand is <span class='formula'>Q = " + a + " − " + b + "P</span>.</p><p>(a) At P = " + EQS.money(P) +
          ", calculate Q. (b) Calculate the point price elasticity of demand using E<sub>d</sub> = (ΔQ/ΔP)(P/Q). (c) Is demand elastic or inelastic at this point? (d) Explain why elasticity can change along a linear demand curve even though the slope is constant.</p>",
        correct: EQS.num(ed, 2),
        wrong: [EQS.num(-1 / ed, 2), EQS.num(ed * (P / Q), 2), EQS.num(-b, 2)],
        answer: answer,
        explanation: "<p>E<sub>d</sub> = −b(P/Q) = " + EQS.num(ed, 2) + ", so demand is " + cls + ".</p>",
        trap: "Slope is ΔQ/ΔP; elasticity also depends on the P/Q ratio, so it changes along a straight line.",
        rubric: ["Uses the point-elasticity formula", "Computes the correct value", "Explains why elasticity varies along the curve"]
      });
    }
  });

  /* ---------- supply elasticity ---------- */
  EQS.registerNumeric({
    topic: "elasticity",
    subtopic: "Supply elasticity",
    difficulty: "easy",
    source: "Week 3 · Quiz 3 style",
    gen: function () {
      const es = EQS.pick([0.5, 0.8, 1, 1.5, 2, 2.5, 3]);
      const pctP = EQS.pick([10, 20, 25, 40, 50, 100, 200]);
      const pctQ = es * pctP;
      const prompt =
        "<p>The price elasticity of supply is " + es + ". If the price rises by " + pctP +
        "%, by what percentage does quantity supplied change?</p>";
      const answer =
        "<p class='formula-line'>%ΔQ<sub>s</sub> = E<sub>s</sub> × %ΔP = " + es + " × " + pctP + "% = <strong>+" + EQS.num(pctQ, 1) + "%</strong>.</p>" +
        "<p>Supply is " + (es > 1 ? "elastic" : es < 1 ? "inelastic" : "unit elastic") + ".</p>";
      return EQS.numeric({
        topic: "elasticity",
        subtopic: "Supply elasticity",
        difficulty: "easy",
        source: "Week 3 · Quiz 3 style",
        key: "es-" + es + "-" + pctP,
        prompt: prompt,
        writtenPrompt:
          "<p>The price elasticity of supply is " + es + ".</p><p>(a) If price rises by " + pctP +
          "%, calculate the percentage change in quantity supplied. (b) Is supply elastic or inelastic? (c) What does this imply about how quickly sellers can respond to a price increase?</p>",
        correct: "+" + EQS.num(pctQ, 1) + "%",
        wrong: ["+" + EQS.num(pctQ + 10, 1) + "%", "+" + EQS.num(pctQ + 20, 1) + "%", "+" + EQS.num(Math.max(0, pctQ - 10), 1) + "%"],
        answer: answer,
        explanation: "<p>%ΔQs = Es × %ΔP = " + EQS.num(pctQ, 1) + "%.</p>",
        trap: "Elasticity multiplies the percentage price change; it is not added to it.",
        rubric: ["Applies the supply elasticity formula", "Computes the percentage change", "Interprets elasticity"]
      });
    }
  });
})(typeof window !== "undefined" ? window : globalThis);
