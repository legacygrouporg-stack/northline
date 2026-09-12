const items = [
  { label: "Listing", value: "Live", tone: "text-bid" },
  { label: "Bid", value: "22.40", tone: "text-bid" },
  { label: "Ask", value: "22.48", tone: "text-ask" },
  { label: "Spread", value: "8 bps", tone: "text-gold" },
  { label: "Swap", value: "Cleared", tone: "text-swap" },
  { label: "Trust", value: "Held", tone: "text-text" },
];

export function MarketTape() {
  return (
    <div
      aria-hidden
      className="flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-white/8 bg-panel/60 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.14em] sm:px-8"
    >
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-2">
          <span className="text-muted">{item.label}</span>
          <span className={item.tone}>{item.value}</span>
        </span>
      ))}
    </div>
  );
}
