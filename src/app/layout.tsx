import type { Metadata } from "next";
import { Rubik, DM_Sans  } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
    variable: "--font-rubik",
    subsets: ["latin"],
    weight: ["400", "500", "700"],
})

const dmSans = DM_Sans({
    variable: "--font-dm-sans",
    subsets: ["latin"],
    weight: ["700"],
})

export const metadata: Metadata = {
  title: "Magafy",
  description: "Sua plataforma de Magamúsica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${rubik.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
