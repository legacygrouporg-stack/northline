const tokens = [
  { name: "Ink", hex: "#070A0F" },
  { name: "Panel", hex: "#191D24" },
  { name: "Text", hex: "#E8EEF8" },
  { name: "Muted", hex: "#8B9BB4" },
  { name: "Gold", hex: "#F5C542" },
  { name: "Bid", hex: "#22D39A" },
  { name: "Ask", hex: "#FF5C7A" },
  { name: "Swap", hex: "#4A9EFF" },
];

export function SystemPreview() {
  return (
    <aside
      aria-label="Example brand system"
      className="overflow-hidden rounded-md border border-white/10 bg-panel shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
    >
      <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
        <div className="flex items-center gap-2" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-ask/80" />
          <span className="h-2 w-2 rounded-full bg-gold/80" />
          <span className="h-2 w-2 rounded-full bg-bid/80" />
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          System · Handoff
        </p>
      </div>

      <div className="grid gap-5 p-5 sm:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            Tokens
          </p>
          <div className="grid grid-cols-4 gap-2">
            {tokens.map((token) => (
              <div key={token.name} className="space-y-1.5">
                <div
                  className="h-10 rounded-sm border border-white/8"
                  style={{ background: token.hex }}
                />
                <p className="font-mono text-[9px] uppercase tracking-wider text-muted">
                  {token.name}
                </p>
              </div>
            ))}
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              Narrative
            </p>
            <p className="mt-2 font-display text-xl leading-snug text-text">
              A marketplace people trust with their float.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10 bg-ink">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,197,66,0.18),transparent_42%),radial-gradient(circle_at_80%_80%,rgba(74,158,255,0.16),transparent_40%)]" />
            <div className="absolute inset-x-4 top-4 flex items-center justify-between">
              <span className="font-sans text-xs text-text">
                North<span className="text-gold">line</span>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                4:5
              </span>
            </div>
            <div className="absolute inset-x-4 bottom-4 space-y-2">
              <p className="font-display text-2xl leading-none text-text">
                List with
                <br />
                conviction.
              </p>
              <div className="flex gap-2 font-mono text-[10px]">
                <span className="rounded-sm bg-bid/15 px-2 py-1 text-bid">
                  Bid
                </span>
                <span className="rounded-sm bg-ask/15 px-2 py-1 text-ask">
                  Ask
                </span>
                <span className="rounded-sm bg-swap/15 px-2 py-1 text-swap">
                  Swap
                </span>
              </div>
            </div>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            Social creative · landing · 15s / 30s
          </p>
        </div>
      </div>
    </aside>
  );
}
