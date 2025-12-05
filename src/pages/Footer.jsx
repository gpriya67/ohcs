import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-6 px-4 md:px-20 rounded-t-3xl shadow-inner fixed bottom-0 left-0">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

        {/* LEFT SIDE TEXT */}
        <div className="text-center md:text-left text-[#444] text-[14px] leading-relaxed">
          <p>Dr V.N.Asvini Devi. All Rights Reserved</p>
          <p>
            Designed With ❤️ 
            <a 
              href="#" 
              className="text-[#0077B6] font-semibold ml-1 hover:underline"
            >
              Brand Spark
            </a>
          </p>
        </div>

        {/* NAV MENU */}
        <div className="flex gap-6 text-[15px] text-[#6B6B6B] font-medium">
          <a href="#home" className="hover:text-[#0077B6]">Home</a>
          <a href="#about" className="hover:text-[#0077B6]">About</a>
          <a href="#cases" className="hover:text-[#0077B6]">Cases</a>
          <a href="#certifications" className="hover:text-[#0077B6]">Certifications</a>
          <a href="#achievements" className="hover:text-[#0077B6]">Achievements</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
