import React from "react";
import client1 from "../../../public/assets/client1.png"
import client2 from "../../../public/assets/client2.png"
import client3 from "../../../public/assets/client3.png"
import client4 from "../../../public/assets/client4.png"
import client5 from "../../../public/assets/client5.png"

const Client = () => {
  const clients = [client1, client2, client3, client4, client5, client1, client2, client3, client4, client5, client1, client2, client3, client4, client5];

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Clients</h2>
      <div className="marquee-container">
        <div className="marquee">
          {[...clients, ...clients].map((client, index) => (
            <img key={index} src={client} alt={`Client ${index + 1}`} className="h-16" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;