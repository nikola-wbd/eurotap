"use client";

import { useEffect } from "react";

export default function Progress() {
  useEffect(() => {
    const el = document.getElementById("prog");
    const fn = () => {
      const h = document.body.scrollHeight - window.innerHeight;
      if (el) el.style.width = (window.scrollY / h * 100) + "%";
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return <div id="prog" />;
}
