import React from "react";

const Certification = () => {
  return (
    <div className="px-6 sm:px-12 lg:px-24 py-16 bg-[#E8F0F2]">
      {/* Title */}
      <div className="flex justify-center items-center mb-10">
        <h1 className="font-bold font-aileron text-3xl sm:text-4xl text-[#1A2B3B] tracking-wide">
          Certificates
        </h1>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* CARD 1 */}
        <div className="bg-[#faf9f4] p-4 rounded-2xl shadow-md 
                        hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
          <p className="font-normal text-[10px] text-gray-500 uppercase leading-none mb-1">
            Certification For
          </p>

          <h2 className="text-[20px] sm:text-[22px] font-bold font-aileron text-[#1E1E1E] leading-tight mb-4">
            Certified – BPS Specialist
          </h2>

          <div className="rounded-xl overflow-hidden shadow-sm">
            <img
              src="/assets/ct.jpg"
              alt="Certificate"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-[#faf9f4] p-4 rounded-2xl shadow-md 
                        hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
          <p className="font-normal text-[10px] text-gray-500 uppercase leading-none mb-1">
            Certification For
          </p>

          <h2 className="text-[20px] sm:text-[22px] font-bold font-aileron text-[#1E1E1E] leading-tight mb-4">
            Certified – BPS Specialist
          </h2>

          <div className="rounded-xl overflow-hidden shadow-sm">
            <img
              src="/assets/ct.jpg"
              alt="Certificate"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>

        {/* CARD 3 */}
        <div className="bg-[#faf9f4] p-4 rounded-2xl shadow-md 
                        hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
          <p className="font-normal text-[10px] text-gray-500 uppercase leading-none mb-1">
            Certification For
          </p>

          <h2 className="text-[20px] sm:text-[22px] font-bold font-aileron text-[#1E1E1E] leading-tight mb-4">
            Certified – BPS Specialist
          </h2>

          <div className="rounded-xl overflow-hidden shadow-sm">
            <img
              src="/assets/ct.jpg"
              alt="Certificate"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Certification;
