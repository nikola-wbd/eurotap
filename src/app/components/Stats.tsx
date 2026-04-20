"use client";

import { useEffect, useRef, useState } from "react";
import WordReveal from "./WordReveal";
import ScrollReveal from "./ScrollReveal";

function Counter({ to, sfx }: { to: number; sfx: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !done.current) {
          done.current = true;
          let s: number | null = null;
          const step = (ts: number) => {
            if (!s) s = ts;
            const p = Math.min((ts - s) / 2200, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            setV(Math.round(ease * to));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return <span ref={ref}>{v}{sfx}</span>;
}

export default function Stats() {
  return (
    <section
      id="stats"
      data-screen-label="07 Brojke"
      style={{ background: "var(--espresso)", padding: "7rem 2rem" }}
    >
      <div className="max-w-[1480px] mx-auto" style={{ textAlign: "center" }}>
        <ScrollReveal>
          <span
            className="sec-label"
            style={{ color: "var(--mink)" }}
          >
            Brojke
          </span>
        </ScrollReveal>

        <WordReveal
          text="Izgrađeno povjerenjem."
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontWeight: 300,
            fontSize: "clamp(1.6rem,4vw,3rem)",
            color: "var(--cream)",
            marginBottom: "4rem",
          }}
        />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 0,
          }}
        >
          {[
            [200, "+", "Realizovanih projekata"],
            [15, "+", "Godina iskustva"],
            [50, "+", "Zadovoljnih klijenata"],
          ].map(([v, s, l], i, a) => (
            <div key={l} style={{ display: "contents" }}>
              <ScrollReveal>
                <div style={{ padding: "0 3rem", textAlign: "center" }}>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontWeight: 300,
                      fontSize: "clamp(3rem,7vw,5.5rem)",
                      color: "var(--walnut)",
                      lineHeight: 1,
                    }}
                  >
                    <Counter to={v as number} sfx={s as string} />
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-jost), system-ui, sans-serif",
                      fontSize: "0.6rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--mink)",
                      marginTop: "0.7rem",
                    }}
                  >
                    {l}
                  </span>
                </div>
              </ScrollReveal>
              {i < (a.length - 1) && (
                <div
                  style={{
                    width: "1px",
                    height: "70px",
                    background: "rgba(155,117,69,.25)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
