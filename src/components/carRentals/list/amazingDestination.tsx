import ImageCard from "@/components/home/lists/imageCard";
import React from "react";
import CarCard from "./carCard";
const AmazingDestination = () => {
  return (
    <>
      <div className="mx-auto my-8 max-w-screen-lg">
        <div className="mb-2">
          <h2 className="  text-2xl  text-black  font-yes">Choose your</h2>
          <h2 className=" font-extrabold text-7xl text-red-700 font-serif">
            Amazing Destinations
          </h2>
        </div>
        <div className=" flex flex-wrap justify-between align-middle">
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
        </div>
      </div>
    </>
  );
};

export default AmazingDestination;
