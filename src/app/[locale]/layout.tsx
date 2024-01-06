import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/layout/navbar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BackToTopButton from "@/components/shared/backtoTop";
import { useTranslations } from "next-intl";
// import "../language/i18n";

export const metadata: Metadata = {
  title: "Trevelfly",
  description: "The Home Landing Page",
  icons: {
    icon: "/travelfly.png",
  },
};
interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string; // Assuming locale is a string, you can adjust the type accordingly
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  const t = useTranslations("nav");
  const navContent = {
    home: t("home"),
    flights: t("flights"),
    hotels: t("hotels"),
    taxi: t("taxi"),
    carRentals: t("carRentals"),
  };
  return (
    <html lang={locale}>
      <body className="relative">
        <Header />
        <NavBar content={navContent} />
        {children}
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
