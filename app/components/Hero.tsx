"use client";
import Image from "next/image";
import hero_left from "./../../public/hero_left.png";
import hero_right from "./../../public/hero_right.png";
import hero_left_mobile from "./../../public/hero_left_mobile.png";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-center bg-no-repeat hero h-[591px] md:h-[650]">
      <Navbar />
      <div className="flex flex-col-reverse md:flex-row section">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center"
        >
          <Image
            className="w-[65%] hidden md:block"
            placeholder="empty"
            priority={true}
            quality={100}
            alt="hero"
            src={hero_left}
          />
        </motion.div>
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
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className=""
        >
          <Image
            className="w-full"
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
