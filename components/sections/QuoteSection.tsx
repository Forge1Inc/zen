import { CheckCircle2, Mail, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";

const PROMISES = [
  "Free, no-obligation on-site walkthrough.",
  "A clear plan and upfront price.",
  "We usually reply within one business day.",
];

export default function QuoteSection() {
  return (
    <section id="quote" className="scroll-mt-20 bg-stone py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <Reveal>
          <div className="lg:pt-6">
            <p className="eyebrow text-sage">Free estimate</p>
            <h2 className="mt-4 font-display text-3xl font-normal leading-[1.15] tracking-tight text-pine sm:text-4xl lg:text-[2.75rem]">
              Tell us about your project.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink/70 sm:text-lg">
              Share what you&rsquo;re hoping for. We&rsquo;ll walk the property
              with you and put a real plan behind it.
            </p>

            <ul className="mt-9 space-y-4">
              {PROMISES.map((promise) => (
                <li key={promise} className="flex items-start gap-3.5">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-sage"
                    aria-hidden="true"
                  />
                  <span className="text-[0.95rem] leading-relaxed text-ink/80">
                    {promise}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-12 border-t border-sand/80 pt-8">
              <p className="eyebrow text-ink/50">Prefer to talk?</p>
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
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <QuoteForm formName="estimate-lead" source="home-quote" />
        </Reveal>
      </div>
    </section>
  );
}
