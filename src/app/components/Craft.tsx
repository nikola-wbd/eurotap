"use client";

import WordReveal from "./WordReveal";
import ScrollReveal from "./ScrollReveal";

const IMGS = {
  craft: [
    "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&q=80&auto=format",
    "https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=800&q=80&auto=format",
    "https://images.unsplash.com/photo-1586999768265-24af89630739?w=800&q=80&auto=format",
  ],
};

const cards = [
  {
    l: "Ručno postavljani mesingani ekseri.",
    c: "Nasljeđe staro koliko i sam zanat.",
    img: IMGS.craft[0],
  },
  {
    l: "Kapitonirani naslon — ručni rad.",
    c: "Svaki čvor postavljen rukom, svaki razmak izmjeren.",
    img: IMGS.craft[1],
  },
  {
    l: "Masivno bukovo drvo — domaća šuma.",
    c: "Biramo svako stablo. Pamtimo svaku narudžbu.",
    img: IMGS.craft[2],
  },
];

export default function Craft() {
  return (
    <section id="craftsmanship" data-screen-label="03 Zanatstvo" className="sec sec-alt">
      <div className="max-w-[1480px] mx-auto">
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="sec-label">Zanatstvo</span>
            <WordReveal
              text="Ono što se vidi kada se priđe bliže."
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontWeight: 300,
                fontSize: "clamp(1.8rem,4vw,3.2rem)",
                color: "var(--bark)",
              }}
            />
          </div>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "2.5rem",
          }}
        >
          {cards.map((c, i) => (
            <ScrollReveal key={i} delay={i + 1}>
              <div>
                <div
                  style={{
                    aspectRatio: "4/5",
                    overflow: "hidden",
                    marginBottom: "1.4rem",
                  }}
                >
                  <img
                    src={c.img}
                    alt={c.l}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 1.3s cubic-bezier(0.16,1,0.3,1)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.06)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontStyle: "italic",
                    fontWeight: 300,
                    fontSize: "1.35rem",
                    color: "var(--bark)",
                    marginBottom: "0.5rem",
                    lineHeight: 1.3,
                  }}
                >
                  {c.l}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-jost), system-ui, sans-serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--stone)",
                  }}
                >
                  {c.c}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(1.2rem,2.5vw,2rem)",
              color: "var(--stone)",
              textAlign: "center",
              marginTop: "4.5rem",
            }}
          >
            Svaki detalj ima namjeru.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
