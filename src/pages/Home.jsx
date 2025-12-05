import React from "react";

const Home = () => {
  return (
    <>
    <div className="hidden md:flex px-24 bg-[#faf9f4]">
      <div className="flex justify-between mt-[15%]">
          <div className="">
          <h1>
            <span className=" text-[48px] font-normal font-aileron ">
              Hi, I’m
            </span>{" "}
            <br />
            <span className="text-[64px]  text-primary font-bold font-aileron">
              Dr V.N.Asvini Devi
            </span>{" "}
            <br />
            <span className="text-[48px] inter font-normal ">
              Dental Surgeon
            </span>
          </h1>
          <div className=" mt-15">
            <div className=" flex gap-3">
              <img src="/assets/map.svg" className="  " />
              <h4 className=" text-secondary font-normal text-[20px]">
                Chennai, India
              </h4>
            </div>
            <div className=" flex gap-3 mt-2">
              <img src="/assets/email.svg" />
              <h4 className=" text-secondary font-normal  text-[20px]">
                care@drasvinidevi.com
              </h4>
            </div>
          </div>
        </div>

        <div className="relative ">
          <img src="/assets/group.svg" className=" " />

          <div className=" flex justify-center -mb-4">
            <img
              src="/assets/DR PNG (1).png"
              className=" absolute bottom-0 z-10"
            />
           
          </div>
        </div>
      </div>
    </div>

    {/* mobile */}
    <div className="px-4 md:hidden">
  <div className="mt-20 flex flex-col items-center">

    {/* Text Section */}
    <div className="flex justify-center items-center text-center">
      <h1 className="text-[24px] font-normal font-aileron leading-relaxed">
        Hi, I’m
        <br />
        <span className="text-[30px] text-primary font-bold font-aileron">
          Dr V.N.Asvini Devi
        </span>
        <br />
        <span className="inter font-normal text-[22px]">
          Dental Surgeon
        </span>
      </h1>
    </div>

    {/* Contact Info */}
    <div className="mt-6 flex flex-col items-center gap-3">
      <div className="flex items-center gap-2">
        <img src="/assets/map.svg" className="w-5" />
        <h4 className="text-secondary font-normal text-[18px]">
          Chennai, India
        </h4>
      </div>
      <div className="flex items-center gap-2">
        <img src="/assets/email.svg" className="w-5" />
        <h4 className="text-secondary font-normal text-[18px]">
          care@drasvinidevi.com
        </h4>
      </div>
    </div>

    {/* Image Section */}
    <div className="relative  flex flex-col items-center w-full max-w-[300px]">
      {/* Background teeth/group image */}
      <div className="w-full">
        <img src="/assets/group.svg" className="w-full" />
      </div>

      {/* Doctor image */}
      <div className="flex justify-center -mb-4 w-full">
        <img
          src="/assets/DR PNG (1).png"
          className="absolute bottom-0 z-10 w-full"
        />
      </div>
    </div>

  </div>
</div>

    </>
  );
};

export default Home;
