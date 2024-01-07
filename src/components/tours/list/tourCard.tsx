import React from "react";

const TourCard = () => {
  return (
    <>
      <div className="my-2 mx-1 lg:max-w-md md:max-w-56 sm:w-full xs:w-full bg-white border border-gray-100 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-sm w-full"
            src="https://cdn.getyourguide.com/img/location/5335968996a56.jpeg/92.jpg"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Hong Kong
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            As one of the world most densely populated areas, Hong Kong, located
            on China south coast is fascinating and frenetic. Hong Kong is a
            city of contrasts where cultures collide...
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-600 rounded-lg border-spacing-3 border-red-600 hover:bg-red-100 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            Find Things to Do
          </a>
        </div>
      </div>
    </>
  );
};

export default TourCard;
