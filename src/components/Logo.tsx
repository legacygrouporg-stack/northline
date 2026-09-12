import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <span
      className={cn(
        "font-sans text-[1.05rem] font-medium tracking-[-0.03em] text-text",
        className,
      )}
    >
      North<span className="text-gold">line</span>
    </span>
  );
}
