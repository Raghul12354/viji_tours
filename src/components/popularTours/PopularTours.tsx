import TitleComp from "../titleComp/TitleComp";
import SingleTour from "./SingleTour";

const PopularTours = () => {
  return (
    <section className="p-6 md:px-40 min-h-screen w-screen grid grid-cols-1 items-center">
      <TitleComp classProp="place-items-center mb-3" subtitles="Explore Our" title="Top Picks" />
      <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-10 ">
        <SingleTour
          gridClass="md:h-full w-full md:col-span-1 md:row-span-3"
          imgProp="/hero/Test_bg.jpg"
          altProp="Goa Tour"
          titleProp="Goa Tour"
          cityProp="goa,india"
          linkProp="/destinations/2"
        />
        <SingleTour
          gridClass="md:h-[300px] w-full"
          imgProp="/hero/Test_bg.jpg"
          altProp="kerala tour"
          titleProp="kerala tour"
          cityProp="kerala,india"
          linkProp="/"
        />
        <SingleTour
          gridClass="md:h-[300px] w-full"
          imgProp="/hero/Test_bg.jpg"
          altProp="tamilNadu tour"
          titleProp="tamilNadu tour"
          linkProp="/"
          cityProp="tamilNadu,india"
        />
        <SingleTour
          gridClass="md:h-[400px] w-full md:col-span-2 row-span-2"
          imgProp="/hero/Test_bg.jpg"
          altProp="new delhi tour"
          titleProp="new delhi tour"
          linkProp="/"
          cityProp="new delhi,india"
        />
      </div>
    </section>
  );
};

export default PopularTours;