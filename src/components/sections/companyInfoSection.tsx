import React from "react";
import InfoCard from "../home/lists/infoCard";
const CompanyInfoSection = () => {
  return (
    <>
      <div className="mx-auto my-8 max-w-screen-lg">
        <div className="mb-2">
          <h2 className="  text-2xl text-red-700 font-yes">Abeefosika</h2>
          <h2 className=" font-extrabold text-7xl text-black font-serif">
            Why Travel With Us?
          </h2>
          <p className="my-4">
            Our Experience In The Travel Industry Has Served Our Clients Since
            1992, Spanning Over 30 Years. Consumers Have Discovered The Value Of
            Using Professional Travel Consultants In Planning Vacations. We
            Stand Behind The Products We Sell And Support You If Contingencies
            Arise!
          </p>
        </div>
        <div className=" flex flex-wrap justify-between align-middle">
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </div>
      </div>
    </>
  );
};

export default CompanyInfoSection;
