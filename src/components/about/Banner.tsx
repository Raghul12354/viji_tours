import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-40 md:h-60 w-full relative">
      <Image
        src="/hero/hero_carousel-4.jpg"
        alt=""
        fill={true}
        sizes=""
        className="-z-10 object-cover"
      />
       <div className="absolute inset-0 bg-black opacity-40"></div>
      <h2 className="text-2xl md:text-4xl text-white uppercase font-bold z-10">about us</h2>
      <span className="border-b-4 border-yellow-400 w-16 mt-2 z-10"></span>
    </div>
  );
};

export default Banner;