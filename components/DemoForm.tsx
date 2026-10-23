"use client";

import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import { Placeholder } from "./Placeholder";

const tools = ["PostHog", "Snowflake", "Stripe", "Salesforce", "HubSpot", "Customer.io", "Shopify", "Other"];
const sizes = ["under 1,000", "1,000 to 10,000", "10,000 to 100,000", "over 100,000"];
const goals = ["Activation", "Expansion", "Retention", "All of it"];
const freeDomains = ["gmail.com", "googlemail.com", "yahoo.com", "hotmail.com", "outlook.com", "live.com", "icloud.com", "proton.me", "protonmail.com", "aol.com"];

const inputClass = "mt-1 min-h-11 w-full rounded-lg border border-[#8c8c8c] bg-wf-bg px-3 py-2";

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");
  const bookingRef = useRef<HTMLHeadingElement>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = String(new FormData(form).get("email") ?? "");
    const domain = email.split("@")[1]?.toLowerCase() ?? "";
    if (freeDomains.includes(domain)) {
      setEmailError("Please use your work email so we can prepare for your call.");
      form.querySelector<HTMLInputElement>("#email")?.focus();
      return;
    }
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setEmailError("");
    setSubmitted(true);
    setTimeout(() => bookingRef.current?.focus(), 0);
  }

  if (submitted) {
    return (
      <div>
        <p className="rounded-lg bg-wf-fill p-4 font-medium" role="status">
          Got it. We&apos;ll be in touch within one working day.
        </p>
        <h2 ref={bookingRef} tabIndex={-1} className="mt-8 text-[26px] outline-none sm:text-[32px]">
          Great. Pick a time that works.
        </h2>
        <Placeholder className="mt-6" ratio="aspect-[4/3]" label="Calendly inline, 30 minute slot" />
        <Link href="/thanks/" className="mt-4 inline-block font-mono text-xs underline underline-offset-4">
          [Wireframe: simulate a booked slot]
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" aria-label="Book a demo">
      <div>
        <label htmlFor="name" className="font-medium">Your name</label>
        <input id="name" name="name" required autoComplete="name" className={inputClass} />
      </div>
      <div>
        <label htmlFor="email" className="font-medium">Work email</label>
        <p id="email-help" className="text-sm text-wf-muted">So we can prepare for your call</p>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-describedby={emailError ? "email-help email-error" : "email-help"}
          aria-invalid={emailError ? true : undefined}
          className={inputClass}
        />
        {emailError ? (
          <p id="email-error" className="mt-1 text-sm font-medium" role="alert">
            {emailError}
          </p>
        ) : null}
      </div>
      <div>
        <label htmlFor="company" className="font-medium">Company</label>
        <input id="company" name="company" required autoComplete="organization" className={inputClass} />
      </div>
      <div>
        <label htmlFor="website" className="font-medium">Company website</label>
        <p id="website-help" className="text-sm text-wf-muted">We&apos;ll look at your product before we meet</p>
        <input id="website" name="website" type="text" inputMode="url" aria-describedby="website-help" className={inputClass} />
      </div>
      <fieldset>
        <legend className="font-medium">What do you use today?</legend>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {tools.map((t) => (
            <label key={t} className="flex min-h-11 items-center gap-2 rounded-lg border border-wf-box px-3">
              <input type="checkbox" name="tools" value={t} className="h-4 w-4" />
              <span className="text-sm">{t}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div>
        <label htmlFor="size" className="font-medium">Active customers per month</label>
        <select id="size" name="size" className={inputClass} defaultValue="">
          <option value="" disabled>
            Choose a range
          </option>
          {sizes.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <fieldset>
        <legend className="font-medium">What matters most right now?</legend>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {goals.map((g) => (
            <label key={g} className="flex min-h-11 items-center gap-2 rounded-lg border border-wf-box px-3">
              <input type="radio" name="goal" value={g} className="h-4 w-4" />
              <span className="text-sm">{g}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <button
        type="submit"
        className="min-h-11 w-full rounded-lg bg-accent px-5 py-3 font-medium text-white hover:bg-accent-dark sm:w-auto"
      >
        Pick a time
      </button>
    </form>
  );
}
