"use client";

import { useEffect, useRef, useState, ElementType, ComponentPropsWithoutRef } from "react";

interface WordRevealProps {
  text: string;
  tag?: ElementType;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export default function WordReveal({
  text,
  tag: Tag = "h2",
  className = "",
  style = {},
  delay = 0,
}: WordRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as any;

  return (
    <Component
      ref={ref}
      className={`wrev-trigger ${isVisible ? "in" : ""} ${className}`}
      style={style}
    >
      {words.map((w, i) => (
        <span key={i}>
          <span className="wrev-wrap">
            <span
              className="wrev-word"
              style={{ transitionDelay: `${delay + i * 0.07}s` }}
            >
              {w}
            </span>
          </span>
          {i < words.length - 1 && (
            <span style={{ display: "inline-block" }}>&nbsp;</span>
          )}
        </span>
      ))}
    </Component>
  );
}
