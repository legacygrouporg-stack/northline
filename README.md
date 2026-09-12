# Northline

Brand & launch systems for African marketplace and fintech startups.

Owner: **Paul Omogie**.

This repository is the public offer site: homepage, about, and a booking form. Packages and prices are published in USD. Payment is **Paystack or Stripe hosted checkout only** — the site never collects bank details, card numbers, or OTPs.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4

## Pages

| Path | Purpose |
| --- | --- |
| `/` | Offer: hero, problem, value, packages, process, CTA |
| `/about` | Short practice note and owner |
| `/book` | Inquiry form (name, email, company, package, message) |

## Local development

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
npm start
```

Copy `.env.example` to `.env.local` and fill in values as needed.

## Inquiry delivery

The booking form posts to `/api/inquiry`. It validates input and never accepts payment fields.

Configure **one** of the following in production so briefs actually arrive:

1. **Webhook** — set `INQUIRY_WEBHOOK_URL` to a Zapier, Make, n8n, or Slack incoming webhook. The JSON body includes `name`, `email`, `company`, `packageInterest`, `message`, and `text`.
2. **Email via Resend** — set `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `INQUIRY_TO_EMAIL`.

If neither path is configured, the form still validates and shows a success state, but nothing is delivered. Set `NEXT_PUBLIC_CONTACT_EMAIL` if you want a visible mailto fallback on the book page.

## Deploy on Vercel

1. Push this repository to GitHub (already the source of truth).
2. In [Vercel](https://vercel.com/new), import `legacygrouporg-stack/northline`.
3. Framework preset: **Next.js**. Leave the build command as `next build` and the output directory as the default.
4. Set environment variables (Production + Preview):

   | Name | Required | Notes |
   | --- | --- | --- |
   | `NEXT_PUBLIC_SITE_URL` | Yes for SEO | Canonical origin, e.g. `https://northline.yourdomain.com` (no trailing slash) |
   | `INQUIRY_WEBHOOK_URL` | One of webhook or Resend | HTTPS endpoint that accepts POST JSON |
   | `RESEND_API_KEY` | If using email | From the Resend dashboard |
   | `RESEND_FROM_EMAIL` | If using email | A verified sender, e.g. `Northline <hello@yourdomain.com>` |
   | `INQUIRY_TO_EMAIL` | If using email | Inbox that should receive briefs |
   | `NEXT_PUBLIC_CONTACT_EMAIL` | Optional | Shown on `/book` as a public address |

5. Deploy. After the first production URL exists, set `NEXT_PUBLIC_SITE_URL` to that URL (or your custom domain) and redeploy so Open Graph, sitemap, and JSON-LD use the live origin.
6. Add a custom domain in Vercel → Project → Settings → Domains. Point DNS as Vercel instructs.
7. Open `/`, `/about`, and `/book` on the production URL. Submit a test brief and confirm it arrives via webhook or email.
8. Checkout links (Paystack or Stripe hosted pages) are sent in the reply — they are not collected on this form.

### Other hosts

Any Node host that can run `next build` and `next start` works (Netlify Next runtime, Railway, Render, a VPS). Set the same environment variables. Do not use a static export: the inquiry API route needs a server.

## Brand tokens

| Token | Hex |
| --- | --- |
| ink | `#070a0f` |
| panel | `#191d24` |
| text | `#e8eef8` |
| muted | `#8b9bb4` |
| gold | `#f5c542` |
| bid | `#22d39a` |
| ask | `#ff5c7a` |
| swap | `#4a9eff` |

Wordmark: **North** + **line** (gold).
