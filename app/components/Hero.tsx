"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "./../../public/logo.png";
import hero_left from "./../../public/hero_left.png";
import hero_right from "./../../public/hero_right.png";

const Hero = () => {
  return (
    <div className="bg-center bg-no-repeat hero">
      <nav className="flex justify-between px-4 overflow-hidden">
        <div
          className="font-neosans-medium uppercase flex
          justify-center items-center gap-[3px]
          
        "
        >
          <Link className="text-white cursor-pointer" href="/">
            Ar
          </Link>
          <div className="flex pb-[25px] text-4xl font-sans text-[#7EE4FF]">
            .
          </div>
          <Link className="text-[#7EE4FF] cursor-not-allowed" href="/ar">
            Eng
          </Link>
        </div>
        <div className="mt-[-30px] mr-[-30px]">
          <Image
            quality={100}
            placeholder="empty"
            src={logo}
            alt="logo"
            className="w-[140px]"
          />
        </div>
      </nav>
      <div className="flex flex-col-reverse md:flex-row pt-5">
        <div className="flex justify-center items-center">
          <Image
            className="w-[65%]"
            placeholder="empty"
            priority={true}
            quality={100}
            alt="hero"
            src={hero_left}
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
