# Marina Template

A corporate website template for a marine technical service company. The company installs and services yacht electronics, radar and air-conditioning systems. The site content is in Turkish.

## Pages

| Route | Content |
|---|---|
| `/` | Landing page: hero, services and calls to action |
| `/urunler` | Products and services overview |
| `/urunler/radar` | Radar and navigation safety service page |
| `/urunler/klima` | Marine air-conditioning service page |
| `/teklif-al` | Multi-step quote request form |
| `/hakkimizda` | About the company |
| `/iletisim` | Contact page |

## Quote wizard

The quote request form has 4 steps:

1. Service category (radar, air conditioning, general electronics, other)
2. Vessel type, vessel length and current marina
3. Request details
4. Contact information (name, phone, email)

Each step is validated before the user can continue. Product pages link to `/teklif-al?product=<model>`. The wizard reads the `product` parameter, selects the matching category (radar or air conditioning), fills the selected model into the request details and starts at step 2. Submission is simulated: connect `handleSubmit` in `app/components/QuoteWizard.tsx` to your own API or email service.

## Tech stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4
- `next/image` for optimized images

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.
