import React from "react";
import ImageCard from "../home/lists/imageCard";
import DestinationCard from "../hotels/list/destinationCard";
const DestinationSection = () => {
  return (
    <>
      {" "}
      <div className="mx-auto my-8 max-w-screen-lg">
        <div className="mb-2">
          <h2 className="  text-2xl text-red-700 font-yes">Choose your</h2>
          <h2 className=" font-extrabold text-7xl text-black font-serif">
            Prefect Destination
          </h2>
        </div>
        <div className=" flex flex-wrap justify-between align-middle">
          <DestinationCard />
          <DestinationCard />
          <DestinationCard />
          <DestinationCard />
          <DestinationCard />
          <DestinationCard />
        </div>
      </div>
    </>
  );
};

export default DestinationSection;
