"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Location from "@/components/Icons/Location";

const GetAllTours = async () => {
  const response = await fetch(`http://localhost:3000/api/destinations`, {
    next: { revalidate: 0 },
  });
  const allTour = await response.json();
  // console.log(allTour);
  return allTour.data;
};

const Destinations = () => {
  // const allTours = await GetAllTours();
  // console.log(allTours);
  const [allTours, setAllTours] = useState([]);

  useEffect(() => {
    GetAllTours()
      .then((result: any) => {
        setAllTours(result);
        console.log(result, "Good to go");
      })
      .catch((res) => console.log(res, "error vro"));
  }, []);
  return (
    <main className="px-6 md:px-48 min-h-screen min-w-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-12 py-10">
        {allTours.map((items: any) => {
          const { id, title, location, description, img } = items;
          return (
            <div
              key={id}
              className="bg-custom_white shadow-xl rounded-2xl min-h-[400px]"
            >
              <div className="h-52 md:h-64 w-full relative">
                <Image
                  src="/hero/Test_bg.jpg"
                  alt={title}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>
              <div className="flex flex-col gap-2 p-4 md:p-7">
                <p className="text-gray-500 capitalize text-xs md:text-sm flex flex-row items-center">
                  <Location />
                  {location}
                </p>
                <h5 className="text-xl font-medium capitalize">{title}</h5>
                <p className="text-gray-500 text-xs md:text-sm">
                  {description.substring(0, 100)}...
                </p>
                <Link className="w-fit" href={`/destinations/${id}`}>
                  <button className="bg-yellow-400 font-medium text-base px-5 py-2 rounded hover:bg-yellow-500 mt-3">
                    Explore More
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Destinations;
