import React from "react";
import bed from "../../../public/assets/bed.png";

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
        <div className="text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-5xl lg:text-6xl font-poppins font-bold mb-4">About us</h1>
          <p className="text-lg lg:text-xl leading-relaxed mt-12 font-poppins">
            The elegant luxury bedrooms in this gallery showcase custom interior <br />
            designs & decorating ideas. View pictures and find your <br />
            perfect luxury bedroom design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
