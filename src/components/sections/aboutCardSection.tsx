import React from "react";
import AboutCard from "../shared/aboutCard";
const AboutCardSection = () => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto my-8 flex flex-wrap justify-around items-center">
        <AboutCard />
        <AboutCard />
        <AboutCard />
      </div>
    </>
  );
};

export default AboutCardSection;
