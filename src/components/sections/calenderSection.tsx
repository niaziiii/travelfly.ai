"use client";
import React from "react";
import Select from "../shared/select";
import Checkbox from "../shared/checkbox";
import MultiRangeSlider from "../shared/range";
import Calendar from "../shared/calender";
const CalenderSection = () => {
  return (
    <>
      <div className="mx-auto my-8 max-w-screen-lg">
        <div className="mb-2">
          <h2 className="  text-2xl text-red-700 font-yes">
            Plan your journey
          </h2>
          <h2 className=" font-extrabold text-7xl text-black font-serif">
            Flight Calender
          </h2>
        </div>
        <div className="w-full flex border-2 rounded-md">
          <div className="w-1/4 border-r-2 p-4">
            <div className="my-3">
              <Select />
            </div>
            <div className="my-3">
              <Select />
            </div>

            <Checkbox />
            <Checkbox />
            <MultiRangeSlider
              min={0}
              max={30}
              onChange={({ min, max }) =>
                console.log(`min = ${min}, max = ${max}`)
              }
            />
          </div>
          <div className="w-3/4">
            <div className="w-full p-8">
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalenderSection;
