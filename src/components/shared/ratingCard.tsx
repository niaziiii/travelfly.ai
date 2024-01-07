import React from "react";

const RatingCard = ({ src }: { src: string }) => {
  return (
    <>
      <div className="lg:max-w-lg md:max-w-md sm:w-full xs:w-full my-4 ">
        <iframe
          style={{ minHeight: "450vh" }}
          className="w-full"
          scrolling="no"
          src={src}
        ></iframe>
      </div>
    </>
  );
};

export default RatingCard;
