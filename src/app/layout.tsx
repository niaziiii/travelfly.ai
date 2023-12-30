import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/shared/navbar";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import Carousel from "@/components/shared/carousel";

export const metadata: Metadata = {
  title: "Trevel.ai",
  description: "The Home Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
