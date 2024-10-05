import React from "react";
import bed from "../../../public/assets/bed.png";
import gym from "../../../public/assets/gym.png";
import restaurant from "../../../public/assets/restaurant.png";

const Tour = () => {
  const sections = [
    {
      title: "Luxurious rooms",
      image: bed,
      description:
        "The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design. Luxurious bedrooms that will make you never want to leave your room again. See more ideas about luxurious bedrooms, bedroom design",
    },
    {
      title: "Gym Center",
      image: gym,
      description:
        "The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design.Luxurious bedrooms that will make you never want to leave your room again. See more ideas about luxurious bedrooms, bedroom design",
    },
    {
      title: "Restaurant",
      image: restaurant,
      description:
        "The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design.Luxurious bedrooms that will make you never want to leave your room again. See more ideas about luxurious bedrooms, bedroom design",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center items-center pt-32 pb-16">
        <h1 className="text-5xl font-poppins font-medium">Take a tour</h1>
      </div>
      {sections.map((section, index) => (
        <div key={index} className="relative mb-40">
          <div className="w-full h-[700px] rounded-3xl overflow-hidden">
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-full object-cover object-bottom"
            />
          </div>
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-1/2 h-80 items-center justify-center bg-white p-6 rounded-3xl shadow-lg">
            <div className="bg-primary h-7 rounded-t-3xl absolute top-0 left-0 right-0"></div>
            <h2 className="text-4xl text-primary font-poppins font-medium mb-4 text-center mt-6 py-6">
              {section.title}
            </h2>
            <p className="text-xl text-black font-poppins text-center">
              {section.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tour;