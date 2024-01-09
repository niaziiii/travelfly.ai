"use client";
import React, { useState } from "react";
interface SearchProps {
  placeHolder?: string;
}

const SearchableDropdown = ({ placeHolder }: SearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
  ];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        <div className=" bg-white rounded-lg shadow-lg overflow-y-auto z-10 max-h-60 absolute top-12 w-full">
          {searchQuery === ""
            ? null
            : filteredItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center p-2 text-gray-950 text-lg hover:bg-gray-200"
                >
                  {item}
                </li>
              ))}
        </div>
      </div>
    </>
  );
};

export default SearchableDropdown;
