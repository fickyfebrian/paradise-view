import React, { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 z-40 transition-transform duration-300 ${
          showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
        } ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-32">
            <div className="">
              <a
                className="text-4xl font-black font-poppins text-black"
                href="/"
              >
                CCTV
              </a>
            </div>
            <ul className="hidden md:flex space-x-8 font-poppins">
              <li className="relative group">
                <a href="/" className="text-black text-2xl">
                  Home
                </a>
              </li>
              <li className="relative group" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center text-black text-2xl focus:outline-none"
                >
                  <span>Paket</span>
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24.00 24.00"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    stroke="#000000"
                    strokeWidth="0.00024"
                    className="ml-2" // Menambahkan margin left agar ada jarak antara teks dan ikon
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#CCCCCC"
                      strokeWidth="0.144"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path>
                      </g>
                    </g>
                  </svg>
                </button>

                {dropdownOpen && (
                  <div className="absolute left-0 w-40 bg-white shadow-lg mt-2 rounded-md z-10">
                  
                    <a
                      href="/paket"
                      className="block px-4 py-2 text-black hover:bg-gray-100"
                    >
                      Paket
                    </a>
                    <a
                      href="/promo-murah"
                      className="block px-4 py-2 text-black hover:bg-gray-100"
                    >
                      Promo Murah
                    </a>
                    <a
                      href="/merk-cctv-1"
                      className="block px-4 py-2 text-black hover:bg-gray-100"
                    >
                      Merk CCTV 1
                    </a>
                    <a
                      href="/merk-cctv-2"
                      className="block px-4 py-2 text-black hover:bg-gray-100"
                    >
                      Merk CCTV 2
                    </a>
                  </div>
                )}
              </li>
              <li className="relative group">
                <a href="/portfolio" className="text-black text-2xl">
                  Portfolio
                </a>
              </li>
              <li className="relative group">
                <a href="/klaim" className="text-black text-2xl">
                  Klaim
                </a>
              </li>
              <li className="relative group">
                <a href="/about" className="text-black text-2xl">
                  Tentang Kami
                </a>
              </li>
            </ul>
            <div className="md:hidden">
              <button
                className="text-black focus:outline-none"
                onClick={() => setSidebarOpen(true)}
              >
                <svg
                  viewBox="-2.4 -2.4 28.80 28.80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                >
                  <g id="Menu / Menu_Alt_01">
                    <path
                      d="M12 17H19M5 12H19M5 7H19"
                      stroke="black"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-[400px] bg-white transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "transform translate-x-0" : "transform translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col p-4 space-y-4 text-center items-center justify-center min-h-screen">
          <button
            className="absolute top-4 right-4 text-black text-4xl z-10"
            onClick={() => setSidebarOpen(false)}
          >
            &times;
          </button>
          <a
            href="/"
            className="text-black text-2xl"
            onClick={() => setSidebarOpen(false)}
          >
            Home
          </a>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-black text-2xl focus:outline-none"
            >
              Paket
            </button>
            {dropdownOpen && (
              <div className="mt-2">
                 <a
                  href="/paket"
                  className="block py-2 text-black"
                  onClick={() => setSidebarOpen(false)}
                >
                  Promo Murah
                </a>
                <a
                  href="/promo-murah"
                  className="block py-2 text-black"
                  onClick={() => setSidebarOpen(false)}
                >
                  Promo Murah
                </a>
                <a
                  href="/merk-cctv-1"
                  className="block py-2 text-black"
                  onClick={() => setSidebarOpen(false)}
                >
                  Merk CCTV 1
                </a>
                <a
                  href="/merk-cctv-2"
                  className="block py-2 text-black"
                  onClick={() => setSidebarOpen(false)}
                >
                  Merk CCTV 2
                </a>
              </div>
            )}
          </div>
          <a
            href="/portfolio"
            className="text-black text-2xl"
            onClick={() => setSidebarOpen(false)}
          >
            Portfolio
          </a>
          <a
            href="/klaim"
            className="text-black text-2xl"
            onClick={() => setSidebarOpen(false)}
          >
            Klaim
          </a>
          <a
            href="/about"
            className="text-black text-2xl"
            onClick={() => setSidebarOpen(false)}
          >
            Tentang Kami
          </a>
        </div>
      </div>
    </>
  );
}
