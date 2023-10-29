"use client";

import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { useRef, useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import { DateSelectArg, EventClickArg, DatesSetArg } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import bootstrapPlugin from "@fullcalendar/bootstrap";

type Event = {
  title: string;
  start: string;
};

interface DayCellContentInfo {
  date: Date;
  dayNumberText: string;
  isPast: boolean;
  isFuture: boolean;
  isToday: boolean;
  isOther: boolean;
  resource?: any; // Replace 'any' with the actual type of your resources
}

interface DayCellDidMountInfo extends DayCellContentInfo {
  el: HTMLElement;
}

const Calendar = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isCurrentMonth, setIsCurrentMonth] = useState(true);
  const calendarRef = useRef<FullCalendar>(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    let calendarApi = calendarRef.current?.getApi();
    if (calendarApi) {
      setCurrentDate(calendarApi.getDate());
    }
  }, [calendarRef]);

  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  const handleDayCellContent = (info: DayCellContentInfo) => {
    // You can return a custom JSX component here.
    // This will be rendered inside the day cell.
    return (
      <div className="mr-6 h-0 w-0 pt-0 text-sm">{info.dayNumberText}</div>
    );
  };

  const handleDayCellDidMount = (info: DayCellDidMountInfo) => {
    // You can manipulate the DOM of the day cell here.
    // For example, you can add a class to the day cell.
    info.el.classList.add("my-custom-day-cell-class");
    if (info.date.toISOString() === new Date().toISOString().slice(0, 8)) {
      info.el.classList.add("active-day");
    }
  };

  const handleDatesSet = (dateInfo: DatesSetArg) => {
    // Calculate a date in the middle of dateInfo
    const middleDate = new Date(
      dateInfo.start.getTime() +
        (dateInfo.end.getTime() - dateInfo.start.getTime()) / 2,
    );

    setCurrentDate(middleDate);
    setIsCurrentMonth(middleDate.getMonth() === new Date().getMonth());
  };

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    setEvents([...events, { title: "New Event", start: selectInfo.startStr }]);
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    clickInfo.event.remove();
  };

  const handleNavigateToday = () => {
    let calendarApi = calendarRef.current?.getApi();
    if (calendarApi) {
      calendarApi.today();
    }
  };

  const handleNavigatePrev = () => {
    let calendarApi = calendarRef.current?.getApi();
    if (calendarApi) {
      calendarApi.prev();
    }
  };

  const handleNavigateNext = () => {
    let calendarApi = calendarRef.current?.getApi();
    if (calendarApi) {
      calendarApi.next();
    }
  };

  return (
    <div className="h-[22rem] w-full rounded-lg bg-section-light px-6 pt-2 dark:bg-section-dark">
      <div className="my-2 flex items-center justify-between">
        <span className="text-lg font-semibold capitalize text-blue-500">{`${month} ${year}`}</span>
        <div className="flex items-center gap-x-1 ">
          <button onClick={handleNavigatePrev}>
            <MdOutlineNavigateBefore size={25} />
          </button>
          {!isCurrentMonth && (
            <button className="text-[#FF5733]" onClick={handleNavigateToday}>
              Today
            </button>
          )}
          <button onClick={handleNavigateNext}>
            <MdOutlineNavigateNext size={25} />
          </button>
        </div>
      </div>
      <FullCalendar
        height="90%"
        ref={calendarRef}
        plugins={[dayGridPlugin, bootstrapPlugin]}
        themeSystem="bootstrap"
        initialView="dayGridMonth"
        events={events}
        select={handleDateSelect}
        eventClick={handleEventClick}
        headerToolbar={false}
        datesSet={handleDatesSet}
        dayCellContent={handleDayCellContent}
        dayCellDidMount={handleDayCellDidMount}
      />
    </div>
  );
};

export default Calendar;
