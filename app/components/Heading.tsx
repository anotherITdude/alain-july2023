import Image from "next/image";
import asteriskImg from "./../../public/asterisk.svg";

interface HeadingProps {
  title: string;
  asterisk?: boolean;
  className?: string;
}
const Heading: React.FC<HeadingProps> = ({ title, asterisk, className }) => {
  return (
    <div>
      {title && (
        <div className="`${className}` heading-2  flex text-xl  text-[#002E6D] pt-4">
          {asterisk && (
            <Image
              quality={100}
              priority={true}
              width={10}
              alt="important"
              className="mt-[-8px] mr-1"
              src={asteriskImg}
            />
          )}
          {title}
        </div>
      )}
    </div>
  );
};

export default Heading;
