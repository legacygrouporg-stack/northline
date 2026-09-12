"use client";

import type { FormEvent, ReactNode } from "react";
import { useMemo, useState } from "react";
import { Button } from "@/components/Button";
import { cn } from "@/lib/cn";
import { type FieldErrors, type InquiryInput } from "@/lib/inquiry";
import {
  packageInterestOptions,
  type PackageSlug,
} from "@/lib/packages";
import { paymentNote, siteConfig } from "@/lib/site";

const fieldClass =
  "w-full rounded-sm border border-white/12 bg-ink px-3 py-3 text-sm text-text placeholder:text-muted/70 focus-visible:border-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

type InquiryFormProps = {
  initialPackage: PackageSlug;
};

export function InquiryForm({ initialPackage }: InquiryFormProps) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    packageInterest: initialPackage,
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [delivery, setDelivery] = useState<string>("");

  const contactLine = useMemo(() => {
    if (!siteConfig.contactEmail) return null;
    return (
      <p className="text-sm text-muted">
        Prefer email?{" "}
        <a
          className="text-gold underline-offset-4 hover:underline"
          href={`mailto:${siteConfig.contactEmail}`}
        >
          {siteConfig.contactEmail}
        </a>
      </p>
    );
  }, []);

  function update<K extends keyof typeof values>(key: K, value: (typeof values)[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrors({});

    const payload: InquiryInput = values;

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await response.json()) as {
        ok?: boolean;
        errors?: FieldErrors;
        delivery?: string;
        message?: string;
      };

      if (!response.ok || !body.ok) {
        setErrors(body.errors ?? { form: body.message ?? "Could not send." });
        setStatus("error");
        return;
      }

      setDelivery(body.delivery ?? "");
      setStatus("success");
    } catch {
      setErrors({ form: "Network error. Try again in a moment." });
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="space-y-4 border border-bid/30 bg-panel p-6 sm:p-8"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bid">
          Brief received
        </p>
        <h2 className="font-display text-3xl text-text">
          Thank you. We will reply by email.
        </h2>
        <p className="text-sm leading-6 text-muted">
          {delivery === "unconfigured"
            ? "Your details were validated. Delivery is not fully configured on this deploy yet — if you do not hear back within one business day, write again from your work inbox."
            : "A Northline reply will come from email, not a payment link asking for bank details."}
        </p>
        <p className="text-sm leading-6 text-muted">{paymentNote}</p>
        {contactLine}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="border border-gold/25 bg-gold/8 px-4 py-3 text-sm leading-6 text-text">
        {paymentNote}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name} htmlFor="name">
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            maxLength={80}
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            className={fieldClass}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </Field>
        <Field label="Email" error={errors.email} htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={120}
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            className={fieldClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>
      </div>

      <Field label="Company" error={errors.company} htmlFor="company">
        <input
          id="company"
          name="company"
          autoComplete="organization"
          required
          maxLength={120}
          value={values.company}
          onChange={(event) => update("company", event.target.value)}
          className={fieldClass}
          aria-invalid={Boolean(errors.company)}
          aria-describedby={errors.company ? "company-error" : undefined}
        />
      </Field>

      <Field
        label="Package interest"
        error={errors.packageInterest}
        htmlFor="packageInterest"
      >
        <select
          id="packageInterest"
          name="packageInterest"
          required
          value={values.packageInterest}
          onChange={(event) =>
            update("packageInterest", event.target.value as PackageSlug)
          }
          className={cn(fieldClass, "appearance-none")}
          aria-invalid={Boolean(errors.packageInterest)}
          aria-describedby={
            errors.packageInterest ? "packageInterest-error" : undefined
          }
        >
          {packageInterestOptions.map((option) => (
            <option key={option.slug} value={option.slug}>
              {option.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message" error={errors.message} htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={6}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          className={cn(fieldClass, "resize-y")}
          placeholder="Launch date, category, and what has to be true in two weeks."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
      </Field>

      <div className="hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => update("website", event.target.value)}
        />
      </div>

      {errors.form ? (
        <p role="alert" className="text-sm text-ask">
          {errors.form}
        </p>
      ) : null}

      <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Sending…" : "Send brief"}
      </Button>

      <p className="text-xs leading-5 text-muted">
        Do not include bank account numbers, card details, or OTPs in this form.
      </p>
      {contactLine}
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="block text-sm text-text">
        {label}
      </label>
      <div
        className={cn(
          error &&
            "[&_input]:border-ask [&_select]:border-ask [&_textarea]:border-ask",
        )}
      >
        {children}
      </div>
      {error ? (
        <p id={`${htmlFor}-error`} role="alert" className="text-sm text-ask">
          {error}
        </p>
      ) : null}
    </div>
  );
}
