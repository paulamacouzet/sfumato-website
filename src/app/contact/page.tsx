"use client";

import React from "react";
import { useLanguage } from "../../components/LanguageContext";

export default function Contact() {
  const { lang } = useLanguage();

  const COPY = {
    es: {
      ctKicker: "Contacto",
      ctTitle: "Hablemos de ideas, colaboración y creatividad.",
      reasons: [
        { text: "Si quieres compartir una historia o recomendar un libro." },
        { text: "Si buscas colaborar en proyectos creativos o de investigación." },
        { text: "Si simplemente quieres saludar y ser parte de la comunidad." }
      ],
      boxTitle: "Sfumato Society",
      boxBody: "Únete a nuestra lista de correo para recibir nuestras crónicas, ensayos visuales y recomendaciones dominicales.",
      boxCta: "Suscribirme"
    },
    en: {
      ctKicker: "Contact",
      ctTitle: "Let's talk about ideas, collaboration and creativity.",
      reasons: [
        { text: "If you want to share a story or recommend a book." },
        { text: "If you are looking to collaborate on creative or research projects." },
        { text: "If you just want to say hi and be part of the community." }
      ],
      boxTitle: "Sfumato Society",
      boxBody: "Join our mailing list to receive our chronicles, visual essays, and Sunday recommendations.",
      boxCta: "Subscribe"
    }
  };

  const t = COPY[lang];

  return (
    <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "64px 24px 0", width: "100%" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "56px", alignItems: "start", paddingBottom: "96px" }}>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "460px" }}>
          <p style={{ fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#555555" }}>{t.ctKicker}</p>
          <h1 style={{ margin: 0, fontSize: "clamp(28px, 4.4vw, 44px)", fontWeight: 600, lineHeight: 1.15, letterSpacing: "-0.01em", textWrap: "pretty" }}>
            {t.ctTitle}
          </h1>
          <div style={{ display: "flex", flexDirection: "column", marginTop: "24px" }}>
            {t.reasons.map((r, i) => (
              <div key={i} style={{ padding: "16px 0", borderTop: "1.5px solid #1A1A1A", fontSize: "14px", lineHeight: 1.6, color: "#555555" }}>
                {r.text}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <a
            href="mailto:hola@sfumatosociety.com"
            className="hover:bg-[#FAFAFA]"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              padding: "24px",
              border: "1.5px solid #1A1A1A",
              borderRadius: "24px",
              transition: "background .24s ease",
            }}
          >
            <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#555555" }}>Email</span>
            <span style={{ fontSize: "clamp(16px, 2.2vw, 20px)", fontWeight: 500, wordBreak: "break-word" }}>hola@sfumatosociety.com</span>
          </a>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "16px" }}>
            <a
              href="https://www.instagram.com/sfumatosociety/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-[#FAFAFA]"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                padding: "20px 22px",
                border: "1.5px solid #1A1A1A",
                borderRadius: "24px",
                transition: "background .24s ease",
              }}
            >
              <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#555555" }}>Instagram</span>
              <span style={{ fontSize: "15px", fontWeight: 500 }}>@sfumatosociety ↗</span>
            </a>
            <a
              href="https://sfumatosociety.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-[#FAFAFA]"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                padding: "20px 22px",
                border: "1.5px solid #1A1A1A",
                borderRadius: "24px",
                transition: "background .24s ease",
              }}
            >
              <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#555555" }}>Substack</span>
              <span style={{ fontSize: "15px", fontWeight: 500 }}>sfumatosociety ↗</span>
            </a>
          </div>
          <div
            style={{
              padding: "28px",
              border: "1.5px solid #1A1A1A",
              borderRadius: "24px",
              background: "#FAFAFA",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <p style={{ fontSize: "16px", fontWeight: 500 }}>{t.boxTitle}</p>
            <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#555555", textWrap: "pretty" }}>{t.boxBody}</p>
            <a
              href="/#subscribe"
              className="hover:bg-[#1A1A1A] hover:text-[#FFFFFF]"
              style={{
                alignSelf: "flex-start",
                marginTop: "6px",
                display: "inline-flex",
                alignItems: "center",
                height: "44px",
                padding: "0 26px",
                fontSize: "14px",
                fontWeight: 500,
                color: "#1A1A1A",
                background: "#FFFFFF",
                border: "1.5px solid #1A1A1A",
                borderRadius: "999px",
                transition: "background .24s ease, color .24s ease",
              }}
            >
              {t.boxCta}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
