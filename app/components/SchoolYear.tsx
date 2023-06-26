"use client";
import Image from "next/image";
import schoolyear_right from "./../../public/schoolyear_right.png";
import clock from "./../../public/clock.png";
import book from "./../../public/book.png";
import plane from "./../../public/plane.png";

import { motion } from "framer-motion";

const SchoolYear = () => {
  return (
    <div
      className="bg-center bg-cover school_year relative
    h-[580px] md:h-[480px] lg:h-[541px]"
    >
      <div className="flex flex-col section">
        <div className="left m-4 md:mt-12">
          <div
            className="shadow_h1 text-white 
          text-xl md:text-5xl font-primetime uppercase"
          >
            start <br />
            the school year
            <br /> with cheer
          </div>
          <div className="text-[#002e6d] shadow_reverse font-primetime text-[20px] uppercase mt-1">
            Win school fees today!
          </div>
          <div
            className="clockDiv md:flex
          w-full md:w-[55%] mt-2
          md:justify-start
          md:items-center
          "
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="md:w-[180px] "
            >
              <Image
                alt="school year"
                placeholder="empty"
                priority={true}
                quality={100}
                src={clock}
                className="hidden md:block 
                 w-[200px] ml-[-25%] mt-5"
              />
            </motion.div>
            <div className="text-md mt- md:mt-0">
              <div className="font-neosans-regular text-white">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh 
              </div>
              <div className="font-neosans-regular text-white mt-2">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh 
              </div>
            </div>
          </div>
        </div>
        <div className="right ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-[0%] md:mt-[-7%]"
          >
            <Image
              alt="school year"
              placeholder="empty"
              priority={true}
              quality={100}
              src={clock}
              className="absolute block md:hidden
              w-[80px] 
              right-[45%] md:right-[35%]
              top-[-2%]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              alt="school year"
              placeholder="empty"
              priority={true}
              quality={100}
              src={book}
              className="absolute 
              w-[30%] md:w-[130px]
              left-[1%]  md:left-[45%]
              top-[60%] md:top-10"
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
              className="absolute
              w-[25%] 
              left-[25%] md:left-[28%]
              top-10 md:top-[60%]"
            />
          </motion.div>
          <Image
            alt="school year"
            placeholder="empty"
            priority={true}
            quality={100}
            src={schoolyear_right}
            className="absolute 
            w-[75%] md:w-[50%]
            bottom-0 
            right-[0]"
          />
        </div>
      </div>
    </div>
  );
};

export default SchoolYear;
