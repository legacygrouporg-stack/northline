import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-gold text-ink hover:bg-[#ffd56a] focus-visible:outline-gold",
  secondary:
    "bg-transparent text-text border border-white/12 hover:border-gold/50 hover:text-gold focus-visible:outline-gold",
  ghost:
    "bg-transparent text-muted hover:text-text focus-visible:outline-gold",
} as const;

type Variant = keyof typeof variants;

type Common = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = Common & {
  href: string;
};

type ButtonAsButton = Common &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const variant = props.variant ?? "primary";
  const classes = cn(
    "inline-flex items-center justify-center rounded-sm px-5 py-3 text-sm font-medium tracking-[-0.01em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    variants[variant],
    props.className,
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {props.children}
      </Link>
    );
  }

  const button = props as ButtonAsButton;
  const { type = "button", disabled } = button;

  return (
    <button className={classes} type={type} disabled={disabled}>
      {props.children}
    </button>
  );
}
