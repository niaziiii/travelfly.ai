"use client";
import React, { useState } from "react";
interface SearchProps {
  placeHolder?: string;
  setSearchQuery?: any;
  searchQuery?: string;
}

const SearchableDropdown = ({
  placeHolder,
  setSearchQuery,
  searchQuery,
}: SearchProps) => {
  return (
    <>
      <div className="relative flex flex-col w-full border-collapse rounded-xl ">
        <input
          style={{ width: "100%" }}
          className="flex items-center w-full h-12 p-6 text-lg border-gray-200 hover:bg-gray-100 rounded-lg  text-black focus:border-none focus:ring-red-600  "
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={placeHolder || "Search…"}
        />
      </div>
    </>
  );
};

export default SearchableDropdown;
