// "use client"
import { Separator } from "@/components/ui/separator";

import TourCarousel from "@/components/destinations/TourCarousel";
import Location from "@/components/Icons/Location";
import Button from "@/components/button/Button";
import TourComp from "./TourComp";

// console.log("API URL:", process.env.NEXT_PUBLIC_TOUR_URL);
// const apiUrl = `${process.env.NEXT_PUBLIC_TOUR_URL}/api/destinations`;

// export async function generateStaticParams() {
//   const res = await fetch('http://localhost:3000/api/destinations', { next: { revalidate: 0 } });
//   const data = await res.json();

//   return data.data.map((tour: any) => ({
//     id: tour.id.toString(),
//   }));
// }
// generateStaticParams()
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

// async function GetTours(id: string) {
//   const res = await fetch(`/api/destinations/${id}`, {
//     next: { revalidate: 0 },
//   });
//   const data = await res.json();
//   return data.singleTour;
// }
// const id = "1";
// GetTours(id)
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

export default function TourPage({ params }: { params: { id: string } }) {
  // const tour = await GetTours(params?.id);
  // console.log({ tour });
  return (
    <main>
      <TourComp params={params} />
      {/* <div className="bg-custom_white m-6 md:mx-40 max-w-screen h-screen my-10 p-6 md:p-16 shadow-2xl rounded-md">
        <div className="flex flex-col md:flex-row items-start gap-5 md:items-center justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">{tour.title}</h3>
            <p className="text-sm md:text-lg font-normal text-gray-500 flex items-center mt-3">
              <Location />
              {tour.location}
            </p>
          </div>
          <Button
            linkProp="/booking"
            nameProp="Book Now"
            classProp="py-2 px-5"
          />
        </div>
        <Separator className="my-6" />
        <TourCarousel tour={tour} />
        <p className="mt-5 text-gray-500">{tour.description}</p>
      </div> */}
    </main>
  );
}
