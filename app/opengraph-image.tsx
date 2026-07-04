import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name}. Zen gardens and landscaping in the GTA and Southern Ontario.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#222d24",
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(216,210,196,0.06) 0px, rgba(216,210,196,0.06) 1px, transparent 1px, transparent 26px)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 70,
            top: 130,
            width: 340,
            height: 340,
            border: "10px solid rgba(132,147,122,0.55)",
            borderRadius: "50%",
            borderTopColor: "transparent",
            transform: "rotate(45deg)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            color: "#a9b59e",
            textTransform: "uppercase",
          }}
        >
          Landscaping &amp; Garden Care · {SITE.serviceArea}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 30,
            fontSize: 84,
            lineHeight: 1.05,
            color: "#f4f6f0",
            maxWidth: 860,
          }}
        >
          {SITE.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 34,
            fontSize: 32,
            color: "rgba(234,237,230,0.75)",
          }}
        >
          {SITE.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
