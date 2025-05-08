import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets";
import { EventContext } from "../context/EventContext";
import { toast } from "react-toastify";

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState<Boolean>(false);
  const { navigate, token, setToken } = useContext(EventContext);

  const logout = () => {
    navigate(`/login`);
    localStorage.removeItem("token");
    setToken("");
    toast.success("Logged Out");
  };

  return (
    <header className="px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <nav className="flex justify-between font-medium py-4">
        <Link to={`/`}>
          <img src={assets.event_logo} alt="event_logo" className="w-24" />
        </Link>
        <ul className="hidden sm:flex gap-4 xs:gap-6 md:gap-8 lg:gap-12 justify-center items-center text-[#CBCBCB]">
          <NavLink to={`/`} className={`hover:text-[#06AED5]`}>
            <p>Home</p>
          </NavLink>
          <NavLink to={`/about`} className={`hover:text-[#06AED5]`}>
            <p>About</p>
          </NavLink>
          <NavLink to={`/events`} className={`hover:text-[#06AED5]`}>
            <p>Events</p>
          </NavLink>
          {token ? (
            <div className="group relative">
              <img
                src={assets.profile_icon}
                alt="profile_icon"
                className="w-5 cursor-pointer"
              />
              <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                  <p className="cursor-pointer hover:text-black">My profile</p>
                  <p
                    onClick={logout}
                    className="cursor-pointer hover:text-black"
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <NavLink to={`/login`} className={`hover:text-[#06AED5]`}>
              <p>Login</p>
            </NavLink>
          )}
        </ul>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="menu_icon"
          className="w-10 cursor-pointer sm:hidden"
        />
        {/* SideBar menu for small screens */}
        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden z-10 bg-white transition-all ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray-600">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-3 cursor-pointer"
            >
              <img
                src={assets.dropdown_icon}
                alt="drowpdown_icon"
                loading="lazy"
                className="h-4 rotate-180"
              />
              <p>Back</p>
            </div>
            <NavLink
              to="/"
              className="py-2 pl-6 border"
              onClick={() => setVisible(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="py-2 pl-6 border"
              onClick={() => setVisible(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/events"
              className="py-2 pl-6 border"
              onClick={() => setVisible(false)}
            >
              Events
            </NavLink>
            {token ? (
              <div className="group relative">
                <img
                  src={assets.profile_icon}
                  alt="profile_icon"
                  className="w-5 cursor-pointer"
                />
                <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                  <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                    <p className="cursor-pointer hover:text-black">
                      My profile
                    </p>
                    <p
                      onClick={logout}
                      className="cursor-pointer hover:text-black"
                    >
                      Logout
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                to="/login"
                className="py-2 pl-6 border"
                onClick={() => setVisible(false)}
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
