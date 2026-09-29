import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sfumatosociety.com"),
  title: {
    default: "Sfumato Society",
    template: "%s | Sfumato Society",
  },
  description: "Un espacio para mirar el arte más de cerca, historias de personas que se atrevieron a crear diferente y conversaciones con mentes creativas.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/apple-touch-icon.png", sizes: "256x256", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "256x256" },
    ],
  },
  openGraph: {
    title: "Sfumato Society",
    description: "Un espacio para mirar el arte más de cerca, historias de personas que se atrevieron a crear diferente y conversaciones con mentes creativas.",
    url: "https://www.sfumatosociety.com",
    siteName: "Sfumato Society",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sfumato Society",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sfumato Society",
    description: "Un espacio para mirar el arte más de cerca, historias de personas que se atrevieron a crear diferente y conversaciones con mentes creativas.",
    images: ["/og-image.jpg"],
  },
};

import { Providers } from "../components/Providers";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SubscribeModal } from "../components/SubscribeModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} antialiased font-poppins`}>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <Providers>
          <Header />
          <div style={{ position: "relative", zIndex: 10, flex: "1 1 auto", display: "flex", flexDirection: "column" }}>
            {children}
          </div>
          <Footer />
          <SubscribeModal />
        </Providers>
      </body>
    </html>
  );
}
