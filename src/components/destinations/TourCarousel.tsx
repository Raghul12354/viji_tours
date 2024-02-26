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

export default function TourCarousel() {
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
        {/* <CarouselItem className="relative h-[400px] w-full">
        <Image
          src={singleTour.img}
          alt={singleTour.title}
          fill
          sizes=""
          className="object-cover -z-10"
        />
      </CarouselItem> */}
        <CarouselItem className="basis-full md:basis-1/3">
          <img
            src="/hero/Test_bg.jpg"
            alt=""
            className="h-[200px] md:h-[400px] w-full"
          />
        </CarouselItem>
        <CarouselItem className="basis-full md:basis-1/3">
          <img
            src="/hero/Test_bg.jpg"
            alt=""
            className="h-[200px] md:h-[400px] w-full"
          />
        </CarouselItem>
        <CarouselItem className="basis-full md:basis-1/3">
          <img
            src="/hero/Test_bg.jpg"
            alt=""
            className="h-[200px] md:h-[400px] w-full"
          />
        </CarouselItem>
        <CarouselItem className="basis-full md:basis-1/3">
          <img
            src="/hero/Test_bg.jpg"
            alt=""
            className="h-[200px] md:h-[400px] w-full"
          />
        </CarouselItem>
        <CarouselItem className="basis-full md:basis-1/3">
          <img
            src="/hero/Test_bg.jpg"
            alt=""
            className="h-[200px] md:h-[400px] w-full"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex hover:bg-black hover:opacity-100 bg-black text-black opacity-50 border-none w-10 h-10 md:w-12 md:h-12 -left-14" />
      <CarouselNext className="hidden md:flex hover:bg-black hover:opacity-100 bg-black text-black opacity-50 border-none w-10 h-10 md:w-12 md:h-12 -right-14" />
    </Carousel>
  );
}