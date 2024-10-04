import React from "react";
import { FaWifi, FaDumbbell, FaParking, FaSwimmer} from "react-icons/fa";
import { GiChickenOven } from "react-icons/gi";
import { HiLightBulb } from "react-icons/hi";
import { IoGameController } from "react-icons/io5";
import { MdLocalLaundryService } from "react-icons/md";

const Facilities = () => {
  const items = [
    {
      name: "Swimming Pool",
      icon: <FaSwimmer />,
    },
    {
      name: "WiFi",
      icon: <FaWifi />,
    },
    {
      name: "Breakfast",
      icon: <GiChickenOven />,
    },
    {
        name: "Gym",
        icon: <FaDumbbell/>,
      },
    {
      name: "Game Center",
      icon: <IoGameController />,
    },
    {
      name: "24/7 Light",
      icon: <HiLightBulb />,
    },
    {
      name: "Laundry",
      icon: <MdLocalLaundryService />,
    },
    {
      name: "Parking",
      icon: <FaParking />,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center px-4 py-4">
      <div className="font-poppins font-medium text-6xl text-black text-center mb-4">
        Our Facilities
      </div>

      <div className="font-poppins font-medium text-2xl text-black text-center mb-8">
        We offer modern (5 star) hotel facilities for your comfort.
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12 sm:gap-32 md:gap-44 lg:gap-14 py-2 px-24">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center justify-center rounded-lg size-44 gap-0 md:size-80 lg:size-96 p-4 transition-transform duration-300 hover:scale-105"
          >
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-primary">{item.icon}</div>
            <div className="text-xl md:text-4xl lg:text-2xl font-medium text-primary px-4 py-4">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
