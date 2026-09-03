"use client";

import React, { useState } from "react";
import { useLanguage } from "../../components/LanguageContext";

export default function Contact() {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const COPY = {
    es: {
      ctKicker: "Contacto",
      ctTitle: "Hablemos de ideas, colaboración y creatividad.",
      reasons: [
        { text: "¿Quieres proponerte (o proponer a alguien) como invitado del podcast?" },
        { text: "¿Tienes una obra para el Domingo de arte que deberíamos mirar juntos?" },
        { text: "¿Colaboraciones, prensa, festivales, alianzas culturales?" }
      ],
      boxTitle: "¿Buscas solo mantenerte cerca?",
      boxBody: "Únete a nuestra lista de correo para recibir nuestros audios inmersivos, crónicas y domingos de arte.",
      boxCta: "Únete a Sfumato Society"
    },
    en: {
      ctKicker: "Contact",
      ctTitle: "Let's talk about ideas, collaboration and creativity.",
      reasons: [
        { text: "Looking to pitch yourself or nominate a podcast guest?" },
        { text: "Have a piece for Art Sunday we should look at together?" },
        { text: "Collaborations, press, festivals, and cultural partnerships?" }
      ],
      boxTitle: "Just want to stay close?",
      boxBody: "Join our mailing list to receive our immersive audio, chronicles, and Art Sundays.",
      boxCta: "Join Sfumato Society"
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
          <button
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText("paulamacouzet@gmail.com");
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="hover:bg-[#FAFAFA] group relative text-left"
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
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
              <span style={{ fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 500, wordBreak: "break-word" }}>paulamacouzet@gmail.com</span>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 rounded-full bg-[#1A1A1A]/5 hover:bg-[#1A1A1A]/10">
                {copied ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                )}
              </div>
            </div>
            {/* Absolute invisible mailto link for SEO/crawlers/right-click */}
            <a href="mailto:paulamacouzet@gmail.com" className="absolute inset-0 opacity-0 cursor-pointer" aria-label="Send email" />
          </button>
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
