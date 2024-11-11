import { useState } from "react";
import { assets } from "../assets";

const HeroHome: React.FC = () => {

  const videoNumber:String[] = ["01", "02", "03", "04", "05"]

  const [currentVideo, setCurrentVideo] = useState<number>(0)

  const nextVideo = ():any => setCurrentVideo(currentVideo === videoNumber.length - 1 ? 0 : currentVideo + 1)
  const preVideo = ():any => setCurrentVideo(currentVideo === 0 ? videoNumber.length - 1 : currentVideo - 1)

  return (
    <section className="w-full">
      <img
        src={assets.home_hero1}
        alt="hero_home"
        className="w-full relative brightness-50"
      />
      <div className="absolute left-0 top-[45%] text-white px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] gap-y-3 flex flex-col">
        <div>
          <h1 className="font-bold text-6xl leading-normal flex">
              Enjoy The <p className="text-primary ml-3">Rhythm</p>
          </h1>
          <h1 className="font-bold text-6xl leading-normal flex">
              Of <p className="text-primary mx-3">Live</p> Music
          </h1>
        </div>
        <h4 className="font-semibold text-3xl">
          International Band Music Night
        </h4>
        <div className="flex gap-2 items-center">
          <img src={assets.star_icon} alt="star_icon" className="w-5" />
          <img src={assets.star_icon} alt="star_icon" className="w-5" />
          <img src={assets.star_icon} alt="star_icon" className="w-5" />
          <img src={assets.star_icon} alt="star_icon" className="w-5" />
          <img src={assets.star_icon} alt="star_icon" className="w-5" />
        </div>
        <div className="flex gap-10 items-center mt-5">
          <button
            className={`px-5 py-2 bg-primary text-white hover:bg-cyan-400 rounded-lg text-center`}
          >
            Get Tickets
          </button>
          <img
            src={assets.play_icon}
            alt="play_icon"
            className="rounded-full p-1.5 w-10 bg-white cursor-pointer hover:bg-cyan-100 text-center"
          />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div className="flex gap-5 text-3xl text-white">
          <img onClick={preVideo} src={assets.arrow_left} alt="arrow_left" className="cursor-pointer w-12"/>
          {videoNumber.map((item, index) => (
            <p key={index} onClick={() => setCurrentVideo(index)} className={`${currentVideo === index && 'text-primary -translate-y-2 transition-all duration-300 scale-150'} cursor-pointer`}>{item}</p>
          ))}
          <img onClick={nextVideo} src={assets.arrow_right} alt="arrow_right" className="cursor-pointer w-12"/>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
