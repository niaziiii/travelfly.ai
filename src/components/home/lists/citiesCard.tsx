"use client";
import React, { useEffect } from "react";

const CitiesCard = ({ index, name }: any) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://tp.media/content?currency=usd&trs=294439&shmarker=516658&origin=${name}&locale=en_us&limit=6&powered_by=true&primary=%23B9A0FD&promo_id=7292&campaign_id=200`;
    script.async = true;
    script.charset = "utf-8";

    const widgetCityCard: any = document.getElementById(
      `widget-city-card-${index}`
    );

    // Append the script to the DOM
    widgetCityCard.appendChild(script);

    // Cleanup script when component is unmounted
    return () => {
      if (widgetCityCard.contains(script)) {
        widgetCityCard.removeChild(script);
      }
    };
  }, []);
  return (
    <>
      <div className="my-2 mx-1 lg:max-w-72 rounded-md md:max-w-72 w-full bg-white border border-gray-200  shadow ">
        <div id={`widget-city-card-${index}`}></div>
      </div>
    </>
  );
};

export default CitiesCard;
