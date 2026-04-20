"use client";

import WordReveal from "./WordReveal";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    n: "Konsultacija",
    d: "Sve počinje razgovorom. Kontaktirajte nas i zajedno definišemo vašu viziju.",
  },
  {
    n: "Izbor Materijala",
    d: "Biramo tkanine, drvo i detalje koji odgovaraju vašem prostoru i ukusu.",
  },
  {
    n: "Izrada",
    d: "Svaki komad izrađujemo ručno u našoj radionici u Tešnju, uz punu kontrolu kvaliteta.",
  },
  {
    n: "Isporuka",
    d: "Dostavljamo i instaliramo na vašoj lokaciji. Vaš prostor. Vaš namještaj.",
  },
];

export default function Process() {
  return (
    <section id="process" data-screen-label="06 Proces" className="sec sec-cream">
      <div className="max-w-[1480px] mx-auto">
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
            <span className="sec-label">Kako Radimo</span>
            <WordReveal
              text="Od razgovora do dostave."
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
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: "2.5rem",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "3.5rem",
              left: "4%",
              right: "4%",
              height: "1px",
              background:
                "linear-gradient(to right,transparent,var(--oat),var(--oat),transparent)",
            }}
          />
          {steps.map((s, i) => (
            <ScrollReveal key={i} delay={i + 1}>
              <div>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontWeight: 300,
                    fontSize: "clamp(3rem,5vw,5rem)",
                    color: "var(--walnut)",
                    opacity: 0.35,
                    lineHeight: 1,
                    marginBottom: "1.2rem",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontWeight: 400,
                    fontSize: "1.25rem",
                    color: "var(--bark)",
                    marginBottom: "0.6rem",
                  }}
                >
                  {s.n}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-jost), system-ui, sans-serif",
                    fontSize: "0.85rem",
                    lineHeight: 1.8,
                    color: "var(--stone)",
                  }}
                >
                  {s.d}
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
              fontSize: "clamp(1.1rem,2.5vw,1.8rem)",
              color: "var(--stone)",
              textAlign: "center",
              marginTop: "4.5rem",
              maxWidth: "680px",
              margin: "4.5rem auto 0",
            }}
          >
            Bez kataloga. Bez kompromisa. Samo vaša vizija u punoj mjeri.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
