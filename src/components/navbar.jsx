import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../public/assets/pv.png";


export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 0);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [sidebarOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 z-40 transition-transform duration-300 ${
          showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
        } ${isScrolled ? "bg-white" : "bg-transparent"} `}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-0 pl-0">
          <div className="flex justify-between items-center h-36">
            {/* Logo */}
            <div className="flex items-center ml-0">
              <a
                className="text-3xl font-black font-poppins text-primary"
                href="/"
              >
                <img 
                src={Logo} 
                style={{ width: "60px" }}
                />
              </a>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8 font-poppins font-medium gap-10">
              {[
                { href: "/", text: "Home" },
                { href: "/explore", text: "Explore" },
                { href: "/rooms", text: "Rooms" },
                { href: "/about", text: "About" },
                { href: "/contact", text: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`text-2xl relative ${
                      isActive(item.href)
                        ? "text-primary hover:text-secondary"
                        : "text-black hover:text-secondary"
                    } transition-colors duration-300 group`}
                  >
                    {item.text}
                    <span className="absolute left-0 bottom-0 w-full h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-all delay-100 duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="hidden md:flex items-center">
              <button
                className="bg-primary hover:bg-secondary text-white py-2 px-4 h-16 w-52 rounded transition"
                onClick={() => console.log("Booking now Navbar")}
              >
                Book now
              </button>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="md:hidden flex items-center">
              <button
                className="text-black text-3xl"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                &#9776;
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-white transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-6">
          <button
            className="text-black text-3xl self-end"
            onClick={() => setSidebarOpen(false)}
          >
            &times;
          </button>
          {[
            { href: "/", text: "Home" },
            { href: "/portfolio", text: "Explore" },
            { href: "/klaim", text: "Klaim" },
            { href: "/about", text: "Tentang Kami" },
            { href: "/contact", text: "Contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-xl relative ${
                isActive(item.href)
                  ? "text-primary hover:text-secondary"
                  : "text-black hover:text-secondary"
              } transition-colors duration-300 group`}
              onClick={() => setSidebarOpen(false)}
            >
              {item.text}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          ))}
          <button
            className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded transition"
            onClick={() => {
              console.log("Booking now Navbar");
              setSidebarOpen(false);
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
}