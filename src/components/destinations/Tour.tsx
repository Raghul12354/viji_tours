"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Location from "@/components/Icons/Location";

const Tour = () => {
  const [allTour, setAllTour] = useState([]);
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await fetch("/api/destinations");
        if (!res.ok) {
          throw new Error("Failed to fetch tours");
        }
        const data = await res.json();
        setAllTour(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTours();
  }, []);
  console.log(allTour);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 py-10">
      {allTour.map((items: any) => {
        const { id, title, location, description, img } = items;
        return (
          <div
            key={id}
            className="bg-custom_white shadow-xl rounded-2xl h-auto md:min-h-[400px]"
          >
            <div className="h-48 md:h-64 w-full relative">
              <Image
                src={img}
                alt={title}
                fill={true}
                sizes="(min-width: 780px) calc(33.33vw - 160px), calc(100vw - 48px)"
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
                {description.substring(0, 120)}...
              </p>
              <Link className="w-fit" href={`/destinations/${id}`}>
                <button className="bg-yellow-400 font-medium text-sm md:text-base px-5 py-2 rounded hover:bg-yellow-500 mt-3">
                  Explore More
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tour;