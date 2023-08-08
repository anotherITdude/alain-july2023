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
      dir="rtl"
      className="bg-center bg-cover school_year relative
    h-[450px] sm:h-[490px] md:h-[560px] overflow-hidden"
    >
      <div className="flex flex-col section">
        <div className="left m-4 md:mt-12 flex-1">
          <div
            className="shadow_h1_ar text-white 
          text-3xl md:text-[40px] md:leading-[60px] 
          lg:text-[48px] lg:leading-[48px]
          font-helvetica-neue-lt-arabic-75-bold uppercase mt-4 mb-6"
          >
            ابدأ <br />
            عامك الدراسي ببهجة وفرح
          </div>
          <div
            className="text-[#002e6d] shadow_reverse_ar 
            font-helvetica-neue-lt-arabic-75-bold 
           text-xl md:text-[20px] uppercase mt-1"
          >
            اربح رسومك المدرسية اليوم !
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
              left-[3%] sm:right-[80%]  md:right-[45%]
              top-[27%] sm:top-[26%] md:top-6"
              />
            </motion.div>
            <div className=" text-sm lg:text-sm mt-[-25px] md:mt-0 max-w-[450px] z-10">
              <div className="font-almarai-bold text-white">
                عُد إلى مدرستك مع العديد من المكافآت القيمة.
                <br /> قم بشراء أحد منتجات مزارع العين المختارة للحصول <br />
                على فرصة للفوز بجوائز مدهشة!
              </div>
              <div className="font-almarai-bold text-white mt-2">
                <span className="font-almarai-extrabold">مدة المسابقة</span>
                <br />
                من 20 أغسطس حتى 20 سبتمبر 2023
                .
              </div>
              <div className="font-almarai-bold text-white mt-2">
                <span className="font-almarai-extrabold">
                  تاريخ الإعلان عن الفائزين
                </span>
                <br />
                10 أكتوبر 2023
                .
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
            className="bg-red-500"
          >
            <Image
              alt="school year"
              placeholder="empty"
              priority={true}
              quality={100}
              src={plane}
              className="absolute
              w-[100px] md:w-[150px]
              z-[-10]
              left-[35%] md:left-[35%]
              top-10 md:bottom-[10px] lg:top-[-100px]
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
            w-[100px] sm:w-[135px] md:w-[200px] lg:w-[290px]
            left-2 sm:left-2 md:left-2 lg:left-12
            bottom-0 z-0"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SchoolYear;
