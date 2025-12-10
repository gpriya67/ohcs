import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Cases = () => {
 
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);
const [cardWidth, setCardWidth] = useState(350);

const imageData = [
  {
      id: 1,
      name: "Complete Dentures",
      icon: <img src="/assets/Complete Dentures 01.png" />,
    },
    {
      id: 2,
      name: "Complete Dentures",
      icon: <img src="/assets/Complete Dentures 02.png" />,
    },
    {
      id: 3,
      name: "Complete Dentures",
      icon: <img src="/assets/Complete Dentures 03.png" />,
    },
    {
      id: 4,
      name: "Full Mouth Rehabilitation",
      icon: <img src="/assets/Mouth Rehabilitation_01.png" />,
    },

    {
      id: 5,
      name: "Full Mouth Rehabilitation",
      icon: <img src="/assets/Mouth Rehabilitation_02.png" />,
    },
    {
      id: 6,
      name: "Full Mouth Rehabilitation",
      icon: <img src="/assets/Mouth Rehabilitation_03.png" />,
    },
    {
      id: 7,
      name: "Full Mouth Rehabilitation",
      icon: <img src="/assets/Mouth Rehabilitation_04.png" />,
    },
    {
      id: 8,
      name: "Full Mouth Rehabilitation",
      icon: <img src="/assets/Mouth Rehabilitation_05.png" />,
    },
    {
      id: 9,
      name: "Full Mouth Rehabilitation",
      icon: <img src="/assets/Mouth Rehabilitation_06.png" />,
    },
    {
      id: 10,
      name: "Full Mouth Rehabilitation",
      icon: <img src="/assets/Mouth Rehabilitation_07.png" />,
    },
     {
      id: 11,
      name: "Fixed Partial Denture",
      icon: <img src="/assets/te1.jpeg" />,
    },
     {
      id: 12,
      name: "Fixed Partial Denture",
      icon: <img src="/assets/te3 (2).jpeg" />,
    },
     {
      id: 13,
      name: "Fixed Partial Denture",
      icon: <img src="/assets/Mouth Rehabilitation_07.png" />,
    },
     {
      id: 14,
      name: "Fixed Partial Denture",
      icon: <img src="/assets/te3 (1).jpeg" />,
    },
     {
      id: 15,
      name: "Fixed Partial Denture",
      icon: <img src="/assets/te4.jpeg" />,
    },
    
  ];



 
  const gap = 20;

  
  const interval = 3000;

 
 

  // Get card width dynamically
 
const nextSlide = () => {
  setCurrent((prev) => (prev + 1) % imageData.length);
};

const prevSlide = () => {
  setCurrent((prev) =>
    prev === 0 ? imageData.length - 1 : prev - 1
  );
};

  return (
    <div className=" p-4 md:p-20">
      {/* Title */}
     

      {/* Slider */}
    <div className="w-full flex flex-col items-center md:mt-5">
       <h1 className="text-center text-[28px] md:text-[40px] font-bold font-aileron">
        Cases (Before & After)
      </h1>
  <div className="w-full flex flex-col items-center md:mt-10">
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-5 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * (cardWidth + gap)}px)`,
            }}
          >
            {imageData.map((item, index) => {
              const relativeIndex =
                (index - current + imageData.length) % imageData.length;
              const isFourth = relativeIndex === 3;
              return (
                <div
                  key={index}
                  className={`w-[250px] sm:w-[300px] md:w-[350px] h-[250px] sm:h-[300px] md:h-[330px] rounded-xl overflow-hidden shadow bg-white p-1 md:p-3 flex flex-col flex-shrink-0
                    ${
                      isFourth
                        ? ""
                        : ""
                    }
                  `}
                >
                  <div className="flex-1 overflow-hidden rounded-xl">
                    {React.cloneElement(item.icon, {
                      className: "w-full h-full object-cover rounded-xl",
                    })}
                  </div>
                  <p className="flex justify-center items-center font-medium inter mt-2 text-center text-[12px] sm:text-[14px] md:text-[16px]">
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full hover:bg-gray-200"
          >
            <IoIosArrowRoundBack fontSize={24} className="cursor-pointer" />
          </button>

          <div className="flex gap-2">
            {imageData.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  current === i ? "bg-primary scale-110" : "bg-third"
                }`}
              ></div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full hover:bg-gray-200"
          >
            <IoIosArrowRoundForward fontSize={24} className="cursor-pointer" />
          </button>
        </div>
      </div>
</div>


      {/* Testimonials */}
      <h1 className="text-[32px] sm:text-[42px] font-bold text-center mt-10">
        Testimonials
      </h1>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">

  {/* CARD */}
 <div className="
  bg-white p-6 rounded-2xl shadow-lg border border-gray-100 
  h-full flex flex-col justify-between

  transition-all duration-300 
  hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02] hover:border-gray-200 hover:cursor-pointer

  active:scale-[0.98] active:shadow-xl active:border-gray-200
">
  <div>
    <div className="flex gap-1 mb-3">
      <img src="/assets/start.svg" className="w-6 h-6" />
      <img src="/assets/start.svg" className="w-6 h-6" />
      <img src="/assets/start.svg" className="w-6 h-6" />
      <img src="/assets/start.svg" className="w-6 h-6" />
      <img src="/assets/start.svg" className="w-6 h-6" />
    </div>

    <p className="text-[15px] text-[#555] leading-relaxed italic font-aileron font-medium">
      "I have taken treatment from Dr Asvini in Saveetha dental college,
      when I came I couldn't eat properly, after treatment I am able to
      eat well. The work she had done is good and very comfortable. I am
      able to smile again with confidence. The doctor did a very good job."
    </p>
  </div>

  <div>
    <div className="w-full h-[1px] bg-gray-200 my-4"></div>
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
        <img src="/assets/GIRL (1).svg" className="w-full h-full object-cover" />
      </div>

      <h3 className="text-[16px] font-semibold text-[#1A2B3B] font-aileron ">
        MRS SUBAIDHA PARVEEN
      </h3>
    </div>
  </div>
</div>


  
  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 
  h-full flex flex-col justify-between

  transition-all duration-300 
  hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02] hover:border-gray-200 hover:cursor-pointer

  active:scale-[0.98] active:shadow-xl active:border-gray-200">
    <div>
      <div className="flex gap-1 mb-3">
        <img src="/assets/start.svg" className="w-6 h-6" />
        <img src="/assets/start.svg" className="w-6 h-6" />
        <img src="/assets/start.svg" className="w-6 h-6" />
        <img src="/assets/start.svg" className="w-6 h-6" />
        <img src="/assets/start.svg" className="w-6 h-6" />
      </div>

      <p className="text-[15px] text-[#555] leading-relaxed italic font-aileron font-medium">
       "I'm very happy to share my feedback for the treatment you provided. You handled everything with great patience and care, the way you treated me was very gentle and comforting. I truly appreciate your soft approach and the time you took to explain things clearly"

      </p>
    </div>

    <div>
      <div className="w-full h-[1px] bg-gray-200 my-4"></div>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
          <img src="/assets/BOY.svg" className="w-full h-full object-cover" />
        </div>

        <h3 className="text-[16px] font-semibold text-[#1A2B3B] font-aileron ">
          MR PANDURANGA RAO
        </h3>
      </div>
    </div>
  </div>

   <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 
  h-full flex flex-col justify-between

  transition-all duration-300 
  hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02] hover:border-gray-200 hover:cursor-pointer

  active:scale-[0.98] active:shadow-xl active:border-gray-200">
    <div>
      <div className="flex gap-1 mb-3">
        <img src="/assets/start.svg" className="w-6 h-6" />
        <img src="/assets/start.svg" className="w-6 h-6" />
        <img src="/assets/start.svg" className="w-6 h-6" />
        <img src="/assets/start.svg" className="w-6 h-6" />
        <img src="/assets/start.svg" className="w-6 h-6" />
      </div>

      <p className="text-[15px] text-[#555] leading-relaxed italic font-aileron font-medium">
       "I appreciate the exceptional care and great experience I received under the guidance of Dr Asvini at Saveetha dental college. The treatment was not only smooth and comfortable but also delivered a level of satisfaction that speaks to your deep expertise in prosthodontics. I genuinely felt supported throughout the process, and your clarity in communication made all the difference. Thank you for creating a trust-driven, results-oriented treatment journey. Hope you treat all the patients with the same enthusiasm and ethics in future. All the best."
      </p>
    </div>

    <div>
      <div className="w-full h-[1px] bg-gray-200 my-4"></div>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
          <img src="/assets/BOY.svg" className="w-full h-full object-cover" />
        </div>

        <h3 className="text-[16px] font-semibold text-[#1A2B3B] font-aileron ">
        MR NOBULLA SHERIFF
        </h3>
      </div>
    </div>
  </div>

   <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 
  h-full flex flex-col justify-between

  transition-all duration-300 
  hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02] hover:border-gray-200 hover:cursor-pointer

  active:scale-[0.98] active:shadow-xl active:border-gray-200">
    <div>
      <div className="flex gap-1 mb-3">
        <img src="/assets/start.svg" className="w-6 h-6" />
        <img src="/assets/start.svg" className="w-6 h-6" />
        <img src="/assets/start.svg" className="w-6 h-6" />
        <img src="/assets/start.svg" className="w-6 h-6" />
        <img src="/assets/start.svg" className="w-6 h-6" />
      </div>

      <p className="text-[15px] text-[#555] leading-relaxed italic font-aileron font-medium">
       "My name is Fouzia Banu I had multiple issue with my teeth I had broken teeth also but after treatment It feels natural the whole treatment was satisfying and I got my smile restored now I am smiling confidently, my Dr Asvini devi mam is very caring of me, the professional and friendly demeanor and very comfortable a big thank you for Dr.Asvini Devi mam"
      </p>
    </div>

    <div>
      <div className="w-full h-[1px] bg-gray-200 my-4"></div>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
          <img src="/assets/GIRL (1).svg" className="w-full h-full object-cover" />
        </div>

        <h3 className="text-[16px] font-semibold text-[#1A2B3B] font-aileron ">
        MRS FOUZIA BANU
        </h3>
      </div>
    </div>
  </div>

   <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 
  h-full flex flex-col justify-between

  transition-all duration-300 
  hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02] hover:border-gray-200 hover:cursor-pointer

  active:scale-[0.98] active:shadow-xl active:border-gray-200">
    <div>
      <div className="flex gap-1 mb-3">
        <img src="/assets/start.svg" className="w-6 h-6" />
        <img src="/assets/start.svg" className="w-6 h-6" />
        <img src="/assets/start.svg" className="w-6 h-6" />
        <img src="/assets/start.svg" className="w-6 h-6" />
        <img src="/assets/start.svg" className="w-6 h-6" />
      </div>

      <p className="text-[15px] text-[#555] leading-relaxed italic font-aileron font-medium">
       "Before Treatment: I had severe difficulty chewing and felt embarrassed to smile due to a missing tooth.After Treatment:The dental team, especially Dr Asvini who handled my case, did an amazing job with my tooth. The process was smooth, painless, and affordable. My smile has completely changed, and so my confidence. Truly grateful!"
      </p>
    </div>

    <div>
      <div className="w-full h-[1px] bg-gray-200 my-4"></div>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
          <img src="/assets/BOY.svg" className="w-full h-full object-cover" />
        </div>

        <h3 className="text-[16px] font-semibold text-[#1A2B3B] font-aileron ">
          MR SALMAN SAYER
        </h3>
      </div>
    </div>
  </div>

   <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 
  h-full flex flex-col justify-between

  transition-all duration-300 
  hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02] hover:border-gray-200 hover:cursor-pointer

  active:scale-[0.98] active:shadow-xl active:border-gray-200">
    <div>
      <div className="flex gap-1 mb-3">
        <img src="/assets/start.svg" className="w-6 h-6" />
        <img src="/assets/start.svg" className="w-6 h-6" />
        <img src="/assets/start.svg" className="w-6 h-6" />
        <img src="/assets/start.svg" className="w-6 h-6" />
        <img src="/assets/start.svg" className="w-6 h-6" />
      </div>

      <p className="text-[15px] text-[#555] leading-relaxed italic font-aileron font-medium">
        "I came to Saveetha for tooth replacement but Dr Asvini explained the importance of treating other issues along with it. She was very patient and gentle, I had no pain during treatment and she never made me wait for any treatment and was punctual. Now I am feeling very confident about my smile and I am able to be healthy by eating all food. Very grateful for her to be my dentist"
      </p>
    </div>

    <div>
      <div className="w-full h-[1px] bg-gray-200 my-4"></div>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
          <img src="/assets/BOY.svg" className="w-full h-full object-cover" />
        </div>

        <h3 className="text-[16px] font-semibold text-[#1A2B3B] font-aileron ">
         MRS SIVARHUSHANAM
        </h3>
      </div>
    </div>
  </div>

</div>

    </div>
  );
};

export default Cases;
