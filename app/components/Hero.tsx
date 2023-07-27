"use client";
import Image from "next/image";
import hero_left from "@/public/f_hero_left_mobile.png";
import f_schoolyear_right from "@/public/f_schoolyear_right.png";
import mobile_top from "@/public/f_hero_mobile_top.png";
import hero_right from "@/public/f_hero_right.png";
import hero_left_mobile from "@/public/f_hero_left_mobile.png";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="bg-center bg-cover hero 
    h-[590px] md:h-[500px] lg:h-[591px]
    flex flex-col overflow-hidden"
    >
      <div className="flex-1">
        <Navbar />
      </div>
      <div className="hero-section relative section ">
        <div className="">
          <div
            className="flex flex-col md:flex-row 
          justify-evenly items-baseline "
          >
            <div className="left bottom-0 ">
              {/* desktop left image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <Image
                  className="w-[500px] mb-12
                hidden md:block"
                  placeholder="empty"
                  priority={true}
                  quality={100}
                  alt="hero"
                  src={hero_left}
                />
              </motion.div>
              {/* desktop left image */}
              {/* mobile top image */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className=""
              >
                <Image
                  className="w-[500px] mb-12
                block md:hidden mt-2"
                  placeholder="empty"
                  priority={true}
                  quality={100}
                  alt="hero"
                  src={mobile_top}
                />
              </motion.div>
              {/* mobile top image */}
              <div className="absolute text-[12px] bottom-3 md:left-16">
                <Link
                  className="cursor-pointer text-[#002E6D] font-neosans-regular "
                  href="#terms"
                >
                  *Terms & Conditions Applied
                </Link>
              </div>
            </div>
            <div className="right bottom-0">
              {/* desktop right image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <Image
                  className="w-[580px]
                hidden md:block"
                  placeholder="empty"
                  priority={true}
                  quality={100}
                  alt="hero"
                  src={hero_right}
                />
              </motion.div>
              {/* desktop right image */}
              {/* mobile bottom image */}
              <div className="flex justify-evenly items-baseline md:hidden">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className=""
                >
                  <Image
                    placeholder="empty"
                    priority={true}
                    quality={100}
                    alt="hero"
                    src={hero_left_mobile}
                    className="w-[280px] mb-16 "
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className=""
                >
                  <Image
                    placeholder="empty"
                    priority={true}
                    quality={100}
                    alt="hero"
                    src={f_schoolyear_right}
                    className="w-[250px] "
                  />
                </motion.div>
              </div>
              {/* mobile bottom image */}
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div
    //   className="bg-center bg-cover hero
    // h-[510px] xs:h-[535px] sm:h-[580px] md:h-[550px] lg:h-full"
    // >
    //   <Navbar />
    //   <div className="relative bg-red-400 top-0">
    //     <div
    //       className="flex flex-col-reverse md:flex-row section
    //   md:justify-center md:mt-[2.2%] items-start"
    //     >
    //       <motion.div
    //         initial={{ opacity: 0, x: -30 }}
    //         whileInView={{ opacity: 1, x: 0 }}
    //         transition={{ duration: 1 }}
    //         className="flex justify-center"
    //       >
    //         <Image
    //           className="w-[65%]
    //         md:w-[490px] md:mt-[15%]
    //         lg:w-[490px] lg:mt-[15%]
    //         hidden md:block"
    //           placeholder="empty"
    //           priority={true}
    //           quality={100}
    //           alt="hero"
    //           src={hero_left}
    //         />
    //       </motion.div>

    //       {/* mobile image */}
    //       <motion.div
    //         initial={{ opacity: 0, x: -30 }}
    //         whileInView={{ opacity: 1, x: 0 }}
    //         transition={{ duration: 1 }}
    //         className="md:hidden bottom-0
    //       flex flex-row justify-even items-start"
    //       >
    //         <Image
    //           placeholder="empty"
    //           priority={true}
    //           quality={100}
    //           alt="hero"
    //           src={hero_left_mobile}
    //           className="
    //         w-[190px] mt-8 ml-[-5%]
    //         xs:w-[200px] xs:mt-8 xs:ml-[-5%]
    //         sm:w-[220px] sm:mt-8 sm:ml-[-2%]"
    //         />
    //         <Image
    //           alt="school year"
    //           placeholder="empty"
    //           priority={true}
    //           quality={100}
    //           src={schoolyear_right}
    //           className="
    //         w-[180px] mt-5 ml-[-4%]
    //         xs:w-[190px] xs:ml-[-2%]
    //         sm:w-[220px] sm:ml-[-7%]
    //         "
    //         />
    //       </motion.div>
    //       {/* mobile image */}

    //       <motion.div
    //         initial={{ opacity: 0, x: 30 }}
    //         whileInView={{ opacity: 1, x: 0 }}
    //         transition={{ duration: 1 }}
    //         className="flex flex-row justify-center align-baseline"
    //       >
    //         <Image
    //           className="w-full
    //         md:w-[560px] absolute bottom-0"
    //           placeholder="empty"
    //           priority={true}
    //           quality={100}
    //           alt="hero"
    //           src={hero_right}
    //         />
    //       </motion.div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Hero;
