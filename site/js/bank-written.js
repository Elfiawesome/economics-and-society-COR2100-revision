/* Written-question bank with model answers and marking rubrics. */
(function (g) {
  const EQS = g.EQS;
  const R = (a, b, c) => [a, b, c];

  EQS.addWrittenBank("foundations", [
    {
      q: "A student is deciding whether to attend university. Tuition is $30,000 per year, and the degree takes four years. A full-time job would pay $45,000 per year. Explain the opportunity cost of attending university, and explain why the true cost is larger than the tuition bill. Would a rational student necessarily refuse to go if the true cost is high?",
      answer:
        "<p><strong>Opportunity cost</strong> is the value of the best alternative forgone. For four years of study, the student gives up:</p><ul><li>explicit tuition: 4 × $30,000 = $120,000;</li><li>implicit forgone wages: 4 × $45,000 = $180,000;</li><li>any other best alternative, such as a different job or course.</li></ul><p>The true economic cost is about $300,000, not $120,000, because the wages are a real cost of choosing university even though no money changes hands.</p><p>A high cost does not automatically make university a bad choice. The decision compares the <em>total benefit</em> (higher future earnings, consumption value of learning, options) with the <em>total opportunity cost</em>. If the present value of the extra lifetime earnings exceeds $300,000, university can still be optimal. Sunk costs already incurred should be ignored; only costs and benefits that change with the decision matter.</p>",
      rubric: R("Identifies tuition and forgone wages as opportunity costs", "Explains that implicit costs count even without a payment", "Uses a benefit-versus-cost decision rule rather than cost alone"),
      difficulty: "medium",
      subtopic: "Opportunity cost"
    },
    {
      q: "Classify each statement as positive or normative, and explain your reasoning: (a) A sugar tax would reduce sugary-drink consumption. (b) The government should tax sugary drinks. (c) A sugar tax would hit lower-income households harder as a share of income. (d) Fairness matters more than efficiency.",
      answer:
        "<p>(a) <strong>Positive</strong>: it is a testable prediction about what would happen.</p><p>(b) <strong>Normative</strong>: \"should\" expresses a value judgement about what policy ought to do.</p><p>(c) <strong>Positive</strong>: the incidence of the tax across income groups can be measured with data.</p><p>(d) <strong>Normative</strong>: it ranks fairness against efficiency using a value judgement; economics can describe the trade-off but cannot decide which value should dominate.</p><p>Positive statements describe what is or what will happen and can be tested. Normative statements recommend what ought to be and depend on values.</p>",
      rubric: R("Correctly labels all four statements", "Explains the is/ought distinction", "Recognises that positive claims are testable"),
      difficulty: "easy",
      subtopic: "Positive vs normative"
    },
    {
      q: "Explain the difference between correlation and causation. Use one example of an omitted variable and one example of reverse causality. How can a natural experiment help establish causation?",
      answer:
        "<p><strong>Correlation</strong> means two variables move together. <strong>Causation</strong> means a change in one variable directly changes the other. Correlation alone cannot establish causation.</p><p><strong>Omitted variable:</strong> cows with names produce more milk. A caring farmer may both name the cows and provide better feed and shelter. The omitted variable, care quality, drives both observed variables; the name itself does not cause more milk.</p><p><strong>Reverse causality:</strong> elderly gamblers are healthier than non-gamblers. It is plausible that healthier people are more able to travel and gamble, so health causes gambling rather than the reverse.</p><p>A <strong>natural experiment</strong> uses an external change that creates treatment and control groups, ideally with random or as-good-as-random assignment. The UK raising the school leaving age in 1947 is an example: students who turned 14 before the reform could leave, while those who turned 14 later had to stay an extra year. Comparing their later earnings isolates the effect of the extra year of schooling better than a simple correlation.</p>",
      rubric: R("Defines correlation and causation correctly", "Gives a valid omitted-variable example", "Gives a valid reverse-causality example", "Explains how a natural experiment identifies a causal effect"),
      difficulty: "medium",
      subtopic: "Causation vs correlation"
    },
    {
      q: "A model assumes that each additional year of education raises wages by 10%. It predicts that four years of college raise wages by about 46.5%, while the data show a 56% difference. Does this disprove the model? Explain how an economist would evaluate the model, and why the mean and median can differ.",
      answer:
        "<p>The model prediction is \\(1.10^4 = 1.4641\\), a 46.5% increase. The data show 56%. The model is <strong>broadly consistent</strong> with the data, but it is a simplification, not an exact law. It should not be rejected just because the numbers differ.</p><p>An economist would compare the model's prediction with data from a credible sample, consider measurement error and omitted factors (ability, field of study, experience), and use experiments or natural experiments to isolate causality. A model is valuable if it predicts reasonably well and survives testing, not if it is perfectly accurate.</p><p>The <strong>mean</strong> is the average and is pulled strongly by outliers such as a few extremely high earners. The <strong>median</strong> is the middle value and is more robust. When incomes are skewed, the median is often a better measure of the typical worker's earnings.</p>",
      rubric: R("Computes the compounding prediction", "Treats the model as a testable simplification rather than an exact truth", "Explains mean vs median with skewness"),
      difficulty: "medium",
      subtopic: "Models and evidence"
    },
    {
      q: "Using the ideas of scarcity, trade-offs, opportunity cost, equilibrium and empiricism, explain how an economist would analyse Singapore's decision to allocate scarce land between housing, parks and commercial use.",
      answer:
        "<p><strong>Scarcity:</strong> Singapore has limited land relative to competing wants, so not every use can be expanded at once.</p><p><strong>Trade-off:</strong> more public housing means less land for parks or commercial space. The trade-off is not optional; it follows from scarcity.</p><p><strong>Opportunity cost:</strong> the cost of a new park is the best alternative use of that land, not just the construction bill. If the land could have been sold for commercial development, the forgone value is part of the cost.</p><p><strong>Equilibrium:</strong> land prices and bidding allocate land among uses. If demand for housing rises, the price of land rises, drawing land toward housing and pushing other uses to adjust.</p><p><strong>Empiricism:</strong> claims about which use is best should be tested with data on housing needs, congestion, environmental benefits, fiscal revenue and distributional effects. Economics can clarify the trade-offs; a normative judgement about which use is fairest requires society's values.</p>",
      rubric: R("Applies scarcity and trade-offs to the land example", "Defines opportunity cost as the best forgone alternative", "Explains prices/equilibrium and the role of evidence", "Distinguishes positive analysis from normative judgement"),
      difficulty: "medium",
      subtopic: "Foundations synthesis"
    }
  ]);

  EQS.addWrittenBank("demand-supply", [
    {
      q: "Explain the difference between a movement along a demand curve and a shift of the demand curve. Then classify each event for the market for movie tickets and state the effect on equilibrium price and quantity: (a) the ticket price falls; (b) students' incomes rise; (c) a popular Marvel film is released; (d) Netflix becomes cheaper; (e) the population falls; (f) tickets are expected to become more expensive next month.",
      answer:
        "<p>A <strong>movement along</strong> the demand curve is caused only by a change in the good's own price. A <strong>shift</strong> is caused by a change in any other demand determinant: tastes, income, related-good prices, number of buyers or expectations.</p><ul><li>(a) Ticket price falls: movement down along demand; quantity demanded rises, but the demand curve does not shift.</li><li>(b) Students' incomes rise (normal good): demand shifts right; price and quantity rise.</li><li>(c) Popular film released: tastes/preferences shift demand right; price and quantity rise.</li><li>(d) Netflix cheaper (substitute): demand for cinema shifts left; price and quantity fall.</li><li>(e) Population falls: fewer buyers, demand shifts left; price and quantity fall.</li><li>(f) Expected future price rise: current demand shifts right; current price and quantity rise.</li></ul>",
      rubric: R("Correctly distinguishes movement from shift", "Identifies the relevant demand shifter for each event", "States the correct price and quantity effects"),
      difficulty: "medium",
      subtopic: "Demand shifts"
    },
    {
      q: "A hot summer raises demand for air conditioners, while a shortage of semiconductors raises the cost of producing them. Explain what happens to the equilibrium price and quantity of air conditioners. Is either effect ambiguous? Why?",
      answer:
        "<p>The hot summer shifts <strong>demand right</strong>. The semiconductor shortage raises input costs and shifts <strong>supply left</strong>.</p><p>Both shifts push the equilibrium price <strong>up</strong>, so the price effect is unambiguous.</p><p>The quantity effects work in opposite directions: higher demand raises quantity, while lower supply reduces it. The net quantity change is therefore <strong>ambiguous</strong> and depends on which shift is larger. If demand rises much more than supply falls, quantity can rise; if the supply shock is larger, quantity falls.</p>",
      rubric: R("Identifies demand right and supply left", "Explains why price is unambiguous", "Explains why quantity is ambiguous and depends on shift sizes"),
      difficulty: "medium",
      subtopic: "Both curves shift"
    },
    {
      q: "Roses become more expensive before Valentine's Day, but canned drinks do not become noticeably more expensive before Chinese New Year. Using demand and supply shifts, explain why the price effects can differ even if both goods experience a demand increase.",
      answer:
        "<p>Both occasions raise demand, shifting demand right. The difference lies on the <strong>supply side</strong>.</p><p>For roses, supply is relatively <strong>inelastic</strong> in the short run: growers cannot instantly produce more flowers for a specific date, and storage is limited. A rightward demand shift therefore raises price sharply.</p><p>For canned drinks, supply is relatively <strong>elastic</strong>: factories can increase production and inventories can be drawn down or replenished. If supply also shifts right to meet the expected demand, the price rise is small or absent.</p><p>The general lesson: the size of a price change after a demand shift depends on the elasticity of supply and on whether supply also shifts.</p>",
      rubric: R("Identifies the demand increase in both markets", "Contrasts elastic vs inelastic supply", "Links the price difference to supply conditions"),
      difficulty: "medium",
      subtopic: "Applications"
    },
    {
      q: "The price of bubble tea falls from $4 to $3, and at the same time the quantity of bubble tea sold also falls. Is this possible in a demand-and-supply model? Explain carefully.",
      answer:
        "<p>Yes. A lower price alone would normally increase quantity demanded, but the observed outcome can be caused by a <strong>leftward shift of demand</strong> combined with a supply response.</p><p>For example, a health scare reduces demand at every price. The demand curve shifts left. If supply is unchanged, both the equilibrium price and quantity fall. The price is lower because the market has moved to a new equilibrium, not because the original demand curve was traced downward.</p><p>The key distinction is between a movement along a curve and a shift of the curve. The price change and quantity change are equilibrium outcomes of a shifted curve, so the usual law of demand is not violated.</p>",
      rubric: R("Says yes and identifies a leftward demand shift", "Distinguishes movement along from shift of demand", "Explains the new equilibrium price and quantity"),
      difficulty: "hard",
      subtopic: "Applications"
    },
    {
      q: "Organic vegetables cost more than regular vegetables and fewer of them are sold. A student says: \"This proves demand for organic vegetables is lower.\" Evaluate this claim using demand and supply. What would the demand-side and supply-side stories each predict?",
      answer:
        "<p>The claim is not correct as stated. A higher price and lower quantity are consistent with a <strong>leftward supply shift</strong>, not necessarily lower demand.</p><p><strong>Demand-side story:</strong> organic vegetables are seen as healthier or greener, so demand is higher (shifted right). Higher demand would raise both price and quantity, which does not match the lower quantity unless supply is also restricted.</p><p><strong>Supply-side story:</strong> organic farming is more costly and yields less output, so supply is lower (shifted left). A leftward supply shift raises price and lowers quantity, which matches the observation.</p><p>The data are more consistent with a supply-side explanation, although in reality both curves may shift. To identify the cause, we need evidence on costs, yields, consumer preferences and the size of the shifts, not just the observed price and quantity.</p>",
      rubric: R("Rejects the simple demand conclusion", "Explains the demand-side prediction", "Explains the supply-side prediction", "Concludes that both shifts are possible and evidence is needed"),
      difficulty: "hard",
      subtopic: "Applications"
    }
  ]);

  EQS.addWrittenBank("elasticity", [
    {
      q: "Define price elasticity of demand, write the formula, and explain the three main determinants of elasticity. Why might a firm prefer to face inelastic demand?",
      answer:
        "<p><strong>Price elasticity of demand</strong> measures how responsive quantity demanded is to a change in the good's own price:</p><p class='formula-line'>\\(E_d = \\dfrac{\\%\\Delta Q_d}{\\%\\Delta P}\\).</p><p>Demand is elastic if \\(|E_d|>1\\), unit elastic if \\(|E_d|=1\\), and inelastic if \\(|E_d|<1\\).</p><p>Determinants:</p><ul><li><strong>Availability of close substitutes:</strong> more substitutes make demand more elastic.</li><li><strong>Budget share:</strong> a larger share of income makes demand more elastic.</li><li><strong>Time to adjust:</strong> more time allows consumers to change habits and find substitutes, making demand more elastic.</li></ul><p>A firm with inelastic demand can raise price and increase total revenue, because quantity falls proportionally less than price rises. That is why firms with loyal customers or unique products value market power.</p>",
      rubric: R("Correct formula and definition", "Explains the three determinants", "Links inelastic demand to revenue when price rises"),
      difficulty: "medium",
      subtopic: "Price elasticity"
    },
    {
      q: "Explain the relationship between price elasticity and total consumer spending. Use the elastic and inelastic cases, and explain why a price cut can either raise or lower revenue.",
      answer:
        "<p>Total spending (and the firm's total revenue) is \\(P \\times Q\\). A price change has two opposing effects: a <strong>price effect</strong> and a <strong>quantity effect</strong>.</p><ul><li>If demand is <strong>elastic</strong> (\\(|E_d|>1\\)), quantity responds proportionally more than price. A price cut raises quantity enough that total spending rises; a price rise lowers spending.</li><li>If demand is <strong>inelastic</strong> (\\(|E_d|<1\\)), quantity responds less than price. A price cut lowers spending; a price rise raises spending.</li><li>If demand is <strong>unit elastic</strong>, total spending is unchanged.</li></ul><p>So a price cut is not always good for revenue. It raises revenue only when demand is elastic over the relevant range. A firm facing inelastic demand may gain revenue by raising price, though it must consider costs and long-run customer response.</p>",
      rubric: R("States the spending rule for elastic and inelastic demand", "Uses the price-effect/quantity-effect logic", "Explains both directions of a price change"),
      difficulty: "medium",
      subtopic: "Elasticity and revenue"
    },
    {
      q: "Explain cross-price elasticity and income elasticity. Give the sign that identifies substitutes, complements, inferior goods, normal necessities and luxuries. Why is the sign as important as the magnitude?",
      answer:
        "<p><strong>Cross-price elasticity</strong> measures the response of quantity demanded of good A to the price of good B: \\(E_{AB}=\\%\\Delta Q_A / \\%\\Delta P_B\\).</p><ul><li>\\(E_{AB}>0\\): substitutes (higher price of B raises demand for A).</li><li>\\(E_{AB}<0\\): complements (higher price of B lowers demand for A).</li><li>\\(E_{AB}=0\\): unrelated.</li></ul><p><strong>Income elasticity</strong> measures the response of quantity demanded to income: \\(E_I=\\%\\Delta Q / \\%\\Delta I\\).</p><ul><li>\\(E_I<0\\): inferior good.</li><li>\\(0<E_I<1\\): normal necessity.</li><li>\\(E_I>1\\): normal luxury.</li></ul><p>The sign identifies the <em>direction</em> of the relationship; the magnitude identifies its <em>strength</em>. A positive cross-price elasticity tells us the goods are substitutes, while a value of 0.1 tells us the relationship is weak. For income elasticity, the sign separates inferior from normal goods, and the size separates necessities from luxuries.</p>",
      rubric: R("Correct formulas for both elasticities", "Correct sign classifications", "Explains the role of magnitude as strength"),
      difficulty: "medium",
      subtopic: "Cross and income elasticity"
    },
    {
      q: "For each scenario, state which elasticity is relevant and what the sign would tell you: (a) the price of Grab rides rises and taxi demand changes; (b) household income rises and demand for public transport changes; (c) the price of coffee rises and the quantity of coffee demanded changes. Explain why using the wrong elasticity would give a misleading answer.",
      answer:
        "<p>(a) <strong>Cross-price elasticity</strong> of taxi demand with respect to the price of Grab. A positive sign means taxis and Grab are substitutes; a negative sign would mean complements.</p><p>(b) <strong>Income elasticity</strong> of public transport. A negative sign means public transport is inferior; a positive value below 1 means a normal necessity; above 1 means a luxury.</p><p>(c) <strong>Price elasticity of demand</strong> for coffee, because the good's own price changed. The negative sign reflects the law of demand; the magnitude tells us whether demand is elastic or inelastic.</p><p>Using the wrong elasticity confuses a change in another good's price or in income with a change in the good's own price. The resulting number would not measure the relationship of interest and could lead to the wrong pricing or policy conclusion.</p>",
      rubric: R("Chooses the correct elasticity in all three scenarios", "Interprets the sign correctly", "Explains the consequence of using the wrong elasticity"),
      difficulty: "easy",
      subtopic: "Choosing elasticity"
    },
    {
      q: "Demand for a good is inelastic in the short run but more elastic in the long run. Explain why, using examples, and discuss the implications for a firm deciding whether to raise price today.",
      answer:
        "<p>In the short run, consumers have fewer ways to adjust: habits are fixed, contracts may lock them in, and substitutes may not be readily available. Demand is therefore relatively <strong>inelastic</strong>.</p><p>In the long run, consumers can switch to substitutes, change routines, move house, or buy more efficient equipment. Demand becomes more <strong>elastic</strong>. Petrol is a classic example: drivers cannot change cars immediately, but over years they can buy more fuel-efficient vehicles or use public transport.</p><p>For a firm, a price increase may raise revenue in the short run if demand is inelastic. But over time, customers may leave, so the long-run revenue gain is smaller or may become a loss. The firm should consider the long-run elasticity, not just the immediate response, and should also account for costs and reputation.</p>",
      rubric: R("Explains short-run vs long-run adjustment", "Gives a concrete example", "Links the elasticity path to pricing strategy"),
      difficulty: "medium",
      subtopic: "Elasticity over time"
    },
    {
      q: "Explain why the economic burden of a tax does not depend on whether the tax is legally levied on buyers or sellers. What does determine the split of the burden?",
      answer:
        "<p>A tax creates a <strong>wedge</strong> between the price buyers pay and the price sellers keep. Whether the government collects the tax from buyers or sellers, the market must reach the same quantity and the same wedge. The statutory incidence changes who hands money to the government, but not the economic incidence.</p><p>The split depends on the <strong>relative elasticities</strong> of demand and supply. The side that is less elastic, and therefore less able to change quantity, bears more of the burden. If demand is perfectly inelastic, buyers bear the entire tax. If supply is perfectly inelastic, sellers bear it.</p><p>This is why a tax on producers can still be passed mostly to consumers when demand is inelastic, and a tax on consumers can fall mostly on producers when supply is inelastic.</p>",
      rubric: R("Explains the tax wedge and equivalence of statutory incidence", "States the elasticity rule", "Gives a limiting case (perfectly inelastic side)"),
      difficulty: "medium",
      subtopic: "Tax incidence"
    }
  ]);

  EQS.addWrittenBank("consumer-choice", [
    {
      q: "A consumer has income $300, jeans cost $50 and sweaters cost $25. Write the budget constraint, find both intercepts, and calculate the opportunity cost of one pair of jeans. Explain what happens to the budget line if (a) income rises to $400, (b) both prices double, and (c) only the price of sweaters rises.",
      answer:
        "<p>Budget constraint: \\(50J + 25S = 300\\).</p><p>Intercepts: if all income is spent on jeans, \\(J=300/50=6\\); if all is spent on sweaters, \\(S=300/25=12\\).</p><p>Opportunity cost of one pair of jeans \\(=P_J/P_S=50/25=2\\) sweaters.</p><ul><li>(a) Income rises to $400: the budget line shifts outward in parallel. Both intercepts rise to 8 jeans and 16 sweaters; the slope and opportunity cost are unchanged.</li><li>(b) Both prices double: the budget line shifts inward in parallel. Intercepts fall to 3 jeans and 6 sweaters, but the price ratio remains 2, so the opportunity cost of jeans is unchanged.</li><li>(c) Only the sweater price rises: the budget line pivots inward along the sweater axis. The jeans intercept stays at 6, the sweater intercept falls, and jeans become cheaper in terms of sweaters.</li></ul>",
      rubric: R("Writes the correct budget equation and intercepts", "Calculates opportunity cost as a price ratio", "Describes parallel shifts vs pivots correctly"),
      difficulty: "medium",
      subtopic: "Budget constraint"
    },
    {
      q: "Explain the marginal-benefit-per-dollar rule for choosing an optimal consumption bundle. Why does the consumer keep buying the good with the higher MB per dollar? What condition holds at the optimum?",
      answer:
        "<p>For each good, calculate \\(MB/P\\), the extra benefit from one more dollar spent on that good. The consumer should buy the next unit of whichever good gives the higher MB per dollar, because that dollar buys more additional benefit.</p><p>As the consumer buys more of a good, its marginal benefit falls (diminishing marginal benefit), so its MB/P falls. The consumer keeps reallocating spending until the MB/P ratios are equal across goods and the budget is exhausted:</p><p class='formula-line'>\\(\\dfrac{MB_x}{P_x}=\\dfrac{MB_y}{P_y}\\).</p><p>If one ratio were higher, the consumer could raise total benefit by shifting a dollar toward that good. At equality, no reallocation can improve the bundle. This is the consumer's optimization condition and it generates the downward-sloping demand curve when a price changes.</p>",
      rubric: R("Defines MB per dollar", "Explains the sequential buying rule", "States the equal-ratio condition and the budget constraint"),
      difficulty: "medium",
      subtopic: "Optimal bundle"
    },
    {
      q: "Explain consumer surplus. How is it calculated for an individual buyer and for a market? What happens to consumer surplus when the market price falls, and why?",
      answer:
        "<p><strong>Consumer surplus</strong> is the benefit a buyer receives beyond what they pay: \\(CS=WTP-P\\). A buyer purchases only if WTP ≥ P.</p><p>For an individual, the surplus is the gap between willingness to pay and the price for each unit purchased. For a market, consumer surplus is the area below the demand curve and above the price, up to the quantity traded. It sums the surplus of all buyers.</p><p>When the price falls, consumer surplus <strong>rises</strong> for two reasons: existing buyers pay less for the units they already buy (a transfer from producers), and some new buyers enter the market because their WTP is now above the lower price. Graphically, the area between demand and price expands.</p><p>Consumer surplus is a welfare measure, not the same as total spending. A high price can imply high spending but low consumer surplus.</p>",
      rubric: R("Defines WTP minus price", "Distinguishes individual and market surplus", "Explains the two reasons surplus rises when price falls"),
      difficulty: "medium",
      subtopic: "Consumer surplus"
    },
    {
      q: "Explain how a consumer's demand curve can be derived from the marginal-benefit-per-dollar rule. What happens to the quantity demanded when the price of a good falls, and how does this relate to diminishing marginal benefit?",
      answer:
        "<p>At a given price, the consumer buys units whose marginal benefit per dollar is at least as high as the alternative uses of the dollar. As the price falls, the MB/P ratio for that good rises, so the consumer wants to buy more of it. At each price, the chosen quantity is the quantity demanded; plotting these price-quantity pairs gives the demand curve.</p><p>A lower price therefore increases quantity demanded, which is the law of demand. Diminishing marginal benefit explains why the curve slopes downward: as the consumer buys more, each additional unit is worth less, so a lower price is needed to make the next unit attractive.</p><p>The demand curve is thus a marginal-benefit curve: its height at any quantity is the willingness to pay for that marginal unit.</p>",
      rubric: R("Links price changes to MB/P", "Explains the downward slope using diminishing MB", "Identifies demand as marginal willingness to pay"),
      difficulty: "medium",
      subtopic: "Deriving demand"
    },
    {
      q: "A consumer says: \"I got a lot of total benefit from my first three cups of bubble tea, so my marginal benefit from the fourth cup must also be high.\" Is this correct? Explain with the concepts of total benefit and marginal benefit.",
      answer:
        "<p>No. <strong>Total benefit</strong> is the sum of the benefits from all units consumed. <strong>Marginal benefit</strong> is the extra benefit from one more unit. A high total benefit after three cups does not imply a high marginal benefit for the fourth.</p><p>Because of <strong>diminishing marginal benefit</strong>, the fourth cup is likely to add less benefit than the third, which added less than the second, and so on. Total benefit can still rise when the fourth cup is consumed, but by a smaller amount.</p><p>The consumer should buy the fourth cup only if its marginal benefit is at least its price. The relevant decision is marginal, not total. This distinction is central to the optimal-bundle rule and to the downward-sloping demand curve.</p>",
      rubric: R("Distinguishes total from marginal benefit", "States diminishing marginal benefit", "Applies the marginal decision rule (MB ≥ price)"),
      difficulty: "easy",
      subtopic: "Marginal benefit"
    }
  ]);

  EQS.addWrittenBank("costs-competition", [
    {
      q: "Explain the difference between the short run and the long run, and between fixed and variable inputs. Why does marginal product first rise and eventually fall as more workers are hired? Why can it become negative?",
      answer:
        "<p>In the <strong>short run</strong>, at least one input is fixed (for example, the size of the kitchen or the number of ovens). In the <strong>long run</strong>, all inputs can be changed.</p><p><strong>Fixed inputs</strong> do not change with output in the short run; <strong>variable inputs</strong> do. Labour is usually variable while capital is fixed.</p><p>Marginal product first rises because of <strong>specialisation</strong>: workers can divide tasks and become more efficient. It eventually falls because of the <strong>law of diminishing returns</strong>: with a fixed amount of capital, each additional worker has less equipment and space to work with. If too many workers are added, they get in each other's way and marginal product can become negative, reducing total output.</p><p>This is why short-run marginal cost eventually rises: diminishing marginal product means more labour is needed for each additional unit of output.</p>",
      rubric: R("Defines short run/long run via fixed inputs", "Explains specialisation and diminishing returns", "Explains negative marginal product"),
      difficulty: "medium",
      subtopic: "Production"
    },
    {
      q: "Explain why the marginal cost curve cuts the average variable cost and average total cost curves at their minimum points. Why does average fixed cost keep falling, and why does ATC not necessarily turn upward at the same quantity as AVC?",
      answer:
        "<p>The marginal cost is the cost of the next unit. If MC is below an average cost, the next unit costs less than the current average, so adding it pulls the average <strong>down</strong>. If MC is above the average, adding it pushes the average <strong>up</strong>. Therefore MC crosses each average curve at its minimum.</p><p><strong>AFC = FC/Q</strong> continuously falls as Q rises because the same fixed cost is spread over more units. AVC is U-shaped because of diminishing and then increasing marginal returns.</p><p>ATC = AVC + AFC. ATC can keep falling even after AVC starts rising, because falling AFC may offset rising AVC. ATC turns upward only when the rise in AVC outweighs the fall in AFC. Therefore ATC's minimum occurs at a larger quantity than AVC's minimum.</p>",
      rubric: R("Explains the MC-average relationship", "Explains falling AFC", "Explains why ATC and AVC minima differ"),
      difficulty: "hard",
      subtopic: "Cost curves"
    },
    {
      q: "Maya leaves a job paying $72,000 per year to open a studio. Her first-year revenue is $180,000, explicit costs are $95,000, and she gives up $3,000 of interest income by using her savings. Calculate accounting profit and economic profit. Which one better reflects whether the decision was worthwhile? Explain.",
      answer:
        "<p><strong>Accounting profit</strong> = revenue − explicit costs = $180,000 − $95,000 = <strong>$85,000</strong>.</p><p><strong>Economic profit</strong> = revenue − explicit costs − implicit costs. Implicit costs are the forgone salary ($72,000) plus forgone interest ($3,000) = $75,000.</p><p>Economic profit = $180,000 − $95,000 − $75,000 = <strong>$10,000</strong>.</p><p>Economic profit is the better guide to the decision because it includes the opportunity cost of Maya's time and savings. A positive accounting profit of $85,000 looks large, but after accounting for what she gave up, the venture adds only $10,000 of value. If economic profit were negative, she would be better off in her next-best alternative, even if the accountant reports a profit.</p>",
      rubric: R("Calculates accounting profit correctly", "Identifies implicit costs and calculates economic profit", "Explains why economic profit is the relevant decision measure"),
      difficulty: "medium",
      subtopic: "Accounting vs economic profit"
    },
    {
      q: "State the short-run shutdown rule and explain it using an example where P < ATC but P > AVC. Why do fixed costs not affect the shutdown decision? What is the difference between shutting down and exiting?",
      answer:
        "<p><strong>Shutdown rule:</strong> produce if \\(P \\ge AVC\\); shut down if \\(P<AVC\\). At \\(P=AVC\\) the firm is indifferent in the short run.</p><p>Suppose P = $8, AVC = $5, ATC = $12. The firm makes a loss because P < ATC, but each unit sold covers its variable cost and contributes $3 toward fixed costs. If the firm shuts down, it still must pay fixed costs and loses even more. Producing is the smaller loss, so the firm stays open in the short run.</p><p><strong>Fixed costs</strong> are paid whether the firm produces or not, so they do not change the comparison between producing and shutting down. Only variable costs are avoidable by shutting down. This is why the shutdown rule compares P with AVC, not ATC.</p><p><strong>Shutting down</strong> is a short-run decision to produce zero output while still paying fixed costs. <strong>Exiting</strong> is a long-run decision to leave the industry and avoid all costs, including fixed costs.</p>",
      rubric: R("States the P vs AVC rule", "Uses the numerical example to explain loss minimisation", "Explains why fixed costs are irrelevant in the short run", "Distinguishes shutdown from exit"),
      difficulty: "medium",
      subtopic: "Shutdown rule"
    },
    {
      q: "Explain how a perfectly competitive industry moves from short-run profit to long-run equilibrium. What happens to price, quantity, the number of firms and economic profit? Why is the long-run supply curve horizontal in a constant-cost industry?",
      answer:
        "<p>If firms earn positive economic profit, new firms enter because there are no barriers. Entry shifts market supply <strong>right</strong>, lowering the market price. Each existing firm moves down its MC curve and its profit falls. Entry continues until economic profit is zero, where \\(P=MC=ATC\\).</p><p>If firms make losses, some exit. Supply shifts <strong>left</strong>, the price rises, and losses shrink until profit is zero again.</p><p>In long-run equilibrium, price equals the minimum of ATC, firms produce at the efficient scale, and the number of firms adjusts so that market quantity demanded equals quantity supplied at that price. Individual firms earn zero economic profit, but they cover all opportunity costs.</p><p>In a <strong>constant-cost industry</strong>, entry does not raise input prices. The long-run price therefore returns to the same minimum ATC, and the long-run supply curve is horizontal: quantity expands, but price does not.</p>",
      rubric: R("Explains entry/exit and supply shifts", "States the zero-profit long-run condition", "Explains the horizontal long-run supply curve in a constant-cost industry"),
      difficulty: "hard",
      subtopic: "Long run"
    },
    {
      q: "Explain the profit-maximising rule for a perfectly competitive firm and how it generates the firm's short-run supply curve. What are the steps a firm should follow when the market price changes?",
      answer:
        "<p>A competitive firm is a price-taker, so \\(MR=P\\). It maximises profit where \\(MR=MC\\), which becomes \\(P=MC\\). If \\(P>MC\\), producing one more unit adds more revenue than cost, so output should rise; if \\(P<MC\\), output should fall.</p><p>The firm's short-run supply curve is the portion of its MC curve above minimum AVC, because the firm shuts down if P < AVC.</p><p>When the market price changes, the firm should:</p><ol><li>find the quantity where P = MC;</li><li>check whether P ≥ AVC; if not, shut down;</li><li>if producing, compare P with ATC to determine profit, loss or break-even.</li></ol><p>At P > ATC the firm earns economic profit; at P = ATC it breaks even; at AVC ≤ P < ATC it produces at a loss but covers variable costs.</p>",
      rubric: R("Explains P = MR = MC", "Identifies the supply curve as MC above min AVC", "Lists the shutdown and profit checks"),
      difficulty: "medium",
      subtopic: "Profit maximisation"
    }
  ]);

  EQS.addWrittenBank("monopoly", [
    {
      q: "Explain the sources of market power. Distinguish between legal and natural barriers to entry, and give one example of each. Why is a patent a deliberate trade-off rather than simply an inefficient monopoly?",
      answer:
        "<p><strong>Market power</strong> is the ability to influence price. It arises when barriers to entry prevent competitors from eroding the firm's position.</p><p><strong>Legal barriers</strong> are created by government: patents give an inventor the sole right to produce a good for a limited period; copyrights protect creative works. Example: a patented drug.</p><p><strong>Natural barriers</strong> arise from the technology or resource base: control of a key input, or economies of scale so large that one firm can serve the market at lower average cost than several. Example: Singapore's electricity transmission grid (SP Group).</p><p>A <strong>patent</strong> creates temporary market power and some deadweight loss, but it preserves the incentive to invest in research. Without the prospect of earning a return, firms and inventors would underinvest in innovation. The patent is a trade-off between static efficiency (low prices now) and dynamic efficiency (new products and lower costs later). The optimal policy depends on the source of market power: regulate a natural monopoly, but protect a patent for a limited time.</p>",
      rubric: R("Defines market power and barriers to entry", "Distinguishes legal and natural barriers with examples", "Explains the patent trade-off between static and dynamic efficiency"),
      difficulty: "medium",
      subtopic: "Market power"
    },
    {
      q: "Explain why a monopolist's marginal revenue is less than the price. Use the price effect and quantity effect. Why does the monopolist produce where MR = MC rather than where P = MC?",
      answer:
        "<p>A monopolist faces the downward-sloping market demand curve. To sell an additional unit, it must lower the price not only on the new unit but on all units it was already selling.</p><p>The <strong>quantity effect</strong> is the extra revenue from the new units sold. The <strong>price effect</strong> is the revenue lost on existing units because they now sell at a lower price. Marginal revenue is the sum of these effects, so \\(MR<P\\).</p><p>The monopolist maximises profit by producing where \\(MR=MC\\): if MR > MC, expanding output adds profit; if MR < MC, reducing output adds profit. It then charges the highest price consumers will pay for that quantity, read from the demand curve.</p><p>Producing where P = MC would be the socially efficient outcome, but it would ignore the price effect and generally reduce the monopolist's profit. That is why the monopolist restricts output below the efficient level and charges a price above marginal cost.</p>",
      rubric: R("Explains the downward-sloping demand constraint", "Defines price and quantity effects", "Explains MR = MC and the demand-curve price", "Contrasts with P = MC efficiency"),
      difficulty: "medium",
      subtopic: "Marginal revenue"
    },
    {
      q: "Compare a monopoly with a perfectly competitive market in terms of quantity, price, consumer surplus, producer surplus and total surplus. Explain the deadweight loss from monopoly and why it arises.",
      answer:
        "<p>A profit-maximising monopolist produces where MR = MC, which is below the competitive quantity, and charges a price above marginal cost. A perfectly competitive market produces where P = MC.</p><p>Relative to competition, monopoly:</p><ul><li>produces a <strong>smaller quantity</strong>;</li><li>charges a <strong>higher price</strong>;</li><li>has <strong>lower consumer surplus</strong>;</li><li>may have higher producer surplus, but <strong>total surplus is lower</strong>.</li></ul><p>The <strong>deadweight loss</strong> is the triangle between the demand curve and the MC curve, from the monopoly quantity to the competitive quantity. For those units, willingness to pay exceeds marginal cost, so they would create surplus if produced. The monopolist does not produce them because doing so would require lowering price on existing units and would not maximise profit.</p><p>Part of the lost consumer surplus is transferred to the monopolist as higher profit; the deadweight loss is the part that is lost to society entirely.</p>",
      rubric: R("Compares quantity, price and surpluses", "Identifies the DWL triangle", "Explains why mutually beneficial units are not produced"),
      difficulty: "medium",
      subtopic: "Welfare"
    },
    {
      q: "A regulator can set an efficient price (P = MC) or a fair-returns price (P = ATC). Explain each rule, the profit outcome for the firm, and why regulators often choose fair-returns pricing for natural monopolies.",
      answer:
        "<p><strong>Efficient pricing:</strong> set \\(P=MC\\). This is the competitive outcome and maximises social surplus because all units valued above marginal cost are produced. However, for a natural monopoly with declining ATC, MC is below ATC. If P = MC, the price is below average cost and the firm makes an economic loss. Without a subsidy, the firm cannot survive in the long run.</p><p><strong>Fair-returns pricing:</strong> set \\(P=ATC\\). The firm covers all economic costs, including opportunity costs, and earns zero economic profit. The price is higher than marginal cost and some deadweight loss remains, but the firm can continue operating without subsidy.</p><p>Regulators often choose fair-returns pricing for natural monopolies because it preserves the economies of scale and keeps the firm financially viable, while preventing monopoly profit. Efficient pricing would require a subsidy or public ownership to cover the loss.</p>",
      rubric: R("Explains P = MC and the loss for a natural monopoly", "Explains P = ATC and zero profit", "Explains the regulatory trade-off and viability"),
      difficulty: "medium",
      subtopic: "Regulation"
    },
    {
      q: "A monopolist's profit can be calculated as TR − TC or as (P − ATC) × Q. Explain why both formulas are equivalent. When would one formula give a more precise answer than the other? What traps should you watch for in exam questions?",
      answer:
        "<p>Profit is total revenue minus total cost. Since \\(TR=P\\times Q\\) and \\(TC=ATC\\times Q\\),</p><p class='formula-line'>\\(\\pi=TR-TC=P Q-ATC Q=(P-ATC)Q\\).</p><p>The formulas are algebraically equivalent. In practice, use whichever has the data:</p><ul><li>If the question gives a table with exact total cost at the optimal quantity, <strong>TR − TC</strong> is more precise because it uses the actual cost number.</li><li>If the question gives price and ATC at the optimal quantity but not total cost, use <strong>(P − ATC) × Q</strong>. Reading ATC off a graph may be approximate.</li></ul><p>Exam traps:</p><ul><li><strong>Units:</strong> if the axis is in thousands or millions, convert before computing profit or DWL.</li><li><strong>Total vs per unit:</strong> a question asking for profit per unit wants P − ATC, not total profit.</li><li><strong>Price vs MR:</strong> the profit-maximising quantity is where MR = MC, but the price is read from the demand curve, not the MR curve.</li><li><strong>Fixed cost:</strong> fixed cost affects profit but not MR or the profit-maximising quantity.</li></ul>",
      rubric: R("Derives the equivalence of the two formulas", "Explains when each is more precise", "Lists at least two exam traps"),
      difficulty: "medium",
      subtopic: "Profit"
    },
    {
      q: "Explain the trade-off between static efficiency and innovation in monopoly policy. Why might a government allow some market power, and how should the source of that market power affect the policy response?",
      answer:
        "<p><strong>Static efficiency</strong> is about producing the socially optimal quantity at the lowest price today. Monopoly power reduces static efficiency: output is restricted, price exceeds marginal cost, and deadweight loss arises.</p><p><strong>Dynamic efficiency</strong> is about innovation and growth over time. Firms may need the prospect of temporary profit to invest in research and development. If competitors could copy immediately, the return to innovation would be low and less innovation would occur.</p><p>Policy should depend on the <strong>source</strong> of market power:</p><ul><li><strong>Natural monopoly</strong> from economies of scale: regulate price (often at fair returns) rather than break up the firm, because duplication would waste scale economies.</li><li><strong>Patents and copyrights</strong>: grant temporary exclusivity to reward innovation, but limit the duration and scope so the static cost does not last forever.</li><li><strong>Anti-competitive conduct</strong>: use antitrust policy to prevent mergers or practices that substantially lessen competition, as with the Grab–Uber merger.</li></ul><p>There is no single answer: the right policy weighs the static deadweight loss against the dynamic benefits of innovation and the source of the market power.</p>",
      rubric: R("Defines static and dynamic efficiency", "Explains the innovation incentive", "Tailors policy to natural monopoly, patents and conduct"),
      difficulty: "hard",
      subtopic: "Policy"
    }
  ]);

  EQS.addWrittenBank("government-failure", [
    {
      q: "Explain a negative externality using the market for electricity. What is the difference between marginal private cost and marginal social cost? Why does the free market overproduce, and what is the deadweight loss?",
      answer:
        "<p>A <strong>negative externality</strong> is a spillover cost imposed on bystanders that the producer does not pay. Electricity generation emits pollutants that harm health and the environment.</p><p><strong>Marginal private cost (MPC)</strong> is the firm's own cost of producing one more unit. <strong>Marginal social cost (MSC)</strong> is MPC plus the marginal external cost (MEC): \\(MSC=MPC+MEC\\). The firm ignores the MEC, so its private cost is too low.</p><p>The market equilibrium is where demand equals MPC, so the market produces too much relative to the social optimum, which is where demand equals MSC. For every unit between the social optimum and the market quantity, MSC exceeds the marginal benefit (demand), so producing it destroys surplus. The total of these losses is the <strong>deadweight loss</strong> triangle between MSC and demand over that quantity range.</p><p>The Pigouvian remedy is a tax equal to the marginal external cost at the optimum, which shifts the firm's private cost up to the social cost and internalises the externality.</p>",
      rubric: R("Defines negative externality and gives the electricity example", "Distinguishes MPC and MSC", "Explains overproduction and the DWL triangle", "Links the Pigouvian tax to MEC"),
      difficulty: "medium",
      subtopic: "Negative externality"
    },
    {
      q: "Explain a positive externality using education or vaccination. Why does the free market underproduce? Compare a Pigouvian subsidy with a command-and-control mandate as solutions.",
      answer:
        "<p>A <strong>positive externality</strong> is a spillover benefit to bystanders. Education raises productivity, tax revenue and civic outcomes; vaccination protects others through herd immunity. The <strong>marginal social benefit</strong> exceeds the private benefit: \\(MSB=MPB+MEB\\).</p><p>Buyers consider only their private benefit, so demand is too low relative to the social optimum. The market underproduces the good, and the deadweight loss is the surplus from socially worthwhile units that are not produced.</p><p>A <strong>Pigouvian subsidy</strong> lowers the cost or raises the effective demand, shifting quantity toward the social optimum. It uses prices and lets individuals decide, but it costs government revenue and may subsidise inframarginal units.</p><p><strong>Command-and-control</strong> (for example, mandatory childhood vaccination) requires the activity directly. It can achieve the target quantity with certainty, but it restricts choice and may be costly to enforce. The better tool depends on the size of the externality, the cost of administration and how sure the government needs to be that the target is met.</p>",
      rubric: R("Defines positive externality with an example", "Explains underproduction and DWL", "Compares subsidy and mandate"),
      difficulty: "medium",
      subtopic: "Positive externality"
    },
    {
      q: "State the Coase Theorem. What two conditions are required for private bargaining to reach an efficient outcome? Give an example of a situation where Coasean bargaining is likely to work and one where it is likely to fail.",
      answer:
        "<p>The <strong>Coase Theorem</strong> says that if property rights are well defined and transaction costs are low, private bargaining can reach an efficient outcome without government intervention, regardless of who initially holds the property rights.</p><p>The two conditions are: <strong>(1)</strong> clearly defined property rights and <strong>(2)</strong> low transaction costs (few parties, easy communication, enforceable agreements).</p><p><strong>Likely to work:</strong> two neighbouring HDB households bargaining over renovation noise or air-conditioner dripping. The parties are few, the source is clear, and community mediation can reduce negotiation costs.</p><p><strong>Likely to fail:</strong> a power plant polluting a river used by 100,000 fishermen. Property rights may be unclear, and the number of affected parties makes negotiation and enforcement very costly. Government regulation or a Pigouvian tax may then be more practical.</p>",
      rubric: R("States the theorem and the two conditions", "Gives a low-transaction-cost example", "Gives a high-transaction-cost example"),
      difficulty: "medium",
      subtopic: "Coase"
    },
    {
      q: "Compare command-and-control regulation with market-based policies for externalities. What are the advantages and disadvantages of each? Use a Pigouvian tax and a technology ban as examples.",
      answer:
        "<p><strong>Command-and-control</strong> directly regulates quantity, technology or behaviour. Example: banning a polluting technology or capping the number of cars through COEs. Advantages: the government can set the quantity or standard directly, which is useful when the safe limit is known and must be met. Disadvantages: regulators need detailed information about firms' costs, the policy may be inflexible, and firms have little incentive to innovate beyond the standard.</p><p><strong>Market-based policies</strong> use prices or tradable permits. Example: a Pigouvian tax on emissions. Advantages: firms with the lowest abatement costs reduce pollution most, which achieves a given reduction at lower total cost; the tax raises revenue and preserves an incentive to innovate. Disadvantages: the government may not know the right tax rate, the resulting quantity reduction is uncertain, and taxes can be regressive if they raise prices for lower-income households.</p><p>In practice, the choice depends on whether the priority is certainty about quantity (command-and-control) or cost-effectiveness and innovation (market-based), and on how well the regulator can measure the externality.</p>",
      rubric: R("Explains command-and-control with an example", "Explains market-based policy with an example", "Compares information, flexibility, cost-effectiveness and certainty"),
      difficulty: "hard",
      subtopic: "Policy tools"
    },
    {
      q: "Explain rivalry and excludability, and use them to classify private goods, club goods, common-pool resources and public goods. Why do public goods suffer from free-riding, and what is the standard solution?",
      answer:
        "<p><strong>Rivalry:</strong> one person's consumption reduces the amount available to others. <strong>Excludability:</strong> it is possible to prevent non-payers from consuming the good.</p><ul><li><strong>Private good:</strong> rival and excludable (a sandwich).</li><li><strong>Club good:</strong> non-rival but excludable (a streaming subscription, a toll road with low congestion).</li><li><strong>Common-pool resource:</strong> rival but non-excludable (a fishery, clean air).</li><li><strong>Public good:</strong> non-rival and non-excludable (national defence, street lighting).</li></ul><p>For a public good, people cannot be excluded, so each person has an incentive to benefit without paying. If everyone free-rides, voluntary contributions fall short of the efficient level and the good may not be provided. The standard solution is government provision financed by compulsory taxation, which makes paying mandatory. In some cases, technology or institutions can create excludability, but for pure public goods the free-rider problem remains.</p>",
      rubric: R("Defines rivalry and excludability", "Classifies all four good types with examples", "Explains free-riding and the tax-financed solution"),
      difficulty: "medium",
      subtopic: "Public goods"
    },
    {
      q: "A $2 per-unit tax is imposed on a market. Explain why the statutory incidence does not determine who bears the economic burden. What determines the split? What happens to tax revenue and deadweight loss as demand becomes more elastic?",
      answer:
        "<p>The tax creates a wedge between the price buyers pay and the price sellers receive. Whether the law says the buyer or the seller pays, the market must adjust to the same wedge and the same quantity. The economic incidence is therefore independent of the statutory incidence.</p><p>The burden falls more heavily on the side of the market that is <strong>less elastic</strong>, because that side finds it harder to change quantity and cannot escape the tax. If demand is perfectly inelastic, buyers bear the full tax; if supply is perfectly inelastic, sellers bear it.</p><p>Tax revenue is the tax per unit times the quantity traded after the tax. As demand becomes more elastic, quantity falls more in response to the tax, so tax revenue falls and the deadweight loss (the lost surplus from units no longer traded) rises. A tax is least distortionary when it is levied on a market where demand and supply are inelastic, but equity and other considerations may point in a different direction.</p>",
      rubric: R("Explains the tax wedge and statutory equivalence", "States the less-elastic-side rule", "Links elasticity to revenue and DWL"),
      difficulty: "medium",
      subtopic: "Tax incidence"
    },
    {
      q: "Explain how a binding price ceiling differs from a binding price floor. Who gains and who loses in each case? Why is deadweight loss created, and when does a price control have no effect?",
      answer:
        "<p>A <strong>price ceiling</strong> is a maximum price. It binds only if set below the equilibrium price. It creates excess demand (a shortage): quantity supplied falls and some buyers cannot get the good. Consumers who can buy pay less, but some consumers lose because they cannot buy at all; producers lose surplus; deadweight loss arises from units no longer traded.</p><p>A <strong>price floor</strong> is a minimum price. It binds only if set above equilibrium. It creates excess supply (a surplus): quantity demanded falls and some sellers cannot sell. Sellers who sell receive more, but some sellers lose sales; consumers lose surplus; deadweight loss arises from units no longer traded.</p><p>A price control has <strong>no effect</strong> if it does not bind: a ceiling above equilibrium or a floor below equilibrium is irrelevant because the market price already satisfies it. The size of the deadweight loss depends on the elasticities of demand and supply and on how far the control is from equilibrium.</p>",
      rubric: R("Defines ceiling and floor and binding conditions", "Identifies winners and losers in each case", "Explains DWL and the no-bite case"),
      difficulty: "medium",
      subtopic: "Price controls"
    },
    {
      q: "Explain the equity-efficiency trade-off and the concept of government failure. Why might a policy that improves fairness reduce total surplus, and why might government intervention itself be inefficient?",
      answer:
        "<p><strong>Efficiency</strong> is about maximising total social surplus; <strong>equity</strong> is about how fairly resources are distributed. A policy can improve equity while reducing efficiency. For example, a rent ceiling transfers surplus to some tenants but creates a shortage and deadweight loss; a progressive tax redistributes income but can distort work and investment incentives.</p><p><strong>Government failure</strong> is inefficiency caused by intervention itself. Sources include:</p><ul><li>deadweight losses from taxes and price controls;</li><li>bureaucracy and enforcement costs, which use real resources;</li><li>corruption and rent-seeking;</li><li>underground activity and evasion when controls create shortages or high taxes.</li></ul><p>Government intervention is not automatically efficient simply because it corrects a market failure. The relevant comparison is between the market outcome and the realistic policy outcome, including administrative costs and political incentives. Economics can describe the trade-off; deciding how much efficiency to sacrifice for equity is a normative choice.</p>",
      rubric: R("Defines the equity-efficiency trade-off with an example", "Lists at least three sources of government failure", "Explains that policy must be judged against realistic alternatives"),
      difficulty: "medium",
      subtopic: "Equity vs efficiency"
    }
  ]);

  EQS.addWrittenBank("macro-measurement", [
    {
      q: "Define GDP and explain the three equivalent approaches to measuring it. Why must intermediate goods be excluded, and how does the value-added approach avoid double counting?",
      answer:
        "<p><strong>GDP</strong> is the market value of all final goods and services produced within a country during a given period.</p><p>The three approaches measure the same circular flow:</p><ul><li><strong>Production approach:</strong> sum each firm's value added (sales minus purchases of intermediate goods).</li><li><strong>Expenditure approach:</strong> \\(GDP=C+I+G+(X-M)\\).</li><li><strong>Income approach:</strong> sum wages, profits, rents, interest and production-related taxes net of subsidies.</li></ul><p>Intermediate goods are excluded because their value is already embedded in the final good. If a cafe buys coffee beans for $0.25 and sells a cup for $2.00, counting both the beans and the cup would double-count the beans. Value added solves this: the supplier adds $0.25 and the cafe adds $1.75, giving $2.00 of GDP.</p>",
      rubric: R("Correct GDP definition", "Explains all three approaches", "Explains double counting and value added"),
      difficulty: "medium",
      subtopic: "GDP approaches"
    },
    {
      q: "For each item, state whether it is included in Singapore's GDP and in which expenditure component (C, I, G, X or none), and explain: (a) a newly built HDB flat; (b) a resale HDB flat; (c) a GST voucher received by a household; (d) a foreign tourist's hotel stay in Singapore; (e) a Singapore resident's hotel stay in Thailand; (f) a supermarket's increase in inventory.",
      answer:
        "<ul><li>(a) <strong>Included in I</strong>: new residential construction is investment.</li><li>(b) <strong>Excluded</strong>: the flat was produced in an earlier period; the resale is a transfer of an existing asset, not current production.</li><li>(c) <strong>Excluded from G</strong>: a transfer payment is not a purchase of currently produced goods or services. When the household spends the voucher, that spending may appear in C.</li><li>(d) <strong>Included in X</strong>: a foreign visitor's spending on domestically produced services is an export.</li><li>(e) <strong>Not in Singapore's GDP</strong>: the service is produced in Thailand and is an import (M) for Singapore, so it reduces NX.</li><li>(f) <strong>Included in I</strong>: an increase in inventories is inventory investment.</li></ul>",
      rubric: R("Correctly includes/excludes each item", "Assigns the correct expenditure component", "Explains resale, transfers and imports"),
      difficulty: "medium",
      subtopic: "What counts"
    },
    {
      q: "Explain the difference between GDP and GNI. Use an example of a cross-border worker to show how each measure changes. Why is Singapore's GNI below its GDP?",
      answer:
        "<p><strong>GDP</strong> measures production within a country's borders, regardless of who owns the factors of production. <strong>GNI</strong> measures income earned by a country's residents, regardless of where the production occurs:</p><p class='formula-line'>\\(GNI=GDP+(\\text{income received from abroad}-\\text{income paid abroad})\\).</p><p>Example: a Malaysian worker commutes to Singapore. The wages are produced in Singapore, so they count in Singapore's GDP. The worker is not a Singapore resident, so the wages are income paid abroad and are subtracted when moving to GNI; they are part of Malaysia's GNI.</p><p>Conversely, a Singapore resident working in Batam earns income produced in Indonesia (Indonesia's GDP) but counted in Singapore's GNI.</p><p>Singapore's GNI is below its GDP because foreign-owned firms in Singapore earn profits that are paid abroad, and this outflow is larger than the income Singapore residents earn from abroad.</p>",
      rubric: R("Defines GDP and GNI by location vs residency", "Applies the correct measure to a cross-border worker", "Explains Singapore's GNI < GDP"),
      difficulty: "medium",
      subtopic: "GDP vs GNI"
    },
    {
      q: "Explain the difference between nominal and real GDP, and between the CPI and the GDP deflator. When would you use each price measure? Why can nominal GDP grow while real GDP falls?",
      answer:
        "<p><strong>Nominal GDP</strong> values current production at current prices. <strong>Real GDP</strong> values current production at constant base-year prices, isolating changes in the volume of production.</p><p>The <strong>GDP deflator</strong> is nominal GDP ÷ real GDP × 100. It covers all domestically produced goods and services and excludes imports. The <strong>CPI</strong> tracks the cost of a representative consumer basket and can include imports; it is best for the cost of living.</p><p>Use real GDP to measure economic growth and the deflator to measure prices of domestic output. Use the CPI to measure consumer inflation and changes in purchasing power.</p><p>Nominal GDP can grow while real GDP falls if prices rise faster than quantities fall. For example, if output falls 2% but prices rise 5%, nominal GDP rises about 3% while real output has fallen. That is why growth is measured with real GDP.</p>",
      rubric: R("Defines nominal vs real GDP", "Distinguishes CPI and deflator coverage", "Explains when each is appropriate", "Explains nominal growth with falling real output"),
      difficulty: "medium",
      subtopic: "Real vs nominal"
    },
    {
      q: "Discuss the main limitations of GDP as a measure of well-being. Does a higher GDP per capita necessarily mean everyone is better off? What else might we want to measure?",
      answer:
        "<p>GDP measures market production, not everything people value. Limitations include:</p><ul><li><strong>Unpaid production:</strong> childcare, cooking and household work are excluded.</li><li><strong>Underground activity:</strong> illegal or unreported transactions are missed.</li><li><strong>Environmental costs:</strong> pollution and resource depletion are not deducted.</li><li><strong>Leisure:</strong> the value of free time is not captured.</li><li><strong>Distribution:</strong> GDP per capita is an average; gains may be concentrated among a few.</li><li><strong>Depreciation:</strong> GDP does not deduct wear and tear on capital; NDP = GDP − depreciation.</li></ul><p>Higher GDP per capita does not necessarily mean everyone is better off. The average can rise while inequality worsens or while environmental and health costs fall on others. GDP is correlated with life satisfaction across countries, but it is not a complete measure of well-being.</p><p>Additional measures could include median income, inequality (Gini), health and education outcomes, environmental quality, leisure and subjective well-being. These do not replace GDP, but they complete the picture.</p>",
      rubric: R("Lists at least four limitations of GDP", "Explains the distribution/average problem", "Suggests broader well-being measures"),
      difficulty: "medium",
      subtopic: "GDP limitations"
    },
    {
      q: "Using the expenditure approach, explain why imports are subtracted from GDP. Why can Singapore's exports exceed its entire GDP? Does that mean Singapore's GDP is understated?",
      answer:
        "<p>The expenditure identity is \\(GDP=C+I+G+(X-M)\\). Imports may already be included in C, I or G, but they were not produced domestically. Subtracting M removes that spending and leaves only expenditure on domestic production.</p><p>Example: a $1,500 imported laptop raises C by $1,500 and M by $1,500, so the net effect on GDP is zero.</p><p>Singapore's exports can exceed GDP because exports measure the <strong>gross value</strong> of goods and services sold abroad, while GDP measures <strong>value added</strong> domestically. Singapore imports many components, processes or re-exports them; the gross export value includes imported content, which is subtracted in the import term. GDP is not understated: it correctly measures the value added within Singapore.</p>",
      rubric: R("Explains the import subtraction with the identity", "Uses the imported-laptop example", "Distinguishes gross trade flows from value added"),
      difficulty: "medium",
      subtopic: "Open economy"
    }
  ]);

  EQS.addWrittenBank("productivity", [
    {
      q: "Explain why economists use purchasing power parity (PPP) rather than market exchange rates to compare living standards across countries. Give the PPP formula and discuss two limitations of the PPP approach.",
      answer:
        "<p>Market exchange rates convert incomes at the rate at which currencies trade, but that rate does not reflect what money can buy in each country. Prices of non-traded goods and services (haircuts, rent, meals) are much lower in poorer countries, so exchange-rate conversion understates their real living standards. Exchange rates also fluctuate because of capital flows and speculation, even when nothing real has changed.</p><p><strong>PPP</strong> converts incomes using the relative price of a standardised basket of goods: \\(GDP_{PPP}=GDP_{local}\\times(\\text{price in US\\$}/\\text{price in local currency})\\). The Big Mac is a simple example. PPP income measures purchasing power, not just trading value.</p><p>Limitations:</p><ul><li>The basket may not represent every country's consumption patterns; a single good such as the Big Mac is only an illustration.</li><li>Price data and quality comparisons are difficult, especially for non-traded services.</li><li>PPP still relies on surveys and can be revised; it narrows gaps but does not eliminate measurement problems.</li></ul><p>Even after PPP, large income differences remain, so PPP improves comparisons but does not make them perfect.</p>",
      rubric: R("Explains the problems with market exchange rates", "Gives the PPP formula and intuition", "Discusses at least two limitations"),
      difficulty: "medium",
      subtopic: "PPP"
    },
    {
      q: "Decompose GDP per person into productivity, hours per worker and the share of the population working. Why must sustained increases in income per person come mainly from productivity? What are the three proximate sources of productivity?",
      answer:
        "<p>The identity is:</p><p class='formula-line'>\\\\\(\\dfrac{GDP}{Population}=\\dfrac{GDP}{Hours}\\times\\dfrac{Hours}{Workers}\\times\\dfrac{Workers}{Population}\\\\.</p><p>The first term is <strong>productivity</strong> (output per hour), the second is hours per worker, and the third is the employment share.</p><p>Hours per worker cannot rise without limit (there are only 24 hours in a day), and the share of the population working cannot rise indefinitely (children, retirees and others are not in the labour force). Therefore, sustained growth in income per person must come from producing more per hour.</p><p>The three proximate sources of productivity are:</p><ul><li><strong>Physical capital:</strong> machines, buildings and infrastructure per worker.</li><li><strong>Human capital:</strong> the knowledge, skills and experience of workers (H = L × h).</li><li><strong>Technology:</strong> better ideas and more efficient ways of producing.</li></ul><p>Countries with more of these three produce more output per worker and have higher living standards.</p>",
      rubric: R("Writes the decomposition correctly", "Explains the limits on hours and employment share", "Lists K, H and A with definitions"),
      difficulty: "medium",
      subtopic: "Productivity"
    },
    {
      q: "Explain the aggregate production function Y = A × F(K, H). What do K, H and A represent? State the two key properties of the function, and explain how technology differs from capital accumulation.",
      answer:
        "<p>\\(Y=A\\times F(K,H)\\) describes how physical capital \\(K\\) and total efficiency units of labour \\(H=L\\times h\\) are combined to produce GDP \\(Y\\), with technology \\(A\\) multiplying the whole function.</p><p>Properties:</p><ol><li><strong>More inputs increase output:</strong> holding the other input fixed, more K or more H raises output.</li><li><strong>Diminishing marginal product:</strong> each additional unit of K or H adds less output than the previous unit, holding the other inputs fixed.</li></ol><p><strong>Technology</strong> is not just more machines. It is knowledge and efficiency: better ways of producing, which shift the entire production function upward. Capital accumulation moves the economy along the function; technology shifts the function up, so the same K and H produce more output. That is why technology can sustain growth even when additional capital faces diminishing returns.</p>",
      rubric: R("Defines Y, K, H and A", "States both properties", "Distinguishes moving along the function from shifting it"),
      difficulty: "medium",
      subtopic: "Production function"
    },
    {
      q: "The US has GDP per worker of about $112,500 and India about $13,300. If India had US technology but its own K and H, its GDP per worker would be about $24,000. Decompose the 8.5× gap into a technology gap and a K/H gap. Interpret the result: does technology explain most of the difference?",
      answer:
        "<p>Total gap = US ÷ India = 112,500 ÷ 13,300 ≈ <strong>8.5×</strong>.</p><p>Technology gap = India with US technology ÷ India today = 24,000 ÷ 13,300 ≈ <strong>1.8×</strong>. This is the gain India would get from US technology alone (about 80% higher output per worker).</p><p>K and H gap = US ÷ India-with-US-technology = 112,500 ÷ 24,000 ≈ <strong>4.7×</strong>. This is the gap that remains even if technology were equal.</p><p>Check: 1.8 × 4.7 ≈ 8.5.</p><p>Technology is important but does <em>not</em> explain most of the gap: US technology alone would leave India 4.7× poorer. The larger part of the difference comes from India's lower physical capital per worker and lower human capital. The poorest countries lag on all three sources, which is why development requires accumulating K and H as well as adopting technology.</p>",
      rubric: R("Computes total, technology and K/H gaps", "Checks that the ratios multiply", "Interprets the relative importance correctly"),
      difficulty: "hard",
      subtopic: "Decomposing gaps"
    },
    {
      q: "Explain total efficiency units of labour, H = L × h, with an example. Why is a smaller but more skilled workforce sometimes able to produce as much as a larger, less-skilled workforce? What does this imply for education policy?",
      answer:
        "<p>\\(H=L\\times h\\): total efficiency units equal the number of workers \\(L\\) times average human capital per worker \\(h\\) (schooling, skills, experience). Human capital adjusts the labour input for quality, not just quantity.</p><p>Example: Economy A has 1,000 workers with h = 1.0, so H = 1,000. Economy B has 750 workers with h = 2.0, so H = 1,500. Economy B has fewer workers but more effective labour.</p><p>A smaller, highly skilled workforce can produce more because each worker embodies more knowledge and can perform tasks more productively. This is why education and training can raise output even when the labour force is not growing.</p><p>For policy, investing in schooling, training and skills can raise h and therefore H. But human capital faces diminishing marginal product when other inputs are fixed, and skills must be combined with physical capital and technology to be productive. Education policy should therefore be paired with investment and technology adoption.</p>",
      rubric: R("Defines H and gives a numerical example", "Explains quality vs quantity of labour", "Links to education policy and diminishing returns"),
      difficulty: "medium",
      subtopic: "Human capital"
    }
  ]);

  EQS.addWrittenBank("growth", [
    {
      q: "Explain the exponential growth formula and the Rule of 70. Why is economic growth measured as a percentage change rather than a dollar change? Use an example to show why a one-percentage-point difference in growth matters over 40 years.",
      answer:
        "<p>Exponential growth: \\(y_t=(1+g)^t y_0\\), where \\(g\\) is the annual growth rate as a decimal and \\(t\\) is the number of years. Each year's growth applies to the current level, so gains compound.</p><p>The <strong>Rule of 70</strong> approximates doubling time: \\(t_{double}\\approx70/g\\%\\\\. At 2% growth, income doubles in about 35 years; at 7%, in about 10 years.</p><p>Growth is measured as a percentage change because a $1,000 increase means something very different at an income of $2,000 (50%) and $100,000 (1%). Percentage changes allow comparisons across countries and over time.</p><p>Example: two countries both start at $50,000. At 2% for 40 years: \\(1.02^{40}\\times50,000\\approx\\$110,400\\). At 3%: \\(1.03^{40}\\times50,000\\approx\\$163,100\\). A one-percentage-point difference produces a gap of about $52,700, or roughly 48% more income. Small growth differences compound into large living-standard differences.</p>",
      rubric: R("Writes the exponential formula and Rule of 70", "Explains why percentage changes are used", "Computes and interprets the 40-year comparison"),
      difficulty: "medium",
      subtopic: "Compounding"
    },
    {
      q: "Explain why capital accumulation alone cannot sustain long-run growth. What is the role of diminishing returns and the investment share? Why is technology the engine of long-run growth?",
      answer:
        "<p>Capital accumulation raises output, but with <strong>diminishing marginal product</strong>: holding labour and technology fixed, each extra machine adds less output than the previous one. If investment continues at the same pace, output grows by smaller and smaller amounts, so the growth rate falls.</p><p>To keep growth up, the investment share of GDP would have to keep rising. But it cannot: it can never exceed 100% of GDP, and every dollar invested is a dollar not consumed. Singapore's investment rate peaked at almost half of GDP in 1984 and then fell back, while growth slowed from about 8.3% a year (1965–80) to about 2.5% (2010–25).</p><p><strong>Technology</strong> avoids these limits. Better ideas and methods raise output from the same K and H, shifting the whole production function upward. New ideas can build on existing knowledge, so technological progress can continue indefinitely. In growth accounting, technology typically explains about two-thirds of long-run growth in US output per hour.</p>",
      rubric: R("Explains diminishing marginal product of capital", "Explains the investment-share ceiling", "Explains why technology shifts the production function and can sustain growth"),
      difficulty: "medium",
      subtopic: "Sources of growth"
    },
    {
      q: "Explain growth accounting. How is the technology residual calculated, and what does its share of growth mean? Why should we be cautious about interpreting the residual as 'technology'?",
      answer:
        "<p><strong>Growth accounting</strong> splits the growth of GDP per hour into contributions from physical capital, human capital and technology:</p><p class='formula-line'>\\\\\(g_Y=g_K+g_H+g_A\\\\.</p><p>The contributions of K and H are estimated from data. Technology is the <strong>residual</strong>: \\(g_A=g_Y-g_K-g_H\\). Its share of growth is \\(g_A/g_Y\\).</p><p>For example, if GDP per hour grows 3.0%, capital contributes 1.2 pp and human capital 0.4 pp, then technology contributes 1.4 pp, or about 47% of growth.</p><p>Caution: the residual is whatever K and H fail to explain, so it inherits measurement error. If capital's contribution is understated, technology's contribution is overstated. Years of schooling, for instance, ignore differences in school quality. If better data show capital contributed 1.6 pp instead of 1.2, technology falls to 1.0 pp and its share to 33%. The residual is a measure of our ignorance as well as of technology.</p>",
      rubric: R("Writes the growth-accounting identity", "Computes residual and share", "Explains measurement error and the direction of bias"),
      difficulty: "medium",
      subtopic: "Growth accounting"
    },
    {
      q: "Distinguish catch-up growth from sustained growth. Why can poor countries grow faster by adopting technology, and why is catch-up not guaranteed? What conditions must be in place for catch-up to continue?",
      answer:
        "<p><strong>Catch-up growth</strong> occurs when a poorer country grows rapidly by adopting the production methods and technologies already used by richer countries. <strong>Sustained growth</strong> is positive, relatively steady growth over a long period, typically at the technological frontier where new ideas must be invented.</p><p>Adoption can be faster and cheaper than invention: a country can import machinery, learn from foreign firms and skip the research costs. Examples include Singapore, South Korea, Chile and Hong Kong.</p><p>Catch-up is <strong>not guaranteed</strong>. Argentina was among the richest countries around 1900 and fell behind; Niger and the Central African Republic had negative growth. Countries may lack the institutions, human capital, infrastructure or stability needed to adopt technology effectively.</p><p>For catch-up to continue, capital must remain productive, the country must keep adopting new technology, and it must develop the skills and institutions to absorb it. As the country approaches the frontier, diminishing returns to capital set in and growth must increasingly come from innovation, so the growth rate typically slows.</p>",
      rubric: R("Defines catch-up vs sustained growth", "Explains the advantage of adoption", "Explains why catch-up can fail and what conditions matter"),
      difficulty: "medium",
      subtopic: "Catch-up"
    },
    {
      q: "Explain the Malthusian trap and how the world escaped it. What role did technological progress and the demographic transition play?",
      answer:
        "<p>The <strong>Malthusian trap</strong> describes the pre-industrial pattern: a better harvest or new technology raised output, but the extra food supported a larger population. Income per person was pushed back toward subsistence, so productivity gains showed up as more people rather than richer people.</p><p>Escaping the trap required two changes:</p><ol><li><strong>Continuous technological progress</strong> in production, transport and agriculture, so output grew faster than population.</li><li><strong>The demographic transition:</strong> as people moved from rural farms to urban factories, fertility fell. Slower population growth meant that higher output became higher income per person.</li></ol><p>The Industrial Revolution, beginning around 1800, introduced mechanised production, steam power and new ideas that built on existing knowledge. Sustained growth is historically recent: for most of human history, living standards were roughly stagnant. The combination of faster output growth and slower population growth broke the Malthusian cycle.</p>",
      rubric: R("Defines the Malthusian trap", "Explains the demographic transition", "Explains the role of continuous technological progress"),
      difficulty: "medium",
      subtopic: "Growth history"
    },
    {
      q: "Does economic growth reduce poverty? Discuss the evidence and the main caveats. Why is the distinction between correlation and causation important here?",
      answer:
        "<p>The evidence shows a <strong>negative relationship</strong> between a country's average growth rate and the change in its poverty rate: faster-growing countries tend to see larger falls in the share of people below the poverty line. Sustained growth has lifted hundreds of millions out of extreme poverty, especially in East and South Asia, and China is a prominent example.</p><p>Caveats:</p><ul><li><strong>Correlation is not causation.</strong> Growth and poverty reduction may both be driven by better institutions, education or technology. The negative relationship is suggestive, not proof that growth alone causes poverty reduction.</li><li><strong>Distribution matters.</strong> Growth can be concentrated among a small group, leaving the poor behind. The average can rise while inequality worsens.</li><li><strong>Other dimensions matter.</strong> Health, education, environment and security are not fully captured by income.</li></ul><p>The balanced conclusion is that growth is a powerful tool for poverty reduction, but it is not sufficient on its own. No country has ended mass poverty without sustained growth, yet policy must also attend to distribution and the non-income dimensions of well-being.</p>",
      rubric: R("Describes the negative growth-poverty relationship", "Explains correlation vs causation", "Discusses distribution and non-income dimensions"),
      difficulty: "medium",
      subtopic: "Growth and poverty"
    }
  ]);

  EQS.addWrittenBank("institutions", [
    {
      q: "Explain the difference between proximate and fundamental causes of prosperity, and show how they fit together. Which fundamental cause does the course conclude is most important, and why?",
      answer:
        "<p><strong>Proximate causes</strong> are the immediate factors that directly raise GDP per capita: physical capital, human capital and technology. <strong>Fundamental causes</strong> are the deeper reasons why countries accumulate different amounts of those factors: geography, culture and institutions.</p><p>The framework is: fundamental causes → incentives → accumulation of K, H and A → productivity → GDP per capita. For example, secure property rights (an institution) encourage firms to invest in machines (K), workers to acquire skills (H), and entrepreneurs to adopt new technology (A).</p><p>The course concludes that <strong>institutions</strong> are the most important fundamental cause. Geography and culture may influence behaviour, but they cannot explain why societies with similar geography and culture diverge sharply, as North and South Korea did, or why Austria and Czechoslovakia diverged under different institutional systems and converged after 1989. The reversal of fortune also shows that geography cannot explain changes in prosperity because geography did not change. Institutions are also the fundamental cause most within a society's control: a country cannot choose its climate, but it can change its rules.</p>",
      rubric: R("Defines proximate and fundamental causes", "Explains the causal chain", "Uses evidence to justify the institutions conclusion"),
      difficulty: "medium",
      subtopic: "Framework"
    },
    {
      q: "Evaluate the geography, culture and institutions hypotheses using the Korean peninsula, Austria/Czechoslovakia, and the reversal of fortune. Which hypothesis is best supported, and what are the limitations of the evidence?",
      answer:
        "<p><strong>Geography:</strong> predicts that tropical or geographically disadvantaged places stay poor. The data show low incomes concentrated in the tropics, but this is a correlation. Singapore is a rich tropical economy, and disease eradication and air conditioning can offset geographic disadvantages. The reversal of fortune is stronger evidence against geography: places that were rich in 1500 became poor even though their geography did not change.</p><p><strong>Culture:</strong> Weber argued that Protestant values encouraged work and saving. But culture is hard to change quickly, and similar cultures can have very different outcomes. The Korean peninsula shared language, history and culture before the split, yet the economies diverged enormously.</p><p><strong>Institutions:</strong> the two Koreas are a natural experiment: geography and culture were broadly held constant while institutions diverged. South Korea adopted market-based, inclusive institutions and grew; North Korea adopted extractive, centrally planned institutions and stagnated. Austria and Czechoslovakia diverged under different institutions and converged after 1989. The reversal of fortune is consistent with colonisers imposing different institutions depending on settlement conditions.</p><p><strong>Limitations:</strong> there are only a few natural experiments, each could be special (war, foreign support, Soviet control), and both Korea and Austria/Czechoslovakia are temperate cases. The settler-mortality data have been criticised for measurement problems. The evidence is strong but not conclusive; institutions are the best-supported fundamental cause, while geography and culture may still play secondary roles.</p>",
      rubric: R("Evaluates each hypothesis with evidence", "Uses the natural experiments and reversal of fortune", "Discusses limitations of the evidence"),
      difficulty: "hard",
      subtopic: "Evidence"
    },
    {
      q: "Explain inclusive and extractive institutions. How do they affect the incentives to invest, innovate and become an entrepreneur? Use the return-to-entrepreneurship model to illustrate.",
      answer:
        "<p><strong>Inclusive institutions</strong> protect property rights, enforce contracts, encourage competition and reward innovation. <strong>Extractive institutions</strong> have weak property rights, corruption, arbitrary rules and barriers to entry that concentrate opportunities among elites.</p><p>In the entrepreneurship model, potential entrepreneurs are ranked by the return to their ideas, giving a downward-sloping return curve. A person becomes an entrepreneur if the return exceeds the opportunity cost of the next-best job (the cost line). The equilibrium number of entrepreneurs is where the return equals the opportunity cost.</p><ul><li><strong>Weak property rights</strong> mean entrepreneurs cannot keep the full return; officials or elites capture a share. The return curve shifts <strong>left</strong>, reducing the number of entrepreneurs.</li><li><strong>Barriers to entry</strong> (licences, permits, regulations that protect incumbents) raise the cost of starting a business. The cost line shifts <strong>up</strong>, reducing entrepreneurship further.</li></ul><p>Together, extractive institutions can sharply reduce entrepreneurship—for example, from 700 to 100 potential founders in the model. Inclusive institutions do the opposite: secure returns and lower entry costs shift the return curve right and the cost line down, encouraging investment, innovation and business formation.</p>",
      rubric: R("Defines inclusive and extractive institutions", "Explains the return curve and cost line", "Shows the effects of weak property rights and entry barriers"),
      difficulty: "medium",
      subtopic: "Entrepreneurship"
    },
    {
      q: "Explain the reversal of fortune and why it is evidence against the geography hypothesis. What proxies are used to measure prosperity in 1500, and why are they credible? What is the settler-mortality interpretation, and what is the main critique?",
      answer:
        "<p>The <strong>reversal of fortune</strong> is the finding that former colonies that were relatively prosperous around 1500—measured by urbanisation and population density—are relatively poor today, while some that were sparsely populated and less developed became rich.</p><p>Geography predicts persistence: if climate and ecology made a place rich in 1500, they should still make it rich today. Instead, the ranking reversed while geography stayed the same. Something that changed must explain the reversal; institutions changed with colonisation.</p><p><strong>Proxies:</strong></p><ul><li><strong>Urbanisation:</strong> town dwellers do not grow their own food, so large towns require an agricultural surplus. It is a credible signal of pre-industrial productivity.</li><li><strong>Population density:</strong> before industrialisation, extra productivity tended to raise population rather than income per person (the Malthusian logic), so denser areas were more productive.</li></ul><p>Both proxies show the same negative relationship with income today, so the finding is robust to measurement choice.</p><p><strong>Settler-mortality interpretation:</strong> in places with high European mortality (tropical disease), few Europeans settled; colonisers extracted resources and built extractive institutions. In temperate, low-mortality places, many Europeans settled and demanded secure property rights, leading to more inclusive institutions. Those institutions persisted.</p><p><strong>Critique:</strong> Albouy (2012) argues that many settler-mortality rates were not measured locally, were assigned from neighbouring countries, or came from soldiers on campaigns with unusually high death rates. After correcting these problems, the relationship between mortality and institutions becomes weaker. The authors reply that their main results survive reasonable corrections, and the reversal-of-fortune evidence does not rely on the mortality data. The debate illustrates how empirical economics progresses.</p>",
      rubric: R("Defines the reversal and why it challenges geography", "Explains both proxies", "Explains the settler-mortality channel", "Discusses the critique and reply"),
      difficulty: "hard",
      subtopic: "Reversal of fortune"
    },
    {
      q: "Explain how political institutions shape economic institutions and economic outcomes. Why do extractive institutions persist, and what is political creative destruction? How can democratisation affect growth?",
      answer:
        "<p>Political institutions determine who holds power and how that power is constrained. Those in power choose economic institutions: property rights, market rules, contracts, entry and exit. Economic institutions shape incentives to invest, innovate and become entrepreneurs, which in turn determine economic outcomes.</p><p><strong>Extractive institutions persist</strong> because they benefit the elite. Economically, they reduce investment, entrepreneurship and innovation, slowing growth. Politically, they protect existing wealth, restrict competition and prevent new challengers from emerging. The elite may accept slower growth to preserve power.</p><p><strong>Political creative destruction</strong> is the process by which economic progress creates new businesses, technologies and economic winners. Those new winners may challenge existing firms and political elites, so elites may resist innovations that threaten their position. This is one reason technological change is sometimes blocked.</p><p><strong>Democratisation</strong> broadens political participation and can lead to more inclusive economic institutions. The evidence suggests little immediate growth effect, followed by higher GDP per capita over the longer run (about 20% higher after 25 years in the Pearson evidence). Examples include South Korea (1987), Czechoslovakia (1989) and Indonesia (1998). The effect is not automatic, but broader power-sharing tends to make extractive rules harder to sustain.</p>",
      rubric: R("Links political to economic institutions", "Explains persistence and political creative destruction", "Discusses democratisation and growth"),
      difficulty: "hard",
      subtopic: "Political institutions"
    },
    {
      q: "Why has foreign aid often disappointed? Explain the three main reasons. How do randomised controlled trials (RCTs) offer a different approach, and what are their strengths and limitations?",
      answer:
        "<p>The case for aid is that poor countries lack K, H and A, so external resources could fill the gaps. But aid has often been ineffective for three reasons:</p><ol><li><strong>Too small:</strong> aid is not large enough to raise physical capital and education substantially, and it does little for technology or production efficiency.</li><li><strong>Captured:</strong> corrupt officials divert funds. In Uganda in the 1990s, only about 13% of education grants reached schools.</li><li><strong>Entrenches:</strong> aid given within extractive institutions can strengthen dictators and the rules that keep countries poor.</li></ol><p>These reasons suggest aid targets the proximate causes while the fundamental cause is extractive institutions.</p><p><strong>RCTs</strong> change the question from \"Does aid work?\" to \"Does this specific programme work?\" Programmes are randomly assigned to treatment and control groups, as in a medical trial. Examples: deworming in Kenya reduced absenteeism and cost about $3.50 per extra year of schooling; audits of Indonesian road projects reduced missing funds.</p><p><strong>Strengths:</strong> credible causal evidence on specific interventions, better targeting of limited aid, and programme designs that are harder to capture.</p><p><strong>Limitations:</strong> external validity (results may not transfer), RCTs cannot randomise national institutions, and improving lives is not the same as generating sustained growth. Micro evidence can make aid work better, but institutions still shape long-run prosperity.</p>",
      rubric: R("Explains the three reasons aid disappoints", "Explains the RCT approach with examples", "Discusses strengths and limits"),
      difficulty: "medium",
      subtopic: "Foreign aid"
    }
  ]);

  EQS.addWrittenBank("policy", [
    {
      q: "Explain the three key properties of business cycles—co-movement, limited predictability and persistence—using examples from Singapore or the Great Depression. Why do these properties make stabilisation difficult?",
      answer:
        "<p><strong>Co-movement:</strong> many variables move together over the cycle. In a recession, output, consumption, investment and employment fall together, while unemployment and retrenchments rise. In Singapore in Q2 2020, real GDP fell 13% year-on-year, consumption fell 28%, investment fell 27%, employment fell by 121,800 and unemployment rose. Investment is especially volatile because projects can be postponed.</p><p><strong>Limited predictability:</strong> turning points are hard to forecast because shocks are unexpected. In November 2019, Singapore forecast positive 2020 growth; by August 2020 it was forecasting a deep contraction. During the Great Depression, Irving Fisher famously said share prices had reached a \"permanently high plateau\" just before the 1929 crash.</p><p><strong>Persistence:</strong> growth tends to be followed by growth, and contraction by contraction. The Great Depression saw output fall for four consecutive years and not regain its 1929 level until 1936; unemployment was still 15% in 1940.</p><p>These properties make stabilisation difficult: policymakers may not see a recession coming, and by the time they act, the economy may have moved. Policy lags can make stimulus arrive too late or too early. This is why automatic stabilisers, timely data and flexible labour markets matter.</p>",
      rubric: R("Explains all three properties with examples", "Connects each property to the difficulty of stabilisation", "Mentions policy lags or forecasting limits"),
      difficulty: "medium",
      subtopic: "Business cycles"
    },
    {
      q: "Compare a negative demand shock with a negative supply shock. What happens to output, unemployment and inflation in each case? Why does policy face a harder trade-off in the supply-shock case?",
      answer:
        "<p><strong>Negative demand shock:</strong> spending falls. Firms sell less, output falls, they hire fewer workers, so unemployment rises. With weaker demand, inflation falls. Example: a financial crisis or a collapse in consumer confidence.</p><p><strong>Negative supply shock:</strong> production becomes costlier. Output falls and unemployment rises, but inflation rises because costs are higher. Example: a drought that raises food prices, or an energy price spike.</p><p>In the demand-shock case, expansionary policy can improve both goals: it raises output and employment, and it brings inflation back up toward normal. There is no painful trade-off.</p><p>In the supply-shock case, policy faces a dilemma. Expansionary policy reduces unemployment but pushes inflation even higher. Contractionary policy reduces inflation but raises unemployment further. Policymakers must choose which goal to prioritise, or use targeted measures (such as temporary transfers for hard-hit households) while monetary policy addresses inflation. Singapore's usual response to an imported inflation shock is to let the S$ strengthen to cut imported inflation, while the Budget supports the households most affected.</p>",
      rubric: R("Correct effects for demand shock", "Correct effects for supply shock", "Explains the policy trade-off in the supply case", "Mentions targeted or exchange-rate responses"),
      difficulty: "medium",
      subtopic: "Shocks"
    },
    {
      q: "Explain how a central bank uses interest rates to stabilise the economy. Include the role of government bonds, the transmission mechanism, and the real interest rate. Why might expected deflation make a recession worse?",
      answer:
        "<p>A central bank such as the US Federal Reserve changes the cost of borrowing. To ease, it <strong>buys government bonds</strong> from banks, paying with cash. Banks hold more cash and are willing to lend more, so interest rates fall. Lower rates make car loans, home loans and business investment cheaper; households and firms borrow and spend more, raising output, jobs and inflation.</p><p>To tighten, the central bank <strong>sells bonds</strong>, taking cash out of the banking system. Banks have less to lend, interest rates rise, borrowing and spending fall, and output, jobs and inflation decline.</p><p>The <strong>real interest rate</strong> is approximately the nominal rate minus expected inflation: \\(r\\approx i-\\pi^e\\). Borrowers and savers care about the real rate because it measures purchasing power. If prices are expected to fall (deflation), the real rate is higher than the nominal rate. For example, a 3% nominal loan with 1% expected deflation has a 4% real rate. Expected deflation therefore makes borrowing feel more expensive, so spending falls further—exactly when the economy is already weak. This is one reason central banks fear deflation.</p>",
      rubric: R("Explains bond purchases/sales and interest rates", "Traces the transmission to spending, output and inflation", "Defines the real interest rate and explains the deflation problem"),
      difficulty: "medium",
      subtopic: "Monetary policy"
    },
    {
      q: "Explain how MAS uses the exchange rate as its monetary policy tool. What is the S$NEER, and what does it mean to let the S$ strengthen faster or more slowly? Trace the effects of expansionary and contractionary exchange-rate policy on output, jobs and inflation.",
      answer:
        "<p>MAS steers the <strong>S$NEER</strong>, the Singapore dollar nominal effective exchange rate: an average of the S$ against a trade-weighted basket of currencies, kept within a policy band. MAS buys or sells S$ to keep the currency inside the band.</p><p>A <strong>stronger S$</strong> means each US$ costs fewer S$: imports become cheaper in S$, but Singapore's exports become more expensive for foreigners. A <strong>weaker S$</strong> does the opposite.</p><p><strong>Expansionary</strong> (recession): MAS lets the S$ strengthen more slowly, or weaken. Exports become cheaper abroad, so foreign demand rises and firms produce and hire more. Imports become more expensive, so inflation rises. Result: output ↑, jobs ↑, inflation ↑.</p><p><strong>Contractionary</strong> (overheating boom): MAS lets the S$ strengthen faster. Imports become cheaper, lowering imported inflation, while exports become more expensive, reducing foreign demand. Result: output ↓, jobs ↓, inflation ↓.</p><p>Singapore uses the exchange rate because it is extremely open to trade (trade is over 300% of GDP) and imports much of what it consumes. Interest rates are closely tied to world rates, so the exchange rate is the more effective tool. The trade-off is the same as with interest rates: policy leans against the cycle, but it cannot control both the exchange rate and the interest rate when capital flows freely.</p>",
      rubric: R("Defines S$NEER and the policy band", "Explains stronger/weaker S$ effects", "Traces expansionary and contractionary channels", "Explains why Singapore uses the exchange rate"),
      difficulty: "medium",
      subtopic: "Monetary policy"
    },
    {
      q: "Explain the three tools of fiscal policy and how expansionary and contractionary fiscal policy work. Why are policy lags and policy waste a problem? Use Singapore's 2020 response as an example.",
      answer:
        "<p>Fiscal policy uses:</p><ul><li><strong>Government spending (G):</strong> infrastructure, public services, nurses and teachers. It adds directly to demand.</li><li><strong>Taxes (T):</strong> income tax, corporate tax, GST. A tax cut leaves households and firms with more to spend.</li><li><strong>Transfers and subsidies:</strong> cash payouts, wage subsidies, jobseeker support. They raise incomes or lower firms' costs.</li></ul><p><strong>Expansionary</strong> policy: spend more, cut taxes or increase transfers. People have more money, firms sell more and hire more, and the multiplier amplifies the effect. Result: output ↑, jobs ↑, inflation ↑.</p><p><strong>Contractionary</strong> policy: spend less, raise taxes or cut transfers. Result: output ↓, jobs ↓, inflation ↓.</p><p>In 2020, Singapore committed about <strong>S$97 billion</strong> across five Budgets, close to 20% of GDP, mostly cash payouts, wage subsidies and loans. The Jobs Support Scheme paid 25–75% of the first S$4,600 of local workers' monthly wages, saving an estimated 155,000 jobs on average in 2020–21. This was large-scale expansionary fiscal policy financed from reserves rather than borrowing.</p><p><strong>Policy lags:</strong> recognising a recession, deciding on a response and implementing it take time. Infrastructure takes years; cash transfers are faster. Stimulus can arrive after recovery and overheat the economy.</p><p><strong>Policy waste:</strong> spending may be chosen to win votes rather than to create value. Badly targeted measures do little for output or jobs.</p>",
      rubric: R("Explains the three fiscal tools", "Contrasts expansionary and contractionary effects", "Uses the Singapore 2020 example", "Explains lags and waste"),
      difficulty: "medium",
      subtopic: "Fiscal policy"
    },
    {
      q: "Explain why wages may be downwardly rigid and how this affects unemployment in a recession. What three measures does Singapore use to make labour costs more flexible?",
      answer:
        "<p>In a recession, labour demand shifts left. If wages could fall freely, the market would clear at a lower wage with little unemployment. But wages are often <strong>downwardly rigid</strong>:</p><ul><li>minimum wage laws set a floor;</li><li>unions and firms may resist pay cuts to maintain morale and retain workers;</li><li>workers resist nominal wage cuts, and firms may prefer layoffs to across-the-board cuts.</li></ul><p>With a rigid wage above the new equilibrium, firms hire only up to the labour demand curve. More people want jobs than there are jobs, so the gap becomes <strong>unemployment</strong>. The adjustment shows up as lost jobs rather than lower pay.</p><p>Singapore builds flexibility into labour costs instead:</p><ol><li><strong>Employer CPF cuts:</strong> firms pay less into workers' CPF for a while, reducing labour costs without cutting take-home pay.</li><li><strong>Flexible wages:</strong> part of pay is a variable bonus that falls in bad years, and pay rises can be paused.</li><li><strong>Wage subsidies:</strong> the government pays part of each worker's wage, as with the Jobs Support Scheme in 2020.</li></ol><p>Each tool lowers what a worker costs the firm, so a fall in labour demand costs fewer jobs.</p>",
      rubric: R("Explains wage rigidity and unemployment", "Lists the three Singapore measures", "Explains how each lowers labour costs without mass layoffs"),
      difficulty: "medium",
      subtopic: "Labour market"
    },
    {
      q: "Explain the multiplier and how a shock from abroad can spread through a very open economy such as Singapore. Use the GDP expenditure identity to trace the channels.",
      answer:
        "<p>The <strong>multiplier</strong> is the process by which an initial change in spending leads to further changes in income and spending, so the total effect is larger than the initial shock. If households spend less, firms sell less, lay off workers, and those workers spend less at other firms, and so on.</p><p>For an open economy, start with \\(Y=C+I+G+(X-M)\\). Suppose a recession abroad reduces foreign demand for Singapore's exports:</p><ol><li><strong>X falls:</strong> hotels, airlines and shops sell less to visitors and foreign buyers.</li><li>Firms cut output and <strong>investment (I)</strong> falls.</li><li>Layoffs raise unemployment, so household income and <strong>consumption (C)</strong> fall.</li><li>Lower income also reduces <strong>imports (M)</strong>, which partly offsets the fall in GDP but does not prevent the downturn.</li><li>The multiplier amplifies the initial export shock through further rounds of spending cuts.</li></ol><p>Because Singapore is very open, a recession abroad can become a recession at home quickly. The 2008–09 global financial crisis and the 2020 COVID-19 shock both spread through trade, tourism and financial linkages. This is why countercyclical policy in Singapore often focuses on supporting exports and jobs through the exchange rate and fiscal transfers.</p>",
      rubric: R("Defines the multiplier", "Uses Y = C + I + G + X − M to trace channels", "Explains the open-economy amplification", "Gives a concrete example"),
      difficulty: "medium",
      subtopic: "Multipliers"
    },
    {
      q: "Classify each policy package as expansionary or contractionary and predict its effects on output, jobs and inflation: (a) MAS lets the S$ strengthen faster while the government trims spending; (b) MAS lets the S$ weaken while the government cuts GST; (c) the Fed raises interest rates while the government increases transfers. Explain your reasoning.",
      answer:
        "<p>(a) <strong>Contractionary monetary + contractionary fiscal:</strong> faster appreciation makes exports more expensive and imports cheaper; trimming spending reduces demand. Output ↓, jobs ↓, inflation ↓.</p><p>(b) <strong>Expansionary monetary + expansionary fiscal:</strong> a weaker S$ makes exports cheaper and imports more expensive; a GST cut raises households' disposable income. Output ↑, jobs ↑, inflation ↑.</p><p>(c) <strong>Contractionary monetary + expansionary fiscal:</strong> higher interest rates reduce borrowing and spending; higher transfers raise household incomes. The net effect on output and inflation is ambiguous and depends on the sizes of the two measures. The package is a <em>mix</em>, not a consistent direction, so it is not a clean countercyclical stance.</p><p>The key is to classify each tool separately, then combine the directional effects. Conflicting tools can cancel out or create an ambiguous outcome.</p>",
      rubric: R("Classifies each component correctly", "Predicts output, jobs and inflation", "Recognises the ambiguous mixed case"),
      difficulty: "medium",
      subtopic: "Policy mix"
    }
  ]);
})(typeof window !== "undefined" ? window : globalThis);
