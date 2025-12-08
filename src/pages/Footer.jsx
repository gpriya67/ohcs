import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-6 border-t border-gray-200 mt-10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Section */}
        <p className="text-[13px] sm:text-[14px] text-gray-600 inter text-center md:text-left">
          © 2025 Dr V.N.Asvini Devi. All Rights Reserved.
        </p>

        {/* Right Section */}
        <p className="text-[13px] sm:text-[14px] text-gray-600 font-aileron flex items-center justify-center md:justify-end gap-1">
          Designed with ❤️ 
          <a
            href="https://brandspark.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            Brand Spark
          </a>
        </p>

      </div>
    </footer>
  );
};

export default Footer;
