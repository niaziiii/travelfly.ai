import React from "react";

const DestinationCard = () => {
  return (
    <>
      <div className="max-w-80 m-2 bg-white border border-gray-300 rounded-b-2xl shadow-xl dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className=""
            src="https://travelfly.ai/wp-content/uploads/2023/12/New-York-1024x724-1.jpg"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              New York
            </h5>
          </a>
        </div>
      </div>
    </>
  );
};

export default DestinationCard;
