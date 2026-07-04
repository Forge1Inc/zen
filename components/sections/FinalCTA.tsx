import Link from "next/link";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function FinalCTA() {
  return (
    <section className="bg-raked bg-pine py-20 text-center sm:py-24">
      <Reveal>
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <p className="eyebrow text-sage-mist">Your sanctuary, your zen</p>
          <h2 className="mt-4 font-display text-3xl font-normal leading-tight text-mist sm:text-4xl">
            Ready to fix the yard?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-stone/75">
            Book a free walkthrough. We&rsquo;ll agree on the plan together
            before any work starts.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center rounded-full bg-mist px-9 py-4 text-[0.95rem] font-semibold tracking-wide text-pine transition duration-300 hover:-translate-y-0.5 hover:bg-stone hover:shadow-lift motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              Get a Free Estimate
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-mist/40 px-7 py-4 text-[0.95rem] font-semibold tracking-wide text-mist transition duration-300 hover:border-mist/70 hover:bg-mist/10"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {SITE.phone}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
