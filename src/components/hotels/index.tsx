import React from "react";
import Carousel from "../shared/carousel";
import MapSection from "../sections/mapSection";
import OfferSection from "../sections/offerSection";
import TourAndActivitySecion from "../sections/tourAndActivSection";
import DestinationSection from "../sections/destinationSection";
import HeroSection from "../sections/heroSection";

const imageUrl =
  "https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg";
const description =
  "World class accommodation. Discover a hotel that defines a new dimension of luxury. Once a year go someplace you’ve never been before.";
const HotelsPage = () => {
  return (
    <>
      <div className="w-full h-full">
        {/* slider */}
        <HeroSection
          imageUrl={imageUrl}
          heading="Choose Best Hotels"
          description={description}
        >
          <iframe
            className="w-screen px-8 "
            style={{ minHeight: 370 }}
            scrolling="no"
            src="https://www.booking.com/prelanding_product.html?responsive=true&widget_id=9f6c8207-7f5b-4088-be40-5f4236ae560c&aid=2265164"
          ></iframe>
        </HeroSection>
        {/* destination section */}
        <DestinationSection />
        {/* map Section */}
        <MapSection />
        {/* slider */}
        <HeroSection imageUrl={imageUrl} />
        {/* Offer section */}
        <OfferSection />
        <TourAndActivitySecion />
      </div>
    </>
  );
};

export default HotelsPage;
