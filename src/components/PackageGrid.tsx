import { Button } from "@/components/Button";
import { cn } from "@/lib/cn";
import { packages } from "@/lib/packages";

export function PackageGrid() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {packages.map((item) => (
        <article
          key={item.slug}
          className={cn(
            "flex flex-col border bg-panel p-6 sm:p-7",
            item.featured
              ? "border-gold/70 shadow-[0_0_0_1px_rgba(245,197,66,0.25)]"
              : "border-white/10",
          )}
        >
          <div className="mb-6 flex items-start justify-between gap-3">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {item.cadence}
              </p>
              <h3 className="mt-2 font-display text-3xl text-text">
                {item.name}
              </h3>
            </div>
            {item.featured ? (
              <span className="rounded-sm border border-gold/40 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-gold">
                Most used
              </span>
            ) : null}
          </div>
          <p className="font-display text-4xl tracking-tight text-gold">
            {item.price}
            {item.slug === "signal-retainer" ? (
              <span className="ml-1 font-sans text-sm font-normal text-muted">
                /mo
              </span>
            ) : null}
          </p>
          <p className="mt-4 text-sm leading-6 text-muted">{item.summary}</p>
          <ul className="mt-6 flex-1 space-y-2.5 text-sm text-text">
            {item.includes.map((line) => (
              <li key={line} className="flex gap-3">
                <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button
              href={`/book?package=${item.slug}`}
              variant={item.featured ? "primary" : "secondary"}
              className="w-full"
            >
              Book {item.name}
            </Button>
          </div>
        </article>
      ))}
    </div>
  );
}
