"use client";
import React from "react";
import dynamic from "next/dynamic";
const OsmMap = dynamic(() => import("../shared/map"), {
  ssr: false,
});

const MapSection = () => {
  return (
    <>
      {" "}
      <div className="mx-auto my-8 max-w-screen-lg">
        <div className="mb-2">
          <h2 className="  text-2xl text-red-700 font-yes">Choose your</h2>
          <h2 className=" font-extrabold text-7xl text-black font-serif">
            Perfect Route
          </h2>
        </div>
        <div className=" flex flex-wrap justify-between align-middle">
          <OsmMap />
        </div>
      </div>
    </>
  );
};

export default MapSection;
