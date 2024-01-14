import React from "react";
import CitiesCard from "../home/lists/citiesCard";
const PopularCitiesSection = () => {
  const cityIndices = [
    { index: 1, name: "LON" },
    { index: 2, name: "DXB" },
    { index: 3, name: "PAR" },
    { index: 4, name: "AYT" },
    { index: 5, name: "JKT" },
    { index: 6, name: "BKK" },
  ];
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
        <div className="flex flex-wrap justify-between align-middle">
          {/* Use .map() to render CitiesCard components dynamically */}
          {cityIndices.map((city) => (
            <CitiesCard
              key={city.index}
              index={city.index.toString()}
              name={city.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularCitiesSection;
