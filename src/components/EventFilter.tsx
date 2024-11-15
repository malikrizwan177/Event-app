import { useState } from "react";
import CustomButton from "./CustomButton";
import { currentFilter, filterData } from "..";

const EventFilter: React.FC = () => {

    const [current, setCurrent] = useState<String>('All')

  return (
    <section className="px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-20 bg-[#F5F5F5]">
      <div>
        <div className="flex justify-between items-center">
          <p className="text-[#525252] text-5xl font-semibold">
            Upcoming Events
          </p>
          <div className="flex gap-5 justify-center items-center">
            <p className="bg-white font-medium rounded-full text-2xl text-primary shadow-custom-sd w-8 text-center cursor-pointer hover:bg-cyan-50">{`<`}</p>
            <p className="bg-white font-medium rounded-full text-2xl text-primary shadow-custom-sd w-8 text-center cursor-pointer hover:bg-cyan-50">{`>`}</p>
          </div>
        </div>
        <div className="flex flex-row justify-start flex-wrap gap-10 mt-12">
          {currentFilter.map((item,index) => (
            <CustomButton key={index} text={item.text} bg_color={current === item.text ? item.bg_color : 'bg-white'} text_color={current === item.text ? item.text_color : 'text-primary'} hover_bg_color={item.hover_bg_color} hover_text_color={`text-white`} other_classes={`shadow-custom-sd`} onclick_func={() => setCurrent(item.text)}/>
          ))}
        </div>
        <div className="flex flex-row gap-10 overflow-hidden pt-12 rounded-md">
          {filterData.filter(item => item.data_type === current).map((item) => (
            item.data.map((item, index) => (
              <div key={index} className="flex flex-col gap-5 p-1 shadow-custom-sd rounded-lg max-w-[300px] bg-white">
                <img src={item.img} alt="" className="relative"/>
                <div>
                  <img src="" alt="" /><img src="" alt="" />
                </div>
              </div>
            ))
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventFilter;
