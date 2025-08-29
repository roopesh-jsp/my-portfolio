import React from "react";
import me from "@/assests/me2.png";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative flex items-center justify-center ">
      {/* Blue box */}
      <div className="relative w-[55vw] h-[55vw] md:h-[300px] md:w-[300px]  rotate-[25deg] border-white border-2 bg-[rgb(84,84,212)] rounded-xl z-10 ">
        {/* White curved lines overlay */}
        <svg
          className="absolute inset-0 w-full  h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          preserveAspectRatio="none"
        >
          {Array.from({ length: 20 }).map((_, i) => {
            const y = 30 + i * 20; // start at 30px, step by 20px
            return (
              <path
                key={i}
                d={`M 0 ${y} Q 75 ${y + 20} 150 ${y} T 300 ${y}`}
                stroke="white"
                strokeWidth="1.5"
                fill="none"
              />
            );
          })}
        </svg>

        {/* Image mask */}
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            clipPath: "inset(-150px 0 0px 0 round 16px)", // cut only bottom
          }}
        >
          <Image
            src={me}
            alt="Roopesh"
            width={320}
            height={500}
            className="object-cover rotate-[-25deg] absolute bottom-[-10%] left-[10%] scale-110 md:scale-100 md:bottom-[-10%] md:left-[10%] z-30"
          />
        </div>
      </div>

      {/* White outline behind */}
      <div className="absolute w-[55vw] h-[55vw] md:h-[300px] md:w-[300px] border-2 rounded-2xl border-white rotate-[25deg] z-0 -translate-x-[10px] -translate-y-[40px]"></div>
    </div>
  );
};

export default HeroImage;
