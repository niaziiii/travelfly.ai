import EventsPage from "@/components/events";
import { Metadata } from "next/types";
import React from "react";

export const metadata: Metadata = {
  title: "Trevel.ai",
  description: "The About Us Page",
};

const Page = () => {
  return (
    <div>
      <EventsPage />
    </div>
  );
};

export default Page;
