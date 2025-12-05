import React from "react";
import { FiSend } from "react-icons/fi";

const Enquiry = () => {
  return (
    <div>
        <div className=" flex justify-center items-center">
            <h1 className="text-[28px] md:text-[40px] font-bold text-[#1A2B3B] mb-6 text-center md:text-left">
            For Enquiry
          </h1>
        </div>
        <div className="w-full bg-[#F5F3EE] py-20 px-5 md:px-0 flex justify-center" id="enquiry">

      <div className="bg-white w-full max-w-[1100px] rounded-3xl shadow-lg p-10 md:p-16 flex flex-col md:flex-row gap-10">

        {/* LEFT SIDE – DOCTOR CARD */}
        <div className="w-full md:w-[40%] bg-white p-8 flex flex-col ">
          
         <diiv className=' w-[100px] h-[100px]'>
             <img
            src="/assets/Frame 1618873030.png" 
            className=" w-full h-auto rounded-full object-cover mb-4"
            alt="doctor"
          />
         </diiv>

          <h2 className="text-[22px] font-bold text-primary">Dr V.N.Asvini Devi</h2>
          <p className="text-gray-600 text-lg mb-4">Dental Surgeon</p>

         <div className=" mt-3">
            <div className=" flex gap-3">
             <div className=" w-4 h-4 mt-1">
                 <img src="/assets/map.svg" className="  w-full object-cover " />
             </div>
              <h4 className=" text-secondary font-normal text-[14px]">
                Chennai, India
              </h4>
            </div>
            <div className=" flex gap-3 mt-2">
             <div className=" w-4 h-4 mt-1">
                 <img src="/assets/email.svg"  className=" object-cover w-full"/>
             </div>
              <h4 className=" text-secondary font-normal  text-[14px]">
                care@drasvinidevi.com
              </h4>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE – ENQUIRY FORM */}
        <div className="w-full md:w-[60%]">
          
         

          <div className="flex flex-col gap-5">

            <input
              type="text"
              placeholder="Your Name"
              className="border border-[#BFE2ED] rounded-xl px-5 py-3 outline-none text-gray-700"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="border border-[#BFE2ED] rounded-xl px-5 py-3 outline-none text-gray-700"
            />

            <textarea
              rows="4"
              placeholder="Messages..."
              className="border border-[#BFE2ED] rounded-xl px-5 py-3 outline-none text-gray-700"
            ></textarea>

            <button className="bg-[#76B8C9] flex items-center justify-center gap-3 text-white py-3 rounded-xl text-lg shadow-md hover:opacity-90">
              <FiSend size={20} />
              Send Message
            </button>

          </div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default Enquiry;
