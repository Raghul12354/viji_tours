import Image from "next/image";
import Link from "next/link";
import Button from "../button/Button";

const LinkComp = ({
  linkProp,
  linkName,
}: {
  linkProp: string;
  linkName: string;
}) => {
  return (
    <Link className="text-xl font-medium capitalize" href={linkProp}>
      {linkName}
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="flex justify-around items-center shadow-xl py-4 h-24">
      {/* logo (too large logo) */}
      <Link href="/" className="relative h-[100px] w-[128px]">
        <Image
          src="/logo/Viji tours & Travels.png"
          alt="Viji Tours & Travels"
          //   width={128}
          //   height={122}
          fill
          priority={true}
          quality={100}
          sizes="(min-width: 780px) 128px, (min-width: 680px) calc(32.5vw - 119px), calc(100vw - 568px)"
          className="object-contain"
        />
      </Link>
      {/* nav-links */}
      <nav className="flex gap-10">
        <LinkComp linkProp="/" linkName="home" />
        <LinkComp linkProp="/about" linkName="about" />
        <LinkComp linkProp="destinations" linkName="destinations" />
        <LinkComp linkProp="contact" linkName="contact" />
      </nav>
      {/* btn */}
      <Button />
    </header>
  );
};

export default Navbar;
