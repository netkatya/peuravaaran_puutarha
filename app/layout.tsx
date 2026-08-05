import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CallButton from "./components/CallButton/CallButton";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://peuravaaran-puutarha.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Peuravaaran Puutarha Oy",
    template: "%s | Peuravaaran Puutarha Oy",
  },

  description:
    "Suomalaisia tomaatteja rakkaudesta luontoon. Kotimaiset tomaatit, erikoistomaatit, paprikat ja kurkut luonnonvalolla kasvatettuina Sauvossa.",

  keywords: [
    "Peuravaaran Puutarha",
    "tomaatit",
    "erikoistomaatit",
    "paprika",
    "kurkku",
    "Sauvo",
    "kasvihuone",
    "kotimaiset vihannekset",
    "Suomi",
  ],

  authors: [
    {
      name: "Peuravaaran Puutarha Oy",
    },
  ],

  creator: "Peuravaaran Puutarha Oy",
  publisher: "Peuravaaran Puutarha Oy",

  openGraph: {
    type: "website",
    locale: "fi_FI",
    url: siteUrl,
    siteName: "Peuravaaran Puutarha Oy",
    title: "Peuravaaran Puutarha Oy",
    description: "Suomalaisia tomaatteja rakkaudesta luontoon.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Peuravaaran Puutarha Oy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Peuravaaran Puutarha Oy",
    description: "Suomalaisia tomaatteja rakkaudesta luontoon.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fi"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <CallButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
