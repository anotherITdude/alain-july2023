"use client";
import Image from "next/image";
import ten from "./../../../public/10.png";
import hundred from "./../../../public/100.png";
import { motion } from "framer-motion";

const Scholarships = () => {
  return (
    <div
      className="bg-cover bg-center scholarship relative
    h-[650px] md:h-[619px]
    "
    >
      <div className="section">
        <div
          className="10 flex flex-col md:flex-row
        md:justify-evenly md:items-center"
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
              className="text-md font-neosans-regular px-4 text-white pb-2
            md:pr-10"
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi
            </div>
          </div>
        </div>

        <div
          className="100 pt-4 
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
            <div className="text-md font-neosans-regular px-4 text-white">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;
