import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marin Service | Yat Elektronik & İklimlendirme Çözümleri",
  description: "Lüks yatlar, yelkenliler ve gemiler için profesyonel radar entegrasyonu, marin klima / iklimlendirme servisi, periyodik bakım ve teknik destek hizmetleri.",
  keywords: ["marin servis", "yat klima", "tekne radar", "marin iklimlendirme", "yat elektronik", "tekne elektronik", "dometic yetkili servis", "webasto yat klima", "raymarine radar"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

