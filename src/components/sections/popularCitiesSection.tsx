import React from "react";
import CitiesCard from "../home/lists/citiesCard";
const PopularCitiesSection = () => {
  return (
    <>
      {" "}
      <div className="mx-auto my-8 max-w-screen-lg">
        <div className="mb-2">
          <h2 className=" lg:text-2xl text-md md:text-2xl text-red-700 font-yes">
            Book ticket
          </h2>
          <h2 className=" font-extrabold lg:text-7xl md:text-7xl text-3xl text-black font-serif">
            Popular Cities
          </h2>
        </div>
        <div className=" flex flex-wrap justify-between align-middle">
          <CitiesCard index="1" />
          <CitiesCard index="2" />
          <CitiesCard index="3" />
          <CitiesCard index="4" />
          <CitiesCard index="5" />
          <CitiesCard index="6" />
        </div>
      </div>
    </>
  );
};

export default PopularCitiesSection;
