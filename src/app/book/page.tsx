import type { Metadata } from "next";
import { Suspense } from "react";
import { InquiryForm } from "@/components/InquiryForm";
import { packages } from "@/lib/packages";

export const metadata: Metadata = {
  title: "Book",
  description:
    "Book a Northline sprint, board pack, or retainer. Payment via Paystack or Stripe hosted checkout only — never bank details on this site.",
};

export default function BookPage() {
  return (
    <main
      id="main"
      className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr]"
    >
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
          Book
        </p>
        <h1 className="mt-4 font-display text-4xl text-text sm:text-5xl">
          Send a brief. We reply with scope and checkout.
        </h1>
        <p className="mt-5 text-base leading-7 text-muted">
          Tell us the company, the package, and what has to be true by the
          end of the engagement. We will not ask for payment details on this
          form.
        </p>
        <ul className="mt-8 space-y-3 text-sm text-muted">
          {packages.map((item) => (
            <li key={item.slug} className="flex justify-between gap-4 border-b border-white/8 pb-3">
              <span className="text-text">{item.name}</span>
              <span className="font-mono text-gold">
                {item.price}
                {item.slug === "signal-retainer" ? "/mo" : ""}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border border-white/10 bg-panel p-5 sm:p-8">
        <Suspense
          fallback={
            <p className="text-sm text-muted" role="status">
              Loading form…
            </p>
          }
        >
          <InquiryForm />
        </Suspense>
      </div>
    </main>
  );
}
