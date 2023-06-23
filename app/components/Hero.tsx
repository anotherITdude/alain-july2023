"use client";
import Image from "next/image";
import hero_left from "./../../public/hero_left.png";
import hero_right from "./../../public/hero_right.png";
import hero_left_mobile from "./../../public/hero_left_mobile.png";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-center bg-cover hero 
    h-[591px] md:h-[480px] lg:h-[541px]">
      <Navbar />
      <div
        className="flex flex-col-reverse md:flex-row section
      md:justify-center  "
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center"
        >
          <Image
            className="w-[65%] 
            md:w-[490px] md:mt-[15%] 
            lg:w-[490px] lg:mt-[15%] 
            hidden md:block"
            placeholder="empty"
            priority={true}
            quality={100}
            alt="hero"
            src={hero_left}
          />
        </motion.div>

        {/* mobile image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            className="w-[100%] block md:hidden"
            placeholder="empty"
            priority={true}
            quality={100}
            alt="hero"
            src={hero_left_mobile}
          />
        </motion.div>
        {/* mobile image */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center"
        >
          <Image
            className="w-full 
            md:w-[550px] md:mt-[-14%]"
            placeholder="empty"
            priority={true}
            quality={100}
            alt="hero"
            src={hero_right}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
