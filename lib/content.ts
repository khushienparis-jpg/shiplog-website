// All copy below is taken from docs/copy.md. Do not add dashes.

export type UseCase = {
  slug: string;
  navLabel: string;
  tabLabel: string;
  seoTitle: string;
  h1: string;
  sub: string;
  leak: string;
  fixes: { title: string; body: string }[];
  example?: string;
  signal: string;
  decision: string;
  action: string;
  result?: string;
  cta: { title: string; secondary?: { label: string; href: string } };
};

export const useCases: UseCase[] = [
  {
    slug: "activation",
    navLabel: "Activation",
    tabLabel: "Activation",
    seoTitle: "Activation | Shiplog",
    h1: "Turn signups into users.",
    sub: "Most signups never reach first value. Shiplog finds where each one got stuck and gets them moving, in app and by email.",
    leak: "You paid to acquire every signup. The ones who never activate are the most expensive customers you'll never have.",
    fixes: [
      { title: "See the blocker.", body: "Shiplog spots the exact step each user stopped at." },
      { title: "Remove it.", body: "The next message is about that step, not a generic welcome series." },
      { title: "Escalate when it matters.", body: "High value signups who stay stuck get flagged to your team." },
    ],
    example:
      "A fintech user started verification but never made a first transaction. Shiplog sent a short guide to the one missing document, then a reminder on day three.",
    signal: "Signed up three days ago, never connected data",
    decision: "Remove the one blocker",
    action: "In app checklist today, setup email tomorrow",
    cta: { title: "Find your activation leaks.", secondary: { label: "Get your audit", href: "/demo/" } },
  },
  {
    slug: "adoption",
    navLabel: "Adoption",
    tabLabel: "Adoption",
    seoTitle: "Adoption | Shiplog",
    h1: "Get customers using what they pay for.",
    sub: "Customers who use more of your product stay longer. Shiplog guides each account to the next feature that matters to them.",
    leak: "You ship features every week. Most customers never find them.",
    fixes: [
      { title: "Match features to people.", body: "Each user sees the feature that fits how they already work." },
      { title: "Time it right.", body: "Tips appear when the feature is useful, not on a schedule." },
      { title: "Launch to the right users.", body: "New releases reach the customers who asked for them." },
    ],
    example: "Users who export reports every week get a tip on scheduled exports the next time they export.",
    signal: "Uses one feature out of five",
    decision: "Show the feature their peers use most",
    action: "Tooltip on next login",
    cta: { title: "See what your customers need next." },
  },
  {
    slug: "expansion",
    navLabel: "Expansion",
    tabLabel: "Expansion",
    seoTitle: "Expansion | Shiplog",
    h1: "Find the upgrades already in your base.",
    sub: "Accounts hitting their limits are ready to grow. Shiplog spots them and makes the right offer to the right person.",
    leak: "Upgrade revenue sits in your customer base while sales chases new logos.",
    fixes: [
      { title: "Spot the signal.", body: "Seat limits, usage caps and heavy feature use, tracked per account." },
      { title: "Reach the buyer.", body: "The offer goes to the admin or budget holder, with their own usage numbers." },
      { title: "Close the loop.", body: "Upgrades and replies flow back to your CRM." },
    ],
    signal: "Hit the seat limit three times this month",
    decision: "Offer the next plan to the admin",
    action: "Banner today, email with usage numbers in two days",
    result: "10 plan upgrades for one AI SaaS customer.",
    cta: { title: "See what your customers need next." },
  },
  {
    slug: "churn-prevention",
    navLabel: "Churn prevention",
    tabLabel: "Churn prevention",
    seoTitle: "Churn prevention | Shiplog",
    h1: "Catch churn before renewal does.",
    sub: "Usage drops weeks before a cancellation. Shiplog notices, acts, and loops in your CS team when it matters.",
    leak: "Most churn is decided long before the renewal call. By then, it's too late to fix.",
    fixes: [
      { title: "Watch every account.", body: "Not just the top 50 your CSMs can track." },
      { title: "Act early.", body: "A personal check in or a useful tip the week usage starts to drop." },
      { title: "Bring in humans.", body: "High value accounts at risk get an alert to their owner." },
    ],
    example:
      "An account's weekly logins fell by half. Shiplog sent a check in from the CSM's name, then alerted the CSM when there was no reply.",
    signal: "Weekly logins down by half",
    decision: "Check in before it's too late",
    action: "Personal email, then a CS alert if no reply",
    cta: { title: "See what your customers need next." },
  },
  {
    slug: "win-back",
    navLabel: "Win back",
    tabLabel: "Reactivation",
    seoTitle: "Reactivation and win back | Shiplog",
    h1: "Bring quiet customers back.",
    sub: "Dormant users already know your product. Shiplog reminds them why they signed up, with something new to see.",
    leak: "Inactive users and churned customers are your cheapest growth, and most teams never email them again.",
    fixes: [
      { title: "Find the right reason.", body: "What changed since they left that matters to them." },
      { title: "Pick the right moment.", body: "Seasonal patterns, product launches and their own history." },
      { title: "Stop when it's time.", body: "No endless win back sequences." },
    ],
    example:
      "Users inactive for 30 days get one email about the single new feature closest to how they used the product.",
    signal: "No login in 30 days",
    decision: "Show what changed since they left",
    action: "Email with the one new feature that fits",
    cta: { title: "See what your customers need next." },
  },
];

export type Integration = {
  slug: string;
  name: string;
  category: string;
  h1: string;
  does: string;
  useCase: string;
};

export const integrationCategories = [
  "All",
  "Product analytics",
  "Data warehouse",
  "Billing",
  "CRM",
  "Sending",
  "Ecommerce",
  "AI",
];

export const integrations: Integration[] = [
  {
    slug: "posthog",
    name: "PostHog",
    category: "Product analytics",
    h1: "Shiplog for PostHog",
    does: "Reads product events to see what each user does, and where they get stuck",
    useCase: "Users who never trigger your key event get a setup nudge on day two",
  },
  {
    slug: "snowflake",
    name: "Snowflake",
    category: "Data warehouse",
    h1: "Shiplog for Snowflake",
    does: "Reads customer and usage tables from your warehouse, without copying your data elsewhere",
    useCase: "Accounts trending down across product and billing data get flagged for a check in",
  },
  {
    slug: "stripe",
    name: "Stripe",
    category: "Billing",
    h1: "Shiplog for Stripe",
    does: "Reads plans, invoices and payment events to time upgrade and retention moves",
    useCase: "Customers approaching a plan limit get an upgrade offer before they hit it",
  },
  {
    slug: "salesforce",
    name: "Salesforce",
    category: "CRM",
    h1: "Shiplog for Salesforce",
    does: "Reads accounts and opportunities, and writes back signals so sales and CS see them",
    useCase: "An expansion signal creates a task for the account owner",
  },
  {
    slug: "hubspot",
    name: "HubSpot",
    category: "CRM",
    h1: "Shiplog for HubSpot",
    does: "Reads contacts and deals, and sends campaigns through HubSpot",
    useCase: "Trial users who went quiet get a personal follow up from their rep's inbox",
  },
  {
    slug: "customerio",
    name: "Customer.io",
    category: "Sending",
    h1: "Shiplog for Customer.io",
    does: "Builds and sends campaigns through your Customer.io workspace. Shiplog is an official Customer.io partner",
    useCase: "Nightly proposals land as ready to approve campaigns in Customer.io",
  },
  {
    slug: "shopify",
    name: "Shopify",
    category: "Ecommerce",
    h1: "Shiplog for Shopify",
    does: "Reads orders and customer behaviour for retention and win back",
    useCase: "Customers due for a reorder get a reminder at the right moment",
  },
  {
    slug: "claude",
    name: "Claude (MCP)",
    category: "AI",
    h1: "Shiplog in Claude",
    does: "Lets marketers build and launch campaigns from Claude in plain language",
    useCase: "Ask for a churn campaign, review it, launch it, without leaving the chat",
  },
];

export const backers = [
  "Kima Ventures",
  "Project Europe",
  "Purple",
  "No Label Ventures",
  "100IN",
  "Station F Fund",
];

export const navLinks = [
  { label: "Product", href: "/product/" },
  { label: "Use cases", href: "/use-cases/activation/", children: useCases.map((u) => ({ label: u.navLabel, href: `/use-cases/${u.slug}/` })) },
  { label: "Integrations", href: "/integrations/" },
  { label: "Customers", href: "/customers/" },
  { label: "Enterprise", href: "/enterprise/" },
  { label: "Pricing", href: "/pricing/" },
];
