import Link from "next/link";
import { TOWNS } from "@/lib/content";
import { SITE } from "@/lib/site";
import Reveal from "@/components/Reveal";

/* Abstract region graphic instead of a live map. No map API, loads instantly. */
function AreaGraphic() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-sand/80 bg-stone shadow-card">
      <svg
        viewBox="0 0 480 360"
        role="img"
        aria-label="Stylized map of the Greater Toronto Area and Southern Ontario"
        className="block h-auto w-full"
      >
        <rect width="480" height="360" fill="transparent" />
        {/* contour lines */}
        <g stroke="#d8d2c4" strokeWidth="1.3" fill="none" opacity="0.8">
          <path d="M-20 70 C 120 40, 260 90, 500 55" />
          <path d="M-20 130 C 140 100, 280 150, 500 115" />
          <path d="M-20 190 C 150 160, 300 210, 500 175" />
          <path d="M-20 250 C 160 220, 320 265, 500 235" />
        </g>
        {/* lake */}
        <path
          d="M 210 360 C 250 300, 330 268, 420 262 C 470 259, 490 268, 500 275 L 500 360 Z"
          fill="#5b7280"
          opacity="0.18"
        />
        <path
          d="M 210 360 C 250 300, 330 268, 420 262 C 470 259, 490 268, 500 275"
          stroke="#5b7280"
          strokeWidth="1.6"
          fill="none"
          opacity="0.45"
        />
        {/* halo around the core service area */}
        <circle cx="300" cy="200" r="52" fill="none" stroke="#84937a" strokeWidth="1.2" opacity="0.5" />
        <circle cx="300" cy="200" r="86" fill="none" stroke="#84937a" strokeWidth="1" opacity="0.28" />
        <circle cx="300" cy="200" r="122" fill="none" stroke="#84937a" strokeWidth="1" opacity="0.14" />
        {/* town markers */}
        <g fill="#2c3a2e">
          <circle cx="300" cy="200" r="5.5" />
          <circle cx="238" cy="222" r="3.6" opacity="0.75" />
          <circle cx="206" cy="176" r="3.6" opacity="0.75" />
          <circle cx="252" cy="140" r="3.6" opacity="0.75" />
          <circle cx="312" cy="146" r="3.6" opacity="0.75" />
          <circle cx="172" cy="252" r="3.6" opacity="0.75" />
          <circle cx="120" cy="286" r="3.6" opacity="0.75" />
          <circle cx="84" cy="322" r="3.6" opacity="0.75" />
        </g>
        <text
          x="316"
          y="204"
          fontSize="12.5"
          fill="#2c3a2e"
          fontFamily="var(--font-instrument), sans-serif"
          fontWeight="600"
          letterSpacing="0.08em"
        >
          TORONTO
        </text>
      </svg>
      <p className="absolute bottom-4 left-5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-ink/50">
        {SITE.serviceArea}
      </p>
    </div>
  );
}

export default function ServiceArea() {
  return (
    <section id="area" className="scroll-mt-20 bg-mist py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <AreaGraphic />
        </Reveal>
        <Reveal>
          <div>
            <p className="eyebrow text-sage">Where we work</p>
            <h2 className="mt-4 font-display text-3xl font-normal leading-[1.15] tracking-tight text-pine sm:text-4xl">
              Serving the {SITE.serviceArea}.
            </h2>
            {/* Example towns. Edit lib/content.ts to the real coverage list. */}
            <ul className="mt-8 grid grid-cols-2 gap-2.5">
              {TOWNS.map((town) => (
                <li
                  key={town}
                  className="rounded-full border border-sand bg-stone px-4 py-2.5 text-center text-sm text-ink/80"
                >
                  {town}
                </li>
              ))}
            </ul>
            <p className="mt-7 text-[0.95rem] leading-relaxed text-ink/65">
              Not sure if you&rsquo;re in our area?{" "}
              <Link
                href="/#quote"
                className="font-semibold text-water underline decoration-water/40 underline-offset-4 transition hover:decoration-water"
              >
                Ask. We&rsquo;ll tell you.
              </Link>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
