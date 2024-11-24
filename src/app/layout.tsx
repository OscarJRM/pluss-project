import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext"; // Import CartProvider
import ServicesSection from "@/components/ServicesSection";
import HeroSection from "@/components/HeroSection";

// Font imports
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata
export const metadata: Metadata = {
  title: "PLUSS",
  description: "Tienes todo para tu fiesta en un solo lugar",
};

// RootLayout Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        {/* Wrap everything in CartProvider */}
        <CartProvider>
          <Navbar />
          {children}
          <HeroSection />
          <ServicesSection />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}


