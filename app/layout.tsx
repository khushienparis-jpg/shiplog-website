import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Instrument_Serif } from "next/font/google";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shiplog | No code personalisation that takes action",
  description:
    "Shiplog makes personalisation no code, beautiful and easy. AI agents find the next best action for every customer and take it, across in app and email, with your whole team in the loop.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable}`}>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <AnnouncementBar />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
