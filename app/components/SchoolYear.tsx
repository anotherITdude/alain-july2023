import Image from "next/image";
import schoolyear_right from "./../../public/schoolyear_right.png"
import clock from './../../public/clock.png'
import book from './../../public/book.png'

const SchoolYear = () => {
  return (
    <div className="bg-center bg-no-repeat school_year h-[550px] md:h-[650] relative">
      <div className="flex flex-col">
        <div className="left m-4">
          <div className="shadow_h1 text-white text-3xl font-primetime uppercase">
            start <br />
            the school year
            <br /> with cheer
          </div>
          <div className="text-[#002e6d] shadow_reverse font-primetime text-[20px] uppercase mt-1">
            Win school fees today!
          </div>
          <div className="clockDiv flex py-2">
            <div className="hidden md:block">clock</div>
            <div className="text-md">
              <div className="font-neosans-regular text-white">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod
              </div>
              <div className="font-neosans-regular text-white">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Image
            alt="school year"
            placeholder="empty"
            priority={true}
            quality={100}
            src={clock}
            className="absolute w-[18%] right-0 top-[-1%]"
          />
          <Image
            alt="school year"
            placeholder="empty"
            priority={true}
            quality={100}
            src={book}
            className="absolute w-[30%] left-0 top-[60%]"
          />
          <Image
            alt="school year"
            placeholder="empty"
            priority={true}
            quality={100}
            src={schoolyear_right}
            className="absolute w-[60%] bottom-0 left-[30%]"
          />
        </div>
      </div>
    </div>
  );
};

export default SchoolYear;
