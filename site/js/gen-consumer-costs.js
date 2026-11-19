/* Procedural generators: consumer choice, costs, profit and perfect competition. */
(function (g) {
  const EQS = g.EQS;
  const names = ["Wei Ling", "Maya", "Arjun", "Sofia", "Hafiz", "Chloe", "Daniel", "Priya", "Marcus", "Nurul"];

  /* ---------- budget constraint ---------- */
  EQS.registerNumeric({
    topic: "consumer-choice",
    subtopic: "Budget constraint",
    difficulty: "easy",
    source: "Week 3 · Budget constraint",
    gen: function () {
      const pricePairs = [
        [50, 25], [40, 20], [60, 20], [30, 15], [80, 40], [45, 15],
        [24, 12], [100, 50], [20, 10], [36, 12], [25, 10], [60, 30]
      ];
      const pair = EQS.pick(pricePairs);
      const pX = pair[0];
      const pY = pair[1];
      const mult = EQS.ri(2, 6);
      const income = pX * mult;
      const maxX = income / pX;
      const maxY = income / pY;
      const oc = pX / pY;
      const goodX = EQS.pick(["jeans", "t-shirts", "coffee", "bubble tea", "notebooks"]);
      const goodY = EQS.pick(["sweaters", "sandals", "sandwiches", "muffins", "pens"]);
      const prompt =
        "<p>A consumer has " + EQS.money(income) + " to spend on " + goodX + " and " + goodY + ". " + goodX +
        " cost " + EQS.money(pX) + " each and " + goodY + " cost " + EQS.money(pY) +
        " each. What is the opportunity cost of one " + goodX.replace(/s$/, "") + " in terms of " + goodY + "?</p>";
      const answer =
        "<p>Budget constraint: <span class='formula'>" + pX + "X + " + pY + "Y = " + income + "</span>.</p>" +
        "<p>If all income is spent on " + goodX + ", the consumer can buy " + maxX + "; if all is spent on " + goodY +
        ", " + maxY + ".</p><p>Opportunity cost of one " + goodX.replace(/s$/, "") + " = P<sub>X</sub>/P<sub>Y</sub> = " +
        EQS.money(pX) + " ÷ " + EQS.money(pY) + " = <strong>" + EQS.num(oc, 2) + " " + goodY + "</strong>.</p>" +
        "<p>The price ratio is the slope of the budget line and measures the trade-off between the two goods.</p>";
      return EQS.numeric({
        topic: "consumer-choice",
        subtopic: "Budget constraint",
        difficulty: "easy",
        source: "Week 3 · Budget constraint",
        key: "budget-" + pX + "-" + pY + "-" + income,
        prompt: prompt,
        writtenPrompt:
          "<p>A consumer has " + EQS.money(income) + " to spend on " + goodX + " and " + goodY + ". " + goodX +
          " cost " + EQS.money(pX) + " each and " + goodY + " cost " + EQS.money(pY) + " each.</p><p>(a) Write the budget constraint. (b) Find both intercepts. (c) Calculate the opportunity cost of one " +
          goodX.replace(/s$/, "") + " in terms of " + goodY + ". (d) What happens to the budget line if income rises to " +
          EQS.money(income * 1.25) + "?</p>",
        correct: EQS.num(oc, 2) + " " + goodY,
        wrong: [EQS.num(1 / oc, 2) + " " + goodY, EQS.money(pX) + " of " + goodY, EQS.num(oc * 2, 2) + " " + goodY],
        answer: answer,
        explanation: "<p>Opportunity cost is the price ratio P<sub>X</sub>/P<sub>Y</sub> = " + EQS.num(oc, 2) + " " + goodY + " per " + goodX.replace(/s$/, "") + ".</p>",
        trap: "Opportunity cost is the price ratio, not the money price itself.",
        rubric: ["Writes the budget equation", "Finds intercepts", "Calculates the price ratio"]
      });
    }
  });

  /* ---------- MB per dollar ---------- */
  EQS.registerNumeric({
    topic: "consumer-choice",
    subtopic: "MB per dollar",
    difficulty: "easy",
    source: "Week 3 · Quiz 3 style",
    gen: function () {
      const goodA = EQS.pick(["rice", "coffee", "bubble tea", "chicken rice"]);
      const goodB = EQS.pick(["beans", "sandwiches", "muffins", "noodles"]);
      const pA = EQS.ri(2, 12);
      const pB = EQS.ri(3, 15);
      let mbA = EQS.ri(10, 40);
      let mbB = EQS.ri(10, 45);
      if (mbA / pA === mbB / pB) mbB += 5;
      const ratioA = mbA / pA;
      const ratioB = mbB / pB;
      const chooseA = ratioA > ratioB;
      const prompt =
        "<p>A consumer is choosing between " + goodA + " and " + goodB + ". The marginal benefit of the next unit of " +
        goodA + " is " + EQS.money(mbA) + " and its price is " + EQS.money(pA) + ". The marginal benefit of the next unit of " +
        goodB + " is " + EQS.money(mbB) + " and its price is " + EQS.money(pB) +
        ". Which good should the consumer buy next?</p>";
      const answer =
        "<p>Compare marginal benefit per dollar:</p><p class='formula-line'>MB<sub>A</sub>/P<sub>A</sub> = " + mbA + "/" + pA + " = " + EQS.num(ratioA, 2) + "</p>" +
        "<p class='formula-line'>MB<sub>B</sub>/P<sub>B</sub> = " + mbB + "/" + pB + " = " + EQS.num(ratioB, 2) + "</p>" +
        "<p>" + (chooseA ? goodA : goodB) + " gives more benefit per dollar, so the consumer should buy the next unit of " +
        (chooseA ? goodA : goodB) + ". The consumer keeps reallocating until the MB/P ratios are equal.</p>";
      return EQS.numeric({
        topic: "consumer-choice",
        subtopic: "MB per dollar",
        difficulty: "easy",
        source: "Week 3 · Quiz 3 style",
        key: "mbpd-" + mbA + "-" + pA + "-" + mbB + "-" + pB,
        prompt: prompt,
        writtenPrompt:
          "<p>A consumer is choosing between " + goodA + " and " + goodB + ". The marginal benefit of the next unit of " +
          goodA + " is " + EQS.money(mbA) + " at a price of " + EQS.money(pA) + "; the marginal benefit of the next unit of " +
          goodB + " is " + EQS.money(mbB) + " at a price of " + EQS.money(pB) + ".</p><p>(a) Calculate MB per dollar for each good. (b) Which good should the consumer buy next? (c) What condition holds at the optimal bundle?</p>",
        correct: (chooseA ? goodA : goodB),
        wrong: [(chooseA ? goodB : goodA), "Neither good", "Both goods equally"],
        answer: answer,
        explanation: "<p>" + (chooseA ? goodA : goodB) + " has the higher MB per dollar (" + EQS.num(Math.max(ratioA, ratioB), 2) + " vs " + EQS.num(Math.min(ratioA, ratioB), 2) + ").</p>",
        trap: "Compare MB/P, not MB alone. A higher-priced good can still be the better buy if its MB is high enough.",
        rubric: ["Computes both MB/P ratios", "Chooses the higher ratio", "States the equal-ratio optimum"]
      });
    }
  });

  /* ---------- optimal bundle by greedy MB/$ ---------- */
  EQS.registerNumeric({
    topic: "consumer-choice",
    subtopic: "Optimal bundle",
    difficulty: "hard",
    source: "Week 3 · Consumer equilibrium",
    gen: function () {
      const pA = EQS.pick([10, 12, 15, 20, 25]);
      const pB = EQS.pick([8, 10, 12, 16, 20]);
      const goodA = EQS.pick(["sweaters", "coffee", "bubble tea", "notebooks"]);
      const goodB = EQS.pick(["jeans", "sandwiches", "muffins", "pens"]);
      const mbA = [];
      const mbB = [];
      let a = EQS.ri(80, 140);
      let b = EQS.ri(120, 200);
      for (let i = 0; i < 5; i++) {
        mbA.push(a);
        mbB.push(b);
        a -= EQS.ri(8, 20);
        b -= EQS.ri(10, 24);
      }
      let budget = EQS.pick([80, 90, 100, 110, 120, 150]);
      const totalCostAll = pA * 5 + pB * 5;
      if (budget >= totalCostAll) budget = Math.floor(totalCostAll * 0.65);
      let i = 0, j = 0, spent = 0, benefit = 0;
      const sequence = [];
      let guard = 0;
      while (guard++ < 20) {
        const candidates = [];
        if (i < 5 && spent + pA <= budget) candidates.push({ good: "A", idx: i, ratio: mbA[i] / pA, cost: pA, mb: mbA[i] });
        if (j < 5 && spent + pB <= budget) candidates.push({ good: "B", idx: j, ratio: mbB[j] / pB, cost: pB, mb: mbB[j] });
        if (!candidates.length) break;
        candidates.sort((x, y) => y.ratio - x.ratio || (x.good === "A" ? -1 : 1));
        const pick = candidates[0];
        spent += pick.cost;
        benefit += pick.mb;
        sequence.push(pick.good + (pick.idx + 1));
        if (pick.good === "A") i++; else j++;
      }
      const qA = i, qB = j;
      const prompt =
        "<p>A consumer has a budget of " + EQS.money(budget) + ". " + goodA + " cost " + EQS.money(pA) +
        " each; " + goodB + " cost " + EQS.money(pB) +
        " each. The marginal benefits (in dollars) of successive units are:</p>" +
        EQS.table(
          ["Unit", goodA + " MB", goodA + " MB/$", goodB + " MB", goodB + " MB/$"],
          [1, 2, 3, 4, 5].map(function (n) {
            return [n, "$" + mbA[n - 1], EQS.num(mbA[n - 1] / pA, 2), "$" + mbB[n - 1], EQS.num(mbB[n - 1] / pB, 2)];
          })
        ) +
        "<p>Following the marginal-benefit-per-dollar rule, what is the optimal bundle?</p>";
      const correct = qA + " " + goodA + " and " + qB + " " + goodB;
      const answer =
        "<p>Repeatedly buy the affordable unit with the highest MB per dollar until the budget cannot buy another unit with positive net benefit. The purchase sequence is: " +
        sequence.join(" → ") + ".</p>" +
        "<p>Optimal bundle: <strong>" + correct + "</strong>.</p>" +
        "<p>Spending = " + qA + "×" + EQS.money(pA) + " + " + qB + "×" + EQS.money(pB) + " = " + EQS.money(spent) +
        " (remaining budget " + EQS.money(budget - spent) + "). Total benefit = " + EQS.money(benefit) + ".</p>" +
        "<p>The consumer stops because the next affordable unit would cost more than the remaining budget or would not improve the bundle. At the optimum the marginal benefit per dollar is equalised across the goods that are purchased.</p>";
      return EQS.numeric({
        topic: "consumer-choice",
        subtopic: "Optimal bundle",
        difficulty: "hard",
        source: "Week 3 · Consumer equilibrium",
        key: "bundle-" + pA + "-" + pB + "-" + budget + "-" + mbA.join(",") + "-" + mbB.join(","),
        prompt: prompt,
        writtenPrompt:
          "<p>A consumer has a budget of " + EQS.money(budget) + ". " + goodA + " cost " + EQS.money(pA) +
          " each; " + goodB + " cost " + EQS.money(pB) +
          " each. The marginal benefits (in dollars) of successive units are:</p>" +
          EQS.table(
            ["Unit", goodA + " MB", goodA + " MB/$", goodB + " MB", goodB + " MB/$"],
            [1, 2, 3, 4, 5].map(function (n) {
              return [n, "$" + mbA[n - 1], EQS.num(mbA[n - 1] / pA, 2), "$" + mbB[n - 1], EQS.num(mbB[n - 1] / pB, 2)];
            })
          ) +
          "<p>(a) Explain the rule for choosing the next unit. (b) List the purchase sequence. (c) What is the optimal bundle? (d) How much is spent and what is total benefit?</p>",
        correct: correct,
        wrong: [
          (qA + 1) + " " + goodA + " and " + qB + " " + goodB,
          qA + " " + goodA + " and " + (qB + 1) + " " + goodB,
          (qA + 2) + " " + goodA + " and " + qB + " " + goodB
        ],
        answer: answer,
        explanation: "<p>The greedy MB/$ rule gives " + correct + ", spending " + EQS.money(spent) + " and total benefit " + EQS.money(benefit) + ".</p>",
        trap: "Do not compare total benefits; compare the extra benefit per dollar of the next unit and check affordability.",
        rubric: ["Uses MB per dollar", "Respects the budget", "Gives the optimal quantities and total benefit"]
      });
    }
  });

  /* ---------- individual consumer surplus ---------- */
  EQS.registerNumeric({
    topic: "consumer-choice",
    subtopic: "Consumer surplus",
    difficulty: "easy",
    source: "Week 3 · Consumer surplus",
    gen: function () {
      const buyers = EQS.sample(["Alex", "Bella", "Chen", "Dana", "Ethan", "Farah"], 4);
      const wtp = buyers.map(() => EQS.ri(10, 40)).sort((a, b) => b - a);
      const price = EQS.ri(12, 30);
      const csList = wtp.map((w) => Math.max(0, w - price));
      const total = EQS.sum(csList);
      const prompt =
        "<p>Four buyers have willingness to pay " + wtp.map((w) => EQS.money(w)).join(", ") +
        " for a good. The market price is " + EQS.money(price) + ". What is total consumer surplus?</p>";
      const answer =
        "<p>A buyer purchases only if willingness to pay ≥ price. Consumer surplus for each buyer is max(WTP − P, 0):</p>" +
        EQS.table(
          ["Buyer", "WTP", "Price", "Buys?", "Surplus"],
          buyers.map((b, i) => [b, EQS.money(wtp[i]), EQS.money(price), wtp[i] >= price ? "Yes" : "No", EQS.money(csList[i])])
        ) +
        "<p>Total consumer surplus = " + csList.map((x) => EQS.money(x)).join(" + ") + " = <strong>" + EQS.money(total) + "</strong>.</p>";
      return EQS.numeric({
        topic: "consumer-choice",
        subtopic: "Consumer surplus",
        difficulty: "easy",
        source: "Week 3 · Consumer surplus",
        key: "cs-ind-" + wtp.join("-") + "-" + price,
        prompt: prompt,
        writtenPrompt:
          "<p>Four buyers have willingness to pay " + wtp.map((w) => EQS.money(w)).join(", ") +
          " for a good. The market price is " + EQS.money(price) + ".</p><p>(a) Which buyers purchase? (b) Calculate each buyer's consumer surplus. (c) What is total consumer surplus? (d) Explain why a buyer with WTP below the price does not buy.</p>",
        correct: EQS.money(total),
        wrong: [EQS.money(total + price), EQS.money(total + price + 10), EQS.money(total + price + 20)],
        answer: answer,
        explanation: "<p>Sum max(WTP − P, 0) across buyers = " + EQS.money(total) + ".</p>",
        trap: "Buyers with WTP below the price get zero surplus, not negative surplus, because they do not buy.",
        rubric: ["Identifies who buys", "Computes individual surpluses", "Sums correctly"]
      });
    }
  });

  /* ---------- consumer surplus from linear demand ---------- */
  EQS.registerNumeric({
    topic: "consumer-choice",
    subtopic: "Consumer surplus",
    difficulty: "medium",
    source: "Week 3 · Consumer surplus",
    gen: function () {
      const b = EQS.ri(1, 4);
      const Q = EQS.ri(20, 100);
      const P = EQS.ri(10, 60);
      const a = P + b * Q;
      const cs = 0.5 * (a - P) * Q;
      const prompt =
        "<p>Demand is <span class='formula'>P = " + a + " − " + b + "Q</span>. At a price of " + EQS.money(P) +
        ", what is consumer surplus?</p>";
      const answer =
        "<p>At P = " + EQS.money(P) + ", quantity demanded is Q = (" + a + " − " + P + ")/" + b + " = " + Q + ".</p>" +
        "<p>Consumer surplus is the triangle below demand and above price:</p><p class='formula-line'>CS = ½ × (" + a + " − " + P + ") × " + Q + " = <strong>" + EQS.money(cs) + "</strong>.</p>";
      return EQS.numeric({
        topic: "consumer-choice",
        subtopic: "Consumer surplus",
        difficulty: "medium",
        source: "Week 3 · Consumer surplus",
        key: "cs-lin-" + a + "-" + b + "-" + P,
        prompt: prompt,
        writtenPrompt:
          "<p>Demand is <span class='formula'>P = " + a + " − " + b + "Q</span>.</p><p>(a) At P = " + EQS.money(P) +
          ", calculate quantity demanded. (b) Calculate consumer surplus. (c) Explain why the surplus is a triangle in this case.</p>",
        correct: EQS.money(cs),
        wrong: [EQS.money(a * Q), EQS.money((a - P) * Q), EQS.money(cs + P * Q)],
        answer: answer,
        explanation: "<p>CS = ½ × (" + a + " − " + P + ") × " + Q + " = " + EQS.money(cs) + ".</p>",
        trap: "Use the demand choke price (the intercept), not the market price, as the top of the triangle.",
        rubric: ["Finds Q at the price", "Uses the triangle formula", "Interprets the area"]
      });
    }
  });

  /* ---------- cost table ---------- */
  EQS.registerNumeric({
    topic: "costs-competition",
    subtopic: "Cost curves",
    difficulty: "medium",
    source: "Week 3 · Cost curves",
    gen: function () {
      const FC = EQS.ri(20, 60) * 10;
      const mc = [];
      let base = EQS.ri(10, 20);
      for (let q = 1; q <= 5; q++) {
        mc.push(base);
        base += EQS.ri(5, 15);
      }
      const vc = [0];
      for (let q = 1; q <= 5; q++) vc.push(vc[q - 1] + mc[q - 1]);
      const tc = vc.map((v) => v + FC);
      const atc = tc.map((t, q) => (q === 0 ? null : Math.round((t / q) * 100) / 100));
      const avc = vc.map((v, q) => (q === 0 ? null : Math.round((v / q) * 100) / 100));
      const targetQ = EQS.ri(2, 5);
      const correct = EQS.money(atc[targetQ], 2);
      const prompt =
        "<p>A firm has fixed cost " + EQS.money(FC) + ". Its variable cost at each output level is:</p>" +
        EQS.table(
          ["Quantity", "Fixed cost", "Variable cost"],
          [1, 2, 3, 4, 5].map((q) => [q, EQS.money(FC), EQS.money(vc[q])])
        ) +
        "<p>What is average total cost (ATC) at Q = " + targetQ + "?</p>";
      const answer =
        "<p>At Q = " + targetQ + ": TC = FC + VC = " + EQS.money(FC) + " + " + EQS.money(vc[targetQ]) + " = " + EQS.money(tc[targetQ]) + ".</p>" +
        "<p class='formula-line'>ATC = TC/Q = " + EQS.money(tc[targetQ]) + "/" + targetQ + " = <strong>" + EQS.money(atc[targetQ], 2) + "</strong>.</p>" +
        "<p>AVC = VC/Q = " + EQS.money(avc[targetQ], 2) + "; AFC = FC/Q = " + EQS.money(Math.round((FC / targetQ) * 100) / 100, 2) +
        ". Notice ATC = AVC + AFC.</p>";
      return EQS.numeric({
        topic: "costs-competition",
        subtopic: "Cost curves",
        difficulty: "medium",
        source: "Week 3 · Cost curves",
        key: "cost-" + FC + "-" + mc.join(",") + "-" + targetQ,
        prompt: prompt,
        writtenPrompt:
          "<p>A firm has fixed cost " + EQS.money(FC) + ". Its variable cost at each output level is:</p>" +
          EQS.table(["Quantity", "Fixed cost", "Variable cost"], [1, 2, 3, 4, 5].map((q) => [q, EQS.money(FC), EQS.money(vc[q])])) +
          "<p>(a) Complete a table showing TC, ATC, AVC, AFC and MC for Q = 1 to 5. (b) At what quantity does MC cross ATC? (c) Explain why MC crosses ATC at its minimum.</p>",
        correct: correct,
        wrong: [
          EQS.money(tc[targetQ], 2),
          EQS.money(avc[targetQ], 2),
          EQS.money(tc[targetQ] + FC, 2)
        ],
        answer: answer,
        explanation: "<p>ATC = TC/Q = " + EQS.money(tc[targetQ]) + "/" + targetQ + " = " + EQS.money(atc[targetQ], 2) + ".</p>",
        trap: "ATC includes fixed cost; AVC does not. Do not use VC/Q when asked for ATC.",
        rubric: ["Computes TC", "Divides by quantity", "Distinguishes ATC from AVC"]
      });
    }
  });

  /* ---------- profit from price and ATC ---------- */
  EQS.registerNumeric({
    topic: "costs-competition",
    subtopic: "Profit",
    difficulty: "easy",
    source: "Week 3 · Profit",
    gen: function () {
      const Q = EQS.ri(20, 400);
      const P = EQS.ri(4, 40);
      let atc = EQS.ri(2, P + 8);
      if (atc === P) atc = P + 2;
      const profit = (P - atc) * Q;
      const prompt =
        "<p>A competitive firm sells " + Q + " units at a market price of " + EQS.money(P) +
        " per unit. At this quantity, average total cost is " + EQS.money(atc) + ". What is the firm's profit?</p>";
      const answer =
        "<p>Profit = (P − ATC) × Q = (" + EQS.money(P) + " − " + EQS.money(atc) + ") × " + Q + " = <strong>" + EQS.money(profit) + "</strong>.</p>" +
        "<p>Equivalently, TR = P×Q = " + EQS.money(P * Q) + "; TC = ATC×Q = " + EQS.money(atc * Q) +
        "; profit = TR − TC = " + EQS.money(P * Q) + " − " + EQS.money(atc * Q) + " = " + EQS.money(profit) + ".</p>" +
        "<p>" + (profit >= 0 ? "The firm earns an economic profit." : "The firm makes an economic loss.") + "</p>";
      return EQS.numeric({
        topic: "costs-competition",
        subtopic: "Profit",
        difficulty: "easy",
        source: "Week 3 · Profit",
        key: "profit-" + Q + "-" + P + "-" + atc,
        prompt: prompt,
        writtenPrompt:
          "<p>A competitive firm sells " + Q + " units at a market price of " + EQS.money(P) +
          " per unit. At this quantity, average total cost is " + EQS.money(atc) + ".</p><p>(a) Calculate total revenue. (b) Calculate total cost. (c) Calculate profit using both profit formulas. (d) Is the firm making a profit or a loss?</p>",
        correct: EQS.money(profit),
        wrong: [EQS.money(P * Q), EQS.money(atc * Q), EQS.money(profit + 100)],
        answer: answer,
        explanation: "<p>π = (P − ATC)Q = (" + P + " − " + atc + ") × " + Q + " = " + EQS.money(profit) + ".</p>",
        trap: "Profit is not revenue. Subtract total cost, not just the price.",
        rubric: ["Computes TR and TC", "Uses (P − ATC) × Q", "Interprets profit vs loss"]
      });
    }
  });

  /* ---------- accounting vs economic profit ---------- */
  EQS.registerNumeric({
    topic: "costs-competition",
    subtopic: "Accounting vs economic profit",
    difficulty: "medium",
    source: "Week 3 · Accounting vs economic profit",
    gen: function () {
      const name = EQS.pick(names);
      const business = EQS.pick(["a specialty coffee kiosk", "a graphic design studio", "a tuition centre", "a small bakery", "a fitness studio"]);
      const revenue = EQS.ri(18, 40) * 10000;
      const rent = EQS.ri(2, 8) * 10000;
      const materials = EQS.ri(3, 9) * 10000;
      const wages = EQS.ri(2, 8) * 10000;
      const utilities = EQS.ri(4, 12) * 1000;
      const explicit = rent + materials + wages + utilities;
      const salary = EQS.ri(5, 12) * 10000;
      const interest = EQS.ri(1, 6) * 1000;
      const implicit = salary + interest;
      const accounting = revenue - explicit;
      const economic = accounting - implicit;
      const prompt =
        "<p>" + name + " leaves a job paying " + EQS.money(salary) + " per year to open " + business +
        ". First-year revenue is " + EQS.money(revenue) + ". Explicit costs are rent " + EQS.money(rent) + ", ingredients/materials " +
        EQS.money(materials) + ", staff wages " + EQS.money(wages) + ", and utilities " + EQS.money(utilities) +
        ". " + name + " also gives up " + EQS.money(interest) + " of interest income by using savings. What is economic profit?</p>";
      const answer =
        "<p><strong>Explicit costs</strong> = " + EQS.money(rent) + " + " + EQS.money(materials) + " + " + EQS.money(wages) + " + " + EQS.money(utilities) + " = " + EQS.money(explicit) + ".</p>" +
        "<p><strong>Implicit costs</strong> = forgone salary + forgone interest = " + EQS.money(salary) + " + " + EQS.money(interest) + " = " + EQS.money(implicit) + ".</p>" +
        "<p>Accounting profit = revenue − explicit costs = " + EQS.money(revenue) + " − " + EQS.money(explicit) + " = " + EQS.money(accounting) + ".</p>" +
        "<p>Economic profit = accounting profit − implicit costs = " + EQS.money(accounting) + " − " + EQS.money(implicit) + " = <strong>" + EQS.money(economic) + "</strong>.</p>" +
        "<p>" + (economic >= 0 ? "The venture creates value relative to " + name + "'s next-best alternative." : "Although there may be an accounting profit, the venture destroys value relative to the next-best alternative.") + "</p>";
      return EQS.numeric({
        topic: "costs-competition",
        subtopic: "Accounting vs economic profit",
        difficulty: "medium",
        source: "Week 3 · Accounting vs economic profit",
        key: "acct-" + revenue + "-" + explicit + "-" + implicit,
        prompt: prompt,
        writtenPrompt:
          "<p>" + name + " leaves a job paying " + EQS.money(salary) + " per year to open " + business +
          ". First-year revenue is " + EQS.money(revenue) + ". Explicit costs are rent " + EQS.money(rent) + ", materials " +
          EQS.money(materials) + ", wages " + EQS.money(wages) + ", and utilities " + EQS.money(utilities) +
          ". " + name + " also gives up " + EQS.money(interest) + " of interest income.</p><p>(a) Identify explicit and implicit costs and total each. (b) Calculate accounting profit. (c) Calculate economic profit. (d) Which measure better reflects whether the decision was worthwhile? Explain.</p>",
        correct: EQS.money(economic),
        wrong: [EQS.money(accounting), EQS.money(revenue - explicit - salary), EQS.money(explicit + implicit)],
        answer: answer,
        explanation: "<p>Economic profit = revenue − explicit − implicit = " + EQS.money(economic) + ".</p>",
        trap: "Economic profit subtracts the forgone salary and forgone interest; accounting profit does not.",
        rubric: ["Separates explicit and implicit costs", "Computes accounting profit", "Computes economic profit and interprets it"]
      });
    }
  });

  /* ---------- shutdown decision ---------- */
  EQS.registerNumeric({
    topic: "costs-competition",
    subtopic: "Shutdown rule",
    difficulty: "medium",
    source: "Week 3 · Shutdown rule",
    gen: function () {
      const Q = EQS.ri(100, 1000);
      const avc = EQS.ri(2, 10);
      const atc = avc + EQS.ri(2, 8);
      const fc = (atc - avc) * Q;
      const caseType = EQS.pick(["profit", "loss-produce", "shutdown"]);
      let P;
      if (caseType === "profit") P = atc + EQS.ri(1, 6);
      else if (caseType === "loss-produce") P = Math.round((avc + (atc - avc) / 2) * 10) / 10;
      else P = Math.max(1, avc - EQS.ri(1, 3));
      const profitProduce = (P - atc) * Q;
      const lossShutdown = -fc;
      const betterProduce = profitProduce >= lossShutdown;
      const prompt =
        "<p>A firm has P = " + EQS.money(P) + ", AVC = " + EQS.money(avc) + ", ATC = " + EQS.money(atc) +
        ", and Q = " + Q + " units. Fixed cost is " + EQS.money(fc) +
        ". What should the firm do in the short run, and what is its resulting profit or loss?</p>";
      const correct = betterProduce
        ? "Produce; profit/loss = " + EQS.money(profitProduce)
        : "Shut down; profit/loss = " + EQS.money(lossShutdown);
      const answer =
        "<p>Shutdown rule: compare P with AVC.</p><ul><li>P = " + EQS.money(P) + ", AVC = " + EQS.money(avc) + ", so P " +
        (P >= avc ? "≥" : "<") + " AVC.</li><li>" + (P >= avc ? "The firm covers variable cost and should produce." : "The firm cannot cover variable cost and should shut down.") + "</li></ul>" +
        "<p>If producing: profit = (P − ATC) × Q = (" + EQS.money(P) + " − " + EQS.money(atc) + ") × " + Q + " = " + EQS.money(profitProduce) + ".</p>" +
        "<p>If shutting down: the firm still pays fixed costs, so profit = −FC = " + EQS.money(lossShutdown) + ".</p>" +
        "<p>The firm chooses the option with the higher profit (smaller loss): <strong>" + (betterProduce ? "produce" : "shut down") + "</strong>.</p>";
      return EQS.numeric({
        topic: "costs-competition",
        subtopic: "Shutdown rule",
        difficulty: "medium",
        source: "Week 3 · Shutdown rule",
        key: "shutdown-" + Q + "-" + P + "-" + avc + "-" + atc,
        prompt: prompt,
        writtenPrompt:
          "<p>A firm has P = " + EQS.money(P) + ", AVC = " + EQS.money(avc) + ", ATC = " + EQS.money(atc) +
          ", Q = " + Q + " units, and fixed cost " + EQS.money(fc) + ".</p><p>(a) Calculate profit if the firm produces. (b) Calculate profit if it shuts down. (c) Should it produce or shut down in the short run? Explain using the shutdown rule. (d) Would a rise in fixed cost change the decision? Why or why not?</p>",
        correct: correct,
        wrong: [
          "Produce; profit/loss = " + EQS.money(lossShutdown),
          "Shut down; profit/loss = " + EQS.money(profitProduce),
          "Shut down; profit/loss = $0"
        ],
        answer: answer,
        explanation: "<p>P " + (P >= avc ? "≥" : "<") + " AVC, so the firm should " + (betterProduce ? "produce" : "shut down") +
        "; the resulting profit/loss is " + EQS.money(betterProduce ? profitProduce : lossShutdown) + ".</p>",
        trap: "A loss does not automatically mean shutdown. Compare P with AVC, not ATC.",
        rubric: ["Applies the P vs AVC rule", "Computes profit if producing", "Computes shutdown loss and compares"]
      });
    }
  });

  /* ---------- long-run entry and exit ---------- */
  EQS.registerNumeric({
    topic: "costs-competition",
    subtopic: "Long-run equilibrium",
    difficulty: "medium",
    source: "Week 3 · Long run",
    gen: function () {
      const p0 = EQS.ri(4, 12);
      const q0 = EQS.ri(200, 800);
      const p1 = p0 + EQS.ri(2, 6);
      const q1 = q0 + EQS.ri(50, 250);
      const atc1 = p0 + EQS.ri(0, Math.max(0, p1 - p0 - 1));
      const profit = (p1 - atc1) * q1;
      const prompt =
        "<p>A perfectly competitive, constant-cost industry is initially in long-run equilibrium at P = " + EQS.money(p0) +
        " and each firm produces " + q0 + " units at minimum ATC. A demand increase raises the market price to " +
        EQS.money(p1) + "; each firm expands to " + q1 + " units, where ATC = " + EQS.money(atc1) +
        ". What is each firm's short-run economic profit?</p>";
      const answer =
        "<p>Short-run profit = (P − ATC) × Q = (" + EQS.money(p1) + " − " + EQS.money(atc1) + ") × " + q1 + " = <strong>" + EQS.money(profit) + "</strong> per firm.</p>" +
        "<p>Positive profit attracts entry. Market supply shifts right, price falls, and entry continues until profit is zero at P = minimum ATC = " + EQS.money(p0) + ". In the new long-run equilibrium, each firm again earns zero economic profit, but the number of firms is higher and market quantity is larger.</p>";
      return EQS.numeric({
        topic: "costs-competition",
        subtopic: "Long-run equilibrium",
        difficulty: "medium",
        source: "Week 3 · Long run",
        key: "lr-" + p0 + "-" + q0 + "-" + p1 + "-" + q1 + "-" + atc1,
        prompt: prompt,
        writtenPrompt:
          "<p>A perfectly competitive, constant-cost industry is initially in long-run equilibrium at P = " + EQS.money(p0) +
          " and each firm produces " + q0 + " units at minimum ATC. A demand increase raises the market price to " +
          EQS.money(p1) + "; each firm expands to " + q1 + " units, where ATC = " + EQS.money(atc1) + ".</p><p>(a) Calculate each firm's short-run economic profit. (b) Explain the entry process. (c) What is the long-run price? (d) What happens to the number of firms and market quantity? (e) Why is the long-run supply curve horizontal?</p>",
        correct: EQS.money(profit),
        wrong: [EQS.money(profit + 100), EQS.money(profit * 2), EQS.money(p1 * q1)],
        answer: answer,
        explanation: "<p>Short-run profit = (" + p1 + " − " + atc1 + ") × " + q1 + " = " + EQS.money(profit) + ".</p>",
        trap: "Use the new quantity and new ATC for short-run profit; long-run profit is zero.",
        rubric: ["Computes short-run profit", "Explains entry and price adjustment", "States the zero-profit long-run outcome"]
      });
    }
  });

  /* ---------- marginal product table ---------- */
  EQS.registerNumeric({
    topic: "costs-competition",
    subtopic: "Marginal product",
    difficulty: "medium",
    source: "Week 3 · Quiz 3 style",
    gen: function () {
      const outputs = [0];
      let mp = [10, 14, 14, 10, 8, 2, -1];
      const start = EQS.ri(1, 3);
      mp = mp.map((x) => Math.max(-2, x + EQS.ri(-2, 2)));
      for (let i = 1; i <= 7; i++) outputs.push(outputs[i - 1] + mp[i - 1]);
      let firstFall = 0;
      for (let i = 2; i < mp.length; i++) {
        if (mp[i] < mp[i - 1]) {
          firstFall = i + 1;
          break;
        }
      }
      const prompt =
        "<p>A bakery's total output with different numbers of workers is:</p>" +
        EQS.table(["Workers", "Total loaves"], outputs.map((o, i) => [i, o])) +
        "<p>Diminishing marginal returns begin when which worker is hired?</p>";
      const answer =
        "<p>Marginal product is the change in total output from each additional worker:</p>" +
        EQS.table(["Worker", "Total output", "Marginal product"], outputs.slice(1).map((o, i) => [i + 1, o, mp[i]])) +
        "<p>The marginal products are " + mp.join(", ") + ". Diminishing returns begin when marginal product first falls, which is with worker <strong>" + firstFall + "</strong>.</p>" +
        "<p>Total output can still rise after diminishing returns begin; it is the <em>extra</em> output that is smaller. Marginal product eventually becomes negative when adding workers reduces total output.</p>";
      return EQS.numeric({
        topic: "costs-competition",
        subtopic: "Marginal product",
        difficulty: "medium",
        source: "Week 3 · Quiz 3 style",
        key: "mp-" + outputs.join("-"),
        prompt: prompt,
        writtenPrompt:
          "<p>A bakery's total output with different numbers of workers is:</p>" +
          EQS.table(["Workers", "Total loaves"], outputs.map((o, i) => [i, o])) +
          "<p>(a) Calculate the marginal product of each worker. (b) When do diminishing marginal returns begin? (c) When does marginal product become negative? (d) Explain why marginal product first rises and then falls.</p>",
        correct: "Worker " + firstFall,
        wrong: ["Worker " + Math.max(1, firstFall - 1), "Worker " + Math.min(7, firstFall + 1), "Worker 1"],
        answer: answer,
        explanation: "<p>MP first falls when worker " + firstFall + " is hired.</p>",
        trap: "Diminishing returns begin when MP falls, not when total output falls.",
        rubric: ["Computes marginal products", "Identifies the first fall", "Explains specialization and diminishing returns"]
      });
    }
  });

  /* ---------- producer surplus ---------- */
  EQS.registerNumeric({
    topic: "costs-competition",
    subtopic: "Producer surplus",
    difficulty: "medium",
    source: "Week 3 · Producer surplus",
    gen: function () {
      const c = EQS.ri(2, 20);
      const d = EQS.ri(1, 4);
      const Q = EQS.ri(20, 100);
      const P = c + d * Q;
      const ps = 0.5 * (P - c) * Q;
      const prompt =
        "<p>Supply is <span class='formula'>P = " + c + " + " + d + "Q</span> and the market price is " +
        EQS.money(P) + ". What is producer surplus?</p>";
      const answer =
        "<p>At P = " + EQS.money(P) + ", quantity supplied is Q = (" + P + " − " + c + ")/" + d + " = " + Q + ".</p>" +
        "<p>Producer surplus is the triangle below price and above the supply curve:</p><p class='formula-line'>PS = ½ × (" + P + " − " + c + ") × " + Q + " = <strong>" + EQS.money(ps) + "</strong>.</p>";
      return EQS.numeric({
        topic: "costs-competition",
        subtopic: "Producer surplus",
        difficulty: "medium",
        source: "Week 3 · Producer surplus",
        key: "ps-" + c + "-" + d + "-" + P,
        prompt: prompt,
        writtenPrompt:
          "<p>Supply is <span class='formula'>P = " + c + " + " + d + "Q</span> and the market price is " + EQS.money(P) +
          ".</p><p>(a) Calculate quantity supplied. (b) Calculate producer surplus. (c) Explain why PS is the area below price and above supply.</p>",
        correct: EQS.money(ps),
        wrong: [EQS.money(P * Q), EQS.money(0.5 * P * Q), EQS.money((P - c) * Q)],
        answer: answer,
        explanation: "<p>PS = ½ × (P − c) × Q = " + EQS.money(ps) + ".</p>",
        trap: "Producer surplus uses the supply intercept, not the demand intercept.",
        rubric: ["Finds quantity", "Uses the PS triangle", "Interprets the area"]
      });
    }
  });
})(typeof window !== "undefined" ? window : globalThis);
