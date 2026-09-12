"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/cn";

const links = [
  { href: "/#packages", label: "Packages" },
  { href: "/#process", label: "Process" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/8 bg-ink/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            onClick={() => setOpen(false)}
          >
            <Logo />
            <span className="sr-only">Northline home</span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="rounded-sm bg-gold px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-[#ffd56a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Book
            </Link>
          </nav>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-text md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden className="relative block h-3.5 w-5">
              <span
                className={cn(
                  "absolute left-0 h-px w-5 bg-text transition-transform",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 h-px w-5 bg-text transition-opacity",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-px w-5 bg-text transition-transform",
                  open ? "top-1.5 -rotate-45" : "top-3",
                )}
              />
            </span>
          </button>
        </div>
      </header>

      {open ? (
        <div
          id={menuId}
          className="fixed inset-x-0 top-16 bottom-0 z-50 bg-ink md:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1 px-5 py-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-sm px-2 py-3 text-lg text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="mt-3 rounded-sm bg-gold px-3 py-3 text-center text-lg font-medium text-ink"
              onClick={() => setOpen(false)}
            >
              Book a sprint
            </Link>
          </nav>
        </div>
      ) : (
        <div id={menuId} hidden className="md:hidden" />
      )}
    </>
  );
}
