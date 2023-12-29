import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
