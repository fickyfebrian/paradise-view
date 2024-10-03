import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Data dummy untuk testimonies
const testimoniesData = [
  {
    id: 1,
    date: "12 Sept. 2024",
    rating: 5,
    review:
      "The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.",
    user: {
      name: "Johnson Mars",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: 2,
    date: "24 Jan. 2024",
    rating: 4,
    review:
    "The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.",
      user: {
      name: "Shawn Smith",
      image: "https://images.unsplash.com/photo-1579038773867-044c48829161?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: 3,
    date: "1 Okt. 2024",
    rating: 4,
    review:
    "The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.",
      user: {
      name: "Michael Brown",
      image: "https://images.unsplash.com/photo-1482961674540-0b0e8363a005?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: 4,
    date: "8 August. 2024",
    rating: 3,
    review:
    "The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.",
      user: {
      name: "Emily Davis",
      image: "https://images.unsplash.com/photo-1597969892064-a7b26a98c335?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: 5,
    date: "14 Feb. 2024",
    rating: 5,
    review:
    "The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.",
      user: {
      name: "Chris Johnson",
      image: "https://images.unsplash.com/photo-1542847970-584270eb111b?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
];

const Testimonies = () => {
  return (
    <div className="py-12 mt-16">
      <h1 className="text-6xl font-poppins font-medium text-center text-black mb-8">
        Testimonies
      </h1>

      {/* Swiper Section */}
      <Swiper
        modules={[Navigation, A11y]}
        slidesPerView={2.5}
        spaceBetween={15}
        className="w-full lg:w-3/4 mx-auto"
      >
        {testimoniesData.map((testimony) => (
          <SwiperSlide key={testimony.id}>
            <div className="rounded-lg py-8 px-6 w-[550px] h-[510px] mx-auto shadow-sm flex flex-col justify-between">
              {/* Tanggal dan Bintang */}
              <div className="flex justify-between items-start pt-8 pb-12">
                <span className="font-poppins font-medium text-black text-l">
                  {testimony.date}
                </span>
                <div className="text-yellow-500">
                  {[...Array(testimony.rating)].map((_, i) => (
                    <FaStar key={i} className="inline" />
                  ))}
                </div>
              </div>

              {/* Ulasan dengan Icon Kutipan */}
              <div className="my-2 text-center flex-1">
                <FaQuoteLeft className="text-2xl text-secondary mb-2" />
                <p className="text-2xl font-poppins font-medium text-gray-600">
                  {testimony.review}
                </p>
                <FaQuoteRight className="text-2xl text-secondary mb-2 float-right" />
              </div>

              {/* User Info */}
              <div className="flex items-center mt-4">
                <img
                  src={testimony.user.image}
                  alt={testimony.user.name}
                  className="size-14 rounded-full object-cover"
                />
                <p className="ml-4 text-gray-800 text-lg font-semibold">
                  {testimony.user.name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonies;
