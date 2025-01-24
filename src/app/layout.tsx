import type { Metadata } from "next";
import Sidebar from '@/components/sidebar'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MobileNavbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard du cri de minuit",
  description: "Tableau de bord du cri de minuit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen">
      {/* Sidebar visible uniquement sur les écrans medium et plus */}
      <div className="hidden md:block w-64 border-r">
        <Sidebar className="w-full" />
      </div>

      {/* Contenu principal */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>

      {/* Navbar mobile visible uniquement sur les petits écrans */}
      <div className="md:hidden">
        <MobileNavbar />
      </div>
    </div>
      </body>
    </html>
  );
}
