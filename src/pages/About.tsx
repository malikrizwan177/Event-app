import React, { useEffect } from "react";
import { assets } from "../assets";
import Subscribe from "../components/Subscribe";

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div>
      {/* ABOUT US Section */}
      <section className="px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-20">
        <div className="text-2xl text-center mb-10">
          <p className="text-[#525252] text-5xl font-semibold">
            About Us
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <img
            loading="lazy"
            src={assets.about_img}
            alt="About Us"
            className="w-full md:w-1/2 rounded-lg shadow-custom-sd"
          />
          <div className="md:w-1/2 text-gray-600 space-y-6">
            <p>
              At Event, we believe discovering live experiences should be effortless and inspiring. Our intuitive platform connects passionate attendees with curated events across the country, guiding you seamlessly from finding the perfect show to securing your spot in just a few clicks.
            </p>
            <p>
              We prioritize personalized recommendations, real-time availability updates, and advanced search filters, so you always uncover the events that matter most to you. With secure checkout and transparent pricing, every booking is smooth and worry-free—letting you focus on the excitement rather than the logistics.
            </p>
            <p className="text-gray-800 mt-2"><strong>Our Mission</strong></p>
            <p>
              To empower communities by delivering unforgettable live events through innovative technology, exceptional service, and unwavering convenience.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US Section */}
      <section className="px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-20 bg-[#F5F5F5]">
        <div className="text-xl mb-10">
          <p className="text-[#525252] text-5xl font-semibold">
            Why Choose Us
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <div id="card_1" className="flex-1 border p-8 shadow-custom-sd rounded-lg hover:bg-primary text-primary hover:text-white transition-all">
            <img
              src={assets.card_img_1_white}
              alt="Quality Assurance"
              className="bg-primary rounded-full p-4 w-16 mb-4"
            />
            <p className=" font-semibold text-2xl mb-2">
              Quality Assurance
            </p>
            <p className="text-gray-600 text-sm">
              We ensure top-notch quality in every event and service we provide.
            </p>
          </div>

          <div id="card_2" className="flex-1 border p-8 shadow-custom-sd rounded-lg hover:bg-primary transition-all">
            <img
              src={assets.card_img_2_white}
              alt="Convenience"
              className="bg-primary rounded-full p-4 w-16 mb-4"
            />
            <p className="text-primary font-semibold text-2xl mb-2">
              Convenience
            </p>
            <p className="text-gray-600 text-sm">
              Our platform makes booking and attending events effortless.
            </p>
          </div>

          <div id="card_3" className="flex-1 border p-8 shadow-custom-sd rounded-lg hover:bg-primary transition-all">
            <img
              src={assets.card_img_3_white}
              alt="Customer Service"
              className="bg-primary rounded-full p-4 w-16 mb-4"
            />
            <p className="text-primary font-semibold text-2xl mb-2">
              Exceptional Service
            </p>
            <p className="text-gray-600 text-sm">
              Our support team is dedicated to helping you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER NEWSLETTER */}
        <Subscribe />
    </div>
  );
};

export default About;
