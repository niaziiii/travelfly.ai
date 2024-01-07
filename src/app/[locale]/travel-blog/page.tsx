import TraveBlogPage from "@/components/traveBlog";
import { Metadata } from "next/types";
import React from "react";

export const metadata: Metadata = {
  title: "Trevel.ai",
  description: "The About Us Page",
};

const Page = () => {
  return (
    <div>
      <TraveBlogPage />
    </div>
  );
};

export default Page;
