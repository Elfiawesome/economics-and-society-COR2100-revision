/* Procedural generators: macro measurement, productivity and growth. */
(function (g) {
  const EQS = g.EQS;

  /* ---------- expenditure GDP ---------- */
  EQS.registerNumeric({
    topic: "macro-measurement",
    subtopic: "Expenditure approach",
    difficulty: "easy",
    source: "Week 6 · GDP",
    gen: function () {
      let C, I, G, X, M, gdp;
      let guard = 0;
      do {
        C = EQS.ri(200, 800);
        I = EQS.ri(100, 400);
        G = EQS.ri(80, 300);
        X = EQS.ri(100, 500);
        M = EQS.ri(80, 450);
        gdp = C + I + G + X - M;
      } while (gdp <= 0 && guard++ < 30);
      if (gdp <= 0) { C = 500; I = 200; G = 150; X = 300; M = 200; gdp = 950; }
      const prompt =
        "<p>An economy has consumption C = " + EQS.money(C) + " billion, investment I = " + EQS.money(I) +
        " billion, government expenditure G = " + EQS.money(G) + " billion, exports X = " + EQS.money(X) +
        " billion, and imports M = " + EQS.money(M) + " billion. What is GDP?</p>";
      const answer =
        "<p>Expenditure approach:</p><p class='formula-line'>GDP = C + I + G + (X − M)</p>" +
        "<p class='formula-line'>= " + EQS.money(C) + " + " + EQS.money(I) + " + " + EQS.money(G) + " + (" + EQS.money(X) + " − " + EQS.money(M) + ")</p>" +
        "<p class='formula-line'>= <strong>" + EQS.money(gdp) + " billion</strong></p>" +
        "<p>Net exports = X − M = " + EQS.money(X - M) + " billion.</p>";
      return EQS.numeric({
        topic: "macro-measurement",
        subtopic: "Expenditure approach",
        difficulty: "easy",
        source: "Week 6 · GDP",
        key: "gdp-exp-" + C + "-" + I + "-" + G + "-" + X + "-" + M,
        prompt: prompt,
        writtenPrompt:
          "<p>An economy has consumption C = " + EQS.money(C) + " billion, investment I = " + EQS.money(I) +
          " billion, government expenditure G = " + EQS.money(G) + " billion, exports X = " + EQS.money(X) +
          " billion, and imports M = " + EQS.money(M) + " billion.</p><p>(a) Calculate GDP using the expenditure approach. (b) Calculate net exports. (c) Explain why imports are subtracted. (d) If imports rose by " +
          EQS.money(EQS.ri(20, 80)) + " billion with no other change, what would happen to GDP?</p>",
        correct: EQS.money(gdp) + " billion",
        wrong: [EQS.money(C + I + G + X + M) + " billion", EQS.money(C + I + G) + " billion", EQS.money(X - M) + " billion"],
        answer: answer,
        explanation: "<p>GDP = C + I + G + X − M = " + EQS.money(gdp) + " billion.</p>",
        trap: "Add exports and subtract imports; do not add imports.",
        rubric: ["Uses the expenditure identity", "Subtracts imports", "Computes GDP"]
      });
    }
  });

  /* ---------- value added ---------- */
  EQS.registerNumeric({
    topic: "macro-measurement",
    subtopic: "Value added",
    difficulty: "medium",
    source: "Week 6 · Production approach",
    gen: function () {
      const s1 = EQS.ri(50, 200);
      const s2 = s1 + EQS.ri(80, 250);
      const s3 = s2 + EQS.ri(100, 300);
      const va1 = s1;
      const va2 = s2 - s1;
      const va3 = s3 - s2;
      const gdp = s3;
      const sumSales = s1 + s2 + s3;
      const prompt =
        "<p>Three firms form a production chain:</p>" +
        EQS.table(
          ["Firm", "Sales", "Purchases of intermediate goods"],
          [["Farmer", EQS.money(s1), "$0"], ["Mill", EQS.money(s2), EQS.money(s1)], ["Bakery", EQS.money(s3), EQS.money(s2)]]
        ) +
        "<p>The bakery sells its final output to consumers. What is GDP using the value-added approach?</p>";
      const answer =
        "<p>Value added = sales − intermediate purchases:</p>" +
        EQS.table(
          ["Firm", "Sales", "Intermediate purchases", "Value added"],
          [["Farmer", EQS.money(s1), "$0", EQS.money(va1)], ["Mill", EQS.money(s2), EQS.money(s1), EQS.money(va2)], ["Bakery", EQS.money(s3), EQS.money(s2), EQS.money(va3)]]
        ) +
        "<p>GDP = " + EQS.money(va1) + " + " + EQS.money(va2) + " + " + EQS.money(va3) + " = <strong>" + EQS.money(gdp) + "</strong>.</p>" +
        "<p>Adding all sales would give " + EQS.money(sumSales) + ", which double-counts the intermediate goods. GDP counts only the final value of " + EQS.money(s3) + ".</p>";
      return EQS.numeric({
        topic: "macro-measurement",
        subtopic: "Value added",
        difficulty: "medium",
        source: "Week 6 · Production approach",
        key: "va-" + s1 + "-" + s2 + "-" + s3,
        prompt: prompt,
        writtenPrompt:
          "<p>Three firms form a production chain:</p>" +
          EQS.table(
            ["Firm", "Sales", "Purchases of intermediate goods"],
            [["Farmer", EQS.money(s1), "$0"], ["Mill", EQS.money(s2), EQS.money(s1)], ["Bakery", EQS.money(s3), EQS.money(s2)]]
          ) +
          "<p>The bakery sells its final output to consumers.</p><p>(a) Calculate each firm's value added. (b) Calculate GDP using the value-added approach. (c) Explain why adding all sales would overstate GDP.</p>",
        correct: EQS.money(gdp),
        wrong: [EQS.money(sumSales), EQS.money(s1 + s2), EQS.money(va1 + va2)],
        answer: answer,
        explanation: "<p>GDP = sum of value added = " + EQS.money(gdp) + ".</p>",
        trap: "Do not add sales revenue at every stage; intermediate goods are counted twice.",
        rubric: ["Computes value added for each firm", "Sums value added", "Explains double counting"]
      });
    }
  });

  /* ---------- GDP vs GNI ---------- */
  EQS.registerNumeric({
    topic: "macro-measurement",
    subtopic: "GDP vs GNI",
    difficulty: "medium",
    source: "Week 6 · GDP vs GNI",
    gen: function () {
      const gdp = EQS.ri(300, 900);
      const inflow = EQS.ri(10, 90);
      const outflow = EQS.ri(10, 120);
      const gni = gdp + inflow - outflow;
      const prompt =
        "<p>A country's GDP is " + EQS.money(gdp) + " billion. Its residents earn " + EQS.money(inflow) +
        " billion of income from abroad, and foreign residents earn " + EQS.money(outflow) +
        " billion of income produced inside the country. What is GNI?</p>";
      const answer =
        "<p class='formula-line'>GNI = GDP + income received from abroad − income paid abroad</p>" +
        "<p class='formula-line'>= " + EQS.money(gdp) + " + " + EQS.money(inflow) + " − " + EQS.money(outflow) + " = <strong>" + EQS.money(gni) + " billion</strong></p>" +
        "<p>" + (gni > gdp ? "GNI exceeds GDP because residents receive more income from abroad than foreigners earn domestically." : gni < gdp ? "GNI is below GDP because income paid abroad exceeds income received from abroad." : "GNI equals GDP because the two income flows are equal.") + "</p>";
      return EQS.numeric({
        topic: "macro-measurement",
        subtopic: "GDP vs GNI",
        difficulty: "medium",
        source: "Week 6 · GDP vs GNI",
        key: "gni-" + gdp + "-" + inflow + "-" + outflow,
        prompt: prompt,
        writtenPrompt:
          "<p>A country's GDP is " + EQS.money(gdp) + " billion. Its residents earn " + EQS.money(inflow) +
          " billion of income from abroad, and foreign residents earn " + EQS.money(outflow) +
          " billion of income produced inside the country.</p><p>(a) Calculate GNI. (b) Explain the difference between GDP and GNI. (c) Give an example of a worker whose income is in the country's GDP but not its GNI.</p>",
        correct: EQS.money(gni) + " billion",
        wrong: [EQS.money(gdp + inflow + outflow) + " billion", EQS.money(gdp - inflow + outflow) + " billion", EQS.money(gdp) + " billion"],
        answer: answer,
        explanation: "<p>GNI = GDP + inflow − outflow = " + EQS.money(gni) + " billion.</p>",
        trap: "Income paid abroad is subtracted; income received from abroad is added.",
        rubric: ["Applies the GNI formula", "Explains location vs residency", "Gives a cross-border worker example"]
      });
    }
  });

  /* ---------- real vs nominal GDP ---------- */
  EQS.registerNumeric({
    topic: "macro-measurement",
    subtopic: "Real vs nominal GDP",
    difficulty: "medium",
    source: "Week 6 · Real vs nominal",
    gen: function () {
      const goods = EQS.sample(["coffee", "sandwiches", "bubble tea", "t-shirts", "notebooks"], 2);
      const p1b = EQS.ri(3, 12);
      const p2b = EQS.ri(4, 15);
      const q1b = EQS.ri(50, 150);
      const q2b = EQS.ri(20, 80);
      const p1c = p1b + EQS.ri(1, 5);
      const p2c = p2b + EQS.ri(1, 6);
      const q1c = q1b + EQS.ri(10, 50);
      const q2c = q2b + EQS.ri(5, 40);
      const nominal = p1c * q1c + p2c * q2c;
      const real = p1b * q1c + p2b * q2c;
      const realBase = p1b * q1b + p2b * q2b;
      const deflator = (nominal / real) * 100;
      const realGrowth = ((real / realBase) - 1) * 100;
      const prompt =
        "<p>An economy produces two goods. The base year is Year 1.</p>" +
        EQS.table(
          ["Good", "Year 1 price", "Year 1 quantity", "Year 2 price", "Year 2 quantity"],
          [[goods[0], EQS.money(p1b), q1b, EQS.money(p1c), q1c], [goods[1], EQS.money(p2b), q2b, EQS.money(p2c), q2c]]
        ) +
        "<p>What is real GDP in Year 2, using Year 1 prices?</p>";
      const answer =
        "<p>Nominal GDP Year 2 = current prices × current quantities:</p><p class='formula-line'>" +
        EQS.money(p1c) + "×" + q1c + " + " + EQS.money(p2c) + "×" + q2c + " = " + EQS.money(nominal) + "</p>" +
        "<p>Real GDP Year 2 = base-year prices × current quantities:</p><p class='formula-line'>" +
        EQS.money(p1b) + "×" + q1c + " + " + EQS.money(p2b) + "×" + q2c + " = <strong>" + EQS.money(real) + "</strong></p>" +
        "<p>Real GDP Year 1 = " + EQS.money(realBase) + ", so real growth = " + EQS.pct(realGrowth, 1) + ".</p>" +
        "<p>GDP deflator = nominal/real × 100 = " + EQS.money(nominal) + "/" + EQS.money(real) + " × 100 = " + EQS.num(deflator, 1) + ".</p>";
      return EQS.numeric({
        topic: "macro-measurement",
        subtopic: "Real vs nominal GDP",
        difficulty: "medium",
        source: "Week 6 · Real vs nominal",
        key: "realgdp-" + p1b + "-" + p2b + "-" + q1c + "-" + q2c + "-" + p1c + "-" + p2c,
        prompt: prompt,
        writtenPrompt:
          "<p>An economy produces two goods. The base year is Year 1.</p>" +
          EQS.table(
            ["Good", "Year 1 price", "Year 1 quantity", "Year 2 price", "Year 2 quantity"],
            [[goods[0], EQS.money(p1b), q1b, EQS.money(p1c), q1c], [goods[1], EQS.money(p2b), q2b, EQS.money(p2c), q2c]]
          ) +
          "<p>(a) Calculate nominal GDP in Year 2. (b) Calculate real GDP in Year 2 using Year 1 prices. (c) Calculate real GDP growth. (d) Calculate the GDP deflator. (e) Explain why nominal and real GDP differ.</p>",
        correct: EQS.money(real),
        wrong: [EQS.money(nominal), EQS.money(realBase), EQS.money(p1c * q1b + p2c * q2b)],
        answer: answer,
        explanation: "<p>Real GDP uses base-year prices with current quantities: " + EQS.money(real) + ".</p>",
        trap: "Real GDP uses current quantities at base-year prices; nominal GDP uses current prices.",
        rubric: ["Computes nominal GDP", "Computes real GDP with base prices", "Computes growth and deflator"]
      });
    }
  });

  /* ---------- CPI and inflation ---------- */
  EQS.registerNumeric({
    topic: "macro-measurement",
    subtopic: "CPI",
    difficulty: "medium",
    source: "Week 6 · CPI",
    gen: function () {
      const goods = EQS.sample(["bubble tea", "bus rides", "hawker meals", "coffee", "sandwiches"], 3);
      const q = [EQS.ri(2, 8), EQS.ri(20, 60), EQS.ri(10, 30)];
      const base = [EQS.ri(2, 8), EQS.ri(1, 4), EQS.ri(3, 8)];
      const current = base.map((p) => Math.round(p * (1 + EQS.ri(2, 15) / 100) * 100) / 100);
      const costBase = q[0] * base[0] + q[1] * base[1] + q[2] * base[2];
      const costCurrent = q[0] * current[0] + q[1] * current[1] + q[2] * current[2];
      const cpi = (costCurrent / costBase) * 100;
      const inflation = cpi - 100;
      const prompt =
        "<p>A representative basket contains:</p>" +
        EQS.table(
          ["Item", "Quantity", "Base-year price", "Current price"],
          goods.map((gname, i) => [gname, q[i], EQS.money(base[i], 2), EQS.money(current[i], 2)])
        ) +
        "<p>Taking the base year CPI as 100, what is the current CPI?</p>";
      const answer =
        "<p>Cost of basket in base year = " + q[0] + "×" + EQS.money(base[0], 2) + " + " + q[1] + "×" + EQS.money(base[1], 2) + " + " + q[2] + "×" + EQS.money(base[2], 2) + " = " + EQS.money(costBase, 2) + ".</p>" +
        "<p>Cost of the same basket at current prices = " + q[0] + "×" + EQS.money(current[0], 2) + " + " + q[1] + "×" + EQS.money(current[1], 2) + " + " + q[2] + "×" + EQS.money(current[2], 2) + " = " + EQS.money(costCurrent, 2) + ".</p>" +
        "<p class='formula-line'>CPI = (cost current / cost base) × 100 = (" + EQS.money(costCurrent, 2) + "/" + EQS.money(costBase, 2) + ") × 100 = <strong>" + EQS.num(cpi, 2) + "</strong></p>" +
        "<p>Inflation = " + EQS.num(cpi, 2) + " − 100 = " + EQS.pct(inflation, 2) + ".</p>";
      return EQS.numeric({
        topic: "macro-measurement",
        subtopic: "CPI",
        difficulty: "medium",
        source: "Week 6 · CPI",
        key: "cpi-" + q.join("-") + "-" + base.join("-") + "-" + current.join("-"),
        prompt: prompt,
        writtenPrompt:
          "<p>A representative basket contains:</p>" +
          EQS.table(
            ["Item", "Quantity", "Base-year price", "Current price"],
            goods.map((gname, i) => [gname, q[i], EQS.money(base[i], 2), EQS.money(current[i], 2)])
          ) +
          "<p>(a) Calculate the cost of the basket in the base year. (b) Calculate the cost at current prices. (c) Calculate the CPI. (d) Calculate the inflation rate. (e) Explain the difference between the price level and inflation.</p>",
        correct: EQS.num(cpi, 2),
        wrong: [EQS.num(inflation, 2), EQS.num((costCurrent / costBase) * 100 + 10, 2), EQS.money(costCurrent, 2)],
        answer: answer,
        explanation: "<p>CPI = (current basket cost / base basket cost) × 100 = " + EQS.num(cpi, 2) + ".</p>",
        trap: "CPI is a price index (base = 100); inflation is the percentage change in the index.",
        rubric: ["Computes both basket costs", "Calculates CPI", "Calculates inflation", "Distinguishes level from rate"]
      });
    }
  });

  /* ---------- GDP deflator conversion ---------- */
  EQS.registerNumeric({
    topic: "macro-measurement",
    subtopic: "GDP deflator",
    difficulty: "easy",
    source: "Week 6 · GDP deflator",
    gen: function () {
      const nominal = EQS.ri(100, 500);
      const deflator = EQS.ri(90, 150);
      const real = nominal / (deflator / 100);
      const prompt =
        "<p>Nominal GDP is " + EQS.money(nominal) + " billion and the GDP deflator is " + deflator +
        ". What is real GDP?</p>";
      const answer =
        "<p class='formula-line'>Real GDP = Nominal GDP ÷ (Deflator/100) = " + EQS.money(nominal) + " ÷ " + (deflator / 100) + " = <strong>" + EQS.money(real, 1) + " billion</strong></p>" +
        "<p>The deflator of " + deflator + " means prices are " + (deflator - 100) + "% " + (deflator >= 100 ? "higher" : "lower") + " than in the base year.</p>";
      return EQS.numeric({
        topic: "macro-measurement",
        subtopic: "GDP deflator",
        difficulty: "easy",
        source: "Week 6 · GDP deflator",
        key: "deflator-" + nominal + "-" + deflator,
        prompt: prompt,
        writtenPrompt:
          "<p>Nominal GDP is " + EQS.money(nominal) + " billion and the GDP deflator is " + deflator +
          ".</p><p>(a) Calculate real GDP. (b) Interpret what the deflator value means. (c) If real GDP in the base year was " +
          EQS.money(nominal / (deflator / 100) * 0.9, 1) + " billion, by what percentage has production changed?</p>",
        correct: EQS.money(real, 1) + " billion",
        wrong: [EQS.money(real + 50, 1) + " billion", EQS.money(Math.max(0, real - 50), 1) + " billion", EQS.money(real * 2, 1) + " billion"],
        answer: answer,
        explanation: "<p>Real GDP = nominal/(deflator/100) = " + EQS.money(real, 1) + " billion.</p>",
        trap: "Divide by the deflator/100; do not multiply.",
        rubric: ["Uses the deflator formula", "Computes real GDP", "Interprets the index"]
      });
    }
  });

  /* ---------- GDP per capita ---------- */
  EQS.registerNumeric({
    topic: "macro-measurement",
    subtopic: "GDP per capita",
    difficulty: "easy",
    source: "Week 6 · GDP per capita",
    gen: function () {
      const gdpB = EQS.ri(300, 900);
      const popM = EQS.ri(3, 8);
      const pc = (gdpB * 1000) / popM;
      const prompt =
        "<p>A country's GDP is " + EQS.money(gdpB) + " billion and its population is " + popM +
        " million. What is GDP per capita?</p>";
      const answer =
        "<p>Convert both to the same units: GDP = " + EQS.money(gdpB) + " billion = " + EQS.money(gdpB * 1000) +
        " million; population = " + popM + " million.</p>" +
        "<p class='formula-line'>GDP per capita = " + EQS.money(gdpB * 1000) + " million ÷ " + popM + " million = <strong>" + EQS.money(pc) + "</strong></p>" +
        "<p>This is an average. It does not tell us how income is distributed across the population.</p>";
      return EQS.numeric({
        topic: "macro-measurement",
        subtopic: "GDP per capita",
        difficulty: "easy",
        source: "Week 6 · GDP per capita",
        key: "gdppc-" + gdpB + "-" + popM,
        prompt: prompt,
        writtenPrompt:
          "<p>A country's GDP is " + EQS.money(gdpB) + " billion and its population is " + popM +
          " million.</p><p>(a) Calculate GDP per capita. (b) Explain why GDP per capita can rise while most people do not become better off. (c) Name one thing GDP per capita does not measure.</p>",
        correct: EQS.money(pc),
        wrong: [EQS.money(pc * 10), EQS.money(pc / 10), EQS.money(gdpB) + " billion"],
        answer: answer,
        explanation: "<p>GDP per capita = " + EQS.money(gdpB) + " billion ÷ " + popM + " million = " + EQS.money(pc) + ".</p>",
        trap: "Convert billions and millions to the same units before dividing.",
        rubric: ["Divides GDP by population", "Handles units correctly", "Explains the average/distribution issue"]
      });
    }
  });

  /* ---------- PPP conversion ---------- */
  EQS.registerNumeric({
    topic: "productivity",
    subtopic: "PPP",
    difficulty: "medium",
    source: "Week 7 · PPP",
    gen: function () {
      const localGDP = EQS.ri(80, 300) * 1000;
      const localPrice = EQS.ri(10, 60);
      const usPrice = EQS.ri(4, 12);
      const exrate = EQS.rf(0.05, 0.4, 2);
      const market = localGDP * exrate;
      const ppp = localGDP * (usPrice / localPrice);
      const higher = ppp > market;
      const prompt =
        "<p>A country's GDP per capita is " + EQS.num(localGDP) + " units of local currency. A standardised basket costs " +
        EQS.num(localPrice) + " units locally and " + EQS.money(usPrice) + " in the United States. The market exchange rate is US$" +
        EQS.num(exrate, 2) + " per unit of local currency. What is GDP per capita at PPP-adjusted US$?</p>";
      const answer =
        "<p>PPP-adjusted income:</p><p class='formula-line'>GDP<sub>PPP</sub> = local GDP × (US price / local price) = " +
        EQS.num(localGDP) + " × (" + usPrice + "/" + localPrice + ") = <strong>" + EQS.money(ppp) + "</strong></p>" +
        "<p>At the market exchange rate: " + EQS.num(localGDP) + " × " + EQS.num(exrate, 2) + " = " + EQS.money(market) + ".</p>" +
        "<p>" + (higher ? "PPP income is higher, indicating that local prices are lower than US prices." : "PPP income is lower, indicating that local prices are higher than US prices.") + "</p>";
      return EQS.numeric({
        topic: "productivity",
        subtopic: "PPP",
        difficulty: "medium",
        source: "Week 7 · PPP",
        key: "ppp-" + localGDP + "-" + localPrice + "-" + usPrice + "-" + exrate,
        prompt: prompt,
        writtenPrompt:
          "<p>A country's GDP per capita is " + EQS.num(localGDP) + " units of local currency. A standardised basket costs " +
          EQS.num(localPrice) + " units locally and " + EQS.money(usPrice) + " in the United States. The market exchange rate is US$" +
          EQS.num(exrate, 2) + " per unit of local currency.</p><p>(a) Calculate GDP per capita at market exchange rates. (b) Calculate GDP per capita at PPP. (c) Which is higher, and what does that tell you about local prices? (d) Why might PPP be a better measure of living standards?</p>",
        correct: EQS.money(ppp),
        wrong: [EQS.money(ppp * 0.5), EQS.money(ppp * 1.5), EQS.money(ppp * 2)],
        answer: answer,
        explanation: "<p>PPP GDP = local GDP × (US price/local price) = " + EQS.money(ppp) + ".</p>",
        trap: "PPP uses the price ratio, not the market exchange rate.",
        rubric: ["Uses the PPP formula", "Computes market-rate income", "Interprets the comparison"]
      });
    }
  });

  /* ---------- productivity decomposition ---------- */
  EQS.registerNumeric({
    topic: "productivity",
    subtopic: "Productivity",
    difficulty: "medium",
    source: "Week 7 · Productivity",
    gen: function () {
      const gdpB = EQS.ri(300, 900);
      const hoursM = EQS.ri(10, 40) * 1000;
      const hoursPerWorker = EQS.ri(1800, 2200);
      const workersM = Math.round((hoursM * 1000000) / (hoursPerWorker * 1000000) * 100) / 100;
      const workersPerPop = EQS.rf(0.45, 0.6, 2);
      const popM = Math.round((workersM / workersPerPop) * 100) / 100;
      const productivity = (gdpB * 1000) / hoursM;
      const perCapita = (gdpB * 1000) / popM;
      const prompt =
        "<p>An economy has GDP = " + EQS.money(gdpB) + " billion, total hours worked = " + EQS.num(hoursM) +
        " million, workers = " + EQS.num(workersM) + " million, and population = " + EQS.num(popM) +
        " million. What is productivity (GDP per hour), in dollars per hour?</p>";
      const answer =
        "<p>Convert GDP to millions: " + EQS.money(gdpB) + " billion = " + EQS.money(gdpB * 1000) + " million.</p>" +
        "<p class='formula-line'>Productivity = GDP ÷ hours = " + EQS.money(gdpB * 1000) + " million ÷ " + EQS.num(hoursM) + " million hours</p>" +
        "<p class='formula-line'>= <strong>" + EQS.money(productivity, 2) + " per hour</strong></p>" +
        "<p>Check the decomposition:</p>" +
        "<p class='formula-line'>GDP/population = productivity × (hours/workers) × (workers/population)</p>" +
        "<p class='formula-line'>= " + EQS.money(productivity, 2) + " × " + EQS.num(hoursM / workersM, 1) + " × " + EQS.num(workersPerPop, 2) + " ≈ " + EQS.money(perCapita) + " per person.</p>";
      return EQS.numeric({
        topic: "productivity",
        subtopic: "Productivity",
        difficulty: "medium",
        source: "Week 7 · Productivity",
        key: "prod-" + gdpB + "-" + hoursM + "-" + workersM + "-" + popM,
        prompt: prompt,
        writtenPrompt:
          "<p>An economy has GDP = " + EQS.money(gdpB) + " billion, total hours worked = " + EQS.num(hoursM) +
          " million, workers = " + EQS.num(workersM) + " million, and population = " + EQS.num(popM) + " million.</p><p>(a) Calculate productivity. (b) Calculate hours per worker and the share of the population working. (c) Verify the identity GDP/population = productivity × hours/worker × workers/population. (d) Why must long-run income growth come mainly from productivity?</p>",
        correct: EQS.money(productivity, 2) + " per hour",
        wrong: [EQS.money(gdpB * 1000 / workersM, 2) + " per worker", EQS.money(perCapita, 2) + " per person", EQS.money(gdpB, 2) + " per hour"],
        answer: answer,
        explanation: "<p>Productivity = " + EQS.money(gdpB * 1000) + " million ÷ " + EQS.num(hoursM) + " million = " + EQS.money(productivity, 2) + " per hour.</p>",
        trap: "Productivity is output per hour, not output per worker or per person. Convert billions and millions to the same units.",
        rubric: ["Computes productivity", "Handles units correctly", "Verifies the identity", "Explains the productivity limit"]
      });
    }
  });

  /* ---------- aggregate production function ---------- */
  EQS.registerNumeric({
    topic: "productivity",
    subtopic: "Production function",
    difficulty: "medium",
    source: "Week 7 · Production function",
    gen: function () {
      const A = EQS.ri(1, 5);
      const K = EQS.pick([8, 27, 64, 125]);
      const H = EQS.pick([8, 27, 64, 125]);
      const kRoot = Math.round(Math.cbrt(K));
      const hRoot = Math.round(Math.cbrt(H));
      const Y = A * kRoot * hRoot * hRoot;
      const prompt =
        "<p>An economy's production function is <span class='formula'>Y = A × K<sup>1/3</sup> × H<sup>2/3</sup></span>, with A = " +
        A + ", K = " + K + ", and H = " + H + ". What is output Y?</p>";
      const answer =
        "<p>K<sup>1/3</sup> = " + K + "<sup>1/3</sup> = " + kRoot + "; H<sup>2/3</sup> = (" + hRoot + ")<sup>2</sup> = " + hRoot * hRoot + ".</p>" +
        "<p class='formula-line'>Y = " + A + " × " + kRoot + " × " + hRoot * hRoot + " = <strong>" + Y + "</strong></p>" +
        "<p>If K alone doubled, output would rise by 2<sup>1/3</sup> − 1 ≈ 26%, less than double, because of diminishing marginal product. If both K and H doubled, output would double exactly because the exponents sum to 1.</p>";
      return EQS.numeric({
        topic: "productivity",
        subtopic: "Production function",
        difficulty: "medium",
        source: "Week 7 · Production function",
        key: "pf-" + A + "-" + K + "-" + H,
        prompt: prompt,
        writtenPrompt:
          "<p>An economy's production function is <span class='formula'>Y = A × K<sup>1/3</sup> × H<sup>2/3</sup></span>, with A = " +
          A + ", K = " + K + ", and H = " + H + ".</p><p>(a) Calculate output Y. (b) What happens to output if K doubles while H and A are fixed? (c) What happens if both K and H double? (d) Explain the difference using diminishing marginal product.</p>",
        correct: Y + " units",
        wrong: [A * kRoot * hRoot, A * K * H, Y * 2],
        answer: answer,
        explanation: "<p>Y = " + Y + ".</p>",
        trap: "Apply the exponents to K and H separately; do not multiply A × K × H.",
        rubric: ["Applies the exponents", "Computes Y", "Explains diminishing returns and constant returns to scale"]
      });
    }
  });

  /* ---------- efficiency units ---------- */
  EQS.registerNumeric({
    topic: "productivity",
    subtopic: "Human capital",
    difficulty: "easy",
    source: "Week 7 · Human capital",
    gen: function () {
      const L1 = EQS.ri(500, 2000);
      const h1 = EQS.rf(0.8, 1.5, 1);
      const L2 = EQS.ri(500, 2000);
      const h2 = EQS.rf(1.2, 2.5, 1);
      const H1 = L1 * h1;
      const H2 = L2 * h2;
      const more = H1 > H2 ? "Economy A" : "Economy B";
      const prompt =
        "<p>Economy A has " + L1 + " workers with average human capital " + h1 + " efficiency units per worker. Economy B has " +
        L2 + " workers with average human capital " + h2 +
        " efficiency units per worker. How many efficiency units of labour does Economy A have?</p>";
      const answer =
        "<p class='formula-line'>H = L × h = " + L1 + " × " + h1 + " = <strong>" + EQS.num(H1, 0) + " efficiency units</strong></p>" +
        "<p>Economy B: H = " + L2 + " × " + h2 + " = " + EQS.num(H2, 0) + " efficiency units.</p>" +
        "<p>" + more + " has more effective labour. A smaller but more skilled workforce can supply more efficiency units than a larger, less-skilled one.</p>";
      return EQS.numeric({
        topic: "productivity",
        subtopic: "Human capital",
        difficulty: "easy",
        source: "Week 7 · Human capital",
        key: "eff-" + L1 + "-" + h1 + "-" + L2 + "-" + h2,
        prompt: prompt,
        writtenPrompt:
          "<p>Economy A has " + L1 + " workers with average human capital " + h1 +
          " efficiency units per worker. Economy B has " + L2 + " workers with average human capital " + h2 +
          " efficiency units per worker.</p><p>(a) Calculate H for each economy. (b) Which has more effective labour? (c) Explain why worker quality matters, not just the number of workers. (d) How does education policy affect H?</p>",
        correct: EQS.num(H1, 0) + " efficiency units",
        wrong: [EQS.num(H1 * 1.5, 0) + " efficiency units", EQS.num(H1 * 0.5, 0) + " efficiency units", EQS.num(H2, 0) + " efficiency units"],
        answer: answer,
        explanation: "<p>H = L × h = " + EQS.num(H1, 0) + " for Economy A.</p>",
        trap: "Efficiency units multiply the number of workers by average human capital; do not add them.",
        rubric: ["Uses H = L × h", "Computes both economies", "Explains quality vs quantity"]
      });
    }
  });

  /* ---------- gap decomposition ---------- */
  EQS.registerNumeric({
    topic: "productivity",
    subtopic: "Decomposing gaps",
    difficulty: "hard",
    source: "Week 7 · Gap decomposition",
    gen: function () {
      const rows = [
        { c: "India", gdp: 13261, usTech: 24057 },
        { c: "China", gdp: 21394, usTech: 41838 },
        { c: "Ghana", gdp: 7497, usTech: 21407 },
        { c: "Pakistan", gdp: 15493, usTech: 20322 },
        { c: "Brazil", gdp: 28935, usTech: 45216 },
        { c: "Mexico", gdp: 38662, usTech: 54767 }
      ];
      const row = EQS.pick(rows);
      const us = 112517;
      const total = us / row.gdp;
      const tech = row.usTech / row.gdp;
      const kh = us / row.usTech;
      const prompt =
        "<p>US GDP per worker is " + EQS.money(us) + ". " + row.c + "'s GDP per worker is " + EQS.money(row.gdp) +
        ". If " + row.c + " had US technology but its own K and H, its GDP per worker would be " + EQS.money(row.usTech) +
        ". What is the K and H gap (the remaining gap with equal technology)?</p>";
      const answer =
        "<p>Total gap = US ÷ " + row.c + " = " + EQS.money(us) + " ÷ " + EQS.money(row.gdp) + " = " + EQS.num(total, 2) + "×.</p>" +
        "<p>Technology gap = " + row.c + " with US technology ÷ " + row.c + " today = " + EQS.money(row.usTech) + " ÷ " + EQS.money(row.gdp) + " = " + EQS.num(tech, 2) + "×.</p>" +
        "<p>K and H gap = US ÷ " + row.c + " with US technology = " + EQS.money(us) + " ÷ " + EQS.money(row.usTech) + " = <strong>" + EQS.num(kh, 2) + "×</strong>.</p>" +
        "<p>Check: " + EQS.num(tech, 2) + " × " + EQS.num(kh, 2) + " = " + EQS.num(tech * kh, 2) + " ≈ " + EQS.num(total, 2) + ".</p>";
      return EQS.numeric({
        topic: "productivity",
        subtopic: "Decomposing gaps",
        difficulty: "hard",
        source: "Week 7 · Gap decomposition",
        key: "gap-" + row.c + "-" + row.gdp,
        prompt: prompt,
        writtenPrompt:
          "<p>US GDP per worker is " + EQS.money(us) + ". " + row.c + "'s GDP per worker is " + EQS.money(row.gdp) +
          ". If " + row.c + " had US technology but its own K and H, its GDP per worker would be " + EQS.money(row.usTech) +
          ".</p><p>(a) Calculate the total gap. (b) Calculate the technology gap. (c) Calculate the K and H gap. (d) Check that the two gaps multiply to the total. (e) Which gap is larger, and what does that imply for policy?</p>",
        correct: EQS.num(kh, 2) + "×",
        wrong: [EQS.num(tech, 2) + "×", EQS.num(total, 2) + "×", EQS.num(tech + kh, 2) + "×"],
        answer: answer,
        explanation: "<p>K and H gap = US ÷ country-with-US-technology = " + EQS.num(kh, 2) + "×.</p>",
        trap: "The K&H gap uses the country-with-US-technology level in the denominator, not the country's current level.",
        rubric: ["Computes total gap", "Computes technology gap", "Computes K&H gap and checks multiplication"]
      });
    }
  });

  /* ---------- growth rate ---------- */
  EQS.registerNumeric({
    topic: "growth",
    subtopic: "Growth rate",
    difficulty: "easy",
    source: "Week 9 · Growth",
    gen: function () {
      const y0 = EQS.ri(5, 80) * 1000;
      const pct = EQS.ri(5, 80) / 10;
      const y1 = Math.round(y0 * (1 + pct / 100));
      const actual = ((y1 - y0) / y0) * 100;
      const prompt =
        "<p>A country's real GDP per capita rises from " + EQS.money(y0) + " to " + EQS.money(y1) +
        ". What is the growth rate?</p>";
      const answer =
        "<p class='formula-line'>g = (y<sub>1</sub> − y<sub>0</sub>) ÷ y<sub>0</sub> × 100 = (" + EQS.money(y1) + " − " + EQS.money(y0) + ") ÷ " + EQS.money(y0) + " × 100 = <strong>" + EQS.pct(actual, 2) + "</strong></p>";
      return EQS.numeric({
        topic: "growth",
        subtopic: "Growth rate",
        difficulty: "easy",
        source: "Week 9 · Growth",
        key: "g-" + y0 + "-" + y1,
        prompt: prompt,
        writtenPrompt:
          "<p>A country's real GDP per capita rises from " + EQS.money(y0) + " to " + EQS.money(y1) +
          ".</p><p>(a) Calculate the growth rate. (b) Why is growth measured as a percentage change rather than a dollar change? (c) If another country's income rose by the same dollar amount from a much lower starting level, would its growth rate be higher or lower? Explain.</p>",
        correct: EQS.pct(actual, 2),
        wrong: [EQS.pct(actual + 5, 2), EQS.pct(Math.max(0, actual - 5), 2), EQS.pct(actual * 2, 2)],
        answer: answer,
        explanation: "<p>Growth rate = " + EQS.pct(actual, 2) + ".</p>",
        trap: "Divide the change by the starting level, not the ending level.",
        rubric: ["Uses the growth-rate formula", "Computes correctly", "Explains why percentages are used"]
      });
    }
  });

  /* ---------- exponential growth ---------- */
  EQS.registerNumeric({
    topic: "growth",
    subtopic: "Compounding",
    difficulty: "medium",
    source: "Week 9 · Compounding",
    gen: function () {
      const y0 = EQS.ri(5, 80) * 1000;
      const g = EQS.pick([1, 2, 3, 4, 5, 6, 7, 8]);
      const t = EQS.pick([10, 15, 20, 25, 30, 40]);
      const yt = Math.round(y0 * Math.pow(1 + g / 100, t));
      const prompt =
        "<p>A country's real GDP per capita is " + EQS.money(y0) + " today and grows at " + g +
        "% per year. What will it be in " + t + " years?</p>";
      const answer =
        "<p class='formula-line'>y<sub>t</sub> = (1 + g)<sup>t</sup> × y<sub>0</sub></p>" +
        "<p class='formula-line'>= (1 + " + (g / 100) + ")<sup>" + t + "</sup> × " + EQS.money(y0) + " = " +
        EQS.num(Math.pow(1 + g / 100, t), 3) + " × " + EQS.money(y0) + " ≈ <strong>" + EQS.money(yt) + "</strong></p>" +
        "<p>Adding " + g + "% × " + t + " = " + (g * t) + "% linearly would give " + EQS.money(y0 * (1 + (g * t) / 100)) +
        ", which ignores compounding.</p>";
      return EQS.numeric({
        topic: "growth",
        subtopic: "Compounding",
        difficulty: "medium",
        source: "Week 9 · Compounding",
        key: "exp-" + y0 + "-" + g + "-" + t,
        prompt: prompt,
        writtenPrompt:
          "<p>A country's real GDP per capita is " + EQS.money(y0) + " today and grows at " + g +
          "% per year.</p><p>(a) Calculate income after " + t + " years. (b) Calculate the total percentage increase. (c) Show the wrong linear answer and explain why it is wrong. (d) How long would it take income to double at this growth rate?</p>",
        correct: EQS.money(yt),
        wrong: [EQS.money(Math.round(y0 * (1 + (g * t) / 100))), EQS.money(Math.round(y0 * (1 + g / 100) * t)), EQS.money(yt * 2)],
        answer: answer,
        explanation: "<p>y<sub>t</sub> ≈ " + EQS.money(yt) + ".</p>",
        trap: "Compounding applies each year's growth to the new, larger base.",
        rubric: ["Uses the exponential formula", "Computes the level", "Contrasts with linear growth"]
      });
    }
  });

  /* ---------- rule of 70 ---------- */
  EQS.registerNumeric({
    topic: "growth",
    subtopic: "Rule of 70",
    difficulty: "easy",
    source: "Week 9 + 12 · Rule of 70",
    gen: function () {
      const mode = EQS.pick(["doubling", "growth"]);
      if (mode === "doubling") {
        const g = EQS.pick([1, 2, 3, 3.5, 4, 5, 6, 7, 8, 10]);
        const years = 70 / g;
        const prompt = "<p>At a growth rate of " + g + "% per year, how long does income take to double?</p>";
        const answer =
          "<p>Rule of 70:</p><p class='formula-line'>Doubling time ≈ 70 ÷ growth rate (%) = 70 ÷ " + g + " = <strong>" +
          EQS.num(years, 2) + " years</strong></p>" +
          "<p>At " + g + "% growth, the income level grows exponentially, so the doubling time is approximately constant regardless of the starting level.</p>";
        return EQS.numeric({
          topic: "growth",
          subtopic: "Rule of 70",
          difficulty: "easy",
          source: "Week 9 + 12 · Rule of 70",
          key: "r70d-" + g,
          prompt: prompt,
          writtenPrompt:
            "<p>At a growth rate of " + g + "% per year, how long does income take to double?</p><p>(a) Apply the Rule of 70. (b) If the growth rate fell to " +
            (g / 2).toFixed(1) + "%, how would the doubling time change? (c) Explain why the Rule of 70 is only an approximation.</p>",
          correct: EQS.num(years, 2) + " years",
          wrong: [EQS.num(years + 5, 2) + " years", EQS.num(years + 10, 2) + " years", EQS.num(years + 15, 2) + " years"],
          answer: answer,
          explanation: "<p>Doubling time ≈ 70/" + g + " = " + EQS.num(years, 2) + " years.</p>",
          trap: "Use the growth rate in percent, not as a decimal.",
          rubric: ["Applies Rule of 70", "Computes doubling time", "Explains the approximation"]
        });
      }
      const years = EQS.pick([10, 12, 14, 15, 20, 23, 25, 35, 40]);
      const g = 70 / years;
      const prompt = "<p>A country's income doubles in " + years + " years. What average annual growth rate does this imply?</p>";
      const answer =
        "<p>Rule of 70, rearranged:</p><p class='formula-line'>g ≈ 70 ÷ doubling time = 70 ÷ " + years + " = <strong>" +
        EQS.num(g, 2) + "% per year</strong></p>" +
        "<p>For comparison, the exact exponential formula gives (1+g)<sup>" + years + "</sup> = 2, so g = 2<sup>1/" + years + "</sup> − 1 = " +
        EQS.pct((Math.pow(2, 1 / years) - 1) * 100, 2) + " per year.</p>";
      return EQS.numeric({
        topic: "growth",
        subtopic: "Rule of 70",
        difficulty: "easy",
        source: "Week 9 + 12 · Rule of 70",
        key: "r70g-" + years,
        prompt: prompt,
        writtenPrompt:
          "<p>A country's income doubles in " + years + " years.</p><p>(a) Use the Rule of 70 to estimate the average annual growth rate. (b) Calculate the exact rate using the exponential formula. (c) Why do the two answers differ slightly?</p>",
        correct: EQS.num(g, 2) + "% per year",
        wrong: [EQS.num(g + 1, 2) + "% per year", EQS.num(g + 2, 2) + "% per year", EQS.num(g + 3, 2) + "% per year"],
        answer: answer,
        explanation: "<p>g ≈ 70/" + years + " = " + EQS.num(g, 2) + "% per year.</p>",
        trap: "Rearrange the Rule of 70 correctly: g = 70/doubling time.",
        rubric: ["Applies the rearranged rule", "Computes g", "Compares with the exact formula"]
      });
    }
  });

  /* ---------- growth accounting ---------- */
  EQS.registerNumeric({
    topic: "growth",
    subtopic: "Growth accounting",
    difficulty: "medium",
    source: "Week 9 + 12 · Growth accounting",
    gen: function () {
      const total = EQS.ri(20, 50) / 10;
      const k = EQS.ri(3, Math.round(total * 10 - 5)) / 10;
      const h = EQS.ri(1, Math.max(2, Math.round((total - k) * 10 - 2))) / 10;
      const A = Math.round((total - k - h) * 10) / 10;
      const share = Math.round((A / total) * 1000) / 10;
      let kNew = Math.round((k + EQS.ri(2, 5) / 10) * 10) / 10;
      const maxKNew = Math.floor((total - h - 0.2) * 10) / 10;
      if (kNew > maxKNew) kNew = maxKNew;
      if (kNew <= k) kNew = Math.floor((k + 0.1) * 10) / 10;
      const ANew = Math.round((total - kNew - h) * 10) / 10;
      const shareNew = Math.round((ANew / total) * 1000) / 10;
      const prompt =
        "<p>Over a decade, real GDP per hour grew " + total + "% per year. Growth accounting attributes " + k +
        " percentage points to physical capital and " + h + " percentage points to human capital. What is the contribution of technology?</p>";
      const answer =
        "<p>Technology is the residual:</p><p class='formula-line'>A = total − K − H = " + total + " − " + k + " − " + h + " = <strong>" + A + " percentage points</strong></p>" +
        "<p>Technology's share of growth = A ÷ total = " + A + " ÷ " + total + " = " + EQS.pct(share, 1) + ".</p>" +
        "<p>If capital's true contribution were " + kNew + " pp instead of " + k + " pp, then A = " + total + " − " + kNew + " − " + h +
        " = " + ANew + " pp, and technology's share would fall to " + EQS.pct(shareNew, 1) + ". The residual inherits any measurement error in K or H.</p>";
      return EQS.numeric({
        topic: "growth",
        subtopic: "Growth accounting",
        difficulty: "medium",
        source: "Week 9 + 12 · Growth accounting",
        key: "ga-" + total + "-" + k + "-" + h + "-" + kNew,
        prompt: prompt,
        writtenPrompt:
          "<p>Over a decade, real GDP per hour grew " + total + "% per year. Growth accounting attributes " + k +
          " percentage points to physical capital and " + h +
          " percentage points to human capital.</p><p>(a) Calculate technology's contribution. (b) Calculate technology's share of growth. (c) Recompute both if capital's true contribution was " +
          kNew + " pp. (d) Why does a measurement error in K change the estimate of A?</p>",
        correct: A + " percentage points",
        wrong: [share + "%", (total - k + h).toFixed(1) + " percentage points", (total + k + h).toFixed(1) + " percentage points"],
        answer: answer,
        explanation: "<p>A = " + total + " − " + k + " − " + h + " = " + A + " pp.</p>",
        trap: "Technology is the residual, not a directly measured input. Subtract both K and H from total growth.",
        rubric: ["Computes the residual", "Computes the share", "Recomputes with corrected K", "Explains the measurement issue"]
      });
    }
  });

  /* ---------- catch-up ---------- */
  EQS.registerNumeric({
    topic: "growth",
    subtopic: "Catch-up",
    difficulty: "hard",
    source: "Week 9 + 12 · Catch-up",
    gen: function () {
      const fraction = EQS.pick([0.1, 0.2, 0.25, 0.5]);
      const gP = EQS.pick([5, 6, 7, 8]);
      const gL = EQS.pick([1.5, 2, 2.5, 3]);
      const t = Math.log(1 / fraction) / Math.log((1 + gP / 100) / (1 + gL / 100));
      const prompt =
        "<p>Country P's income per person is " + (fraction * 100) + "% of Singapore's. P grows at " + gP +
        "% per year and Singapore grows at " + gL +
        "% per year. Write the catch-up equation and solve for the number of years until P catches up.</p>";
      const answer =
        "<p>Let Singapore's starting income be X. P starts at " + fraction + "X. Catch-up occurs when the two incomes are equal:</p>" +
        "<p class='formula-line'>" + fraction + "X(1 + " + (gP / 100) + ")<sup>t</sup> = X(1 + " + (gL / 100) + ")<sup>t</sup></p>" +
        "<p class='formula-line'>(" + EQS.num(1 + gP / 100, 4) + " / " + EQS.num(1 + gL / 100, 4) + ")<sup>t</sup> = " + (1 / fraction) + "</p>" +
        "<p class='formula-line'>t = ln(" + (1 / fraction) + ") ÷ ln(" + EQS.num((1 + gP / 100) / (1 + gL / 100), 4) + ") ≈ <strong>" +
        EQS.num(t, 1) + " years</strong></p>" +
        "<p>This assumes P can keep growing at " + gP + "% for the whole period. In practice, diminishing returns and the need to keep adopting technology may slow P as it catches up.</p>";
      return EQS.numeric({
        topic: "growth",
        subtopic: "Catch-up",
        difficulty: "hard",
        source: "Week 9 + 12 · Catch-up",
        key: "catchup-" + fraction + "-" + gP + "-" + gL,
        prompt: prompt,
        writtenPrompt:
          "<p>Country P's income per person is " + (fraction * 100) + "% of Singapore's. P grows at " + gP +
          "% per year and Singapore grows at " + gL +
          "% per year.</p><p>(a) Write an equation for the year t when P catches up. (b) Solve for t. (c) What conditions must hold for P to keep growing at " +
          gP + "% for that long? (d) Why is the answer likely optimistic?</p>",
        correct: EQS.num(t, 1) + " years",
        wrong: [EQS.num(t * 2, 1) + " years", EQS.num(t / 2, 1) + " years", EQS.num((gP - gL) * 10, 1) + " years"],
        answer: answer,
        explanation: "<p>t = ln(1/fraction)/ln((1+gP)/(1+gL)) ≈ " + EQS.num(t, 1) + " years.</p>",
        trap: "Use the ratio of growth factors, not the difference in growth rates.",
        rubric: ["Writes the catch-up equation", "Solves with logs", "Discusses conditions and optimism"]
      });
    }
  });

  /* ---------- saving and investment ---------- */
  EQS.registerNumeric({
    topic: "growth",
    subtopic: "Saving",
    difficulty: "easy",
    source: "Week 9 · Saving",
    gen: function () {
      const Y = EQS.ri(300, 900);
      const C = EQS.ri(150, Y - 80);
      const G = EQS.ri(40, 160);
      const S = Y - C - G;
      const NX = EQS.ri(-60, 80);
      const I = S - NX;
      const prompt =
        "<p>In an economy, GDP is " + EQS.money(Y) + " billion, consumption is " + EQS.money(C) +
        " billion, government spending is " + EQS.money(G) + " billion, and net exports are " + EQS.money(NX) +
        " billion. What is national saving?</p>";
      const answer =
        "<p class='formula-line'>S = Y − C − G = " + EQS.money(Y) + " − " + EQS.money(C) + " − " + EQS.money(G) + " = <strong>" + EQS.money(S) + " billion</strong></p>" +
        "<p>In an open economy, S − I = NX, so investment = S − NX = " + EQS.money(S) + " − (" + EQS.money(NX) + ") = " + EQS.money(I) + " billion.</p>" +
        "<p>" + (S > I ? "Saving exceeds investment, so the country lends the surplus abroad and runs a current account surplus." : "Investment exceeds saving, so the country borrows from abroad.") + "</p>";
      return EQS.numeric({
        topic: "growth",
        subtopic: "Saving",
        difficulty: "easy",
        source: "Week 9 · Saving",
        key: "save-" + Y + "-" + C + "-" + G + "-" + NX,
        prompt: prompt,
        writtenPrompt:
          "<p>In an economy, GDP is " + EQS.money(Y) + " billion, consumption is " + EQS.money(C) +
          " billion, government spending is " + EQS.money(G) + " billion, and net exports are " + EQS.money(NX) +
          " billion.</p><p>(a) Calculate national saving. (b) Calculate investment using S − I = NX. (c) Is the country a net lender or borrower? (d) How does this differ from a closed economy?</p>",
        correct: EQS.money(S) + " billion",
        wrong: [EQS.money(I) + " billion", EQS.money(Y - C) + " billion", EQS.money(S + NX) + " billion"],
        answer: answer,
        explanation: "<p>S = Y − C − G = " + EQS.money(S) + " billion.</p>",
        trap: "National saving subtracts both consumption and government spending.",
        rubric: ["Uses S = Y − C − G", "Uses S − I = NX", "Interprets lender/borrower"]
      });
    }
  });
})(typeof window !== "undefined" ? window : globalThis);
