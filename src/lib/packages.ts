export const packageSlugs = [
  "launch-sprint",
  "board-pack",
  "signal-retainer",
  "unsure",
] as const;

export type PackageSlug = (typeof packageSlugs)[number];

export type Package = {
  slug: Exclude<PackageSlug, "unsure">;
  name: string;
  price: string;
  cadence: string;
  summary: string;
  featured?: boolean;
  includes: string[];
};

export const packages: Package[] = [
  {
    slug: "launch-sprint",
    name: "Launch Sprint",
    price: "$2,500",
    cadence: "2 weeks",
    summary:
      "A complete brand and launch surface — tokens through motion — handed over as a kit your team can run.",
    includes: [
      "Brand tokens",
      "Narrative",
      "5 social 4:5 creatives",
      "Landing page",
      "15s + 30s motion cutdowns",
      "Handoff kit",
    ],
  },
  {
    slug: "board-pack",
    name: "Board Pack",
    price: "$4,500",
    cadence: "Sprint + raise layer",
    summary:
      "The Sprint, extended for a raise: investor surfaces, a content calendar, and two revision rounds.",
    featured: true,
    includes: [
      "Everything in Launch Sprint",
      "Investor one-pager / deck skin",
      "UI motion stills",
      "4-week content calendar (12 posts)",
      "2 revision rounds",
    ],
  },
  {
    slug: "signal-retainer",
    name: "Signal Retainer",
    price: "$2,500",
    cadence: "per month",
    summary:
      "A monthly cadence after the system exists — assets, page updates, and async direction from one brief.",
    includes: [
      "8 assets",
      "2 page updates",
      "Async direction",
      "Monthly brief",
    ],
  },
];

export const packageInterestOptions: Array<{
  slug: PackageSlug;
  label: string;
}> = [
  ...packages.map((item) => ({ slug: item.slug, label: item.name })),
  { slug: "unsure", label: "Not sure yet" },
];

export function isPackageSlug(value: string): value is PackageSlug {
  return (packageSlugs as readonly string[]).includes(value);
}
