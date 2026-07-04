import Link from "next/link";
import {
  Hammer,
  Leaf,
  MoveRight,
  PencilRuler,
  Sprout,
  Waves,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { SERVICES, type ServiceKey } from "@/lib/content";
import { SectionHeading } from "@/components/ui";
import { RakedDivider } from "@/components/motifs";
import Reveal from "@/components/Reveal";

const ICONS: Record<ServiceKey, LucideIcon> = {
  zen: Waves,
  design: PencilRuler,
  maintenance: Sprout,
  hardscaping: Hammer,
  cleanup: Leaf,
  home: Wrench,
};

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-stone">
      <div className="mx-auto max-w-6xl px-5 pt-24 sm:px-8 sm:pt-32">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="Craft for every part of your property."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.key];
            const featured = Boolean(service.featured);
            return (
              <Reveal key={service.key} delay={i * 70}>
                <Link
                  href="/#quote"
                  className={`group flex h-full flex-col rounded-2xl border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lift motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
                    featured
                      ? "border-pine bg-pine text-mist hover:bg-pine-deep"
                      : "border-sand/80 bg-mist text-ink shadow-card hover:border-sage/60"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${
                        featured ? "bg-mist/10 text-sage-mist" : "bg-sage/15 text-sage"
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    {featured ? (
                      <span className="rounded-full border border-sage/50 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-sage-mist">
                        Signature
                      </span>
                    ) : null}
                  </div>
                  <h3
                    className={`mt-6 font-display text-xl font-medium ${
                      featured ? "text-mist" : "text-pine"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`mt-3 flex-1 text-[0.95rem] leading-relaxed ${
                      featured ? "text-stone/80" : "text-ink/70"
                    }`}
                  >
                    {service.description}
                  </p>
                  <span
                    className={`mt-6 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition ${
                      featured
                        ? "text-sage-mist group-hover:text-mist"
                        : "text-sage group-hover:text-pine"
                    }`}
                  >
                    Start with an estimate
                    <MoveRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
      <RakedDivider className="mt-16 text-sand sm:mt-20" />
    </section>
  );
}
