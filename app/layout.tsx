import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import { SITE } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Zen Gardens & Landscaping, GTA`,
    template: `%s | ${SITE.name}`,
  },
  description: `Zen gardens, landscape design and build, garden care, and home services across the ${SITE.serviceArea}. Planned with you on a free walkthrough, then built with detail and care.`,
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: SITE.name,
    title: `${SITE.name} | Zen Gardens & Landscaping, GTA`,
    description: `Zen and modern landscapes, garden care, and home services across the ${SITE.serviceArea}. Free on-site consultations.`,
  },
  twitter: {
    card: "summary_large_image",
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: SITE.name,
  url: SITE.url,
  telephone: "+1-647-782-8019",
  email: SITE.email,
  image: `${SITE.url}/images/logo.png`,
  logo: `${SITE.url}/images/logo.png`,
  sameAs: [SITE.instagram],
  areaServed: ["Greater Toronto Area", "Southern Ontario"],
  description: `Zen gardens, landscape design and build, garden and lawn care, hardscaping, seasonal cleanups, and home services across the ${SITE.serviceArea}.`,
  slogan: SITE.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      className={`${fraunces.variable} ${instrumentSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
