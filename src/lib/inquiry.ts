import { isPackageSlug, type PackageSlug } from "@/lib/packages";

export type InquiryInput = {
  name: string;
  email: string;
  company: string;
  packageInterest: string;
  message: string;
  website?: string;
};

export type InquiryPayload = {
  name: string;
  email: string;
  company: string;
  packageInterest: PackageSlug;
  message: string;
};

export type FieldErrors = Partial<
  Record<
    "name" | "email" | "company" | "packageInterest" | "message" | "form",
    string
  >
>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function trim(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function parseInquiry(
  input: InquiryInput,
): { ok: true; data: InquiryPayload } | { ok: false; errors: FieldErrors } {
  const errors: FieldErrors = {};

  if (trim(input.website)) {
    return { ok: false, errors: { form: "Unable to submit this form." } };
  }

  const name = trim(input.name);
  const email = trim(input.email);
  const company = trim(input.company);
  const packageInterest = trim(input.packageInterest);
  const message = trim(input.message);

  if (name.length < 2 || name.length > 80) {
    errors.name = "Enter your name (2–80 characters).";
  }

  if (!EMAIL.test(email) || email.length > 120) {
    errors.email = "Enter a valid work email.";
  }

  if (company.length < 1 || company.length > 120) {
    errors.company = "Enter your company name.";
  }

  if (!isPackageSlug(packageInterest)) {
    errors.packageInterest = "Select a package.";
  }

  if (message.length < 10 || message.length > 2000) {
    errors.message = "Add a short note (10–2,000 characters).";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      company,
      packageInterest: packageInterest as PackageSlug,
      message,
    },
  };
}

export function formatInquiryText(data: InquiryPayload): string {
  return [
    "New Northline inquiry",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company: ${data.company}`,
    `Package: ${data.packageInterest}`,
    "",
    data.message,
    "",
    "Do not request bank details, card numbers, or OTPs. Payment is Paystack or Stripe hosted checkout only.",
  ].join("\n");
}
