import { Button } from "@/components/Button";
import { MarketTape } from "@/components/MarketTape";
import { PackageGrid } from "@/components/PackageGrid";
import { SystemPreview } from "@/components/SystemPreview";

const values = [
  {
    index: "01",
    title: "A system, not a folder of files",
    body: "Tokens, narrative, landing, motion, and a handoff kit. Your team should be able to ship the next asset without booking another kickoff.",
  },
  {
    index: "02",
    title: "Priced like a product",
    body: "Three offers. Fixed USD prices. Fixed scope. No discovery theater and no open-ended hours.",
  },
  {
    index: "03",
    title: "Built for this market",
    body: "Marketplace and fintech conventions — listing, float, settlement, trust — not a generic SaaS gradient with a new wordmark.",
  },
];

const steps = [
  {
    title: "Brief",
    body: "Constraints, audience, and the launch you are actually running.",
  },
  {
    title: "System",
    body: "Tokens, narrative, and the visual language that holds both.",
  },
  {
    title: "Surfaces",
    body: "Landing, 4:5 creatives, and 15s / 30s motion cutdowns.",
  },
  {
    title: "Handoff",
    body: "A kit, usage notes, and a clear next thirty days.",
  },
];

export default function HomePage() {
  return (
    <main id="main">
      <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
            Productized brand & launch systems
          </p>
          <h1 className="mt-5 max-w-xl font-display text-[2.6rem] leading-[1.12] text-text sm:text-5xl lg:text-[3.35rem]">
            The system African marketplace and fintech startups launch with.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg">
            Northline scopes the work that usually stalls a public launch or a
            raise: brand tokens, narrative, landing, motion, and a kit your
            team can operate.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/book">Book a sprint</Button>
            <Button href="/#packages" variant="secondary">
              See packages
            </Button>
          </div>
        </div>
        <SystemPreview />
      </section>

      <MarketTape />

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            The problem
          </p>
          <h2 className="mt-3 font-display text-4xl text-text sm:text-5xl">
            The product is real. The public surface is not.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-7 text-muted">
          <p>
            Too many early-stage marketplace and fintech companies ship a logo,
            a landing page, and a week of ads. Investors feel the gap.
            Customers feel the gap. The next thirty days of content have no
            system behind them.
          </p>
          <p>
            Northline exists so a founder can send one brief and receive a
            launch system — not another moodboard, and not a six-month brand
            engagement.
          </p>
        </div>
      </section>

      <section className="border-y border-white/8 bg-panel/40">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-3">
          {values.map((item) => (
            <article key={item.index}>
              <p className="font-mono text-[11px] text-gold">{item.index}</p>
              <h2 className="mt-3 font-display text-2xl text-text">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="packages"
        className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8"
      >
        <div className="mb-10 max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Packages
          </p>
          <h2 className="mt-3 font-display text-4xl text-text sm:text-5xl">
            Three offers. Exact USD prices.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">
            Choose the Sprint to launch, the Board Pack if a raise is in
            motion, or the Retainer once the system exists.
          </p>
        </div>
        <PackageGrid />
      </section>

      <section
        id="process"
        className="scroll-mt-24 border-y border-white/8 bg-panel/40"
      >
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Process
          </p>
          <h2 className="mt-3 max-w-xl font-display text-4xl text-text sm:text-5xl">
            Brief, system, surfaces, handoff.
          </h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="border-t border-gold/40 pt-5">
                <p className="font-mono text-[11px] text-gold">
                  0{index + 1}
                </p>
                <h3 className="mt-2 font-display text-2xl text-text">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
        <div className="border border-white/10 bg-panel px-6 py-12 sm:px-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
            Next
          </p>
          <h2 className="mt-3 max-w-xl font-display text-4xl text-text sm:text-5xl">
            Send the brief. We will reply with scope and a hosted checkout link.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted">
            Payment is Paystack or Stripe hosted checkout only. We never ask
            for bank details on this site or over email.
          </p>
          <div className="mt-8">
            <Button href="/book">Book Northline</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
