"use client";
import React, { useState } from "react";
// import { useTranslation } from "react-i18next";

const NavBar = ({ content }: any) => {
  // const { t } = useTranslation();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const [isMobilenavOpen, setMobilenavOpen] = useState(false);
  const toggleDropdown = () => {
    setMobilenavOpen(!isMobilenavOpen);
  };
  const toggleChildDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };
  return (
    <>
      <nav className="bg-white border-gray-200 sticky top-0 z-40">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://travelfly.ai/wp-content/uploads/2023/12/TravelFly-1-1536x459.png"
              className="h-12"
              alt="Travelfly Logo"
            />
          </a>
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-dropdown"
            aria-expanded={isMobilenavOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isMobilenavOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 "
                  aria-current="page"
                >
                  {content.home}
                </a>
              </li>

              <li>
                <a
                  href="/flights"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 "
                >
                  Flights
                </a>
              </li>
              <li>
                <a
                  href="/hotels"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 "
                >
                  Hotels
                </a>
              </li>
              <li>
                <a
                  href="/car-rentals"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 "
                >
                  Car Rentals
                </a>
              </li>
              <li>
                <a
                  href="/taxi"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 "
                >
                  Taxi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 "
                >
                  Tours
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 "
                >
                  Events & Tickets
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 "
                >
                  Visa Applications
                </a>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  onClick={toggleChildDropdown}
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 md:w-auto "
                >
                  Travel Blog
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transition-transform ${
                      isDropdownVisible ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdownNavbar"
                  className={`z-10 ${
                    isDropdownVisible ? "" : "hidden"
                  } absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
