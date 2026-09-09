"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../components/LanguageContext";
import { HomeValues } from "../components/HomeValues";
import { HomeSubscribe } from "../components/HomeSubscribe";

export default function Home() {
  const { lang, t } = useLanguage();

  const COPY = {
    es: {
      heroP1: <>A veces nuestro propósito parece difícil de encontrar. Aquí creemos que se trata menos de encontrarlo y más de <b>crearlo...</b></>,
      heroP2: "Sfumato es un espacio para eso: rituales para mirar el arte más de cerca, historias de personas que se atrevieron a crear diferente, y conversaciones con mentes creativas (¡incluso a través de los siglos!) que nos recuerdan que nosotros también podemos.",
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
      swipeHint: "Desliza para explorar →",
    },
    en: {
      heroP1: <>Purpose can feel hard to find sometimes. Here, we believe it’s less about finding it and more about <b>creating it...</b></>,
      heroP2: "Sfumato is a space for that: rituals for looking closer at art, stories of people who dared to create differently, and conversations with creative minds (even across centuries!) that remind us we can too.",
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
      swipeHint: "Swipe to explore →",
    }
  };

  const copy = COPY[lang];

  const cardsData = [
    { img: `/assets/poster-cronicas-${lang}.webp`, q: copy.c1q, p1: copy.c1p1, p2: copy.c1p2, italic: false },
    { img: `/assets/poster-citas-${lang}.webp`, q: copy.c2q, p1: copy.c2p1, p2: copy.c2note, italic: true },
    { img: `/assets/poster-domingo-${lang}.webp`, q: copy.c3q, p1: copy.c3p1, p2: copy.c3all, italic: false },
  ];

  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const heroHeight = rect.height;
      const scrollableDistance = heroHeight - window.innerHeight;
      
      if (scrollableDistance > 0) {
        const progress = Math.max(0, Math.min(1, -rect.top / scrollableDistance));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate Opacities for 3-step animation
  const p1Opacity = scrollProgress < 0.25 ? 1 : Math.max(0, 1 - (scrollProgress - 0.25) * 10);
  
  const fade_in_p2 = Math.min(1, (scrollProgress - 0.3) * 10);
  const fade_out_p2 = scrollProgress < 0.6 ? 1 : Math.max(0, 1 - (scrollProgress - 0.6) * 10);
  const p2Opacity = Math.min(Math.max(0, fade_in_p2), fade_out_p2);
  
  const dateOpacity = scrollProgress < 0.66 ? 0 : Math.min(1, (scrollProgress - 0.66) * 10);
  
  const hero2Opacity = Math.max(0, 1 - Math.abs(scrollProgress - 0.33) * 10) + Math.max(0, 1 - Math.abs(scrollProgress - 0.66) * 10);

  return (
    <main style={{ width: "100%" }}>
      {/* Hero Section */}
      <section ref={heroRef} className="mt-[-80px] md:mt-[-90px]" style={{ width: "100%", height: "300vh", position: "relative" }}>
        
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-start bg-[#f8f6ee] pt-[160px] md:pt-[180px] pb-[40px]">
          
          {/* Background Collages */}
          {/* Collage 1 */}
          <div className="absolute inset-0 pointer-events-none z-0 hidden md:block">
            <Image src="/assets/collage-desktop1.png" alt="Sfumato Collage" fill style={{ objectFit: "cover", objectPosition: "bottom center" }} priority />
          </div>
          <div className="absolute bottom-0 w-full aspect-[393/468] md:h-full md:inset-0 pointer-events-none z-0 block md:hidden">
            <Image src="/assets/collage-mobile1.1.png" alt="Sfumato Collage" fill style={{ objectFit: "cover", objectPosition: "bottom center" }} priority />
          </div>
          
          {/* Collage 2 (Flashes briefly during transitions) */}
          <div 
            className="absolute inset-0 pointer-events-none z-0 hidden md:block"
            style={{ opacity: hero2Opacity, transition: "opacity 0.1s ease-out" }}
          >
            <Image src="/assets/collage-desktop2.png" alt="Sfumato Collage 2" fill style={{ objectFit: "cover", objectPosition: "bottom center" }} priority />
          </div>
          <div 
            className="absolute bottom-0 w-full aspect-[393/468] md:h-full md:inset-0 pointer-events-none z-0 block md:hidden"
            style={{ opacity: hero2Opacity, transition: "opacity 0.1s ease-out" }}
          >
            <Image src="/assets/collage-mobile1.2.png" alt="Sfumato Collage 2" fill style={{ objectFit: "cover", objectPosition: "bottom center" }} priority />
          </div>

          <div style={{ width: "100%", maxWidth: "1320px", boxSizing: "border-box", margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 10 }}>
            <div 
              style={{ display: "flex", flexDirection: "column", alignItems: "center", opacity: mounted ? 1 : 0, transition: "opacity 1s ease-out" }}
            >
              
              {/* New Hero Logo */}
              <div className="w-[80vw] max-w-[640px] md:max-w-[760px] h-[clamp(100px,25vw,220px)] relative">
                <Image src="/assets/HeroLogo.png" alt="SFUMATO podcast" fill style={{ objectFit: "contain" }} priority />
              </div>

              {/* Texts Container (Relative for absolute stacking) */}
              <div 
                className="relative w-full max-w-[380px] mx-auto mt-[24px] text-center font-medium text-balance" 
                style={{ 
                  minHeight: "120px", 
                  opacity: mounted ? 1 : 0, 
                  transition: "opacity 1s ease-out 0.4s",
                  fontSize: "clamp(0.85rem, 3.5vw, 1rem)",
                  lineHeight: 1.4,
                  color: "#1A1A1A"
                }}
              >
                
                {/* Paragraph 1 */}
                <p 
                  className="absolute inset-x-0 top-0" 
                  style={{ 
                    opacity: p1Opacity, 
                    transition: "opacity 0.1s ease-out", 
                    pointerEvents: scrollProgress < 0.5 ? "auto" : "none",
                    textShadow: "0 0 20px #f8f6ee, 0 0 40px #f8f6ee"
                  }}
                >
                  {copy.heroP1}
                </p>

                {/* Paragraph 2 */}
                <p 
                  className="absolute inset-x-0 top-0" 
                  style={{ 
                    opacity: p2Opacity, 
                    transition: "opacity 0.1s ease-out", 
                    pointerEvents: scrollProgress >= 0.3 && scrollProgress <= 0.6 ? "auto" : "none",
                    textShadow: "0 0 20px #f8f6ee, 0 0 40px #f8f6ee"
                  }}
                >
                  {copy.heroP2}
                </p>
                
                {/* Launch Date */}
                <div 
                  className="absolute inset-x-0 top-0 flex justify-center"
                  style={{ 
                    opacity: dateOpacity, 
                    transform: `scale(${0.9 + dateOpacity * 0.1}) translateY(${20 * (1 - dateOpacity)}px)`,
                    transition: "opacity 0.1s ease-out, transform 0.1s ease-out", 
                    pointerEvents: scrollProgress > 0.6 ? "auto" : "none" 
                  }}
                >
                  <div className="w-[320px] h-[70px] md:w-[540px] md:h-[120px] relative">
                    <Image 
                      src={lang === "es" ? "/assets/Octubre2026_ESP_v2.png" : "/assets/October2026_ENG_v2.png"} 
                      alt={copy.date} 
                      fill 
                      style={{ objectFit: "contain" }} 
                    />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Series Section */}
      <section id="series" style={{ width: "100%", background: "#FFFFFF", padding: "64px 0 0" }}>
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
          
          {/* Mobile Swipe Hint */}
          <div className="flex justify-center mt-3 md:hidden">
            <p className="text-[13px] text-[#888888] italic font-medium">
              {copy.swipeHint}
            </p>
          </div>

          <div className="flex md:grid md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] flex-nowrap overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-6 md:gap-8 mt-8 md:mt-12 items-stretch pb-6 md:pb-0 hide-scrollbar" style={{ WebkitOverflowScrolling: "touch" }}>
            {cardsData.map((c, i) => (
              <article
                key={i}
                className="group hover:-translate-y-2 transition-transform duration-300 flex-none w-[85vw] max-w-[340px] md:w-auto md:max-w-none snap-center md:snap-align-none flex flex-col items-center p-6 border-[1.5px] border-[#1A1A1A] rounded-[24px] bg-white"
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
      <section id="the-society" style={{ width: "100%", background: "#f8f6ee", color: "#1A1A1A", padding: "64px 0 80px" }}>
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
              padding: "clamp(32px,6vw,64px) clamp(16px,4vw,64px) clamp(24px,6vw,48px)",
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
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px", width: "100%", maxWidth: "620px", margin: "16px auto 16px auto" }}>
              <span className="flex items-center justify-center text-center px-4 py-2.5 border-2 md:border-[1.5px] border-[#bdac40] md:border-[#1A1A1A] rounded-full text-[13px] bg-transparent font-medium text-[#bdac40] md:text-[#1A1A1A] md:hover:bg-[#bdac40] md:hover:border-[#bdac40] md:hover:text-[#ffffff] transition-all duration-300 cursor-default">{copy.societyP1}</span>
              <span className="flex items-center justify-center text-center px-4 py-2.5 border-2 md:border-[1.5px] border-[#718650] md:border-[#1A1A1A] rounded-full text-[13px] bg-transparent font-medium text-[#718650] md:text-[#1A1A1A] md:hover:bg-[#718650] md:hover:border-[#718650] md:hover:text-[#ffffff] transition-all duration-300 cursor-default">{copy.societyP2}</span>
              <span className="flex items-center justify-center text-center px-4 py-2.5 border-2 md:border-[1.5px] border-[#b14a8b] md:border-[#1A1A1A] rounded-full text-[13px] bg-transparent font-medium text-[#b14a8b] md:text-[#1A1A1A] md:hover:bg-[#b14a8b] md:hover:border-[#b14a8b] md:hover:text-[#ffffff] transition-all duration-300 cursor-default">{copy.societyP3}</span>
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
