import { Link, Navigate, useParams } from "react-router-dom";
import EventFilter from "../components/EventFilter";
import Subscribe from "../components/Subscribe";
import { filterData } from "..";
import { assets } from "../assets";
import CustomButton from "../components/CustomButton";

const EventDetail: React.FC = () => {
  const { eventId } = useParams();

  return (
    <section className="">
      {filterData.map((item) =>
        item.data
          .filter((item) => item.id === eventId)
          .map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-center gap-5 px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] pt-10 md:pt-14 pb-20 md:pb-32 text-[#525252]"
            >
              <div className="max-w-[715px] flex flex-col gap-5">
                <img
                  src={item.img}
                  alt="image"
                  className="rounded-lg w-full max-w-[715px] max-h-[470px]"
                />
                <div className="flex flex-wrap gap-5 items-center">
                  <p className="rounded-lg shadow-custom-sd py-2 px-5 font-medium text-sm text-primary hover:bg-cyan-50 cursor-pointer">
                    Music
                  </p>
                  <p className="rounded-lg shadow-custom-sd py-2 px-5 font-medium text-sm text-primary hover:bg-cyan-50 cursor-pointer">
                    Fun
                  </p>
                  <p className="rounded-lg shadow-custom-sd py-2 px-5 font-medium text-sm text-primary hover:bg-cyan-50 cursor-pointer">
                    Comedy
                  </p>
                  <p className="rounded-lg shadow-custom-sd py-2 px-5 font-medium text-sm text-primary hover:bg-cyan-50 cursor-pointer">
                    Party
                  </p>
                </div>
                <p className="text-[#8f8f8f] text-base">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae, tenetur facere rerum nemo deserunt voluptas officiis
                  adipisci natus iure, iusto aspernatur alias quo incidunt
                  tempore dignissimos sapiente porro qui neque.
                </p>
              </div>
              <div className="shadow-custom-sd rounded-lg py-5 px-10 flex flex-col gap-5 max-w-[505px]">
                <h1 className="font-semibold text-4xl">
                  Kim's Convenience Comedy Night
                </h1>
                <div className="flex gap-5 rounded-lg border-2 border-gray-100 p-3">
                  <img
                    src={assets.event_organizer}
                    alt="profile_image"
                    loading="lazy"
                    className="rounded-full max-w-[55px] max-h-[55px] w-full"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-xl">Alina Flourish</p>
                    <div className="flex gap-5 flex-wrap text-base">
                      <p>Organizer</p>
                      <p className="text-primary hover:text-cyan-400 cursor-pointer">
                        Follow
                      </p>
                      <p className="text-primary hover:text-cyan-400 cursor-pointer">
                        Message
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 items-center text-base mt-1">
                  <img src={assets.date_icon} alt="date_icon" loading="lazy" />
                  <p>
                    {item.date} {item.month} 2023
                  </p>
                </div>
                <div className="flex gap-5 items-center text-base mt-1">
                  <img src={assets.time_icon} alt="time_icon" loading="lazy" />
                  <p>08:00 PM - 11:00 PM</p>
                </div>
                <div className="flex gap-5 items-center text-base mt-1">
                  <img
                    src={assets.location_icon_2}
                    alt="location_icon_2"
                    loading="lazy"
                  />
                  <p>{item.location}</p>
                </div>
                <p className="font-semibold text-4xl text-">$ {item.price}</p>
                <div>
                  <div className="flex justify-between font-medium text-base">
                    <p>Tickets Available</p>
                    <p>600</p>
                  </div>
                  <div className="h-[5px] bg-gray-300 rounded-lg mt-2 relative w-full">
                    <div
                      className="h-[5px] bg-primary rounded-lg absolute"
                      style={{ width: +"60" + "%" }}
                    ></div>
                  </div>
                  <div className="flex gap-10 text-xs mt-3 lg:ml-3">
                    <div className="flex gap-4 items-center">
                      <div className="w-[10px] h-[10px] rounded-full bg-primary" />
                      <p>Booked</p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <div className="w-[10px] h-[10px] rounded-full bg-gray-300" />
                      <p>Available</p>
                    </div>
                  </div>
                </div>
                <Link to={`/ticket-detail`}>
                  <CustomButton
                    text={`Get Tickets`}
                    text_color={`text-white`}
                    bg_color={`bg-primary`}
                    hover_text_color={``}
                    hover_bg_color={`bg-cyan-400`}
                    other_classes={`max-w-[188px] mx-auto mt-3`}
                    onclick_func={() => {}}
                  />
                </Link>
              </div>
            </div>
          ))
      )}
      <EventFilter />
      <Subscribe />
    </section>
  );
};

export default EventDetail;
