"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "../../components/LanguageContext";

const ABT_OBJS = [
  { id: "chagall", x: 3.5, y: 19, img: "obj-chagall.webp", w: 25, label: { es: "Chagall", en: "Chagall" }, desc: { es: "El amor como la única fuerza que desafía la gravedad y la razón.", en: "Love as the only force that defies gravity and reason." } },
  { id: "vangogh1", x: 23, y: 8, img: "obj-vangogh-chair.webp", w: 18, label: { es: "La silla de Van Gogh", en: "Van Gogh's Chair" }, desc: { es: "La silla vacía: una invitación a observar la ausencia.", en: "The empty chair: an invitation to observe absence." } },
  { id: "magritte", x: 52, y: 5.5, img: "obj-magritte.webp", w: 18, label: { es: "El tiempo detenido", en: "Time suspended" }, desc: { es: "Magritte y la ilusión de la permanencia.", en: "Magritte and the illusion of permanence." } },
  { id: "remedios", x: 77, y: 11, img: "obj-remedios.webp", w: 22, label: { es: "Remedios Varo", en: "Remedios Varo" }, desc: { es: "Tejiendo el universo desde el exilio interior.", en: "Weaving the universe from an inner exile." } },
  { id: "vangogh2", x: 6.5, y: 60, img: "obj-vangogh-irises.webp", w: 24, label: { es: "Iris", en: "Irises" }, desc: { es: "La naturaleza como refugio y consuelo ante la tormenta.", en: "Nature as a refuge and comfort against the storm." } },
  { id: "leonora1", x: 28, y: 74, img: "obj-leonora-cocodrilo.webp", w: 24, label: { es: "Cocodrilo de Leonora", en: "Leonora's Crocodile" }, desc: { es: "El humor absurdo y la magia cotidiana de Carrington.", en: "The absurd humor and everyday magic of Carrington." } },
  { id: "dali", x: 54, y: 77, img: "obj-dali.webp", w: 17, label: { es: "Dalí", en: "Dalí" }, desc: { es: "El inconsciente materializado y la distorsión del recuerdo.", en: "The materialized unconscious and the distortion of memory." } },
  { id: "leonora2", x: 75, y: 67, img: "obj-leonora-minotauro.webp", w: 21, label: { es: "Minotauro", en: "Minotaur" }, desc: { es: "Nuestros propios laberintos y los monstruos que los habitan.", en: "Our own labyrinths and the monsters that inhabit them." } },
  { id: "frida", x: 82, y: 44, img: "obj-frida.webp", w: 16, label: { es: "Frida", en: "Frida" }, desc: { es: "El dolor transformado en identidad e iconografía.", en: "Pain transformed into identity and iconography." } },
];

export default function About() {
  const { lang } = useLanguage();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onResize = () => {
      if (wrapRef.current) {
        const vw = wrapRef.current.clientWidth;
        // In the original, the stage is 980px wide. We scale it down to fit the container.
        const sc = Math.min(1, vw / 1040);
        setScale(sc);
      }
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <main style={{ width: "100%", padding: "48px 0 104px" }}>
      <div
        ref={wrapRef}
        style={{
          width: "100%",
          maxWidth: "1320px",
          boxSizing: "border-box",
          margin: "0 auto",
          padding: "0 28px",
          display: "flex",
          justifyContent: "center",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "relative",
            width: "980px",
            height: "620px",
            transformOrigin: "top center",
            transform: `scale(${scale})`,
            marginBottom: `calc(-620px * (1 - ${scale}))`,
          }}
        >
          {/* Main Portrait */}
          <div
            style={{
              position: "absolute",
              left: "38%",
              top: "14%",
              width: "25%",
              height: "72%",
              borderRadius: "999px",
              background: "#F7F5F0",
              border: "1.5px solid rgba(26,26,26,0.15)",
              boxShadow: "0 24px 48px rgba(26,26,26,0.1)",
              zIndex: 10,
              overflow: "hidden",
            }}
          >
            <Image
              src="/assets/paula-portrait.webp"
              alt="Paula"
              fill
              style={{ objectFit: "cover" }}
              sizes="25vw"
            />
          </div>

          {/* Floating Objects */}
          {ABT_OBJS.map((obj, i) => {
            const isHov = hovered === obj.id;
            return (
              <div
                key={obj.id}
                onMouseEnter={() => setHovered(obj.id)}
                onMouseLeave={() => setHovered(null)}
                className="group"
                style={{
                  position: "absolute",
                  left: `${obj.x}%`,
                  top: `${obj.y}%`,
                  width: `${obj.w}%`,
                  zIndex: isHov ? 30 : 20,
                  cursor: "crosshair",
                  animation: `sfObjectIn 0.8s cubic-bezier(0.2,0.8,0.2,1) both ${i * 0.08}s, sfFloat ${(4 + i % 3)}s ease-in-out infinite ${i * 0.4}s`,
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.4s ease",
                    transform: isHov ? "scale(1.1) translateY(-4px)" : "scale(1)",
                    filter: isHov ? "drop-shadow(0 16px 24px rgba(26,26,26,0.15))" : "drop-shadow(0 8px 16px rgba(26,26,26,0.08))",
                  }}
                >
                  <img
                    src={`/assets/${obj.img}`}
                    alt={obj.label[lang === "en" ? "en" : "es"]}
                    style={{ width: "100%", height: "auto", display: "block" }}
                    draggable="false"
                  />
                  {/* Popover */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "calc(100% + 12px)",
                      background: "#1A1A1A",
                      color: "#FFFFFF",
                      padding: "16px",
                      borderRadius: "16px",
                      width: "max-content",
                      maxWidth: "240px",
                      textAlign: "center",
                      opacity: isHov ? 1 : 0,
                      transform: isHov ? "translateY(0) scale(1)" : "translateY(8px) scale(0.96)",
                      visibility: isHov ? "visible" : "hidden",
                      transition: "opacity 0.2s ease, transform 0.2s ease, visibility 0.2s",
                      boxShadow: "0 12px 24px rgba(26,26,26,0.2)",
                      pointerEvents: "none",
                    }}
                  >
                    <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#B5B5B5", marginBottom: "6px" }}>
                      {obj.label[lang === "en" ? "en" : "es"]}
                    </p>
                    <p style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.5, textWrap: "pretty" }}>
                      {obj.desc[lang === "en" ? "en" : "es"]}
                    </p>
                    {/* Arrow */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-5px",
                        left: "50%",
                        marginLeft: "-6px",
                        width: 0,
                        height: 0,
                        borderLeft: "6px solid transparent",
                        borderRight: "6px solid transparent",
                        borderTop: "6px solid #1A1A1A",
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}

          {/* Intro Text Block (left) */}
          <div
            style={{
              position: "absolute",
              left: "4%",
              top: "30%",
              width: "28%",
              zIndex: 5,
              animation: "sfFadeIn 0.8s ease both 0.4s",
            }}
          >
            {lang === "es" ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px", lineHeight: 1.6, color: "#555555" }}>
                <Image src="/assets/hola-soy-paula-es.png" alt="Hola soy Paula" width={120} height={40} style={{ objectFit: "contain", marginBottom: "8px" }} />
                <p>Una curadora de ideas que habita en la intersección entre el arte, el diseño y la tecnología.</p>
                <p>Sfumato es mi archivo personal y público: un intento por entender cómo lo que creamos termina dándonos forma a nosotros mismos.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px", lineHeight: 1.6, color: "#555555" }}>
                <Image src="/assets/hola-soy-paula-en.png" alt="Hi I'm Paula" width={120} height={40} style={{ objectFit: "contain", marginBottom: "8px" }} />
                <p>An idea curator dwelling at the intersection of art, design, and technology.</p>
                <p>Sfumato is my personal and public archive: an attempt to understand how what we create ends up shaping us.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
