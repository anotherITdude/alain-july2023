"use client";
import Image from "next/image";
import ten from "./../../public/10.png";
import hundred from "./../../public/100.png";
import { motion } from "framer-motion";

const Scholarships = () => {
  return (
    <div
      className="bg-cover bg-center scholarship relative
    h-[620px] md:h-full
    "
    >
      <div className="section">
        <div
          className="10 flex flex-col md:flex-row
        md:justify-evenly md:items-center pt-10 md:pt-12"
        >
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex md:justify-items-center"
          >
            <Image
              alt="school year"
              placeholder="empty"
              priority={true}
              quality={100}
              src={ten}
              className="w-[60%] md:w-[1000px]  "
            />
          </motion.div>
          <div className="md:mt-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className="shadow_h2 text-3xl md:text-4xl lg:text-5xl font-primetime text-white pl-4 pb-2"
            >
              SCHOLARSHIPS
            </motion.div>
            <div
              className="
              shadow_h3 font-circularStd text-2xl px-4 pb-2 md:pr-10"
            >
              AED 15,000 EACH
            </div>

            <div
              className="text-md font-neosans-regular px-4 text-white pb-2
            pr-14 md:pr-10"
            >
              <p className="text-[#002e6d] font-neosans-bold pt-1">
                10 lucky winners will receive a whole year’s school fees on us!
              </p>
            </div>
          </div>
        </div>

        <div
          className="100 pt-4 md:pb-12
        flex flex-col md:flex-row md:justify-evenly md:items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex md:justify-items-center"
          >
            <Image
              alt="school year"
              placeholder="empty"
              priority={true}
              quality={100}
              src={hundred}
              className="w-[60%] md:w-[1000px]"
            />
          </motion.div>
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className="shadow_h2 text-3xl md:text-4xl lg:text-5xl font-primetime text-white pl-4 pb-2"
            >
              BACK TO SCHOOL <br />
              VOUCHERS
            </motion.div>
            <div className="text-md font-neosans-bold px-4 text-[#002e6d] pr-12 md:pr-10 pt-3">
              100 lucky winners will receive vouchers to buy all the school
              supplies they could need!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;
