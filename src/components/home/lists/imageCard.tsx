import React from "react";

const ImageCard = ({ src }: any) => {
  return (
    <>
      <div className="lg:max-w-40 md:max-w-40 w-full bg-white my-6 mx-2">
        <img className="" src={src} alt="" />
      </div>
    </>
  );
};

export default ImageCard;
