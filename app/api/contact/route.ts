import { NextResponse } from "next/server";

import { contactSchema } from "@/lib/validations/contact";

/**
 * Contact endpoint.
 *
 * Delivery is intentionally pluggable: set CONTACT_WEBHOOK_URL to forward
 * enquiries to a CRM, automation platform or email service. Without it,
 * submissions are validated and logged so nothing is silently lost during
 * development. Secrets stay server-side only.
 */

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const hits = new Map<string, { count: number; first: number }>();

function rateLimited(key: string) {
  const now = Date.now();
  const record = hits.get(key);

  if (!record || now - record.first > RATE_LIMIT_WINDOW_MS) {
    hits.set(key, { count: 1, first: now });
    return false;
  }

  record.count += 1;
  return record.count > RATE_LIMIT_MAX;
}

export async function POST(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, message: "Too many enquiries from this connection. Please email us directly." },
      { status: 429 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "We couldn't read that submission." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path.join(".") || "form";
      fieldErrors[key] ??= issue.message;
    }
    return NextResponse.json(
      { ok: false, message: "Please check the highlighted fields.", fieldErrors },
      { status: 422 },
    );
  }

  const data = parsed.data;

  // Honeypot: real people never fill a hidden "company website" field.
  if (data.company_website) {
    return NextResponse.json({ ok: true, message: "Received." });
  }

  const enquiry = {
    submittedAt: new Date().toISOString(),
    name: data.name,
    company: data.company || null,
    email: data.email,
    phone: data.phone,
    website: data.website || null,
    services: data.services,
    budget: data.budget,
    message: data.message,
  };

  const webhook = process.env.CONTACT_WEBHOOK_URL;

  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.CONTACT_WEBHOOK_TOKEN
            ? { Authorization: `Bearer ${process.env.CONTACT_WEBHOOK_TOKEN}` }
            : {}),
        },
        body: JSON.stringify(enquiry),
      });

      if (!response.ok) {
        console.error("[contact] webhook rejected the enquiry", response.status);
        return NextResponse.json(
          { ok: false, message: "Something went wrong on our side. Please email us instead." },
          { status: 502 },
        );
      }
    } catch (error) {
      console.error("[contact] webhook failed", error);
      return NextResponse.json(
        { ok: false, message: "Something went wrong on our side. Please email us instead." },
        { status: 502 },
      );
    }
  } else {
    // Development fallback — no provider configured yet.
    console.info("[contact] enquiry received (no CONTACT_WEBHOOK_URL set)", enquiry);
  }

  return NextResponse.json({
    ok: true,
    message: "Message received. We'll be in touch within one working day.",
  });
}
