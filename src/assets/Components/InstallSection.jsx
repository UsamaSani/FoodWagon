import React from "react";
import tagIcon from "../Images/tag.png";
import locationIcon from "../Images/locationinstall.png";
import clockIcon from "../Images/clock.png";
import phoneImage from "../Images/phone.png";
import googlePlayIcon from "../Images/Google Play logo.png";
import appleStoreIcon from "../Images/Apple logo.png";
import curveImage from "../Images/Curve.svg";

const InstallSection = () => {
  return (
    <section className="bg-yellow-100 pt-16 pb-32 relative flex flex-col items-center">
      <div className="w-11/12 md:w-4/5 lg:w-3/4">
        {/* App Features */}
        <div className="bg-white shadow-lg rounded-3xl p-8 flex flex-col sm:flex-row justify-between gap-8 items-center md:gap-16">
          {/* Feature 1 */}
          <div className="flex items-center gap-4 md:w-1/3">
            <img src={tagIcon} alt="Daily Discounts" className="w-16" />
            <p className="text-orange-600 font-bold text-2xl md:text-3xl">
              Daily Discounts
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-4 md:w-1/3">
            <img src={locationIcon} alt="Live Tracking" className="w-16" />
            <p className="text-orange-600 font-bold text-2xl md:text-3xl">
              Live Tracking
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-4 md:w-1/3">
            <img src={clockIcon} alt="Quick Delivery" className="w-16" />
            <p className="text-orange-600 font-bold text-2xl md:text-3xl">
              Quick Delivery
            </p>
          </div>
        </div>

        {/* Mobile Install Section */}
        <div className="mt-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <img
            src={phoneImage}
            alt="Phone"
            className="w-4/5 sm:w-3/4 lg:w-2/4 z-10"
          />

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="text-orange-600 font-extrabold text-4xl mb-4 leading-tight">
              Install the App
            </p>
            <p className="text-gray-600 text-sm lg:text-base font-medium mb-6 max-w-lg">
              It's never been easier to order food. Look for the finest discounts
              and immerse yourself in a world of delectable food.
            </p>

            <div className="flex gap-4 relative z-20">
              {/* Google Play Button */}
              <a
                href="#"
                className="flex items-center bg-white shadow-md px-6 py-3 rounded-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <img src={googlePlayIcon} alt="Google Play" className="w-8" />
                <div className="ml-3 text-left">
                  <span className="text-xs text-gray-600">Get it on</span>
                  <p className="font-bold text-gray-900">Google Play</p>
                </div>
              </a>

              {/* App Store Button */}
              <a
                href="#"
                className="flex items-center bg-white shadow-md px-6 py-3 rounded-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <img src={appleStoreIcon} alt="App Store" className="w-8" />
                <div className="ml-3 text-left">
                  <span className="text-xs text-gray-600">Download on the</span>
                  <p className="font-bold text-gray-900">App Store</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Curve */}
      <img
        src={curveImage}
        alt="Curve Design"
        className="absolute bottom-0 w-full z-10 h-[49%] object-cover"
      />
    </section>
  );
};

export default InstallSection;
