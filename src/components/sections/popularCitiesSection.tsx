import React from "react";
import CitiesCard from "../home/lists/citiesCard";
const PopularCitiesSection = () => {
  return (
    <>
      {" "}
      <div className="mx-auto my-8 max-w-screen-lg">
        <div className="mb-2">
          <h2 className="  text-2xl text-red-700 font-yes">Book ticket</h2>
          <h2 className=" font-extrabold text-7xl text-black font-serif">
            Popular Cities
          </h2>
        </div>
        <div className=" flex flex-wrap justify-between align-middle">
          <CitiesCard />
          <CitiesCard />
          <CitiesCard />
          <CitiesCard />
          <CitiesCard />
          <CitiesCard />
          <CitiesCard />
          <CitiesCard />
        </div>
      </div>
    </>
  );
};

export default PopularCitiesSection;
