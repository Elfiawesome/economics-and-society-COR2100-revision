/* Procedural generators: Week 1 foundations. */
(function (g) {
  const EQS = g.EQS;

  const names = ["Aisha", "Wei Ling", "Marcus", "Priya", "Javier", "Nurul", "Chen", "Rahul", "Sofia", "Ethan", "Mei", "Arjun", "Hafiz", "Chloe", "Daniel"];
  const firms = ["Grab", "Foodpanda", "Shopee", "FairPrice", "Singtel", "Uniqlo", "Starbucks", "Toast Box", "Decathlon", "Courts"];

  EQS.registerNumeric({
    topic: "foundations",
    subtopic: "Opportunity cost",
    difficulty: "easy",
    source: "Week 1 · Quiz 1 style",
    gen: function () {
      const name = EQS.pick(names);
      const offer = EQS.ri(48, 90) * 1000;
      const alt1 = EQS.ri(30, offer / 1000 - 4) * 1000;
      let alt2 = EQS.ri(28, offer / 1000 - 6) * 1000;
      if (alt2 === alt1) alt2 = alt1 - 4000;
      if (alt2 < 20000) alt2 = 20000;
      const bestAlt = Math.max(alt1, alt2);
      const worstAlt = Math.min(alt1, alt2);
      const prompt =
        "<p>" + name + " has three job offers: Job A pays " + EQS.money(offer) + " per year, Job B pays " +
        EQS.money(alt1) + ", and Job C pays " + EQS.money(alt2) + ". " + name +
        " accepts Job A. What is the opportunity cost of accepting Job A?</p>";
      const answer =
        "<p>The opportunity cost is the value of the <strong>best alternative forgone</strong>, not the sum of all alternatives. The best alternative is the higher of Job B and Job C: " +
        EQS.money(bestAlt) + " per year.</p><p>Job A pays " + EQS.money(offer) +
        ", which is " + EQS.money(offer - bestAlt) + " more than the next-best offer, so accepting Job A has a positive net benefit relative to the best alternative.</p>";
      return EQS.numeric({
        topic: "foundations",
        subtopic: "Opportunity cost",
        difficulty: "easy",
        source: "Week 1 · Quiz 1 style",
        key: "oc-jobs-" + offer + "-" + alt1 + "-" + alt2,
        prompt: prompt,
        writtenPrompt:
          "<p>" + name + " has three job offers: Job A pays " + EQS.money(offer) + " per year, Job B pays " +
          EQS.money(alt1) + ", and Job C pays " + EQS.money(alt2) + ". " + name +
          " accepts Job A.</p><p>(a) What is the opportunity cost of accepting Job A? (b) Explain why it is not the sum of Job B and Job C. (c) What is the net benefit of choosing Job A over the best alternative?</p>",
        correct: EQS.money(bestAlt) + " per year",
        wrong: [EQS.money(alt1 + alt2) + " per year", EQS.money(worstAlt) + " per year", EQS.money(offer) + " per year"],
        answer: answer,
        explanation: "<p>Opportunity cost = best alternative forgone = " + EQS.money(bestAlt) + ". The sum of B and C is irrelevant because " + name + " can only take one alternative.</p>",
        trap: "Do not add up all alternatives; only the single best alternative matters.",
        rubric: ["Identifies the best alternative", "Does not sum alternatives", "Computes the net benefit correctly"]
      });
    }
  });

  EQS.registerNumeric({
    topic: "foundations",
    subtopic: "Opportunity cost",
    difficulty: "medium",
    source: "Week 1 · Quiz 1 style",
    gen: function () {
      const name = EQS.pick(names);
      const trainFare = EQS.ri(20, 120);
      const trainTime = EQS.ri(2, 6);
      const driveFuel = EQS.ri(40, 160);
      const driveTime = trainTime + EQS.ri(1, 3);
      const timeValue = EQS.ri(12, 60);
      const trainCost = trainFare + trainTime * timeValue;
      const driveCost = driveFuel + driveTime * timeValue;
      let cheaper, cheaperCost, otherCost, saving;
      if (trainCost < driveCost) {
        cheaper = "train"; cheaperCost = trainCost; otherCost = driveCost;
      } else if (driveCost < trainCost) {
        cheaper = "drive"; cheaperCost = driveCost; otherCost = trainCost;
      } else {
        cheaper = "train"; cheaperCost = trainCost; otherCost = driveCost;
      }
      saving = Math.abs(trainCost - driveCost);
      const prompt =
        "<p>" + name + " is choosing between the train and driving. The train fare is " + EQS.money(trainFare) +
        " and takes " + trainTime + " hours. Driving uses " + EQS.money(driveFuel) + " of fuel and takes " + driveTime +
        " hours. " + name + "'s opportunity cost of time is " + EQS.money(timeValue) +
        " per hour. What is the total economic cost of the <strong>cheaper</strong> option, and how much does it save compared with the other option?</p>";
      const correct = EQS.money(cheaperCost) + "; saves " + EQS.money(saving);
      const answer =
        "<p>Train total cost = fare + time cost = " + EQS.money(trainFare) + " + (" + trainTime + " × " + EQS.money(timeValue) + ") = " + EQS.money(trainCost) + ".</p>" +
        "<p>Driving total cost = fuel + time cost = " + EQS.money(driveFuel) + " + (" + driveTime + " × " + EQS.money(timeValue) + ") = " + EQS.money(driveCost) + ".</p>" +
        "<p>The " + cheaper + " is cheaper, at " + EQS.money(cheaperCost) + ". It saves " + EQS.money(saving) +
        " compared with the other option.</p><p>The money fare or fuel cost alone is not the full economic cost: the time spent travelling also has an opportunity cost.</p>";
      return EQS.numeric({
        topic: "foundations",
        subtopic: "Opportunity cost",
        difficulty: "medium",
        source: "Week 1 · Quiz 1 style",
        key: "oc-travel-" + trainFare + "-" + trainTime + "-" + driveFuel + "-" + driveTime + "-" + timeValue,
        prompt: prompt,
        writtenPrompt:
          "<p>" + name + " is choosing between the train and driving. The train fare is " + EQS.money(trainFare) +
          " and takes " + trainTime + " hours. Driving uses " + EQS.money(driveFuel) + " of fuel and takes " + driveTime +
          " hours. " + name + "'s opportunity cost of time is " + EQS.money(timeValue) +
          " per hour.</p><p>(a) Calculate the total economic cost of each option. (b) Which option is cheaper, and by how much? (c) If the value of time rose to " +
          EQS.money(timeValue + 30) + " per hour, would the decision change? Show the new costs.</p>",
        correct: correct,
        wrong: [
          EQS.money(otherCost) + "; saves " + EQS.money(saving),
          EQS.money(cheaperCost) + "; saves " + EQS.money(saving + 20),
          EQS.money(trainFare + driveFuel) + "; saves " + EQS.money(saving)
        ],
        answer: answer,
        explanation: "<p>Include the opportunity cost of time in both options. The " + cheaper + " has the lower total cost by " + EQS.money(saving) + ".</p>",
        trap: "A lower money price does not always mean a lower economic cost once time is valued.",
        rubric: ["Includes time cost in both totals", "Computes both total costs", "Chooses the cheaper option and states the saving"]
      });
    }
  });

  EQS.registerNumeric({
    topic: "foundations",
    subtopic: "Opportunity cost",
    difficulty: "medium",
    source: "Week 1 · Optimization",
    gen: function () {
      const name = EQS.pick(names);
      const hours = EQS.ri(4, 12);
      const gigPay = EQS.ri(30, 70) * hours;
      const altWage = EQS.ri(12, 45);
      const oc = hours * altWage;
      const net = gigPay - oc;
      const prompt =
        "<p>" + name + " is offered a freelance gig: " + hours + " hours of work for " + EQS.money(gigPay) +
        ". The alternative is working those hours at a part-time job that pays " + EQS.money(altWage) +
        " per hour. What is the net benefit of taking the gig?</p>";
      const answer =
        "<p>Opportunity cost of the gig = forgone part-time wages = " + hours + " × " + EQS.money(altWage) + " = " + EQS.money(oc) + ".</p>" +
        "<p>Net benefit = benefit − opportunity cost = " + EQS.money(gigPay) + " − " + EQS.money(oc) + " = " + EQS.money(net) + ".</p>" +
        "<p>" + (net >= 0 ? "Because net benefit is positive, taking the gig is the optimal choice on these figures." : "Because net benefit is negative, " + name + " should keep the part-time job unless there are non-monetary benefits.") + "</p>";
      return EQS.numeric({
        topic: "foundations",
        subtopic: "Optimization",
        difficulty: "medium",
        source: "Week 1 · Optimization",
        key: "gig-" + hours + "-" + gigPay + "-" + altWage,
        prompt: prompt,
        writtenPrompt:
          "<p>" + name + " is offered a freelance gig: " + hours + " hours of work for " + EQS.money(gigPay) +
          ". The alternative is working those hours at a part-time job that pays " + EQS.money(altWage) +
          " per hour.</p><p>(a) What is the opportunity cost of taking the gig? (b) Calculate the net benefit. (c) Should " +
          name + " take the gig? Explain using the decision rule.</p>",
        correct: EQS.money(net),
        wrong: [EQS.money(gigPay), EQS.money(oc), EQS.money(gigPay + oc)],
        answer: answer,
        explanation: "<p>Net benefit = gig pay − forgone wages = " + EQS.money(gigPay) + " − " + EQS.money(oc) + " = " + EQS.money(net) + ".</p>",
        trap: "The gig pay is not the gain; the gain is net of the wages given up.",
        rubric: ["Calculates forgone wages", "Subtracts opportunity cost from the gig pay", "Applies the benefit > cost rule"]
      });
    }
  });

  EQS.registerNumeric({
    topic: "foundations",
    subtopic: "Models and evidence",
    difficulty: "easy",
    source: "Week 1 · Returns to education",
    gen: function () {
      const name = EQS.pick(names);
      const startWage = EQS.ri(12, 30);
      const growthPct = EQS.pick([5, 6, 8, 10, 12, 15, 20]);
      const years = EQS.ri(2, 6);
      const factor = Math.pow(1 + growthPct / 100, years);
      const finalWage = Math.round(startWage * factor * 100) / 100;
      const pctIncrease = Math.round((factor - 1) * 1000) / 10;
      const prompt =
        "<p>A model assumes that each additional year of education raises a worker's wage by " + growthPct +
        "%. " + name + " currently earns " + EQS.money(startWage) + " per hour and completes " + years +
        " additional years of education. According to the model, what is " + name + "'s new hourly wage?</p>";
      const answer =
        "<p>The effect compounds: each year's increase applies to the new, higher wage.</p><p>New wage = " +
        EQS.money(startWage) + " × (1 + " + (growthPct / 100) + ")^" + years + " = " + EQS.money(startWage) + " × " +
        EQS.num(factor, 4) + " = <strong>" + EQS.money(finalWage, 2) + "</strong> per hour.</p>" +
        "<p>This is a " + EQS.pct(pctIncrease, 1) + " increase over the starting wage. Adding " + growthPct + "% × " + years +
        " = " + (growthPct * years) + "% would ignore compounding and understate the effect.</p>";
      return EQS.numeric({
        topic: "foundations",
        subtopic: "Models and evidence",
        difficulty: "easy",
        source: "Week 1 · Returns to education",
        key: "edu-" + startWage + "-" + growthPct + "-" + years,
        prompt: prompt,
        writtenPrompt:
          "<p>A model assumes that each additional year of education raises a worker's wage by " + growthPct +
          "%. " + name + " currently earns " + EQS.money(startWage) + " per hour and completes " + years +
          " additional years of education.</p><p>(a) Calculate the new hourly wage. (b) Calculate the percentage increase. (c) Explain why a simple linear calculation (" +
          growthPct + "% × " + years + ") gives the wrong answer.</p>",
        correct: EQS.money(finalWage, 2) + " per hour",
        wrong: [
          EQS.money(Math.round(startWage * (1 + (growthPct * years) / 100) * 100) / 100, 2) + " per hour",
          EQS.money(startWage + growthPct * years, 2) + " per hour",
          EQS.money(Math.round(startWage * (1 + growthPct / 100) * 100) / 100, 2) + " per hour"
        ],
        answer: answer,
        explanation: "<p>Use the exponential growth formula " + EQS.money(startWage) + " × (1 + g)^t. The correct wage is " + EQS.money(finalWage, 2) + " per hour.</p>",
        trap: "Education returns compound; do not simply add the percentages.",
        rubric: ["Uses the compounding formula", "Computes the new wage", "Explains why linear addition is wrong"]
      });
    }
  });

  EQS.registerNumeric({
    topic: "foundations",
    subtopic: "Cost-benefit",
    difficulty: "easy",
    source: "Week 1 · Optimization",
    gen: function () {
      const name = EQS.pick(names);
      const benefit = EQS.ri(200, 900);
      const cost = EQS.ri(100, 800);
      const net = benefit - cost;
      const prompt =
        "<p>" + name + " is considering a project with a total benefit of " + EQS.money(benefit) +
        " and a total opportunity cost of " + EQS.money(cost) + ". What is the net benefit, and should " + name +
        " undertake the project?</p>";
      const correct = EQS.money(net) + (net >= 0 ? "; yes" : "; no");
      const answer =
        "<p>Net benefit = benefit − opportunity cost = " + EQS.money(benefit) + " − " + EQS.money(cost) + " = " + EQS.money(net) + ".</p>" +
        "<p>The decision rule is to take an action only if benefit ≥ opportunity cost. " +
        (net >= 0 ? "Because net benefit is non-negative, " + name + " should undertake the project." : "Because net benefit is negative, " + name + " should not undertake the project.") + "</p>";
      return EQS.numeric({
        topic: "foundations",
        subtopic: "Cost-benefit",
        difficulty: "easy",
        source: "Week 1 · Optimization",
        key: "cb-" + benefit + "-" + cost,
        prompt: prompt,
        writtenPrompt:
          "<p>" + name + " is considering a project with a total benefit of " + EQS.money(benefit) +
          " and a total opportunity cost of " + EQS.money(cost) + ".</p><p>(a) Calculate the net benefit. (b) Should " +
          name + " undertake the project? State the decision rule. (c) Would your answer change if the opportunity cost rose by " +
          EQS.money(EQS.ri(50, 200)) + "? Explain.</p>",
        correct: correct,
        wrong: [EQS.money(benefit) + "; yes", EQS.money(cost) + "; no", EQS.money(benefit + cost) + "; yes"],
        answer: answer,
        explanation: "<p>Net benefit = " + EQS.money(net) + ". The project is worthwhile if net benefit is non-negative.</p>",
        trap: "Do not confuse total benefit with net benefit.",
        rubric: ["Computes net benefit", "Applies the benefit ≥ cost rule", "Interprets the sign correctly"]
      });
    }
  });
})(typeof window !== "undefined" ? window : globalThis);
