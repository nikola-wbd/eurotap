"use client";

import WordReveal from "./WordReveal";
import ScrollReveal from "./ScrollReveal";
import { goTo } from "../utils";

const IMGS = {
  cats: [
    "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=600&q=80&auto=format",
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80&auto=format",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80&auto=format",
    "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=600&q=80&auto=format",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&auto=format",
  ],
};

const categories = [
  { n: "Stolice", img: IMGS.cats[0] },
  { n: "Sofe", img: IMGS.cats[1] },
  { n: "Kreveti", img: IMGS.cats[2] },
  { n: "Garniture", img: IMGS.cats[3] },
  { n: "Restorani & Hoteli", img: IMGS.cats[4] },
];

export default function Categories() {
  return (
    <section id="categories" data-screen-label="05 Kategorije" className="sec sec-alt">
      <div className="max-w-[1480px] mx-auto">
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="sec-label">Kategorije</span>
            <WordReveal
              text="Šta izrađujemo."
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
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: "0.8rem",
          }}
        >
          {categories.map((c, i) => (
            <ScrollReveal key={i} delay={(i % 4) + 1}>
              <button
                className="cat-tile"
                onClick={() => goTo("#kontakt")}
                style={{ width: "100%", textAlign: "left" }}
              >
                <div
                  style={{
                    aspectRatio: "3/4",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img src={c.img} alt={c.n} />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top,rgba(30,15,4,.72) 0%,transparent 55%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "1.2rem",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        fontFamily: "var(--font-cormorant), Georgia, serif",
                        fontStyle: "italic",
                        fontWeight: 300,
                        fontSize: "1.35rem",
                        color: "var(--cream)",
                      }}
                    >
                      {c.n}
                    </span>
                    <span
                      style={{
                        display: "block",
                        fontFamily: "var(--font-jost), system-ui, sans-serif",
                        fontSize: "0.58rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "rgba(250,246,238,.55)",
                        marginTop: "0.2rem",
                      }}
                    >
                      Pogledaj →
                    </span>
                  </div>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
