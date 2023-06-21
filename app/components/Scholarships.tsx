import Image from "next/image";
import ten from "./../../public/10.png";
import hundred from "./../../public/100.png";

const Scholarships = () => {
  return (
    <div className="bg-cover bg-no-repeat scholarship  relative">
      <div className="section">
        <div className="10 flex flex-col ">
          <Image
            alt="school year"
            placeholder="empty"
            priority={true}
            quality={100}
            src={ten}
            className="w-[60%] "
          />
          <div>
            <div className="shadow_h2 text-3xl font-primetime text-white pl-4 pb-2">
              SCHOLARSHIPS
            </div>
            <div className="text-md font-neosans-regular px-4 text-white pb-2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi
            </div>
          </div>
        </div>
        <div className="100 pt-4 ">
          <Image
            alt="school year"
            placeholder="empty"
            priority={true}
            quality={100}
            src={hundred}
            className="w-[60%]"
          />
          <div>
            <div className="shadow_h2 text-3xl font-primetime text-white pl-4 pb-2">
              BACK TO SCHOOL <br />
              VOUCHERS
            </div>
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
