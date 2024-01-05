import CarRentalPage from "@/components/carRentals";
import { Metadata } from "next/types";
import React from "react";

export const metadata: Metadata = {
  title: "Trevel.ai",
  description: "The About Us Page",
};

const Page = () => {
  return (
    <div>
      <CarRentalPage />
    </div>
  );
};

export default Page;
