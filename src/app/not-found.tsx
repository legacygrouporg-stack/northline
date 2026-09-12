import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <main
      id="main"
      className="mx-auto flex w-full max-w-3xl flex-col items-start px-5 py-24 sm:px-8"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl text-text sm:text-5xl">
        This page is not on the book.
      </h1>
      <p className="mt-4 max-w-md text-base leading-7 text-muted">
        The offer, packages, and booking form are on the main site.
      </p>
      <div className="mt-8">
        <Button href="/">Back to Northline</Button>
      </div>
    </main>
  );
}
