import React from "react";
import { CiWifiOn } from "react-icons/ci";
import { FaTv, FaWifi, FaPlane } from "react-icons/fa";
import { IoTvOutline } from "react-icons/io5";
import { PiShowerThin } from "react-icons/pi";

const RoomCard = ({ image, title, price }) => (
  <div className="bg-white overflow-hidden w-[350px] shadow-sm">
    <img src={image} alt={title} className="w-full h-72 object-cover" />
    <div className="p-4">
      <div className="grid grid-cols-2">
        <div>
          <h3 className="text-xl text-primary font-semibold">{title}</h3>
        </div>
        <div className="text-right">
          <p className="text-primary text-sm">Available: Yes</p>
        </div>
      </div>

      <p className="text-2xl text-primary mt-2">₦{price.toLocaleString()}</p>
      
      <div className="mt-4 border-t border-primary pt-4 w-full"></div>
      
      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-8">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <IoTvOutline className="text-2xl text-primary" />
          </div>
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <PiShowerThin className="text-2xl text-primary" />
          </div>
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <CiWifiOn className="text-2xl text-primary" />
          </div>
        </div>
        <button className="bg-primary text-white px-6 py-2 hover:bg-secondary transition">
          Book now
        </button>
      </div>
    </div>
  </div>
);

const ListRoom = () => {
  const rooms = Array(6).fill({
    image: "../../../public/assets/bedroom.png",
    title: "The Royal Room",
    price: 190000,
  });

  return (
    <div className="container mx-auto px-2 py-24">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 justify-items-center">
          {rooms.map((room, index) => (
            <RoomCard key={index} {...room} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListRoom;