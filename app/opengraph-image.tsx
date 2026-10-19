import { ImageResponse } from "next/og";

export const alt = "The Brand Hoods — creative growth studio, Zirakpur";
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
          justifyContent: "space-between",
          background: "#0a0a0b",
          color: "#f4f1ea",
          padding: "64px 72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 44, height: 3, background: "#da0e1c" }} />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#8a8681",
            }}
          >
            Zirakpur · Chandigarh Tricity
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 92, fontWeight: 800, letterSpacing: -3, lineHeight: 1 }}>
            IMPOSSIBLE
          </div>
          <div
            style={{
              display: "flex",
              gap: 18,
              fontSize: 92,
              fontWeight: 800,
              letterSpacing: -3,
              lineHeight: 1,
            }}
          >
            <span>TO</span>
            <span style={{ color: "#da0e1c" }}>IGNORE</span>
          </div>
          <div style={{ fontSize: 26, color: "#b8b4ad", marginTop: 18 }}>
            Brand · Digital · Content · Performance
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div
              style={{
                display: "flex",
                fontSize: 40,
                fontWeight: 800,
                letterSpacing: -1,
              }}
            >
              <span>TB</span>
              <span style={{ color: "#da0e1c" }}>H</span>
            </div>
            <div style={{ fontSize: 16, letterSpacing: 5, color: "#8a8681" }}>
              THE BRAND HOODS
            </div>
          </div>
          <div style={{ fontSize: 22, color: "#8a8681" }}>thebrandhoods.com</div>
        </div>
      </div>
    ),
    size,
  );
}
