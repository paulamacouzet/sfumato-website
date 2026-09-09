"use client";

import React, { useState } from "react";

export function HomeSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const lang = typeof window !== 'undefined' ? localStorage.getItem("sfumato-lang") : "es";
  
  const COPY = {
    es: {
      joinTitle: "Únete a Sfumato Society",
      joinSub: "Recibe crónicas, entrevistas y reflexiones para inspirar tu proceso creativo.",
      emailPlaceholder: "Tu mejor correo electrónico...",
      subscribe: "Suscribirme",
      sending: "Enviando...",
      thanks: "¡Gracias por unirte!",
      emailError: "Hubo un error. Intenta de nuevo.",
    },
    en: {
      joinTitle: "Join Sfumato Society",
      joinSub: "Receive chronicles, interviews, and reflections to inspire your creative process.",
      emailPlaceholder: "Your best email...",
      subscribe: "Subscribe",
      sending: "Sending...",
      thanks: "Thank you for joining!",
      emailError: "There was an error. Please try again.",
    }
  };
  
  const t = COPY[lang === "en" ? "en" : "es"];

  const subscribe = () => {
    if (!email.trim()) return;
    setStatus("done");
  };

  return (
    <section style={{ width: "100%", background: "#f8f6ee", color: "#1A1A1A", marginTop: "64px", padding: "64px 0" }}>
      <div style={{ width: "100%", maxWidth: "1320px", boxSizing: "border-box", margin: "0 auto", padding: "0 28px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div id="subscribe" style={{ width: "100%", maxWidth: "480px", textAlign: "center" }}>
            <h2 style={{ margin: 0, fontSize: "20px", fontWeight: 600, color: "#1A1A1A" }}>{t.joinTitle}</h2>
            <p style={{ margin: "12px 0 0", fontSize: "14px", lineHeight: 1.7, color: "#555555", textWrap: "pretty" }}>{t.joinSub}</p>
            
            {status === "idle" && (
              <form 
                action="https://sfumatosociety.substack.com/api/v1/free?nojs=true"
                method="post"
                target="_blank"
                onSubmit={subscribe}
                style={{ marginTop: "24px", position: "relative", display: "flex", justifyContent: "center" }}
              >
                <input type="hidden" name="first_url" value="https://sfumatosociety.substack.com" />
                <input type="hidden" name="first_referrer" value="https://sfumatosociety.substack.com" />
                <input type="hidden" name="current_url" value="https://sfumatosociety.substack.com" />
                <input type="hidden" name="current_referrer" value="https://sfumatosociety.substack.com" />
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  style={{
                    width: "100%",
                    height: "56px",
                    padding: "0 140px 0 24px",
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
                  style={{
                    position: "absolute",
                    right: "6px",
                    top: "6px",
                    height: "44px",
                    padding: "0 24px",
                    fontFamily: "var(--font-poppins)",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#f8f6ee",
                    background: "#1A1A1A",
                    border: "none",
                    borderRadius: "999px",
                    cursor: "pointer",
                    transition: "all .24s ease",
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
