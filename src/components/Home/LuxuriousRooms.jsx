import React from "react";
import roomImage1 from "../../../public/assets/luxury1.png";
import roomImage2 from "../../../public/assets/luxury2.png";
import roomImage3 from "../../../public/assets/luxury3.png";

import roomBg from "../../../public/assets/roomBg.png";

const LuxuriousRooms = () => {
  // Data array untuk room
  const rooms = [
    {
      id: 1,
      title: "Luxurious Room",
      description: "Television set, Extra sheets, Extra beef , and Breakfast",
      image: roomImage1,
      availableRooms: 2,
    },
    {
      id: 2,
      title: "Luxurious Room",
      description: "Television set, Extra sheets, Breakfast, and fireplace",
      image: roomImage2,
      availableRooms: 4,
    },
    {
      id: 3,
      title: "Luxurious Room",
      description: "Television set, Extra sheets, Breakfast, and fireplace, Console and bed rest",
      image: roomImage3,
      availableRooms: 6,
    },
  ];

  return (
    <div className="relative mt-32">
      {/* Background Section */}
      <div
        className="absolute inset-0 "
        style={{
          backgroundImage: `url(${roomBg})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="absolute inset-0 z-0 bg-primary opacity-80"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-0 container mx-auto py-12">
        {/* Title and Subtitle */}
        <div className="text-center">
          <h1 className="text-6xl font-poppins font-medium text-white">
            Luxurious Rooms
          </h1>
          <span className="block w-44 h-2 bg-white mx-auto my-4"></span>
          <p className="text-xl font-poppins text-gray-200 mb-24">
            All rooms are designed for your comfort
          </p>
        </div>

        {/* Card Section */}
        <div className="mt-12 flex flex-col lg:flex-row justify-center items-center gap-48">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="relative bg-white rounded-lg shadow-lg p-4 w-[400px] h-[400px] flex flex-col justify-between"
            >
              {/* Room Image */}
              <img
                src={room.image}
                alt="Luxurious Room"
                className="rounded-lg w-full h-[300px] object-cover px-4 pt-6"
              />

              {/* Available Rooms Info */}
              <span className="absolute top-14 right-16 bg-secondary text-white text-sm px-2 py-3 rounded">
                {room.availableRooms} Rooms available
              </span>

              {/* Room Details */}
              <div className="text-left px-4">
                <p className="text-2xl text-gray-700">{room.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LuxuriousRooms;
