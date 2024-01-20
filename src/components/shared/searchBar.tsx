"use client";
import React, { useState } from "react";
import SearchableDropdown from "./searchableDropdown";
import { useRouter } from "@/navigation";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const handleSearch = () => {
    if (searchQuery) {
      router.push(`/best-prices/${searchQuery}`);
    }
  };

  return (
    <>
      <div className="w-lg flex items-center p-7 my-4 rounded-xl bg-white">
        <SearchableDropdown
          placeHolder="Searching  all cheap prices through the web in one place "
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
        />
        <div className="mx-2 ">
          <button
            onClick={handleSearch}
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
