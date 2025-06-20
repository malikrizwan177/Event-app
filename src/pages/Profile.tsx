import React, { useEffect, useContext } from "react";
import CustomButton from "../components/CustomButton";
import { EventContext } from "../context/EventContext";
import { toast } from "react-toastify";

const Profile: React.FC = () => {
  const { navigate, setToken, user } = useContext(EventContext);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const logout = () => {
    navigate(`/login`);
    localStorage.removeItem("token");
    setToken("");
    toast.success("Logged Out");
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-16 bg-white">
        <div className="flex flex-col items-center text-center gap-4">
          {user?.avatar ? (
            <img
              src={user?.avatar}
              alt="User Avatar"
              className="w-32 h-32 rounded-full shadow-custom-sd object-cover"
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-40"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          )}
          <h1 className="text-4xl font-semibold text-[#525252]">
            {user?.name}
          </h1>
          <p className="text-gray-600 max-w-xl">
            {user?.bio ||
              "Welcome to your profile. Here you can view your details, past bookings, and your preferences."}
          </p>
          <div className="flex gap-4 mt-4">
            <CustomButton
              text="Logout"
              bg_color="bg-white"
              text_color="text-primary"
              hover_bg_color="bg-red-100"
              hover_text_color="text-red-600"
              other_classes="border border-red-500 px-6 py-2"
              onClick={logout}
            />
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-20">
        <p className="text-[#525252] text-5xl font-semibold">Account Details</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="border p-6 shadow-custom-sd rounded-lg">
            <h3 className="text-xl font-medium text-[#525252] mb-2">
              Contact Info
            </h3>
            <p className="text-gray-600">Email: {user?.email}</p>
            <p className="text-gray-600 mt-1">Phone: {user?.phone || "-"}</p>
          </div>
          <div className="border p-6 shadow-custom-sd rounded-lg">
            <h3 className="text-xl font-medium text-[#525252] mb-2">
              Preferences
            </h3>
            <p className="text-gray-600">
              Notifications: {user?.notifications ? "On" : "Off"}
            </p>
            <p className="text-gray-600 mt-1">
              Language: {user?.language || "English"}
            </p>
          </div>
          <div className="border p-6 shadow-custom-sd rounded-lg md:col-span-2">
            <h3 className="text-xl font-medium text-[#525252] mb-2">
              Booking History
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {user?.history.length > 0 ? (
                user?.history.map((item: any, idx: any) => (
                  <li key={idx}>{item}</li>
                ))
              ) : (
                <p>No past bookings found.</p>
              )}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
