import React from "react";

const imageUrl =
  "https://miro.medium.com/v2/resize:fit:1400/0*pF6DH6MxJHJdtfwx";
const AboutUsPage = () => {
  return (
    <>
      {/* head  */}
      <div className="w-full h-full">
        <div
          className="bg-cover bg-center min-h-72  flex justify-center items-center text-white overflow-hidden"
          style={{ backgroundImage: `url("${imageUrl}")` }}
        >
          <div className="text-center">
            <h1 className="text-4xl lg:text-7xl font-bold mb-4 text-shadow-lg">
              About Us
            </h1>
          </div>
        </div>
      </div>
      {/* content  */}
      <div className="max-w-screen-lg mx-auto my-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Travelfly</h1>
        <p className="text-gray-700 leading-relaxed">
          Travelfly is a travel meta-search site that finds and compares the
          best deals for your travels. We’re free, which means we never add
          booking fees, and we never use cookies to inflate prices. We have
          established links with many travel booking companies to save you
          valuable time researching by allowing you to compare the prices of
          every aspect of your travel with simplicity and ease to get the best
          bang for your buck. This travel reservation service is provided free
          of charge at no cost. A fresh and honest approach from Travelfly.
        </p>
        <p className="text-gray-700 mt-2 leading-relaxed">
          We don’t sell airline tickets, hotel rooms, or car rental deals – we
          simply show you the latest, most exclusive prices available and let
          you choose the deal you prefer. With just one click, you are directly
          redirected to the site of your choice where the reservation is
          completed.
        </p>
      </div>
    </>
  );
};

export default AboutUsPage;
