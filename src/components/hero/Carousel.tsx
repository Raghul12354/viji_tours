import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Item = {
  id: number;
  img: string;
 
}[];

const imagesData:Item = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1542396601-dca920ea2807?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    img: "https://picsum.photos/seed/random101/500/500",
  },
  {
    id: 3,
    img: "/hero/Test_bg.jpg",
  },
];

const CarouselComp = () => {
  return (
    <Carousel className="bg-red-500 flex justify-center items-center mx-auto w-1/2">
      <CarouselContent>
        {imagesData.map((item, index) => {
          return (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
             <img src={item.img} alt="" />
            </CarouselItem>
          );
        })}

        {/* <CarouselItem className="md:basis-1/2 lg:basis-1/3">2</CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">3</CarouselItem> */}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselComp;
