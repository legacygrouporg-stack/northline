import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Northline is a productized practice for brand and launch systems, owned by Paul Omogie. Built for African marketplace and fintech startups.",
};

export default function AboutPage() {
  return (
    <main id="main" className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
        About
      </p>
      <h1 className="mt-4 font-display text-4xl text-text sm:text-5xl">
        A practice with three offers — not an agency menu.
      </h1>
      <div className="mt-8 space-y-5 text-base leading-7 text-muted">
        <p>
          Northline builds productized brand and launch systems for African
          marketplace and fintech startups. The work is scoped so a founder
          can buy a system, not a conversation.
        </p>
        <p>
          We take companies that already have a product — a listing engine, a
          wallet, a rails business — and give them a public surface equal to
          that product: tokens, narrative, landing, motion, and a kit the
          team can keep running.
        </p>
      </div>

      <dl className="mt-12 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-2">
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Owner
          </dt>
          <dd className="mt-2 text-lg text-text">{siteConfig.owner}</dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            For
          </dt>
          <dd className="mt-2 text-lg text-text">
            Marketplace and fintech startups
          </dd>
        </div>
      </dl>

      <p className="mt-10 text-sm leading-6 text-muted">
        Engagements are the published packages. Payment is hosted checkout
        only — Paystack or Stripe. Northline will never ask for bank account
        details, card numbers, or OTPs.
      </p>

      <div className="mt-10">
        <Button href="/book">Book a sprint</Button>
      </div>
    </main>
  );
}
