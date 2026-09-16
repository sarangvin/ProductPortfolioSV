/* =========================================================
   Rabbithole — demo vault content.

   Generated verbatim from the real Obsidian vault (Economics space).
   Five notes carry full bodies — the prerequisite spine running
   Scarcity → Supply and Demand → Market Structures → Game Theory →
   Antitrust. The other nine are stubs: they exist in the tree and the
   graph, but open a placeholder rather than a full note.

   Frontmatter is pre-parsed into `fm`; bodies stay raw markdown, since
   rendering that markdown is the thing this demo is demonstrating.
   ========================================================= */

var NOTES = [
  {
    "path": "Economics/Topics/Firms & Competition/Antitrust & Regulation.md",
    "name": "Antitrust & Regulation",
    "fm": {
      "space": "Economics",
      "status": "frontier",
      "prerequisites": [
        "Market Structures",
        "Game Theory & Oligopoly"
      ],
      "importance": 4,
      "interest": 4,
      "confidence": 0,
      "last_reviewed": null
    },
    "body": "# Antitrust & Regulation\n\n## AI Notes\n[[Market Structures]] shows why monopolies and tight oligopolies produce less output, charge higher prices, and generate deadweight loss relative to competitive markets. **Antitrust policy** is how governments respond: a set of laws and enforcement tools designed to prevent firms from acquiring or abusing market power.\n\n**The core toolkit:**\n- **Merger review**: governments screen proposed mergers to block those that would substantially reduce competition (e.g. a merger between two of three mobile carriers). Regulators weigh efficiency gains from the merger against the market power it creates.\n- **Breaking up monopolies**: courts can order a dominant firm to split up — the AT&T breakup (1984) into seven regional \"Baby Bells\" is the canonical US example; the EU forcing Google to divest parts of its ad-tech business is a recent one.\n- **Prohibiting anti-competitive conduct**: cartels (price-fixing agreements) are illegal in most jurisdictions; so is predatory pricing (deliberately pricing below cost to drive out a rival, then raising prices once they're gone), exclusive dealing, and tying arrangements designed to foreclose competition.\n- **Price regulation for natural monopolies**: some industries (electricity grids, water pipes, rail infrastructure) are **natural monopolies** — economies of scale are so large that one firm can serve the whole market more cheaply than several. Breaking them up would raise costs, so instead governments regulate the prices they can charge, trying to push price closer to marginal cost while keeping the firm financially viable.\n\n**The AT&T and Standard Oil cases** are the two landmark US antitrust examples:\n- **Standard Oil (1911)**: Rockefeller's Standard Oil controlled ~90% of US refining. The Supreme Court found it had used predatory tactics to crush rivals and ordered it broken into 34 companies (several of which later became ExxonMobil, Chevron, etc.).\n- **AT&T (1984)**: Bell System's monopoly on telephone infrastructure was broken up after regulators concluded it was using infrastructure control to stifle competition in equipment and long-distance markets.\n\nConnection to [[Game Theory & Oligopoly]]: antitrust law is partly about preventing cartels from sustaining the cooperative \"keep-high\" outcome in a prisoner's dilemma. Without enforcement, firms in tight oligopolies have strong incentives to collude; the threat of prosecution is what keeps the Nash equilibrium closer to the competitive (defect) outcome.\n\n## Useful Links\n- [ ] [Econlib: Antitrust (Encyclopedia of Economics and Liberty)](https://www.econlib.org/library/Enc/Antitrust.html)\n- [ ] [Econlib: Monopoly](https://www.econlib.org/library/Enc/Monopoly.html)\n\n## My Notes\n\n\n\n## Questions\n"
  },
  {
    "path": "Economics/Topics/Firms & Competition/Game Theory & Oligopoly.md",
    "name": "Game Theory & Oligopoly",
    "fm": {
      "space": "Economics",
      "status": "known",
      "prerequisites": [
        "Market Structures"
      ],
      "importance": 4,
      "interest": 5,
      "confidence": 4,
      "last_reviewed": "2026-07-01"
    },
    "body": "# Game Theory & Oligopoly\n\n## AI Notes\nIn an [[Market Structures|oligopoly]], firms are few enough that each one's choices (price, output, advertising) directly affect the others — and each firm knows this, so decisions become *strategic*: \"what will my rival do in response to what I do?\" Game theory is the toolkit for reasoning about this interdependence.\n\nCore building blocks:\n- **Payoff matrix**: a 2×2 table showing what each firm earns under every combination of choices. To find a Nash equilibrium: for each column, mark the row with the higher payoff for Firm A; for each row, mark the column with the higher payoff for Firm B. Any cell where *both* are marked is a Nash equilibrium.\n- **Nash equilibrium**: a set of strategies where no firm can improve its outcome by unilaterally changing its own strategy, given what the others are doing. Not necessarily the *best* collective outcome — just a stable one.\n- **Prisoner's dilemma**: the classic example. Two firms each have a dominant strategy to defect (cut price / increase output) regardless of what the other does — the Nash equilibrium is both defecting, even though both cooperating would be better for *both*. Individual rationality produces a collectively worse outcome. This is the basic logic behind price wars and why cartels are unstable.\n\n**Collusion** (firms coordinating to act like a monopoly — restrict output, raise price) is tempting because it's more profitable for the group, but unstable: each member has an incentive to secretly produce more / undercut price while others hold the line — unless there's a credible way to detect and punish cheating. Repeated interaction changes this: in a **repeated game**, strategies like \"tit-for-tat\" (cooperate until the other defects, then punish) can sustain cooperation, because the threat of future punishment outweighs the one-time gain from cheating — this is why cartels (e.g. OPEC) sometimes hold together and sometimes collapse depending on how credible punishment is and how patient/visible the players are.\n\nOther recurring themes and model variants:\n- **Stackelberg leader-follower**: one firm commits to its output *first*; the follower observes and reacts optimally. The leader, knowing the follower's reaction function in advance, produces *more* than in a symmetric simultaneous game and captures a larger profit share. Advantage holds only if the commitment is credible (e.g. a public capacity expansion the leader can't walk back).\n- **Cournot competition**: firms choose quantities *simultaneously* — each guesses the other's output and picks its best response. Dominant strategy is high output; Nash equilibrium sits between the competitive and monopoly outcomes (moderate profit for both).\n- **Bertrand competition**: firms compete on *price* simultaneously with identical products — dominant strategy is always to undercut. Nash equilibrium drives price to marginal cost and profit near zero with just two firms (the **Bertrand paradox**).\n- **Credible commitment** is the thread across all of these: threats or promises only change behavior if the other player believes you'll actually follow through.\n\nWhich model applies depends on what firms actually compete on — if they set prices freely, Bertrand; if output/capacity is the binding decision made in advance, Cournot.\n\n| Model | Compete on | Moves | Nash outcome |\n|---|---|---|---|\n| Cournot | Quantity | Simultaneous | Moderate output, moderate profit |\n| Bertrand | Price | Simultaneous | Price = marginal cost, near-zero profit |\n| Stackelberg | Quantity | Sequential | Leader gains, follower loses vs Cournot |\n\nWhy this sits at the \"frontier\" of the sequence: it's the point where the simple supply/demand/price-taking assumptions fully break down, and strategic interaction — not just individual optimization against a market price — becomes the central object of analysis.\n\n## Useful Links\n- [ ] [Khan Academy: Imperfect competition — Oligopoly and game theory (unit)](https://www.khanacademy.org/economics-finance-domain/ap-microeconomics/imperfect-competition/oligopoly-and-game-theory)\n- [ ] [Khan Academy: Prisoners' dilemma and Nash equilibrium (video)](https://www.khanacademy.org/economics-finance-domain/ap-microeconomics/imperfect-competition/oligopoly-and-game-theory/v/prisoners-dilemma-and-nash-equilibrium)\n\n## My Notes\n\n\n\n## Questions\nQ: There's a diagram associated with Nash Equilibrium, can I see that and get an explanation for it?\n\nA: The standard diagram is a **payoff matrix** — a 2×2 table showing what each firm earns under every combination of choices. Here's the classic prisoner's dilemma applied to two competing firms deciding whether to keep prices high (cooperate) or cut prices (defect):\n\n|  | **Firm B: Keep High** | **Firm B: Cut Price** |\n|---|---|---|\n| **Firm A: Keep High** | (10, 10) | (2, 14) |\n| **Firm A: Cut Price** | (14, 2) | (5, 5) |\n\nEach cell is `(Firm A's profit, Firm B's profit)`.\n\nHow to read it:\n- If Firm B keeps prices high, Firm A earns 10 by cooperating or **14 by cutting** → A prefers to cut.\n- If Firm B cuts prices, Firm A earns 2 by cooperating or **5 by cutting** → A still prefers to cut.\n- Cutting is a **dominant strategy** for Firm A — it's better regardless of what B does. By symmetry, same is true for Firm B.\n\nThe **Nash equilibrium** is the bottom-right cell `(5, 5)`: both firms cut prices. Neither can improve by unilaterally switching — if A switches to \"keep high\" while B cuts, A drops from 5 to 2. So `(Cut, Cut)` is stable, even though `(Keep High, Keep High)` at `(10, 10)` would be better for *both*. That's the tragedy of the prisoner's dilemma: individual rationality produces a collectively worse outcome.\n\nTo find a Nash equilibrium in any payoff matrix: for each column, mark the row with the higher payoff for Firm A (underline it); for each row, mark the column with the higher payoff for Firm B. Any cell where *both* are marked is a Nash equilibrium.\n\nQ: Explain Stackleberg leader follower model.\n\nA: The **Stackelberg model** is a way of thinking about oligopoly competition where one firm (the **leader**) commits to its output quantity *first*, and the other firm (the **follower**) then observes that choice and picks its own best response.\n\nThe key difference from simultaneous games (like the payoff matrix above): **sequence matters**. The leader moves first and knows the follower will react optimally to whatever it does — so the leader can effectively choose its most advantageous point on the follower's reaction curve.\n\nHow it plays out:\n1. The **follower's reaction function** describes how much the follower will produce for any given quantity the leader chooses. More leader output → lower market price → follower produces less.\n2. The **leader knows this function** and picks the quantity that maximises its own profit *taking the follower's reaction into account*, not assuming the follower holds output constant.\n3. The result: the leader produces **more** than in a symmetric simultaneous game (like Cournot competition), and the follower produces **less**. The leader captures a larger share of profit.\n\nReal-world intuition: a dominant firm that publicly announces capacity expansion (new factories, locked-in supply contracts) is playing the Stackelberg leader role — it's committing to high output before rivals can respond, forcing them to scale back. This is why **credible commitment** is so important: the leader's advantage only holds if the follower actually believes the announced quantity is locked in.\n\nThe Stackelberg model is one of a family of oligopoly models alongside **Cournot** (firms choose quantities simultaneously) and **Bertrand** (firms choose prices simultaneously, which drives prices to marginal cost immediately). Each gives different predictions depending on whether firms compete on price vs. quantity and whether moves are sequential vs. simultaneous.\n\nQ: Show payoff matrices for Cournot and Bertrand.\n\nA: Unlike the prisoner's dilemma (which is about price), Cournot and Bertrand are usually modelled with continuous choices — but they can be simplified into 2×2 matrices to show the strategic logic. Strategies here are **High** (produce/price aggressively) vs **Low** (hold back).\n\n**Cournot** — firms compete on *quantity*. \"High\" = produce more, \"Low\" = produce less (closer to monopoly output).\n\n|  | **Firm B: Low Qty** | **Firm B: High Qty** |\n|---|---|---|\n| **Firm A: Low Qty** | (12, 12) | (6, 15) |\n| **Firm A: High Qty** | (15, 6) | (8, 8) ← Nash |\n\n- If B holds back, A earns more by producing more (15 > 12) → A plays High.\n- If B produces a lot, A still earns more by producing more (8 > 6) → A still plays High.\n- **Dominant strategy: High quantity.** Nash equilibrium = (8, 8) — both produce aggressively. Better than the competitive floor (e.g. 5, 5) but worse than the cooperative monopoly split (12, 12).\n\n---\n\n**Bertrand** — firms compete on *price*. \"High\" = charge a high price, \"Low\" = undercut to grab the whole market.\n\n|  | **Firm B: High Price** | **Firm B: Low Price** |\n|---|---|---|\n| **Firm A: High Price** | (10, 10) | (0, 18) |\n| **Firm A: Low Price** | (18, 0) | (1, 1) ← Nash |\n\n- If B prices high, A earns more by undercutting and taking the whole market (18 > 10) → A plays Low.\n- If B already prices low, A must also price low or earn nothing (1 > 0) → A still plays Low.\n- **Dominant strategy: Low price.** Nash equilibrium = (1, 1) — the **Bertrand paradox**: with just two firms selling an identical product, competition drives price all the way to marginal cost and profit nearly to zero. Same outcome as perfect competition.\n\n---\n\n**The key takeaway across all three models:**\n\n| Model | Compete on | Moves | Nash outcome |\n|---|---|---|---|\n| Prisoner's dilemma | Price | Simultaneous | Both defect — low profits |\n| Cournot | Quantity | Simultaneous | Moderate output, moderate profit |\n| Bertrand | Price | Simultaneous | Price = marginal cost, near-zero profit |\n| Stackelberg | Quantity | Sequential | Leader gains, follower loses vs Cournot |\n\nBertrand and Cournot give very different predictions for the same two-firm market — which model fits reality depends on whether firms can more easily change *price* (Bertrand applies) or are constrained by *capacity/production* decisions made in advance (Cournot applies).\n"
  },
  {
    "path": "Economics/Topics/Firms & Competition/Market Structures.md",
    "name": "Market Structures",
    "fm": {
      "space": "Economics",
      "status": "known",
      "prerequisites": [
        "Supply and Demand"
      ],
      "importance": 4,
      "interest": 5,
      "confidence": 5,
      "last_reviewed": "2026-06-16"
    },
    "body": "# Market Structures\n\n## AI Notes\nThe simple [[Supply and Demand]] model implicitly assumes **perfect competition**: many small firms, identical products, easy entry/exit, and no single firm can affect the market price (each firm is a \"price taker\"). Market structure theory relaxes those assumptions to see how outcomes change as that breaks down. The four classic structures sit on a spectrum from most to least competitive:\n\n- **Perfect competition**: many firms, identical (homogeneous) products, free entry/exit, perfect information. Firms are price takers; in the long run, competition drives economic profit to zero and price down to marginal cost — this is the efficiency benchmark everything else is compared against. The closest real-world example is **agricultural commodity markets** (wheat, corn, soybeans): thousands of farmers selling an identical product at a price set by global markets no single farmer can move.\n- **Monopolistic competition**: many firms, but each sells a slightly *differentiated* product (branding, quality, location). **Fast food** is the textbook example — McDonald's, KFC, Burger King all compete in the same space, but each has its own brand and menu, giving it a small amount of pricing power. Free entry means long-run economic profit is still driven to zero, just not at the lowest-cost point — some inefficiency remains, and firms must constantly invest in marketing and product differentiation to stay relevant.\n- **Oligopoly**: a small number of firms dominate the market (think airlines, wireless carriers). Firms are large enough that each one's decisions visibly affect the others — this interdependence is why [[Game Theory & Oligopoly]] becomes the right tool: firms must anticipate rivals' reactions, not just react to \"the market\".\n- **Monopoly**: a single firm is the entire market — often protected by barriers to entry (patents, control of a key resource, network effects, government license). The monopolist is a **price maker**: it sets quantity to maximize profit where marginal revenue = marginal cost, and the resulting price is above marginal cost and quantity below the competitive level — producing a deadweight loss similar to a tax.\n\nThe key dial running through all of this is **market power** — the ability of a firm to influence price by changing its own output, which rises as you move from perfect competition toward monopoly. Market power generally correlates with: higher prices, lower output, and a transfer of surplus from consumers to producers (plus deadweight loss).\n\nThis topic is the gateway to [[Game Theory & Oligopoly]] (which only really matters once firms are few enough to strategize against each other) and connects back to [[Externalities]] and [[Price Controls]] as the other major sources of \"market outcomes diverging from the perfectly-competitive ideal.\"\n\n## Useful Links\n- [ ] [Corporate Finance Institute: Market Structure — Overview, Definition, Features, and Types](https://corporatefinanceinstitute.com/resources/economics/market-structure/)\n- [ ] [Econlib: Competition and Market Structures (Industrial Organization)](https://www.econlib.org/library/Topics/Details/competitionmarketstructures.html)\n\n## My Notes\n\n\n\n## Questions\nQ: Is McDonalds, KFC etc a representative of monopolistic competition?\n\nA: Yes — fast food is the textbook example of monopolistic competition. There are many firms (McDonald's, KFC, Burger King, Wendy's, local chains), easy enough entry and exit, but each sells a *differentiated* product: different menus, branding, taste, store experience. Because of that differentiation, each firm has a small amount of pricing power — McDonald's can charge slightly more than a local burger stall without losing all its customers, because some people specifically want a Big Mac. But that pricing power is limited; if McDonald's raised prices too much, enough customers would switch to KFC or elsewhere that it wouldn't be worth it. In the long run, if McDonald's is very profitable, new competitors (or new fast food concepts) enter, eroding those profits back toward zero — which is why fast food chains constantly spend on marketing and menu innovation to maintain their differentiation edge.\n\nQ: How do monopolies fail? Give me a real life example.\n\nA: Monopolies \"fail\" (lose their position) in a few distinct ways:\n\n- **Technological disruption**: a new technology makes the monopolist's product obsolete or creates a new market the monopolist can't dominate. Classic example: **Kodak** held a near-monopoly on photographic film for decades, but the rise of digital cameras (which Kodak actually invented but feared would cannibalize film sales) destroyed the market it was protecting. By the time it tried to pivot, it was too late — it filed for bankruptcy in 2012.\n- **Regulatory breakup**: governments can force a monopoly to split up. **AT&T** (the original Bell System) was broken into 7 regional companies in 1984 by a US antitrust ruling, on the basis that it was using its monopoly on phone infrastructure to stifle competition in adjacent markets.\n- **Entry of substitutes**: even without a direct competitor, close substitutes can erode a monopoly's pricing power. A local electricity monopoly loses power (pun intended) once solar panels make self-generation viable for enough consumers.\n- **Mismanagement / complacency**: monopolies often have weak incentive to innovate or cut costs (no competitive pressure), so they can be overtaken when a barrier finally drops. **Blockbuster** effectively had a local monopoly on video rental in most US towns; Netflix's DVD-by-mail (then streaming) model entered the same market with a better product and Blockbuster was slow to respond.\n\nThe common thread: a monopoly is only as durable as its barrier to entry (patent, network effect, regulation, control of a resource). When that barrier erodes — through technology, regulation, or substitution — the monopoly tends to fall faster than expected, because years of insulation from competition often leave it poorly equipped to compete.\n\nQ: What is a good example of perfect competition in real life?\n\nA: Pure perfect competition is a theoretical ideal — no real market matches all the conditions exactly (identical products, infinitely many buyers/sellers, perfect information, costless entry/exit). But some markets come close enough to be useful examples:\n\n- **Agricultural commodities** (wheat, corn, soybeans): thousands of farmers sell an essentially identical product (No. 2 yellow corn is No. 2 yellow corn regardless of which farm grew it), price is set by global commodity markets that no single farmer can move, and buyers (grain elevators, mills) will switch immediately to whoever is cheapest. An individual wheat farmer truly is a price taker — they look up the market price and decide how much to grow, but can't charge a cent above it.\n- **Foreign exchange markets**: millions of participants trading currencies that are by definition homogeneous (one USD = one USD), with prices determined by the aggregate market. No single retail participant can move the price.\n- **Stock markets for large-cap stocks**: one share of Apple is identical to another; millions of buyers and sellers; prices update continuously. Individual retail traders are price takers.\n\nThe agricultural commodity market is the closest to the textbook model, which is why it's the standard classroom example. The \"perfectly competitive\" outcome — price driven down to marginal cost, zero long-run economic profit — is roughly what you see: farming is notoriously low-margin, and farmers earn close to the cost of production over time, which is exactly what the model predicts.\n"
  },
  {
    "path": "Economics/Topics/Firms & Competition/Price Discrimination.md",
    "name": "Price Discrimination",
    "fm": {
      "space": "Economics",
      "status": "frontier",
      "prerequisites": [
        "Market Structures",
        "Consumer & Producer Surplus"
      ],
      "importance": 4,
      "interest": 4,
      "confidence": 0,
      "last_reviewed": null
    },
    "lede": "In a standard monopoly or firm-with-market-power model, the firm charges one price to all buyers."
  },
  {
    "path": "Economics/Topics/Foundations/Scarcity & Opportunity Cost.md",
    "name": "Scarcity & Opportunity Cost",
    "fm": {
      "space": "Economics",
      "status": "known",
      "prerequisites": [],
      "importance": 5,
      "interest": 3,
      "confidence": 4,
      "last_reviewed": "2026-06-11"
    },
    "body": "# Scarcity & Opportunity Cost\n\n## AI Notes\nEconomics starts from one observation: wants are unlimited but resources (time, money, labor, land, capital) are not. **Scarcity** is the gap between the two — it's why economics exists as a discipline at all. If everything were free and unlimited, there'd be nothing to allocate and no choices to study.\n\nBecause resources are scarce, choosing to use them one way means *not* using them another way. **Opportunity cost** is the value of that next-best foregone alternative — not just money spent, but the best thing you didn't do instead. Spending an evening studying has an opportunity cost of whatever else you'd have done with that time (rest, socializing, a side project), not just zero.\n\nA few things that make this concept stick:\n- \"Free\" things still have opportunity costs (e.g. free admission to an event still costs you the time you spend there).\n- Sunk costs (money/time already spent and unrecoverable) should *not* factor into opportunity-cost reasoning going forward — only future tradeoffs matter.\n- This idea underlies the **production possibilities frontier (PPF)**: a curve showing the maximum combinations of two goods an economy can produce given fixed resources. Points inside the curve are inefficient (resources wasted/unemployed); points on the curve involve tradeoffs (more of one good means less of another); points outside are unattainable without more resources or better technology.\n- Comparative advantage (a topic that often follows this one) is essentially \"opportunity cost applied to trade\": specialize in what you give up the least to produce.\n\nWhy it's foundational: nearly every other topic in this space — [[Supply and Demand]], [[Elasticity]], [[Market Structures]] — is really about how scarce resources get allocated and at what cost. This is the lens everything else gets viewed through.\n\n## Useful Links\n- [ ] [Khan Academy: Scarcity, choice, and opportunity costs (lesson summary)](https://www.khanacademy.org/economics-finance-domain/microeconomics/basic-economic-concepts-gen-micro/economics-introduction/a/lesson-overview-scarcity-choice-and-opportunity-cost)\n- [ ] [Khan Academy: Opportunity cost (video)](https://www.khanacademy.org/economics-finance-domain/ap-macroeconomics/basic-economics-concepts-macro/production-possibilities-curve-scarcity-choice-and-opportunity-cost-macro/v/opportunity-cost)\n\n## My Notes\n\n\n\n## Questions\n"
  },
  {
    "path": "Economics/Topics/Foundations/Supply and Demand.md",
    "name": "Supply and Demand",
    "fm": {
      "space": "Economics",
      "status": "known",
      "prerequisites": [
        "Scarcity & Opportunity Cost"
      ],
      "importance": 5,
      "interest": 4,
      "confidence": 5,
      "last_reviewed": "2026-06-11"
    },
    "body": "# Supply and Demand\n\n## AI Notes\nThis is the central model of microeconomics: a market is described by two curves plotted against price (vertical axis) and quantity (horizontal axis).\n\n- **Demand curve** slopes downward — as price falls, buyers want more (the \"law of demand\"). It shifts when something *other than price* changes: income, tastes, the price of substitutes/complements, expectations, or the number of buyers.\n- **Supply curve** slopes upward — as price rises, sellers are willing to produce more. It shifts with input costs, technology, the number of sellers, expectations, or prices of related goods the seller could produce instead.\n\n**Equilibrium** is where the two curves cross: the price at which quantity buyers want to buy equals the quantity sellers want to sell. At any other price there's either a *surplus* (price too high — supply > demand, pushing price down) or a *shortage* (price too low — demand > supply, pushing price up). Markets tend toward equilibrium because these mismatches create pressure that moves price back.\n\nKey distinction that trips people up: a **shift of a curve** (caused by a non-price factor, e.g. income rising shifts demand right) vs. **movement along a curve** (caused by a price change itself — a change in price causes a \"change in quantity demanded\", not a \"change in demand\"). Shifting one curve moves the equilibrium point; you can read off the new equilibrium price and quantity from where the curves now cross.\n\nThis model is the foundation for almost everything that follows: [[Elasticity]] describes *how steep* these curves are (how sensitive quantity is to price), [[Price Controls]] and taxes work by constraining or shifting these curves, and [[Market Structures]] describes what happens when the \"many small sellers\" assumption behind a simple supply curve breaks down.\n\n## Useful Links\n- [ ] [Khan Academy: Supply, demand, and market equilibrium](https://www.khanacademy.org/economics-finance-domain/microeconomics/supply-demand-equilibrium)\n- [ ] [Khan Academy: Supply and Demand unit (AP/College Microeconomics)](https://www.khanacademy.org/economics-finance-domain/ap-microeconomics/unit-2-supply-and-demnd)\n\n## My Notes\n\n\n\n## Questions\n"
  },
  {
    "path": "Economics/Topics/Market Failures & Policy/Externalities.md",
    "name": "Externalities",
    "fm": {
      "space": "Economics",
      "status": "known",
      "prerequisites": [
        "Supply and Demand"
      ],
      "importance": 4,
      "interest": 5,
      "confidence": 5,
      "last_reviewed": "2026-06-16"
    },
    "lede": "The standard supply/demand model assumes the only people affected by a transaction are the buyer and seller."
  },
  {
    "path": "Economics/Topics/Market Failures & Policy/Information Asymmetry.md",
    "name": "Information Asymmetry",
    "fm": {
      "space": "Economics",
      "status": "known",
      "prerequisites": [
        "Market Structures",
        "Externalities"
      ],
      "importance": 4,
      "interest": 5,
      "confidence": 3,
      "last_reviewed": "2026-06-21"
    },
    "lede": "The standard supply/demand model assumes buyers and sellers are equally well-informed."
  },
  {
    "path": "Economics/Topics/Market Failures & Policy/Public Goods & Common Resources.md",
    "name": "Public Goods & Common Resources",
    "fm": {
      "space": "Economics",
      "status": "frontier",
      "prerequisites": [
        "Externalities"
      ],
      "importance": 4,
      "interest": 4,
      "confidence": 0,
      "last_reviewed": null
    },
    "lede": "Goods can be classified along two dimensions: whether they are excludable (can people be prevented from using them?) and whether they are rival (does one person's use reduce availability for others?)."
  },
  {
    "path": "Economics/Topics/Market Failures & Policy/Tax Incidence & Deadweight Loss.md",
    "name": "Tax Incidence & Deadweight Loss",
    "fm": {
      "space": "Economics",
      "status": "frontier",
      "prerequisites": [
        "Elasticity"
      ],
      "importance": 4,
      "interest": 4,
      "confidence": 0,
      "last_reviewed": null
    },
    "lede": "When a good is taxed, the statutory burden (who writes the check to the government) and the economic burden (whose real purchasing power actually falls) are usually different."
  },
  {
    "path": "Economics/Topics/Markets & Prices/Consumer & Producer Surplus.md",
    "name": "Consumer & Producer Surplus",
    "fm": {
      "space": "Economics",
      "status": "known",
      "prerequisites": [
        "Supply and Demand",
        "Elasticity"
      ],
      "importance": 5,
      "interest": 4,
      "confidence": 4,
      "last_reviewed": "2026-06-18"
    },
    "lede": "Surplus is the welfare economics language for \"who gains how much from a market transaction.\" It's the bridge between the supply/demand model and questions about efficiency and fairness."
  },
  {
    "path": "Economics/Topics/Markets & Prices/Elasticity.md",
    "name": "Elasticity",
    "fm": {
      "space": "Economics",
      "status": "known",
      "prerequisites": [
        "Supply and Demand"
      ],
      "importance": 5,
      "interest": 5,
      "confidence": 5,
      "last_reviewed": "2026-06-13"
    },
    "lede": "Elasticity measures responsiveness: how much quantity changes (in percentage terms) when price (or income, or the price of another good) changes by 1%."
  },
  {
    "path": "Economics/Topics/Markets & Prices/Factor Markets & Labour.md",
    "name": "Factor Markets & Labour",
    "fm": {
      "space": "Economics",
      "status": "known",
      "prerequisites": [
        "Supply and Demand",
        "Elasticity"
      ],
      "importance": 4,
      "interest": 4,
      "confidence": 3,
      "last_reviewed": "2026-06-22"
    },
    "lede": "So far, Supply and Demand has been applied to goods markets — buyers purchasing output."
  },
  {
    "path": "Economics/Topics/Markets & Prices/Price Controls.md",
    "name": "Price Controls",
    "fm": {
      "space": "Economics",
      "status": "frontier",
      "prerequisites": [
        "Elasticity"
      ],
      "importance": 3,
      "interest": 3,
      "confidence": 0,
      "last_reviewed": null
    },
    "lede": "A price control is a government-imposed limit on how high or low a price can legally go."
  }
];

var EDGES = [
  {
    "from": "Antitrust & Regulation",
    "to": "Market Structures",
    "kind": "prereq"
  },
  {
    "from": "Antitrust & Regulation",
    "to": "Game Theory & Oligopoly",
    "kind": "prereq"
  },
  {
    "from": "Game Theory & Oligopoly",
    "to": "Market Structures",
    "kind": "prereq"
  },
  {
    "from": "Market Structures",
    "to": "Supply and Demand",
    "kind": "prereq"
  },
  {
    "from": "Price Discrimination",
    "to": "Market Structures",
    "kind": "prereq"
  },
  {
    "from": "Price Discrimination",
    "to": "Consumer & Producer Surplus",
    "kind": "prereq"
  },
  {
    "from": "Supply and Demand",
    "to": "Scarcity & Opportunity Cost",
    "kind": "prereq"
  },
  {
    "from": "Externalities",
    "to": "Supply and Demand",
    "kind": "prereq"
  },
  {
    "from": "Information Asymmetry",
    "to": "Market Structures",
    "kind": "prereq"
  },
  {
    "from": "Information Asymmetry",
    "to": "Externalities",
    "kind": "prereq"
  },
  {
    "from": "Public Goods & Common Resources",
    "to": "Externalities",
    "kind": "prereq"
  },
  {
    "from": "Tax Incidence & Deadweight Loss",
    "to": "Elasticity",
    "kind": "prereq"
  },
  {
    "from": "Consumer & Producer Surplus",
    "to": "Supply and Demand",
    "kind": "prereq"
  },
  {
    "from": "Consumer & Producer Surplus",
    "to": "Elasticity",
    "kind": "prereq"
  },
  {
    "from": "Elasticity",
    "to": "Supply and Demand",
    "kind": "prereq"
  },
  {
    "from": "Factor Markets & Labour",
    "to": "Supply and Demand",
    "kind": "prereq"
  },
  {
    "from": "Factor Markets & Labour",
    "to": "Elasticity",
    "kind": "prereq"
  },
  {
    "from": "Price Controls",
    "to": "Elasticity",
    "kind": "prereq"
  },
  {
    "from": "Market Structures",
    "to": "Externalities",
    "kind": "link"
  },
  {
    "from": "Market Structures",
    "to": "Price Controls",
    "kind": "link"
  },
  {
    "from": "Market Structures",
    "to": "Game Theory & Oligopoly",
    "kind": "link"
  }
];
