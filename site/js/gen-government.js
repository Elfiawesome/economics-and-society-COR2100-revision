/* Procedural generators: externalities, public goods, taxes and price controls. */
(function (g) {
  const EQS = g.EQS;

  /* ---------- negative externality ---------- */
  EQS.registerNumeric({
    topic: "government-failure",
    subtopic: "Negative externality",
    difficulty: "hard",
    source: "Week 5 · Externalities",
    gen: function () {
      const b = EQS.ri(1, 4);
      const d = EQS.ri(1, 4);
      const Qm = EQS.ri(80, 220);
      const diff = EQS.ri(20, Math.max(25, Math.floor(Qm / 3)));
      const Qs = Qm - diff;
      const e = (b + d) * diff;
      const c = EQS.ri(5, 25);
      const a = c + (b + d) * Qm;
      const Pm = a - b * Qm;
      const Ps = a - b * Qs;
      const dwl = 0.5 * e * diff;
      const tax = e;
      const prompt =
        "<p>Demand for a good is <span class='formula'>P = " + a + " − " + b +
        "Q</span>. Marginal private cost is <span class='formula'>MPC = " + c + " + " + d +
        "Q</span>, and production imposes a constant marginal external cost of " + EQS.money(e) +
        " per unit. What is the deadweight loss in the free market?</p>";
      const answer =
        "<p>Free-market equilibrium: demand = MPC.</p><p class='formula-line'>" + a + " − " + b + "Q = " + c + " + " + d +
        "Q → Q<sub>M</sub> = " + Qm + ", P<sub>M</sub> = " + EQS.money(Pm) + "</p>" +
        "<p>Social optimum: demand = MSC = MPC + MEC.</p><p class='formula-line'>" + a + " − " + b + "Q = " + c + " + " + d +
        "Q + " + e + " → Q<sub>S</sub> = " + Qs + ", P<sub>S</sub> = " + EQS.money(Ps) + "</p>" +
        "<p>The market produces " + diff + " units too many. The DWL is the triangle between MSC and demand over those units:</p>" +
        "<p class='formula-line'>DWL = ½ × MEC × (Q<sub>M</sub> − Q<sub>S</sub>) = ½ × " + e + " × " + diff + " = <strong>" + EQS.money(dwl) + "</strong>.</p>" +
        "<p>The Pigouvian tax that would correct the externality is " + EQS.money(tax) + " per unit (equal to MEC).</p>";
      return EQS.numeric({
        topic: "government-failure",
        subtopic: "Negative externality",
        difficulty: "hard",
        source: "Week 5 · Externalities",
        key: "negext-" + a + "-" + b + "-" + c + "-" + d + "-" + e,
        prompt: prompt,
        writtenPrompt:
          "<p>Demand for a good is <span class='formula'>P = " + a + " − " + b +
          "Q</span>. Marginal private cost is <span class='formula'>MPC = " + c + " + " + d +
          "Q</span>, and production imposes a constant marginal external cost of " + EQS.money(e) + " per unit.</p><p>(a) Find the free-market quantity and price. (b) Find the socially optimal quantity and price. (c) Calculate the deadweight loss. (d) What Pigouvian tax would internalise the externality? (e) Explain why the free market overproduces.</p>",
        correct: EQS.money(dwl),
        wrong: [EQS.money(e * diff), EQS.money(0.5 * (Pm - c) * Qm), EQS.money(tax)],
        answer: answer,
        explanation: "<p>DWL = ½ × MEC × (Q<sub>M</sub> − Q<sub>S</sub>) = " + EQS.money(dwl) + ".</p>",
        trap: "The DWL triangle uses MEC as the vertical gap and the difference between market and social quantity as the base.",
        rubric: ["Finds market equilibrium", "Finds social optimum", "Computes DWL and Pigouvian tax"]
      });
    }
  });

  /* ---------- positive externality ---------- */
  EQS.registerNumeric({
    topic: "government-failure",
    subtopic: "Positive externality",
    difficulty: "hard",
    source: "Week 5 · Externalities",
    gen: function () {
      const b = EQS.ri(1, 4);
      const d = EQS.ri(1, 4);
      const Qm = EQS.ri(40, 120);
      const diff = EQS.ri(15, Math.max(20, Math.floor(Qm / 2)));
      const Qs = Qm + diff;
      const e = (b + d) * diff;
      const c = EQS.ri(5, 25);
      const a = c + (b + d) * Qm;
      const Pm = a - b * Qm;
      const Ps = a - b * Qs;
      const dwl = 0.5 * e * diff;
      const subsidy = e;
      const prompt =
        "<p>Demand for a good is <span class='formula'>P = " + a + " − " + b +
        "Q</span>, and supply is <span class='formula'>P = " + c + " + " + d +
        "Q</span>. Consumption creates a constant marginal external benefit of " + EQS.money(e) +
        " per unit. What is the deadweight loss in the free market?</p>";
      const answer =
        "<p>Free-market equilibrium: demand = supply.</p><p class='formula-line'>" + a + " − " + b + "Q = " + c + " + " + d +
        "Q → Q<sub>M</sub> = " + Qm + ", P<sub>M</sub> = " + EQS.money(Pm) + "</p>" +
        "<p>Social optimum: MSB = MPB + MEB equals supply.</p><p class='formula-line'>" + (a + e) + " − " + b + "Q = " + c + " + " + d +
        "Q → Q<sub>S</sub> = " + Qs + ", P<sub>S</sub> = " + EQS.money(Ps) + "</p>" +
        "<p>The market produces " + diff + " units too few. The DWL is the triangle between demand and the social benefit curve over those units:</p>" +
        "<p class='formula-line'>DWL = ½ × MEB × (Q<sub>S</sub> − Q<sub>M</sub>) = ½ × " + e + " × " + diff + " = <strong>" + EQS.money(dwl) + "</strong>.</p>" +
        "<p>A Pigouvian subsidy of " + EQS.money(subsidy) + " per unit would shift demand up to the social benefit and reach the optimum.</p>";
      return EQS.numeric({
        topic: "government-failure",
        subtopic: "Positive externality",
        difficulty: "hard",
        source: "Week 5 · Externalities",
        key: "posext-" + a + "-" + b + "-" + c + "-" + d + "-" + e,
        prompt: prompt,
        writtenPrompt:
          "<p>Demand for a good is <span class='formula'>P = " + a + " − " + b +
          "Q</span>, and supply is <span class='formula'>P = " + c + " + " + d +
          "Q</span>. Consumption creates a constant marginal external benefit of " + EQS.money(e) + " per unit.</p><p>(a) Find the free-market quantity and price. (b) Find the socially optimal quantity. (c) Calculate the deadweight loss. (d) What Pigouvian subsidy would reach the optimum? (e) Explain why the free market underproduces.</p>",
        correct: EQS.money(dwl),
        wrong: [EQS.money(e * diff), EQS.money(e), EQS.money(0.5 * (Pm - c) * Qm)],
        answer: answer,
        explanation: "<p>DWL = ½ × MEB × (Q<sub>S</sub> − Q<sub>M</sub>) = " + EQS.money(dwl) + ".</p>",
        trap: "The positive-externality DWL is the missing surplus from units not produced; the triangle lies between Qm and Qs.",
        rubric: ["Finds market equilibrium", "Finds social optimum", "Computes DWL and subsidy"]
      });
    }
  });

  /* ---------- Pigouvian tax gap ---------- */
  EQS.registerNumeric({
    topic: "government-failure",
    subtopic: "Pigouvian tax",
    difficulty: "easy",
    source: "Week 5 · Quiz 5 style",
    gen: function () {
      const mpc = EQS.ri(10, 40);
      const msc = mpc + EQS.ri(4, 25);
      const tax = msc - mpc;
      const prompt =
        "<p>At the socially optimal quantity, marginal social cost is " + EQS.money(msc) +
        " and marginal private cost is " + EQS.money(mpc) +
        ". What Pigouvian tax per unit would make the firm internalise the externality?</p>";
      const answer =
        "<p>The tax should equal the marginal external cost at the optimum:</p><p class='formula-line'>tax = MSC − MPC = " +
        EQS.money(msc) + " − " + EQS.money(mpc) + " = <strong>" + EQS.money(tax) + "</strong>.</p>" +
        "<p>With the tax, the firm's private cost rises to equal social cost, so it chooses the socially optimal quantity.</p>";
      return EQS.numeric({
        topic: "government-failure",
        subtopic: "Pigouvian tax",
        difficulty: "easy",
        source: "Week 5 · Quiz 5 style",
        key: "pigou-" + mpc + "-" + msc,
        prompt: prompt,
        writtenPrompt:
          "<p>At the socially optimal quantity, marginal social cost is " + EQS.money(msc) +
          " and marginal private cost is " + EQS.money(mpc) + ".</p><p>(a) Calculate the marginal external cost. (b) What Pigouvian tax would internalise the externality? (c) Explain how the tax changes the firm's output decision.</p>",
        correct: EQS.money(tax),
        wrong: [EQS.money(msc), EQS.money(mpc), EQS.money(msc + mpc)],
        answer: answer,
        explanation: "<p>Tax = MSC − MPC = " + EQS.money(tax) + ".</p>",
        trap: "Tax only the external cost, not the entire social cost.",
        rubric: ["Identifies MEC as MSC − MPC", "Sets the tax equal to MEC", "Explains the output effect"]
      });
    }
  });

  /* ---------- tax incidence ---------- */
  EQS.registerNumeric({
    topic: "government-failure",
    subtopic: "Tax incidence",
    difficulty: "hard",
    source: "Week 5 · Tax incidence",
    gen: function () {
      const pairs = [[2, 3], [3, 2], [1, 4], [4, 1], [2, 2], [1, 3], [3, 1], [2, 5], [5, 2]];
      const pair = EQS.pick(pairs);
      const b = pair[0];
      const d = pair[1];
      const P0 = EQS.ri(10, 40);
      const Q0 = EQS.ri(Math.max(80, d * P0 + b * d + 40), 300);
      const a = Q0 + b * P0;
      const c = Q0 - d * P0;
      const t = b + d;
      const Q1 = Q0 - b * d;
      const Pc = P0 + d;
      const Ps = P0 - b;
      const consumerShare = (d / (b + d)) * 100;
      const revenue = t * Q1;
      const dwl = 0.5 * t * (Q0 - Q1);
      const prompt =
        "<p>Demand is <span class='formula'>Q<sub>d</sub> = " + a + " − " + b +
        "P</span> and supply is <span class='formula'>Q<sub>s</sub> = " + c + " + " + d +
        "P</span>. The government imposes a tax of " + EQS.money(t) +
        " per unit. What share of the tax burden falls on consumers?</p>";
      const answer =
        "<p>Pre-tax equilibrium: P0 = " + EQS.money(P0) + ", Q0 = " + Q0 + ".</p>" +
        "<p>With the tax, the price consumers pay rises to P<sub>c</sub> = " + EQS.money(Pc) +
        " and the price sellers keep falls to P<sub>s</sub> = " + EQS.money(Ps) + "; the new quantity is Q1 = " + Q1 + ".</p>" +
        "<p>Consumer burden = P<sub>c</sub> − P0 = " + EQS.money(d) + "; producer burden = P0 − P<sub>s</sub> = " + EQS.money(b) + ".</p>" +
        "<p>Consumer share = " + EQS.money(d) + " ÷ " + EQS.money(t) + " = <strong>" + EQS.pct(consumerShare, 1) + "</strong>.</p>" +
        "<p>Tax revenue = " + EQS.money(t) + " × " + Q1 + " = " + EQS.money(revenue) + "; DWL = ½ × " + EQS.money(t) + " × (" +
        Q0 + " − " + Q1 + ") = " + EQS.money(dwl) + ".</p>";
      return EQS.numeric({
        topic: "government-failure",
        subtopic: "Tax incidence",
        difficulty: "hard",
        source: "Week 5 · Tax incidence",
        key: "incidence-" + a + "-" + b + "-" + c + "-" + d,
        prompt: prompt,
        writtenPrompt:
          "<p>Demand is <span class='formula'>Q<sub>d</sub> = " + a + " − " + b +
          "P</span> and supply is <span class='formula'>Q<sub>s</sub> = " + c + " + " + d +
          "P</span>. The government imposes a tax of " + EQS.money(t) +
          " per unit.</p><p>(a) Find the pre-tax equilibrium. (b) Find the price consumers pay, the price sellers keep, and the new quantity. (c) Calculate the consumer and producer tax burden and the consumer share. (d) Calculate tax revenue and deadweight loss. (e) Which side is less elastic? Does the burden match the elasticity rule?</p>",
        correct: EQS.pct(consumerShare, 1) + " of the tax",
        wrong: [
          EQS.pct(100 - consumerShare, 1) + " of the tax",
          EQS.pct(Math.min(100, consumerShare + 15), 1) + " of the tax",
          EQS.pct(Math.max(0, consumerShare - 15), 1) + " of the tax"
        ],
        answer: answer,
        explanation: "<p>Consumer share = d/(b+d) = " + EQS.pct(consumerShare, 1) + ".</p>",
        trap: "The side with the smaller slope in this form is less elastic and bears more of the tax. Statutory incidence does not matter.",
        rubric: ["Finds pre-tax and post-tax prices", "Computes burdens", "Calculates revenue and DWL", "Applies the elasticity rule"]
      });
    }
  });

  /* ---------- price ceiling / floor ---------- */
  EQS.registerNumeric({
    topic: "government-failure",
    subtopic: "Price controls",
    difficulty: "hard",
    source: "Week 5 · Price controls",
    gen: function () {
      const b = EQS.ri(1, 4);
      const d = EQS.ri(1, 4);
      const c = EQS.ri(5, 25);
      const Q0 = EQS.ri(40, 120);
      const P0 = c + d * Q0;
      const a = P0 + b * Q0;
      const choke = a / b;
      const isCeiling = EQS.chance(0.5);
      let P1;
      if (isCeiling) {
        const room = Math.max(2, P0 - c);
        P1 = c + Math.max(1, Math.min(room - 1, Math.floor(room * EQS.rf(0.25, 0.75, 2))));
        if (P1 >= P0) P1 = P0 - 1;
      } else {
        const room = Math.max(2, choke - P0);
        P1 = P0 + Math.max(1, Math.min(room - 1, Math.floor(room * EQS.rf(0.2, 0.6, 2))));
        if (P1 >= choke) P1 = P0 + 1;
      }
      const Qd1 = Math.max(0, (a - P1) / b);
      const Qs1 = Math.max(0, (P1 - c) / d);
      const gap = Math.abs(Qd1 - Qs1);
      const type = isCeiling ? "shortage" : "surplus";
      let dwl;
      if (isCeiling) {
        const qTrade = Qs1;
        const pd = a - b * qTrade;
        dwl = 0.5 * (Q0 - qTrade) * (pd - P1);
      } else {
        const qTrade = Qd1;
        const ps = c + d * qTrade;
        dwl = 0.5 * (Q0 - qTrade) * (P1 - ps);
      }
      const gapText = EQS.num(gap, 2);
      const prompt =
        "<p>Demand is <span class='formula'>P = " + a + " − " + b + "Q</span> and supply is <span class='formula'>P = " +
        c + " + " + d + "Q</span>. The government imposes a " + (isCeiling ? "price ceiling" : "price floor") +
        " at " + EQS.money(P1) + ". What is the size of the resulting " + type + "?</p>";
      const answer =
        "<p>Equilibrium: " + a + " − " + b + "Q = " + c + " + " + d + "Q, so P0 = " + EQS.money(P0) + " and Q0 = " + Q0 +
        ". The control at " + EQS.money(P1) + " is " + (isCeiling ? "below" : "above") + " equilibrium, so it binds.</p>" +
        "<p>Invert the curves at P = " + EQS.money(P1) + ":</p>" +
        "<p class='formula-line'>Q<sub>d</sub> = (" + a + " − " + P1 + ")/" + b + " = " + EQS.num(Qd1, 2) + "</p>" +
        "<p class='formula-line'>Q<sub>s</sub> = (" + P1 + " − " + c + ")/" + d + " = " + EQS.num(Qs1, 2) + "</p>" +
        "<p>Quantity traded is the short side: " + EQS.num(Math.min(Qd1, Qs1), 2) + ". The " + type + " is |Q<sub>d</sub> − Q<sub>s</sub>| = <strong>" +
        gapText + " units</strong>.</p>" +
        "<p>Deadweight loss is the triangle between the demand and supply curves from the traded quantity to Q0: <strong>" + EQS.money(dwl, 2) + "</strong>.</p>";
      return EQS.numeric({
        topic: "government-failure",
        subtopic: "Price controls",
        difficulty: "hard",
        source: "Week 5 · Price controls",
        key: "pc-" + a + "-" + b + "-" + c + "-" + d + "-" + P1,
        prompt: prompt,
        writtenPrompt:
          "<p>Demand is <span class='formula'>P = " + a + " − " + b + "Q</span> and supply is <span class='formula'>P = " +
          c + " + " + d + "Q</span>. The government imposes a " + (isCeiling ? "price ceiling" : "price floor") +
          " at " + EQS.money(P1) + ".</p><p>(a) Is the control binding? Explain. (b) Calculate quantity demanded and supplied at the controlled price. (c) Calculate the shortage or surplus. (d) Calculate the deadweight loss. (e) Who gains and who loses?</p>",
        correct: gapText + "-unit " + type,
        wrong: [gapText + "-unit " + (type === "shortage" ? "surplus" : "shortage"), EQS.num(Qd1, 2) + "-unit " + type, EQS.num(Qs1, 2) + "-unit " + type],
        answer: answer,
        explanation: "<p>The control binds and creates a " + gapText + "-unit " + type + "; DWL is " + EQS.money(dwl, 2) + ".</p>",
        trap: "The quantity traded is the short side of the market, not the long side. Invert the price equations before computing quantities.",
        rubric: ["Checks whether the control binds", "Inverts demand and supply correctly", "Finds shortage/surplus and DWL"]
      });
    }
  });

  /* ---------- externality classification application ---------- */
  EQS.register({
    topic: "government-failure",
    subtopic: "Externality classification",
    difficulty: "medium",
    mode: "application",
    source: "Week 5 · Externalities",
    gen: function () {
      const items = [
        { text: "A factory releases untreated chemicals into a river.", type: "Negative externality in production" },
        { text: "A restaurant plays loud music that disturbs its neighbours.", type: "Negative externality in production" },
        { text: "A person smokes in a crowded queue, exposing others to second-hand smoke.", type: "Negative externality in consumption" },
        { text: "A driver uses a loud modified exhaust late at night.", type: "Negative externality in consumption" },
        { text: "A firm trains its workers in skills that they later use at other firms.", type: "Positive externality in production" },
        { text: "A beekeeper's bees pollinate nearby orchards.", type: "Positive externality in production" },
        { text: "A person gets vaccinated, reducing the spread of disease.", type: "Positive externality in consumption" },
        { text: "A homeowner plants a beautiful garden that neighbours enjoy.", type: "Positive externality in consumption" },
        { text: "A student studies hard and becomes a more productive citizen.", type: "Positive externality in consumption" },
        { text: "A power plant emits pollution that harms residents.", type: "Negative externality in production" }
      ];
      const item = EQS.pick(items);
      const types = ["Negative externality in production", "Negative externality in consumption", "Positive externality in production", "Positive externality in consumption"];
      const prompt = "<p>" + item.text + " This is best classified as:</p>";
      const answer =
        "<p><strong>" + item.type + "</strong>.</p><p>An externality is a spillover cost or benefit to a bystander. The classification depends on two things: whether the spillover is a cost (negative) or a benefit (positive), and whether the activity creating it is production or consumption.</p>";
      return EQS.theory({
        topic: "government-failure",
        subtopic: "Externality classification",
        difficulty: "medium",
        source: "Week 5 · Externalities",
        prompt: prompt,
        writtenPrompt:
          "<p>" + item.text + "</p><p>(a) Classify the externality (positive/negative; production/consumption). (b) Is the marginal social cost above or below marginal private cost, or is the marginal social benefit above or below private benefit? (c) Does the market overproduce or underproduce? (d) Name one policy that could correct it.</p>",
        correct: item.type,
        wrong: types.filter((x) => x !== item.type),
        explanation: answer,
        answer: answer,
        rubric: ["Correct classification", "Identifies the social/private wedge", "States over/underproduction", "Names a suitable policy"]
      });
    }
  });

  /* ---------- public good classification application ---------- */
  EQS.register({
    topic: "government-failure",
    subtopic: "Public goods",
    difficulty: "medium",
    mode: "application",
    source: "Week 5 · Public goods",
    gen: function () {
      const items = [
        { text: "A sandwich", type: "Private good" },
        { text: "A seat at a crowded concert", type: "Private good" },
        { text: "A Netflix subscription", type: "Club good" },
        { text: "A toll road with no congestion", type: "Club good" },
        { text: "A fishery", type: "Common-pool resource" },
        { text: "Clean air in a city", type: "Common-pool resource" },
        { text: "National defence", type: "Public good" },
        { text: "A street light", type: "Public good" },
        { text: "A fireworks display", type: "Public good" },
        { text: "A public park that becomes crowded", type: "Common-pool resource" },
        { text: "Cable television", type: "Club good" },
        { text: "A pair of shoes", type: "Private good" }
      ];
      const item = EQS.pick(items);
      const types = ["Private good", "Club good", "Common-pool resource", "Public good"];
      const prompt = "<p>" + item.text + " is best classified as:</p>";
      const answer =
        "<p><strong>" + item.type + "</strong>.</p><p>Classify by two dimensions: rivalry (does one person's consumption reduce what is available to others?) and excludability (can non-payers be prevented from consuming?).</p>" +
        "<p>Private = rival + excludable; club = non-rival + excludable; common-pool = rival + non-excludable; public = non-rival + non-excludable.</p>";
      return EQS.theory({
        topic: "government-failure",
        subtopic: "Public goods",
        difficulty: "medium",
        source: "Week 5 · Public goods",
        prompt: prompt,
        writtenPrompt:
          "<p>" + item.text + "</p><p>(a) Is it rival? (b) Is it excludable? (c) Classify the good. (d) Does it suffer from free-riding? Explain.</p>",
        correct: item.type,
        wrong: types.filter((x) => x !== item.type),
        explanation: answer,
        answer: answer,
        rubric: ["Assesses rivalry", "Assesses excludability", "Correct classification", "Explains free-riding where relevant"]
      });
    }
  });

  /* ---------- budget deficit ---------- */
  EQS.registerNumeric({
    topic: "government-failure",
    subtopic: "Fiscal position",
    difficulty: "easy",
    source: "Week 5 · Budget",
    gen: function () {
      const revenue = EQS.ri(80, 400);
      const spending = EQS.ri(80, 450);
      const balance = revenue - spending;
      const deficit = Math.abs(balance);
      const prompt =
        "<p>A government collects " + EQS.money(revenue) + " billion in revenue and spends " + EQS.money(spending) +
        " billion. What is the budget balance, and is it a surplus or a deficit?</p>";
      const correct = EQS.money(Math.abs(balance)) + " billion " + (balance >= 0 ? "surplus" : "deficit");
      const answer =
        "<p>Budget balance = revenue − spending = " + EQS.money(revenue) + " − " + EQS.money(spending) + " = " + EQS.money(balance) + " billion.</p>" +
        "<p>" + (balance >= 0 ? "Because revenue exceeds spending, the government runs a surplus." : "Because spending exceeds revenue, the government runs a deficit of " + EQS.money(deficit) + " billion.") + "</p>";
      return EQS.numeric({
        topic: "government-failure",
        subtopic: "Fiscal position",
        difficulty: "easy",
        source: "Week 5 · Budget",
        key: "budget-" + revenue + "-" + spending,
        prompt: prompt,
        writtenPrompt:
          "<p>A government collects " + EQS.money(revenue) + " billion in revenue and spends " + EQS.money(spending) +
          " billion.</p><p>(a) Calculate the budget balance. (b) Is it a surplus or deficit? (c) Explain the difference between a budget deficit and the national debt.</p>",
        correct: correct,
        wrong: [
          EQS.money(deficit) + " billion " + (balance >= 0 ? "deficit" : "surplus"),
          EQS.money(revenue + spending) + " billion surplus",
          "$0 surplus"
        ],
        answer: answer,
        explanation: "<p>Balance = " + EQS.money(balance) + " billion, a " + (balance >= 0 ? "surplus" : "deficit") + ".</p>",
        trap: "A deficit is a flow; the debt is a stock accumulated from past deficits.",
        rubric: ["Computes revenue minus spending", "Labels surplus vs deficit", "Distinguishes deficit from debt"]
      });
    }
  });
})(typeof window !== "undefined" ? window : globalThis);
