'use client'
import Image from 'next/image';
import howto_right from "./../../../public/howto_right.png";
import { motion } from "framer-motion"; 


const HowTo = () => {
  return (
    <div className="bg-cover bg-center howto h-[616px] md:h-[619px] relative">
      <div className="flex flex-col pt-3 section">
        <div className="left">
          <div className="shadow_h2 text-3xl md:text-4xl lg:text-5xl font-primetime text-white pl-4 pt-4 pb-2 uppercase">
            How to Enter
          </div>
          <ul className="list list-decimal font-neosans-bold text-white pl-9 leading-tight">
            <li>
              PURCHASE ANY AL AIN FARMS FRESH MILK, YOGHURT, LABAN OR JUICE FROM
              SELECTED STORES.
            </li>
            <li>SCAN THE QR CODE USING YOUR SMARTPHONE OR TABLET.</li>
            <li>REGISTER ON THE MICROSITE AFTER SCANNING THE QR CODE.</li>
            <li>SUBMIT YOUR ENTRY TO ENTER THE DRAW</li>
          </ul>
        </div>
        <div className="right">
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
              className="m-auto mt-[-2%] w-[100%] max-w-[480px]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HowTo
