export const FALLBACK_SITE_URL = "https://northline.vercel.app";
const LOCAL_SITE_URL = "http://localhost:3000";

function parseAbsoluteUrl(raw: string | undefined): string | undefined {
  if (typeof raw !== "string") return undefined;
  const trimmed = raw.trim();
  if (!trimmed) return undefined;

  const withProtocol = /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  try {
    const parsed = new URL(withProtocol);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      return undefined;
    }
    if (!parsed.hostname) {
      return undefined;
    }
    return parsed.origin;
  } catch {
    return undefined;
  }
}

/** Never returns an empty string — `new URL("")` throws ERR_INVALID_URL. */
export function resolveSiteUrl(env: NodeJS.ProcessEnv = process.env): string {
  const configured = parseAbsoluteUrl(env.NEXT_PUBLIC_SITE_URL);
  if (configured) return configured;

  const vercelProduction = parseAbsoluteUrl(env.VERCEL_PROJECT_PRODUCTION_URL);
  if (vercelProduction) return vercelProduction;

  const vercelDeployment = parseAbsoluteUrl(env.VERCEL_URL);
  if (vercelDeployment) return vercelDeployment;

  return env.NODE_ENV === "development" ? LOCAL_SITE_URL : FALLBACK_SITE_URL;
}

export const siteConfig = {
  name: "Northline",
  owner: "Paul Omogie",
  tagline:
    "Brand & launch systems for African marketplace and fintech startups.",
  description:
    "Northline productizes brand and go-to-market for African marketplace and fintech startups: tokens, narrative, landing, motion, and a handoff kit — scoped, priced, and ready to book.",
  url: resolveSiteUrl(),
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ?? "",
} as const;

export const paymentNote =
  "Payment is accepted through Paystack or Stripe hosted checkout only. Northline will never ask for bank account details, card numbers, or OTPs on this site or over email.";
