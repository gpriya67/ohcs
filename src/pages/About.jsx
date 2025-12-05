import React from "react";

const About = () => {
  return (
    <div className="relative bg-[#BDD8D1] rounded-2xl w-full max-w-[1440px] mx-auto overflow-hidden py-14 px-4 md:px-20">

      {/* About Title */}
      <h1 className="text-center text-[28px] md:text-[40px] font-bold font-aileron">
        About Me
      </h1>

      {/* Subtext */}
      <p className="text-center text-[16px] md:text-[22px] text-[#747474] font-aileron mt-2">
        To restore a smile is to restore a part of someone’s life.
      </p>

      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row justify-center gap-5 mt-10 relative z-10">

        {/* Left Image */}
        <div className="w-full md:w-[340px] h-auto flex justify-center items-center">
          <img
            src="/assets/g-image.svg"
            className="w-full h-auto"
          />
        </div>

        {/* Right Text */}
        <div className="w-full md:w-[780px] bg-white/40 backdrop-blur-lg border border-white/20 rounded-2xl p-4 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <p className="font-aileron text-[16px] md:text-[24px] text-secondary leading-relaxed">
            My journey in dentistry began at 
            <b> Meenakshi Ammal Dental College (2010–2015)</b>, where I learned
            how compassionate care and precise craftsmanship can truly change lives.
            <br /><br />
            Prosthodontics became my calling as I witnessed the joy and confidence 
            patients regain through restored 
            <b> smiles and comfortable, functional oral rehabilitation.</b>
          </p>
        </div>

      </div>

      {/* SECOND ROW – GLASS CARDS */}
      <div className="flex flex-col md:flex-row justify-center gap-5 mt-10 relative z-10">

        {/* Left Glass Card */}
        <div className="w-full md:w-[600px] bg-white/40 backdrop-blur-lg border border-white/20 rounded-2xl p-4 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <p className="font-aileron text-[16px] md:text-[22px] text-secondary leading-relaxed">
            The artistry of prosthetics, full-mouth rehabilitation, and dentures 
            continues to inspire my passion for creating 
            <b> life-changing, aesthetic, and functional transformations.</b>
          </p>
        </div>

        {/* Right Glass Card */}
        <div className="w-full md:w-[600px] bg-white/40 backdrop-blur-lg border border-white/20 rounded-2xl p-4 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <p className="font-aileron text-[16px] md:text-[22px] text-secondary leading-relaxed">
            I am currently advancing my <b>prosthodontic expertise</b> at 
            Saveetha Dental College, Chennai, committed to combining scientific 
            excellence with empathy in every patient interaction.
          </p>
        </div>

      </div>

      {/* BACKGROUND TOOTH IMAGE */}
      <img
        src="/assets/tee.svg"
        className="
          absolute 
          right-0 
          top-20
          w-[300px] sm:w-[500px] md:w-[690px]
          h-auto
          opacity-100
          pointer-events-none
          select-none
        "
      />

    </div>
  );
};

export default About;
