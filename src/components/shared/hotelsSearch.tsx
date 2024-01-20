"use client";
import React, { useEffect } from "react";

const HotelSearch = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://tp.media/content?currency=usd&trs=294450&shmarker=516658&show_hotels=true&powered_by=false&locale=en&searchUrl=search.hotellook.com&color_button=%23C3210Dff&color_icons=%23C3210DFF&secondary=%23FFFFFF&dark=%23262626&light=%23FFFFFF&special=%23C4C4C4&color_focused=%23C3210DFF&border_radius=14&no_labels=true&plain=true&promo_id=7873&campaign_id=101";
    script.async = true;
    script.charset = "utf-8";

    const widgetotelSearch: any =
      document.getElementById(`widget-hotel-search`);

    // Append the script to the DOM
    widgetotelSearch.appendChild(script);

    // Cleanup script when component is unmounted
    return () => {
      if (widgetotelSearch.contains(script)) {
        widgetotelSearch.removeChild(script);
      }
    };
  }, []);
  return (
    <>
      <div>
        <div id={`widget-hotel-search`}></div>
      </div>
    </>
  );
};

export default HotelSearch;
