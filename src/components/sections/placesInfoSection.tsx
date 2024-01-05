import React from "react";
import PlacesCard from "../home/lists/placesCard";
import { useTranslations } from "next-intl";
const PlacesInfo = () => {
  const t = useTranslations("index");
  return (
    <>
      <div className="mx-auto my-8 max-w-screen-lg">
        <div className="mb-2">
          <h2 className="  text-2xl text-red-700 font-yes">{t("hell")}</h2>
          <h2 className=" font-extrabold text-7xl text-black font-serif">
            Perfect Holiday
          </h2>
        </div>
        <div className=" flex flex-wrap justify-between align-middle">
          <PlacesCard />
          <PlacesCard />
          <PlacesCard />
          <PlacesCard />
          <PlacesCard />
          <PlacesCard />
          <PlacesCard />
          <PlacesCard />
        </div>
      </div>
    </>
  );
};

export default PlacesInfo;
