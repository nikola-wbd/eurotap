"use client";

import { useState, useEffect } from "react";

interface LoaderProps {
  onDone: () => void;
}

export default function Loader({ onDone }: LoaderProps) {
  const [phase, setPhase] = useState(0); // 0=hidden 1=visible 2=lifting

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 80);
    const t2 = setTimeout(() => setPhase(2), 1900);
    const t3 = setTimeout(() => onDone(), 3050);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onDone]);

  return (
    <div id="loader" className={phase === 2 ? "lift" : ""}>
      <div id="loader-logo" className={phase >= 1 ? "in" : ""}>EuroTap</div>
      <div id="loader-line" className={phase >= 1 ? "in" : ""} />
      <div id="loader-sub" className={phase >= 1 ? "in" : ""}>Tešanj · Bosna i Hercegovina</div>
    </div>
  );
}
