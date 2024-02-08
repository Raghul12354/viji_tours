import SingleTour from "./SingleTour";

const PopularTours = () => {
  return (
    <section className="px-40 h-screen w-screen">
      <h2 className="text-4xl font-medium my-10">Popular Tours</h2>
      <div className="grid grid-cols-3 gap-5 ">
        <SingleTour />
        <SingleTour />
        <SingleTour />
        <SingleTour />
        <SingleTour />
        <SingleTour />
      </div>
    </section>
  );
};

export default PopularTours;
