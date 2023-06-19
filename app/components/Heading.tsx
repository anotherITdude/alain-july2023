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
        <div className="`${className}` heading-2 shadow_h2 flex text-3xl font-primetime text-white pt-4 pl-2">
          {asterisk && (
            <Image
              quality={100}
              priority={true}
              width={15}
              alt="important"
              className="mt-[-8px]"
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
