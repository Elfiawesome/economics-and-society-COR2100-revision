/* Conceptual MCQ bank: microeconomics. */
(function (g) {
  const EQS = g.EQS;

  EQS.addMcqBank("foundations", [
    {
      q: "Opportunity cost is best defined as:",
      correct: "The value of the best alternative that is given up when a choice is made.",
      wrong: [
        "The total value of every alternative that is given up.",
        "The money actually paid for the chosen option.",
        "The value of the chosen option minus its money price."
      ],
      why: "Opportunity cost is the next-best alternative forgone, not the sum of all alternatives and not necessarily a money amount.",
      difficulty: "easy",
      subtopic: "Opportunity cost"
    },
    {
      q: "A graduate has job offers of $45,000, $32,000 and $28,000. What is the opportunity cost of accepting the $45,000 job?",
      correct: "$32,000",
      wrong: ["$28,000", "$60,000", "$45,000"],
      why: "The opportunity cost is the best alternative forgone, which is the $32,000 offer.",
      difficulty: "easy",
      subtopic: "Opportunity cost"
    },
    {
      q: "You are offered an unpaid one-week internship. Your alternative is working at a cafe for $600 that week. What is the opportunity cost of the internship?",
      correct: "$600 of forgone cafe wages",
      wrong: ["$0, because the internship is unpaid", "$600 plus the value of the internship", "The tuition fees paid for university"],
      why: "Opportunity cost measures what the best alternative would have yielded. The internship being unpaid does not make its opportunity cost zero.",
      difficulty: "easy",
      subtopic: "Opportunity cost"
    },
    {
      q: "Which of the following is a normative statement?",
      correct: "The government should tax sugary drinks to improve public health.",
      wrong: [
        "A sugary-drink tax would reduce consumption.",
        "A sugary-drink tax would raise the price of drinks.",
        "Lower-income households spend a larger share of income on food."
      ],
      why: "\"Should\" statements involve values or judgements. The others are positive claims that can be tested with evidence.",
      difficulty: "easy",
      subtopic: "Positive vs normative"
    },
    {
      q: "Which topic is studied by microeconomists rather than macroeconomists?",
      correct: "How a single firm sets the price of its product.",
      wrong: ["The economy-wide inflation rate.", "National income accounting.", "Why the country's GDP growth slowed."],
      why: "Microeconomics studies individual decision-makers and individual markets; the others are economy-wide aggregates.",
      difficulty: "easy",
      subtopic: "Micro vs macro"
    },
    {
      q: "Scarcity in economics means that:",
      correct: "Wants are unlimited relative to limited resources, so choices must be made.",
      wrong: [
        "Everyone is poor.",
        "Some goods are unavailable because of a temporary shortage.",
        "Money is the only scarce resource."
      ],
      why: "Scarcity is the universal condition of unlimited wants and limited resources; it is not the same as poverty or a temporary shortage.",
      difficulty: "easy",
      subtopic: "Scarcity"
    },
    {
      q: "In equilibrium, given everyone else's choices, no one has an incentive to change their behaviour. This is the principle of:",
      correct: "Equilibrium",
      wrong: ["Optimization", "Empiricism", "Scarcity"],
      why: "Equilibrium describes a situation in which choices are mutually consistent, so no individual wants to deviate.",
      difficulty: "easy",
      subtopic: "Three principles"
    },
    {
      q: "Cows with names produce more milk than unnamed cows. A farmer who names cows also provides better care. The omitted variable is:",
      correct: "The quality of care provided by the farmer.",
      wrong: ["The cow's name.", "Milk production.", "The number of cows."],
      why: "Better care drives both naming and milk output. The name itself does not cause higher production.",
      difficulty: "medium",
      subtopic: "Causation vs correlation"
    },
    {
      q: "Gamblers over 65 are found to be healthier than non-gamblers over 65. Which explanation is reverse causality?",
      correct: "Healthier elderly people are more able to go to a casino.",
      wrong: [
        "Gambling directly improves health.",
        "An omitted variable such as income drives both gambling and health.",
        "The data are measured with error."
      ],
      why: "The proposed cause (gambling) may actually be the effect of better health: healthier people can travel and socialise.",
      difficulty: "medium",
      subtopic: "Causation vs correlation"
    },
    {
      q: "A small number of very high incomes raises the mean income far above the median. Which statement is TRUE?",
      correct: "The median is a more robust measure of the typical income than the mean.",
      wrong: [
        "The mean and median must be equal.",
        "The median rises by more than the mean when an outlier is added.",
        "The mean is unaffected by extreme values."
      ],
      why: "Skewed data pull the mean strongly, while the median stays near the middle observation.",
      difficulty: "easy",
      subtopic: "Mean vs median"
    },
    {
      q: "The UK raised the school leaving age in 1947, letting researchers compare students who could leave at 14 with those required to stay to 15. This is an example of:",
      correct: "A natural experiment.",
      wrong: ["A controlled laboratory experiment.", "An argument by anecdote.", "A normative statement."],
      why: "A policy change outside the researcher's control created treatment and control groups, which is the defining feature of a natural experiment.",
      difficulty: "medium",
      subtopic: "Evidence"
    },
    {
      q: "A model is useful in economics because it:",
      correct: "Simplifies reality enough to generate predictions that can be tested with data.",
      wrong: [
        "Describes every detail of the real world.",
        "Proves a normative conclusion.",
        "Eliminates the need for data."
      ],
      why: "Models are simplified descriptions of reality. Their predictions are compared with data, as in the returns-to-education model.",
      difficulty: "easy",
      subtopic: "Models"
    },
    {
      q: "A student says: \"My uncle dropped out of school and became a millionaire, so education does not matter.\" This is:",
      correct: "An argument by anecdote, because one case is used to dismiss a broad pattern.",
      wrong: [
        "A natural experiment.",
        "A valid causal inference because the uncle is a real data point.",
        "A positive statement about the average return to education."
      ],
      why: "A single story cannot overturn a statistical pattern based on many observations.",
      difficulty: "easy",
      subtopic: "Evidence"
    },
    {
      q: "Which sequence describes the scientific method in economics?",
      correct: "Build a model, derive a prediction, collect data, compare the prediction with the data.",
      wrong: [
        "Collect data, ignore theory, state an opinion.",
        "State a normative view, then look for anecdotes that support it.",
        "Build a model and assume it is true without testing it."
      ],
      why: "The course's scientific method is model → prediction/hypothesis → data → comparison.",
      difficulty: "easy",
      subtopic: "Models"
    }
  ]);

  EQS.addMcqBank("demand-supply", [
    {
      q: "Which market is closest to perfect competition?",
      correct: "Wholesale 24-karat gold",
      wrong: ["Cars sold by different brands", "Breakfast cereal", "Electricity transmission in Singapore"],
      why: "Gold is a homogeneous commodity and individual buyers or sellers cannot influence the market price. Cars, cereal and electricity transmission are differentiated or concentrated markets.",
      difficulty: "easy",
      subtopic: "Perfect competition"
    },
    {
      q: "The price of a good falls. On its own, this causes:",
      correct: "A movement down along the demand curve, with quantity demanded rising.",
      wrong: [
        "A rightward shift of the demand curve.",
        "A leftward shift of the demand curve.",
        "A movement along the supply curve only."
      ],
      why: "A change in the good's own price changes quantity demanded and is shown as a movement along the demand curve, not a shift.",
      difficulty: "easy",
      subtopic: "Movements vs shifts"
    },
    {
      q: "Consumers' incomes rise and the good is normal. What happens to demand?",
      correct: "Demand shifts right.",
      wrong: ["Demand shifts left.", "There is a movement up along demand.", "Demand does not change."],
      why: "For a normal good, higher income increases demand at every price, shifting the demand curve right.",
      difficulty: "easy",
      subtopic: "Demand shifters"
    },
    {
      q: "Consumers' incomes rise and the good is inferior. What happens to demand?",
      correct: "Demand shifts left.",
      wrong: ["Demand shifts right.", "There is a movement down along demand.", "Demand does not change."],
      why: "For an inferior good, higher income leads consumers to buy less, shifting demand left.",
      difficulty: "easy",
      subtopic: "Demand shifters"
    },
    {
      q: "The price of coffee rises. What happens in the market for tea, a substitute?",
      correct: "Demand for tea shifts right.",
      wrong: ["Demand for tea shifts left.", "Quantity demanded of tea rises along the curve.", "Supply of tea shifts right."],
      why: "A higher price for a substitute makes tea relatively more attractive, increasing demand for tea at every price.",
      difficulty: "easy",
      subtopic: "Related goods"
    },
    {
      q: "The price of printers rises. What happens in the market for printer ink, a complement?",
      correct: "Demand for ink shifts left.",
      wrong: ["Demand for ink shifts right.", "Demand for ink is unchanged.", "Supply of ink shifts left."],
      why: "Printers and ink are used together. Pricier printers reduce the demand for ink at every price.",
      difficulty: "easy",
      subtopic: "Related goods"
    },
    {
      q: "The price of tapioca pearls, an input in bubble tea, rises. What happens to the supply of bubble tea?",
      correct: "Supply shifts left, raising the equilibrium price and lowering the equilibrium quantity.",
      wrong: [
        "Supply shifts right, lowering price and raising quantity.",
        "Demand shifts left.",
        "Supply does not change because the price of bubble tea has not changed."
      ],
      why: "Higher input costs reduce supply at every price. The leftward supply shift raises price and reduces quantity.",
      difficulty: "medium",
      subtopic: "Supply shifters"
    },
    {
      q: "A new automated brewing machine lowers the cost of producing bubble tea. What happens?",
      correct: "Supply shifts right, lowering price and raising quantity.",
      wrong: [
        "Supply shifts left, raising price and lowering quantity.",
        "Demand shifts right.",
        "The supply curve is unchanged; only quantity supplied rises."
      ],
      why: "A cost-saving technology increases supply at every price, shifting supply right.",
      difficulty: "easy",
      subtopic: "Supply shifters"
    },
    {
      q: "Demand shifts right and supply does not change. Compared with the initial equilibrium, the new equilibrium has:",
      correct: "A higher price and a higher quantity.",
      wrong: ["A lower price and a higher quantity.", "A higher price and a lower quantity.", "A lower price and a lower quantity."],
      why: "A rightward demand shift moves the equilibrium up along an upward-sloping supply curve, raising both price and quantity.",
      difficulty: "easy",
      subtopic: "Equilibrium changes"
    },
    {
      q: "Supply shifts left and demand does not change. What happens to equilibrium price and quantity?",
      correct: "Price rises and quantity falls.",
      wrong: ["Price falls and quantity rises.", "Price rises and quantity rises.", "Price falls and quantity falls."],
      why: "A leftward supply shift moves the equilibrium up along a downward-sloping demand curve: higher price, lower quantity.",
      difficulty: "easy",
      subtopic: "Equilibrium changes"
    },
    {
      q: "Demand and supply both shift right. Which outcome is unambiguous?",
      correct: "Equilibrium quantity rises; the price change is ambiguous.",
      wrong: [
        "Equilibrium price rises; the quantity change is ambiguous.",
        "Both price and quantity definitely rise.",
        "Both price and quantity definitely fall."
      ],
      why: "Both shifts raise quantity. Demand raises price while supply lowers it, so the price effect depends on the relative sizes of the shifts.",
      difficulty: "medium",
      subtopic: "Both curves shift"
    },
    {
      q: "Demand shifts left and supply shifts right. Which outcome is unambiguous?",
      correct: "Equilibrium price falls; the quantity change is ambiguous.",
      wrong: [
        "Equilibrium quantity falls; the price change is ambiguous.",
        "Both price and quantity definitely rise.",
        "Both price and quantity definitely fall."
      ],
      why: "Both shifts push price down. Demand lowers quantity while supply raises it, so quantity is ambiguous.",
      difficulty: "medium",
      subtopic: "Both curves shift"
    },
    {
      q: "At a price below the equilibrium price, the market has:",
      correct: "Excess demand, or a shortage.",
      wrong: ["Excess supply, or a surplus.", "Equilibrium because price is low.", "No quantity traded."],
      why: "Below equilibrium, quantity demanded exceeds quantity supplied, creating a shortage.",
      difficulty: "easy",
      subtopic: "Equilibrium"
    },
    {
      q: "The market demand curve is obtained by:",
      correct: "Adding the quantities demanded by all buyers at each price.",
      wrong: [
        "Averaging the prices each buyer is willing to pay.",
        "Adding the prices each buyer is willing to pay.",
        "Adding the quantities only for buyers with the highest willingness to pay."
      ],
      why: "Market demand is the horizontal sum of individual demand curves: at each price, add quantities.",
      difficulty: "easy",
      subtopic: "Market demand"
    },
    {
      q: "The height of the demand curve at a given quantity represents:",
      correct: "The willingness to pay for that marginal unit.",
      wrong: ["The seller's minimum acceptable price.", "The average cost of production.", "The total surplus."],
      why: "At each quantity, the demand curve's height is the buyer's marginal willingness to pay for that unit.",
      difficulty: "easy",
      subtopic: "Willingness to pay"
    },
    {
      q: "Which event shifts the supply curve rather than causing a movement along it?",
      correct: "A fall in the price of an input used to produce the good.",
      wrong: ["A fall in the price of the good itself.", "An increase in the quantity demanded.", "A change in the good's own price."],
      why: "Input prices are a supply shifter. A change in the good's own price only moves the firm along its supply curve.",
      difficulty: "easy",
      subtopic: "Movements vs shifts"
    }
  ]);

  EQS.addMcqBank("elasticity", [
    {
      q: "Demand is elastic when the absolute value of the price elasticity of demand is:",
      correct: "Greater than 1.",
      wrong: ["Equal to 1.", "Less than 1.", "Equal to 0."],
      why: "|Ed| > 1 means quantity demanded changes proportionally more than price.",
      difficulty: "easy",
      subtopic: "Price elasticity"
    },
    {
      q: "Price rises from $25 to $50 and quantity demanded falls from 4 to 3 units. Using initial values, the price elasticity of demand is:",
      correct: "−0.25",
      wrong: ["−4", "−1", "−0.75"],
      why: "%ΔQ = (3−4)/4 = −25%; %ΔP = (50−25)/25 = +100%; Ed = −25%/100% = −0.25. Demand is inelastic.",
      difficulty: "medium",
      subtopic: "Calculating elasticity"
    },
    {
      q: "A good has inelastic demand. If its price rises, total consumer spending on the good will:",
      correct: "Rise, because quantity falls proportionally less than price rises.",
      wrong: ["Fall, because quantity falls.", "Stay exactly the same.", "Fall to zero."],
      why: "With inelastic demand, the price effect dominates the quantity effect, so P × Q rises.",
      difficulty: "medium",
      subtopic: "Elasticity and spending"
    },
    {
      q: "A good has elastic demand. If its price rises, total consumer spending will:",
      correct: "Fall, because quantity falls proportionally more than price rises.",
      wrong: ["Rise, because price is higher.", "Stay the same.", "Rise at first and then fall."],
      why: "With elastic demand, the quantity effect dominates, so P × Q falls when price rises.",
      difficulty: "medium",
      subtopic: "Elasticity and spending"
    },
    {
      q: "The cross-price elasticity of demand for good A with respect to the price of good B is +1.2. Goods A and B are:",
      correct: "Substitutes.",
      wrong: ["Complements.", "Unrelated.", "Inferior goods."],
      why: "A positive cross-price elasticity means a higher price for B raises demand for A, which is the definition of substitutes.",
      difficulty: "easy",
      subtopic: "Cross-price elasticity"
    },
    {
      q: "The price of printers rises and the demand for printer ink falls. The cross-price elasticity is:",
      correct: "Negative, so the goods are complements.",
      wrong: ["Positive, so the goods are substitutes.", "Zero, so the goods are unrelated.", "Negative, so ink is an inferior good."],
      why: "Goods used together have negative cross-price elasticity: a higher price for one reduces demand for the other.",
      difficulty: "easy",
      subtopic: "Cross-price elasticity"
    },
    {
      q: "Household income rises 10% and demand for restaurant meals rises 15%. The income elasticity is:",
      correct: "+1.5, so the good is a normal luxury.",
      wrong: ["+0.67, so the good is a normal necessity.", "−0.67, so the good is inferior.", "+1.5, so the good is inferior."],
      why: "Income elasticity = 15%/10% = +1.5. Positive and greater than 1 identifies a normal luxury.",
      difficulty: "easy",
      subtopic: "Income elasticity"
    },
    {
      q: "Income rises 10% and demand for instant noodles falls 2%. Instant noodles are:",
      correct: "An inferior good with income elasticity −0.2.",
      wrong: ["A normal necessity with income elasticity +0.2.", "A normal luxury with income elasticity −5.", "A substitute good with cross-price elasticity −0.2."],
      why: "Income elasticity = −2%/10% = −0.2. A negative income elasticity identifies an inferior good.",
      difficulty: "easy",
      subtopic: "Income elasticity"
    },
    {
      q: "You are told that the price of a related good changed and you must measure the response of demand for another good. Which elasticity should you use?",
      correct: "Cross-price elasticity of demand.",
      wrong: ["Price elasticity of demand.", "Income elasticity of demand.", "Price elasticity of supply."],
      why: "Cross-price elasticity measures how the quantity demanded of one good responds to a change in the price of another good.",
      difficulty: "easy",
      subtopic: "Choosing elasticity"
    },
    {
      q: "Which good is likely to have the most elastic demand?",
      correct: "A brand of bottled water with many close substitutes.",
      wrong: ["Insulin for a diabetic patient.", "Table salt, a tiny share of the budget.", "Petrol in the very short run."],
      why: "More close substitutes, a larger budget share and more time to adjust all make demand more elastic.",
      difficulty: "easy",
      subtopic: "Determinants"
    },
    {
      q: "As consumers have more time to adjust to a price change, demand typically becomes:",
      correct: "More elastic.",
      wrong: ["More inelastic.", "Perfectly inelastic.", "Unaffected by time."],
      why: "With more time, consumers can find substitutes and change their habits, so quantity responds more.",
      difficulty: "easy",
      subtopic: "Determinants"
    },
    {
      q: "The price elasticity of supply is 2. If price rises by 200%, quantity supplied changes by:",
      correct: "+400%",
      wrong: ["+200%", "+100%", "+50%"],
      why: "%ΔQs = Es × %ΔP = 2 × 200% = 400%.",
      difficulty: "medium",
      subtopic: "Supply elasticity"
    },
    {
      q: "At the same price and quantity, demand curve A is flatter than demand curve B. Which statement is correct?",
      correct: "Demand A is more elastic than demand B at that point.",
      wrong: ["Demand A is less elastic than demand B.", "Both have the same elasticity because they cross.", "Demand A is perfectly inelastic."],
      why: "At a common point, a flatter demand curve represents a larger percentage quantity response to a given percentage price change, so it is more elastic.",
      difficulty: "medium",
      subtopic: "Elasticity and slope"
    },
    {
      q: "A vertical demand curve means demand is:",
      correct: "Perfectly inelastic; buyers bear the full burden of a tax.",
      wrong: ["Perfectly elastic; sellers bear the full tax burden.", "Unit elastic; the burden is shared equally.", "Elastic; quantity falls sharply when price rises."],
      why: "With zero quantity response, the price paid by buyers rises by the full amount of the tax, so buyers bear all of it.",
      difficulty: "hard",
      subtopic: "Elasticity and tax incidence"
    }
  ]);

  EQS.addMcqBank("consumer-choice", [
    {
      q: "A consumer has income $300, jeans cost $50 and sweaters cost $25. The budget constraint is:",
      correct: "50J + 25S = 300.",
      wrong: ["50S + 25J = 300.", "J + S = 300.", "75(J + S) = 300."],
      why: "Total spending on jeans and sweaters must equal income: Pj × J + Ps × S = income.",
      difficulty: "easy",
      subtopic: "Budget constraint"
    },
    {
      q: "With income $300 and jeans at $50, the maximum number of jeans the consumer can buy is:",
      correct: "6",
      wrong: ["12", "3", "50"],
      why: "The horizontal intercept is income ÷ price = 300 ÷ 50 = 6 jeans.",
      difficulty: "easy",
      subtopic: "Budget constraint"
    },
    {
      q: "Jeans cost $50 and sweaters cost $25. The opportunity cost of one pair of jeans is:",
      correct: "2 sweaters.",
      wrong: ["0.5 sweaters.", "$25.", "1 sweater."],
      why: "Opportunity cost is the price ratio: $50 ÷ $25 = 2 sweaters per pair of jeans.",
      difficulty: "easy",
      subtopic: "Opportunity cost"
    },
    {
      q: "Both jeans and sweaters double in price. The opportunity cost of jeans in terms of sweaters:",
      correct: "Does not change, because relative prices are unchanged.",
      wrong: ["Doubles.", "Halves.", "Falls by the same percentage as income."],
      why: "Opportunity cost is the ratio of prices. If both prices double, the ratio stays the same.",
      difficulty: "medium",
      subtopic: "Opportunity cost"
    },
    {
      q: "A consumer is choosing between rice and beans. MB per dollar is $7 for rice and $6 for beans. The consumer should:",
      correct: "Buy more rice and less beans until the marginal benefit per dollar is equalised.",
      wrong: ["Buy more beans and less rice.", "Stop buying both goods.", "Buy more of both goods regardless of budget."],
      why: "The consumer should shift spending toward the good with the higher marginal benefit per dollar.",
      difficulty: "easy",
      subtopic: "MB per dollar"
    },
    {
      q: "The optimal consumption bundle satisfies:",
      correct: "MBx / Px = MBy / Py, with the budget exhausted.",
      wrong: ["MBx = MBy regardless of prices.", "Px = Py.", "Total benefit is maximised by buying the cheapest good only."],
      why: "At the optimum, the marginal benefit per dollar spent is equalised across goods and the budget is used up.",
      difficulty: "medium",
      subtopic: "Optimal bundle"
    },
    {
      q: "Diminishing marginal benefit means that, as consumption of a good increases:",
      correct: "The benefit from each additional unit falls, so willingness to pay for another unit falls.",
      wrong: ["Total benefit falls.", "The price of the good falls.", "The consumer's income falls."],
      why: "Total benefit can still rise; it is the additional benefit that diminishes. This is why demand slopes downward.",
      difficulty: "easy",
      subtopic: "Marginal benefit"
    },
    {
      q: "You are willing to pay $100 for a concert ticket and the ticket costs $70. Your consumer surplus is:",
      correct: "$30",
      wrong: ["$70", "$100", "$130"],
      why: "Consumer surplus = willingness to pay − price paid = $100 − $70 = $30.",
      difficulty: "easy",
      subtopic: "Consumer surplus"
    },
    {
      q: "A consumer buys a good only if:",
      correct: "Willingness to pay is at least the price.",
      wrong: ["Willingness to pay is below the price.", "The price is zero.", "Consumer surplus is negative."],
      why: "A voluntary purchase requires WTP ≥ P; otherwise the buyer would lose surplus.",
      difficulty: "easy",
      subtopic: "Willingness to pay"
    },
    {
      q: "The price of a good falls. Consumer surplus from that good:",
      correct: "Rises, because buyers pay less and may buy more units.",
      wrong: ["Falls, because the price is lower.", "Is unchanged.", "Falls to zero."],
      why: "A lower price increases the gap between willingness to pay and price for existing units and brings in additional units.",
      difficulty: "easy",
      subtopic: "Consumer surplus"
    },
    {
      q: "An increase in income shifts the budget constraint:",
      correct: "Outward in a parallel shift, leaving the slope unchanged.",
      wrong: ["Inward in a parallel shift.", "By rotating around the horizontal intercept.", "By changing the opportunity cost of both goods."],
      why: "Higher income expands the affordable set proportionally; prices, and therefore the slope, are unchanged.",
      difficulty: "easy",
      subtopic: "Budget constraint"
    },
    {
      q: "The price of sweaters rises while income and the price of jeans stay constant. The budget constraint:",
      correct: "Pivots inward along the sweater axis, leaving the jeans intercept unchanged.",
      wrong: ["Shifts inward in parallel.", "Pivots outward along the sweater axis.", "Pivots inward along the jeans axis."],
      why: "A higher sweater price reduces the maximum number of sweaters affordable, but the maximum number of jeans is unchanged.",
      difficulty: "medium",
      subtopic: "Budget constraint"
    }
  ]);

  EQS.addMcqBank("costs-competition", [
    {
      q: "In the short run, which input is fixed?",
      correct: "A machine that cannot be purchased or installed immediately.",
      wrong: ["Temporary workers hired for a seasonal rush.", "Raw materials used in production.", "Electricity used by the machines."],
      why: "The short run is defined by at least one fixed factor of production; variable inputs can change with output.",
      difficulty: "easy",
      subtopic: "Short run"
    },
    {
      q: "Marginal product of labour is:",
      correct: "The change in total output from hiring one more worker.",
      wrong: ["Total output divided by the number of workers.", "The wage paid to the last worker.", "The change in total cost from producing one more unit."],
      why: "MP = ΔQ / ΔL. Average product is total output divided by workers.",
      difficulty: "easy",
      subtopic: "Production"
    },
    {
      q: "Diminishing marginal returns begin when:",
      correct: "The marginal product of each additional worker starts to fall.",
      wrong: ["Total output starts to fall.", "Marginal product becomes negative.", "Average product reaches zero."],
      why: "Diminishing returns begin when MP falls, not necessarily when total output falls.",
      difficulty: "medium",
      subtopic: "Diminishing returns"
    },
    {
      q: "The marginal cost curve crosses:",
      correct: "Both the AVC and ATC curves at their minimum points.",
      wrong: ["The AFC curve at its minimum.", "The ATC curve at its maximum.", "The demand curve at the equilibrium price."],
      why: "When MC is below an average, it pulls the average down; when MC is above, it pushes the average up. The crossing is at the minimum.",
      difficulty: "medium",
      subtopic: "Cost curves"
    },
    {
      q: "If marginal cost is less than average total cost, then average total cost is:",
      correct: "Falling.",
      wrong: ["Rising.", "At its minimum.", "Constant."],
      why: "The next unit costs less than the current average, so adding it lowers the average.",
      difficulty: "medium",
      subtopic: "Cost curves"
    },
    {
      q: "ATC equals:",
      correct: "AVC + AFC.",
      wrong: ["AVC − AFC.", "MC + AFC.", "Total cost × quantity."],
      why: "Total cost is fixed plus variable cost; dividing by quantity gives ATC = AVC + AFC.",
      difficulty: "easy",
      subtopic: "Cost curves"
    },
    {
      q: "A firm sells 30 units at $5 each, with fixed cost $100 and variable cost $20. Its profit is:",
      correct: "$30",
      wrong: ["$50", "$100", "$150"],
      why: "TR = 30 × $5 = $150. TC = $100 + $20 = $120. Profit = $150 − $120 = $30.",
      difficulty: "easy",
      subtopic: "Profit"
    },
    {
      q: "Accounting profit differs from economic profit because economic profit also subtracts:",
      correct: "Implicit (opportunity) costs such as forgone wages and forgone interest.",
      wrong: ["Only explicit costs.", "Taxes.", "Fixed costs."],
      why: "Accounting profit counts explicit costs only; economic profit subtracts explicit and implicit costs.",
      difficulty: "easy",
      subtopic: "Profit"
    },
    {
      q: "A competitive firm should shut down in the short run if:",
      correct: "Price is below minimum average variable cost.",
      wrong: ["Price is below average total cost.", "It is making an economic loss.", "Price is below marginal cost."],
      why: "Fixed costs must be paid whether or not the firm produces. The firm shuts down only if revenue cannot cover variable costs, P < AVC.",
      difficulty: "medium",
      subtopic: "Shutdown rule"
    },
    {
      q: "A firm has P = $8, AVC = $5 and ATC = $12. In the short run it should:",
      correct: "Keep producing, because price covers variable cost even though the firm makes a loss.",
      wrong: ["Shut down immediately, because P < ATC.", "Raise its price above ATC.", "Exit the market immediately."],
      why: "P > AVC, so each unit contributes toward fixed costs. Shutting down would leave the firm with a larger loss equal to fixed costs.",
      difficulty: "medium",
      subtopic: "Shutdown rule"
    },
    {
      q: "In long-run competitive equilibrium with free entry and exit:",
      correct: "P = MC = ATC and economic profit is zero.",
      wrong: ["P = MC but economic profit is positive.", "P > ATC and firms earn positive profit.", "P = AVC and firms shut down."],
      why: "Profit maximisation gives P = MC; free entry and exit drive profit to zero, which occurs where P = ATC.",
      difficulty: "medium",
      subtopic: "Long run"
    },
    {
      q: "Firms in a competitive industry are earning positive economic profit. In the long run:",
      correct: "Entry increases supply, lowering price until economic profit is zero.",
      wrong: ["Exit decreases supply, raising price further.", "Entry decreases supply, raising price.", "Profit stays positive forever because barriers to entry exist."],
      why: "Positive profit attracts entry. Supply shifts right and price falls until P = ATC and profit is zero.",
      difficulty: "medium",
      subtopic: "Long run"
    },
    {
      q: "A competitive firm's short-run supply curve is:",
      correct: "The MC curve above minimum AVC.",
      wrong: ["The entire MC curve.", "The ATC curve above minimum AVC.", "The AVC curve."],
      why: "The firm produces where P = MC, but only if P ≥ AVC; below minimum AVC it shuts down.",
      difficulty: "medium",
      subtopic: "Supply curve"
    },
    {
      q: "Producer surplus is:",
      correct: "The area below price and above the supply (MC) curve.",
      wrong: ["The area above price and below demand.", "Total revenue minus fixed cost.", "Price times quantity."],
      why: "Producer surplus measures the gap between the price received and the seller's willingness to accept, summed over units sold.",
      difficulty: "easy",
      subtopic: "Producer surplus"
    },
    {
      q: "A firm's rent (a fixed cost) rises. In the short run, this:",
      correct: "Reduces profit and raises ATC, but does not change the shutdown decision.",
      wrong: ["Raises marginal cost and the profit-maximising price.", "Makes the firm shut down immediately.", "Shifts the market supply curve right."],
      why: "Fixed costs do not affect MC or AVC, so they do not affect the shutdown decision; they do reduce profit.",
      difficulty: "hard",
      subtopic: "Costs"
    },
    {
      q: "For a perfectly competitive firm, marginal revenue equals:",
      correct: "The market price.",
      wrong: ["Average total cost.", "Marginal cost at every output.", "Price minus average cost."],
      why: "A price-taking firm can sell any quantity at the market price, so each extra unit adds exactly P to revenue.",
      difficulty: "easy",
      subtopic: "Competition"
    }
  ]);

  EQS.addMcqBank("monopoly", [
    {
      q: "A firm with market power:",
      correct: "Faces a downward-sloping demand curve and can influence price.",
      wrong: ["Faces a horizontal demand curve and is a price-taker.", "Cannot influence price but can choose quantity.", "Always earns zero economic profit in the long run."],
      why: "Market power means the firm's output choice affects price, so its demand curve slopes downward.",
      difficulty: "easy",
      subtopic: "Market power"
    },
    {
      q: "Which is a legal barrier to entry?",
      correct: "A patent granted to the inventor of a new drug.",
      wrong: ["A firm's ownership of a key input.", "Economies of scale in electricity transmission.", "A technological advantage from better machinery."],
      why: "Patents and copyrights are government-granted legal barriers. The others are natural sources of market power.",
      difficulty: "easy",
      subtopic: "Barriers to entry"
    },
    {
      q: "A natural monopoly is characterised by:",
      correct: "Declining average cost over the relevant range of output, so one firm can serve the market more cheaply than several.",
      wrong: ["A horizontal demand curve.", "Constant average cost.", "Increasing average cost."],
      why: "Natural monopoly arises from economies of scale: ATC keeps falling as output expands, making one large producer the low-cost provider.",
      difficulty: "easy",
      subtopic: "Natural monopoly"
    },
    {
      q: "For a monopolist, marginal revenue is less than price because:",
      correct: "To sell more units, the firm must lower the price on all units it already sells.",
      wrong: ["The monopolist has no fixed costs.", "Marginal cost is always falling.", "Consumers have no substitutes."],
      why: "The price effect on existing units makes the extra revenue from selling one more unit smaller than the price.",
      difficulty: "medium",
      subtopic: "Marginal revenue"
    },
    {
      q: "A profit-maximising monopolist chooses output where:",
      correct: "MR = MC, then reads the price from the demand curve.",
      wrong: ["P = MC, then reads quantity from the demand curve.", "MR = 0 and charges the highest price.", "P = ATC and produces where demand equals ATC."],
      why: "MR = MC gives the profit-maximising quantity; the demand curve gives the highest price consumers will pay for that quantity.",
      difficulty: "easy",
      subtopic: "Profit maximisation"
    },
    {
      q: "The efficient (socially optimal) price for a regulated monopolist is:",
      correct: "P = MC.",
      wrong: ["P = ATC.", "P = MR.", "The highest price the market will bear."],
      why: "P = MC is the competitive outcome and maximises total social surplus.",
      difficulty: "easy",
      subtopic: "Regulation"
    },
    {
      q: "The fair-returns price for a regulated monopolist is:",
      correct: "P = ATC, which gives zero economic profit.",
      wrong: ["P = MC, which gives zero economic profit.", "P > ATC, which gives positive profit.", "P = MR, which maximises profit."],
      why: "At P = ATC, the firm covers all economic costs, including opportunity costs, and earns zero economic profit.",
      difficulty: "easy",
      subtopic: "Regulation"
    },
    {
      q: "Compared with perfect competition, a monopoly:",
      correct: "Produces less, charges more, and reduces both consumer surplus and total social surplus.",
      wrong: ["Produces more and lowers price.", "Produces the same quantity but transfers surplus to consumers.", "Maximises social surplus but not profit."],
      why: "The monopolist restricts quantity to raise price, creating deadweight loss and reducing total surplus.",
      difficulty: "medium",
      subtopic: "Welfare"
    },
    {
      q: "Deadweight loss under monopoly is the area:",
      correct: "Between the demand curve and the MC curve, from the monopoly quantity to the competitive quantity.",
      wrong: ["Between price and ATC, over the monopoly quantity.", "Below the MC curve over the monopoly quantity.", "Above the demand curve over the competitive quantity."],
      why: "Units between Qm and Qc are worth more to buyers than they cost to produce, but the monopolist does not produce them.",
      difficulty: "medium",
      subtopic: "Deadweight loss"
    },
    {
      q: "At its current output, a monopolist has ATC = $6 and MC = $4. Under efficient pricing, its profit per unit is:",
      correct: "−$2",
      wrong: ["$0", "+$2", "+$6"],
      why: "Efficient pricing sets P = MC = $4. Profit per unit = P − ATC = $4 − $6 = −$2, a loss.",
      difficulty: "medium",
      subtopic: "Regulation"
    },
    {
      q: "At its current output, a monopolist has ATC = $6 and MC = $4. Under fair-returns pricing, its profit per unit is:",
      correct: "$0",
      wrong: ["−$2", "+$2", "+$6"],
      why: "Fair-returns pricing sets P = ATC = $6, so P − ATC = 0 regardless of the quantity.",
      difficulty: "medium",
      subtopic: "Regulation"
    },
    {
      q: "The profit rectangle of a monopolist is:",
      correct: "(P − ATC) × Q at the profit-maximising quantity.",
      wrong: ["(P − MC) × Q at the profit-maximising quantity.", "P × Q.", "TR − FC."],
      why: "Profit = TR − TC = P×Q − ATC×Q = (P − ATC)×Q.",
      difficulty: "easy",
      subtopic: "Profit"
    },
    {
      q: "A monopolist cuts price and sells more units. The revenue lost on units it was already selling is called the:",
      correct: "Price effect.",
      wrong: ["Quantity effect.", "Output effect.", "Substitution effect."],
      why: "The price effect is the revenue lost because existing units now sell at a lower price. The quantity effect is the revenue gained on new units.",
      difficulty: "medium",
      subtopic: "Marginal revenue"
    },
    {
      q: "Why might a government regulate a natural monopoly rather than break it up?",
      correct: "Breaking it up would sacrifice economies of scale, so one regulated firm can supply at lower average cost.",
      wrong: ["Natural monopolies never make profit.", "Regulation always eliminates deadweight loss.", "Competition would raise average cost but lower price."],
      why: "Natural monopolies arise because one firm has lower average cost over the relevant range. Regulation can limit price while preserving those scale economies.",
      difficulty: "medium",
      subtopic: "Regulation"
    },
    {
      q: "Patents create a temporary monopoly primarily to:",
      correct: "Preserve the incentive to invest in research and innovation.",
      wrong: ["Guarantee allocative efficiency.", "Keep prices equal to marginal cost.", "Prevent firms from earning economic profit."],
      why: "Without temporary market power, copying could eliminate the returns to invention. The patent trades static efficiency for dynamic innovation incentives.",
      difficulty: "medium",
      subtopic: "Patents"
    },
    {
      q: "A graph's horizontal axis is measured in thousands of gallons. The MR = MC point is at 30 on the axis. The profit-maximising quantity is:",
      correct: "30,000 gallons.",
      wrong: ["30 gallons.", "3,000 gallons.", "300 gallons."],
      why: "The axis label is in thousands: 30 on the axis means 30 × 1,000 = 30,000 gallons. Always check units before computing profit or DWL.",
      difficulty: "medium",
      subtopic: "Graph reading"
    }
  ]);

  EQS.addMcqBank("government-failure", [
    {
      q: "An externality occurs when:",
      correct: "An economic activity imposes a spillover cost or benefit on a bystander.",
      wrong: ["A firm has market power.", "A good is non-rival.", "A price is above marginal cost."],
      why: "Externalities are spillovers to third parties that are not reflected in the market price.",
      difficulty: "easy",
      subtopic: "Externalities"
    },
    {
      q: "A negative externality in production means that:",
      correct: "Marginal social cost exceeds marginal private cost, so the market overproduces.",
      wrong: ["Marginal social benefit exceeds private benefit, so the market underproduces.", "The market produces the socially optimal quantity.", "Demand shifts right."],
      why: "The firm ignores the external cost, so its private cost is too low and it produces more than the social optimum.",
      difficulty: "medium",
      subtopic: "Externalities"
    },
    {
      q: "A positive externality means that:",
      correct: "Marginal social benefit exceeds marginal private benefit, so the market underproduces.",
      wrong: ["Marginal social cost exceeds private cost, so the market overproduces.", "The market is efficient.", "The good is a public good."],
      why: "Buyers ignore the benefit to others, so demand is too low relative to the social optimum.",
      difficulty: "medium",
      subtopic: "Externalities"
    },
    {
      q: "The marginal social cost of producing a good equals:",
      correct: "Marginal private cost plus marginal external cost.",
      wrong: ["Marginal private cost minus marginal external cost.", "Marginal private benefit plus marginal external benefit.", "Price minus marginal cost."],
      why: "MSC = MPC + MEC. The external cost is the spillover cost borne by bystanders.",
      difficulty: "easy",
      subtopic: "Social cost"
    },
    {
      q: "The socially optimal Pigouvian tax on a negative externality is equal to:",
      correct: "The marginal external cost at the socially optimal quantity.",
      wrong: ["The entire marginal social cost.", "The firm's fixed cost.", "The difference between price and ATC."],
      why: "The tax makes the firm internalise the external cost, aligning private cost with social cost.",
      difficulty: "medium",
      subtopic: "Pigouvian tax"
    },
    {
      q: "A Pigouvian subsidy is used to:",
      correct: "Raise consumption of a good with a positive externality toward the socially optimal level.",
      wrong: ["Reduce consumption of a good with a negative externality.", "Increase a monopolist's price.", "Eliminate fixed costs."],
      why: "A subsidy lowers the effective price or raises demand, correcting underproduction caused by a positive externality.",
      difficulty: "easy",
      subtopic: "Pigouvian subsidy"
    },
    {
      q: "The Coase Theorem says private bargaining can reach an efficient outcome if:",
      correct: "Property rights are well defined and transaction costs are low.",
      wrong: ["The government sets a Pigouvian tax.", "The good is non-excludable.", "There are many affected parties."],
      why: "Coasean bargaining requires clear property rights and low costs of negotiating; many parties or unclear rights make it impractical.",
      difficulty: "medium",
      subtopic: "Coase"
    },
    {
      q: "A government bans a polluting technology outright. This is:",
      correct: "A command-and-control policy.",
      wrong: ["A market-based policy.", "A Pigouvian subsidy.", "Coasean bargaining."],
      why: "Command-and-control directly regulates the activity or technology rather than using prices.",
      difficulty: "easy",
      subtopic: "Policy tools"
    },
    {
      q: "A public good is:",
      correct: "Non-rival and non-excludable.",
      wrong: ["Rival and excludable.", "Rival but non-excludable.", "Non-rival but excludable."],
      why: "Public goods can be consumed by many people at once and people cannot easily be prevented from consuming them.",
      difficulty: "easy",
      subtopic: "Public goods"
    },
    {
      q: "The free-rider problem is most likely for:",
      correct: "A non-excludable good such as national defence.",
      wrong: ["A private good such as a sandwich.", "A club good such as a streaming subscription.", "A common-pool resource such as a fishery."],
      why: "Non-excludability lets people benefit without paying, creating an incentive to free ride.",
      difficulty: "easy",
      subtopic: "Free riding"
    },
    {
      q: "A concert in a crowded auditorium is:",
      correct: "Excludable and rival.",
      wrong: ["Non-excludable and non-rival.", "Excludable but non-rival.", "Non-excludable but rival."],
      why: "A ticket excludes non-payers, and a seat occupied by one person cannot be used by another.",
      difficulty: "easy",
      subtopic: "Goods classification"
    },
    {
      q: "The economic burden of a tax falls more heavily on:",
      correct: "The side of the market that is less elastic.",
      wrong: ["The side that is legally required to pay the tax.", "The side that is more elastic.", "Buyers, always."],
      why: "The side that cannot easily change quantity bears more of the burden. Statutory incidence does not determine economic incidence.",
      difficulty: "medium",
      subtopic: "Tax incidence"
    },
    {
      q: "A $3 tax is imposed. The price consumers pay rises from $3 to $5. Consumers' share of the tax burden is:",
      correct: "About 67%.",
      wrong: ["About 33%.", "100%.", "0%."],
      why: "Consumers bear $2 of the $3 tax: $2 ÷ $3 ≈ 67%.",
      difficulty: "medium",
      subtopic: "Tax incidence"
    },
    {
      q: "A tax on buyers instead of sellers produces:",
      correct: "The same economic incidence and deadweight loss, with a different statutory incidence.",
      wrong: ["A higher price for buyers and a lower burden for sellers.", "No deadweight loss.", "A lower tax revenue."],
      why: "The market outcome depends on the tax wedge, not on which side is legally required to hand over the tax.",
      difficulty: "medium",
      subtopic: "Tax incidence"
    },
    {
      q: "A binding price ceiling:",
      correct: "Creates a shortage and deadweight loss.",
      wrong: ["Creates a surplus and deadweight loss.", "Raises quantity traded.", "Has no effect if it is below equilibrium."],
      why: "A ceiling below equilibrium prevents price from rising, so quantity supplied falls short of quantity demanded.",
      difficulty: "easy",
      subtopic: "Price controls"
    },
    {
      q: "A binding price floor:",
      correct: "Creates a surplus because quantity supplied exceeds quantity demanded.",
      wrong: ["Creates a shortage because demand exceeds supply.", "Lowers price below equilibrium.", "Increases quantity traded."],
      why: "A floor above equilibrium holds price up, so sellers supply more than buyers want to buy.",
      difficulty: "easy",
      subtopic: "Price controls"
    },
    {
      q: "A price ceiling set above the equilibrium price:",
      correct: "Has no effect because it does not bind.",
      wrong: ["Creates a large shortage.", "Raises the equilibrium price.", "Creates a surplus."],
      why: "Only a ceiling below equilibrium constrains the market. Above equilibrium, the market price is already lower.",
      difficulty: "easy",
      subtopic: "Price controls"
    },
    {
      q: "Which is a government failure rather than a market failure?",
      correct: "Bureaucracy and enforcement costs created by a regulation.",
      wrong: ["Pollution from a factory.", "Underproduction of a public good.", "A monopoly restricting output."],
      why: "Government failure is inefficiency caused by intervention itself, such as administrative costs, corruption or black markets.",
      difficulty: "easy",
      subtopic: "Government failure"
    },
    {
      q: "A progressive income tax means that:",
      correct: "Higher earners pay a higher marginal rate on successive slices of income.",
      wrong: ["Everyone pays the same amount of tax.", "Everyone pays the same percentage of income.", "Higher earners pay a lower rate."],
      why: "Progressivity means the average and marginal rates rise with income.",
      difficulty: "easy",
      subtopic: "Taxation"
    },
    {
      q: "The Gini coefficient measures:",
      correct: "Income inequality, where 0 is perfect equality and 1 is perfect inequality.",
      wrong: ["The inflation rate.", "The size of the government budget.", "The unemployment rate."],
      why: "The Gini coefficient is a standard measure of how unequal the distribution of income is.",
      difficulty: "easy",
      subtopic: "Inequality"
    }
  ]);
})(typeof window !== "undefined" ? window : globalThis);
