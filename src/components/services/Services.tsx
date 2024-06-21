import Link from "next/link";
import Image from "next/image";
import TitleComp from "../titleComp/TitleComp";

const Services = () => {
  return (
    <section
      id="services"
      className="px-6 md:px-40 h-screen md:min-h-screen min-w-full py-10 md:pb-20 flex flex-col justify-center"
    >
      <TitleComp
        classProp="place-items-center mb-8 md:mb-16"
        subtitles="what is"
        title="our services"
      />
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 place-items-center mt-5 md:mt-10">
        <Link
          href="/destinations"
          className="relative bg-black h-[220px] md:h-[500px] w-full overflow-hidden rounded-xl"
        >
          <Image
            src="/services/tour_bg.jpg"
            alt="tour_bg"
            fill
            sizes="(min-width: 780px) calc(50vw - 180px), calc(100vw - 48px)"
            className="opacity-70 hover:opacity-90 transition-transform duration-300
              hover:scale-110 z-10 object-cover object-center"
          />
          <div className="relative flex items-center justify-center h-full">
            <span className="bg-gray-300 opacity-50 backdrop-blur-sm h-10 w-full" />
            <p
              style={{ pointerEvents: "none" }}
              // because of event pointerEvents the transition works fine for more details check: 'https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events'
              className="text-custom_white uppercase font-semibold md:text-xl tracking-widest absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ]"
            >
              tours
            </p>
          </div>
        </Link>
        <Link
          href="/destinations"
          className="relative bg-black h-[220px] md:h-[500px] w-full overflow-hidden rounded-xl"
        >
          <Image
            src="/services/travels.jpg"
            alt="travels_bg"
            fill
            sizes="(min-width: 780px) calc(50vw - 180px), calc(100vw - 48px)"
            className="opacity-70 hover:opacity-90 transition-transform duration-300
              hover:scale-110 z-10 object-cover object-center"
          />
          <div className="relative flex items-center justify-center h-full">
            <span className="bg-gray-300 opacity-50 backdrop-blur-sm h-10 w-full" />
            <p className="text-custom_white uppercase font-semibold md:text-xl tracking-widest absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
              travels
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Services;
