import type {Metadata} from "next";
import {DM_Sans, Rubik} from "next/font/google";
import "./globals.css";
import {AppSidebar} from "@components/AppSidebar";
import {SidebarProvider, SidebarTrigger} from "@components/Sidebar";
import {ReactQueryProvider} from "@lib/react-query-provider";
import {NuqsAdapter} from "nuqs/adapters/next";
import type {ReactNode} from "react";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Magafy",
  description: "Sua plataforma de Magamúsica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${rubik.variable} ${dmSans.variable} antialiased h-full`}
      >
        <SidebarProvider>
          <NuqsAdapter>
            <ReactQueryProvider>
              <SidebarTrigger />
              <AppSidebar />
              {children}
            </ReactQueryProvider>
          </NuqsAdapter>
        </SidebarProvider>
      </body>
    </html>
  );
}
