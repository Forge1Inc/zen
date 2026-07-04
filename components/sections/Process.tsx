import { PROCESS_STEPS } from "@/lib/content";
import { SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-20 bg-mist py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="No surprises. We agree on the plan first."
          />
        </Reveal>

        <div className="relative mt-16">
          {/* Connecting line, desktop only */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[1.35rem] hidden h-px bg-gradient-to-r from-transparent via-sand to-transparent md:block"
          />
          <ol className="grid gap-10 md:grid-cols-4 md:gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <li key={step.number} className="relative md:pt-0">
                <Reveal delay={i * 90}>
                  <div className="flex items-baseline gap-4 md:block">
                    <span className="relative z-10 inline-block bg-mist pr-3 font-display text-[2.6rem] font-light leading-none text-sage">
                      {step.number}
                    </span>
                    <h3 className="font-display text-xl font-medium text-pine md:mt-5">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/70">
                    {step.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
