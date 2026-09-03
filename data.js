/* ============================================================
   All portfolio content lives here. Edit this file only.
   Nothing else needs to change to update the site.
   ============================================================ */

const DATA = {

  /* ---------- Identity ---------- */
  profile: {
    initials: "SV",
    firstName: "Sarang",
    fullName: "Sarang Vineesh",
    role: "Product Manager",
    subRole: "Lead Product Analyst @ Media.net",
    location: "Bangalore, India",
    email: "sarangvin42@gmail.com",
    phone: "+91 99010 77585",
    linkedin: "https://linkedin.com/in/sarangv/",
    resume: "assets/SarangVineesh_Resume.pdf",
    tagline: [
      { text: "Product professional working at the intersection of " },
      { text: "revenue forecasting", hl: 1 },
      { text: ", " },
      { text: "programmatic ad tech", hl: 2 },
      { text: ", and " },
      { text: "product analytics", hl: 3 },
      { text: "." }
    ],
    subTagline: [
      { text: "Turning " },
      { text: "prediction models", hl: 1 },
      { text: " into " },
      { text: "measurable revenue", hl: 3 },
      { text: "." }
    ],
    chips: ["Product Strategy", "Revenue Forecasting", "Ad Tech", "Experimentation", "Bidding Strategy", "Analytics", "0-to-1"]
  },

  /* ---------- Hero stat cards ---------- */
  heroStats: [
    { icon: "rocket",      value: "2+",     label: "Years Experience" },
    { icon: "dollar",      value: "$250K+", label: "Daily Revenue Modelled" },
    { icon: "trending-up", value: "$25K",   label: "Revenue Added / Day" }
  ],

  /* ---------- Impact dashboard tiles ----------
     count/prefix/suffix drive the animated counter.        */
  kpis: [
    { prefix: "$", count: 250, suffix: "K+", label: "Daily revenue under forecast models",  note: "Google, Microsoft, Yahoo, Bing", tone: "accent" },
    { prefix: "+$", count: 25, suffix: "K",  label: "Daily revenue added",                   note: "Language-serving optimisation",  tone: "accent" },
    { prefix: "",  count: 3,   suffix: "",    label: "Engineering teams on analytics strategy", note: "Roadmap and build priorities", tone: "ink" },
    { prefix: "",  count: 20,  suffix: "+",   label: "Apps in the in-house analytics suite",  note: "Built 0-to-1",                   tone: "ink" },
    { prefix: "",  count: 250, suffix: "+",   label: "Employees using tools I shipped",       note: "~100 DAU, 10% of the company",   tone: "ink" },
    { prefix: "₹", count: 2, suffix: " Cr", label: "Investment theses evaluated",        note: "Energy and climate, Social Alpha", tone: "ink" },
    { prefix: "",  count: 500, suffix: "+",   label: "Incubator partnerships built",          note: "Across India",                   tone: "ink" },
    { prefix: "",  count: 18,  suffix: " mo", label: "To promotion into a Lead role",         note: "Senior PA to Lead PA",           tone: "muted" }
  ],

  /* ---------- About ---------- */
  about: {
    paragraphs: [
      "I am a Lead Product Analyst at Media.net, a global adtech company building programmatic advertising platforms. In under two years I moved from Senior Product Analyst to Lead, and I now own revenue forecasting accuracy for more than $250K in daily web advertising spend across Google, Microsoft, Yahoo and Bing.",
      "My work sits where prediction models meet the P&L: visibility, click-likelihood and revenue-per-click models, the bidding strategy on top of them, and the experimentation platform that decides whether a change was actually good.",
      "The title on my badge says Analyst; the scope is a Product Manager's — I own the roadmap and prioritisation for forecasting and monetisation, run the experimentation calendar end to end, and ship the internal tools engineering builds against.",
      "Before adtech I worked across venture capital, an early-stage marketplace and a mental-health app startup, which is where I learned to build 0-to-1 and to talk to users before writing a PRD."
    ],
    chips: ["Revenue Forecasting", "Programmatic", "Experimentation", "Product Analytics"]
  },

  expertise: [
    { icon: "trending-up", title: "Revenue Forecasting",
      desc: "Owning prediction accuracy across visibility, click-likelihood and revenue-per-click models.",
      tags: ["Forecasting", "Model Eval", "RPC / CTR", "Accuracy"] },
    { icon: "flask", title: "Experimentation",
      desc: "A/B testing and an automated analysis platform for bidding and buying experiments.",
      tags: ["A/B Testing", "Experiment Design", "Automation", "Readouts"] },
    { icon: "target", title: "Bidding Strategy",
      desc: "Translating model changes into bidding and revenue-prediction decisions with demand partners.",
      tags: ["RTB", "Autobidding", "DSP / SSP", "Demand Partners"] },
    { icon: "chart-bar", title: "Product Analytics",
      desc: "SQL and Python analysis turned into dashboards, metrics and build priorities teams act on.",
      tags: ["SQL", "Python", "Dashboards", "Metrics"] },
    { icon: "device", title: "App Monetisation",
      desc: "Closing the app-vs-web performance gap through ad, landing-page and prediction strategy.",
      tags: ["App Ads", "Landing Pages", "Growth", "Prediction"] },
    { icon: "bolt", title: "0-to-1 Product",
      desc: "Shipping internal platforms and agents from a blank page to company-wide adoption.",
      tags: ["PRDs", "Internal Tools", "AI Agents", "Adoption"] }
  ],

  /* ---------- Experience timeline ---------- */
  experience: [
    {
      company: "Media.net", blurb: "Global adtech company (programmatic advertising platforms)",
      role: "Lead Product Analyst", note: "Promoted in 18 months",
      location: "Mumbai + Bangalore, India",
      start: "2026-01", end: null, period: "Jan 2026 — Present", current: true,
      points: [
        { b: "Own revenue forecasting accuracy for $250K+ in daily ad spend", t: " across demand partners: Google, Microsoft, Yahoo and Bing, split across visibility, click-likelihood and revenue-per-click models." },
        { b: "Lead analytics strategy across 3 engineering teams", t: ", turning bidding and revenue-prediction changes into prioritised build plans." },
        { b: "Leading the App Monetisation initiative", t: ", building new ad and landing-page strategies and new prediction tools to close the app-vs-web performance gap." },
        { b: "Ship new model features", t: ", including contextual-base development for app and chat traffic." },
        { b: "Built a prediction-model feature analyzer", t: " to evaluate candidate features and prune underperforming ones." },
        { b: "Built a diagnostic agent that surfaces why an entity is loss-making", t: " and lets users add their own RCA validators to the default check, cutting manual debugging effort." }
      ]
    },
    {
      company: "Media.net", blurb: "Global adtech company (programmatic advertising platforms)",
      role: "Senior Product Analyst", note: null,
      location: "Mumbai, India",
      start: "2024-07", end: "2026-01", period: "Jul 2024 — Jan 2026", current: false,
      points: [
        { b: "Led cross-functional expansion of search ad monetisation", t: " through language and cultural targeting, adding $25,000/day." },
        { b: "Built a language-serving model", t: " that auto-tests and serves the ideal language per geography, replacing manual mapping." },
        { b: "Built a platform for automatic analysis of bidding and buying experiments", t: ", enabling faster and cleaner experimentation." },
        { b: "Drove optimisation of news-based publisher prediction models", t: " and a demotion system for new revenue-generating keywords." },
        { b: "Built an in-house interface for 20+ apps", t: ", adopted by 250+ employees company-wide (~100 DAUs, 10% of the company)." }
      ]
    },
    {
      company: "Social Alpha", blurb: "Venture capital firm (energy & climate)",
      role: "Venture Capital Intern", note: null,
      location: "Bangalore, India",
      start: "2024-01", end: "2024-06", period: "Jan 2024 — Jun 2024", current: false,
      points: [
        { b: "Evaluated startups and market spaces for investment", t: " on existing and new theses, up to ₹2 crore in energy and climate." },
        { b: "Tracked portfolio startup performance", t: " across key metrics to validate investment impact and thesis accuracy." },
        { b: "Built partnerships with 500+ incubators", t: " across India." }
      ]
    },
    {
      company: "Superfuel", blurb: "Early-stage startup",
      role: "Founder's Office Intern", note: null,
      location: "Bangalore, India",
      start: "2023-07", end: "2023-12", period: "Jul 2023 — Dec 2023", current: false,
      points: [
        { b: "Built performance dashboards", t: " for an early-stage startup with dynamic requirements, for internal and partner-facing use." },
        { b: "Led development of seller tools", t: " that strategically selected products and campaigns to optimise seller performance." },
        { b: "Built a marketplace optimisation funnel", t: " to identify and partner with high-success-rate clients." }
      ]
    },
    {
      company: "Infiheal", blurb: "Mental health app startup",
      role: "Product Intern", note: null,
      location: "Remote, India",
      start: "2022-08", end: "2023-06", period: "Aug 2022 — Jun 2023", current: false,
      points: [
        { b: "Built the PRD and the automated testing vertical", t: "." },
        { b: "Worked cross-functionally across tech, ML, therapists and design", t: " to build features and roadmaps for the app." },
        { b: "Led UI/UX", t: ", providing customer research and solutions for the organisation." }
      ]
    }
  ],

  /* ---------- Skills ---------- */
  skillGroups: [
    { key: "product", icon: "target", name: "Product & Strategy", items: [
      "Revenue Forecasting", "A/B Testing & Experimentation", "Bidding Strategy", "Product Strategy & Roadmapping",
      "OKRs", "Prioritisation (RICE / ICE)", "Customer Discovery & JTBD", "PRDs", "Go-to-Market",
      "0-to-1 Development", "Pricing & Monetisation", "User Research",
      "Cross-Functional Leadership", "Stakeholder Management", "Competitive Analysis", "Agile"
    ]},
    { key: "data", icon: "chart-bar", name: "Data & Tools", items: [
      "SQL", "Python", "Pandas", "NumPy", "Scikit-learn", "Redshift", "PowerBI", "Tableau",
      "Excel", "Google Analytics", "Mixpanel", "Figma", "Jira", "Confluence", "Claude", "Cursor"
    ]},
    { key: "domain", icon: "device", name: "Ad Tech Domain", items: [
      "Programmatic Advertising", "RTB", "Demand Partners", "Revenue Prediction", "App Monetisation",
      "DSP / SSP & Ad Exchanges", "ML Autobidding", "Conversion APIs", "Traffic Quality & Fraud Detection"
    ]}
  ],

  /* ---------- Work projects ---------- */
  workProjects: [
    { status: "Shipped", kind: "Revenue", title: "Language-Serving Optimisation Model",
      desc: "Built a model that auto-tests and serves the ideal language per geography, replacing manual language mapping and unlocking cross-cultural search ad monetisation.",
      metrics: ["+$25,000/day revenue", "Manual mapping removed"],
      tags: ["ML", "Monetisation", "0-to-1"], featured: true },
    { status: "Shipped", kind: "Platform", title: "Automated Experiment-Analysis Platform",
      desc: "A platform that automatically analyses bidding and buying experiments end to end, so teams get faster and cleaner reads on whether a change actually worked.",
      metrics: ["Faster experiment cycles", "Standardised readouts"],
      tags: ["Experimentation", "A/B Testing", "Platform"], featured: true },
    { status: "Ongoing", kind: "Forecasting", title: "Revenue Forecasting Accuracy Program",
      desc: "Own forecasting accuracy for $250K+ in daily web ad spend across four demand partners, split across visibility, click-likelihood and revenue-per-click models.",
      metrics: ["$250K+ daily spend", "4 demand partners"],
      tags: ["Forecasting", "RTB", "Analytics"], featured: true },
    { status: "Shipped", kind: "AI Agent", title: "Loss-Making Entity RCA Agent",
      desc: "A diagnostic agent that surfaces why an entity is loss-making and lets users plug their own RCA validators into the default check, cutting manual debugging effort.",
      metrics: ["Manual debugging cut", "User-extensible checks"],
      tags: ["AI Agent", "Internal Tools", "Analytics"], featured: true },
    { status: "In Progress", kind: "Growth", title: "App Monetisation Initiative",
      desc: "Leading new ad and landing-page strategies plus new prediction tools to close the performance gap between app and web traffic.",
      metrics: ["App-vs-web gap", "New prediction tools"],
      tags: ["App", "Monetisation", "Growth"], featured: true },
    { status: "Shipped", kind: "0-to-1", title: "In-House Analytics Interface",
      desc: "Built a single in-house interface covering 20+ internal apps, taking it from a blank page to company-wide adoption.",
      metrics: ["250+ employees", "~100 DAUs, 10% of company"],
      tags: ["0-to-1", "Internal Tools", "Adoption"], featured: true },
    { status: "Shipped", kind: "Tooling", title: "Prediction-Model Feature Analyzer",
      desc: "Tooling that evaluates candidate features for prediction models and prunes underperforming existing ones, keeping models lean and explainable.",
      metrics: ["Feature-level evaluation", "Model pruning"],
      tags: ["ML Ops", "Model Eval", "Tooling"], featured: false },
    { status: "Shipped", kind: "Optimisation", title: "News Publisher Prediction & Demotion",
      desc: "Drove optimisation of news-based publisher prediction models and built a demotion system for new revenue-generating keywords.",
      metrics: ["Publisher model tuning", "Keyword demotion system"],
      tags: ["Publishers", "Prediction", "Revenue"], featured: false }
  ],

  /* ---------- Hobby projects ---------- */
  hobbyProjects: [
    { status: "Ongoing", kind: "Content", title: "Instagram Reel Pipeline",
      desc: "An end-to-end personal content system: catalogue raw drone, gym and frisbee footage, sequence reels by narrative role, burn in styled captions, and publish straight to Instagram via the Graph API.",
      metrics: ["Full shoot-to-post pipeline", "Metrics-driven shoot-next loop"],
      tags: ["Content", "Automation", "Instagram API"], featured: true },
    { status: "Shipped", kind: "Tooling", title: "RemotionCopy",
      desc: "A homemade Remotion-style video tool: author reels in React/JSX, preview them live in the browser, and render to MP4 via Playwright + ffmpeg, without pushing 4K/HEVC footage through a headless browser.",
      metrics: ["React-based reel authoring", "ffmpeg-only footage decode"],
      tags: ["React", "Video", "ffmpeg"], featured: true },
    { status: "Shipped", kind: "Product", title: "Ukulele Coach",
      desc: "A local, no-build web app for structured ukulele and singing practice, with a live review workflow run through chat and progress saved straight to the browser.",
      metrics: ["Zero-server, zero-build app", "Persistent practice log"],
      tags: ["Practice", "localStorage", "Music"], featured: true },
    { status: "Ongoing", kind: "Knowledge", title: "KnowBase",
      desc: "A personal knowledge base for building understanding of a topic day by day — started as an Obsidian vault with scripting, now growing into its own React/TypeScript web app with an admin panel.",
      metrics: ["Obsidian vault + scripts", "React/TS rebuild in progress"],
      tags: ["Obsidian", "React", "TypeScript"], featured: true },
    { status: "In Progress", kind: "Product", title: "Downtime Optimizer",
      desc: "A FastAPI + Google Calendar app that reads a calendar to surface genuinely free downtime, instead of leaving that to be eyeballed manually.",
      metrics: ["FastAPI backend", "Google OAuth + Calendar API"],
      tags: ["FastAPI", "Google Calendar", "Scheduling"], featured: true }
  ],

  certifications: [
    { name: "NextLeap", detail: "Top Product Management Fellow" },
    { name: "Product School", detail: "Product Led Growth Certification" },
    { name: "Product School", detail: "Product Analytics Certification" }
  ],

  education: [
    { school: "BITS Pilani", detail: "M.Sc. Economics (minor in Finance) & B.E. Mechanical Engineering", period: "Aug 2019 — Jul 2024" },
    { school: "Delhi Public School", detail: "Class 12: 90.4%  ·  Class 10: 100%", period: "" }
  ],

  beyond: [
    { icon: "disc", title: "Ultimate Frisbee", desc: "Active competitive player in India since 2019. Coached the 2025 Maharashtra Men's Team; Captain of BITS Goa in 2022." },
    { icon: "building", title: "University Societies", desc: "Developer Society, BITS Ultimate Frisbee Club, Literary & Debate Club, and the Department of Sponsorship & Marketing." }
  ]
};
