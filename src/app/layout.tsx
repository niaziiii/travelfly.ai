import Head from "next/head";
import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/shared/navbar";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import BackToTopButton from "@/components/shared/backtoTop";

export const metadata: Metadata = {
  title: "Trevelfly",
  description: "The Home Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/public/travelfly.png" />
      </Head>
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
