import { Link } from "react-router-dom";
import { assets } from "../assets";
import HeroHome from "../components/HeroHome";
import Subscribe from "../components/Subscribe";

const Home: React.FC = () => {
  return (
    <div>
      <HeroHome />
      <section className="px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div className="flex flex-wrap justify-center items-center gap-y-10 px-5 py-10 -mt-7 mb-10 bg-white rounded-lg shadow-lg">
          <div>
            <p className="text-primary font-medium">Location</p>
            <p className="text-gray-600 mt-5">Search by City</p>
          </div>
          <hr className="rotate-90 h-[1px] w-20 bg-gray-600" />
          <div>
            <p className="text-primary font-medium">Price</p>
            <p className="text-gray-600 mt-5">$-$$$$</p>
          </div>
          <hr className="rotate-90 h-[1px] w-20 bg-gray-600" />
          <div>
            <p className="text-primary font-medium">Date</p>
            <p className="text-gray-600 mt-5">00/00/0000</p>
          </div>
          <hr className="rotate-90 h-[1px] w-20 bg-gray-600" />
          <div>
            <p className="text-primary font-medium">Type</p>
            <p className="text-gray-600 mt-5">Select Type</p>
          </div>
          <hr className="rotate-90 h-[1px] w-20 bg-gray-600" />
          <div>
            <p className="text-primary font-medium">Time</p>
            <p className="text-gray-600 mt-5">Timing Hours</p>
          </div>
          <button className="px-7 py-2 bg-primary text-white hover:bg-cyan-400 rounded-lg text-center ml-10 sm:ml-20">
            Discover Events
          </button>
        </div>
      </section>
      <Subscribe />
      <div className="px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-20 bg-promotion-bg bg-no-repeat bg-cover w-full">
        <p className="text-5xl font-semibold text-white">Promotions</p>
        <div className="flex flex-col lg:flex-row gap-10 justify-center items-center mt-10">
          <div className="rounded-lg flex items-center max-w-[650px] w-full bg-white">
            <img
              src={assets.prom1}
              alt="prom1"
              className="rounded-l-lg max-w-[200px] object-contain"
            />
            <div className="p-5 flex flex-col gap-2 leading-relaxed">
              <p className="text-xl font-medium text-[#525252]">
                20% Discount on 2 tickets Booking
              </p>
              <p className="text-[#8f8f8f] text-lg">Valid till 30 july</p>
              <p className="text-[#8f8f8f] text-xs">
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document.
              </p>
            </div>
          </div>
          <div className="rounded-lg flex items-center max-w-[650px] w-full bg-white">
            <img
              src={assets.prom2}
              alt="prom2"
              className="rounded-l-lg max-w-[200px] object-contain"
            />
            <div className="p-5 flex flex-col gap-2 leading-relaxed">
              <p className="text-xl font-medium text-[#525252]">
                20% Discount on 2 tickets Booking
              </p>
              <p className="text-[#8f8f8f] text-lg">Valid till 30 july</p>
              <p className="text-[#8f8f8f] text-xs">
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] pt-20 bg-no-repeat bg-cover bg-top md:bg-right-top w-full bg-get-mobile-app-section">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-20 xl:gap-40 items-center overflow-hidden">
          <div className="flex flex-col gap-8 leading-relaxed max-w-[700px]">
            <h1 className="text-[#525252] text-5xl font-semibold">
              Get The Mobile App
            </h1>
            <p className="text-[#8f8f8f] text-base font-medium">
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document. Lorem ipsum is a placeholder text
              commonly used to demonstrate thevisual form of a document.
            </p>
            <div className="mt-2 flex gap-10 items-center">
              <Link to={`/`}>
                <img
                  src={assets.applestore}
                  alt="applestore"
                  className="w-auto"
                />
              </Link>
              <Link to={`/`}>
                <img
                  src={assets.googleplay}
                  alt="googleplay"
                  className="w-auto"
                />
              </Link>
            </div>
          </div>
          <img
            src={assets.phone}
            alt="phone"
            className="w-auto overflow-hidden md:min-w-[250px] md:-mb-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
