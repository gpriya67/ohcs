import React from "react";

const Home = () => {
  return (
    <>
 <div className=" flex justify-center items-center overflow-hidden">
   <div className="hidden md:flex px-20 bg-[#faf9f4] w-full justify-center items-center">
  <div className="flex justify-between w-full mt-[15%] ">

    {/* LEFT SECTION */}
    <div>
      <h1>
        <span className="text-[50px] font-normal font-aileron">Hi, I’m</span>
        <br />
        <span className="text-[60px] text-primary font-bold font-aileron text-nowrap">
          Dr. V N Asvini Devi 
        </span>
        <br />
        <p className="text-[30px] inter font-semibold font-aileron  ">Prosthodontist and Implantologist
          <br/>
          BPS certified <span className=" text-[16px]">(Lichtenstein,Switzerland)</span>
</p>
      </h1>

      <div className="mt-15">
        <div className="flex gap-3">
          <img src="/assets/map.svg" />
          <h4 className="text-secondary font-normal text-[20px]">
            Chennai, India
          </h4>
        </div>

        <div className="flex gap-3 mt-2">
          <img src="/assets/email.svg" />
          {/* <h4 className="text-secondary font-normal text-[20px]">
            care@drasvinidevi.com
          </h4> */}
          <h4 className="text-secondary font-normal text-[20px]">
  <a
    href="mailto:care@drasvinidevi.com"
    className="hover:underline"
  >
    care@drasvinidevi.com
  </a>
</h4>

        </div>
      </div>
    </div>

    {/* RIGHT SECTION */}
 <div className="flex justify-end "> {/* Add overflow-hidden here */}
  <div className="relative flex items-center justify-center">

    {/* Spinning Background */}
    <img
      src="/assets/group.svg"
      className="animate-spin-slow"
      alt="Spinning background"
    />

    {/* Centered Overlay Image */}
    <img
      src="/assets/asvin.png"
      className="absolute"
      alt="Overlay image"
    />

  </div>
</div>



  </div>
</div>

 </div>


    {/* mobile */}
   <div className="px-4 md:hidden">
  <div className="mt-20 flex flex-col items-center">

    {/* Text Section */}
    <div className="text-center">
      <h1 className="text-[22px] sm:text-[24px] font-normal font-aileron leading-relaxed">
        Hi, I’m <br />
        <span className="text-[28px] sm:text-[30px] text-primary font-bold font-aileron">
            Dr. V N Asvini Devi 
        </span>
        <br />
        <span className="inter font-normal text-[20px] sm:text-[22px]">
         Prosthodontist and Implantologist  BPS certified (Lichtenstein,Switzerland)
        </span>
      </h1>
    </div>

    {/* Contact Info */}
    <div className="mt-6 flex flex-col items-center gap-3">
      <div className="flex items-center gap-2">
        <img src="/assets/map.svg" className="w-5" alt="Location Icon" />
        <h4 className="text-secondary font-normal text-[16px] sm:text-[18px]">
          Chennai, India
        </h4>
      </div>

      <div className="flex items-center gap-2">
        <img src="/assets/email.svg" className="w-5" alt="Email Icon" />
        <h4 className="text-secondary font-normal text-[16px] sm:text-[18px]">
         <a
    href="mailto:care@drasvinidevi.com"
    className="hover:text-gray-500 hover:underline underline-offset-2 transition-colors duration-200"
  >
    care@drasvinidevi.com
  </a>
        </h4>
      </div>
    </div>

    {/* Image Section */}
    <div className="relative flex justify-center items-center w-full max-w-[260px] sm:max-w-[300px] mt-20">

      {/* Background spinning/group image */}
      <img
        src="/assets/group.svg"
        className="w-full animate-spin-slow"
        alt="Background Teeth"
      />

      {/* Doctor Image */}
      <img
        src="/assets/DR PNG (1).png"
        className="absolute bottom-0 w-[75%] sm:w-[80%] h-auto mx-auto"
        alt="Doctor Image"
      />
    </div>

  </div>
</div>


    </>
  );
};

export default Home;
