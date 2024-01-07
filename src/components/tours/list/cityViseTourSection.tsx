import React from "react";
import TourCard from "./tourCard";
const CityViseSection = ({ city }: { city: string }) => {
  return (
    <>
      {" "}
      <div className="mx-auto my-8 max-w-screen-lg">
        <div className="mb-2">
          <h2 className="  text-2xl text-red-700 font-yes"> Our trending</h2>
          <h2 className=" font-extrabold text-7xl text-black font-serif">
            Tours in {city}
          </h2>
        </div>
        <div className=" flex flex-wrap justify-between align-middle">
          <iframe
            className="w-full min-h-screen py-10"
            src={`https://widget.getyourguide.com/default/activities.frame?locale_code=en-US&widget=activities&number_of_items=4&partner_id=XLRMAV8&q=${city}&widget_created=1704549524378&host_font_family=Lora%2C%20serif&website=https%3A%2F%2Ftravelfly.ai%2Ftours%2F&visitor_id=925F76676C0147589055F4862AF6FCA2`}
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default CityViseSection;
