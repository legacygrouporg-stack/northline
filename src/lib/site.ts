export const siteConfig = {
  name: "Northline",
  owner: "Paul Omogie",
  tagline:
    "Brand & launch systems for African marketplace and fintech startups.",
  description:
    "Northline productizes brand and go-to-market for African marketplace and fintech startups: tokens, narrative, landing, motion, and a handoff kit — scoped, priced, and ready to book.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
} as const;

export const paymentNote =
  "Payment is accepted through Paystack or Stripe hosted checkout only. Northline will never ask for bank account details, card numbers, or OTPs on this site or over email.";
