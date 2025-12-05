import React, { useEffect, useState } from "react";
import { FaAward } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const Cases = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % imageData.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? imageData.length - 1 : prev - 1));
  };

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

  const imageData = [
    {
      id: 1,
      name: "Ceramic Veneer Treatment",
      icon: <img src="/assets/before2.jpeg" />,
    },

    {
      id: 2,
      name: "Ceramic Veneer Treatment",
      icon: <img src="/assets/before4.jpeg" />,
    },
    {
      id: 3,
      name: "Ceramic Veneer Treatment",
      icon: <img src="/assets/before5.jpeg" />,
    },
    {
      id: 4,
      name: "Ceramic Veneer Treatment",
      icon: <img src="/assets/before6.jpeg" />,
    },
    {
      id: 5,
      name: "Ceramic Veneer Treatment",
      icon: <img src="/assets/before8.jpeg" />,
    },
    {
      id: 6,
      name: "Ceramic Veneer Treatment",
      icon: <img src="/assets/before9.jpeg" />,
    },
    {
      id: 7,
      name: "Ceramic Veneer Treatment",
      icon: <img src="/assets/before10.jpeg" />,
    },
  ];

  const cardWidth = 350;
  const gap = 20;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imageData.length);
    }, 1000); // change slide every 3 seconds
    return () => clearInterval(interval);
  }, [imageData.length]);

  return (
    <div className="bg-[#faf9f4] px-4 sm:px-10 md:px-24 mt-16">
      {/* Cases Title */}
      <div className="mt-16 flex justify-center">
        <h1 className="text-[32px] sm:text-[42px] font-bold text-center">
          Cases (Before & After)
        </h1>
      </div>

      {/* Carousel */}
      <div className="w-full flex flex-col items-center mt-10">
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
                  className={`w-[250px] sm:w-[300px] md:w-[350px] h-[250px] sm:h-[300px] md:h-[330px] rounded-xl overflow-hidden shadow bg-white p-3 flex flex-col flex-shrink-0
                    ${
                      isFourth
                        ? "filter blur-sm scale-95 opacity-70"
                        : "scale-100 opacity-100"
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

      {/* Testimonials Title */}
      <div className="flex justify-center mt-10">
        <h1 className="text-[32px] sm:text-[42px] font-bold text-center">
          Testimonials
        </h1>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 mt-5">
        <div
          className="bg-white p-5 rounded-3xl shadow font-medium inter 
  transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
        >
          <div className="flex gap-2 mt-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-5 h-5">
                <img
                  src="/assets/start.svg"
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>

          <p className="mt-3 text-[15px] text-[#697586]">
            “I have taken treatment from Dr Asvini in Saveetha Dental College.
            When I came I couldn’t eat properly; after treatment I am able to
            eat well. The work she had done is good and very comfortable. I am
            able to smile again with confidence. The doctor did a good job.”
          </p>

          <div className="flex mt-5 gap-3">
            <img
              src="/assets/image.png"
              className="w-[50px] h-[50px] rounded-full object-cover"
            />

            <div className="flex flex-col">
              <span className="text-[16px] font-semibold">Orlando Diggs</span>
              <p className="text-[15px] text-gray-600">
                Position, Company name
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-5 rounded-3xl shadow font-medium inter 
  transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
        >
          <div className="flex gap-2 mt-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-5 h-5">
                <img
                  src="/assets/start.svg"
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>

          <p className="mt-3 text-[15px] text-[#697586]">
            “I have taken treatment from Dr Asvini in Saveetha Dental College.
            When I came I couldn’t eat properly; after treatment I am able to
            eat well. The work she had done is good and very comfortable. I am
            able to smile again with confidence. The doctor did a good job.”
          </p>

          <div className="flex mt-5 gap-3">
            <img
              src="/assets/image.png"
              className="w-[50px] h-[50px] rounded-full object-cover"
            />

            <div className="flex flex-col">
              <span className="text-[16px] font-semibold">Orlando Diggs</span>
              <p className="text-[15px] text-gray-600">
                Position, Company name
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-5 rounded-3xl shadow font-medium inter 
  transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
        >
          <div className="flex gap-2 mt-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-5 h-5">
                <img
                  src="/assets/start.svg"
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>

          <p className="mt-3 text-[15px] text-[#697586]">
            “I have taken treatment from Dr Asvini in Saveetha Dental College.
            When I came I couldn’t eat properly; after treatment I am able to
            eat well. The work she had done is good and very comfortable. I am
            able to smile again with confidence. The doctor did a good job.”
          </p>

          <div className="flex mt-5 gap-3">
            <img
              src="/assets/image.png"
              className="w-[50px] h-[50px] rounded-full object-cover"
            />

            <div className="flex flex-col">
              <span className="text-[16px] font-semibold">Orlando Diggs</span>
              <p className="text-[15px] text-gray-600">
                Position, Company name
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-5 rounded-3xl shadow font-medium inter 
  transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
        >
          <div className="flex gap-2 mt-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-5 h-5">
                <img
                  src="/assets/start.svg"
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>

          <p className="mt-3 text-[15px] text-[#697586]">
            “I have taken treatment from Dr Asvini in Saveetha Dental College.
            When I came I couldn’t eat properly; after treatment I am able to
            eat well. The work she had done is good and very comfortable. I am
            able to smile again with confidence. The doctor did a good job.”
          </p>

          <div className="flex mt-5 gap-3">
            <img
              src="/assets/image.png"
              className="w-[50px] h-[50px] rounded-full object-cover"
            />

            <div className="flex flex-col">
              <span className="text-[16px] font-semibold">Orlando Diggs</span>
              <p className="text-[15px] text-gray-600">
                Position, Company name
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-5 rounded-3xl shadow font-medium inter 
  transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
        >
          <div className="flex gap-2 mt-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-5 h-5">
                <img
                  src="/assets/start.svg"
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>

          <p className="mt-3 text-[15px] text-[#697586]">
            “I have taken treatment from Dr Asvini in Saveetha Dental College.
            When I came I couldn’t eat properly; after treatment I am able to
            eat well. The work she had done is good and very comfortable. I am
            able to smile again with confidence. The doctor did a good job.”
          </p>

          <div className="flex mt-5 gap-3">
            <img
              src="/assets/image.png"
              className="w-[50px] h-[50px] rounded-full object-cover"
            />

            <div className="flex flex-col">
              <span className="text-[16px] font-semibold">Orlando Diggs</span>
              <p className="text-[15px] text-gray-600">
                Position, Company name
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-5 rounded-3xl shadow font-medium inter 
  transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
        >
          <div className="flex gap-2 mt-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-5 h-5">
                <img
                  src="/assets/start.svg"
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>

          <p className="mt-3 text-[15px] text-[#697586]">
            “I have taken treatment from Dr Asvini in Saveetha Dental College.
            When I came I couldn’t eat properly; after treatment I am able to
            eat well. The work she had done is good and very comfortable. I am
            able to smile again with confidence. The doctor did a good job.”
          </p>

          <div className="flex mt-5 gap-3">
            <img
              src="/assets/image.png"
              className="w-[50px] h-[50px] rounded-full object-cover"
            />

            <div className="flex flex-col">
              <span className="text-[16px] font-semibold">Orlando Diggs</span>
              <p className="text-[15px] text-gray-600">
                Position, Company name
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
