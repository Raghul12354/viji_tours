import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Viji Tours & Travels",
  description:
    "Explore exciting travel destinations with Viji Tours & Travels. Plan your perfect trip with our expert travel services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${inter.className} bg-custom_bg`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
