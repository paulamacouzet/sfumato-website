"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Record<string, string>;
}

const NAV = {
  es: {
    navPaula: "hola! soy Paula",
    navSeries: "series",
    navValues: "valores",
    navSociety: "the society",
    navContact: "contacto",
  },
  en: {
    navPaula: "hi! I'm Paula",
    navSeries: "series",
    navValues: "values",
    navSociety: "the society",
    navContact: "contact",
  },
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("es");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("sfumato-lang");
      if (saved === "en" || saved === "es") setLangState(saved);
    } catch (e) {}
  }, []);

  const setLang = (newLang: Language) => {
    try {
      localStorage.setItem("sfumato-lang", newLang);
    } catch (e) {}
    setLangState(newLang);
  };

  const t = NAV[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
