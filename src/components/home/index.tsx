import React from "react";
import Carousel from "../shared/carousel";
import PlacesCard from "./lists/placesCard";
import Select from "../shared/select";
import Checkbox from "../shared/checkbox";
import Range from "../shared/range";
import InfoCard from "./lists/infoCard";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const HomePage = () => {
  return (
    <>
      <div className="w-full h-full">
        <div style={{ height: "580px" }}>
          <Carousel />
        </div>
        <div className="lg:mx-16 xl:mx-16 md my-8">
          <div className="mb-2">
            <h2 className="  text-xl text-red-700 font-yes">Choose your</h2>
            <h2 className=" font-extrabold text-5xl text-black font-serif">
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
        <div className="lg:mx-16 xl:mx-16 md my-8 ">
          <div className="mb-2">
            <h2 className="  text-xl text-red-700 font-yes">
              Plan your journey
            </h2>
            <h2 className=" font-extrabold text-5xl text-black font-serif">
              Flight Calender
            </h2>
          </div>
          <div className="w-full flex border-2 rounded-md">
            <div className="w-1/4 border-r-2 p-4">
              <Select />
              <Select />
              <Checkbox />
              <Checkbox />
              <Range />
            </div>
            <div className="w-3/4">
              <div className="w-full">
                <Calendar className={"w-full"} />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mx-16 xl:mx-16 md my-8">
          <div className="mb-2">
            <h2 className="  text-xl text-red-700 font-yes">Abeefosika</h2>
            <h2 className=" font-extrabold text-5xl text-black font-serif">
              Why Travel With Us?
            </h2>
            <p className="my-4">
              Our Experience In The Travel Industry Has Served Our Clients Since
              1992, Spanning Over 30 Years. Consumers Have Discovered The Value
              Of Using Professional Travel Consultants In Planning Vacations. We
              Stand Behind The Products We Sell And Support You If Contingencies
              Arise!
            </p>
          </div>
          <div className=" flex flex-wrap justify-between align-middle">
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
          </div>
        </div>
        <div className="lg:mx-16 xl:mx-16 md my-8">
          <div className="mb-2">
            <h2 className="  text-xl text-red-700 font-yes">Choose your</h2>
            <h2 className=" font-extrabold text-5xl text-black font-serif">
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
        <div style={{ height: "480px" }}>
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default HomePage;
