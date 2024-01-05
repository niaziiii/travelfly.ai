import HomePage from "@/components/home";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Trevelfly | Home",
  description: "The Home Landing Page",
  icons: {
    icon: "/travelfly.png",
  },
};
export default function Home() {
  return (
    <>
      <main>
        <HomePage />
      </main>
    </>
  );
}
