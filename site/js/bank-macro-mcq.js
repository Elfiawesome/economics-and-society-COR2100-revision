/* Conceptual MCQ bank: macroeconomics. */
(function (g) {
  const EQS = g.EQS;

  EQS.addMcqBank("macro-measurement", [
    {
      q: "GDP is best defined as:",
      correct: "The market value of all final goods and services produced within a country during a given period.",
      wrong: [
        "The market value of all goods and services sold within a country, including imports.",
        "The total wealth owned by a country's residents.",
        "The total income earned by a country's citizens anywhere in the world."
      ],
      why: "GDP is a flow measure of current production inside the country's borders, valued at market prices and counting final goods only.",
      difficulty: "easy",
      subtopic: "GDP definition"
    },
    {
      q: "The production, expenditure and income approaches to GDP:",
      correct: "Measure the same economic activity and should give the same total, apart from statistical discrepancies.",
      wrong: ["Measure different things and should never be compared.", "Only the expenditure approach is valid.", "Apply only to closed economies."],
      why: "Every dollar of production is a dollar of expenditure and a dollar of income generated, as shown by the circular flow.",
      difficulty: "easy",
      subtopic: "Three approaches"
    },
    {
      q: "Which expenditure component includes a newly built condominium purchased by a household?",
      correct: "Investment (I).",
      wrong: ["Consumption (C).", "Government expenditure (G).", "Net exports (NX)."],
      why: "New residential construction is investment. A resale home is not current production and is excluded.",
      difficulty: "easy",
      subtopic: "Expenditure components"
    },
    {
      q: "Which of the following is excluded from GDP?",
      correct: "A resale HDB flat.",
      wrong: ["A newly built HDB flat.", "A haircut purchased at a salon.", "A meal bought at a restaurant."],
      why: "Resale of an existing asset is not current production; only the newly built flat is counted.",
      difficulty: "easy",
      subtopic: "What counts"
    },
    {
      q: "Government transfer payments such as GST vouchers are:",
      correct: "Excluded from G because they are not payments for currently produced goods and services.",
      wrong: ["Included in G because they are government spending.", "Included in C because households spend them.", "Included in net exports."],
      why: "Transfers redistribute income; they do not purchase goods or services in the current period.",
      difficulty: "easy",
      subtopic: "Expenditure components"
    },
    {
      q: "Imports are subtracted in GDP because:",
      correct: "They may already appear in C, I or G but were not produced domestically.",
      wrong: ["Imports reduce domestic production one-for-one.", "Imports are never consumed.", "Imports are counted as government spending."],
      why: "Subtracting imports removes spending on goods produced abroad, leaving expenditure on domestic production.",
      difficulty: "medium",
      subtopic: "Expenditure components"
    },
    {
      q: "A Singapore resident earns wages in Indonesia. Those wages are part of:",
      correct: "Indonesia's GDP and Singapore's GNI.",
      wrong: ["Singapore's GDP and Indonesia's GNI.", "Singapore's GDP only.", "Neither GDP nor GNI."],
      why: "GDP counts production by location; GNI counts income by residency. The work is in Indonesia, but the earner is a Singapore resident.",
      difficulty: "medium",
      subtopic: "GDP vs GNI"
    },
    {
      q: "GDP per capita is:",
      correct: "GDP divided by population, an average measure that says nothing about distribution.",
      wrong: ["The income of the median household.", "A measure of wealth rather than production.", "GDP adjusted for inflation but not for population."],
      why: "GDP per capita is a rough average living-standard measure; it does not show how income is shared.",
      difficulty: "easy",
      subtopic: "GDP per capita"
    },
    {
      q: "Nominal GDP values production using:",
      correct: "Current-year prices.",
      wrong: ["Base-year prices.", "Constant prices.", "The GDP deflator."],
      why: "Nominal GDP = current prices × current quantities. Real GDP uses constant base-year prices.",
      difficulty: "easy",
      subtopic: "Real vs nominal"
    },
    {
      q: "Real GDP is used to measure economic growth because it:",
      correct: "Removes the effect of price changes, isolating changes in the volume of production.",
      wrong: ["Includes the effect of inflation.", "Measures the price level directly.", "Counts only exports."],
      why: "Real GDP holds prices constant, so changes reflect quantities produced rather than price changes.",
      difficulty: "easy",
      subtopic: "Real vs nominal"
    },
    {
      q: "The GDP deflator is:",
      correct: "Nominal GDP ÷ real GDP × 100.",
      wrong: ["Real GDP ÷ nominal GDP × 100.", "The CPI minus inflation.", "Nominal GDP ÷ population."],
      why: "The deflator compares current-price output with base-price output, giving a price index for domestically produced goods.",
      difficulty: "easy",
      subtopic: "GDP deflator"
    },
    {
      q: "The CPI differs from the GDP deflator because the CPI:",
      correct: "Uses a consumer basket that can include imports, while the deflator covers domestically produced output.",
      wrong: ["Covers only government spending.", "Excludes food and housing.", "Is always lower than the deflator."],
      why: "The CPI tracks the cost of a representative consumer basket, which includes imported goods; the deflator tracks prices of domestic production.",
      difficulty: "medium",
      subtopic: "CPI vs deflator"
    },
    {
      q: "Inflation falls from 6% to 2%. This means:",
      correct: "Prices are still rising, but more slowly.",
      wrong: ["Prices are falling.", "Prices are unchanged.", "The price level has fallen by 4%."],
      why: "Inflation is the percentage change in the price level. Lower positive inflation still means a rising price level.",
      difficulty: "easy",
      subtopic: "Inflation"
    },
    {
      q: "Value added is:",
      correct: "A firm's sales revenue minus its purchases of intermediate goods from other firms.",
      wrong: ["A firm's total sales revenue.", "Sales revenue minus wages.", "Profit plus fixed cost."],
      why: "Summing value added avoids double counting intermediate goods, because each firm's contribution is counted once.",
      difficulty: "easy",
      subtopic: "Production approach"
    },
    {
      q: "GDP is a flow variable, while wealth is:",
      correct: "A stock variable.",
      wrong: ["Also a flow variable.", "A price index.", "A measure of income inequality."],
      why: "GDP measures production per period (a flow); wealth is the value of assets at a point in time (a stock).",
      difficulty: "easy",
      subtopic: "GDP concept"
    },
    {
      q: "Which activity is NOT captured in official GDP?",
      correct: "A parent caring for their own child at home.",
      wrong: ["A paid babysitter caring for a child.", "A restaurant meal.", "A new bridge built by the government."],
      why: "Unpaid household production is not a market transaction and is excluded, even though it produces valuable services.",
      difficulty: "easy",
      subtopic: "GDP limitations"
    },
    {
      q: "In a closed economy with no government, saving equals:",
      correct: "Y − C, which also equals investment.",
      wrong: ["Y + C.", "C − Y.", "Government spending minus taxes."],
      why: "Output is consumed or invested: Y = C + I. Income is consumed or saved: Y = C + S. Therefore I = S = Y − C.",
      difficulty: "medium",
      subtopic: "Saving"
    },
    {
      q: "Singapore's exports can exceed its GDP because:",
      correct: "Exports measure gross value sold abroad, while GDP measures value added domestically after subtracting imported inputs.",
      wrong: ["Singapore's GDP excludes services.", "Exports are counted twice in GDP.", "Singapore has no imports."],
      why: "Singapore imports many intermediate components, processes or re-exports them. Gross trade flows are much larger than domestic value added.",
      difficulty: "medium",
      subtopic: "Open economy"
    }
  ]);

  EQS.addMcqBank("productivity", [
    {
      q: "GDP per capita is calculated as:",
      correct: "GDP divided by population.",
      wrong: ["GDP divided by the number of workers.", "GDP divided by hours worked.", "GDP multiplied by population."],
      why: "GDP per capita is output per person. Output per worker and output per hour are different productivity measures.",
      difficulty: "easy",
      subtopic: "Measuring prosperity"
    },
    {
      q: "Why do economists use PPP rather than market exchange rates to compare living standards?",
      correct: "PPP adjusts for differences in the cost of living across countries.",
      wrong: ["PPP uses official exchange rates, which are more stable.", "PPP ignores prices and measures only income.", "PPP corrects for population differences."],
      why: "Market exchange rates ignore that the same basket of goods costs different amounts in different countries, and they fluctuate for financial reasons.",
      difficulty: "medium",
      subtopic: "PPP"
    },
    {
      q: "A country's GDP per capita is 200,000 zeds. A Big Mac costs 25 zeds locally and $5 in the US. PPP-adjusted GDP per capita is:",
      correct: "$40,000",
      wrong: ["$20,000", "$8,000", "$50,000"],
      why: "PPP value = local income × (US price ÷ local price) = 200,000 × (5 ÷ 25) = $40,000.",
      difficulty: "medium",
      subtopic: "PPP"
    },
    {
      q: "If a country's PPP-adjusted GDP per capita is higher than its exchange-rate GDP per capita, this suggests:",
      correct: "Prices in that country are lower than in the United States.",
      wrong: ["Prices in that country are higher than in the United States.", "The currency has appreciated.", "The country produces more than its accounts record."],
      why: "PPP income is worth more because each unit of local currency buys more locally than the market exchange rate implies.",
      difficulty: "medium",
      subtopic: "PPP"
    },
    {
      q: "Productivity is defined as:",
      correct: "The value of goods and services a worker produces per hour of work.",
      wrong: ["GDP divided by population.", "The number of workers employed.", "The total value of output."],
      why: "Productivity is output per unit of work input, commonly GDP per hour worked.",
      difficulty: "easy",
      subtopic: "Productivity"
    },
    {
      q: "Income per person can be decomposed as productivity × hours per worker × share of people working. Sustained increases in income per person must mainly come from:",
      correct: "Higher productivity.",
      wrong: ["Longer hours per worker without limit.", "A rising share of the population working without limit.", "A larger population."],
      why: "Hours per worker and the employment share cannot rise indefinitely. Long-run living-standard growth is driven by productivity.",
      difficulty: "medium",
      subtopic: "Productivity"
    },
    {
      q: "In the aggregate production function Y = A × F(K, H):",
      correct: "K is physical capital, H is total efficiency units of labour, and A is technology.",
      wrong: ["K is technology, H is human capital, and A is physical capital.", "K is consumption, H is investment, and A is government spending.", "K is the capital stock, H is hours worked, and A is population."],
      why: "Y = A F(K,H): physical capital K and efficiency units of labour H are combined using technology A.",
      difficulty: "easy",
      subtopic: "Production function"
    },
    {
      q: "Total efficiency units of labour are calculated as:",
      correct: "H = L × h, where L is the number of workers and h is average human capital per worker.",
      wrong: ["H = L + h.", "H = K × A.", "H = L ÷ h."],
      why: "A smaller but more skilled workforce can supply as many efficiency units as a larger, less-skilled one.",
      difficulty: "easy",
      subtopic: "Human capital"
    },
    {
      q: "Diminishing marginal product means that:",
      correct: "Each additional unit of an input adds less output than the previous unit, holding other inputs fixed.",
      wrong: ["Total output falls as more input is added.", "Each additional unit adds more output than the previous unit.", "Output is unrelated to inputs."],
      why: "The marginal contribution falls, even though total output can still rise.",
      difficulty: "easy",
      subtopic: "Diminishing returns"
    },
    {
      q: "Better technology affects the production function by:",
      correct: "Shifting the entire function upward, so the same K and H produce more output.",
      wrong: ["Moving the economy along the existing function.", "Reducing the amount of capital available.", "Lowering total efficiency units of labour."],
      why: "Technology multiplies the output obtainable from any combination of inputs, shifting the whole function up.",
      difficulty: "medium",
      subtopic: "Technology"
    },
    {
      q: "The US–India gap in GDP per worker is about 8.5×. India with US technology would be about 1.8× richer. The remaining K and H gap is about:",
      correct: "4.7×",
      wrong: ["1.8×", "8.5×", "15.3×"],
      why: "Total gap = technology gap × K&H gap, so 8.5 = 1.8 × 4.7.",
      difficulty: "medium",
      subtopic: "Decomposing gaps"
    },
    {
      q: "Which statement about the sources of productivity is correct?",
      correct: "Physical capital, human capital and technology all raise output per worker.",
      wrong: ["Only physical capital matters.", "Human capital is measured by the number of machines.", "Technology is another name for the capital stock."],
      why: "The three proximate sources of productivity are physical capital, human capital and technology.",
      difficulty: "easy",
      subtopic: "Sources of productivity"
    },
    {
      q: "Two mechanics use identical equipment, but one is more experienced. The experienced mechanic produces more because of:",
      correct: "Higher human capital.",
      wrong: ["More physical capital.", "Better technology.", "A larger labour force."],
      why: "Human capital is the knowledge, skills and experience that make workers more productive.",
      difficulty: "easy",
      subtopic: "Human capital"
    }
  ]);

  EQS.addMcqBank("growth", [
    {
      q: "Economic growth is usually measured as:",
      correct: "The annual percentage change in real GDP per capita.",
      wrong: ["The annual change in nominal GDP.", "The annual change in the price level.", "The annual change in the population."],
      why: "Growth refers to rising real output per person over time, so price changes and population changes are removed.",
      difficulty: "easy",
      subtopic: "Growth rate"
    },
    {
      q: "A country's real GDP per capita rises from $10,000 to $13,000. Its growth rate is:",
      correct: "30%",
      wrong: ["3%", "13%", "130%"],
      why: "Growth rate = (13,000 − 10,000) ÷ 10,000 × 100 = 30%.",
      difficulty: "easy",
      subtopic: "Growth rate"
    },
    {
      q: "Why does compounding make a small difference in growth rates matter so much over time?",
      correct: "Each year's growth applies to the new, larger base, so gains build on past gains.",
      wrong: ["Growth is added to the original base each year.", "Prices always rise faster than output.", "Population growth is constant."],
      why: "Exponential growth applies the rate to the current level, so sustained differences produce large income gaps.",
      difficulty: "medium",
      subtopic: "Compounding"
    },
    {
      q: "The Rule of 70 says that doubling time is approximately:",
      correct: "70 ÷ annual growth rate in percent.",
      wrong: ["70 × annual growth rate.", "Annual growth rate ÷ 70.", "70 − annual growth rate."],
      why: "At g% growth, doubling takes about 70/g years. At 2%, about 35 years.",
      difficulty: "easy",
      subtopic: "Rule of 70"
    },
    {
      q: "A country grows at 2% per year. Its income doubles in about:",
      correct: "35 years.",
      wrong: ["14 years.", "70 years.", "140 years."],
      why: "Rule of 70: 70 ÷ 2 = 35 years.",
      difficulty: "easy",
      subtopic: "Rule of 70"
    },
    {
      q: "Growth accounting attributes total growth in GDP per hour to:",
      correct: "Contributions from physical capital, human capital and technology.",
      wrong: ["Only physical capital.", "Only government spending.", "Only population growth."],
      why: "Growth accounting splits growth into measurable K and H contributions, with technology as the residual.",
      difficulty: "easy",
      subtopic: "Growth accounting"
    },
    {
      q: "GDP per hour grew 3.0%; capital contributed 1.2 pp and human capital 0.4 pp. Technology's contribution is:",
      correct: "1.4 percentage points.",
      wrong: ["0.8 percentage points.", "3.0 percentage points.", "4.6 percentage points."],
      why: "A = total − K − H = 3.0 − 1.2 − 0.4 = 1.4 pp.",
      difficulty: "easy",
      subtopic: "Growth accounting"
    },
    {
      q: "Technology's share of growth in the previous question is about:",
      correct: "47%.",
      wrong: ["14%", "33%", "60%"],
      why: "Share = 1.4 ÷ 3.0 ≈ 0.47, or 47%.",
      difficulty: "easy",
      subtopic: "Growth accounting"
    },
    {
      q: "Why can capital accumulation alone not sustain long-run growth?",
      correct: "Diminishing returns mean each extra unit of capital adds less output, and the investment share cannot rise forever.",
      wrong: ["Capital is never productive.", "Technology has diminishing returns but capital does not.", "Saving always equals zero."],
      why: "With diminishing marginal product, adding capital at a constant pace yields smaller output gains. The investment share also has an upper limit.",
      difficulty: "medium",
      subtopic: "Diminishing returns"
    },
    {
      q: "The engine of long-run growth is:",
      correct: "Technological progress.",
      wrong: ["A permanently rising investment share.", "Population growth alone.", "A fixed capital stock."],
      why: "Technology raises output from the same inputs and can continue to generate new ideas, avoiding the limits of capital accumulation.",
      difficulty: "easy",
      subtopic: "Technology"
    },
    {
      q: "In a closed economy with no government, investment equals:",
      correct: "Saving.",
      wrong: ["Consumption.", "Government spending.", "Net exports."],
      why: "Y = C + I and Y = C + S, so I = S.",
      difficulty: "easy",
      subtopic: "Saving"
    },
    {
      q: "In an open economy, if saving exceeds investment (S > I), the country:",
      correct: "Lends the extra saving abroad and runs a current account surplus (NX > 0).",
      wrong: ["Borrows from abroad and runs a deficit.", "Must have zero net exports.", "Has negative saving."],
      why: "S − I = NX. If S > I, net exports are positive and the country is a net lender.",
      difficulty: "medium",
      subtopic: "Saving"
    },
    {
      q: "The Malthusian trap describes a world where:",
      correct: "Productivity gains raise population rather than long-run income per person.",
      wrong: ["Technological progress permanently raises living standards.", "Capital accumulation has no limits.", "Population growth is always zero."],
      why: "Before the Industrial Revolution, higher output led to population growth, pushing income per person back toward subsistence.",
      difficulty: "medium",
      subtopic: "Growth history"
    },
    {
      q: "Catch-up growth is:",
      correct: "Rapid growth by poorer countries adopting technologies and methods already used by richer countries.",
      wrong: ["Growth at the technological frontier through new inventions.", "Growth caused only by population increase.", "Growth that is guaranteed for every poor country."],
      why: "Adoption can be faster and cheaper than invention. Examples include Singapore, South Korea and Chile, but catch-up is not automatic.",
      difficulty: "easy",
      subtopic: "Catch-up"
    },
    {
      q: "Sustained growth at the technological frontier is primarily driven by:",
      correct: "New ideas and innovation.",
      wrong: ["Copying existing technologies.", "Raising the investment share indefinitely.", "Increasing the number of workers indefinitely."],
      why: "At the frontier there is little left to copy, so long-run growth depends on creating new technology.",
      difficulty: "medium",
      subtopic: "Growth patterns"
    },
    {
      q: "Which statement about growth and poverty is best supported by the evidence?",
      correct: "Faster-growing countries tend to have larger reductions in poverty, but correlation is not causation and distribution matters.",
      wrong: ["Growth always benefits everyone equally.", "Growth never reduces poverty.", "Poverty reduction causes all growth."],
      why: "The data show a negative relationship between growth and changes in poverty, but other factors and distribution also matter.",
      difficulty: "medium",
      subtopic: "Growth and poverty"
    },
    {
      q: "On a log scale, a constant growth rate appears as:",
      correct: "A straight line whose slope is the growth rate.",
      wrong: ["A horizontal line.", "A curve that steepens without limit.", "A vertical line."],
      why: "A proportional scale makes equal percentage changes equal distances, so constant growth is linear.",
      difficulty: "medium",
      subtopic: "Log scale"
    },
    {
      q: "A production function has diminishing marginal product. If capital K is doubled while H and A are fixed, output will:",
      correct: "Increase by less than double.",
      wrong: ["Double exactly.", "More than double.", "Stay the same."],
      why: "Each extra unit of capital adds less output than the previous one, so doubling K raises output by less than 2×.",
      difficulty: "medium",
      subtopic: "Production function"
    },
    {
      q: "With Y = A × K^(1/3) × H^(2/3), doubling both K and H causes output to:",
      correct: "Double exactly.",
      wrong: ["Increase by less than double.", "More than double.", "Stay the same."],
      why: "2^(1/3) × 2^(2/3) = 2^(1) = 2. The exponents sum to 1, giving constant returns to scale in K and H.",
      difficulty: "hard",
      subtopic: "Production function"
    }
  ]);

  EQS.addMcqBank("institutions", [
    {
      q: "The proximate causes of prosperity are:",
      correct: "Physical capital, human capital and technology.",
      wrong: ["Geography, culture and institutions.", "Government spending, taxes and transfers.", "Population, prices and unemployment."],
      why: "Proximate causes directly raise GDP per capita. Fundamental causes explain why countries accumulate different amounts of them.",
      difficulty: "easy",
      subtopic: "Proximate vs fundamental"
    },
    {
      q: "The fundamental causes of prosperity considered in the course are:",
      correct: "Geography, culture and institutions.",
      wrong: ["Physical capital, human capital and technology.", "Consumption, investment and government spending.", "Saving, investment and net exports."],
      why: "Geography, culture and institutions are deeper explanations for differences in the proximate factors.",
      difficulty: "easy",
      subtopic: "Proximate vs fundamental"
    },
    {
      q: "The geography hypothesis claims that:",
      correct: "Differences in climate, ecology and disease environment ultimately explain prosperity differences.",
      wrong: ["Values and beliefs explain prosperity.", "Institutions and the rules of the game explain prosperity.", "Physical capital alone explains prosperity."],
      why: "Geography explanations emphasise climate, disease and ecology, often arguing that tropical regions are disadvantaged.",
      difficulty: "easy",
      subtopic: "Geography"
    },
    {
      q: "Max Weber's explanation of why northern Europe industrialized first is an example of:",
      correct: "The culture hypothesis.",
      wrong: ["The geography hypothesis.", "The institutions hypothesis.", "The technology hypothesis."],
      why: "Weber emphasised Protestant values, hard work and saving, which are cultural explanations.",
      difficulty: "easy",
      subtopic: "Culture"
    },
    {
      q: "Institutions are best described as:",
      correct: "The rules of the game that shape incentives and constrain behaviour.",
      wrong: ["The physical capital available in a country.", "The climate and natural resources of a country.", "The total amount of money in the economy."],
      why: "Institutions include property rights, courts, regulations and political rules that determine the payoffs to investment and innovation.",
      difficulty: "easy",
      subtopic: "Institutions"
    },
    {
      q: "Which is a feature of institutions?",
      correct: "They are chosen by people, constrain behaviour and shape incentives.",
      wrong: ["They are fixed by geography and cannot change.", "They have no effect on economic incentives.", "They are the same in every country."],
      why: "Institutions are socially chosen, constrain behaviour and work through incentives. Unlike geography, they can change.",
      difficulty: "easy",
      subtopic: "Institutions"
    },
    {
      q: "Inclusive economic institutions:",
      correct: "Protect property rights, enforce contracts and encourage competition and innovation.",
      wrong: ["Concentrate opportunities among a small elite.", "Weaken property rights to encourage sharing.", "Restrict entry to protect incumbents."],
      why: "Inclusive institutions create broad incentives to invest, innovate and start businesses.",
      difficulty: "easy",
      subtopic: "Inclusive vs extractive"
    },
    {
      q: "Extractive economic institutions:",
      correct: "Weaken property rights and restrict entry, reducing investment and innovation.",
      wrong: ["Guarantee equal opportunities for all.", "Always produce rapid growth.", "Eliminate the influence of elites."],
      why: "Extractive institutions let elites capture returns and block competition, weakening incentives to invest and innovate.",
      difficulty: "easy",
      subtopic: "Inclusive vs extractive"
    },
    {
      q: "Why is the division of the Korean peninsula treated as a natural experiment?",
      correct: "Geography and culture were broadly shared, while institutions diverged sharply.",
      wrong: ["Both countries changed geography but kept institutions.", "Both countries adopted identical institutions.", "Culture changed while institutions stayed the same."],
      why: "The two Koreas shared history, language and geography before the split, so the later income gap is strong evidence for institutions.",
      difficulty: "medium",
      subtopic: "Natural experiments"
    },
    {
      q: "Austria and Czechoslovakia diverged economically after 1948 and converged after 1989. This supports:",
      correct: "The institutions hypothesis, because geography and culture stayed broadly similar while institutions changed.",
      wrong: ["The geography hypothesis, because their climates differed.", "The culture hypothesis, because their religions changed in 1948.", "The view that institutions do not matter."],
      why: "The timing of divergence and convergence matched changes in economic institutions, not geography or culture.",
      difficulty: "medium",
      subtopic: "Natural experiments"
    },
    {
      q: "The reversal of fortune is evidence against the geography hypothesis because:",
      correct: "Places that were relatively rich around 1500 became relatively poor, even though their geography did not change.",
      wrong: ["Geography changed rapidly after 1500.", "Rich places stayed rich.", "Culture is fixed and cannot change."],
      why: "A fixed factor cannot explain a reversal in the ranking of prosperity. Colonisation changed institutions instead.",
      difficulty: "medium",
      subtopic: "Reversal of fortune"
    },
    {
      q: "Urbanisation in 1500 is used as a proxy for prosperity because:",
      correct: "Large towns could only exist where farmers produced a surplus to feed them.",
      wrong: ["All towns were equally rich.", "Urbanisation measures current GDP directly.", "Town dwellers grew all their own food."],
      why: "Before industrialisation, town populations depended on agricultural surpluses, making urbanisation a useful signal of productivity.",
      difficulty: "medium",
      subtopic: "Reversal of fortune"
    },
    {
      q: "European colonisers were more likely to build extractive institutions in:",
      correct: "Densely populated areas with resources to extract.",
      wrong: ["Sparsely populated areas where settlers farmed themselves.", "Areas with temperate climates and low disease.", "Areas where property rights were already secure."],
      why: "Dense populations provided labour and taxes to capture; sparsely populated lands attracted settlers who built more inclusive institutions.",
      difficulty: "medium",
      subtopic: "Colonial institutions"
    },
    {
      q: "Weak property rights in an economy shift the return-to-entrepreneurship curve:",
      correct: "Leftward, reducing the number of entrepreneurs.",
      wrong: ["Rightward, increasing the number of entrepreneurs.", "Upward, raising the opportunity cost.", "Not at all."],
      why: "If entrepreneurs cannot keep the returns from their ideas, the return to every idea falls, shifting the curve left.",
      difficulty: "medium",
      subtopic: "Entrepreneurship model"
    },
    {
      q: "Barriers to entry such as licences and permits:",
      correct: "Raise the cost of becoming an entrepreneur and reduce the number of entrepreneurs.",
      wrong: ["Lower the cost of entry and increase entrepreneurship.", "Shift the return curve right.", "Have no effect on the equilibrium number of entrepreneurs."],
      why: "Entry barriers add to the opportunity cost of starting a business, shifting the cost line up.",
      difficulty: "medium",
      subtopic: "Entrepreneurship model"
    },
    {
      q: "Political creative destruction refers to:",
      correct: "Economic progress creating new winners who may threaten existing political power, leading elites to resist innovation.",
      wrong: ["The destruction of physical capital in recessions.", "The replacement of bad institutions by good ones automatically.", "The tendency of new firms to fail."],
      why: "Elites who benefit from the status quo may block new technologies and businesses that threaten their wealth or power.",
      difficulty: "medium",
      subtopic: "Political institutions"
    },
    {
      q: "Which is NOT one of the main reasons foreign aid has often disappointed?",
      correct: "Aid projects are always too large to measure.",
      wrong: ["Aid is too small relative to the resources needed.", "Aid is often captured by corrupt officials.", "Aid can entrench extractive institutions."],
      why: "The course identifies aid being too small, captured, and institution-entrenching. Measurement difficulty is not one of the three main reasons.",
      difficulty: "medium",
      subtopic: "Foreign aid"
    },
    {
      q: "Randomised controlled trials (RCTs) are most useful for:",
      correct: "Testing whether specific programmes work, rather than testing a country's institutions.",
      wrong: ["Randomising a country's institutions.", "Proving that aid always works.", "Measuring long-run growth directly."],
      why: "RCTs compare treated and control groups for specific interventions. They cannot randomise national institutions and may face external-validity limits.",
      difficulty: "medium",
      subtopic: "Foreign aid"
    }
  ]);

  EQS.addMcqBank("policy", [
    {
      q: "Economic fluctuations (business cycles) are:",
      correct: "Short-run changes in the growth of GDP around its long-run trend.",
      wrong: ["Long-run changes in productivity.", "Changes in the price level only.", "The steady growth of potential GDP."],
      why: "Business cycles are the wiggles around the trend path of GDP, not the trend itself.",
      difficulty: "easy",
      subtopic: "Business cycles"
    },
    {
      q: "A technical recession is commonly defined as:",
      correct: "Two consecutive quarters of declining real GDP.",
      wrong: ["One quarter of slow growth.", "A rise in inflation for two quarters.", "A fall in the unemployment rate."],
      why: "The rule of thumb used in Singapore and elsewhere is two consecutive quarters of quarter-on-quarter real GDP decline.",
      difficulty: "easy",
      subtopic: "Recessions"
    },
    {
      q: "At the trough of a business cycle:",
      correct: "Real GDP is at its low point and unemployment is near its highest.",
      wrong: ["Real GDP is at its high point and unemployment is low.", "Inflation is always zero.", "Potential GDP has fallen permanently."],
      why: "The trough is the low point of the cycle, with output depressed and unemployment high.",
      difficulty: "easy",
      subtopic: "Business cycles"
    },
    {
      q: "Which variable is countercyclical?",
      correct: "The unemployment rate.",
      wrong: ["Consumption.", "Investment.", "Employment."],
      why: "Unemployment rises in recessions and falls in expansions, moving opposite to real GDP.",
      difficulty: "easy",
      subtopic: "Co-movement"
    },
    {
      q: "Investment is more volatile than consumption because:",
      correct: "Firms can postpone new factories, machinery and inventories when demand falls.",
      wrong: ["Households never change their spending.", "Investment is a fixed cost.", "Consumption is unrelated to income."],
      why: "Investment projects are postponable, so investment swings much more over the cycle than consumption.",
      difficulty: "medium",
      subtopic: "Co-movement"
    },
    {
      q: "Limited predictability of business cycles means that:",
      correct: "Turning points are hard to forecast because shocks are unexpected.",
      wrong: ["Recessions can be predicted perfectly.", "Expansions never end.", "Forecasts are always correct."],
      why: "Shocks such as pandemics or financial crises are unexpected, so even official forecasters revise only after data arrive.",
      difficulty: "easy",
      subtopic: "Predictability"
    },
    {
      q: "Persistence of fluctuations means that:",
      correct: "Growth tends to be followed by growth, and contraction by contraction.",
      wrong: ["Every recession is followed immediately by a boom.", "GDP changes are random each quarter.", "Unemployment is unrelated to output."],
      why: "Cycles have momentum: once an expansion or recession starts, it tends to continue for a while.",
      difficulty: "easy",
      subtopic: "Persistence"
    },
    {
      q: "A negative demand shock causes output to ______, unemployment to ______, and inflation to ______.",
      correct: "Fall; rise; fall",
      wrong: ["Fall; rise; rise", "Rise; fall; rise", "Rise; fall; fall"],
      why: "Lower spending reduces output and hiring, and weaker demand pulls inflation down.",
      difficulty: "medium",
      subtopic: "Shocks"
    },
    {
      q: "A negative supply shock causes output to ______, unemployment to ______, and inflation to ______.",
      correct: "Fall; rise; rise",
      wrong: ["Fall; rise; fall", "Rise; fall; rise", "Rise; fall; fall"],
      why: "Higher production costs reduce output and raise prices, creating a stagflationary combination.",
      difficulty: "medium",
      subtopic: "Shocks"
    },
    {
      q: "With downward-rigid wages, a negative labour demand shock mainly causes:",
      correct: "A fall in employment rather than a fall in wages.",
      wrong: ["A fall in wages rather than employment.", "No change in employment or wages.", "An increase in employment."],
      why: "If wages cannot fall, the labour market adjusts through lower employment.",
      difficulty: "medium",
      subtopic: "Labour market"
    },
    {
      q: "A multiplier means that:",
      correct: "An initial fall in spending triggers further falls, so the total effect is larger than the initial shock.",
      wrong: ["A shock has no effect beyond the first round.", "Government spending always crowds out all private spending.", "Inflation multiplies output one-for-one."],
      why: "Lost income leads to less spending at other firms, which leads to further layoffs and income losses.",
      difficulty: "medium",
      subtopic: "Multipliers"
    },
    {
      q: "Expansionary fiscal policy in a recession involves:",
      correct: "Increasing government spending, cutting taxes, or increasing transfers.",
      wrong: ["Cutting spending, raising taxes and cutting transfers.", "Raising interest rates.", "Letting the currency appreciate faster."],
      why: "Expansionary fiscal policy raises spending and incomes, increasing output and jobs.",
      difficulty: "easy",
      subtopic: "Fiscal policy"
    },
    {
      q: "To fight an overheating boom, the Fed would:",
      correct: "Raise interest rates, so borrowing and spending fall.",
      wrong: ["Lower interest rates, so borrowing and spending rise.", "Cut taxes.", "Buy government bonds."],
      why: "Contractionary monetary policy raises interest rates to cool spending and inflation.",
      difficulty: "easy",
      subtopic: "Monetary policy"
    },
    {
      q: "MAS uses the exchange rate rather than the interest rate because Singapore:",
      correct: "Is very open to trade and imports, so the value of the S$ strongly affects import prices and export demand.",
      wrong: ["Has no central bank.", "Does not trade with other countries.", "Cannot issue its own currency."],
      why: "With trade at over 300% of GDP, the exchange rate is the more powerful and reliable tool for price stability.",
      difficulty: "medium",
      subtopic: "Monetary policy"
    },
    {
      q: "Expansionary monetary policy through the exchange rate means MAS:",
      correct: "Lets the S$ strengthen more slowly or weaken, making exports cheaper and imports more expensive.",
      wrong: ["Lets the S$ strengthen faster, lowering import prices.", "Raises interest rates sharply.", "Sells S$ to make the currency appreciate faster."],
      why: "A weaker or more slowly appreciating S$ supports exports and raises imported inflation, which is expansionary.",
      difficulty: "medium",
      subtopic: "Monetary policy"
    },
    {
      q: "Contractionary monetary policy through the exchange rate means MAS:",
      correct: "Lets the S$ strengthen faster, lowering import prices but making exports more expensive.",
      wrong: ["Lets the S$ weaken, raising import prices.", "Cuts government spending.", "Lowers interest rates."],
      why: "Faster appreciation reduces imported inflation and cools export demand, which is contractionary.",
      difficulty: "medium",
      subtopic: "Monetary policy"
    },
    {
      q: "A bank charges 5% nominal interest and firms expect prices to fall 2%. The expected real interest rate is:",
      correct: "7%",
      wrong: ["3%", "5%", "−2%"],
      why: "Real rate = nominal − expected inflation = 5% − (−2%) = 7%. Expected deflation makes borrowing more expensive in real terms.",
      difficulty: "medium",
      subtopic: "Real interest rate"
    },
    {
      q: "With a demand shock, expansionary policy:",
      correct: "Can improve both unemployment and inflation, so there is no difficult trade-off.",
      wrong: ["Improves unemployment but worsens inflation.", "Worsens unemployment but improves inflation.", "Cannot affect either."],
      why: "A demand-driven recession has low inflation; stimulating spending raises output and jobs while bringing inflation back toward normal.",
      difficulty: "medium",
      subtopic: "Policy trade-offs"
    },
    {
      q: "With a supply shock, policymakers face a trade-off because:",
      correct: "Fighting unemployment with stimulus worsens inflation, while fighting inflation with contraction worsens unemployment.",
      wrong: ["Both inflation and unemployment fall together.", "Neither inflation nor unemployment responds to policy.", "Supply shocks never affect output."],
      why: "A supply shock raises inflation and unemployment together, so policy cannot improve both at once with demand tools.",
      difficulty: "medium",
      subtopic: "Policy trade-offs"
    },
    {
      q: "Policy lags are a problem because:",
      correct: "Recognition, decision and implementation take time, so stimulus may arrive after the economy has recovered.",
      wrong: ["Policy has no effect on the economy.", "Forecasts are always accurate.", "Taxes are always immediate."],
      why: "Badly timed stimulus can overheat an economy that is already recovering.",
      difficulty: "easy",
      subtopic: "Policy limits"
    },
    {
      q: "When the Fed buys government bonds from banks:",
      correct: "Banks hold more cash, so interest rates tend to fall.",
      wrong: ["Banks hold less cash, so interest rates rise.", "The government raises taxes.", "The exchange rate must appreciate."],
      why: "Buying bonds injects cash into the banking system, increasing the supply of loanable funds and lowering interest rates.",
      difficulty: "easy",
      subtopic: "Monetary policy"
    },
    {
      q: "Procyclical policy is dangerous because it:",
      correct: "Moves with the cycle, spending freely in booms and cutting back in slumps, making fluctuations larger.",
      wrong: ["Always reduces the size of booms and busts.", "Is the same as countercyclical policy.", "Only affects the long-run growth rate."],
      why: "Countercyclical policy leans against the cycle; procyclical policy amplifies it.",
      difficulty: "easy",
      subtopic: "Countercyclical policy"
    }
  ]);
})(typeof window !== "undefined" ? window : globalThis);
