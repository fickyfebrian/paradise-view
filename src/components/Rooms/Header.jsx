import React from "react";
import bed from "../../../public/assets/bed.png";
import { FaArrowDown } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="relative mt-32 w-auto h-[850px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bed})`,
          height: "100%",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary bg-opacity-50 flex items-center justify-center">
        {/* Text Container */}
        <div className="flex flex-col items-center justify-center text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-6xl lg:text-7xl font-poppins font-bold mb-4">
            Rooms and Suites
          </h1>
          <p className="text-lg lg:text-2xl leading-relaxed mt-12 font-poppins font-medium">
            The elegant luxury bedrooms in this gallery showcase custom interior{" "}
            <br />
            designs & decorating ideas. View pictures and find your <br />
            perfect luxury bedroom design.
          </p>
          <button className="h-28 w-16 rounded-full border-2 items-center justify-center flex mt-14">
            <FaArrowDown className="text-2xl animate-bounce" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
