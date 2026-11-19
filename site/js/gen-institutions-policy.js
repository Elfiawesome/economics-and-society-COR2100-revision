/* Procedural generators: institutions, prosperity and short-run policy. */
(function (g) {
  const EQS = g.EQS;

  /* ---------- entrepreneurship model ---------- */
  EQS.registerNumeric({
    topic: "institutions",
    subtopic: "Entrepreneurship model",
    difficulty: "hard",
    source: "Week 10 · Entrepreneurship",
    gen: function () {
      const b = EQS.ri(100, 500);
      const Nstar = EQS.ri(3, 9) * 100;
      const W = EQS.ri(30, 70) * 1000;
      const a = W + b * Nstar;
      const share = EQS.pick([0.5, 0.6, 0.7, 0.8]);
      let Nweak = Math.round((share * a - W) / b);
      if (Nweak < 0) Nweak = 0;
      const entry = EQS.ri(5, 20) * 1000;
      let Nbarrier = Math.round((a - (W + entry)) / b);
      if (Nbarrier < 0) Nbarrier = 0;
      const prompt =
        "<p>Potential entrepreneurs are ranked by the return to their business idea: <span class='formula'>R(N) = " +
        EQS.num(a) + " − " + b + "N</span>, where N is the number of entrepreneurs. The opportunity cost of becoming an entrepreneur is " +
        EQS.money(W) + " for everyone. In the inclusive equilibrium, how many entrepreneurs are there?</p>";
      const answer =
        "<p>Entrepreneurs enter as long as the return is at least the opportunity cost:</p><p class='formula-line'>R(N) = W → " +
        EQS.num(a) + " − " + b + "N = " + EQS.money(W) + " → N* = " + Nstar + "</p>" +
        "<p><strong>Inclusive equilibrium: " + Nstar + " entrepreneurs.</strong></p>" +
        "<p>Weak property rights: entrepreneurs keep only " + (share * 100) + "% of the return, so the curve becomes " +
        EQS.num(share * a) + " − " + (b * share) + "N. Solving gives N ≈ " + Nweak +
        ", a fall of " + (Nstar - Nweak) + " entrepreneurs.</p>" +
        "<p>Entry barriers: an entry cost of " + EQS.money(entry) + " raises the effective opportunity cost to " +
        EQS.money(W + entry) + ", giving N ≈ " + Nbarrier + ".</p>";
      return EQS.numeric({
        topic: "institutions",
        subtopic: "Entrepreneurship model",
        difficulty: "hard",
        source: "Week 10 · Entrepreneurship",
        key: "ent-" + a + "-" + b + "-" + W + "-" + share + "-" + entry,
        prompt: prompt,
        writtenPrompt:
          "<p>Potential entrepreneurs are ranked by the return to their business idea: <span class='formula'>R(N) = " +
          EQS.num(a) + " − " + b + "N</span>. The opportunity cost is " + EQS.money(W) +
          " for everyone.</p><p>(a) Find the inclusive equilibrium number of entrepreneurs. (b) If weak property rights let entrepreneurs keep only " +
          (share * 100) + "% of the return, find the new number. (c) If entry barriers add " + EQS.money(entry) +
          " to the cost of becoming an entrepreneur, find the new number. (d) Explain which curve shifts in each case.</p>",
        correct: Nstar + " entrepreneurs",
        wrong: [Nweak + " entrepreneurs", Nbarrier + " entrepreneurs", Math.round(Nstar / 2) + " entrepreneurs"],
        answer: answer,
        explanation: "<p>Set R(N) = W: N* = (a − W)/b = " + Nstar + ".</p>",
        trap: "Weak property rights shift the return curve; entry barriers shift the cost line. They are different channels.",
        rubric: ["Sets return equal to opportunity cost", "Solves for N*", "Computes weak-property-rights case", "Computes entry-barrier case"]
      });
    }
  });

  /* ---------- proximate vs fundamental classification ---------- */
  EQS.register({
    topic: "institutions",
    subtopic: "Proximate vs fundamental",
    difficulty: "easy",
    mode: "application",
    source: "Week 10 · Framework",
    gen: function () {
      const items = [
        { text: "A country has more machines and factories per worker.", type: "Proximate cause" },
        { text: "A country's workforce has more years of schooling.", type: "Proximate cause" },
        { text: "A country adopts more advanced production technology.", type: "Proximate cause" },
        { text: "A tropical climate makes disease more common.", type: "Geography hypothesis" },
        { text: "A culture emphasises hard work and saving.", type: "Culture hypothesis" },
        { text: "Courts enforce contracts impartially and property rights are secure.", type: "Institutions hypothesis" },
        { text: "Entry regulations make it costly to start a business.", type: "Institutions hypothesis" },
        { text: "The country is landlocked and far from major markets.", type: "Geography hypothesis" },
        { text: "Religious beliefs encourage thrift and investment.", type: "Culture hypothesis" }
      ];
      const item = EQS.pick(items);
      const types = ["Proximate cause", "Geography hypothesis", "Culture hypothesis", "Institutions hypothesis"];
      const prompt = "<p>" + item.text + " This is best classified as a:</p>";
      const answer =
        "<p><strong>" + item.type + ".</strong></p><p>Proximate causes directly raise GDP per capita: physical capital, human capital and technology. Fundamental causes — geography, culture and institutions — explain why countries accumulate different amounts of the proximate factors.</p>";
      return EQS.theory({
        topic: "institutions",
        subtopic: "Proximate vs fundamental",
        difficulty: "easy",
        source: "Week 10 · Framework",
        prompt: prompt,
        writtenPrompt:
          "<p>" + item.text + "</p><p>(a) Is this a proximate or fundamental cause? (b) Which specific hypothesis does it belong to? (c) Explain how it could affect the accumulation of K, H or A.</p>",
        correct: item.type,
        wrong: types.filter((x) => x !== item.type),
        explanation: answer,
        answer: answer,
        rubric: ["Correct classification", "Names the specific hypothesis", "Explains the link to K, H or A"]
      });
    }
  });

  /* ---------- inclusive vs extractive ---------- */
  EQS.register({
    topic: "institutions",
    subtopic: "Inclusive vs extractive",
    difficulty: "easy",
    mode: "application",
    source: "Week 10 · Institutions",
    gen: function () {
      const items = [
        { text: "Property rights are secure and contracts are enforced.", type: "Inclusive institution" },
        { text: "New firms can enter markets without facing arbitrary licences.", type: "Inclusive institution" },
        { text: "Innovation is rewarded and entrepreneurs keep the returns.", type: "Inclusive institution" },
        { text: "A small elite controls most markets and blocks competitors.", type: "Extractive institution" },
        { text: "Officials demand bribes and property can be seized arbitrarily.", type: "Extractive institution" },
        { text: "Entry is restricted to protect incumbent firms.", type: "Extractive institution" },
        { text: "Broad economic opportunities are available to citizens.", type: "Inclusive institution" },
        { text: "The legal system favours connected insiders.", type: "Extractive institution" }
      ];
      const item = EQS.pick(items);
      const prompt = "<p>" + item.text + " This is a feature of:</p>";
      const answer =
        "<p><strong>" + item.type + "s.</strong></p><p>Inclusive institutions protect property, enforce contracts and encourage competition, so people have incentives to invest, innovate and start businesses. Extractive institutions concentrate power and returns among elites, weakening those incentives.</p>";
      return EQS.theory({
        topic: "institutions",
        subtopic: "Inclusive vs extractive",
        difficulty: "easy",
        source: "Week 10 · Institutions",
        prompt: prompt,
        writtenPrompt:
          "<p>" + item.text + "</p><p>(a) Is this inclusive or extractive? (b) What incentive does it create for investment and entrepreneurship? (c) How would it affect the return-to-entrepreneurship curve or the cost line?</p>",
        correct: item.type,
        wrong: ["Inclusive institution", "Extractive institution", "Neither; it is a geographic factor", "Neither; it is a cultural factor"].filter((x) => x !== item.type),
        explanation: answer,
        answer: answer,
        rubric: ["Correct classification", "Explains the incentive effect", "Links to the entrepreneurship model"]
      });
    }
  });

  /* ---------- natural experiment evidence ---------- */
  EQS.register({
    topic: "institutions",
    subtopic: "Natural experiments",
    difficulty: "medium",
    mode: "application",
    source: "Week 10 · Evidence",
    gen: function () {
      const items = [
        { text: "North and South Korea shared geography and culture before the split, but adopted very different economic institutions; South Korea became about 20 times richer.", type: "Institutions hypothesis" },
        { text: "Austria and Czechoslovakia shared a long history and similar geography, but diverged after Czechoslovakia adopted communism and converged after 1989.", type: "Institutions hypothesis" },
        { text: "Former colonies that were more urbanised in 1500 are relatively poor today, even though their geography has not changed.", type: "Institutions hypothesis" },
        { text: "A tropical country with the same climate as its poor neighbours has become one of the world's richest economies.", type: "Geography hypothesis is not destiny" },
        { text: "Countries with similar cultural and religious traditions have very different income levels.", type: "Culture hypothesis is insufficient" }
      ];
      const item = EQS.pick(items);
      const prompt = "<p>" + item.text + " This evidence most directly supports or illustrates:</p>";
      const correct = item.type;
      const wrong = ["Geography is destiny", "Culture alone determines prosperity", "Institutions do not affect prosperity"];
      const answer =
        "<p><strong>" + correct + ".</strong></p><p>The evidence compares places with similar geography or culture but different institutions, or shows that a fixed geographic factor cannot explain a change in prosperity. That is why institutions are the best-supported fundamental cause.</p>";
      return EQS.theory({
        topic: "institutions",
        subtopic: "Natural experiments",
        difficulty: "medium",
        source: "Week 10 · Evidence",
        prompt: prompt,
        writtenPrompt:
          "<p>" + item.text + "</p><p>(a) Which hypothesis does this evidence support or challenge? (b) What is held constant, and what changes? (c) Why does that make the evidence informative? (d) What is one limitation of this evidence?</p>",
        correct: correct,
        wrong: wrong,
        explanation: answer,
        answer: answer,
        rubric: ["Identifies the hypothesis", "Explains the comparison", "Discusses a limitation"]
      });
    }
  });

  /* ---------- shock classification ---------- */
  EQS.register({
    topic: "policy",
    subtopic: "Shocks",
    difficulty: "medium",
    mode: "application",
    source: "Week 11 · Shocks",
    gen: function () {
      const items = [
        { text: "Households lose confidence and cut spending.", type: "Negative demand shock" },
        { text: "A stock market crash makes firms delay investment.", type: "Negative demand shock" },
        { text: "A recession abroad reduces foreign demand for Singapore's exports.", type: "Negative demand shock" },
        { text: "A drought raises world food and energy prices.", type: "Negative supply shock" },
        { text: "Shipping costs jump and production becomes more expensive.", type: "Negative supply shock" },
        { text: "A pandemic closes workplaces and reduces what each worker can produce.", type: "Negative supply shock" },
        { text: "A surge in consumer confidence raises spending.", type: "Positive demand shock" },
        { text: "New automation lets each worker produce more.", type: "Positive supply shock" },
        { text: "The government launches a large infrastructure programme.", type: "Positive demand shock" },
        { text: "A new technology lowers production costs across the economy.", type: "Positive supply shock" }
      ];
      const item = EQS.pick(items);
      const types = ["Negative demand shock", "Negative supply shock", "Positive demand shock", "Positive supply shock"];
      const prompt = "<p>" + item.text + " This is best described as a:</p>";
      const answer =
        "<p><strong>" + item.type + ".</strong></p><p>Demand shocks change spending; supply shocks change production costs. A negative shock reduces output and raises unemployment. The inflation effect distinguishes the two: demand shocks move inflation in the same direction as output, while supply shocks move inflation in the opposite direction.</p>";
      return EQS.theory({
        topic: "policy",
        subtopic: "Shocks",
        difficulty: "medium",
        source: "Week 11 · Shocks",
        prompt: prompt,
        writtenPrompt:
          "<p>" + item.text + "</p><p>(a) Classify the shock (demand or supply, positive or negative). (b) What happens to output and unemployment? (c) What happens to inflation? (d) Which policy response would be appropriate, and what trade-off does it face?</p>",
        correct: item.type,
        wrong: types.filter((x) => x !== item.type),
        explanation: answer,
        answer: answer,
        rubric: ["Correct shock classification", "Output and unemployment effects", "Inflation effect", "Policy response and trade-off"]
      });
    }
  });

  /* ---------- policy response ---------- */
  EQS.register({
    topic: "policy",
    subtopic: "Policy response",
    difficulty: "medium",
    mode: "application",
    source: "Week 11 · Policy",
    gen: function () {
      const states = [
        { state: "a recession", correct: "Expansionary policy: spend more, cut taxes, lower interest rates, or let the S$ strengthen more slowly", why: "In a recession, the aim is to raise spending, output and jobs. Expansionary fiscal and monetary policy do that, at the cost of higher inflation." },
        { state: "an overheating boom", correct: "Contractionary policy: spend less, raise taxes, raise interest rates, or let the S$ strengthen faster", why: "In an overheating boom, the aim is to cool spending and inflation. Contractionary fiscal and monetary policy do that, at the cost of lower output and jobs." }
      ];
      const s = EQS.pick(states);
      const prompt = "<p>The economy is in " + s.state + ". Which policy stance is countercyclical?</p>";
      const answer = "<p><strong>" + s.correct + ".</strong></p><p>" + s.why + "</p><p>Countercyclical policy leans against the cycle: it heats up a slump and cools down a boom. Procyclical policy would do the opposite and amplify the cycle.</p>";
      return EQS.theory({
        topic: "policy",
        subtopic: "Policy response",
        difficulty: "medium",
        source: "Week 11 · Policy",
        prompt: prompt,
        writtenPrompt:
          "<p>The economy is in " + s.state + ".</p><p>(a) Should policy be expansionary or contractionary? (b) Name one fiscal tool and one monetary tool that could be used. (c) What happens to output, jobs and inflation? (d) What are the risks of getting the timing wrong?</p>",
        correct: s.correct,
        wrong: [
          "Contractionary policy: spend less, raise taxes, raise interest rates, or let the S$ strengthen faster",
          "Expansionary policy: spend more, cut taxes, lower interest rates, or let the S$ strengthen more slowly",
          "Procyclical policy: increase spending in booms and cut spending in recessions",
          "No policy response; the economy will always self-correct immediately"
        ].filter((x) => x !== s.correct),
        explanation: answer,
        answer: answer,
        rubric: ["Chooses the correct stance", "Names fiscal and monetary tools", "Predicts output, jobs and inflation", "Discusses timing risk"]
      });
    }
  });

  /* ---------- real interest rate ---------- */
  EQS.registerNumeric({
    topic: "policy",
    subtopic: "Real interest rate",
    difficulty: "easy",
    source: "Week 11 · Monetary policy",
    gen: function () {
      const nominal = EQS.ri(2, 10);
      const expectedInflation = EQS.ri(-3, 6);
      const real = nominal - expectedInflation;
      const prompt =
        "<p>A bank charges a nominal interest rate of " + nominal + "%. Borrowers expect prices to change by " +
        (expectedInflation >= 0 ? "+" : "−") + Math.abs(expectedInflation) +
        "% over the next year. What is the expected real interest rate?</p>";
      const answer =
        "<p class='formula-line'>Expected real interest rate = nominal interest rate − expected inflation</p>" +
        "<p class='formula-line'>= " + nominal + "% − (" + (expectedInflation >= 0 ? "+" : "−") + Math.abs(expectedInflation) + "%) = <strong>" + real + "%</strong></p>" +
        "<p>" + (expectedInflation < 0 ? "Expected deflation makes the real rate higher than the nominal rate, so borrowing feels more expensive and spending may fall further." : "Expected inflation makes the real rate lower than the nominal rate.") + "</p>";
      return EQS.numeric({
        topic: "policy",
        subtopic: "Real interest rate",
        difficulty: "easy",
        source: "Week 11 · Monetary policy",
        key: "realr-" + nominal + "-" + expectedInflation,
        prompt: prompt,
        writtenPrompt:
          "<p>A bank charges a nominal interest rate of " + nominal + "%. Borrowers expect prices to change by " +
          (expectedInflation >= 0 ? "+" : "−") + Math.abs(expectedInflation) +
          "% over the next year.</p><p>(a) Calculate the expected real interest rate. (b) Is borrowing cheap or expensive in real terms? (c) Explain how expected deflation can make a recession worse.</p>",
        correct: real + "%",
        wrong: [(real + 1) + "%", (real - 1) + "%", (real + 2) + "%"],
        answer: answer,
        explanation: "<p>Real rate = " + nominal + "% − (" + expectedInflation + "%) = " + real + "%.</p>",
        trap: "Subtract expected inflation, including the negative sign for deflation: subtracting a negative raises the real rate.",
        rubric: ["Uses the Fisher approximation", "Handles negative expected inflation", "Interprets real borrowing cost"]
      });
    }
  });

  /* ---------- output gap ---------- */
  EQS.registerNumeric({
    topic: "policy",
    subtopic: "Output gap",
    difficulty: "easy",
    source: "Week 11 · Business cycles",
    gen: function () {
      const potential = EQS.ri(400, 900);
      const gapPct = EQS.rf(-6, 6, 1);
      const actual = Math.round(potential * (1 + gapPct / 100) * 10) / 10;
      const gap = Math.round(((actual - potential) / potential) * 1000) / 10;
      const stateName = gap < 0 ? "a recessionary gap" : gap > 0 ? "an inflationary boom" : "no output gap";
      const prompt =
        "<p>Potential GDP is " + EQS.money(potential) + " billion and actual GDP is " + EQS.money(actual) +
        " billion. What is the output gap as a percentage of potential GDP?</p>";
      const answer =
        "<p class='formula-line'>Output gap = (actual − potential) ÷ potential × 100</p>" +
        "<p class='formula-line'>= (" + EQS.money(actual) + " − " + EQS.money(potential) + ") ÷ " + EQS.money(potential) + " × 100 = <strong>" +
        EQS.signedPct(gap, 1) + "</strong></p>" +
        "<p>The economy is in <strong>" + stateName + "</strong>. " +
        (gap < 0 ? "Output is below potential, so unemployment is likely above its natural rate." : gap > 0 ? "Output is above potential, so unemployment is likely below its natural rate and inflation pressure is rising." : "Output is at potential.") + "</p>";
      return EQS.numeric({
        topic: "policy",
        subtopic: "Output gap",
        difficulty: "easy",
        source: "Week 11 · Business cycles",
        key: "gap-" + potential + "-" + actual,
        prompt: prompt,
        writtenPrompt:
          "<p>Potential GDP is " + EQS.money(potential) + " billion and actual GDP is " + EQS.money(actual) +
          " billion.</p><p>(a) Calculate the output gap as a percentage of potential GDP. (b) Is the economy in a recessionary gap or an inflationary boom? (c) What is likely happening to unemployment? (d) What policy stance is countercyclical?</p>",
        correct: EQS.signedPct(gap, 1),
        wrong: [EQS.signedPct(gap + 1, 1), EQS.signedPct(gap - 1, 1), EQS.signedPct(gap + 2, 1)],
        answer: answer,
        explanation: "<p>Output gap = " + EQS.signedPct(gap, 1) + "; the economy is in " + stateName + ".</p>",
        trap: "Divide by potential GDP, not actual GDP.",
        rubric: ["Computes the gap", "Uses potential GDP as the base", "Interprets recession vs boom", "Chooses the countercyclical stance"]
      });
    }
  });

  /* ---------- MAS exchange rate ---------- */
  EQS.register({
    topic: "policy",
    subtopic: "Exchange-rate policy",
    difficulty: "medium",
    mode: "application",
    source: "Week 11 · MAS",
    gen: function () {
      const cases = [
        {
          state: "recession",
          action: "MAS lets the S$ strengthen more slowly, or weaken",
          correct: "Exports become cheaper abroad and imports become more expensive, so output and jobs rise but inflation rises",
          wrong: [
            "Exports become more expensive abroad and imports become cheaper, so output and jobs fall but inflation falls",
            "Exports and imports are unaffected because the exchange rate is not a policy tool",
            "The S$ appreciates faster, which raises import prices and lowers inflation"
          ],
          why: "A weaker or more slowly appreciating S$ makes Singapore's exports cheaper for foreigners, supporting export demand and jobs. Imports cost more in S$, so inflation rises."
        },
        {
          state: "overheating boom",
          action: "MAS lets the S$ strengthen faster",
          correct: "Imports become cheaper and exports become more expensive abroad, so inflation falls but output and jobs fall",
          wrong: [
            "Imports become more expensive and exports become cheaper, so inflation rises and output rises",
            "The exchange rate has no effect on inflation in a small open economy",
            "MAS lowers interest rates to cool the economy"
          ],
          why: "Faster appreciation lowers imported inflation but makes exports less competitive, cooling output and jobs."
        }
      ];
      const c = EQS.pick(cases);
      const prompt = "<p>Singapore is in " + c.state + ". If MAS wants countercyclical monetary policy, what should it do, and what happens?</p>";
      const answer = "<p><strong>" + c.action + ".</strong></p><p>" + c.why + "</p><p>Singapore uses the exchange rate because it is very open to trade and imports much of what it consumes. The trade-off is the same as with interest rates: policy supports output and jobs at the cost of higher inflation, or reduces inflation at the cost of lower output and jobs.</p>";
      return EQS.theory({
        topic: "policy",
        subtopic: "Exchange-rate policy",
        difficulty: "medium",
        source: "Week 11 · MAS",
        prompt: prompt,
        writtenPrompt:
          "<p>Singapore is in " + c.state + ".</p><p>(a) What should MAS do with the S$? (b) Trace the export channel. (c) Trace the import channel. (d) What happens to output, jobs and inflation? (e) Why does Singapore use the exchange rate rather than interest rates?</p>",
        correct: c.correct,
        wrong: c.wrong,
        explanation: answer,
        answer: answer,
        rubric: ["Chooses the correct MAS action", "Traces export and import channels", "Predicts output, jobs and inflation", "Explains the small-open-economy rationale"]
      });
    }
  });

  /* ---------- MAS import-price arithmetic ---------- */
  EQS.registerNumeric({
    topic: "policy",
    subtopic: "Exchange-rate arithmetic",
    difficulty: "medium",
    source: "Week 11 · MAS",
    gen: function () {
      const worldPrice = EQS.ri(100, 1200);
      const e1 = EQS.rf(1.25, 1.45, 2);
      const changePct = EQS.pick([-8, -5, -3, 3, 5, 8]);
      const e2 = Math.round(e1 * (1 + changePct / 100) * 10000) / 10000;
      const p1 = worldPrice * e1;
      const p2 = worldPrice * e2;
      const actualChange = ((p2 - p1) / p1) * 100;
      const stronger = changePct < 0;
      const prompt =
        "<p>An imported input costs US$" + EQS.num(worldPrice) + ". The exchange rate changes from S$" + EQS.num(e1, 2) +
        " per US$ to S$" + EQS.num(e2, 2) + " per US$. What is the new S$ cost of the input?</p>";
      const answer =
        "<p>Before: S$ cost = US$" + EQS.num(worldPrice) + " × " + EQS.num(e1, 2) + " = " + EQS.money(p1, 2) + ".</p>" +
        "<p>After: S$ cost = US$" + EQS.num(worldPrice) + " × " + EQS.num(e2, 2) + " = <strong>" + EQS.money(p2, 2) + "</strong>.</p>" +
        "<p>The S$ cost changes by " + EQS.signedPct(actualChange, 2) + ". " +
        (stronger ? "The S$ strengthened (each US$ costs fewer S$), so imported inflation falls." : "The S$ weakened (each US$ costs more S$), so imported inflation rises.") + "</p>";
      return EQS.numeric({
        topic: "policy",
        subtopic: "Exchange-rate arithmetic",
        difficulty: "medium",
        source: "Week 11 · MAS",
        key: "mas-" + worldPrice + "-" + e1 + "-" + e2,
        prompt: prompt,
        writtenPrompt:
          "<p>An imported input costs US$" + EQS.num(worldPrice) + ". The exchange rate changes from S$" + EQS.num(e1, 2) +
          " per US$ to S$" + EQS.num(e2, 2) + " per US$.</p><p>(a) Calculate the S$ cost before and after. (b) Calculate the percentage change in the S$ cost. (c) Did the S$ strengthen or weaken? (d) What happens to imported inflation, and is this expansionary or contractionary?</p>",
        correct: EQS.money(p2, 2),
        wrong: [EQS.money(p1, 2), EQS.money(worldPrice, 2), EQS.money(p2 * 2, 2)],
        answer: answer,
        explanation: "<p>New S$ cost = US$" + EQS.num(worldPrice) + " × " + EQS.num(e2, 2) + " = " + EQS.money(p2, 2) + ".</p>",
        trap: "Multiply by S$ per US$. A stronger S$ means a lower S$/US$ rate and cheaper imports.",
        rubric: ["Converts before and after", "Computes the S$ change", "Interprets stronger/weaker", "Links to inflation and policy"]
      });
    }
  });

  /* ---------- labour market with a wage floor ---------- */
  EQS.registerNumeric({
    topic: "policy",
    subtopic: "Labour market",
    difficulty: "hard",
    source: "Week 11 · Labour market",
    gen: function () {
      const b = EQS.ri(2, 6);
      const d = EQS.ri(2, 6);
      const We = EQS.ri(10, 30);
      const Qe = EQS.ri(Math.max(100, d * We + 40), 300);
      const a = Qe + b * We;
      const c = Qe - d * We;
      const delta = EQS.ri(2, 8);
      const Wf = We + delta;
      const Ld = a - b * Wf;
      const Ls = c + d * Wf;
      const unemployment = Math.max(0, Ls - Ld);
      const prompt =
        "<p>Labour demand is <span class='formula'>L<sub>d</sub> = " + a + " − " + b +
        "W</span> and labour supply is <span class='formula'>L<sub>s</sub> = " + c + " + " + d +
        "W</span>. A wage floor is set at W = " + EQS.money(Wf) +
        ". What is the resulting unemployment?</p>";
      const answer =
        "<p>At the wage floor W = " + EQS.money(Wf) + ":</p><p class='formula-line'>L<sub>d</sub> = " + a + " − " + b + "×" + Wf + " = " + Ld + "</p>" +
        "<p class='formula-line'>L<sub>s</sub> = " + c + " + " + d + "×" + Wf + " = " + Ls + "</p>" +
        "<p>Firms hire the short side, " + Ld + ". The gap between willing workers and jobs is unemployment:</p>" +
        "<p class='formula-line'>Unemployment = L<sub>s</sub> − L<sub>d</sub> = " + Ls + " − " + Ld + " = <strong>" + unemployment + "</strong></p>" +
        "<p>Without the floor, the market-clearing wage would be W* = " + EQS.money(We) + " and employment would be " + Qe +
        ". With rigid wages, the adjustment shows up as lost jobs rather than lower pay.</p>";
      return EQS.numeric({
        topic: "policy",
        subtopic: "Labour market",
        difficulty: "hard",
        source: "Week 11 · Labour market",
        key: "labour-" + a + "-" + b + "-" + c + "-" + d + "-" + Wf,
        prompt: prompt,
        writtenPrompt:
          "<p>Labour demand is <span class='formula'>L<sub>d</sub> = " + a + " − " + b +
          "W</span> and labour supply is <span class='formula'>L<sub>s</sub> = " + c + " + " + d +
          "W</span>. A wage floor is set at W = " + EQS.money(Wf) + ".</p><p>(a) Calculate labour demand and supply at the wage floor. (b) Calculate unemployment. (c) Find the market-clearing wage without the floor. (d) Explain why the unemployment arises. (e) Name two Singapore measures that reduce labour-cost rigidity.</p>",
        correct: unemployment + " workers",
        wrong: [Ls + " workers", Ld + " workers", (Ls + Ld) + " workers"],
        answer: answer,
        explanation: "<p>Unemployment = Ls − Ld = " + Ls + " − " + Ld + " = " + unemployment + ".</p>",
        trap: "Employment is the short side of the market; unemployment is the gap between willing supply and actual jobs.",
        rubric: ["Computes Ld and Ls", "Finds unemployment", "Explains wage rigidity", "Names Singapore flexibility measures"]
      });
    }
  });

  /* ---------- policy mix classification ---------- */
  EQS.register({
    topic: "policy",
    subtopic: "Policy mix",
    difficulty: "medium",
    mode: "application",
    source: "Week 11 · Policy mix",
    gen: function () {
      const monetary = EQS.pick([
        { text: "the Fed cuts interest rates", dir: 1 },
        { text: "the Fed raises interest rates", dir: -1 },
        { text: "MAS lets the S$ strengthen faster", dir: -1 },
        { text: "MAS lets the S$ strengthen more slowly", dir: 1 }
      ]);
      const fiscal = EQS.pick([
        { text: "the government increases spending", dir: 1 },
        { text: "the government cuts spending", dir: -1 },
        { text: "the government cuts taxes", dir: 1 },
        { text: "the government raises taxes", dir: -1 }
      ]);
      const combined = monetary.dir + fiscal.dir;
      let correct, why;
      if (combined > 0) {
        correct = "Both are expansionary in net: output and jobs rise, inflation rises";
        why = "Both tools increase spending, so the package is expansionary.";
      } else if (combined < 0) {
        correct = "Both are contractionary in net: output and jobs fall, inflation falls";
        why = "Both tools reduce spending, so the package is contractionary.";
      } else {
        correct = "The tools push in opposite directions, so the net effect is ambiguous";
        why = "One tool is expansionary and the other contractionary. Without knowing their relative sizes, the net effect cannot be determined.";
      }
      const prompt = "<p>" + monetary.text.charAt(0).toUpperCase() + monetary.text.slice(1) + ", and " + fiscal.text + ". How would you describe the combined policy package?</p>";
      const answer = "<p><strong>" + correct + ".</strong></p><p>" + why + "</p><p>Classify each tool separately first: monetary easing and fiscal expansion raise spending; monetary tightening and fiscal contraction reduce it. Then combine the directions.</p>";
      return EQS.theory({
        topic: "policy",
        subtopic: "Policy mix",
        difficulty: "medium",
        source: "Week 11 · Policy mix",
        prompt: prompt,
        writtenPrompt:
          "<p>" + monetary.text.charAt(0).toUpperCase() + monetary.text.slice(1) + ", and " + fiscal.text + ".</p><p>(a) Classify the monetary action. (b) Classify the fiscal action. (c) What is the combined direction? (d) Predict the effects on output, jobs and inflation, or explain why they are ambiguous.</p>",
        correct: correct,
        wrong: [
          "Both are expansionary: output and jobs rise, inflation rises",
          "Both are contractionary: output and jobs fall, inflation falls",
          "The package has no effect on output, jobs or inflation"
        ].filter((x) => x !== correct),
        explanation: answer,
        answer: answer,
        rubric: ["Classifies monetary policy", "Classifies fiscal policy", "Combines directions and predicts effects"]
      });
    }
  });

  /* ---------- business cycle properties ---------- */
  EQS.register({
    topic: "policy",
    subtopic: "Business cycle properties",
    difficulty: "easy",
    mode: "application",
    source: "Week 11 · Business cycles",
    gen: function () {
      const items = [
        { text: "In a recession, output, consumption, investment and employment all fall together, while unemployment rises.", type: "Co-movement" },
        { text: "In November 2019, forecasters expected positive growth for 2020, but the pandemic caused a deep recession.", type: "Limited predictability" },
        { text: "Once a recovery began in the second half of 2020, Singapore kept growing through 2021.", type: "Persistence" },
        { text: "The Great Depression lasted for years, with output falling for four consecutive years.", type: "Persistence" },
        { text: "Investment falls much more than consumption in a recession.", type: "Co-movement" },
        { text: "Even the best forecasters cannot reliably predict turning points.", type: "Limited predictability" }
      ];
      const item = EQS.pick(items);
      const types = ["Co-movement", "Limited predictability", "Persistence"];
      const prompt = "<p>" + item.text + " Which property of business cycles does this illustrate?</p>";
      const answer =
        "<p><strong>" + item.type + ".</strong></p><p>Co-movement: many variables move together over the cycle. Limited predictability: turning points are hard to forecast because shocks are unexpected. Persistence: growth tends to be followed by growth and contraction by contraction.</p>";
      return EQS.theory({
        topic: "policy",
        subtopic: "Business cycle properties",
        difficulty: "easy",
        source: "Week 11 · Business cycles",
        prompt: prompt,
        writtenPrompt:
          "<p>" + item.text + "</p><p>(a) Which property of business cycles does this illustrate? (b) Define that property. (c) Give one other example of the same property. (d) Why does the property matter for stabilisation policy?</p>",
        correct: item.type,
        wrong: ["Seasonality", ...types.filter((x) => x !== item.type)],
        explanation: answer,
        answer: answer,
        rubric: ["Identifies the property", "Defines it", "Gives another example", "Links to policy"]
      });
    }
  });
})(typeof window !== "undefined" ? window : globalThis);
