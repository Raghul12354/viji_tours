import { Skeleton } from "@/components/ui/skeleton";
const Loading = () => {
  return (
    <div className="px-6 md:px-40">
      <Skeleton className="h-screen w-full bg-gray-500 my-20 rounded">
        <Skeleton className="h-14 w-full" />
        <Skeleton className="h-14 w-full mt-5" />
        <Skeleton className="h-14 w-full mt-5" />
        <Skeleton className="h-14 w-full mt-5" />
        <Skeleton className="h-14 w-full mt-5" />
        <Skeleton className="h-14 w-full mt-5" />
        <Skeleton className="h-14 w-full mt-5" />
        <Skeleton className="h-14 w-full mt-5" />
        <Skeleton className="h-14 w-full mt-5" />
        <Skeleton className="h-14 w-full mt-5" />
        <Skeleton className="h-14 w-full mt-5" />
      </Skeleton>
    </div>
  );
};

export default Loading;