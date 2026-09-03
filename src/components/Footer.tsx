"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      style={{
        position: "relative",
        zIndex: 20,
        background: "#FFFFFF",
        width: "calc(100% - 64px)",
        maxWidth: "none",
        boxSizing: "border-box",
        margin: "0 auto",
        padding: "40px 0 40px",
        borderTop: "1.5px solid #1A1A1A",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "13px",
        color: "#555555",
      }}
    >
      <span>© 2026 Sfumato Society</span>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
        <a href="mailto:paulamacouzet@gmail.com" style={{ color: "#1A1A1A" }}>
          Email
        </a>
        <Link href="/about" style={{ color: "#1A1A1A" }}>
          {t.navPaula}
        </Link>
        <Link href="/contact" style={{ color: "#1A1A1A" }}>
          {t.navContact}
        </Link>
        <a href="https://www.instagram.com/sfumatosociety/" target="_blank" rel="noopener noreferrer" style={{ color: "#1A1A1A" }}>
          Instagram
        </a>
        <a href="https://sfumatosociety.substack.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#1A1A1A" }}>
          Substack
        </a>
      </div>
    </footer>
  );
}
