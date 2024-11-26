import { useState } from "react";
import CustomButton from "../components/CustomButton";
import EventFilter from "../components/EventFilter";
import Subscribe from "../components/Subscribe";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { assets } from "../assets";
import { filterData } from "..";

const TicketDetail: React.FC = () => {
  const [economyCount, setEconomyCount] = useState<number>(0);
  const [vipCount, setVipCount] = useState<number>(0);
  const [vvipCount, setVvipCount] = useState<number>(0);
  const [ticketPage, setTicketPage] = useState(true);
  const [checkoutPage, setCheckoutPage] = useState(false);
  const [bookingStatusPage, setBookingStatusPage] = useState(false);

  const mapContainerStyle = {
    maxWidth: "500px",
    width: "400px",
    maxHeight: "500px",
    height: "400px",
    borderRadius: "7px",
  };
  const center = {
    lat: 7.2905715, // default latitude
    lng: 80.6337262, // default longitude
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDqlg8ULILZd8JDSXAQaJILGYDSMl9OPAI",
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <section>
      {/* Ticket Page */}
      {ticketPage && (
        <div className="flex flex-col md:flex-row gap-20 items-center justify-between shadow-custom-sd rounded-md mx-5 sm:mx-[5vw] md:mx-[7vw] lg:mx-[9vw] mt-8 mb-20 p-5 md:p-10 text-[#525252]">
          <div className="w-full">
            <p className="text-4xl font-semibold">Ticket Details</p>
            <div className="flex justify-between gap-10 sm:gap-16 md:gap-20 lg:gap-40 my-10">
              <div className="flex flex-col gap-10 justify-center items-start">
                <p className="font-medium text-base">Ticket Type</p>
                <p className="text-2xl font-semibold">Economy</p>
                <p className="text-2xl font-semibold">Vip</p>
                <p className="text-2xl font-semibold">Vvip</p>
                <p className="text-2xl font-semibold">Total</p>
              </div>
              <div className="flex flex-col gap-11 justify-start items-center">
                <p className="font-medium text-base">Price</p>
                <p className="text-lg font-semibold">$40.00</p>
                <p className="text-lg font-semibold">$60.00</p>
                <p className="text-lg font-semibold">$60.00</p>
              </div>
              <div className="flex flex-col gap-11 justify-start items-center">
                <p className="font-medium text-base">Quantity</p>
                <div className="flex gap-3 items-center font-medium text-sm">
                  <p
                    onClick={() =>
                      economyCount > 0 && setEconomyCount(economyCount - 1)
                    }
                    className="px-3 py-1 rounded-md bg-gray-200 cursor-pointer"
                  >
                    -
                  </p>
                  <p className="font-medium text-sm">{economyCount}</p>
                  <p
                    onClick={() => setEconomyCount(economyCount + 1)}
                    className="px-3 py-1 rounded-md bg-primary cursor-pointer text-white"
                  >
                    +
                  </p>
                </div>
                <div className="flex gap-3 items-center font-medium text-sm">
                  <p
                    onClick={() => vipCount > 0 && setVipCount(vipCount - 1)}
                    className="px-3 py-1 rounded-md bg-gray-200 cursor-pointer"
                  >
                    -
                  </p>
                  <p className="font-medium text-sm">{vipCount}</p>
                  <p
                    onClick={() => setVipCount(vipCount + 1)}
                    className="px-3 py-1 rounded-md bg-primary cursor-pointer text-white"
                  >
                    +
                  </p>
                </div>
                <div className="flex gap-3 items-center font-medium text-sm">
                  <p
                    onClick={() => vvipCount > 0 && setVvipCount(vvipCount - 1)}
                    className="px-3 py-1 rounded-md bg-gray-200 cursor-pointer"
                  >
                    -
                  </p>
                  <p className="font-medium text-sm">{vvipCount}</p>
                  <p
                    onClick={() => setVvipCount(vvipCount + 1)}
                    className="px-3 py-1 rounded-md bg-primary cursor-pointer text-white"
                  >
                    +
                  </p>
                </div>
                <p className="text-lg font-semibold">$120.00</p>
              </div>
            </div>
            <CustomButton
              text={`Book Tickets`}
              bg_color={`bg-primary`}
              text_color={`text-white`}
              hover_bg_color={`bg-cyan-400`}
              hover_text_color={``}
              other_classes={`mx-auto flex flex-row justify-center items-center`}
              onclick_func={() => {
                setTicketPage(false);
                setCheckoutPage(true);
              }}
            />
          </div>
          <div>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={10}
              center={center}
            >
              <Marker position={center} />
            </GoogleMap>
          </div>
        </div>
      )}
      {/* Checkout Page */}
      {checkoutPage && (
        <div className="flex flex-col md:flex-row gap-16 items-start justify-between shadow-custom-sd rounded-md mx-5 sm:mx-[5vw] md:mx-[7vw] lg:mx-[9vw] mt-8 mb-20 p-5 md:p-10 text-[#525252]">
          <div className="w-full">
            <h1 className="text-4xl font-semibold">Checkout</h1>
            <p className="text-2xl font-semibold mt-6">Contact Information</p>
            <form className="grid grid-cols-2 gap-x-8 gap-y-5 w-full mt-6">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="shadow-custom-sd px-4 py-3 rounded-md w-full text-xs outline-none"
              />
              <input
                type="tel"
                name="p_number"
                id="p_number"
                placeholder="Phone Number"
                className="shadow-custom-sd px-4 py-3 rounded-md w-full text-xs outline-none"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="shadow-custom-sd px-4 py-3 rounded-md w-full text-xs outline-none"
              />
              <input
                type="text"
                name="city"
                id="city"
                placeholder="City"
                className="shadow-custom-sd px-4 py-3 rounded-md w-full text-xs outline-none"
              />
            </form>
            <p className="text-2xl font-semibold mt-8">Payment Methods</p>
            <div className="shadow-custom-sd px-4 py-2 flex justify-between rounded-md mt-6 cursor-pointer w-[48%] text-xs">
              <div className="flex justify-start items-center gap-3">
                <img src={assets.card} alt="card" className="w-6 h-6" />
                <p>Add Card</p>
              </div>
              <p className="text-primary text-lg">{`>`}</p>
            </div>
            <div className="shadow-custom-sd px-4 py-2 flex gap-3 items-center justify-start rounded-md mt-6 cursor-pointer w-[48%] text-xs">
              <img src={assets.paypal} alt="paypal" className="w-6 h-6" />
              <p>Paypal</p>
            </div>
            <div className="shadow-custom-sd px-4 py-2 flex gap-3 items-center justify-start rounded-md mt-6 cursor-pointer w-[48%] text-xs">
              <img src={assets.apple} alt="apple_pay" className="w-6 h-6" />
              <p>Apple Pay</p>
            </div>
          </div>
          {filterData.map((item) =>
            item.data
              .filter((item) => item.id === "1112")
              .map((item, index) => (
                <div
                  key={index}
                  className="shadow-custom-sd rounded-md text-[#525252] max-w-[420px] lg:min-w-[420px] p-5"
                >
                  <div className="flex flex-col lg:flex-row gap-2">
                    <img src={item.img} alt="event_image" className="w-full max-w-[175px] max-h-[140px]" />
                    <div>
                      <p className="text-xl font-medium">{item.description}</p>
                      <p className="text-xs mt-3">
                        {item.date} {item.month} 2024
                      </p>
                      <p className="text-xs mt-3">08:00 PM - 11:00 PM</p>
                      <p className="text-xs mt-3">{item.location}</p>
                    </div>
                  </div>
                  <p className="text-2xl font-semibold mt-8">Ticket Order Summary</p>
                  <div className="grid grid-cols-2 justify-start gap-y-3 font-medium text-base w-full mt-4">
                    <p>3x Economy Tickets</p>
                    <p>$120.00</p>
                    <p>Tax</p>
                    <p>$20.00</p>
                    <p>Total</p>
                    <p>$140.00</p>
                  </div>
                </div>
              ))
          )}
        </div>
      )}
      <Subscribe />
    </section>
  );
};

export default TicketDetail;
