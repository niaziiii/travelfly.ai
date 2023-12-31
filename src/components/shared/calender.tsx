"use client";
import React, { useRef } from "react";
import { Scheduler } from "@aldabil/react-scheduler";

const Calendar = () => {
  const calendarRef = useRef(null);
  console.log(calendarRef);

  return (
    <>
      <Scheduler
        ref={calendarRef}
        view="month"
        height={400}
        disableViewNavigator={true}
        editable={false}
        deletable={false}
        events={[
          {
            event_id: 1,
            title: "Event 1",
            start: new Date("2024/1/1 09:30"),
            end: new Date("2024/1/1 10:30"),
          },
          {
            event_id: 2,
            title: "Event 2",
            start: new Date("2024/3/3 09:30"),
            end: new Date("2024/3/3 10:30"),
          },
        ]}
      />
    </>
  );
};

export default Calendar;
