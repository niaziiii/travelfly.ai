"use client";
import FlightSearch from "@/components/shared/flightSearch";
import HotelSearch from "@/components/shared/hotelsSearch";
import Trip from "@/components/shared/tripSearch";
import { Link } from "@/navigation";
import React, { useState } from "react";

const TabComponent = ({ tabs }: any) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex">
        {tabs.map((tab: any, index: any) => (
          <Link
            href={tab.link}
            key={index}
            className={`${
              index === activeTab
                ? "bg-red-600 text-white"
                : "bg-gray-100 text-gray-800"
            } py-1 px-4 rounded-t-lg font-semibold flex justify-center items-center text-center text-md w-full focus:outline-none mr-1`}
          >
            {tab.name}
          </Link>
        ))}
      </div>
      <div className="mt-0.5 max-w-screen-lg">
        {/* {tabContents[activeTab]} */}
        <HotelSearch />
      </div>
    </div>
  );
};
export default TabComponent;
