import React, { Suspense, lazy } from "react";
import Carousel from "../shared/carousel";
import PlacesInfo from "../sections/placesInfoSection";
import CalenderSection from "../sections/calenderSection";
// const CalenderSection = lazy(() => import("../sections/calenderSection"));
import CompanyInfoSection from "../sections/companyInfoSection";
import MapSection from "../sections/mapSection";
import OfferSection from "../sections/offerSection";
import PopularCitiesSection from "../sections/popularCitiesSection";
import AssociatesSection from "../sections/associatesSection";
import AboutCard from "../shared/aboutCard";
import AboutCardSection from "../sections/aboutCardSection";
import { useTranslations } from "next-intl";
const slidesData = [
  {
    imageUrl:
      "https://image-prod.iol.co.za/16x9/800/SA-COMPANY-allows-travellers-to-book-a-flight-for-immediate-travel-without-worrying-about-footing-the-bill-right-away-Picture-Pexels?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/6e1abcd3-8cec-5e55-83d8-1bc7a652c905&operation=CROP&offset=0x0&resize=1920x1080",
  },
  {
    imageUrl: "https://pic.tripcdn.com/flight_v2/h5/bg_flights.png",
  },
];

const HomePage = () => {
  const headT = useTranslations("header");
  const t = useTranslations("nav");
  const navContent = {
    home: t("home"),
    flights: t("flights"),
    hotels: t("hotels"),
    taxi: t("taxi"),
    carRentals: t("carRentals"),
    tours: t("tours"),
    eventsTickets: t("eventsTickets"),
    visaApplications: t("visaApplications"),
  };
  const headContent = {
    title1: headT("title1"),
    title2: headT("title2"),
  };
  return (
    <>
      <div className="w-full h-full">
        {/* slider */}
        <div style={{ height: "100vh" }}>
          <Carousel
            slidesData={slidesData}
            headContent={headContent}
            navContent={navContent}
          />
        </div>
        {/* places info section */}
        <PlacesInfo />
        {/* Flifgt calender section */}
        {/* <Suspense fallback={<div>Loading...</div>}>
          <CalenderSection />
        </Suspense> */}
        <CalenderSection />
        {/* Company Info section */}
        <CompanyInfoSection />
        {/* map Section */}
        <AboutCardSection />
        <MapSection />
        {/* Offer section */}
        <OfferSection />
        {/* Popular cities */}
        <PopularCitiesSection />
        {/* Associates Section */}
        <AssociatesSection />
        {/* <div style={{ height: "480px" }}>
          <Carousel slidesData={slidesData} />
        </div> */}
      </div>
    </>
  );
};

export default HomePage;
