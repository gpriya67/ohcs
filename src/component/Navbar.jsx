import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Cases", id: "cases" },
    { name: "Certification", id: "certification" },
    { name: "Achievements", id: "achievements" },
  ];

  const linkClass = (id) =>
    active === id
      ? "border-b-2 border-white font-semibold transition"
      : "hover:border-b-2 hover:border-white transition";

  return (
    <div className="fixed w-full top-0 left-0 z-50 bg-transparent">
      <nav className="max-w-[1300px] mx-auto px-4 md:px-6">
        <div className="py-1 md:py-5 px-1 md:px-10 bg-primary rounded-2xl mt-4 shadow-lg flex justify-between items-center">

          {/* Logo */}
          

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex gap-8 font-aileron font-medium text-white text-lg ">
            {navItems.map((item) => (
              <li key={item.id} className=" cursor-pointer">
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onSetActive={() => setActive(item.id)}
                  className={linkClass(item.id)}
                >
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* DESKTOP ENQUIRY BUTTON */}
          <div className="hidden md:flex">
            <Link
              to="enquiry"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onSetActive={() => setActive("enquiry")}
            >
              <button className="bg-white text-primary px-6 py-2 cursor-pointer rounded-md font-aileron font-medium hover:bg-gray-100 transition border-b-2 shadow">
                <span>For Enquiry</span>
              </button>
            </Link>
          </div>

          {/* MOBILE MENU ICON */}
          
         <div className="md:hidden flex items-center justify-between w-full px-2 py-1 md:px-4 md:py-3 ">
  {/* Logo */}
  <div className="w-10 h-10">
    <img src="/assets/logo.svg" alt="Logo" className="w-full h-full object-contain" />
  </div>

  {/* Menu button */}
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="text-white text-3xl focus:outline-none"
  >
    {menuOpen ? <HiX /> : <HiMenu />}
  </button>
</div>

        </div>


        {/* MOBILE MENU DROPDOWN */}
       {menuOpen && (
  <div className="md:hidden bg-primary text-white w-full md:px-6 md:py-6 flex flex-col gap-4 mt-2 rounded-b-2xl shadow-lg animate-slide-down">
    {navItems.map((item) => (
      <Link
        key={item.id}
        to={item.id}
        spy={true}
        smooth={true}
        duration={500}
        offset={-70}
        onSetActive={() => setActive(item.id)}
        onClick={() => setMenuOpen(false)}
        className={`text-lg font-aileron cursor-pointer py-2 px-4 rounded-md transition-all ${
          active === item.id
            ? "text-white' font-semibold"
            : "hover:underline underline-offset-4 hover:decoration-white"
        }`}
      >
        <span>{item.name}</span>
      </Link>
    ))}

    <Link
      to="enquiry"
      spy={true}
      smooth={true}
      duration={500}
      offset={-70}
      onClick={() => setMenuOpen(false)}
    >
      <button className=" text-primary px-6 py-2 rounded-md font-aileron font-medium w-full hover:underline underline-offset-4  transition-all shadow-md">
        <span>Enquiry</span>
      </button>
    </Link>
  </div>
)}

      </nav>
    </div>
  );
};

export default Navbar;
