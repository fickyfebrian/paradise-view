import React from "react";
import hotel1 from "../../../public/assets/hotel1.png";
import { BiPlay } from "react-icons/bi";
import { FaCalendar, FaHotel, FaLocationDot, FaUser } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="bg-white relative">
      <div className="container mx-auto flex flex-col lg:flex-row items-center py-36 relative">
        {/* Left Section */}
        <div className="lg:w-1/2 z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-dancing font-semibold text-primary mb-8">
            Paradise View
          </h1>
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-poppins font-bold text-black mt-4">
            Hotel for every moment rich in emotion
          </h2>
          <p className="text-black text-lg sm:text-xl md:text-2xl mt-4">
            Every moment feels like the first time <br /> in paradise view
          </p>
          <div className="mt-12 ml-5 flex flex-col gap-5 sm:flex-row">
            <button
              className="bg-primary hover:bg-secondary font-poppins font-medium text-white text-xl h-16 w-full sm:w-52 rounded-full transition"
              onClick={() => console.log("Booking now")}
            >
              Book now
            </button>
            <div className="flex items-center gap-6">
              <button className="bg-emerald-400 text-white px-2 rounded-full h-16 w-16 flex items-center justify-center">
                <BiPlay className="text-5xl" />
              </button>
              <p className="text-black font-poppins font-medium text-xl">
                Take a tour
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img
            src={hotel1}
            alt="Hotel view"
            className="rounded-lg shadow-lg w-full h-[800px] max-w-md mx-auto lg:max-w-full"
          />
        </div>

        {/* Floating Booking Bar */}
        <div className="absolute left-0 right-0 mx-auto w-11/12 bottom-[-1rem] lg:bottom-[6rem] bg-white rounded-lg px-6 sm:px-12 py-6 z-20">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-start space-x-4 justify-center mb-4">
              <FaLocationDot className="text-2xl text-black" />
              <div className="text-left">
                <div className="font-poppins font-bold text-lg">Location</div>
                <select className="font-poppins mt-1 border-none text-lg text-gray-500">
                  <option>Abuja</option>
                  <option>Lagos</option>
                </select>
              </div>
            </div>

            <div className="flex items-start space-x-4 justify-center mb-4">
              <FaHotel className="text-2xl text-black" />
              <div className="text-left">
                <div className="font-poppins font-bold text-lg">Room Type</div>
                <select className="font-poppins mt-1 border-none text-lg text-gray-500">
                  <option>Standard</option>
                  <option>Deluxe</option>
                </select>
              </div>
            </div>

            <div className="flex items-start space-x-4 justify-center mb-4">
              <FaUser className="text-2xl text-black" />
              <div className="text-left">
                <div className="font-poppins font-bold text-lg">Person</div>
                <select className="font-poppins mt-1 border-none text-lg text-gray-500">
                  <option>01</option>
                  <option>02</option>
                </select>
              </div>
            </div>

            <div className="flex items-start space-x-4 justify-center mb-4">
              <FaCalendar className="text-2xl text-black" />
              <div className="text-left">
                <div className="font-poppins font-bold text-lg">Check in</div>
                <input
                  type="date"
                  className="border-none text-lg"
                  defaultValue="2023-03-09"
                />
              </div>
            </div>

            <div className="flex items-start space-x-4 justify-center mb-4">
              <FaCalendar className="text-2xl text-black" />
              <div className="text-left">
                <div className="font-poppins font-bold text-lg">Check Out</div>
                <input
                  type="date"
                  className="border-none text-lg"
                  defaultValue="2023-03-13"
                />
              </div>
            </div>

            <button
              className="bg-primary hover:bg-secondary text-white py-2 px-4 h-16 w-full sm:w-52 rounded transition"
              onClick={() => console.log("Booking now Floating Bar")}
            >
              Book now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
