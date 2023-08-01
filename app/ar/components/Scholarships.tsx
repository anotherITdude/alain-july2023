"use client";
import Image from "next/image";
import ten from "@/public/f_10.png";
import hundred from "@/public/100.png";
import { motion } from "framer-motion";

const Scholarships = () => {
  return (
    <div
      className="bg-cover bg-center scholarship relative
    h-[670px] md:h-full
    "
    >
      <div className="section">
        <div
          dir="rtl"
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
              className="w-[60%] md:w-[750px]  "
            />
          </motion.div>
          <div className="md:mt-5" dir="rtl">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className="shadow_h2 text-3xl md:text-5xl lg:text-6xl  text-white pr-4 pb-4
              font-helvetica-neue-lt-arabic-75-bold
              "
            >
              منح دراسية
            </motion.div>
            <div
              className=" flex-row-reverse
              shadow_h3 font-helvetica-neue-lt-arabic-75-bold text-2xl pr-4 pb-2 md:pr-4"
            >
              <span>قيمة كل منها </span>
              <span className="font-circularStd">15000</span>
              <span> درهم إماراتي </span>
            </div>

            <div
              dir="rtl"
              className="text-md font-almarai-bold px-4 text-white pb-2
            pr-4 md:pr-4"
            >
              <p>
                10 فائزين محظوظين سوف يفوزون بالرسوم المدرسية لمدة عام كامل!
              </p>
            </div>
          </div>
        </div>

        <div
          dir="rtl"
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
              className="shadow_h2 text-3xl md:text-5xl lg:text-6xl 
              font-helvetica-neue-lt-arabic-75-bold
               text-white pr-4 pb-4"
            >
              قسائم العودة إلى <br />
              المدارس
            </motion.div>
            <div className="text-md font-almarai-bold px-4 text-white pr-4 md:pr-4">
              100 فائزين محظوظين سيحصلون على قسائم لشراء كافة المستلزمات
              المدرسية التي يحتجون إليها!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;
