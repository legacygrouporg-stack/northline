import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#070a0f",
          color: "#e8eef8",
          fontSize: 34,
          letterSpacing: "-0.04em",
          border: "2px solid #f5c542",
        }}
      >
        N
      </div>
    ),
    { ...size },
  );
}
