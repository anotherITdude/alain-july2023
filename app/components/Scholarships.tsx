'use client'
import Image from "next/image";
import ten from "./../../public/10.png";
import hundred from "./../../public/100.png";
import { motion } from "framer-motion"; 

const Scholarships = () => {
  return (
    <div className="bg-cover bg-center scholarship h-[650px]  relative">
      <div className="section">
        <div className="10 flex flex-col ">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              alt="school year"
              placeholder="empty"
              priority={true}
              quality={100}
              src={ten}
              className="w-[60%] "
            />
          </motion.div>
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className="shadow_h2 text-3xl font-primetime text-white pl-4 pb-2"
            >
              SCHOLARSHIPS
            </motion.div>
            <div className="text-md font-neosans-regular px-4 text-white pb-2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi
            </div>
          </div>
        </div>
        <div className="100 pt-4 ">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              alt="school year"
              placeholder="empty"
              priority={true}
              quality={100}
              src={hundred}
              className="w-[60%]"
            />
          </motion.div>
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className="shadow_h2 text-3xl font-primetime text-white pl-4 pb-2"
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
