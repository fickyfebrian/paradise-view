import React, { useState } from 'react';
import explore from "../../../public/assets/explore-view.png";
import { PiPlay } from 'react-icons/pi';
import { IoPlaySharp } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk membuka modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative mt-32 w-auto h-[850px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{
          backgroundImage: `url(${explore})`,
          height: "100%",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
        {/* Text Container */}
        <div className="text-center text-white max-w-3xl mx-auto px-4">
          <div className="bg-gray-200 h-40 w-40 rounded-full shadow-lg flex justify-center items-center">
          <div className="bg-gray-50 h-24 w-24 rounded-full shadow-lg flex justify-center items-center">
            <button 
            onClick={openModal}
            className="transition duration-400"
            >
            <IoPlaySharp className="text-primary hover:text-secondary text-5xl ml-3" />
            </button>
          </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-14 right-14 px-4 py-2"
            >
              <MdClose className="text-primary hover:text-secondary text-4xl " />
            </button>
            {/* YouTube Video */}
            <div className="relative pt-[55.25%]"> {/* Aspect Ratio 16:9 */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/7R-jM6-OC1A" // Ganti dengan link video YouTube
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
