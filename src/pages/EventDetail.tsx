import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import EventFilter from "../components/EventFilter";
import Subscribe from "../components/Subscribe";
import CustomButton from "../components/CustomButton";
import { assets } from "../assets";
import { EventContext } from "../context/EventContext";
import moment from "moment";

const EventDetail: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const { eventsData, backendURL } = useContext(EventContext);

  const event = eventsData.find((e: any) => String(e.id) === eventId);
  if (!event) return <p className="p-10 text-center">Event not found.</p>;

  const {
    title,
    description,
    city,
    state,
    event_date,
    event_time,
    address,
    images,
    categories,
    tickets,
  } = event;

  const imageUrl =
    images && images.length
      ? `${backendURL}/public/${images[0].path}`
      : assets.event_image_placeholder;

  const categoryTags = categories.map((c: any) => c.name);

  const dateFmt = moment(event_date).format("MMM D, YYYY");
  const timeFmt = moment(event_time, "HH:mm").format("hh:mm A");

  const sorted = [...tickets].sort((a: any, b: any) => a.price - b.price);
  const displayPrice = sorted.length
    ? Number(sorted[0].price).toFixed(2)
    : "0.00";

  const totalSeats = event.seats;
  const remaining = tickets.reduce(
    (sum: number, t: any) => sum + t.remaining_tickets,
    0
  );
  const booked = totalSeats - remaining;
  const progressPercent = totalSeats
    ? Math.round((booked / totalSeats) * 100)
    : 0;

  return (
    <section>
      <div className="flex flex-col md:flex-row justify-center gap-5 px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] pt-10 md:pt-14 pb-20 md:pb-32 text-[#525252]">
        <div className="max-w-[715px] flex flex-col gap-5">
          <img
            src={imageUrl}
            alt={title}
            className="rounded-lg w-full max-w-[715px] lg:min-w-[500px] max-h-[470px] lg:min-h-[350px] object-cover"
            loading="lazy"
          />

          <div className="flex flex-wrap gap-2">
            {categoryTags.map((tag: string) => (
              <span
                key={tag}
                className="rounded-lg shadow-custom-sd py-2 px-5 font-medium text-sm text-primary hover:bg-cyan-50 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-[#8f8f8f] text-base">{description}</p>
        </div>

        <div className="shadow-custom-sd rounded-lg py-5 px-10 flex flex-col gap-5 max-w-[505px]">
          <h1 className="font-semibold text-4xl">{title}</h1>

          <div className="flex gap-5 rounded-lg border-2 border-gray-100 p-3">
            <img
              src={assets.event_organizer}
              alt="Organizer"
              loading="lazy"
              className="rounded-full max-w-[55px] max-h-[55px]"
            />
            <div className="flex flex-col gap-1">
              <p className="font-medium text-xl">
                Organizer #{event.organizer_id}
              </p>
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
            <img src={assets.date_icon} alt="Date" loading="lazy" />
            <p>{dateFmt}</p>
          </div>

          <div className="flex gap-5 items-center text-base mt-1">
            <img src={assets.time_icon} alt="Time" loading="lazy" />
            <p>{timeFmt}</p>
          </div>

          <div className="flex gap-5 items-center text-base mt-1">
            <img src={assets.location_icon_2} alt="Location" loading="lazy" />
            <p>
              {address && address !== "null" ? address : ""}
              {city && city !== "null" ? ", " + city : ""}
              {state && state !== "null" ? ", " + state : ""}
            </p>
          </div>

          <p className="font-semibold text-4xl">${displayPrice}</p>

          <div>
            <div className="flex justify-between font-medium text-base">
              <p>Tickets Available</p>
              <p>{remaining}</p>
            </div>
            <div className="h-[5px] bg-gray-300 rounded-lg mt-2 relative w-full">
              <div
                className="h-[5px] bg-primary rounded-lg absolute"
                style={{ width: `${progressPercent}%` }}
              />
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

          <Link to={`/ticket-detail/${event.id}`}>
            <CustomButton
              text="Get Tickets"
              text_color="text-white"
              hover_text_color={``}
              bg_color="bg-primary"
              hover_bg_color="bg-cyan-400"
              other_classes="max-w-[188px] mx-auto mt-3"
            />
          </Link>
        </div>
      </div>

      <EventFilter />
      <Subscribe />
    </section>
  );
};

export default EventDetail;
