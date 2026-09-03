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
  title: "Sfumato Society",
  description: "Construir un refugio íntimo con objetos cargados de sentido.",
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
      <body className="min-h-full flex flex-col">
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
