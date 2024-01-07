import React from "react";
import RatingCard from "../shared/ratingCard";
const link1 =
  "https://widget.getyourguide.com/default/activities.frame?locale_code=en-US&widget=activities&number_of_items=6&partner_id=XLRMAV8&q=Hawaii&widget_created=1704549524377&host_font_family=Lora%2C%20serif&website=https%3A%2F%2Ftravelfly.ai%2Ftours%2F&visitor_id=925F76676C0147589055F4862AF6FCA2";
const link2 =
  "https://widget.getyourguide.com/default/activities.frame?locale_code=en-US&widget=activities&number_of_items=6&partner_id=XLRMAV8&q=Bahamas&widget_created=1704549524378&host_font_family=Lora%2C%20serif&website=https%3A%2F%2Ftravelfly.ai%2Ftours%2F&visitor_id=925F76676C0147589055F4862AF6FCA2";
const TourAndActivitySecion = () => {
  return (
    <>
      <div className="mx-auto my-8 max-w-screen-lg">
        <div className="mb-2">
          <h2 className="  text-2xl text-red-700 font-yes">Save Up To 40%</h2>
          <h2 className=" font-extrabold text-7xl text-black font-serif">
            Tour And Activity
          </h2>
        </div>
        <div className=" flex flex-wrap justify-between align-middle">
          <RatingCard src={link1} />
          <RatingCard src={link2} />
        </div>
      </div>
    </>
  );
};

export default TourAndActivitySecion;
