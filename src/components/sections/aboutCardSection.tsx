import React from "react";
import AboutCard from "../shared/aboutCard";
const AboutCardSection = () => {
  return (
    <>
      <div className="mx-auto my-8 max-w-screen-lg flex justify-between align-baseline">
        <AboutCard />
        <AboutCard />
        <AboutCard />
      </div>
    </>
  );
};

export default AboutCardSection;
