"use client";
import React, { Suspense, useEffect, useState } from "react";
import Loading from "../loading";
import { Separator } from "@/components/ui/separator";
import TourCarousel from "@/components/destinations/TourCarousel";
import Location from "@/components/Icons/Location";
import Button from "@/components/button/Button";

interface Tour {
  id: string;
  title: string;
  img: string;
  description: string;
  location: string;
}

async function GetTours(id: number | string) {
  const res = await fetch(`/api/destinations/${id}`, {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  return data.singleTour;
}

const TourComp = ({ params }: { params: { id: string } }) => {
  const [tour, setTour] = useState<Tour | null>(null);
  useEffect(() => {
    GetTours(params.id)
      .then((result: any) => {
        setTour(result);
        // console.log(result, "Good to go");
      })
      .catch((error) => {
        console.log(error, "error vro");
      });
  }, [params.id]);
  //   console.log(tour, "bro log");
  return (
    <div>
      {tour ? (
        <div className="bg-custom_white m-6 md:mx-40 max-w-screen h-screen my-10 p-6 md:p-16 shadow-2xl rounded-md">
          {/* title and location */}
          <div className="flex flex-col md:flex-row items-start gap-5 md:items-center justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">
                {tour.title}
              </h3>
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
          {/* carousel */}
          <TourCarousel tour={tour} />
          {/* overview */}
          <p className="mt-5 text-gray-500">{tour.description}</p>
        </div>
      ) : (
        <Suspense fallback={<Loading />} />
      )}
    </div>
  );
};

export default TourComp;