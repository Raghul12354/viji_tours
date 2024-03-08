import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-10">
      <div className="h-auto w-fit md:h-[500px] md:w-[480px]">
        <Skeleton className="min-h-[200px] md:min-h-[350px] w-full bg-gray-500">
          <Skeleton className="h-[200px]" />
          <Skeleton className="h-4 w-[350px] mt-5" />
          <Skeleton className="h-4 w-[300px] mt-3" />
          <Skeleton className="h-6 w-20 mt-5 mb-2" />
        </Skeleton>
      </div>
      <div className="h-auto md:h-[500px] md:w-[480px]">
        <Skeleton className="min-h-[200px] md:min-h-[350px] w-full bg-gray-500">
          <Skeleton className="h-[200px]" />
          <Skeleton className="h-4 w-[350px] mt-5" />
          <Skeleton className="h-4 w-[300px] mt-3" />
          <Skeleton className="h-6 w-20 mt-5 mb-2" />
        </Skeleton>
      </div>
      <div className="h-auto md:h-[500px] md:w-[480px]">
        <Skeleton className="min-h-[200px] md:min-h-[350px] w-full bg-gray-500">
          <Skeleton className="h-[200px]" />
          <Skeleton className="h-4 w-[350px] mt-5" />
          <Skeleton className="h-4 w-[300px] mt-3" />
          <Skeleton className="h-6 w-20 mt-5 mb-2" />
        </Skeleton>
      </div>
      <div className="h-auto md:h-[500px] md:w-[480px]">
        <Skeleton className="min-h-[200px] md:min-h-[350px] w-full bg-gray-500">
          <Skeleton className="h-[200px]" />
          <Skeleton className="h-4 w-[350px] mt-5" />
          <Skeleton className="h-4 w-[300px] mt-3" />
          <Skeleton className="h-6 w-20 mt-5 mb-2" />
        </Skeleton>
      </div>
      <div className="h-auto md:h-[500px] md:w-[480px]">
        <Skeleton className="min-h-[200px] md:min-h-[350px] w-full bg-gray-500">
          <Skeleton className="h-[200px]" />
          <Skeleton className="h-4 w-[350px] mt-5" />
          <Skeleton className="h-4 w-[300px] mt-3" />
          <Skeleton className="h-6 w-20 mt-5 mb-2" />
        </Skeleton>
      </div>
      <div className="h-auto md:h-[500px] md:w-[480px]">
        <Skeleton className="min-h-[200px] md:min-h-[350px] w-full bg-gray-500">
          <Skeleton className="h-[200px]" />
          <Skeleton className="h-4 w-[350px] mt-5" />
          <Skeleton className="h-4 w-[300px] mt-3" />
          <Skeleton className="h-6 w-20 mt-5 mb-2" />
        </Skeleton>
      </div>
    </div>
  );
}