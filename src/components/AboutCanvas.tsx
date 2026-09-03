"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";

const ARTWORKS = [
  {
    id: "vangogh_chair",
    src: "/assets/obj-vangogh-chair.webp",
    author: "Vincent van Gogh (1889)",
    title: "The Bedroom",
    link: "https://www.vangoghmuseum.nl/en/collection/s0047v1962",
    top: "18%", left: "12%",
    questionEs: "¿Qué significa «hogar»?",
    answerEs: "He vivido en muchos países (+ de 10!). Pero el hogar siempre está donde habitan las raíces más profundas: en los sabores, la gente, la memoria y la familia. En mi México lindo y querido.",
    questionEn: "What does \"home\" mean?",
    answerEn: "I’ve lived in many countries (+10!). But home is always where the deepest roots live: in the flavors, the people, the memory, and family. In my beautiful and beloved Mexico.",
    delay: "-1.2s", duration: "6.5s"
  },
  {
    id: "dali",
    src: "/assets/obj-dali.webp",
    author: "Salvador Dalí (1931)",
    title: "The Persistence of Memory",
    link: "https://www.moma.org/collection/works/79018",
    top: "32%", left: "20%",
    questionEs: "¿Mi relación con el tiempo?",
    answerEs: "A veces soy demasiado consciente de su fragilidad. Pero siempre trato de regresar a las enseñanzas budistas para vivir en el presente.",
    questionEn: "My relationship with time?",
    answerEn: "Sometimes I'm too aware of its fragility. But I always try to go back to Buddhist teachings to live in the present.",
    delay: "-3.4s", duration: "5.2s"
  },
  {
    id: "rosa",
    src: "/assets/obj-cows.webp",
    author: "Rosa Bonheur (1876)",
    title: "Highland cattle",
    link: "https://www.bonhams.com/auction/23159/lot/19/rosa-bonheur-french-1822-1899-highland-cattle-25-12-x-32-34in-647-x-83cm/",
    top: "44%", left: "10%",
    questionEs: "¿Algo que me recuerda la grandeza de Dios?",
    answerEs: "Los seres vivos. Observar la variedad de formas, colores, texturas y sonidos de los animales y las plantas. Me recuerda que hay un gran artista detrás de todo.",
    questionEn: "Something that reminds me of God's greatness?",
    answerEn: "Living things. Looking at the variety of shapes, colors, textures, and sounds in animals and plants. It reminds me there's a great artist behind it all.",
    delay: "-0.5s", duration: "7.1s"
  },
  {
    id: "leonora1",
    src: "/assets/obj-leonora-minotauro.webp",
    author: "Leonora Carrington (1953)",
    title: "And Then We Saw the Daughter of the Minotaur",
    link: "https://www.moma.org/collection/works/393384",
    top: "48%", left: "29%",
    questionEs: "¿Qué parte de mí sigue siendo un misterio?",
    answerEs: "Absolutamente todo. Cuanto más vivo y me conozco, más me doy cuenta de cuántas versiones mías me faltan por descubrir.",
    questionEn: "What part of me remains a mystery?",
    answerEn: "Absolutely everything. The more I live and get to know myself, the more I realize how many versions of me are yet to be discovered.",
    delay: "-2.1s", duration: "4.8s"
  },
  {
    id: "frida",
    src: "/assets/obj-frida.webp",
    author: "Frida Kahlo (1954)",
    title: "Viva la vida, sandías",
    link: "https://www.museofridakahlo.org.mx/frida/?lang=en",
    top: "60%", left: "17%",
    questionEs: "¿Qué es la alegría para mí?",
    answerEs: "Compartir un instante de contemplación: un atardecer, detenerse a mirar un bicho colorido o compartir recetas.",
    questionEn: "What is joy to me?",
    answerEn: "Sharing a moment of contemplation: a sunset, stopping to look at a colorful bug, or cooking something yummy together.",
    delay: "-5.0s", duration: "6.2s"
  },
  {
    id: "magritte",
    src: "/assets/obj-magritte.webp",
    author: "René Magritte (1964)",
    title: "Le fils de l'homme",
    link: "https://www.christies.com/en/lot/lot-1404203",
    top: "19%", left: "auto", right: "14%",
    questionEs: "¿Mi mayor miedo?",
    answerEs: "Vivir en piloto automático y olvidar detenerme a apreciar lo cotidiano.",
    questionEn: "My biggest fear?",
    answerEn: "Living on autopilot and forgetting to stop and appreciate the everyday.",
    delay: "-1.8s", duration: "5.5s"
  },
  {
    id: "remedios",
    src: "/assets/obj-remedios.webp",
    author: "Remedios Varo (1960)",
    title: "Mujer saliendo del psicoanalista",
    link: "https://mam.inba.gob.mx/destacadas.html#obra41",
    top: "20%", left: "auto", right: "24%",
    questionEs: "¿El mayor acto de valentía?",
    answerEs: "Dejar atrás ideas heredadas y bajarle el volumen al ruido exterior para construir una voz propia (y si eso implica salir de redes sociales, que así sea).",
    questionEn: "The greatest act of courage?",
    answerEn: "Leaving inherited ideas behind and turning down the volume of the outside noise to build a voice of my own (and if that means getting off social media, so be it).",
    delay: "-4.2s", duration: "6.8s",
    customScale: 0.75
  },
  {
    id: "vangogh_irises",
    src: "/assets/obj-vangogh-irises.webp",
    author: "Vincent Van Gogh (1890)",
    title: "Irises",
    link: "https://www.vangoghmuseum.nl/en/collection/s0050v1962#details",
    top: "39%", left: "auto", right: "11%",
    questionEs: "Encuentro arte en...",
    answerEs: "Los colores de un mercado local, el proceso creativo de cocinar y el diálogo entre las formas y los sabores de un plato.",
    questionEn: "I find art in...",
    answerEn: "The colors of a local market, the creative process of cooking, and the dialogue between the shapes and flavors of a dish.",
    delay: "-0.9s", duration: "5.9s"
  },
  {
    id: "chagall",
    src: "/assets/obj-chagall.webp",
    author: "Marc Chagall (1887-1985)",
    title: "Le temps n'a point de rives",
    link: "https://www.christies.com/en/lot/lot-4277079",
    top: "47%", left: "auto", right: "28%",
    questionEs: "¿Mi mayor fascinación?",
    answerEs: "Conectar y tener largas conversaciones con personas curiosas.",
    questionEn: "My biggest fascination?",
    answerEn: "Connecting and having long conversations with curious people.",
    delay: "-3.7s", duration: "6.1s"
  },
  {
    id: "leonora2",
    src: "/assets/obj-leonora-cocodrilo.webp",
    author: "Leonora Carrington (1999)",
    title: "Cocodrilo",
    link: "https://consejoleonoracarrington.org/obra/escultura-en-bronce/cocodrilo-1999/",
    top: "56%", left: "auto", right: "16%",
    questionEs: "¿Qué me define?",
    answerEs: "\"Hay tanta diferencia entre nosotros y nosotros mismos como entre nosotros y los demás\" (Montaigne). Es decir, somos una paleta infinita de colores en constante matiz. Lo único que me define es cómo vivo el presente.",
    questionEn: "What defines me?",
    answerEn: "\"There is as much difference between us and ourselves as between us and others.\" (Montaigne). In other words, we are an infinite palette of colors in constant nuance. The only thing that defines me is how I live the present.",
    delay: "-2.5s", duration: "5.4s"
  }
];

export function AboutCanvas() {
  const { lang } = useLanguage();
  const [activeObj, setActiveObj] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveObj(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div 
      className="relative w-full h-[100vh] min-h-[800px] overflow-hidden flex flex-col md:block bg-white"
      onClick={() => setActiveObj(null)}
      style={{
        // Give space for the header
        paddingTop: "20px"
      }}
    >
      {/* Intro text */}
      <div className="md:absolute md:top-[2vh] md:left-1/2 md:-translate-x-1/2 flex flex-col items-center z-20 px-6 max-w-[540px] pointer-events-none mt-4 md:mt-0 text-center mx-auto relative">
        <div className="mb-6">
          {lang === "es" ? (
             <Image src="/assets/hola-soy-paula-es.png" alt="Hola soy Paula" width={360} height={120} className="w-auto h-14 md:h-[72px] object-contain" />
          ) : (
             <Image src="/assets/hola-soy-paula-en.png" alt="Hi I'm Paula" width={360} height={120} className="w-auto h-14 md:h-[72px] object-contain" />
          )}
        </div>
        <p className="text-[#555555] text-[15px] md:text-[16px] leading-[1.65] mb-2 text-pretty">
          {lang === "es" ? (
            <>
              Nunca me acomodó una sola etiqueta; Así que, inspirada por el espíritu del polímata renacentista, decidí aprender y crear conectando diferentes mundos.
              <br /><br />
              Soy artista, arquitecta, gestora de patrimonio y directora creativa en diseño de experiencias. Me mueve lo que surge en su intersección: el <span className="italic">placemaking</span> y la regeneración urbana, explorando cómo el arte y la cultura transforman ciudades para proyectar futuros mejores.
              <br /><br />
              Al final, como tú, soy muchas cosas a la vez.
            </>
          ) : (
            <>
              A single label never quite fit me; I prefer the spirit of the Renaissance polymath: learning and creating by connecting seemingly unrelated disciplines.
              <br /><br />
              I am an artist, architect, cultural heritage manager, and creative director in experience design. I’m driven by what emerges at their intersection: <span className="italic">placemaking</span> and urban regeneration, exploring how art and culture transform cities to shape better futures.
              <br /><br />
              In the end, just like you, I am many things at once.
            </>
          )}
        </p>
      </div>

      {/* Paula portrait */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-[75vw] max-w-[400px] md:w-[30vw] md:max-w-[480px]">
        <Image 
          src="/assets/paula-portrait.webp" 
          alt="Paula Portrait" 
          width={480} 
          height={600} 
          className="w-full h-auto object-contain block"
          style={{ marginBottom: "0px", display: "block" }} // Anclaje estricto a la base
          priority
        />
      </div>

      {/* Floating Objects Container */}
      <div className="absolute inset-0 z-30 pointer-events-none" style={{ top: "30px" }}>
        {ARTWORKS.map((art) => (
          <div
            key={art.id}
            className={`float-obj group absolute pointer-events-auto ${activeObj === art.id ? 'z-[60]' : 'z-30'}`}
            style={{
              top: art.top,
              left: art.left,
              right: art.right,
              animation: `subtle-float ${art.duration} ease-in-out ${art.delay} infinite alternate`
            }}
            onClick={(e) => {
              e.stopPropagation();
              setActiveObj(art.id === activeObj ? null : art.id);
            }}
          >
            <div className="transition-transform duration-200 group-hover:scale-[1.08]">
              <Image 
                src={art.src}
                alt={art.title}
                width={120}
                height={120}
                className="w-14 md:w-20 lg:w-24 h-auto"
                style={art.customScale ? { transform: `scale(${art.customScale})` } : undefined}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Tap Instruction (Left side of portrait) */}
      <div className="absolute bottom-[40px] md:bottom-[12vh] left-[8%] md:left-[18%] z-40 text-left max-w-[160px]">
        <p className="text-[#1A1A1A] font-medium opacity-50 text-[12px] md:text-[13px] leading-[1.4] italic">
          {lang === "es" ? (
            <>Toca los objetos para explorar mi archivo personal.</>
          ) : (
            <>Tap the objects to explore my personal archive.</>
          )}
        </p>
      </div>

      {/* CTA Secondary (Bottom Right) */}
      <a href="https://paulamacouzet.com" target="_blank" rel="noopener noreferrer" className="absolute bottom-[40px] md:bottom-[12vh] right-[8%] md:right-[18%] z-40">
        <div className="bg-white/90 backdrop-blur border-[1.5px] border-[#1A1A1A] rounded-full px-5 py-2.5 flex items-center gap-2 hover:bg-[#1A1A1A] hover:text-white transition-all duration-200 group">
          <span className="font-medium text-[0.9rem]">
            {lang === "es" ? "Explora mi trabajo" : "Explore my work"}
          </span>
          <span className="text-lg group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform">↗</span>
        </div>
      </a>

      {/* Root Modal Rendering (Fixes stacking context and float animation inheritance) */}
      {activeObj && (() => {
        const art = ARTWORKS.find(a => a.id === activeObj);
        if (!art) return null;
        return (
          <div 
            className="pop-modal fixed md:absolute bg-white p-[20px] md:p-[24px] rounded-[14px] shadow-[0_12px_24px_rgba(0,0,0,0.12)] border-[1px] border-[#1A1A1A] w-[calc(100vw-40px)] left-[20px] md:w-[280px] md:left-auto z-[100] cursor-default pointer-events-auto"
            style={{
              top: `calc(${art.top} + 48px)`, // Offset roughly to center of object
              transform: "translateY(-50%)",
              ...(art.right 
                ? { right: `calc(${art.right} + 80px)`, left: "auto" } 
                : { left: `calc(${art.left} + 80px)`, right: "auto" }),
              maxHeight: "90vh",
              overflowY: "auto"
            }}
            onClick={(e) => e.stopPropagation()}
            ref={(el) => {
              if (el && window.innerWidth > 767) {
                const rect = el.getBoundingClientRect();
                
                if (rect.top < 80) {
                  el.style.top = "80px";
                  el.style.transform = "translateY(0)";
                } 
                else if (rect.bottom > window.innerHeight - 20) {
                  el.style.top = "calc(100% - 20px)";
                  el.style.transform = "translateY(-100%)";
                }
              }
            }}
          >
            <h3 className="font-sans font-bold text-[15px] md:text-[16px] text-[#1A1A1A] mb-2 leading-tight">
              {lang === "es" ? art.questionEs : art.questionEn}
            </h3>
            <p className="font-sans font-normal text-[#333333] text-[13px] md:text-[14px] leading-[1.6] mb-4">
              {lang === "es" ? art.answerEs : art.answerEn}
            </p>
            <hr className="border-t-[1px] border-[#E0E0E0] mb-3" />
            <div className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.1em] text-[#888888] mb-1">
              {art.author}
            </div>
            <a 
              href={art.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-bold text-[13px] md:text-[14px] text-[#1A1A1A] underline underline-offset-[3px] hover:text-[#555555] transition-colors inline-block"
            >
              {art.title}
            </a>
          </div>
        );
      })()}
    </div>
  );
}
