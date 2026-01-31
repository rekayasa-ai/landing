import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "RekayasaAI - Platform AI Engineering #1 di Indonesia",
  description: "Belajar AI Engineering dari nol sampai mahir. Kurikulum terstruktur, komunitas supportive, dan semuanya 100% gratis.",
  keywords: ["AI", "Artificial Intelligence", "AI Engineering", "Indonesia", "Belajar AI", "Machine Learning"],
  authors: [{ name: "RekayasaAI" }],
  openGraph: {
    title: "RekayasaAI - Platform AI Engineering #1 di Indonesia",
    description: "Belajar AI Engineering dari nol sampai mahir. Kurikulum terstruktur, komunitas supportive, dan semuanya 100% gratis.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} antialiased bg-white min-h-screen`}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

