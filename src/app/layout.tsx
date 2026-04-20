import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "EuroTap — Namještaj po mjeri · Tešanj",
  description: "Ručna izrada namještaja od masivnog drveta. EuroTap Tešanj — 15+ godina iskustva, 200+ realizovanih projekata. Kuhinje, sofe, stolice, hotelski namještaj.",
  keywords: ["namještaj", "Tešanj", "Bosna", "masivno drvo", "ručna izrada", "sofe", "stolice", "hotelski namještaj"],
  openGraph: {
    title: "EuroTap — Namještaj po mjeri",
    description: "Ručna izrada namještaja od masivnog drveta. 15+ godina iskustva.",
    type: "website",
    locale: "bs_BA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bs"
      className={`${cormorant.variable} ${jost.variable} antialiased`}
    >
      <body className="min-h-full overflow-x-hidden">{children}</body>
    </html>
  );
}
