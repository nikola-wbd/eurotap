"use client";

import WordReveal from "./WordReveal";
import ScrollReveal from "./ScrollReveal";

export default function Manifesto() {
  return (
    <section id="manifesto" data-screen-label="02 O Nama" className="sec sec-cream">
      <div className="max-w-[1480px] mx-auto">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "3rem 6rem",
            alignItems: "center",
          }}
        >
          <div>
            <ScrollReveal>
              <span className="sec-label">O Nama</span>
            </ScrollReveal>
            <WordReveal
              text="Luksuz je u detaljima."
              tag="blockquote"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(2.2rem,5vw,4.2rem)",
                lineHeight: 1.1,
                color: "var(--bark)",
                marginBottom: "1.5rem",
              }}
            />
            <ScrollReveal delay={2}>
              <span
                style={{
                  fontFamily: "var(--font-jost), system-ui, sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--stone)",
                }}
              >
                — EuroTap
              </span>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={2}>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-jost), system-ui, sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.9,
                  color: "rgba(61,32,16,.78)",
                  marginBottom: "2rem",
                }}
              >
                U Tešnju, srcu bosanske tradicije stolarskog zanata, EuroTap izrađuje namještaj koji traje generacijama. Svaki komad nastaje po mjeri — od izbora masivnog bukovog drveta iz domaćih šuma, preko ručno kapitoniranih naslona, do posljednjeg mesinganog eksera.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-jost), system-ui, sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.9,
                  color: "rgba(61,32,16,.78)",
                  marginBottom: "2.5rem",
                }}
              >
                Radimo za domove, hotele i restorane koji razumiju razliku između namještaja koji se kupuje i namještaja koji se naručuje.
              </p>
              <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
                {[
                  ["15+", "Godina iskustva"],
                  ["200+", "Realizovanih projekata"],
                  ["100%", "Masivno drvo"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <span
                      style={{
                        display: "block",
                        fontFamily: "var(--font-cormorant), Georgia, serif",
                        fontWeight: 300,
                        fontSize: "2rem",
                        color: "var(--walnut)",
                        lineHeight: 1,
                      }}
                    >
                      {v}
                    </span>
                    <span
                      style={{
                        display: "block",
                        fontFamily: "var(--font-jost), system-ui, sans-serif",
                        fontSize: "0.6rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "var(--stone)",
                        marginTop: "0.3rem",
                      }}
                    >
                      {l}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal>
          <div className="brass-div" />
        </ScrollReveal>
      </div>
    </section>
  );
}
