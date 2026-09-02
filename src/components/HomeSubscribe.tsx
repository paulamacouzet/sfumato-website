"use client";

import React, { useState } from "react";

export function HomeSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const lang = typeof window !== 'undefined' ? localStorage.getItem("sfumato-lang") : "es";
  
  const COPY = {
    es: {
      joinTitle: "Únete a The Sfumato Society",
      joinSub: "Recibe crónicas, entrevistas y reflexiones para inspirar tu proceso creativo.",
      emailPlaceholder: "Tu mejor correo electrónico...",
      subscribe: "Suscribirme",
      sending: "Enviando...",
      thanks: "¡Gracias por unirte!",
      emailError: "Hubo un error. Intenta de nuevo.",
    },
    en: {
      joinTitle: "Join The Sfumato Society",
      joinSub: "Receive chronicles, interviews, and reflections to inspire your creative process.",
      emailPlaceholder: "Your best email...",
      subscribe: "Subscribe",
      sending: "Sending...",
      thanks: "Thank you for joining!",
      emailError: "There was an error. Please try again.",
    }
  };
  
  const t = COPY[lang === "en" ? "en" : "es"];

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setStatus("loading");
    
    const body = new URLSearchParams({
      email: email.trim(),
      first_url: "https://sfumatosociety.substack.com",
      domain: "sfumatosociety.substack.com"
    });
    
    try {
      await fetch("https://sfumatosociety.substack.com/api/v1/free", {
        method: "POST",
        mode: "no-cors",
        body
      });
      setStatus("done");
      setEmail("");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section style={{ width: "100%", background: "#f8f6ee", color: "#1A1A1A", marginTop: "104px", padding: "88px 0" }}>
      <div style={{ width: "100%", maxWidth: "1320px", boxSizing: "border-box", margin: "0 auto", padding: "0 28px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div id="subscribe" style={{ width: "100%", maxWidth: "480px", textAlign: "center" }}>
            <h2 style={{ margin: 0, fontSize: "20px", fontWeight: 600, color: "#1A1A1A" }}>{t.joinTitle}</h2>
            <p style={{ margin: "12px 0 0", fontSize: "14px", lineHeight: 1.7, color: "#555555", textWrap: "pretty" }}>{t.joinSub}</p>
            
            {status === "idle" && (
              <form onSubmit={subscribe} style={{ marginTop: "24px", display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  style={{
                    flex: "1 1 240px",
                    minWidth: 0,
                    height: "48px",
                    padding: "0 18px",
                    fontFamily: "var(--font-poppins)",
                    fontSize: "14px",
                    color: "#1A1A1A",
                    background: "#FFFFFF",
                    border: "1.5px solid #1A1A1A",
                    borderRadius: "999px",
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  className="hover:bg-transparent hover:text-[#1A1A1A]"
                  style={{
                    height: "48px",
                    padding: "0 28px",
                    fontFamily: "var(--font-poppins)",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#FFFFFF",
                    background: "#1A1A1A",
                    border: "1.5px solid #1A1A1A",
                    borderRadius: "999px",
                    cursor: "pointer",
                    transition: "background .24s ease, color .24s ease",
                  }}
                >
                  {t.subscribe}
                </button>
              </form>
            )}

            {status === "loading" && (
              <p style={{ marginTop: "28px", fontSize: "14px", color: "#555555", animation: "sfFadeIn .3s ease both" }}>{t.sending}</p>
            )}

            {status === "done" && (
              <p style={{ marginTop: "28px", fontSize: "15px", fontWeight: 500, animation: "sfFadeIn .3s ease both" }}>{t.thanks}</p>
            )}

            {status === "error" && (
              <p style={{ marginTop: "16px", fontSize: "13px", color: "#F3A712" }}>{t.emailError}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
