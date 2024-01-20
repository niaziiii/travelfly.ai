"use client";
import React, { useEffect } from "react";

const CarSearch = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://tp.media/content?trs=294439&shmarker=516658&locale=en&powered_by=false&border_radius=16&plain=false&show_logo=false&color_background=%23FFFFFF&color_button=%230E0D0Dff&color_text=%23000000&color_input_text=%23605F5Fff&color_button_text=%23ffffff&promo_id=4480&campaign_id=10";
    script.async = true;
    script.charset = "utf-8";

    const widgetCarSearch: any = document.getElementById(`widget-car-search`);

    // Append the script to the DOM
    widgetCarSearch.appendChild(script);

    // Cleanup script when component is unmounted
    return () => {
      if (widgetCarSearch.contains(script)) {
        widgetCarSearch.removeChild(script);
      }
    };
  }, []);
  return (
    <>
      <div className="max-w-screen-lg">
        <div id={`widget-car-search`}></div>
      </div>
    </>
  );
};

export default CarSearch;
