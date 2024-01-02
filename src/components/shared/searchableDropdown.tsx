"use client";
import React, { useState } from "react";

const SearchableDropdown = () => {
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
      <div className="relative flex flex-col w-full mt-1 border-collapse rounded-xl ">
        <input
          className="flex items-center h-12 p-3 text-lg border-b border-gray-200 hover:bg-gray-200 rounded-lg  text-black focus:border-none focus:outline-red-700"
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search…"
        />
        <div className=" bg-white rounded-md overflow-auto max-h-60 absolute top-12 w-full">
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
