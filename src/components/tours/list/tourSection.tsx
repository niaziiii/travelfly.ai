import React from "react";
import TourCard from "./tourCard";
const TourSection = () => {
  return (
    <>
      {" "}
      <div className="mx-auto my-8 max-w-screen-lg">
        <div className="mb-2">
          <h2 className="  text-2xl text-red-700 font-yes"> Our trending</h2>
          <h2 className=" font-extrabold text-7xl text-black font-serif">
            City Tours
          </h2>
        </div>
        <div className=" flex flex-wrap justify-between align-middle">
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </div>
      </div>
    </>
  );
};

export default TourSection;
