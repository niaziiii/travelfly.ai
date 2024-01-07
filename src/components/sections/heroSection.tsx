import React from "react";

const HeroSection = ({ imageUrl, heading, description, children }: any) => {
  return (
    <div
      className="bg-cover bg-center min-h-screen  flex justify-center items-center text-white overflow-hidden"
      style={{ backgroundImage: `url("${imageUrl}")` }}
    >
      <div className="text-center">
        <h1 className="text-4xl lg:text-7xl font-bold mb-4 text-shadow-lg">
          {heading}
        </h1>
        <p className="max-w-md m-auto text-lg lg:text-xl mb-6 text-shadow-md">
          {description}
        </p>
        {children}
      </div>
    </div>
  );
};

export default HeroSection;
