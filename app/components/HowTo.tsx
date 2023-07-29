"use client";
import Image from "next/image";
import howto_right from "@/public/f_howto_right.png";
import { motion } from "framer-motion";

const HowTo = () => {
  return (
    <div className="bg-cover bg-center howto h-full lg:h-[520px] relative">
      <div className="mainTop flex flex-col ">
        <div className="top flex flex-col justify-center lg:flex-row pt-2 md:pt-10 section">
          <div className="left h-full w-full lg:w-[50%]">
            <div
              className="shadow_h2 text-2xl md:text-3xl lg:text-4xl 
          font-primetime text-white pl-4 pt-4 pb-2 uppercase"
            >
              How to Enter
            </div>
            <ul
              className="list list-decimal font-neosans-bold text-white pl-9 leading-tight
             pr-0 md:pr-[18%]
            "
            >
              <li>
                PURCHASE AL AIN FARMS FRESH MILK, YOGHURT, LABAN, JUICE, CHICKEN
                OR EGGS THAT HAVE PROMOTIONAL QR CODE ON THEM.
              </li>
              <li>SCAN THE QR CODE USING YOUR SMARTPHONE OR TABLET.</li>
              <li>
                REGISTER ON THE MICROSITE AFTER SCANNING THE QR CODE & UPLOAD
                THE PURCHASE RECEIPT.
              </li>
              <li>SUBMIT YOUR ENTRY TO ENTER THE DRAW.</li>
            </ul>
          </div>
          <div className="right h-full">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            >
              <Image
                alt="school year"
                placeholder="empty"
                priority={true}
                quality={100}
                src={howto_right}
                className="w-[280px] m-auto md:w-[400px] lg:w-[600px]"
              />
            </motion.div>
          </div>
        </div>
        <div
          className=" w-[90vw] lg:w-[60vw] xl:w-[35vw] mb-4
        text-[#002E6D] font-neosans-regular 
        text-xs md:text-sm
        section ml-3
        "
        >
          This promotion is valid on select Al Ain Farms products. Products
          include: Fresh Milk, Fresh Yoghurt, Fresh Laban, Fresh Juice, Fresh
          Chicken or Fresh Eggs. Head to selected stores to participate!
        </div>
      </div>
    </div>
  );
};

export default HowTo;
