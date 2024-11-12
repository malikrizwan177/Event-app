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
      <Subscribe/>
    </div>
  );
};

export default Home;
