"use client";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function TourCarousel({ tour }: any) {
  const autoPlay = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <Carousel
      plugins={[autoPlay.current]}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        <CarouselItem className="basis-full md:basis-1/3">
          <div className="relative h-[200px] md:h-[350px] w-full">
            <Image
              src={tour.img}
              alt={tour.title}
              fill
              sizes="(min-width: 780px) calc(33.33vw - 160px), calc(100vw - 96px)"
              className="object-cover rounded"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="basis-full md:basis-1/3">
          <div className="relative h-[200px] md:h-[350px] w-full">
            <Image
              src={tour.img}
              alt={tour.title}
              fill
              sizes="(min-width: 780px) calc(33.33vw - 160px), calc(100vw - 96px)"
              className="object-cover rounded"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="basis-full md:basis-1/3">
          <div className="relative h-[200px] md:h-[350px] w-full">
            <Image
              src={tour.img}
              alt={tour.title}
              fill
              sizes="(min-width: 780px) calc(33.33vw - 160px), calc(100vw - 96px)"
              className="object-cover rounded"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="basis-full md:basis-1/3">
          <div className="relative h-[200px] md:h-[350px] w-full">
            <Image
              src={tour.img}
              alt={tour.title}
              fill
              sizes="(min-width: 780px) calc(33.33vw - 160px), calc(100vw - 96px)"
              className="object-cover rounded"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="basis-full md:basis-1/3">
          <div className="relative h-[200px] md:h-[350px] w-full">
            <Image
              src={tour.img}
              alt={tour.title}
              fill
              sizes="(min-width: 780px) calc(33.33vw - 160px), calc(100vw - 96px)"
              className="object-cover rounded"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex hover:bg-black hover:opacity-100 bg-black text-black opacity-50 border-none w-10 h-10 md:w-12 md:h-12 -left-14" />
      <CarouselNext className="hidden md:flex hover:bg-black hover:opacity-100 bg-black text-black opacity-50 border-none w-10 h-10 md:w-12 md:h-12 -right-14" />
    </Carousel>
  );
}
