# Shiplog website wireframe

Clickable wireframe of the new Shiplog marketing site with the brand book applied. Real headlines, real structure, brand colours, type and shape. Visuals that are not designed yet are labelled slots.

- Copy source: [docs/copy.md](docs/copy.md) (export of "Shiplog website copy")
- Brand source: [docs/brand.md](docs/brand.md) (export of "Shiplog brand book")

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to ./out
```

## Deploy to Vercel (preview link per branch)

1. vercel.com → Add New → Project → import this GitHub repo.
2. Framework preset: Next.js. No settings to change. No environment variables.
3. Every push to any branch gets its own preview URL; pushes to the default branch go to production.

The site is a static export (`output: "export"` in `next.config.ts`), so it also runs on any static host.

## Brand layer

The wireframe now wears the Shiplog brand book (Oct 23, 2026, see `docs/brand.md`). Structure, copy and routes are unchanged.

- Tokens in `app/globals.css`: 8 neutrals (Ink to White), 4 bloom colours with tints (Sky, Iris, Coral, Mint), status colours, the soft shadow and the motion curve. The old `wf-*` names are aliases onto the brand so every page picks it up.
- Type: Geist for display and UI, Instrument Serif italic for one phrase per headline (`accent` prop on `Hero` and `SectionHeading`), Geist Mono for labels and numbers.
- Shape: pill buttons and tags, 12 px inputs, 20 px cards, 32 px panels. Primary buttons are Ink pills; Iris is the only bloom colour used for text (links) and focus.
- Logo: `components/Bloom.tsx` draws the bloom to the construction rules (two quarter circles per petal, rounded outer tip, hairline centre gap), plus the lockup and the bloom loader. The wordmark is set in Geist Bold until the master SVG is supplied. Favicon is the Ink symbol (`app/icon.svg`).
- One bloom gradient glow per page, in the hero. Petal colours tag each stage (Signal, Decision, Action, Result) wherever the loop appears.
- Visuals still to design are White cards with the dot grid and a mono label saying what goes there. The homepage hero uses a static campaign card built from the brand book UI sample.
- Icons are Lucide, outline, 1.5 px stroke.
- Sections fade up 12 px on scroll where the browser supports scroll driven animation; reduced motion gets a static page.

## Routes

| Route | Page |
| --- | --- |
| `/` | Home, 11 sections in the brief's order |
| `/product` | One long product page: three parts, how it works, intelligence, next best action, channels, multiplayer |
| `/product/mcp` | Shiplog MCP |
| `/use-cases/[slug]` | activation, adoption, expansion, churn-prevention, win-back |
| `/integrations` | Index with working category filter |
| `/integrations/[tool]` | posthog, snowflake, stripe, salesforce, hubspot, customerio, shopify, claude |
| `/customers` | Index, three anonymous story cards |
| `/customers/ai-saas-upgrades` | Story template, one sample |
| `/enterprise`, `/security`, `/pricing` | |
| `/about`, `/partners`, `/careers` | Footer pages |
| `/demo` | Form left, side panel right, inline Calendly placeholder after submit |
| `/thanks` | Thank you |
| any unknown URL | 404, "This page churned." |

## Components

Built once in `components/` and reused: Nav, Footer, AnnouncementBar, Hero (with PositioningStrip), SectionHeading, Placeholder, ComparisonTable, StepRow, TabSwitcher, ViewToggle, StatRow, StoryCard, PlanCard, FAQ, CTASection, DemoForm, SplitBlock, IntegrationGrid.

## Calls made where the brief and the copy disagree

Flag any of these in review.

1. **Homepage How it works.** The brief asks for three steps (Connect your tools, Approve what agents propose, Watch revenue move). The copy has four (Understand, Decide, Act, Learn). The homepage uses the brief's three steps under the copy's H2. `/product` uses the copy's four.
2. **The thesis toggle** (Segments treat 1,000 customers like one) is not in the brief's homepage order, but the brief asks for a working toggle. It sits inside section 7, Deep customer intelligence, to keep the page at 11 sections.
3. **Left out of the homepage:** The problem, the full five number Proof block, and Software plus a team. Not in the brief's order. Software plus a team is covered on `/enterprise`.
4. **Use case tabs** use the copy's labels, so the fifth tab reads Reactivation while its page lives at `/use-cases/win-back`.
5. **Use case results.** The copy only has a result for Expansion (10 plan upgrades). The other four show `[Result: number to confirm]`.
6. **Navigation** follows the brief: Product, Use cases, Integrations, Customers, Enterprise, Pricing, Book a demo. Log in, Resources and Company dropdowns from the copy are left out of the top bar. Resources, Privacy, Terms and Cookies have no pages yet, so they show in the footer unlinked.
7. **Open placeholders from the copy** are kept as grey labels: prices, security data location and subprocessors, Mehdi's bio, Diwan and Yash, open roles, the story quote, LinkedIn link.
