"use client";
import React, { useEffect } from "react";

const TNSearchWidget = () => {
  useEffect(() => {
    const addCss = (cssUrl: string) => {
      const fileref = document.createElement("link");
      fileref.setAttribute("rel", "stylesheet");
      fileref.setAttribute("type", "text/css");
      fileref.setAttribute("href", cssUrl);
      document.getElementsByTagName("head")[0].appendChild(fileref);
    };

    const tn_SubmitSearch_7ehx7k01tt = () => {
      const searchInput = document.getElementById(
        "txtTNSearchPhrase_7ehx7k01tt"
      ) as HTMLInputElement | null;

      if (searchInput && searchInput.value !== "") {
        window.open(
          `http://www.tkqlhce.com/click-1234567890-10796449?sid=&url=${escape(
            "https://www.ticketnetwork.com/search?q=" +
              searchInput.value +
              "&utm_source=CJ+Affiliate&utm_medium=Widget"
          )}`
        );
      }
    };

    const tn_KeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.keyCode === 13) tn_SubmitSearch_7ehx7k01tt();
    };

    addCss(
      "//fonts.googleapis.com/css?family=Open+Sans:400italic|Montserrat:700"
    );
    addCss(
      "//s3.amazonaws.com/ticketnetwork/affiliate-widget/css/tn-widget.css"
    );
    addCss("//use.fontawesome.com/releases/v5.8.1/css/all.css");

    const searchInput = document.getElementById(
      "txtTNSearchPhrase_7ehx7k01tt"
    ) as HTMLInputElement | null;

    if (searchInput) {
      searchInput.onkeypress = tn_KeyDownHandler;
    }

    const submitButton = document.getElementById("submitSearch_7ehx7k01tt");

    if (submitButton) {
      submitButton.onclick = tn_SubmitSearch_7ehx7k01tt;
    }
  }, []);

  return (
    <div className="tnSearchWidget bg-red-700 p-10 rounded-lg">
      <div className="text-2xl mb-3">Need tickets?</div>
      <div className="flex flex-col">
        <input
          className="w-96 bg-white rounded-full border-spacing-1 border-gray-700 focus:border-gray-200 text-gray-800 placeholder:text-gray-400 p-3 text-lg"
          id="txtTNSearchPhrase_7ehx7k01tt"
          type="text"
          placeholder="Search by artist, team, event, etc..."
        />
        <div className="search_button" id="submitSearch_7ehx7k01tt">
          <button
            type="button"
            className="py-4 px-10 mt-2 text-sm font-medium text-red-600 focus:outline-none bg-white rounded-full border border-red-600 hover:bg-red-200 hover:text-white focus:z-10"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default TNSearchWidget;
