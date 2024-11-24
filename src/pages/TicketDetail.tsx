import { useState } from "react";
import CustomButton from "../components/CustomButton";
import EventFilter from "../components/EventFilter";
import Subscribe from "../components/Subscribe";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const TicketDetail: React.FC = () => {
  const [economyCount, setEconomyCount] = useState<number>(0);
  const [vipCount, setVipCount] = useState<number>(0);
  const [vvipCount, setVvipCount] = useState<number>(0);

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
      <div className="flex flex-col md:flex-row gap-20 items-center justify-between shadow-custom-sd rounded-md mx-5 sm:mx-[5vw] md:mx-[7vw] lg:mx-[9vw] my-5 p-5 md:p-10 text-[#525252]">
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
                <p onClick={() => economyCount > 0 && setEconomyCount(economyCount - 1)} className="px-3 py-1 rounded-md bg-gray-200 cursor-pointer">
                  -
                </p>
                <p className="font-medium text-sm">{economyCount}</p>
                <p onClick={() => setEconomyCount(economyCount + 1)} className="px-3 py-1 rounded-md bg-primary cursor-pointer text-white">
                  +
                </p>
              </div>
              <div className="flex gap-3 items-center font-medium text-sm">
                <p onClick={() => vipCount > 0 && setVipCount(vipCount - 1)} className="px-3 py-1 rounded-md bg-gray-200 cursor-pointer">
                  -
                </p>
                <p className="font-medium text-sm">{vipCount}</p>
                <p onClick={() => setVipCount(vipCount + 1)} className="px-3 py-1 rounded-md bg-primary cursor-pointer text-white">
                  +
                </p>
              </div>
              <div className="flex gap-3 items-center font-medium text-sm">
                <p onClick={() => vvipCount > 0 && setVvipCount(vvipCount - 1)} className="px-3 py-1 rounded-md bg-gray-200 cursor-pointer">
                  -
                </p>
                <p className="font-medium text-sm">{vvipCount}</p>
                <p onClick={() => setVvipCount(vvipCount + 1)} className="px-3 py-1 rounded-md bg-primary cursor-pointer text-white">
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
            onclick_func={() => {}}
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
      <EventFilter />
      <Subscribe />
    </section>
  );
};

export default TicketDetail;
