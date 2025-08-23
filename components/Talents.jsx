import { talents } from "@/data/data";
import Image from "next/image";
import GradientBackground from "./GradientBox";
import circles from "@/assests/circles.png";
import triangles from "@/assests/triangles.png";
import zigzag from "@/assests/zigzag.png";
import plus from "@/assests/plus.png";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // pick the weights you need
});
export default function Talents() {
  return (
    <section className=" relative py-16 text-center text-white">
      <h2
        className="text-4xl md:text-5xl font-extrabold mb-10 
        text-white
             "
      >
        My <span className="text-indigo-400">Superpowers</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-20">
        {talents.map((talent, index) => (
          <div key={index} className="p-6 rounded-2xl  transition">
            <div
              className={`w-12 h-12 mx-auto mb-4 rounded-full flex bg-opacity-10Pl items-center justify-center ${talent.color}`}
            >
              <Image src={talent.icon} width={35} height={35} />
            </div>

            <h3 className={`text-xl font-semibold mb-2  ${nunito.className}`}>
              {talent.title}
            </h3>
            <p
              className={`text-gray-400 text-md font-extralight ${nunito.className}`}
            >
              {talent.text}
            </p>
          </div>
        ))}
      </div>
      {/* <div className="absolute translate-y-[300px] translate-x-[-150px]">
        <GradientBackground upside={true} />
      </div> */}
      {/* <Image
        src={circles}
        alt="circles"
        className="absolute top-[5%] left-[10%] w-10  opacity-80"
      />
      <Image
        src={triangles}
        alt="triangles"
        className="absolute top-[5%] right-[8%] w-12 opacity-80"
      />
      <Image
        src={triangles}
        alt="zigzag"
        className="absolute bottom-[5%] left-[6%] w-10 opacity-80"
      />
      <Image
        src={plus}
        alt="plus"
        className="absolute bottom-[5%] right-[8%] rotate-12 w-12 opacity-50"
      /> */}
    </section>
  );
}
