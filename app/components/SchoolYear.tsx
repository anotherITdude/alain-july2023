"use client";
import Image from "next/image";
import schoolyear_right from "@/public/f_schoolyear_right.png";
import clock from "@/public/clock.png";
import book from "@/public/book.png";
import plane from "@/public/plane.png";

import { motion } from "framer-motion";

const SchoolYear = () => {
  return (
    <div
      className="bg-center bg-cover school_year relative
    h-[480px] sm:h-[460px] md:h-[500px] overflow-hidden"
    >
      <div className="flex flex-col section">
        <div className="left m-4 md:mt-12 flex-1">
          <div
            className="shadow_h1 text-white 
          text-3xl md:text-[40px] md:leading-[40px] 
          lg:text-[48px] lg:leading-[48px]
          font-primetime uppercase mt-4"
          >
            start <br />
            the school year
            <br /> with cheer
          </div>
          <div
            className="text-[#002e6d] shadow_reverse font-primetime 
           text-xl md:text-[23px] uppercase mt-1"
          >
            Win school fees today!
          </div>
          <div
            className="clockDiv md:flex
           mt-2
          md:justify-start
          md:items-center
          "
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-[110px] mb-12"
            >
              <Image
                alt="school year"
                placeholder="empty"
                priority={true}
                quality={100}
                src={clock}
                className="hidden md:block 
                 w-[130px] ml-[-25%] mt-5"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="md:block"
            >
              <Image
                alt="school year"
                placeholder="empty"
                priority={true}
                quality={100}
                src={book}
                className="absolute 
                
              w-[90px] sm:w-[90px] md:w-[130px]
              right-[-1%] sm:right-[0%]  md:left-[45%]
              top-[22%] sm:top-[25%] md:top-6"
              />
            </motion.div>
            <div className=" text-sm mt-[-25px] md:mt-0 max-w-[450px] z-10">
              <div className="font-neosans-regular text-white">
                Go back to school with more rewards.
                <br /> Buy selected Al Ain Farms products for <br /> the chance
                to win amazing prizes
              </div>
              <div className="font-neosans-regular text-white mt-2">
                <span className="font-neosans-bold">Competition period</span>
                <br />
                20th August to 20th September 2023
              </div>
              <div className="font-neosans-regular text-white mt-2">
                <span className="font-neosans-bold">Winners announcement</span>
                <br />
                10th October 2023
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 20, 60, 20, 0],
              y: [0, -20, -60, -20, 0],
              rotate: [-2, -1, 1, -1, 1],
            }}
            transition={{
              duration: 6,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <Image
              alt="school year"
              placeholder="empty"
              priority={true}
              quality={100}
              src={plane}
              className=" absolute
              w-[100px] md:w-[150px]
              -z-10
              top-[-10%] md:top-auto
              left-[28%] md:left-[45%] 
              bottom-[0%] md:bottom-[0%]
              
              "
            />
          </motion.div>
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
              right-[35%] md:right-[35%]
              top-[-2%]"
            />
          </motion.div>
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1 }}
          >
            <Image
              alt="school year"
              placeholder="empty"
              priority={true}
              quality={100}
              src={schoolyear_right}
              className="absolute 
            w-[110px] sm:w-[135px] md:w-[200px] lg:w-[290px]
            right-2 md:md:right-12
            bottom-0 z-0"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SchoolYear;
