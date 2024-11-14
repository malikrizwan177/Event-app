import { MouseEvent, useState } from "react";
import CustomButton from "./CustomButton";

type Props = {};

const EventFilter: React.FC = (props: Props) => {
    const currentFilter = [
        {text: 'All', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
        {text: 'Music', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
        {text: 'Food Feast', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
        {text: 'Sports Gala', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
        {text: 'Festivals', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    ]
    const [current, setCurrent] = useState<Number>(0)
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
        <div className="flex flex-row justify-start flex-wrap gap-10 mt-20">
          {currentFilter.map((item,index) => (
            <CustomButton key={index} text={item.text} bg_color={current === index ? item.bg_color : 'bg-white'} text_color={current === index ? item.text_color : 'text-primary'} hover_bg_color={item.hover_bg_color} hover_text_color={`text-white`} other_classes={`shadow-custom-sd`}onclick_func={() => setCurrent(index)}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventFilter;
