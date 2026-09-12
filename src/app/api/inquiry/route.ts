import {
  formatInquiryText,
  parseInquiry,
  type InquiryInput,
} from "@/lib/inquiry";

export const runtime = "nodejs";

type Delivery = "webhook" | "email" | "unconfigured";

export async function POST(request: Request) {
  let body: InquiryInput;

  try {
    body = (await request.json()) as InquiryInput;
  } catch {
    return Response.json(
      { ok: false, message: "Send a JSON body." },
      { status: 400 },
    );
  }

  const parsed = parseInquiry(body);
  if (!parsed.ok) {
    return Response.json({ ok: false, errors: parsed.errors }, { status: 400 });
  }

  const text = formatInquiryText(parsed.data);
  const webhook = process.env.INQUIRY_WEBHOOK_URL;
  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;

  try {
    if (webhook) {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "northline-site",
          ...parsed.data,
          text,
        }),
      });
      if (!response.ok) {
        throw new Error(`Webhook failed: ${response.status}`);
      }
      return Response.json({ ok: true, delivery: "webhook" satisfies Delivery });
    }

    if (resendKey && to && from) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: parsed.data.email,
          subject: `Northline inquiry — ${parsed.data.packageInterest} — ${parsed.data.company}`,
          text,
        }),
      });
      if (!response.ok) {
        throw new Error(`Email failed: ${response.status}`);
      }
      return Response.json({ ok: true, delivery: "email" satisfies Delivery });
    }
  } catch {
    return Response.json(
      {
        ok: false,
        errors: {
          form: "We could not deliver that just now. Try again, or write from your work inbox.",
        },
      },
      { status: 502 },
    );
  }

  return Response.json({
    ok: true,
    delivery: "unconfigured" satisfies Delivery,
  });
}
