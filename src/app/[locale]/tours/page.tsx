import TourPage from "@/components/tours";
import { Metadata } from "next/types";
import React from "react";

export const metadata: Metadata = {
  title: "Trevel.ai",
  description: "The About Us Page",
};

const Page = () => {
  return (
    <div>
      <TourPage />
    </div>
  );
};

export default Page;
