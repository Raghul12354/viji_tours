const Testimonials = () => {
  return (
    <section className="md:px-40 w-screen">
      <h2 className="text-4xl font-medium text-center">Testimonials</h2>
      <p className="text-2xl my-3 text-center">What our clients say about us</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 mt-20">
        <article className="bg-white shadow-xl p-16 rounded-xl">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
            dignissimos beatae et inventore vero voluptatum cupiditate nam.
            Voluptate neque, nam, debitis impedit sapiente quas beatae sed
            dolore sit aspernatur ratione!
          </p>
          <div className="flex flex-col items-center gap-5">
            <img className="w-8 h-8 rounded-full bg-yellow-200" src="" alt="" />
            <h5 className="font-medium text-lg capitalize">client Names</h5>
          </div>
        </article>
        <article className="bg-white shadow-xl p-16 rounded-xl">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
            dignissimos beatae et inventore vero voluptatum cupiditate nam.
            Voluptate neque, nam, debitis impedit sapiente quas beatae sed
            dolore sit aspernatur ratione!
          </p>
          <div className="flex flex-col items-center gap-5">
            <img className="w-8 h-8 rounded-full bg-yellow-200" src="" alt="" />
            <h5 className="font-medium text-lg capitalize">client Names</h5>
          </div>
        </article>
        <article className="bg-white shadow-xl p-16 rounded-xl">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
            dignissimos beatae et inventore vero voluptatum cupiditate nam.
            Voluptate neque, nam, debitis impedit sapiente quas beatae sed
            dolore sit aspernatur ratione!
          </p>
          <div className="flex flex-col items-center gap-5">
            <img className="w-8 h-8 rounded-full bg-yellow-200" src="" alt="" />
            <h5 className="font-medium text-lg capitalize">client Names</h5>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
