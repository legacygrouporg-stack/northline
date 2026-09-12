import { ImageResponse } from "next/og";

export const alt = "Northline — Brand & launch systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070a0f",
          color: "#e8eef8",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 36,
            letterSpacing: "-0.03em",
          }}
        >
          <span>North</span>
          <span style={{ color: "#f5c542" }}>line</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: 900,
            }}
          >
            Brand & launch systems for African marketplace and fintech startups.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 22,
              color: "#8b9bb4",
            }}
          >
            Launch Sprint · Board Pack · Signal Retainer
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
