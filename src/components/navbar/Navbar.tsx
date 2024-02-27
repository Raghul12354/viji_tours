"use client";
// shadcn sheet change for mobile.
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Button from "../button/Button";
import MenuIcon from "../Icons/MenuIcon";
import CloseIcon from "../Icons/CloseIcon";

const LinkComp = ({
  linkProp,
  linkName,
}: {
  linkProp: string;
  linkName: string;
}) => {
  return (
    <Link
      className="text-base md:text-xl font-medium capitalize hover:opacity-70"
      href={linkProp}
    >
      {linkName}
    </Link>
  );
};

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <header className="flex justify-around items-center shadow-xl md:py-4 h-16 md:h-24 relative bg-white">
      {/* logo (too large logo) */}
      <Link
        href="/"
        className="relative md:h-[100px] h-[60px] md:w-[128px] w-[80px]"
      >
        <Image
          src="/logo/Viji tours & Travels.png"
          alt="Viji Tours & Travels"
          fill
          priority={true}
          quality={100}
          sizes="(min-width: 300px) 128px, (min-width: 680px) calc(32.5vw - 119px), calc(100vw - 568px)"
          className="object-contain"
        />
      </Link>
      {/* nav-links */}
      <nav
        className={`${
          showLinks ? "flex" : "hidden"
        } md:flex flex-col md:flex-row  items-center bg-black md:bg-inherit text-white md:text-black absolute md:relative py-20 md:py-0 -bottom-[26rem] md:bottom-0 w-full md:w-fit z-20 gap-5 md:gap-10`}
      >
        <LinkComp linkProp="/" linkName="home" />
        <LinkComp linkProp="/#services" linkName="services" />
        <LinkComp linkProp="/about" linkName="about" />
        <LinkComp linkProp="/destinations" linkName="destinations" />
        <Button linkProp="/booking" nameProp="enquire now" classProp="px-6 py-2 text-base text-black block md:hidden" />
      </nav>
      {/* btn */}
      <Button linkProp="/booking" nameProp="enquire now" classProp={`md:block hidden text-base`} />
      {/* mobile-menu */}
      <div className="block md:hidden">
        {showLinks ? (
          <button onClick={handleLinks}>
            <CloseIcon classProp="w-10 h-10 cursor-pointer" />
          </button>
        ) : (
          <button onClick={handleLinks}>
            <MenuIcon classProp="w-10 h-10 cursor-pointer" />
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
