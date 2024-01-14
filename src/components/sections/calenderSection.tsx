"use client";
import React, { useEffect } from "react";

const CalenderSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://tp.media/content?currency=usd&trs=294439&shmarker=516658&locale=en_us&powered_by=true&one_way=false&only_direct=false&period=year&range=1%2C14&primary=%23CE1212ff&color_background=%23ffffff&dark=%23000000&light=%23FFFFFF&achieve=%23BE1B15ff&promo_id=7264&campaign_id=200";
    script.async = true;
    script.charset = "utf-8";

    const widgetContainer: any = document.getElementById("widget-container");

    // Append the script to the DOM
    widgetContainer.appendChild(script);

    // Cleanup script when component is unmounted
    return () => {
      if (widgetContainer.contains(script)) {
        widgetContainer.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <div className="lg:mx-16 my-8">
        <div className="mb-2">
          <h2 className="lg:text-2xl text-md md:text-2xl text-red-700 font-yes">
            Plan Your Journey
          </h2>
          <h2 className="font-extrabold lg:text-7xl md:text-7xl text-3xl text-black font-serif">
            Flight Calendar
          </h2>
        </div>
        <div id="widget-container"></div>
      </div>
    </>
  );
};

export default CalenderSection;
