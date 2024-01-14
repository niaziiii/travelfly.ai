import React from "react";
import ImageCard from "../home/lists/imageCard";
const AssociatesSection = () => {
  return (
    <>
      {" "}
      <div className="mx-auto my-8 max-w-screen-lg">
        <div className="mb-2">
          <h2 className="lg:text-2xl text-md md:text-2xl text-red-700 font-yes">
            Our Best Traveling
          </h2>
          <h2 className=" font-extrabold lg:text-7xl md:text-7xl text-3xl text-black font-serif">
            Associates
          </h2>
        </div>
        <div className=" flex flex-wrap justify-between align-middle">
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </div>
      </div>
    </>
  );
};

export default AssociatesSection;
