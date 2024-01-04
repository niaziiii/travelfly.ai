"use client";
import FlightSearch from "@/components/shared/flightSearch";
import HotelSearch from "@/components/shared/hotelsSearch";
import Trip from "@/components/shared/tripSearch";
import React, { useState } from "react";

const TabComponent = ({ tabs }: any) => {
  const [activeTab, setActiveTab] = useState(0);

  // Example content for each tab
  const tabContents = [
    <FlightSearch key="flightSearch" />,
    <HotelSearch key="hotelSearch" />,
    <Trip key="trip" />,
  ];

  return (
    <div>
      <div className="flex">
        {tabs.map((tab: any, index: any) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`${
              index === activeTab
                ? "bg-red-600 text-white"
                : "bg-gray-100 text-gray-800"
            } py-2 px-6 rounded-t-lg text-lg focus:outline-none mx-1`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-1 bg-white max-w-screen-lg rounded-2xl p-6">
        {tabContents[activeTab]}
      </div>
    </div>
  );
};
export default TabComponent;
