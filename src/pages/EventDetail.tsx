import { useParams } from "react-router-dom";
import EventFilter from "../components/EventFilter";
import Subscribe from "../components/Subscribe";
import { useEffect, useState } from "react";
import { filterData } from "..";

type Props = {};

const EventDetail: React.FC = (props: Props) => {
  const { eventId } = useParams();
  const [targetEvent, setTargetEvent] = useState<[]>([]);

  return (
    <section className="">
      {filterData.map((item) =>
        item.data
          .filter((item) => item.id === eventId)
          .map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-5 px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] pt-10 md:pt-14 pb-20 md:pb-32">
              <div className="max-w-[715px] flex flex-col gap-5">
                <img src={item.img} alt="image" className="rounded-lg w-full max-w-[715px] max-h-[470px]"/>
                <div className="flex flex-wrap gap-5 items-center">
                    <p className="rounded-lg shadow-custom-sd py-2 px-5 font-medium text-sm text-primary hover:bg-cyan-50 cursor-pointer">Music</p>
                    <p className="rounded-lg shadow-custom-sd py-2 px-5 font-medium text-sm text-primary hover:bg-cyan-50 cursor-pointer">Fun</p>
                    <p className="rounded-lg shadow-custom-sd py-2 px-5 font-medium text-sm text-primary hover:bg-cyan-50 cursor-pointer">Comedy</p>
                    <p className="rounded-lg shadow-custom-sd py-2 px-5 font-medium text-sm text-primary hover:bg-cyan-50 cursor-pointer">Party</p>
                </div>
                <p className="text-[#8f8f8f] text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, tenetur facere rerum nemo deserunt voluptas officiis adipisci natus iure, iusto aspernatur alias quo incidunt tempore dignissimos sapiente porro qui neque.</p>
              </div>
              <div className="shadow-custom-sd rounded-lg py-5 px-10">
                <h1 className="font-semibold text-4xl text-[#525252]">Kim's Convenience Comedy Night</h1>
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
