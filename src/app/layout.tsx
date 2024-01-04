import Head from "next/head";
import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/layout/navbar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BackToTopButton from "@/components/shared/backtoTop";
import "../language/i18n";

export const metadata: Metadata = {
  title: "Trevelfly",
  description: "The Home Landing Page",
  icons: {
    icon: "/travelfly.png",
  },
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
        <BackToTopButton />
      </body>
    </html>
  );
}
