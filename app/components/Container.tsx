"use client";
interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }: ContainerProps) => {
  return (
    <div
      className="
       max-w-[1100px]
       md:max-w-[627px]
        mx-auto
        rounded-sm"
    >
      {children}
    </div>
  );
};

export default Container;
