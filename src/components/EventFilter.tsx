import React, { useContext, useRef, useState, useMemo } from "react";
import CustomButton from "./CustomButton";
import { currentFilter } from "..";
import { assets } from "../assets";
import { Link } from "react-router-dom";
import { EventContext } from "../context/EventContext";

const EventFilter: React.FC = () => {
  const { eventsData, backendURL, eventLoader } = useContext(EventContext);
  const [current, setCurrent] = useState<string>("All");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);

  // Compute filtered events based on selected category
  const filteredEvents = useMemo(() => {
    if (current === "All") return eventsData;
    return eventsData.filter((ev: any) =>
      ev.categories.some((cat: any) => cat.name === current)
    );
  }, [eventsData, current]);

  // Reset page index when filter changes
  const handleFilter = (category: string) => {
    setCurrent(category);
    setCurrentIndex(0);
  };

  // Compute visible events for pagination
  const visibleEvents = useMemo(() => {
    return filteredEvents.slice(currentIndex, currentIndex + 4);
  }, [filteredEvents, currentIndex]);

  const handleNext = () => {
    if (currentIndex + 4 < filteredEvents.length) {
      setCurrentIndex((prev) => prev + 4);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 4 >= 0) {
      setCurrentIndex((prev) => prev - 4);
    }
  };

  // Drag/swipe scroll refs
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleStart = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    isDragging.current = true;
    setDragging(false);
    const pageX =
      "touches" in e ? e.touches[0].pageX : (e as React.MouseEvent).pageX;
    startX.current = pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
  };

  const handleMove = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (!isDragging.current || !scrollRef.current) return;
    const pageX =
      "touches" in e ? e.touches[0].pageX : (e as React.MouseEvent).pageX;
    const x = pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    if (Math.abs(walk) > 5) setDragging(true);
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleEnd = () => {
    isDragging.current = false;
  };

  return (
    <section className="px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-20 bg-[#F5F5F5]">
      <div>
        {/* Header & Pagination Controls */}
        <div className="flex justify-between items-center">
          <p className="text-[#525252] text-5xl font-semibold">
            Upcoming Events
          </p>
          <div className="flex gap-5 justify-center items-center">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`bg-white font-medium rounded-full text-2xl text-primary shadow-custom-sd w-8 h-8 flex items-center justify-center transition-opacity ${
                currentIndex === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-cyan-50"
              }`}
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex + 4 >= filteredEvents.length}
              className={`bg-white font-medium rounded-full text-2xl text-primary shadow-custom-sd w-8 h-8 flex items-center justify-center transition-opacity ${
                currentIndex + 4 >= filteredEvents.length
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-cyan-50"
              }`}
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Filter Buttons Scrollable */}
        <div
          className="mt-12 py-3 overflow-hidden select-none touch-none"
          ref={scrollRef}
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
        >
          <div className="flex flex-row gap-4 flex-nowrap w-max px-2">
            {currentFilter.map((item, idx) => {
              const hasEvents =
                item.text === "All" ||
                eventsData.filter((ev: any) =>
                  ev.categories.some((cat: any) => cat.name === current)
                );

              return (
                <div key={idx} className="shrink-0">
                  <CustomButton
                    text={item.text}
                    bg_color={
                      current === item.text ? item.bg_color : "bg-white"
                    }
                    text_color={
                      current === item.text ? item.text_color : "text-primary"
                    }
                    hover_bg_color={item.hover_bg_color}
                    hover_text_color="text-white"
                    other_classes={`shadow-custom-sd ${
                      !hasEvents && "cursor-not-allowed"
                    }`}
                    onClick={() => {
                      if (!hasEvents) return;
                      if (!dragging && hasEvents) {
                        handleFilter(item.text);
                      }
                      setCurrent(item.text);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Event Cards */}
        <div className="flex flex-row flex-wrap xl:flex-nowrap gap-10 py-12 rounded-md">
          {eventLoader ? (
            Array(4)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-x-5 p-1 shadow-custom-sd rounded-lg w-[300px] bg-white relative animate-pulse"
                >
                  <div className="w-full h-40 bg-gray-200 rounded-t-lg"></div>

                  <div className="p-3">
                    <div className="py-1 px-3 bg-gray-200 rounded-lg w-20 h-6"></div>
                    <div className="p-2 w-8 h-8 rounded-full bg-gray-200 absolute right-3 top-3"></div>
                  </div>

                  <div className="flex gap-5 px-2 pt-4 pb-2">
                    <div className="text-center">
                      <div className="w-12 h-6 bg-gray-200 mb-2"></div>
                      <div className="w-12 h-8 bg-gray-200"></div>
                    </div>
                    <div className="flex-1">
                      <div className="w-3/4 h-6 bg-gray-200 mb-2"></div>
                      <div className="w-full h-4 bg-gray-200"></div>
                    </div>
                  </div>
                </div>
              ))
          ) : filteredEvents.length === 0 ? (
            <p className="text-center w-full text-gray-500 text-lg">
              No events found for “{current}”.
            </p>
          ) : (
            visibleEvents && Array.isArray(visibleEvents) &&
            visibleEvents.map((event: any) => (
              <Link
                key={event?.id}
                to={`/event-detail/${event?.id}`}
                className="flex flex-col gap-x-5 p-1 shadow-custom-sd rounded-lg w-[300px] bg-white relative hover:scale-105 transition-transform"
              >
                <img
                  src={event?.images[0]?.path ? `${backendURL}/public/${event?.images[0]?.path}` : assets.no_image}
                  alt={event?.description}
                  loading="lazy"
                  className="w-auto h-40 object-cover rounded-t-lg"
                />

                <p className="absolute left-3 top-3 bg-white py-1 px-3 text-[#E33629] rounded-lg font-medium">
                  ${event?.tickets[0]?.price}
                </p>
                <img
                  src={assets.heart_red}
                  alt="favorite"
                  loading="lazy"
                  className="absolute right-3 top-3 w-8 p-2 bg-white rounded-full cursor-pointer"
                />

                <div className="flex gap-5 px-2 pt-4 pb-2">
                  <div className="text-center">
                    <p className="text-xl text-[#8f8f8f]">
                      {new Date(event?.event_date).toLocaleString("default", {
                        month: "short",
                      })}
                    </p>
                    <p className="text-3xl text-primary font-semibold">
                      {new Date(event?.event_date).getDate()}
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-[#525252] font-semibold leading-relaxed">
                      {event?.description}
                    </p>
                    <div className="flex items-center gap-1 mt-2">
                      <img
                        src={assets.location_icon}
                        alt="location"
                        loading="lazy"
                        className="w-5 h-5"
                      />
                      <p className="text-xs text-[#6d6d6d] font-medium">
                        {[
                          event?.address,
                          event?.city !== "null" && event?.city,
                          event?.state !== "null" && event?.state,
                        ]
                          .filter(Boolean)
                          .join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default EventFilter;
