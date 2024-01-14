import React from "react";
import ImageCard from "../home/lists/imageCard";
const AssociatesSection = () => {
  const imageSources = [
    "https://travelfly.ai/wp-content/uploads/2023/12/ho-1-300x131.png",
    "https://travelfly.ai/wp-content/uploads/2023/12/1200px-Aviasales_logo_horizontal-1-300x69-1.png",
    "https://travelfly.ai/wp-content/uploads/2023/12/economy-bookings-logo-vector-1-300x167-1.png",
    "https://travelfly.ai/wp-content/uploads/2023/12/kiwitaxi-1-1.png",
    "https://travelfly.ai/wp-content/uploads/2023/12/download.png",
    "https://travelfly.ai/wp-content/uploads/2023/12/images-300x131.png",
    "https://travelfly.ai/wp-content/uploads/2023/12/1571736263_bikesbooking_mid.png",
    "https://travelfly.ai/wp-content/uploads/2023/12/Trip-logo-h-default-lg-removebg-preview.png",
    "https://travelfly.ai/wp-content/uploads/2023/12/0x0-1024x239-1.png",
    "https://travelfly.ai/wp-content/uploads/2023/12/Amazon-logo-1024x430-1.png",
  ];

  return (
    <>
      {" "}
      <div className="mx-auto my-8 max-w-screen-lg">
        <div className="mb-2">
          <h2 className="lg:text-2xl text-md md:text-2xl text-red-700 font-yes">
            Our Best Traveling
          </h2>
          <h2 className=" font-extrabold lg:text-7xl md:text-7xl text-3xl text-black font-serif">
            Associates
          </h2>
        </div>
        <div className=" flex flex-wrap justify-between align-middle">
          {imageSources.map((src, index) => (
            <ImageCard key={index} src={src} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AssociatesSection;
