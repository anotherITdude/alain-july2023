"use client";
import Image from "next/image";
import hero_left from "./../../public/hero_left.png";
import hero_right from "./../../public/hero_right.png";
import hero_left_mobile from "./../../public/hero_left_mobile.png";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="bg-center bg-no-repeat hero h-[591px]">
      <Navbar />
      <div className="flex flex-col-reverse md:flex-row">
        <div className="flex justify-center items-center">
          <Image
            className="w-[65%] hidden md:block"
            placeholder="empty"
            priority={true}
            quality={100}
            alt="hero"
            src={hero_left}
          />
          <Image
            className="w-[100%] block md:hidden"
            placeholder="empty"
            priority={true}
            quality={100}
            alt="hero"
            src={hero_left_mobile}
          />
        </div>
        <div className="">
          <Image
            className="w-full"
            placeholder="empty"
            priority={true}
            quality={100}
            alt="hero"
            src={hero_right}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
