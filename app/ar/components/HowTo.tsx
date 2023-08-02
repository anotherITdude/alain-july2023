"use client";
import Image from "next/image";
import howto_right from "@/public/f_howto_right.png";
import { motion } from "framer-motion";

const HowTo = () => {
  return (
    <div className="bg-cover bg-center howto h-[660px] lg:h-full relative md:pb-8">
      <div className="mainTop flex flex-col ">
        <div className="top flex flex-col justify-center lg:flex-row-reverse pt-4 md:pt-10 section">
          <div className="left h-full w-full lg:w-[50%] text-right">
            <div
              className="shadow_h1_ar text-3xl md:text-5xl lg:text-6xl 
          font-helvetica-neue-lt-arabic-75-bold
           text-white pr-6 pt-4 pb-2 uppercase"
            >
              كيفية المشاركة
            </div>
            <ul
              dir="rtl"
              className="list list-decimal font-almarai-extrabold text-white pl-9 leading-tight
             pr-9 md:pr-8 text-right
            "
            >
              <li>
                قم بشراء منتجات مزارع العين الطازجة من الحليب أو الزبادي أو
                اللبن أو العصير أو الدجاج أو البيض المطبوع عليها رمز الاستجابة
                السريعة (QR) الترويجي.
              </li>
              <li>
                امسح رمز الاستجابة السريعة (QR) باستخدام الهاتف الذكي أو الجهاز
                اللوحي.
              </li>
              <li>
                سجل في الموقع الإلكتروني بعد مسح رمز الاستجابة السريعة (QR) وقم
                بتحميل فاتورة الشراء.
              </li>
              <li>أرسل مشاركتك للدخول في السحب.</li>
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
      </div>
      <div
        dir="rtl"
        className="  mb-4  mr-4
        text-[#002E6D] font-almarai-bold text-right
        text-xs md:text-sm section
        section  ml-[25%] 
        "
      >
        العرض ساري على مجموعة مختارة من منتجات مزارع العين. المنتجات تشمل الحليب
        أو الزبادي أو اللبن أو العصير أو الدجاج أو البيض الطازج. يرجى التوجه إلى
        منافذ البيع المختارة للمشاركة!
      </div>
    </div>
  );
};

export default HowTo;
