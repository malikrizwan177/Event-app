import { useContext, useState } from "react";
import CustomButton from "./CustomButton";
import { currentFilter } from "..";
import { assets } from "../assets";
import { Link } from "react-router-dom";
import { EventContext } from "../context/EventContext";

const EventFilter: React.FC = () => {
  const [current, setCurrent] = useState<String>("All");
  const { eventsData, backendURL, eventLoader } = useContext(EventContext);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const visibleEvents = eventsData.slice(currentIndex, currentIndex + 4);

  const handleNext = () => {
    if (currentIndex + 4 < eventsData.length) {
      setCurrentIndex((prev) => prev + 4);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 4 >= 0) {
      setCurrentIndex((prev) => prev - 4);
    }
  };

  return (
    <section className="px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-20 bg-[#F5F5F5]">
      <div>
        <div className="flex justify-between items-center">
          <p className="text-[#525252] text-5xl font-semibold">
            Upcoming Events
          </p>
          <div className="flex gap-5 justify-center items-center">
            <p
              onClick={handlePrev}
              className={`bg-white font-medium rounded-full text-2xl text-primary shadow-custom-sd w-8 text-center cursor-pointer hover:bg-cyan-50 ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >{`<`}</p>
            <p
              onClick={handleNext}
              className={`bg-white font-medium rounded-full text-2xl text-primary shadow-custom-sd w-8 text-center cursor-pointer hover:bg-cyan-50 ${
                currentIndex + 4 >= eventsData.length
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >{`>`}</p>
          </div>
        </div>
        <div className="flex flex-row justify-start flex-wrap gap-10 mt-12">
          {currentFilter.map((item, index) => (
            <CustomButton
              key={index}
              text={item.text}
              bg_color={current === item.text ? item.bg_color : "bg-white"}
              text_color={
                current === item.text ? item.text_color : "text-primary"
              }
              hover_bg_color={item.hover_bg_color}
              hover_text_color={`text-white`}
              other_classes={`shadow-custom-sd`}
              onClick={() => setCurrent(item.text)}
            />
          ))}
        </div>
        <div className="flex flex-row flex-wrap xl:flex-nowrap gap-10 py-12 rounded-md">
          {eventLoader ? (
            Array(4).fill(0).map((_, index) => (
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
          ) : (
            visibleEvents.map((event: any) => (
              <Link
                to={`/event-detail/${event.id}`}
                key={event.id}
                className="flex flex-col gap-x-5 p-1 shadow-custom-sd rounded-lg w-[300px] bg-white relative hover:scale-105 duration-300"
              >
                <img
                  src={backendURL + "/public/" + event.images[0].path}
                  alt="event"
                  loading="lazy"
                  className="w-auto h-40 object-none"
                />

                <div>
                  <p className="py-1 px-3 text-[#E33629] bg-white rounded-lg absolute left-3 top-3">
                    ${event.tickets[0].price}
                  </p>
                  <img
                    src={assets.heart_red}
                    alt="heart_red"
                    loading="lazy"
                    className="p-2 w-8 rounded-full absolute right-3 top-3 bg-white cursor-pointer"
                  />
                </div>

                <div className="flex gap-5 px-2 pt-4 pb-2">
                  <div className="text-center">
                    <p className="text-xl text-[#8f8f8f]">
                      {new Date(event.event_date).toLocaleString("default", {
                        month: "short",
                      })}
                    </p>
                    <p className="text-3xl text-primary font-semibold">
                      {new Date(event.event_date).getDate()}
                    </p>
                  </div>

                  <div>
                    <p className="text-lg text-[#525252] font-semibold leading-relaxed">
                      {event.description}
                    </p>
                    <div className="flex gap-1 mt-2 items-center">
                      <img
                        src={assets.location_icon}
                        alt="location"
                        loading="lazy"
                        className="w-5 h-5"
                      />
                      <p className="text-xs text-[#6d6d6d] font-medium">
                      {[
                        event.address, 
                        event.city !== "null" ? event.city : null,
                        event.state !== "null" ? event.state : null
                      ]
                        .filter(Boolean)
                        .join(', ')}
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
