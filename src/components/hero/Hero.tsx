import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-screen flex flex-col justify-center items-center text-white text-center">
      <Image
        src="/hero/Test_bg.jpg"
        alt=""
        fill
        priority={true}
        quality={100}
        sizes="100vw"
        className="object-cover -z-10"
      />
        <h1 className="text-5xl mb-5 font-medium">
          <span className="text-yellow-400">V</span>iji Tours & Travels
        </h1>
        <p className="w-[40%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
          nisi nulla dolorem corporis quod ducimus asperiores, eos quam labore.
          Placeat ducimus, facilis consequuntur totam quae odio perferendis
          magni modi nesciunt?
        </p>
    </section>
  );
};

export default Hero;
