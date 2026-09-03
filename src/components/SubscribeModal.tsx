"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import Image from "next/image";

export function SubscribeModal() {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#subscribe") {
        setIsOpen(true);
        setStatus("idle");
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      } else if (window.location.hash === "#subscribe-success") {
        setIsOpen(true);
        setStatus("done");
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    };

    // Check on mount
    checkHash();

    // Check on hash changes
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setStatus("idle");
      setEmail("");
    }, 300); // reset state after animation
  };

  const COPY = {
    es: {
      joinTitle: "Únete a Sfumato Society",
      joinBody: "Este es un newsletter que te llegará cada semana para que no te pierdas el contenido en sus diferentes medios. Al unirte, te llegará un correo de bienvenida para saber más sobre cómo participar en la comunidad.",
      emailPlaceholder: "Tu mejor correo...",
      subscribe: "Suscribirme",
      sending: "Enviando...",
      successTitle: "¡La tribu Sfumato crece! 💫",
      successBody: "¡Bienvenido/a! Este es el inicio para vivir empapados de arte. En breve recibirás tu primer correo.",
      emailError: "Hubo un error. Intenta de nuevo.",
    },
    en: {
      joinTitle: "Join Sfumato Society",
      joinBody: "This is a weekly newsletter so you don't miss our content across all its mediums. Upon joining, you'll receive a welcome email with more details on how to participate in the community.",
      emailPlaceholder: "Your best email...",
      subscribe: "Subscribe",
      sending: "Sending...",
      successTitle: "The Sfumato tribe grows! 💫",
      successBody: "Welcome! This is the beginning of a life steeped in art. You will receive your first email shortly.",
      emailError: "There was an error. Please try again.",
    }
  };

  const t = COPY[lang];

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

  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      {/* Backdrop */}
      <div 
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(248, 246, 238, 0.7)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          animation: "sfFadeIn 200ms ease-out forwards",
        }}
        onClick={closeModal}
      />
      
      {/* Modal Card */}
      <div 
        className="pop-modal"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "520px",
          background: "#FFFFFF",
          border: "1.5px solid #1A1A1A",
          borderRadius: "28px",
          padding: "clamp(32px, 6vw, 48px) clamp(24px, 5vw, 40px)",
          boxShadow: "0 24px 48px rgba(0,0,0,0.06)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <button
          onClick={closeModal}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            width: "36px",
            height: "36px",
            background: "transparent",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#8A8A8A",
            transition: "color .2s ease",
          }}
          onMouseOver={(e) => e.currentTarget.style.color = "#1A1A1A"}
          onMouseOut={(e) => e.currentTarget.style.color = "#8A8A8A"}
        >
          ×
        </button>

        {status === "idle" || status === "loading" || status === "error" ? (
          <>
            <h2 style={{ margin: 0, fontSize: "clamp(24px, 3.4vw, 32px)", fontWeight: 600, color: "#1A1A1A" }}>
              {t.joinTitle}
            </h2>
            <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.7, color: "#555555", textWrap: "pretty" }}>
              {t.joinBody}
            </p>
            
            <form onSubmit={subscribe} style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholder}
                disabled={status === "loading"}
                style={{
                  width: "100%",
                  height: "54px",
                  padding: "0 20px",
                  fontFamily: "var(--font-poppins)",
                  fontSize: "15px",
                  color: "#1A1A1A",
                  background: "#FFFFFF",
                  border: "1.5px solid #1A1A1A",
                  borderRadius: "999px",
                  outline: "none",
                  textAlign: "center"
                }}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="hover:bg-transparent hover:text-[#1A1A1A]"
                style={{
                  width: "100%",
                  height: "54px",
                  fontFamily: "var(--font-poppins)",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  background: "#1A1A1A",
                  border: "1.5px solid #1A1A1A",
                  borderRadius: "999px",
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  transition: "all .24s ease",
                  opacity: status === "loading" ? 0.7 : 1,
                }}
              >
                {status === "loading" ? t.sending : t.subscribe}
              </button>
            </form>
            {status === "error" && (
              <p style={{ margin: 0, fontSize: "13px", color: "#F3A712" }}>{t.emailError}</p>
            )}
          </>
        ) : (
          <div style={{ animation: "sfFadeIn .4s ease both", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            <div style={{ width: "100%", maxWidth: "340px", aspectRatio: "4/3", position: "relative" }}>
               <Image 
                 src={lang === "en" ? "/assets/tribe-success-en.png" : "/assets/tribe-success-es.png"} 
                 alt="Tribe Success" 
                 fill 
                 style={{ objectFit: "contain" }}
               />
            </div>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.7, color: "#1A1A1A", textWrap: "pretty" }}>
              {t.successBody}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
