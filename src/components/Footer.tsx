import Link from "next/link";
import { Logo } from "@/components/Logo";
import { paymentNote, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-ink">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-sm text-sm leading-6 text-muted">
            {siteConfig.tagline} Owned by {siteConfig.owner}.
          </p>
        </div>
        <div>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Site
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="text-text hover:text-gold" href="/">
                Offer
              </Link>
            </li>
            <li>
              <Link className="text-text hover:text-gold" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="text-text hover:text-gold" href="/book">
                Book
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Payment
          </p>
          <p className="text-sm leading-6 text-muted">{paymentNote}</p>
        </div>
      </div>
      <div className="border-t border-white/8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Northline</p>
          <p>{siteConfig.owner}</p>
        </div>
      </div>
    </footer>
  );
}
