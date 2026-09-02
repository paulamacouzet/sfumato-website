"use client";

import React, { useRef, useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";

export function HomeValues() {
  const { lang } = useLanguage();
  const deckRef = useRef<HTMLDivElement>(null);
  const [deckP, setDeckP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const dk = deckRef.current;
      if (dk) {
        const dr = dk.getBoundingClientRect();
        const dspan = Math.max(1, dr.height - window.innerHeight);
        const dp = Math.min(1, Math.max(0, -dr.top / dspan));
        if (Math.abs(dp - deckP) > 0.002) setDeckP(dp);
      }
    };
    
    // Initial check and scroll listener
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    
    // Fallback polling for layout shifts
    let lastTop = 0;
    const tick = () => {
      if (deckRef.current) {
        const top = deckRef.current.getBoundingClientRect().top;
        if (top !== lastTop) {
          lastTop = top;
          onScroll();
        }
      }
      requestAnimationFrame(tick);
    };
    const raf = requestAnimationFrame(tick);
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [deckP]);

  const VN = 4;
  const ease = (x: number) => 1 - Math.pow(1 - x, 3);

  const stackCards = [1, 2, 3, 4].map((n, i) => {
    const raw = i === 0 ? 1 : Math.min(1, Math.max(0, deckP * (VN - 1) - (i - 1)));
    const p = ease(raw);
    const landX = (i - (VN - 1) / 2) * 26;
    const landY = i * 7;
    const rot = (i - (VN - 1) / 2) * 2.6;
    
    return {
      n,
      wrapStyle: {
        position: "absolute" as const,
        left: "50%",
        top: "4px",
        height: "min(calc(100% - 24px), 215px)",
        aspectRatio: "16 / 10",
        width: "auto",
        maxWidth: "60%",
        zIndex: 10 + i,
        transformOrigin: "top center",
        transform: `translateX(-50%) translate(${landX + (1 - p) * 900}px, ${landY + (1 - p) * 30}px) rotate(${rot + (1 - p) * 8}deg) scale(${(0.96 + p * 0.04).toFixed(3)})`,
        willChange: "transform",
      },
      imgStyle: {
        width: "100%",
        height: "100%",
        background: "#F7F5F0",
        border: "1px solid rgba(26,26,26,0.10)",
        borderRadius: "16px",
        boxShadow: "0 12px 34px rgba(26,26,26,0.14)",
        backgroundImage: `url(/assets/card-${n}-${lang}.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
    };
  });

  return (
    <section id="values" style={{ width: "100%", background: "#FFFFFF", padding: "96px 0 88px" }}>
      <div style={{ width: "100%", maxWidth: "1320px", boxSizing: "border-box", margin: "0 auto", padding: "0 28px" }}>
        <div ref={deckRef} style={{ position: "relative", height: "600vh" }}>
          <div
            style={{
              position: "sticky",
              top: 0,
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "32px",
              padding: "56px 0 40px",
              boxSizing: "border-box",
              overflow: "hidden",
            }}
          >
            <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", gap: "14px" }}>
              {lang === "es" ? (
                <>
                  <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#B5B5B5", fontWeight: 600 }}>
                    Valores
                  </p>
                  <h2 style={{ margin: 0, fontSize: "clamp(24px,3.4vw,32px)", fontWeight: 500, lineHeight: 1.3, letterSpacing: "-0.01em", textWrap: "pretty" }}>
                    ¿Por qué Sfumato? Lo que nos mueve y las ideas que sostienen todo lo que hacemos aquí.
                  </h2>
                </>
              ) : (
                <>
                  <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#B5B5B5", fontWeight: 600 }}>
                    Values
                  </p>
                  <h2 style={{ margin: 0, fontSize: "clamp(24px,3.4vw,32px)", fontWeight: 500, lineHeight: 1.3, letterSpacing: "-0.01em", textWrap: "pretty" }}>
                    Why Sfumato? What moves us and the ideas that anchor everything we do here.
                  </h2>
                </>
              )}
            </div>
            <div style={{ position: "relative", width: "100%", flex: "1 1 auto", minHeight: 0 }}>
              {stackCards.map((c) => (
                <div key={c.n} style={c.wrapStyle}>
                  <div style={c.imgStyle}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
