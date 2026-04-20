"use client";

import WordReveal from "./WordReveal";
import ScrollReveal from "./ScrollReveal";
import { goTo } from "../utils";

const IMGS = {
  portfolio: [
    "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=700&q=80&auto=format",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700&q=80&auto=format",
    "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=700&q=80&auto=format",
    "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=700&q=80&auto=format",
  ],
};

const projects = [
  {
    n: "President & SPA Hotel Maglaj",
    c: "Hotel · 2024",
    d: "Lobby — kožna sekciona sofa u medenoj boji i prateći elementi.",
    img: IMGS.portfolio[0],
  },
  {
    n: "Restoran Caffe Tesa",
    c: "Ugostiteljstvo · 2024",
    d: "Kompletno opremanje sale — banquette sofe, stolice, baza enterijera.",
    img: IMGS.portfolio[1],
  },
  {
    n: "La Casa Pub",
    c: "Ugostiteljstvo · 2023",
    d: "Barski program — tapacirane stolice i šank elementi.",
    img: IMGS.portfolio[2],
  },
  {
    n: "Rezidencija Tešanj",
    c: "Rezidencijalno · 2024",
    d: "Kapitonirana trpezarija — šest stolica sa mesinganim detaljima.",
    img: IMGS.portfolio[3],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" data-screen-label="04 Portfolio" className="sec sec-cream">
      <div className="max-w-[1480px] mx-auto">
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="sec-label">Naši Radovi</span>
            <WordReveal
              text="Projekti koji žive dalje od slike."
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
            gap: "1.2rem",
          }}
        >
          {projects.map((p, i) => (
            <ScrollReveal key={i} delay={(i % 3) + 1}>
              <div className="port-card" style={{ aspectRatio: "4/5" }}>
                <img src={p.img} alt={p.n} />
                <div className="port-overlay">
                  <span
                    style={{
                      fontFamily: "var(--font-jost), system-ui, sans-serif",
                      fontSize: "0.58rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--mink)",
                      marginBottom: "0.6rem",
                      display: "block",
                    }}
                  >
                    {p.c}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontStyle: "italic",
                      fontWeight: 300,
                      fontSize: "1.55rem",
                      color: "var(--cream)",
                      marginBottom: "0.6rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {p.n}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-jost), system-ui, sans-serif",
                      fontSize: "0.82rem",
                      color: "rgba(250,246,238,.68)",
                      lineHeight: 1.65,
                    }}
                  >
                    {p.d}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <a
              href="#kontakt"
              onClick={(e) => {
                e.preventDefault();
                goTo("#kontakt");
              }}
              style={{
                fontFamily: "var(--font-jost), system-ui, sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--bark)",
                textDecoration: "underline",
                textUnderlineOffset: "7px",
                textDecorationColor: "var(--walnut)",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--walnut)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--bark)")}
            >
              Imate projekat na umu? Razgovarajmo. →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
