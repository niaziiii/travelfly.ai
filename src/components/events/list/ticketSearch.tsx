"use client";
import React, { useState } from "react";

const TNSearchWidget = () => {
  const [searchInput, setSearchInput] = useState("");

  const tn_SubmitSearch = () => {
    if (searchInput !== "") {
      window.open(
        `http://www.tkqlhce.com/click-1234567890-10796449?sid=&url=${escape(
          "https://www.ticketnetwork.com/search?q=" +
            searchInput +
            "&utm_source=CJ+Affiliate&utm_medium=Widget"
        )}`
      );
    }
  };

  const tn_KeyDownHandler = (e: any) => {
    if (e.keyCode === 13) tn_SubmitSearch();
  };

  const handleInputChange = (e: any) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="tnSearchWidget bg-red-700 p-10 rounded-lg">
      <div className="text-2xl mb-3">Need tickets?</div>
      <div className="flex flex-col">
        <input
          className="w-96 bg-white rounded-full border-spacing-1 border-gray-700 focus:border-gray-200 text-gray-800 placeholder:text-gray-400 p-3 text-lg"
          id="txtTNSearchPhrase_7ehx7k01tt"
          type="text"
          value={searchInput}
          placeholder="Search by artist, team, event, etc..."
          onChange={handleInputChange}
          onKeyPress={tn_KeyDownHandler}
        />
        <div className="search_button" id="submitSearch_7ehx7k01tt">
          <button
            type="button"
            className="py-4 px-10 mt-2 text-sm font-medium text-red-600 focus:outline-none bg-white rounded-full border border-red-600 hover:bg-red-200 hover:text-white focus:z-10"
            onClick={tn_SubmitSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default TNSearchWidget;
