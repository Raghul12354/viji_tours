import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingId() {
  return (
    <div className="bg-custom_white m-6 md:mx-40 max-w-screen h-screen my-10 p-6 md:p-16 shadow-2xl rounded-md">
      <div className="flex items-center justify-between">
        <div>
          <Skeleton className="w-60 h-10 bg-gray-500" />
          <Skeleton className="w-40 h-8 bg-gray-500 mt-3" />
        </div>
        <Skeleton className="w-44 h-16 bg-gray-500" />
      </div>
      <div className="grid grid-cols-3 gap-5 mt-10">
        <Skeleton className="h-[200px] md:h-[350px] bg-gray-500" />
        <Skeleton className="h-[200px] md:h-[350px] bg-gray-500" />
        <Skeleton className="h-[200px] md:h-[350px] bg-gray-500" />
      </div>
      <Skeleton className="w-full h-7 bg-gray-500 mt-5" />
    </div>
  );
}