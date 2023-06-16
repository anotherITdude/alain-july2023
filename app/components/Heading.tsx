import Image from "next/image";
import asteriskImg from "./../../public/asterisk.svg";

interface HeadingProps {
  title: string;
  asterisk?: boolean;
}
const Heading: React.FC<HeadingProps> = ({ title, asterisk }) => {
  return (
    <div>
      {title && (
        <div className="heading-2 shadow flex gap-[2px]">
          {asterisk && (
            <Image
              quality={80}
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
