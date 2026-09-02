"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageContext";
import Image from "next/image";

export function Header() {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(window.location.hash);
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    // Also listen to click events on links to update immediately
    const onClick = () => setTimeout(() => setHash(window.location.hash), 10);
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("click", onClick);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const getNavStyle = (path: string, sectionHash?: string) => {
    const isActive = sectionHash
      ? pathname === path && hash === sectionHash
      : pathname === path && (!hash || hash === "");

    return {
      color: isActive ? "#1A1A1A" : "#555555",
      fontWeight: isActive ? 500 : 400,
      borderBottom: isActive ? "1.5px solid #1A1A1A" : "1.5px solid transparent",
      paddingBottom: "2px",
      whiteSpace: "nowrap" as const,
    };
  };

  const getLangBtnStyle = (active: boolean) => ({
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    fontFamily: "var(--font-poppins)",
    fontSize: "inherit",
    letterSpacing: "0.04em",
    fontWeight: active ? 600 : 400,
    color: active ? "#1A1A1A" : "#555555",
    transition: "color .24s ease",
  });

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "20px 28px" }}>
        <div data-mq="desktop">
          <div
            style={{
              maxWidth: "880px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              alignItems: "center",
              minHeight: "34px",
            }}
          >
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "32px",
                paddingRight: "40px",
                fontSize: "15px",
              }}
            >
              <Link href="/about" style={getNavStyle("/about")}>
                {t.navPaula}
              </Link>
              <Link href="/#series" style={getNavStyle("/", "#series")} className="hover:text-[#1A1A1A]">
                {t.navSeries}
              </Link>
              <Link href="/#values" style={getNavStyle("/", "#values")} className="hover:text-[#1A1A1A]">
                {t.navValues}
              </Link>
            </nav>
            <Link
              href="/"
              style={{
                display: "block",
                width: "132px",
                height: "30px",
                padding: "0 8px",
                boxSizing: "content-box",
              }}
            >
              <Image
                src="/assets/sfumato-logo.webp"
                alt="SFUMATO"
                width={132}
                height={30}
                style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                priority
              />
            </Link>
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "32px",
                paddingLeft: "40px",
                fontSize: "15px",
              }}
            >
              <Link href="/#the-society" style={getNavStyle("/", "#the-society")} className="hover:text-[#1A1A1A]">
                {t.navSociety}
              </Link>
              <Link href="/contact" style={getNavStyle("/contact")}>
                {t.navContact}
              </Link>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginLeft: "8px",
                  fontSize: "13px",
                  letterSpacing: "0.04em",
                }}
              >
                <button type="button" onClick={() => setLang("es")} style={getLangBtnStyle(lang === "es")}>
                  ES
                </button>
                <span style={{ color: "#B5B5B5" }}>|</span>
                <button type="button" onClick={() => setLang("en")} style={getLangBtnStyle(lang === "en")}>
                  EN
                </button>
              </div>
            </nav>
          </div>
        </div>

        <div data-mq="mobile">
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
              }}
            >
              <Link
                href="/"
                onClick={closeMenu}
                style={{ display: "block", width: "118px", height: "26px" }}
              >
                <Image
                  src="/assets/sfumato-logo.webp"
                  alt="SFUMATO"
                  width={118}
                  height={26}
                  style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                  priority
                />
              </Link>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
                  <button type="button" onClick={() => setLang("es")} style={getLangBtnStyle(lang === "es")}>
                    ES
                  </button>
                  <span style={{ color: "#B5B5B5" }}>|</span>
                  <button type="button" onClick={() => setLang("en")} style={getLangBtnStyle(lang === "en")}>
                    EN
                  </button>
                </div>
                <button
                  type="button"
                  onClick={toggleMenu}
                  aria-label="Menu"
                  style={{
                    width: "44px",
                    height: "44px",
                    marginRight: "-10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5px",
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                >
                  <span style={{ display: "block", width: "22px", height: "1.75px", background: "#1A1A1A" }}></span>
                  <span style={{ display: "block", width: "22px", height: "1.75px", background: "#1A1A1A" }}></span>
                  <span style={{ display: "block", width: "22px", height: "1.75px", background: "#1A1A1A" }}></span>
                </button>
              </div>
            </div>
            {menuOpen && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  padding: "28px 4px 16px",
                  fontSize: "17px",
                  animation: "sfSlideDown 0.28s ease both",
                }}
              >
                <Link href="/about" onClick={closeMenu} style={{ color: "#1A1A1A" }}>
                  {t.navPaula}
                </Link>
                <Link href="/#series" onClick={closeMenu} style={{ color: "#1A1A1A" }}>
                  {t.navSeries}
                </Link>
                <Link href="/#values" onClick={closeMenu} style={{ color: "#1A1A1A" }}>
                  {t.navValues}
                </Link>
                <Link href="/#the-society" onClick={closeMenu} style={{ color: "#1A1A1A" }}>
                  {t.navSociety}
                </Link>
                <Link href="/contact" onClick={closeMenu} style={{ color: "#1A1A1A" }}>
                  {t.navContact}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
