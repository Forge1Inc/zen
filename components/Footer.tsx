import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { InstagramGlyph } from "@/components/motifs";
import Year from "@/components/Year";

export default function Footer() {
  return (
    <footer className="bg-raked bg-pine-deep text-stone/80">
      <div className="mx-auto max-w-6xl px-5 pb-28 pt-16 sm:px-8 md:pb-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl font-medium text-mist">
              {SITE.wordmark}
              <span className="ml-2 text-sm font-normal text-stone/60">
                {SITE.wordmarkSub}
              </span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Landscaping, garden care and home services in the {SITE.serviceArea}.
            </p>
            <p className="mt-2 max-w-xs text-sm italic leading-relaxed text-sage-mist">
              {SITE.tagline}
            </p>
            <span className="mt-6 inline-flex rounded-2xl bg-mist p-2.5">
              <Image
                src="/images/logo.png"
                alt={`${SITE.name} logo`}
                width={88}
                height={88}
                className="h-20 w-20 object-contain"
              />
            </span>
          </div>

          <div>
            <p className="eyebrow text-sage-mist">Contact</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-2.5 transition hover:text-mist"
                >
                  <Phone className="h-4 w-4 text-sage" aria-hidden="true" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={SITE.emailHref}
                  className="inline-flex items-start gap-2.5 break-all transition hover:text-mist"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sage" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-sage" aria-hidden="true" />
                Serving the {SITE.serviceArea}
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-sage-mist">Explore</p>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-mist">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/estimate" className="transition hover:text-mist">
                  Free Estimate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-sage-mist">Hours</p>
            <p className="mt-5 text-sm leading-relaxed">{SITE.hours}</p>
            <p className="eyebrow mt-8 text-sage-mist">Follow</p>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2.5 text-sm transition hover:text-mist"
            >
              <InstagramGlyph className="h-4 w-4 text-sage" />
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-mist/10 pt-6 text-xs text-stone/55">
          <p>
            © <Year /> {SITE.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
