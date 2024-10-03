import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-16 py-16">
        <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Paradise View Section */}
          <div className="col-span-1">
            <h2 className="text-5xl font-dancing mb-4">Paradise view</h2>
            <p className="text-l text-justify font-poppins">
              The service at the Hotel Monteleone was exceptional. There was
              absolutely no issue that was not addressed timely and to our
              satisfaction results. We were particularly impressed with how the
              hotel staff anticipated our needs (periodically coming by the
              Board Room to check with us)
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="ml-20 font-poppins">
            <h3 className="text-xl font-semibold mb-4">Quick links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Room booking
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Rooms
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Explore
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="font-poppins">
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Refund policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  F.A.Q
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media and Newsletter Section */}
          <div className="font-poppins">
            <h3 className="text-xl font-semibold mb-4">Social media</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="font-poppins">
            <h3 className="text-xl font-semibold mt-6 mb-4">Newsletter</h3>
            <p className="text-sm mb-2">
              Kindly subscribe to our newsletter to get latest deals on our
              rooms and vacation discount.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-2 rounded-l-md text-black"
              />
              <button className="bg-secondary text-white px-4 py-2 rounded-r-md hover:bg-gray-200 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 border-t border-gray-300 pt-4 w-full ">
        <div className="px-10 pt-10 text-center items-center">
          <p>Paradise view 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
