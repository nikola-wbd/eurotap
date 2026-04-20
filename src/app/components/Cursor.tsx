"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer:fine)").matches) return;

    let mx = 0, my = 0, rx = 0, ry = 0, raf: number;
    let hov = false;

    const mv = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate(${mx}px, ${my}px)`;
      }
    };

    const lerp = () => {
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;
      if (ring.current) {
        ring.current.style.transform = `translate(${rx}px, ${ry}px) scale(${hov ? 1.9 : 1})`;
      }
      raf = requestAnimationFrame(lerp);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role=button]")) {
        hov = true;
        if (dot.current) dot.current.style.opacity = "0";
      }
    };

    const out = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role=button]")) {
        hov = false;
        if (dot.current) dot.current.style.opacity = "1";
      }
    };

    document.addEventListener("mousemove", mv);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    raf = requestAnimationFrame(lerp);
    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", mv);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
      cancelAnimationFrame(raf);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <>
      <div id="cur-dot" ref={dot} />
      <div id="cur-ring" ref={ring} />
    </>
  );
}
