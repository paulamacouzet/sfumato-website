"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../components/LanguageContext";
import { HomeValues } from "../components/HomeValues";
import { HomeSubscribe } from "../components/HomeSubscribe";

export default function Home() {
  const { lang, t } = useLanguage();

  const COPY = {
    es: {
      m1a: "A veces el propósito parece difícil de encontrar. Aquí creemos que se trata menos de encontrarlo y más de ",
      m1b: "crearlo.",
      m2: "Sfumato es un espacio para eso: rituales para mirar el arte más de cerca, historias de personas que se atrevieron a crear diferente, y conversaciones con mentes creativas (¡incluso a través de los siglos!) que nos recuerdan que nosotros también podemos.",
      m3: "Esta es la Sfumato Society: aprender el arte de vivir profundamente, desacelerar y de crear ",
      c1q: "¿Quién está diseñando el futuro (versión optimista)?",
      c1p1: "Conversaciones con quienes convierten ideas audaces en ecosistemas culturales vivos, festivales y proyectos de regeneración patrimonial.",
      c1p2: "Artistas, arquitectos, emprendedores y ciudadanos demostrando que la cultura tiene el poder de redefinir el espacio que habitamos y hacia dónde vamos.",
      c2q: "¿Con quién querrías tomar un café (vivo o muerto)?",
      c2p1: "Ficciones sonoras y paseos imposibles donde me encuentro con artistas, escritoras y mentes del pasado para divagar sobre la vida, el arte y las ciudades que habitaron.",
      c2note: "Nota: Escribo con rigor histórico absoluto en los datos, pero con total libertad creativa para el encuentro contemporáneo.",
      c3q: "Un ritual semanal para entrenar el ojo.",
      c3p1: "Cada domingo, una obra elegida para hacernos mejores preguntas frente al arte:",
      c3all: "¿Qué nos revela esta pieza? ¿Cuál es su historia? ¿Qué nos cuenta sobre quiénes somos?",
      societyTitle: "Una comunidad que escucha, crea y se contagia.",
      societyBody: "Sfumato Society es la comunidad alrededor del podcast: recibes los ensayos, participas en los retos creativos del domingo y decides quién viene al podcast después.",
      societyP1: "Audios inmersivos",
      societyP2: "Ejercicios creativos",
      societyP3: "Notas de la comunidad",
      societyCta: "Únete a Sfumato Society",
      date: "Octubre 2026",
    },
    en: {
      m1a: "Purpose can feel hard to find sometimes. Here, we believe it's less about finding it and more about ",
      m1b: "creating it.",
      m2: "Sfumato is a space for that: rituals for looking closer at art, stories of people who dared to create differently, and conversations with creative minds (even across centuries!) that remind us we can too.",
      m3: "This is the Sfumato Society: learning the art of living deeply, slowing down, and creating in ",
      c1q: "Who is designing the future (the optimistic version)?",
      c1p1: "Conversations with the people turning bold ideas into living cultural ecosystems, festivals and heritage regeneration projects.",
      c1p2: "Artists, architects, entrepreneurs and citizens proving that culture has the power to redefine the space we inhabit — and where we are headed.",
      c2q: "Who would you have coffee with (alive or dead)?",
      c2p1: "Sound fictions and impossible walks where I meet artists, writers and minds of the past to wander through life, art and the cities they lived in.",
      c2note: "Note: I write with absolute historical rigour in the facts, and total creative freedom in the contemporary encounter.",
      c3q: "A weekly ritual to train the eye.",
      c3p1: "Every Sunday, one artwork chosen to help us ask better questions in front of art:",
      c3all: "What does this piece reveal? What is its story? What does it tell us about who we are?",
      societyTitle: "A community that listens, creates and spreads.",
      societyBody: "Sfumato Society is the community around the podcast: you get the essays, take part in the Sunday creative challenges and decide who comes on the podcast next.",
      societyP1: "Immersive audio",
      societyP2: "Creative exercises",
      societyP3: "Community notes",
      societyCta: "Join Sfumato Society",
      date: "October 2026",
    }
  };

  const copy = COPY[lang];

  const cardsData = [
    { img: `/assets/poster-cronicas-${lang}.webp`, q: copy.c1q, p1: copy.c1p1, p2: copy.c1p2, italic: false },
    { img: `/assets/poster-citas-${lang}.webp`, q: copy.c2q, p1: copy.c2p1, p2: copy.c2note, italic: true },
    { img: `/assets/poster-domingo-${lang}.webp`, q: copy.c3q, p1: copy.c3p1, p2: copy.c3all, italic: false },
  ];

  return (
    <main style={{ width: "100%" }}>
      {/* Hero Section */}
      <section style={{ width: "100%", minHeight: "100vh", display: "flex", alignItems: "center", background: "#f8f6ee", color: "#1A1A1A", padding: "72px 0 88px" }}>
        <div style={{ width: "100%", maxWidth: "1320px", boxSizing: "border-box", margin: "0 auto", padding: "0 28px" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "100%", maxWidth: "640px", height: "clamp(88px,15vw,150px)", position: "relative" }}>
              <Image src="/assets/sfumato-hero.webp" alt="SFUMATO podcast" fill style={{ objectFit: "contain" }} priority />
            </div>

            <div style={{ maxWidth: "640px", marginTop: "48px", display: "flex", flexDirection: "column", gap: "16px", textAlign: "center", fontSize: "15px", lineHeight: 1.7, color: "#3A3A3A", textWrap: "pretty" }}>
              <p style={{ color: "#1A1A1A", fontWeight: 500 }}>
                {copy.m1a}<strong style={{ fontWeight: 600 }}>{copy.m1b}</strong>
              </p>
              <p>{copy.m2}</p>
              <p>
                {copy.m3}
                {lang === "es" ? (
                  <span style={{ fontWeight: 600, letterSpacing: "0.02em" }}>
                    <span style={{ color: "#E4572E" }}>a</span> <span style={{ color: "#F3A712" }}>t</span>
                    <span style={{ color: "#2A9D8F" }}>o</span><span style={{ color: "#3D5A80" }}>d</span>
                    <span style={{ color: "#9B5DE5" }}>o</span> <span style={{ color: "#E4572E" }}>c</span>
                    <span style={{ color: "#F3A712" }}>o</span><span style={{ color: "#2A9D8F" }}>l</span>
                    <span style={{ color: "#3D5A80" }}>o</span><span style={{ color: "#9B5DE5" }}>r</span>!
                  </span>
                ) : (
                  <span style={{ fontWeight: 600, letterSpacing: "0.02em" }}>
                    <span style={{ color: "#E4572E" }}>f</span><span style={{ color: "#F3A712" }}>u</span>
                    <span style={{ color: "#2A9D8F" }}>l</span><span style={{ color: "#3D5A80" }}>l</span>{" "}
                    <span style={{ color: "#9B5DE5" }}>c</span><span style={{ color: "#E4572E" }}>o</span>
                    <span style={{ color: "#F3A712" }}>l</span><span style={{ color: "#2A9D8F" }}>o</span>
                    <span style={{ color: "#3D5A80" }}>r</span>!
                  </span>
                )}
              </p>
            </div>
            <p style={{ marginTop: "56px", fontStyle: "italic", fontSize: "19px", letterSpacing: "0.01em", color: "#555555" }}>{copy.date}</p>
          </div>
        </div>
      </section>

      {/* Series Section */}
      <section id="series" style={{ width: "100%", background: "#FFFFFF", padding: "104px 0 0" }}>
        <div style={{ width: "100%", maxWidth: "1320px", boxSizing: "border-box", margin: "0 auto", padding: "0 28px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {lang === "es" ? (
              <div style={{ width: "100%", maxWidth: "520px", height: "clamp(52px,8vw,80px)", position: "relative" }}>
                <Image src="/assets/series-title-es.webp" alt="Series de Sfumato" fill style={{ objectFit: "contain" }} />
              </div>
            ) : (
              <div style={{ width: "100%", maxWidth: "360px", height: "clamp(72px,11vw,110px)", position: "relative" }}>
                <Image src="/assets/series-title-en.webp" alt="The Series" fill style={{ objectFit: "contain" }} />
              </div>
            )}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px", marginTop: "48px", alignItems: "stretch" }}>
            {cardsData.map((c, i) => (
              <article
                key={i}
                className="group hover:-translate-y-2 transition-transform duration-300"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "24px",
                  border: "1.5px solid #1A1A1A",
                  borderRadius: "24px",
                  background: "#FFFFFF",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                    borderRadius: "16px",
                    backgroundImage: `url('${c.img}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <p style={{ marginTop: "28px", fontSize: "15px", lineHeight: 1.6, fontWeight: 500, textAlign: "center", textWrap: "pretty" }}>{c.q}</p>
                <p style={{ marginTop: "16px", fontSize: "14px", lineHeight: 1.6, color: "#555555", textAlign: "center", textWrap: "pretty" }}>{c.p1}</p>
                <p
                  style={{
                    marginTop: "16px",
                    fontSize: c.italic ? "13px" : "14px",
                    lineHeight: 1.6,
                    color: "#555555",
                    fontStyle: c.italic ? "italic" : "normal",
                    textAlign: "center",
                    textWrap: "pretty",
                  }}
                >
                  {c.p2}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <HomeSubscribe />

      {/* Values Section */}
      <HomeValues />

      {/* Society Section */}
      <section id="the-society" style={{ width: "100%", background: "#f8f6ee", color: "#1A1A1A", padding: "96px 0 104px" }}>
        <div style={{ width: "100%", maxWidth: "1320px", boxSizing: "border-box", margin: "0 auto", padding: "0 28px" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto 40px", textAlign: "center", display: "flex", flexDirection: "column", gap: "12px" }}>
            {lang === "es" ? (
              <>
                <p style={{ margin: 0, fontSize: "14px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8A8A8A", textAlign: "center" }}>Si llegaste hasta aquí, eres de los nuestros…</p>
              </>
            ) : (
              <>
                <p style={{ margin: 0, fontSize: "14px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8A8A8A", textAlign: "center" }}>If you made it this far, you're one of us…</p>
              </>
            )}
          </div>
          <div
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              border: "1.5px solid #1A1A1A",
              borderRadius: "28px",
              padding: "clamp(48px,8vw,64px) clamp(32px,6vw,64px) clamp(32px,6vw,48px)",
              background: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              textAlign: "center",
            }}
          >
            <div style={{ position: "relative", width: "100%", maxWidth: "340px", height: "clamp(120px, 16vw, 180px)", margin: "0 auto" }}>
              <img src="/assets/tribu_stars/tribu_1.png" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", animation: "sfTribuStars 1.4s infinite steps(1)", animationDelay: "0s" }} alt="" />
              <img src="/assets/tribu_stars/tribu_2.png" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", animation: "sfTribuStars 1.4s infinite steps(1)", animationDelay: "0.35s", opacity: 0 }} alt="" />
              <img src="/assets/tribu_stars/tribu_3.png" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", animation: "sfTribuStars 1.4s infinite steps(1)", animationDelay: "0.7s", opacity: 0 }} alt="" />
              <img src="/assets/tribu_stars/tribu_4.png" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", animation: "sfTribuStars 1.4s infinite steps(1)", animationDelay: "1.05s", opacity: 0 }} alt="" />
            </div>
            <h2 style={{ margin: "12px auto 0", textAlign: "center", maxWidth: "620px", fontSize: "clamp(24px,3.4vw,34px)", fontWeight: 600, lineHeight: 1.25, letterSpacing: "-0.01em", textWrap: "pretty" }}>{copy.societyTitle}</h2>
            <p style={{ margin: "0 auto", textAlign: "center", maxWidth: "560px", fontSize: "15px", lineHeight: 1.7, color: "#555555", textWrap: "pretty" }}>{copy.societyBody}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", width: "100%", maxWidth: "620px", margin: "16px auto 16px auto" }}>
              <span className="flex items-center justify-center text-center px-2 py-2.5 border-[1.5px] border-[#1A1A1A] rounded-full text-[13px] hover:bg-[#bdac40] hover:border-[#bdac40] hover:text-[#ffffff] transition-all duration-300 cursor-default bg-transparent">{copy.societyP1}</span>
              <span className="flex items-center justify-center text-center px-2 py-2.5 border-[1.5px] border-[#1A1A1A] rounded-full text-[13px] hover:bg-[#718650] hover:border-[#718650] hover:text-[#ffffff] transition-all duration-300 cursor-default bg-transparent">{copy.societyP2}</span>
              <span className="flex items-center justify-center text-center px-2 py-2.5 border-[1.5px] border-[#1A1A1A] rounded-full text-[13px] hover:bg-[#b14a8b] hover:border-[#b14a8b] hover:text-[#ffffff] transition-all duration-300 cursor-default bg-transparent">{copy.societyP3}</span>
            </div>
            <a
              href="#subscribe"
              className="hover:bg-transparent hover:text-[#1A1A1A]"
              style={{
                margin: "0 auto",
                marginTop: "8px",
                display: "inline-flex",
                alignItems: "center",
                height: "48px",
                padding: "0 32px",
                fontSize: "14px",
                fontWeight: 500,
                color: "#FFFFFF",
                background: "#1A1A1A",
                border: "1.5px solid #1A1A1A",
                borderRadius: "999px",
                transition: "background .24s ease, color .24s ease",
              }}
            >
              {copy.societyCta}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
