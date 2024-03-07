import Image from "next/image";

import TickIcon from "../Icons/TickIcon";
import TitleComp from "../titleComp/TitleComp";

const SingleItem = ({ desc }: { desc: string }) => {
  return (
    <div className="flex gap-4">
      <TickIcon />
      <p className="font-medium text-base md:text-lg">{desc}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <div className="px-6 md:px-40 min-h-full w-screen py-10 grid grid-cols-1 md:grid-cols-2 place-items-center md:gap-28 gap-10">
      <aside className="relative h-[250px] md:h-[500px] w-full bg-black order-2 md:order-1">
        <Image
          src="/whyChooseUs/whyChoose-bg.jpg"
          alt=""
          fill
          // sizes="(min-width: 200px) calc(50vw - 216px), calc(100vw - 48px)"
          className="object-cover opacity-80"
        />
      </aside>
      <div className="w-full order-1 md:order-2">
        <TitleComp classProp="place-items-center md:place-items-start mb-7 md:mb-10" subtitles="why" title="choose us" />
        <div className="grid grid-cols-1 gap-5 md:gap-7 ">
          <SingleItem desc="Our agency offers expert planning and personalized service" />
          <SingleItem desc="With years of experience, we tailor journeys to your needs" />
          <SingleItem desc="From custom itineraries to round-the-clock support, we ensure seamless travel" />
          <SingleItem desc="We offer diverse destinations and activities to suit every taste and budget" />
          <SingleItem desc="Diverse destinations and activities cater to every taste and budget" />
          <SingleItem desc="Choose us for stress-free, unforgettable adventures" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;