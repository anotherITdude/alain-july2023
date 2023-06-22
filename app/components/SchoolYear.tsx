"use client";
import Image from "next/image";
import schoolyear_right from "./../../public/schoolyear_right.png";
import clock from "./../../public/clock.png";
import book from "./../../public/book.png";
import plane from "./../../public/plane.png";

import { useMotionValue, useSpring } from "framer-motion";
import { motion } from "framer-motion";

const SchoolYear = () => {
  return (
    <div className="bg-center bg-cover school_year h-[580px] md:h-[650] relative">
      <div className="flex flex-col section">
        <div className="left m-4">
          <div className="shadow_h1 text-white text-3xl font-primetime uppercase">
            start <br />
            the school year
            <br /> with cheer
          </div>
          <div className="text-[#002e6d] shadow_reverse font-primetime text-[20px] uppercase mt-1">
            Win school fees today!
          </div>
          <div className="clockDiv flex py-2">
            <div className="text-md">
              <div className="font-neosans-regular text-white">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod
              </div>
              <div className="font-neosans-regular text-white">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            transition={{ duration: 1 }}
          >
            <Image
              alt="school year"
              placeholder="empty"
              priority={true}
              quality={100}
              src={clock}
              className="absolute w-[22%] right-[35%] top-[-1%] animate-alarm-ring"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              alt="school year"
              placeholder="empty"
              priority={true}
              quality={100}
              src={book}
              className="absolute w-[30%] left-[1%] top-[67%]"
            />
          </motion.div>
          <motion.div
            animate={{
              scale: [1, 1, 1.2, 1, 0],
              rotate: [-2, -1, 1, 0, 10],
            }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 4,
            }}
          >
            <Image
              alt="school year"
              placeholder="empty"
              priority={true}
              quality={100}
              src={plane}
              className="absolute w-[25%] left-[20%] top-10"
            />
          </motion.div>
          <Image
            alt="school year"
            placeholder="empty"
            priority={true}
            quality={100}
            src={schoolyear_right}
            className="absolute w-[65%] bottom-0 left-[25%]"
          />
        </div>
      </div>
    </div>
  );
};

export default SchoolYear;
