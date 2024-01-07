import React from "react";

const CitiesCard = () => {
  return (
    <>
      <div className="my-2 mx-1 lg:max-w-72 rounded-md md:max-w-56 sm:w-full xs:w-full bg-white border border-gray-200  shadow ">
        <div className="relative">
          <img
            className="rounded-t-md w-full h-44"
            src="https://static.saltinourhair.com/wp-content/uploads/2022/02/06165037/paris.jpg"
            alt=""
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold shadow-sm">
            <h2 className="text-3xl">City</h2>
            <h4>Description</h4>
          </div>
        </div>
        <div className="py-2">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-2">
                    Origin
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Price Form
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white ">
                  <td className="px-4 py-2">Laptop</td>
                  <td className="px-4 py-2">$2999</td>
                </tr>
                <tr className="bg-white ">
                  <td className="px-4 py-2">Laptop PC</td>
                  <td className="px-4 py-2">$1999</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="px-4 py-2">Accessories</td>
                  <td className="px-4 py-2">$99</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="px-4 py-2">Accessories</td>
                  <td className="px-4 py-2">$99</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="px-4 py-2">Accessories</td>
                  <td className="px-4 py-2">$99</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CitiesCard;
