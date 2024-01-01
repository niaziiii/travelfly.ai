import React from "react";
import RatingCard from "../shared/ratingCard";
const TourAndActivitySecion = () => {
  return (
    <>
      <div className="mx-auto my-8 max-w-screen-lg">
        <div className="mb-2">
          <h2 className="  text-2xl text-red-700 font-yes">Save Up To 40%</h2>
          <h2 className=" font-extrabold text-7xl text-black font-serif">
            Tour And Activity
          </h2>
        </div>
        <div className=" flex flex-wrap justify-between align-middle">
          <RatingCard />
          <RatingCard />
          <RatingCard />
          <RatingCard />
          <RatingCard />
          <RatingCard />
        </div>
      </div>
    </>
  );
};

export default TourAndActivitySecion;
