import Link from "next/link";
import Image from "next/image";

const Services = () => {
  return (
    <section className="px-6 md:px-40 min-h-full min-w-full py-7 md:py-12">
      <div>
        <h1 className="text-3xl md:text-4xl font-semibold mb-2 md:mb-4">
          Services
        </h1>
        <p className="text-gray-500 text-sm md:text-base md:w-[80%]">
          Discover the world with our exceptional tours and travel packages.
          From breathtaking landscapes to vibrant cultures, we offer
          unforgettable experiences tailored to your preferences. Whether you're
          seeking adventure, relaxation, or cultural immersion, our expertly
          curated tours guarantee an enriching journey. Join us and embark on
          your next unforgettable adventure!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 place-items-center mt-5 md:mt-10">
        <Link
          href="/destinations"
          className="relative bg-black h-[250px] md:h-[500px] w-full overflow-hidden"
        >
          <Image
            src="/services/tour_bg.jpg"
            alt="tour_bg"
            fill
            className="opacity-70 transition-transform duration-300
              hover:scale-110 z-10"
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
          href="/contact"
          className="relative bg-black h-[250px] md:h-[500px] w-full overflow-hidden"
        >
          <Image
            src="/services/travels.jpg"
            alt="travels_bg"
            fill
            className="opacity-70 transition-transform duration-300
              hover:scale-110 z-10"
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