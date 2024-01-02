"use client";
import React from "react";
import SearchableDropdown from "./searchableDropdown";
import { Button, Datepicker } from "flowbite-react";
import Select from "./select";

const FlightSearch = () => {
  return (
    <>
      <div className=" flex justify-center items-center">
        <div className="mx-1 w-40">
          <SearchableDropdown />
        </div>
        <div className="mx-1 w-40">
          <SearchableDropdown />
        </div>
        <div className="mx-1 min-w-40">
          <Datepicker />
        </div>
        <div className="mx-1 min-w-40">
          <Datepicker />
        </div>
        <div className="mx-1 min-w-40">
          <Select />
        </div>
        <div className="mx-1 ">
          <button
            type="button"
            className="py-2.5 px-5 text-sm font-medium text-red-600 focus:outline-none bg-white rounded-lg border border-red-600 hover:bg-red-700 hover:text-white focus:z-10  "
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default FlightSearch;
