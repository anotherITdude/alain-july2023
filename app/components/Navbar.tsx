import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import logo from "./../../public/logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between pl-4">
      <div
        className="font-neosans-medium uppercase flex
          justify-center items-center gap-[3px]
        "
      >
        <Link className="text-white cursor-pointer " href="/ar">
          Ar
        </Link>
        <div className="flex pb-[25px] text-4xl font-sans text-[#7EE4FF]">
          .
        </div>
        <Link className="text-[#7EE4FF] cursor-not-allowed" href="/">
          Eng
        </Link>
      </div>
      <div className="">
        <Image
          quality={100}
          placeholder="empty"
          src={logo}
          alt="logo"
          className="w-[100px]"
        />
      </div>
    </nav>
  );
}

export default Navbar
