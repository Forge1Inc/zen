import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Mail, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { InstagramGlyph } from "@/components/motifs";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Get a Free Estimate",
  description: `Request a free on-site walkthrough and estimate for zen gardens, landscaping, garden care, hardscaping, or home services in the ${SITE.serviceArea}.`,
  alternates: { canonical: "/estimate" },
};

const NEXT_STEPS = [
  {
    number: "01",
    text: "We call or email you back, usually within one business day.",
  },
  {
    number: "02",
    text: "We book a free walkthrough and look at the property together.",
  },
  {
    number: "03",
    text: "You get a clear, organized plan with an upfront price.",
  },
];

export default function EstimatePage() {
  return (
    <main className="bg-stone">
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-8 sm:pt-36">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <p className="eyebrow text-sage">Free estimate</p>
            <h1 className="mt-4 font-display text-4xl font-light leading-[1.08] tracking-tight text-pine sm:text-5xl">
              Tell us about your project.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
              A few details are all we need to get started. No obligation, no
              pressure, and your info stays with us.
            </p>

            <div className="mt-10">
              <p className="eyebrow text-ink/50">What happens next</p>
              <ol className="mt-5 space-y-5">
                {NEXT_STEPS.map((step) => (
                  <li key={step.number} className="flex items-start gap-4">
                    <span className="font-display text-2xl font-light leading-none text-sage">
                      {step.number}
                    </span>
                    <span className="pt-0.5 text-[0.95rem] leading-relaxed text-ink/80">
                      {step.text}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <ul className="mt-10 space-y-3.5 border-t border-sand/80 pt-8">
              {[
                "Free, no-obligation on-site walkthrough.",
                `${SITE.yearsInBusiness} years serving Ontario homeowners.`,
                "One crew for gardens, hardscape, and home services.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3.5">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-sage"
                    aria-hidden="true"
                  />
                  <span className="text-[0.95rem] leading-relaxed text-ink/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-sand/80 bg-mist p-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/logo.png"
                  alt=""
                  aria-hidden="true"
                  width={64}
                  height={64}
                  className="h-14 w-14 object-contain mix-blend-multiply"
                />
                <p className="eyebrow text-ink/50">Reach us directly</p>
              </div>
              <div className="mt-4 space-y-3 text-[0.95rem]">
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-3 font-semibold text-pine transition hover:text-sage"
                >
                  <Phone className="h-4 w-4 text-sage" aria-hidden="true" />
                  {SITE.phone}
                </a>
                <a
                  href={SITE.emailHref}
                  className="flex items-center gap-3 break-all text-ink/75 transition hover:text-pine"
                >
                  <Mail className="h-4 w-4 shrink-0 text-sage" aria-hidden="true" />
                  {SITE.email}
                </a>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-ink/75 transition hover:text-pine"
                >
                  <InstagramGlyph className="h-4 w-4 text-sage" />
                  {SITE.instagramHandle}
                </a>
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.15em] text-ink/50">
                {SITE.hours}
              </p>
            </div>
          </div>

          <Reveal delay={100}>
            <QuoteForm formName="estimate-lead" source="estimate-page" extended />
          </Reveal>
        </div>
      </div>
    </main>
  );
}
