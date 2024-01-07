const AboutCard = () => {
  return (
    <>
      <div className="lg:w-80 md:w-72 sm:w-full xs:w-full m-2 px-4 py-6 bg-red-600 shadow-xl border border-gray-200 rounded-lg flex">
        <div className="w-16">
          <img
            src="https://travelfly.ai/wp-content/uploads/2023/12/booking-1.png"
            alt=""
          />
        </div>
        <div className="ml-3 text-white">
          <h5 className=" text-2xl font-bold ">Need a help </h5>
          <p className="mb-2 font-normal">Go to this step by step</p>
        </div>
      </div>
    </>
  );
};
export default AboutCard;
