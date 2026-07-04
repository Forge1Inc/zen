import { ClipboardCheck, Handshake, Users, type LucideIcon } from "lucide-react";
import { WHY_US } from "@/lib/content";
import { SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";

const ICONS: LucideIcon[] = [Handshake, ClipboardCheck, Users];

export default function WhyUs() {
  return (
    <section className="bg-raked bg-pine py-24 text-stone sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="The difference"
            title="Why homeowners pick us."
            tone="dark"
          />
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {WHY_US.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={item.title} delay={i * 90}>
                <div className="text-center md:text-left">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-sage/50 text-sage-mist">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-medium text-mist">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-stone/75">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
