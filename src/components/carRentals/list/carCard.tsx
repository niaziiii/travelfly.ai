import React from "react";

const CarCard = () => {
  return (
    <>
      <div className="relative">
        <h6
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold rounded-full py-10 px-6"
          style={{ background: "rgb(5, 0, 0, 0.4)" }}
        >
          Dubai
        </h6>
        <img
          className="rounded-full w-80 h-80 m-2"
          src="https://travelfly.ai/wp-content/uploads/2023/12/pexels-auto-records-10292232-1.jpg"
          alt="image description"
        />
      </div>
    </>
  );
};

export default CarCard;
