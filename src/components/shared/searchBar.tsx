import React from "react";
import SearchableDropdown from "./searchableDropdown";

const SearchBar = () => {
  return (
    <>
      <div className="w-lg flex items-center p-7 my-4 rounded-xl bg-white">
        <SearchableDropdown placeHolder="Searching  all cheap prices through the web in one place " />
        <div className="mx-2 ">
          <button
            type="button"
            className="py-3 px-5 text-sm font-medium text-red-600 focus:outline-none bg-white rounded-lg border border-red-600 hover:bg-red-700 hover:text-white focus:z-10  "
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
