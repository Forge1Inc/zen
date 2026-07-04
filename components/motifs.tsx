/*
 * Brand motifs, all inline SVG so they inherit currentColor and cost nothing.
 * Ensō appears once on the page (hero CTA frame), the raked divider separates
 * major sections, and the stacked stones sit quietly in the footer.
 */

export function Enso({
  className,
  strokeWidth = 5,
  draw = false,
}: {
  className?: string;
  strokeWidth?: number;
  draw?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <g transform="rotate(-8 100 100)">
        <path
          d="M 151.6 26.3 A 90 90 0 1 1 184.6 69.2"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          className={draw ? "enso-draw" : undefined}
        />
        <path
          d="M 148.9 31.9 A 84 84 0 1 1 179.8 71.9"
          stroke="currentColor"
          strokeWidth={strokeWidth * 0.35}
          strokeLinecap="round"
          opacity={0.4}
        />
      </g>
    </svg>
  );
}

export function RakedDivider({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={className ?? "text-sand"}>
      <svg
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        fill="none"
        className="block h-14 w-full sm:h-16"
      >
        <path
          d="M0 22 C 240 16, 480 28, 720 22 S 1200 16, 1440 24"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.55"
        />
        <path
          d="M0 36 C 260 30, 500 42, 740 36 C 830 34, 850 26, 900 26 C 950 26, 970 35, 1060 36 S 1300 32, 1440 38"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.4"
        />
        <path
          d="M0 50 C 250 44, 520 56, 760 50 C 840 48, 858 40, 902 40 C 946 40, 968 49, 1050 50 S 1290 46, 1440 52"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.3"
        />
        <path
          d="M0 64 C 240 58, 480 70, 720 64 S 1200 58, 1440 66"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.18"
        />
        <g opacity="0.7">
          <ellipse cx="898" cy="33" rx="13" ry="8" fill="currentColor" opacity="0.5" />
          <ellipse cx="914" cy="38" rx="8" ry="5" fill="currentColor" opacity="0.35" />
        </g>
      </svg>
    </div>
  );
}

/* Lucide dropped brand icons, so the Instagram glyph lives here. */
export function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function StackedStones({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <ellipse cx="32" cy="52" rx="24" ry="9" fill="currentColor" opacity="0.9" />
      <ellipse cx="31" cy="37" rx="17" ry="7.5" fill="currentColor" opacity="0.65" />
      <ellipse cx="33" cy="25" rx="11" ry="6" fill="currentColor" opacity="0.45" />
      <ellipse cx="32" cy="15" rx="6.5" ry="4.5" fill="currentColor" opacity="0.3" />
    </svg>
  );
}
