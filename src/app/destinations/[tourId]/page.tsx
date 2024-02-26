import Image from "next/image";
import Location from "@/components/Icons/Location";
import { Separator } from "@/components/ui/separator";
import TourCarousel from "@/components/destinations/TourCarousel";
import Button from "@/components/button/Button";

export async function generateStaticParams() {
  const res = await fetch("http://localhost:3000/api/destinations");
  const data = await res.json();
  // console.log(data, "hello");
  return data.data.map((items: any) => ({
    productIds: items.id,
  }));
}
// generateStaticParams()
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

async function GetTours(id: number | string) {
  const res = await fetch(`http://localhost:3000/api/destinations/${id}`, {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  return data;
}
// const id = 2; // Replace 123 with the desired ID
// GetTours(id).then((data) => {
//   console.log("gettours", data);
// });

export default async function tourId({
  params,
}: {
  params: { tourId: string };
}) {
  // console.log({ params });
  const Tours = await GetTours(params.tourId);
  // console.log({ Tours });
  const { singleTour } = Tours; // Extract singleTour from Tours
  // console.log({ singleTour });

  return (
    <div className="bg-custom_white m-6 md:mx-40 max-w-screen h-screen my-10 p-6 md:p-16 shadow-2xl rounded-md">
      {/* title and location */}
      <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold">{singleTour.title}</h3>
          <p className="text-sm md:text-lg font-normal text-gray-500 flex items-center mt-1">
            <Location />
            {singleTour.location}
          </p>
        </div>
        <Button linkProp="/contact" nameProp="Book Now" classProp="py-2 px-5" />
      </div>
      <Separator className="my-6" />
      {/* carousel */}
      <TourCarousel />
      {/* overview */}
      <p className="mt-5 text-gray-500">{singleTour.description}</p>
    </div>
  );
}