import React from "react";

const MapSection = () => {
  return (
    <>
      {" "}
      <div className="mx-auto my-8 max-w-screen-lg">
        <div className="mb-2">
          <h2 className="  text-2xl text-red-700 font-yes">Choose your</h2>
          <h2 className=" font-extrabold text-7xl text-black font-serif">
            Perfect Route
          </h2>
        </div>
        <div className=" flex flex-wrap justify-between align-middle">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d212645.32770749403!2d73.086108!3d33.6161162!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1703943450515!5m2!1sen!2s"
            width="100%"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default MapSection;
