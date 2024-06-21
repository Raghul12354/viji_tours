"use client";

import { useEffect, useState } from "react";
import TitleComp from "../titleComp/TitleComp";

import Link from "next/link";
import Image from "next/image";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const PopularTours = () => {
  const [popularTour, SetPopularTour] = useState([]);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await fetch("/api/destinations");
        const result = await response.json();
        console.log(result);
        SetPopularTour(result.data);
      } catch (error) {
        console.log(error, "error fetching data from tours");
      }
    };
    fetchTour();
  }, []);

  const customData = {
    1: {
      link: "/destinations/1",
      gridStyle: "md:h-full w-full md:col-span-1 md:row-span-3",
    },
    2: {
      link: "/destinations/2",
      gridStyle: "md:h-[300px] w-full",
    },
    7: {
      link: "/destinations/7",
      gridStyle: "md:h-[300px] w-full",
    },
    8: {
      link: "/destinations/8",
      gridStyle: "md:h-[400px] w-full md:col-span-2 row-span-2",
    },
  };

  return (
    <section className="p-6 md:px-40 min-h-screen w-screen grid grid-cols-1 items-center">
      <TitleComp
        classProp="place-items-center mb-3"
        subtitles="Explore Our"
        title="Top Picks"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-10 ">
        {popularTour.map((item) => {
          const { id, img, title, city } = item;
          const data = customData[id]; // Get corresponding data from customData based on id
          if (!data) return null; // If no data found in customData for this id, skip rendering
          const { link, gridStyle } = data;
          return (
            <Link
              key={id}
              href={link}
              className={`${gridStyle} h-[200px] relative grid grid-cols-1 items-end pb-7 text-white`}
            >
              <Image
                src={img}
                alt={title}
                fill
                sizes="100vw"
                className="object-cover -z-10 rounded-2xl object-center"
              />
              <div className="flex justify-between px-7 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold capitalize">
                    {title}
                  </h3>
                  <p className="text-sm md:text-lg font-normal capitalize">
                    {city}
                  </p>
                </div>
                <ArrowTopRightIcon className="h-6 w-6 border rounded-full" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default PopularTours;
