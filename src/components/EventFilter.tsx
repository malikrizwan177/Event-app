import { useState } from "react";
import CustomButton from "./CustomButton";
import { currentFilter, filterData } from "..";
import { assets } from "../assets";

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
        <div className="flex flex-row flex-wrap xl:flex-nowrap gap-10 overflow-hidden py-12 rounded-md">
          {filterData.filter(item => item.data_type === current).map((item) => (
            item.data.map((item, index) => (
              <div key={index} className="flex flex-col gap-x-5 p-1 shadow-custom-sd rounded-lg max-w-[300px] bg-white relative">
                <img src={item.img} alt="image" loading="lazy" className="w-auto"/>
                <div>
                  <p className="py-1 px-3 text-[#E33629] bg-white rounded-lg absolute left-3 top-3">${item.price}</p>
                  <img src={assets.heart_red} alt="heart_red" loading="lazy"  className="p-2 w-8 rounded-full absolute right-3 top-3 bg-white cursor-pointer"/>
                </div>
                <div className="flex gap-5 px-2 pt-4 pb-2">
                  <div className="text-center">
                    <p className="text-xl text-[#8f8f8f]">{item.month}</p>
                    <p className="text-3xl text-primary font-semibold">{item.date}</p>
                  </div>
                  <div>
                    <p className="text-lg text-[#525252] font-semibold leading-relaxed">{item.description}</p>
                    <div className="flex gap-1 mt-2 items-center">
                      <img src={assets.location_icon} alt="location" loading="lazy" className="w-5 h-5"/>
                      <p className="text-xs text-[#6d6d6d] font-medium">{item.location}</p>
                    </div>
                  </div>
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
