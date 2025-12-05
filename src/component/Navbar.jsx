import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setActive(id);
    setMenuOpen(false);

    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Cases", id: "cases" },
    { name: "Certifications", id: "certification" },
    { name: "Achievements", id: "achievements" },
  ];

  return (
    <>
      {/* FIXED NAVBAR */}
      <div className="fixed w-[400px] top-0 left-0 md:w-full z-50 flex justify-center bg-transparent">
        <div className="w-full px-2 max-w-[1200px] md:px-4">

          <div className="py-4 md:py-5 px-4 md:px-10 bg-primary rounded-2xl mt-4 shadow-lg flex justify-between items-center">

            {/* DESKTOP NAV ITEMS */}
            <ul className="hidden md:flex gap-8 font-aileron font-medium text-white text-lg">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`cursor-pointer pb-1 ${
                    active === item.id
                      ? "border-b-4 border-white"
                      : "hover:underline underline-offset-8"
                  }`}
                >
                  {item.name}
                </li>
              ))}
            </ul>

            {/* FOR ENQUIRY BUTTON - DESKTOP */}
            <button
              onClick={() => scrollToSection("enquiry")}
              className="hidden md:block bg-white text-primary rounded-md px-6 py-2 shadow-lg font-aileron font-medium"
            >
              For Enquiry
            </button>

            {/* MOBILE MENU */}
            <div className="flex justify-between items-center md:hidden w-full px-4 py-3">
              <div className="w-10 h-10">
                <img src="/assets/tee.svg" className="w-full h-auto" />
              </div>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white text-3xl"
              >
                {menuOpen ? <HiX /> : <HiMenu />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="fixed top-[90px] left-0 w-[400px] bg-primary text-white py-5 shadow-lg md:hidden z-40 mt-10">
          <ul className="flex flex-col items-center gap-5 text-lg font-aileron">

            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`cursor-pointer pb-1 ${
                  active === item.id
                    ? "border-b-4 border-white"
                    : "hover:underline underline-offset-8"
                }`}
              >
                {item.name}
              </li>
            ))}

            {/* FOR ENQUIRY - MOBILE */}
            <button
              onClick={() => scrollToSection("enquiry")}
              className="bg-white text-primary rounded-md px-6 py-2 shadow-lg font-aileron font-medium mt-3"
            >
              For Enquiry
            </button>

          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
