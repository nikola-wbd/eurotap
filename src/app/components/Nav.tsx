"use client";

import { useState, useEffect } from "react";
import { goTo } from "../utils";

interface NavProps {
  tweaks: {
    darkNav: string;
    ctaLabel: string;
  };
}

export default function Nav({ tweaks }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mob, setMob] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const dark = tweaks.darkNav === "auto" ? scrolled : tweaks.darkNav === "always";
  const textColor = mob ? "var(--sand)" : (dark ? "var(--bark)" : "var(--sand)");

  const links = [
    ["Početna", "#"],
    ["O Nama", "#manifesto"],
    ["Portfolio", "#portfolio"],
    ["Proces", "#process"],
    ["Kontakt", "#kontakt"],
  ];

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMob(false);
    goTo(href);
  };

  return (
    <>
      <nav id="nav" className={scrolled ? "scrolled" : ""}>
        <div className="max-w-[1480px] mx-auto px-8 w-full flex items-center justify-between gap-4">
          <a
            href="#"
            onClick={(e) => handleClick(e, "#")}
            className="font-[family-name:var(--font-cormorant)] font-light text-[1.45rem] tracking-[0.1em] no-underline transition-colors duration-300"
            style={{ color: textColor, fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            EuroTap
          </a>
          <div className="nav-links flex items-center gap-10">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleClick(e, href)}
                className="nav-link relative font-[family-name:var(--font-jost)] text-[0.72rem] tracking-[0.06em] no-underline transition-colors duration-300"
                style={{
                  color: dark ? "rgba(61,32,16,.75)" : "rgba(240,230,211,.82)",
                  fontFamily: "var(--font-jost), system-ui, sans-serif",
                }}
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href="#kontakt"
            onClick={(e) => handleClick(e, "#kontakt")}
            className="nav-cta font-[family-name:var(--font-jost)] font-medium text-[0.65rem] tracking-[0.22em] uppercase py-[0.7rem] px-[1.8rem] no-underline border transition-all duration-[450ms] whitespace-nowrap"
            style={{
              color: dark ? "var(--bark)" : "var(--sand)",
              borderColor: dark ? "rgba(61,32,16,.35)" : "rgba(240,230,211,.45)",
              fontFamily: "var(--font-jost), system-ui, sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = dark ? "var(--bark)" : "var(--sand)";
              e.currentTarget.style.color = dark ? "var(--sand)" : "var(--bark)";
              e.currentTarget.style.borderColor = "transparent";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = dark ? "var(--bark)" : "var(--sand)";
              e.currentTarget.style.borderColor = dark ? "rgba(61,32,16,.35)" : "rgba(240,230,211,.45)";
            }}
          >
            {tweaks.ctaLabel}
          </a>
          <button
            className="ham flex-col gap-[5px] bg-transparent border-none p-2 hidden max-[768px]:flex"
            onClick={() => setMob((o) => !o)}
            style={{ color: textColor }}
            aria-label="Meni"
          >
            <span
              className="ham-line"
              style={{ transform: mob ? "translateY(6.5px) rotate(45deg)" : "none" }}
            />
            <span className="ham-line" style={{ opacity: mob ? 0 : 1 }} />
            <span
              className="ham-line"
              style={{ transform: mob ? "translateY(-6.5px) rotate(-45deg)" : "none" }}
            />
          </button>
        </div>
      </nav>
      <div id="mob" className={mob ? "open" : ""}>
        {links.map(([label, href]) => (
          <a
            key={href}
            href={href}
            onClick={(e) => handleClick(e, href)}
            className="font-[family-name:var(--font-cormorant)] italic font-light text-[2.4rem] text-[var(--sand)] no-underline tracking-[0.03em]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            {label}
          </a>
        ))}
        <a
          href="#kontakt"
          onClick={(e) => handleClick(e, "#kontakt")}
          className="font-[family-name:var(--font-jost)] text-[0.65rem] tracking-[0.22em] uppercase text-[var(--mink)] no-underline mt-4 border border-[rgba(196,168,128,.35)] py-3 px-8"
          style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
        >
          {tweaks.ctaLabel}
        </a>
      </div>
    </>
  );
}
