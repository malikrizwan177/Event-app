import { Link } from "react-router-dom";
import { assets } from "../assets";

const Footer:React.FC = () => {
  return (
    <>
      <footer className="px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-10 md:py-20 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-start items-start gap-10 ">
          <div className="flex flex-col gap-y-5 text-[#8F8F8F]">
            <Link to={`/`}>
              <img src={assets.event_logo} alt="event_logo" className="w-24" />
            </Link>
            <p>
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document. Lorem ipsum.
            </p>
            <div className="flex gap-5">
              <div className="w-9 h-9 p-3 bg-primary rounded-full cursor-pointer hover:bg-cyan-400 flex justify-center items-center">
                <img
                  loading="lazy"
                  src={assets.facebook}
                  alt="facebook" 
                />
              </div>
              <div className="w-9 h-9 p-2 bg-primary rounded-full cursor-pointer hover:bg-cyan-400 flex justify-center items-center">
                <img
                  loading="lazy"
                  src={assets.twitter}
                  alt="twitter"
                />
              </div>
              <div className="w-9 h-9 p-2 bg-primary rounded-full cursor-pointer hover:bg-cyan-400 flex justify-center items-center">
                <img
                  loading="lazy"
                  src={assets.instagram}
                  alt="instagram"
                />
              </div>
            </div>
          </div>
          <div className="text-[#8F8F8F] flex flex-col gap-y-5">
            <p className="text-[#525252] text-lg font-medium">Categories</p>
            <Link to={`/`}>
              <p>Upcoming Events</p>
            </Link>
            <Link to={`/`}>
              <p>Food Feast</p>
            </Link>
            <Link to={`/`}>
              <p>Sport Gala</p>
            </Link>
          </div>
          <div className="text-[#8F8F8F] flex flex-col gap-y-5">
            <p className="text-[#525252] font-medium text-lg">Community</p>
            <Link to={`/`}>
              <p>Blog</p>
            </Link>
            <Link to={`/`}>
              <p>Invite a Friend</p>
            </Link>
          </div>
          <div className="text-[#8F8F8F] flex flex-col gap-y-5">
            <p className="text-[#525252] font-medium text-lg">Your Account</p>
            <Link to={`/`}>
              <p>Sign up</p>
            </Link>
            <Link to={`/`}>
              <p>Log In</p>
            </Link>
            <Link to={`/`}>
              <p>Check My Booking</p>
            </Link>
          </div>
          <div className="text-[#8F8F8F] flex flex-col gap-y-5">
            <p className="text-[#525252] font-medium text-lg">Contact</p>
            <Link to={`/`}>
              <p>Contact us</p>
            </Link>
            <Link to={`/`}>
              <p>Faq</p>
            </Link>
          </div>
        </div>
      </footer>
      <hr className="h-0.5 bg-gray-200"/>
      <p className="text-[#8F8F8F] text-sm font-medium text-center py-5 px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">All Rights Reserved - Muhammad Rizwan Malik - @2024</p>
    </>
  );
};

export default Footer;
