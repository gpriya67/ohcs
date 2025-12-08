import React, { useRef } from "react";
import { FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Enquiry = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oye7f7p",
        "template_mv4cvq5",
        form.current,
        "6jrVGLSu_rYoRew6_"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
         
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message.");
          console.log(error);
        }
      );
  };

  return (
    <div className="w-full flex justify-center px-5 md:px-20" id="enquiry">
      <div className="w-full max-w-[1300px] mt-3">
        <div className="flex justify-center">
          <h1 className="text-[32px] sm:text-[36px] md:text-[42px] font-bold font-aileron text-[#1A2B3B]">
            For Enquiry
          </h1>
        </div>

        <div className="w-full bg-white max-w-[1100px] mx-auto rounded-3xl shadow-lg  md:p-16 flex flex-col md:flex-row gap-10 ">
         <div className="w-full md:w-2/5 bg-white p-6 md:p-8 flex flex-col items-center md:items-start rounded-2xl shadow-lg">
  {/* Doctor Image */}
  <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] flex justify-center items-center rounded-full overflow-hidden mb-4 ">
    <img
      src="/assets/Frame 1618873030.png"
      alt="doctor"
      className="w-full h-full object-cover rounded-full"
    />
  </div>

  {/* Name */}
  <h2 className="text-xl md:text-2xl text-center md:text-left font-bold text-[#1A2B3B]">
    Dr V.N.Asvini Devi
  </h2>

  {/* Specialization */}
  <p className="text-gray-600 text-[14px] md:text-[18px] mt-1 md:mt-2 text-center md:text-left leading-tight">
    Prosthodontist and Implantologist
    <br />
    <span className="text-[14px] md:text-[15px]">
      BPS certified (Lichtenstein, Switzerland)
    </span>
  </p>

  {/* Location & Email */}
  <div className="mt-4 md:mt-6 space-y-3 w-full flex flex-col items-center md:items-start">
    <div className="flex items-center gap-2 md:gap-3">
      <img src="/assets/map.svg" className="w-4 h-4 md:w-5 md:h-5" alt="location" />
      <p className="text-secondary text-[13px] md:text-[14px]">Chennai, India</p>
    </div>

    <div className="flex items-center gap-2 md:gap-3">
      <img src="/assets/email.svg" className="w-4 h-4 md:w-5 md:h-5" alt="email" />
      <p className="text-secondary text-[13px] md:text-[14px]">
         <a
    href="mailto:care@drasvinidevi.com"
    className="hover:text-gray-500 hover:underline underline-offset-2 transition-colors duration-200"
  >
    care@drasvinidevi.com
  </a>
      </p>
    </div>
  </div>
</div>


          {/* ---------- RIGHT SIDE / FORM ---------- */}
          <form ref={form} onSubmit={sendEmail} className="w-full md:w-[60%]">
            <div className="flex flex-col gap-5">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="border border-[#BFE2ED] rounded-xl px-5 py-3 outline-none text-gray-700"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="border border-[#BFE2ED] rounded-xl px-5 py-3 outline-none text-gray-700"
              />

              <textarea
                rows="4"
                name="message"
                required
                placeholder="Message..."
                className="border border-[#BFE2ED] rounded-xl px-5 py-3 outline-none text-gray-700"
              ></textarea>

              <button
                type="submit"
                className="bg-[#76B8C9] flex items-center justify-center gap-3 text-white py-3 rounded-xl text-lg shadow-md hover:opacity-90 transition"
              >
                <FiSend size={20} />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
