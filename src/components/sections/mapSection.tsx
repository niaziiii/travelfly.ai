"use client";
import React, { useEffect } from "react";

const MapSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://tp.media/content?currency=usd&trs=294439&shmarker=516658&lat=51.51&lng=0.06&powered_by=true&search_host=www.aviasales.com%2Fsearch&locale=en&origin=LON&value_min=0&value_max=1000000&round_trip=true&only_direct=false&radius=1&draggable=true&disable_zoom=true&show_logo=false&scrollwheel=true&primary=%23B31811ff&secondary=%23DE0909ff&light=%23ffffff&width=1500&height=500&zoom=2&promo_id=4054&campaign_id=100";
    script.async = true;
    script.charset = "utf-8";

    const widgetContainer: any = document.getElementById(
      "widget-container-map"
    );

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
      <div className="mx-auto my-8 max-w-screen-lg">
        <div className="mb-2">
          <h2 className="lg:text-2xl text-md md:text-2xl text-red-700 font-yes">
            Our trending
          </h2>
          <h2 className="font-extrabold lg:text-7xl md:text-7xl text-3xl text-black font-serif">
            Best Offers
          </h2>
        </div>
        <div id="widget-container-map" className="bg-red-700"></div>
      </div>
    </>
  );
};

export default MapSection;
