"use client";

import { useRef, useState, type FormEvent } from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { SITE } from "@/lib/site";
import {
  BUDGET_OPTIONS,
  SERVICE_OPTIONS,
  TIMELINE_OPTIONS,
} from "@/lib/content";
import { submitLead, type LeadPayload } from "@/lib/leads";

const LABEL = "block text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-ink/70";
const FIELD =
  "mt-2 block w-full rounded-lg border bg-white/80 px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink/35 transition focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/30";

type Status = "idle" | "sending" | "success" | "error";

function Req() {
  return (
    <span className="ml-1 text-sage" aria-hidden="true">
      *
    </span>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-[0.8rem] font-medium text-alert">
      {message}
    </p>
  );
}

/*
 * Shared intake form. `extended` adds the qualification fields used on the
 * /estimate page. Submissions go through submitLead (Netlify Forms).
 */
export default function QuoteForm({
  formName,
  source,
  extended = false,
}: {
  formName: string;
  source: string;
  extended?: boolean;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: LeadPayload) {
    const found: Record<string, string> = {};
    if (!data.name?.trim()) found.name = "Please tell us your name.";
    if (!/^[\d\s()+.-]{7,20}$/.test(data.phone ?? "")) {
      found.phone = "Please enter a valid phone number.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email ?? "")) {
      found.email = "Please enter a valid email address.";
    }
    if (!data.address?.trim()) {
      found.address = "Please add your address or city.";
    }
    if (!data.service) found.service = "Please pick the closest match.";
    return found;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = new FormData(form);
    const data: LeadPayload = {};
    raw.forEach((value, key) => {
      if (typeof value === "string") data[key] = value;
    });
    data.page = source;

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const firstInvalid = form.querySelector<HTMLElement>(
        "[aria-invalid='true'], input[name='" +
          Object.keys(found)[0] +
          "'], select[name='" +
          Object.keys(found)[0] +
          "']"
      );
      firstInvalid?.focus();
      return;
    }

    setStatus("sending");
    console.log("Lead payload", data);
    const ok = await submitLead(formName, data);
    if (ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex h-full flex-col items-center justify-center rounded-2xl border border-sand/80 bg-mist px-8 py-16 text-center shadow-card"
        role="status"
      >
        <CheckCircle2 className="h-12 w-12 text-sage" aria-hidden="true" />
        <h3 className="mt-6 font-display text-2xl font-normal text-pine">
          Thanks. We&rsquo;ve got your request.
        </h3>
        <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-ink/70">
          We&rsquo;ll reach out to book your free walkthrough. If it&rsquo;s
          urgent, call us at{" "}
          <a href={SITE.phoneHref} className="font-semibold text-pine">
            {SITE.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 rounded-full border border-pine/30 px-6 py-3 text-sm font-semibold text-pine transition hover:border-pine/60 hover:bg-pine/5"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      name={formName}
      method="POST"
      action="/__forms.html"
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-sand/80 bg-mist p-6 shadow-card sm:p-8"
    >
      <input type="hidden" name="form-name" value={formName} />
      <p className="hidden">
        <label>
          Leave this field empty:{" "}
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      {status === "error" ? (
        <div
          role="alert"
          className="mb-6 rounded-lg border border-alert/30 bg-alert/5 p-4 text-sm leading-relaxed text-ink/80"
        >
          Something went wrong sending your request. Please call{" "}
          <a href={SITE.phoneHref} className="font-semibold text-pine">
            {SITE.phone}
          </a>{" "}
          or email{" "}
          <a href={SITE.emailHref} className="font-semibold text-pine">
            {SITE.email}
          </a>{" "}
          and we&rsquo;ll take care of you.
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor={`${source}-name`} className={LABEL}>
            Full name
            <Req />
          </label>
          <input
            id={`${source}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? `${source}-name-error` : undefined}
            className={`${FIELD} ${errors.name ? "border-alert" : "border-sand"}`}
          />
          <FieldError id={`${source}-name-error`} message={errors.name} />
        </div>

        <div>
          <label htmlFor={`${source}-phone`} className={LABEL}>
            Phone
            <Req />
          </label>
          <input
            id={`${source}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? `${source}-phone-error` : undefined}
            className={`${FIELD} ${errors.phone ? "border-alert" : "border-sand"}`}
          />
          <FieldError id={`${source}-phone-error`} message={errors.phone} />
        </div>

        <div>
          <label htmlFor={`${source}-email`} className={LABEL}>
            Email
            <Req />
          </label>
          <input
            id={`${source}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? `${source}-email-error` : undefined}
            className={`${FIELD} ${errors.email ? "border-alert" : "border-sand"}`}
          />
          <FieldError id={`${source}-email-error`} message={errors.email} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${source}-address`} className={LABEL}>
            Property address or city
            <Req />
          </label>
          <input
            id={`${source}-address`}
            name="address"
            type="text"
            autoComplete="street-address"
            required
            aria-invalid={errors.address ? true : undefined}
            aria-describedby={
              errors.address ? `${source}-address-error` : undefined
            }
            className={`${FIELD} ${errors.address ? "border-alert" : "border-sand"}`}
          />
          <FieldError id={`${source}-address-error`} message={errors.address} />
        </div>

        <div className={extended ? "" : "sm:col-span-2"}>
          <label htmlFor={`${source}-service`} className={LABEL}>
            Service needed
            <Req />
          </label>
          <div className="relative">
            <select
              id={`${source}-service`}
              name="service"
              required
              defaultValue=""
              aria-invalid={errors.service ? true : undefined}
              aria-describedby={
                errors.service ? `${source}-service-error` : undefined
              }
              className={`${FIELD} appearance-none pr-10 ${
                errors.service ? "border-alert" : "border-sand"
              }`}
            >
              <option value="" disabled>
                Choose one
              </option>
              {SERVICE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/45"
              aria-hidden="true"
            />
          </div>
          <FieldError id={`${source}-service-error`} message={errors.service} />
        </div>

        {extended ? (
          <>
            <div>
              <label htmlFor={`${source}-property`} className={LABEL}>
                Property type
              </label>
              <div className="relative">
                <select
                  id={`${source}-property`}
                  name="property-type"
                  defaultValue="House"
                  className={`${FIELD} appearance-none border-sand pr-10`}
                >
                  {["House", "Townhouse", "Condo or building", "Commercial"].map(
                    (option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    )
                  )}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/45"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div>
              <label htmlFor={`${source}-budget`} className={LABEL}>
                Rough budget
              </label>
              <div className="relative">
                <select
                  id={`${source}-budget`}
                  name="budget"
                  defaultValue="Not sure yet"
                  className={`${FIELD} appearance-none border-sand pr-10`}
                >
                  {BUDGET_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/45"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div>
              <label htmlFor={`${source}-timeline`} className={LABEL}>
                Timeline
              </label>
              <div className="relative">
                <select
                  id={`${source}-timeline`}
                  name="timeline"
                  defaultValue="This season"
                  className={`${FIELD} appearance-none border-sand pr-10`}
                >
                  {TIMELINE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/45"
                  aria-hidden="true"
                />
              </div>
            </div>
          </>
        ) : null}

        <div className="sm:col-span-2">
          <label htmlFor={`${source}-details`} className={LABEL}>
            Project details
          </label>
          <textarea
            id={`${source}-details`}
            name="details"
            rows={4}
            placeholder="What are you hoping to do? Rough size, timeline, anything specific."
            className={`${FIELD} border-sand resize-y`}
          />
        </div>

        <fieldset className="sm:col-span-2">
          <legend className={LABEL}>Preferred contact</legend>
          <div className="mt-2.5 flex flex-wrap gap-2.5">
            {["Phone", "Email", "Either"].map((option) => (
              <label
                key={option}
                className="cursor-pointer rounded-full border border-sand bg-white/60 px-5 py-2.5 text-sm font-medium text-ink/75 transition focus-within:ring-2 focus-within:ring-sage/40 has-[:checked]:border-pine has-[:checked]:bg-pine has-[:checked]:text-mist"
              >
                <input
                  type="radio"
                  name="contact-preference"
                  value={option}
                  defaultChecked={option === "Either"}
                  className="sr-only"
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-8 w-full rounded-full bg-pine py-4 text-sm font-semibold tracking-wide text-mist transition duration-300 hover:bg-pine-deep disabled:cursor-wait disabled:opacity-60"
      >
        {status === "sending" ? "Sending your request" : "Request My Free Estimate"}
      </button>
      <p className="mt-4 text-center text-xs leading-relaxed text-ink/50">
        We only use your info to reach you about your estimate.
      </p>
    </form>
  );
}
