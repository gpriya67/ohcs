import React from "react";
import { FaAward } from "react-icons/fa";

const Achievements = () => {
  const achievements = [
    {
      title: "Fellowship In Implantology",
      desc: "International Congress Of Oral Implantologists (ICOI)",
    },
    {
      title: "BPS Certified Dentist",
      desc: "Trained in Liechtenstein, Switzerland",
    },
    {
      title: "Research Contributions",
      desc: "15 Articles Authored, 4 Published",
    },
    {
      title: "Scientific Presentation Awards",
      desc: "Showcase & Star Summit (2017–2018)",
    },
  ];

  return (
    <div className=" flex justify-center items-center mt-5 rounded-2xl">
      <div className="  max-w-[1300px] flex justify-center items-center rounded-md">
    <div className="w-full bg-[#f8f8f2] py-16 px-4 md:px-20 rounded-md">
      
      {/* TITLE */}
      <div className="flex justify-center">
        <h1 className="text-[32px] sm:text-[36px] md:text-[42px] font-bold font-aileron">
          Achievements
        </h1>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 max-w-[1200px] mx-auto">
        {achievements.map((item, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-2xl p-5 sm:p-6 flex gap-4 items-start border border-[#e8e8e8]
                       hover:shadow-lg transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-sm">
              <FaAward size={22} />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-[18px] sm:text-[20px] font-semibold font-aileron text-[#1e1e1e] leading-snug">
                {item.title}
              </h3>
              <p className="text-[14px] sm:text-[15px] text-[#6c7480] mt-1 leading-snug font-medium inter">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
    </div>
    </div>
  );
};

export default Achievements;
