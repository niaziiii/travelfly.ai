"use client";
import React from "react";
import Carousel from "../shared/carousel";
import PlacesCard from "./lists/placesCard";
import Select from "../shared/select";
import Checkbox from "../shared/checkbox";
import Range from "../shared/range";
import InfoCard from "./lists/infoCard";
import "react-calendar/dist/Calendar.css";
import MultiRangeSlider from "../shared/range";
import Calender from "../shared/calender";
import Link from "next/link";
import ImageCard from "./lists/imageCard";
import CitiesCard from "./lists/citiesCard";

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
              <MultiRangeSlider
                min={0}
                max={30}
                onChange={({ min, max }) =>
                  console.log(`min = ${min}, max = ${max}`)
                }
              />
            </div>
            <div className="w-3/4">
              <div className="w-full p-8">
                <Calender />
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
        <div className="lg:mx-16 xl:mx-16 md my-8">
          <div className="mb-2">
            <h2 className="  text-xl text-red-700 font-yes">Our trending</h2>
            <h2 className=" font-extrabold text-5xl text-black font-serif">
              Best Offers
            </h2>
          </div>
          <div className=" flex flex-wrap justify-between align-middle">
            <PlacesCard />
            <PlacesCard />
            <PlacesCard />
            <PlacesCard />
          </div>
          <div className="w-full text-center my-4">
            <Link
              href={
                "https://www.klook.com/en-US/city/131-abu-dhabi-things-to-do/?aid=48171&_currency=USD&aff_adid=782508&aff_klick_id=55284354358-48171-782508-db012f3c-1c0a-4ef8-844b-8052fe864f73&aff_kepler_id=10da2094-48d3-4238-9fcf-facc4a7576d3&aff_exp_id=&aff_group_id=&spm=Widget.DynamicWidget_TTD_ViewMore&clickId=faa8673019&aff_label1=abu&aff_label2=&aff_label3=&aff_pid=&aff_sid=&utm_medium=affiliate-alwayson&utm_source=non-network&utm_campaign=48171&utm_term=&utm_content="
              }
            >
              <button
                type="button"
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-red-600 focus:outline-none bg-white rounded-lg border border-red-600 hover:bg-red-700 hover:text-white focus:z-10  "
              >
                View more
              </button>
            </Link>
            <p className="text-sm">Powered by KLOOK</p>
          </div>
        </div>
        <div className="lg:mx-16 xl:mx-16 md my-8">
          <div className="mb-2">
            <h2 className="  text-xl text-red-700 font-yes">Book ticket</h2>
            <h2 className=" font-extrabold text-5xl text-black font-serif">
              Popular Cities
            </h2>
          </div>
          <div className=" flex flex-wrap justify-between align-middle">
            <CitiesCard />
            <CitiesCard />
            <CitiesCard />
            <CitiesCard />
            <CitiesCard />
            <CitiesCard />
            <CitiesCard />
            <CitiesCard />
          </div>
        </div>
        <div className="lg:mx-16 xl:mx-16 md my-8">
          <div className="mb-2">
            <h2 className="  text-xl text-red-700 font-yes">
              Our Best Traveling
            </h2>
            <h2 className=" font-extrabold text-5xl text-black font-serif">
              Associates
            </h2>
          </div>
          <div className=" flex flex-wrap justify-between align-middle">
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
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
