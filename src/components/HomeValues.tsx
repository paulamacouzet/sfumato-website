"use client";

import React, { useRef, useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";

const cardTexts = {
  es: [
    <p key="1">Sí... como la técnica de Leonardo da Vinci, quien difuminaba los bordes entre la luz y la sombra para que aparecieran todos los tonos de en medio. Ahí, en los matices, resistiendo la polarización, es donde somos más libres.</p>,
    <p key="2">Escribo desde la perspectiva LATAM, para el Sur Global. El contenido se inspira recorriendo distintas geografías, por lo que encontrarás algunas entrevistas en inglés, como puente hacia otras culturas, pero el idioma oficial es el español.</p>,
    <p key="3">Nadie se ha sentido vivo scrolleando. Así que creemos en menos consumo, más creación.<br/><br/>Hay que tener la valentía de ir contracorriente, en un mundo tan acelerado, pausar para mirar un minuto más es una revolución.</p>,
    <p key="4">El arte conecta lo terrenal con lo que nos trasciende. Crear está en nuestro ADN, aunque lo olvidemos. Para construir el mundo en el que queremos vivir, debemos habitar el arte en primera persona: empaparnos de él y llevarlo como un perfume que lo impregna todo.</p>
  ],
  en: [
    <p key="1">Yes... like Leonardo da Vinci's technique, blurring the edges between light and shadow so every tone in between could show through. There, in the nuance, resisting polarization, is where we're most free.</p>,
    <p key="2">I write from a Latin American perspective, for the Global South. The content is inspired by traveling through different geographies, so you'll find some interviews in English, as a bridge to other cultures, but the official language is Spanish.</p>,
    <p key="3">Nobody has ever felt alive while scrolling. We believe in less consuming, more creating.<br/><br/>In a world moving at full speed, daring to go against the flow and pausing to look a little longer is our quiet rebellion.</p>,
    <p key="4">Art connects the mundane to the transcendent. Creating is written in our DNA, even when we forget. To shape the world we wish to live in, we must inhabit art in the first person: soak in it and carry it like a fragrance that touches everything around us.</p>
  ]
};

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
        // Offset by 104px so it starts exactly when the sticky container locks under the header
        const dp = Math.min(1, Math.max(0, -(dr.top - 104) / dspan));
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
      i,
      wrapStyle: {
        position: "absolute" as const,
        left: "50%",
        top: "50%",
        zIndex: 10 + i,
        transformOrigin: "top center",
        willChange: "transform",
        "--p": p,
        "--dt-land-x": `${landX}px`,
        "--dt-land-y": `${landY}px`,
        "--dt-rot": `${rot}deg`,
      } as React.CSSProperties
    };
  });

  return (
    <section id="values" style={{ width: "100%", background: "#FFFFFF", padding: "64px 0 64px" }}>
      <style>{`
        .values-sticky-container {
          position: sticky;
          top: 72px;
          height: calc(100vh - 72px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px 0 32px;
          box-sizing: border-box;
        }
        .value-card-wrapper {
          height: auto;
          min-height: 60vh;
          width: 86vw;
          max-width: 420px;
          
          /* Mobile Sticky Stack Animation */
          --mobile-y: calc((1 - var(--p)) * 130vh);
          transform: translateX(-50%) translateY(calc(-50% + var(--mobile-y))) !important;
        }
        .desktop-card {
          display: none;
        }
        .mobile-card {
          display: flex;
        }
        @media (min-width: 768px) {
          .values-sticky-container {
            top: 104px;
            height: calc(100vh - 104px);
            padding: 20px 0 40px;
            gap: 24px;
          }
          .value-card-wrapper {
            height: clamp(220px, 40vh, 440px);
            max-height: 480px;
            width: auto;
            aspect-ratio: 16 / 10;
            max-width: 80%;
            
            /* Desktop Deck Stack Animation */
            --dx: calc(var(--dt-land-x) + (1 - var(--p)) * 1800px);
            --dy: calc(var(--dt-land-y) + (1 - var(--p)) * 30px);
            --drot: calc(var(--dt-rot) + (1 - var(--p)) * 8deg);
            --dscale: calc(0.96 + var(--p) * 0.04);
            transform: translateX(-50%) translateY(-50%) translate(var(--dx), var(--dy)) rotate(var(--drot)) scale(var(--dscale)) !important;
          }
          .desktop-card {
            display: block;
          }
          .mobile-card {
            display: none;
          }
        }
      `}</style>
      <div style={{ width: "100%", maxWidth: "1320px", boxSizing: "border-box", margin: "0 auto", padding: "0 28px" }}>
        
        {/* Mobile Title (Scrolls away) */}
        <div className="md:hidden w-full max-w-[640px] mx-auto mb-[32px] text-center flex flex-col gap-[14px]">
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

        <div ref={deckRef} style={{ position: "relative", height: "600vh" }}>
          <div className="values-sticky-container">
            
            {/* Desktop Title (Sticky) */}
            <div className="hidden md:flex w-full max-w-[640px] mx-auto mb-[32px] text-center flex-col gap-[14px]">
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
                <div key={c.n} className="value-card-wrapper" style={c.wrapStyle}>
                  {/* Desktop: Horizontal Image */}
                  <div 
                    className="desktop-card w-full h-full rounded-[16px] bg-[#F7F5F0] border border-[#1A1A1A]/10 shadow-[0_12px_34px_rgba(26,26,26,0.14)] bg-cover bg-center" 
                    style={{ backgroundImage: `url(/assets/card-${c.n}-${lang}.png)` }} 
                  />
                  
                  {/* Mobile: Vertical Composite Card */}
                  <div 
                    className="mobile-card w-full h-full rounded-[24px] bg-[#f8f6ee] border border-[#1A1A1A]/10 shadow-[0_12px_34px_rgba(26,26,26,0.14)] flex-col overflow-hidden"
                    style={{ 
                      padding: "clamp(1.5rem, 4vh, 2.5rem)", 
                      gap: "1.5rem", 
                      alignItems: "center", 
                      justifyContent: "center" 
                    }}
                  >
                    <div 
                      style={{ 
                        width: "100%",
                        height: "40vh",
                        minHeight: "180px", 
                        backgroundImage: `url(/assets/mcard-${c.n}-${lang}.png)`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        flexShrink: 0
                      }} 
                    />
                    <div style={{ fontSize: "14px", lineHeight: 1.65, color: "#333333", width: "100%", textAlign: "center" }}>
                      {lang === 'es' ? cardTexts.es[c.i] : cardTexts.en[c.i]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

