# Shiplog website wireframe

Clickable, low fidelity wireframe of the new Shiplog marketing site. Greyscale boxes, real headlines, real structure. The point is to review layout, page flow and section order before visual design.

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

## Wireframe rules used

- Greyscale only: `#FFFFFF` background, `#F2F2F2` section fills, `#D9D9D9` boxes, `#111` text.
- One accent, `#3B5BFD`, only on primary buttons, so the Book a demo path is easy to follow.
- Every visual is a grey box with a label, for example `[Customer profile assembling itself from product, billing, CRM and support signals]`.
- Every hero carries a positioning strip: no engineers, no data team, no design team, built on deep customer intelligence, actions not predictions, multiplayer.
- Every page ends with a Book a demo section (except `/demo` and `/thanks`, where it would be circular).
- No dashes in visible copy, British English, no customer names or logos, every page under 12 sections. A Playwright check enforces the dash, section count and broken link rules.

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
