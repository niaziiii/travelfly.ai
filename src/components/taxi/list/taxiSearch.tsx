"use client";
import React, { useEffect } from "react";

const TaxiSearch = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://c1.travelpayouts.com/content?currency=USD&trs=294450&shmarker=516658&language=en&theme=6&powered_by=false&promo_id=1486";
    script.async = true;
    script.charset = "utf-8";

    const widgetTaxiSearching: any = document.getElementById(
      `widget-taxi-searching`
    );

    // Append the script to the DOM
    widgetTaxiSearching.appendChild(script);

    // Cleanup script when component is unmounted
    return () => {
      // Check if the script is still present before attempting to remove it
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <div className="max-w-screen-lg">
        <div id={`widget-taxi-searching`}></div>
      </div>
    </>
  );
};

export default TaxiSearch;
