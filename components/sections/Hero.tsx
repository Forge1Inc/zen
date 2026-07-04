import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { HERO_IMAGE } from "@/lib/content";
import { Enso } from "@/components/motifs";
import { GhostLink } from "@/components/ui";

const TRUST_ITEMS = [
  "Free on-site consultation",
  `${SITE.yearsInBusiness} years serving Ontario`,
  `Serving the ${SITE.serviceArea}`,
];

export default function Hero() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden bg-pine-deep">
      {/* Placeholder image. Swap for a real project photo when available. */}
      <Image
        src={HERO_IMAGE.src}
        alt={HERO_IMAGE.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[42%_78%]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-pine-deep/90 via-ink/50 to-ink/25"
        aria-hidden="true"
      />
      {/* Top scrim so the transparent header stays legible over bright skies */}
      <div
        className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-ink/60 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-24 pt-36 sm:px-8 sm:pb-28">
        <div className="hero-seq max-w-2xl">
          <p className="eyebrow text-sage-mist">
            Landscaping &amp; Garden Care · {SITE.serviceArea}
          </p>
          <h1 className="mt-6 font-display text-[clamp(2.7rem,6.5vw,4.75rem)] font-light leading-[1.04] tracking-[0.005em] text-mist">
            A garden that finally feels like it{" "}
            <em className="font-normal not-italic sm:italic">belongs to you.</em>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-stone/85">
            Zen and modern landscapes, garden care, and home services. Planned
            with you on a walkthrough, then built with detail and care.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <span className="relative inline-flex">
              <Enso
                draw
                strokeWidth={4}
                className="pointer-events-none absolute -left-9 -top-10 hidden h-28 w-28 text-sage/60 sm:block"
              />
              <Link
                href="/#quote"
                className="relative inline-flex items-center justify-center rounded-full bg-mist px-9 py-4 text-[0.95rem] font-semibold tracking-wide text-pine transition duration-300 hover:-translate-y-0.5 hover:bg-stone hover:shadow-lift motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Get a Free Estimate
              </Link>
            </span>
            <GhostLink href="/#work" tone="dark">
              See Our Work
            </GhostLink>
          </div>

          <ul className="mt-14 flex flex-wrap items-center gap-x-4 gap-y-3">
            {TRUST_ITEMS.map((item, i) => (
              <li
                key={item}
                className="flex items-center gap-4 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-stone/70"
              >
                {i > 0 ? (
                  <span
                    className="h-1 w-1 rounded-full bg-sage/70"
                    aria-hidden="true"
                  />
                ) : null}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
