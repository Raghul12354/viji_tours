import Image from "next/image";
import Link from "next/link";
import ArrowUp from "../Icons/ArrowUp";

const Footer = () => {
  return (
    <footer className="px-40 bg-custom_white pt-32 text-">
      <div className="grid grid-cols-3 gap-52  h-[40vh]">
        {/* first  */}
        <div className="flex flex-col">
          <Link href="/" className="relative h-[100px] w-[128px]">
            <Image
              src="/logo/Viji tours & Travels.png"
              alt="Viji Tours & Travels"
              fill
              priority={true}
              quality={100}
              sizes="(min-width: 780px) 128px, (min-width: 680px) calc(32.5vw - 119px), calc(100vw - 568px)"
              className="object-contain"
            />
          </Link>
          <p className="w-[50%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <div>
            <p>follow us</p>
            <Link href=''>instagram</Link>
            <Link href=''>instagram</Link>
            <Link href=''>instagram</Link>
          </div>
        </div>
        {/* second */}
        <div className="flex flex-col w-full">
          <h3>Useful Links</h3>
          <Link href="">FAQ</Link>
          <Link href="">Destinations</Link>
          <Link href="">Contact</Link>
          <Link href="">Support</Link>
        </div>
        {/* third  */}
        <div className="flex flex-col gap-5">
          <h3>Contact</h3>
          <address>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            unde non fugiat ipsam eligendi quam ipsum consectetur laboriosam,
            aspernatur, ex tenetur ad sapiente, ipsa natus tempora! Qui ad
            delectus unde?
          </address>
          <Link href="tel: +1234567890">+1234567890</Link>
          <Link href="mailto: vijitours&travels@gmail.com">
            vijitours&travels@gmail.com
          </Link>
        </div>
      </div>
      {/* copyrights */}
      <div className="flex items-center justify-between">
        <p className="text-sm">
          Copyright &copy; 2024 by <span className="text-yellow-400">V</span>
          iji Tours & Travels. All Rights Reserved.
        </p>
        <Link href="/">
          <ArrowUp />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
