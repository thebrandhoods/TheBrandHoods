"use client";

import { useState } from "react";

import { ArrowRight, Check } from "@/components/ui/Icons";
import { budgetOptions, serviceOptions } from "@/lib/validations/contact";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClasses =
  "w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-bone placeholder:text-bone/35 transition-colors focus:border-accent focus:outline-none aria-[invalid=true]:border-accent";

const labelClasses =
  "text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-bone/45";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [services, setServices] = useState<string[]>([]);

  function toggleService(service: string) {
    setServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service],
    );
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setStatus("error");
      setMessage("Please check the highlighted fields.");
      form.reportValidity();
      return;
    }

    setStatus("submitting");
    setMessage("");
    setFieldErrors({});

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      company: String(formData.get("company") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      website: String(formData.get("website") ?? ""),
      budget: String(formData.get("budget") ?? "Not sure yet"),
      message: String(formData.get("message") ?? ""),
      services,
      company_website: String(formData.get("company_website") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as {
        ok: boolean;
        message?: string;
        fieldErrors?: Record<string, string>;
      };

      if (!response.ok || !data.ok) {
        setStatus("error");
        setFieldErrors(data.fieldErrors ?? {});
        setMessage(data.message ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(data.message ?? "Message received. We'll be in touch.");
      setServices([]);
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again, or email us directly.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col gap-5 rounded-2xl border border-white/12 bg-white/5 p-8"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white">
          <Check className="h-5 w-5" />
        </span>
        <h2 className="display text-display-sm">Message received.</h2>
        <p className="max-w-[46ch] text-sm leading-relaxed text-bone/65">{message}</p>
        <p className="text-xs text-bone/45">
          If it&apos;s urgent, WhatsApp is the fastest way to reach the studio.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setMessage("");
          }}
          className="link-underline w-fit text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-bone/70"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate={false}
      className="flex flex-col gap-7"
      aria-describedby="contact-form-status"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelClasses}>
            Name *
          </label>
          <input
            id="name"
            name="name"
            required
            minLength={2}
            autoComplete="name"
            aria-invalid={Boolean(fieldErrors.name)}
            className={fieldClasses}
            placeholder="Your name"
          />
          {fieldErrors.name ? (
            <span className="text-xs text-accent-2">{fieldErrors.name}</span>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="company" className={labelClasses}>
            Company
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            className={fieldClasses}
            placeholder="Business name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={labelClasses}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={Boolean(fieldErrors.email)}
            className={fieldClasses}
            placeholder="you@company.com"
          />
          {fieldErrors.email ? (
            <span className="text-xs text-accent-2">{fieldErrors.email}</span>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className={labelClasses}>
            Phone / WhatsApp *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            aria-invalid={Boolean(fieldErrors.phone)}
            className={fieldClasses}
            placeholder="+91 00000 00000"
          />
          {fieldErrors.phone ? (
            <span className="text-xs text-accent-2">{fieldErrors.phone}</span>
          ) : null}
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="website" className={labelClasses}>
            Website
          </label>
          <input
            id="website"
            name="website"
            autoComplete="url"
            className={fieldClasses}
            placeholder="yourbusiness.com"
          />
        </div>
      </div>

      <fieldset className="flex flex-col gap-3">
        <legend className={labelClasses}>What do you need help with?</legend>
        <div className="flex flex-wrap gap-2">
          {serviceOptions.map((service) => {
            const selected = services.includes(service);
            return (
              <button
                key={service}
                type="button"
                onClick={() => toggleService(service)}
                aria-pressed={selected}
                className={cn(
                  "rounded-full border px-4 py-2 text-[0.68rem] font-medium tracking-wide transition-colors duration-300",
                  selected
                    ? "border-accent bg-accent text-white"
                    : "border-white/15 text-bone/60 hover:border-white/40 hover:text-bone",
                )}
              >
                {service}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="flex flex-col gap-2">
        <label htmlFor="budget" className={labelClasses}>
          Approximate budget
        </label>
        <select id="budget" name="budget" defaultValue="Not sure yet" className={fieldClasses}>
          {budgetOptions.map((option) => (
            <option key={option} value={option} className="bg-ink text-bone">
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClasses}>
          What are you trying to change? *
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={20}
          rows={5}
          aria-invalid={Boolean(fieldErrors.message)}
          className={cn(fieldClasses, "resize-y")}
          placeholder="The business, the problem, and what a good outcome looks like."
        />
        {fieldErrors.message ? (
          <span className="text-xs text-accent-2">{fieldErrors.message}</span>
        ) : null}
      </div>

      {/* Honeypot — hidden from people, tempting for bots. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-5">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn btn-primary group disabled:cursor-not-allowed disabled:opacity-70"
        >
          <span>{status === "submitting" ? "Sending…" : "Send Enquiry"}</span>
          <ArrowRight className="arrow-slide h-3.5 w-3.5" />
        </button>
        <p className="text-xs leading-relaxed text-bone/45">
          No newsletters, no sequences. One reply from a person.
        </p>
      </div>

      <p
        id="contact-form-status"
        role={status === "error" ? "alert" : "status"}
        aria-live="polite"
        className={cn(
          "text-sm",
          status === "error" ? "text-accent-2" : "text-bone/60",
        )}
      >
        {message}
      </p>
    </form>
  );
}
