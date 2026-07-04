import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";
import { SectionHeading } from "@/components/ui";
import { RakedDivider } from "@/components/motifs";
import Reveal from "@/components/Reveal";

/*
 * PLACEHOLDER SECTION. The quotes in lib/content.ts are generic placeholders,
 * attributed to towns rather than invented people, and labelled as pending
 * below. Replace with real reviews before promoting the site.
 */
export default function Testimonials() {
  return (
    <section className="bg-stone">
      <div className="mx-auto max-w-6xl px-5 pt-24 sm:px-8 sm:pt-32">
        <Reveal>
          <SectionHeading eyebrow="In their words" title="What clients say." />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-2xl border border-sand/80 bg-mist p-7 shadow-card">
                <div
                  className="flex gap-1 text-sage"
                  role="img"
                  aria-label="Five star review"
                >
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-display text-lg font-normal leading-snug text-pine">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink/60">
                  {t.name}
                  <span className="ml-2 font-normal normal-case tracking-normal text-ink/45">
                    {t.source}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-ink/45">
          Sample reviews shown while we gather client permission to publish
          their words.
        </p>
      </div>
      <RakedDivider className="mt-14 text-sand sm:mt-16" />
    </section>
  );
}
