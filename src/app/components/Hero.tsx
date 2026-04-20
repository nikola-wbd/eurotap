"use client";

import { useEffect, useRef, useState } from "react";
import { goTo } from "../utils";

interface HeroProps {
  tweaks: {
    heroImg: string;
  };
}

const IMGS = {
  hero: {
    walnut: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=85&auto=format",
    dining: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=1920&q=85&auto=format",
    room: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=85&auto=format",
  },
};

export default function Hero({ tweaks }: HeroProps) {
  const bgRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fn = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(t);
  }, []);

  const src = IMGS.hero[tweaks.heroImg as keyof typeof IMGS.hero] || IMGS.hero.walnut;

  return (
    <section id="hero">
      <div
        className="hero-bg"
        ref={bgRef}
        style={{ backgroundImage: `url(${src})` }}
      />
      <div className="hero-vignette" />
      <div className="hero-content">
        <div
          style={{
            opacity: show ? 1 : 0,
            transform: show ? "none" : "translateY(28px)",
            transition: "opacity 1.2s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 1.2s cubic-bezier(0.16,1,0.3,1) 0.2s",
          }}
        >
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-jost), system-ui, sans-serif",
              fontSize: "0.58rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(240,230,211,.6)",
              marginBottom: "1.6rem",
            }}
          >
            EuroTap · Tešanj, Bosna i Hercegovina
          </span>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: 300,
              lineHeight: 1.0,
              letterSpacing: "0.015em",
              color: "var(--sand)",
              maxWidth: "860px",
              fontSize: "clamp(3rem,8vw,7.5rem)",
              marginBottom: "1.4rem",
            }}
          >
            Namještaj koji<br /><em>priča vašu priču.</em>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(1rem,2.2vw,1.5rem)",
              color: "rgba(240,230,211,.85)",
              maxWidth: "480px",
              lineHeight: 1.5,
              marginBottom: "2.5rem",
            }}
          >
            Ručna izrada. Masivno drvo. Tešanj.
          </p>
          <a
            href="#kontakt"
            onClick={(e) => {
              e.preventDefault();
              goTo("#kontakt");
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-jost), system-ui, sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--sand)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(240,230,211,.4)",
              paddingBottom: "4px",
              transition: "border-color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "rgba(240,230,211,.9)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "rgba(240,230,211,.4)")
            }
          >
            Zakažite konsultacije &nbsp;↓
          </a>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-jost), system-ui, sans-serif",
            fontSize: "0.55rem",
            letterSpacing: "0.25em",
            color: "rgba(240,230,211,.38)",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "38px",
            background: "rgba(240,230,211,.28)",
          }}
          className="animate-pip"
        />
      </div>
    </section>
  );
}
