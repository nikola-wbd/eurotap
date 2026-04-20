"use client";

import { goTo, EMAIL, PHONE, PHONE_DISPLAY } from "../utils";

export default function Footer() {
  const links = [
    ["Početna", "#"],
    ["Portfolio", "#portfolio"],
    ["O Nama", "#manifesto"],
    ["Proces", "#process"],
    ["Kontakt", "#kontakt"],
  ];

  const contactLinks = [
    [`mailto:${EMAIL}`, EMAIL],
    [`tel:${PHONE}`, PHONE_DISPLAY],
    ["https://instagram.com/eurotapp", "Instagram ↗"],
  ];

  return (
    <footer style={{ background: "var(--espresso)", padding: "4rem 2rem", position: "relative" }}>
      <div className="max-w-[1480px] mx-auto">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: "2.5rem 2rem",
            marginBottom: "2.5rem",
            alignItems: "start",
          }}
        >
          <div>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontWeight: 300,
                fontSize: "1.35rem",
                letterSpacing: "0.1em",
                color: "var(--cream)",
                marginBottom: "0.4rem",
              }}
            >
              EuroTap
            </span>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-jost), system-ui, sans-serif",
                fontSize: "0.58rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--stone)",
              }}
            >
              Tešanj · Bosna i Hercegovina
            </span>
          </div>

          <nav style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem 1.4rem" }}>
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  goTo(href);
                }}
                style={{
                  fontFamily: "var(--font-jost), system-ui, sans-serif",
                  fontSize: "0.78rem",
                  color: "rgba(250,246,238,.5)",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--walnut)")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(250,246,238,.5)")
                }
              >
                {label}
              </a>
            ))}
          </nav>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
            {contactLinks.map(([href, text]) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-jost), system-ui, sans-serif",
                  fontSize: "0.78rem",
                  color: "rgba(250,246,238,.5)",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--walnut)")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(250,246,238,.5)")
                }
              >
                {text}
              </a>
            ))}
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(138,114,96,.15)",
            paddingTop: "1.8rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-jost), system-ui, sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.08em",
              color: "rgba(138,114,96,.5)",
            }}
          >
            © 2026 EuroTap. Sva prava zadržana.
          </p>
          <span
            style={{
              fontFamily: "var(--font-jost), system-ui, sans-serif",
              fontSize: "8px",
              letterSpacing: "0.05em",
              color: "rgba(138,114,96,.1)",
              userSelect: "none",
            }}
          >
            design by @_nik0lab_
          </span>
        </div>
      </div>
    </footer>
  );
}
