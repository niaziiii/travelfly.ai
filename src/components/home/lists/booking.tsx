import React from "react";

const BookingCard = () => {
  return (
    <>
      <div className="my-2 mx-1 lg:max-w-80  md:max-w-80 sm:w-full xs:w-full ">
        <iframe
          className="w-full"
          style={{ minHeight: 350 }}
          src="https://www.booking.com/flexiproduct.html?product=dfl2&w=300&h=350&lang=en&aid=2407849&target_aid=2407849&selected_currency=USD&dest_id=-1603135&dest_type=city&fid=1704557580971&"
        ></iframe>
      </div>
    </>
  );
};

export default BookingCard;
