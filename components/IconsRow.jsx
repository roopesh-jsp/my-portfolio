import circles from "@/assests/circles.png";
import triangles from "@/assests/triangles.png";
import zigzag from "@/assests/zigzag.png";
import plus from "@/assests/plus.png";
import React from "react";
import Image from "next/image";

function IconsRow() {
  return (
    <div className="flex justify-between items-center px-6 h-[100px]">
      <Image
        src={circles}
        alt="circles"
        width={40}
        height={40}
        className="animate-wave w-8 lg:w-14 opacity-70 [animation-delay:0s] translate-y-[20px]"
      />
      <Image
        src={triangles}
        alt="triangles"
        width={40}
        height={40}
        className="animate-wave w-8 rotate-12 lg:w-14 opacity-70 [animation-delay:0.3s] translate-y-[-20px]"
      />
      <Image
        src={zigzag}
        alt="zigzag"
        width={40}
        height={40}
        className="animate-wave w-8 lg:w-14 opacity-70 [animation-delay:0.6s] translate-y-[30px]"
      />
      <Image
        src={plus}
        alt="plus"
        width={40}
        height={40}
        className="animate-wave w-8 rotate-45 lg:w-14 opacity-70 [animation-delay:0.9s] translate-y-[-40px]"
      />
    </div>
  );
}

export default IconsRow;
