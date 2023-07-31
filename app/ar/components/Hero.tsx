"use client";
import Image from "next/image";
import hero_left from "@/public/f_hero_left_mobile.png";
import f_schoolyear_right from "@/public/schoolyear_right.png";
import mobile_top from "@/public/f_hero_mobile_ar.png";
import hero_right from "@/public/f_hero_ar.png";
import hero_left_mobile from "@/public/f_hero_left_mobile.png";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="bg-center bg-cover hero 
    h-full md:h-[470px] lg:h-[591px]
    flex flex-col overflow-hidden"
    >
      <div className="flex-1">
        <Navbar />
      </div>
      <div className="hero-section relative section ">
        <div className="">
          <div
            className="flex flex-col md:flex-row 
"
          >
            <div className="left bottom-0 ">
              {/* desktop left image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <Image
                  className="w-[550px] mb-12
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
                className=" mb-[0px]"
              >
                <Image
                  className="w-[500px] mb-0 mt-4
                  md:mt-0
                block md:hidden"
                  placeholder="empty"
                  priority={true}
                  quality={100}
                  alt="hero"
                  src={mobile_top}
                />
              </motion.div>
              {/* mobile top image */}
              <div className="absolute text-[12px] bottom-3 md:left-16" dir="rtl">
                <Link
                  className="cursor-pointer text-[#002E6D] font-almarai-regular "
                  href="#terms"
                >
                  *تطبق الشروط والأحكام
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
              <div className="flex  items-baseline md:hidden">
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
                    className=" mb-[40px]"
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
                    className=""
                  />
                </motion.div>
              </div>
              {/* mobile bottom image */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
