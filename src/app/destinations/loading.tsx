import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px] bg-red-500" />
        <Skeleton className="h-4 w-[200px] bg-red-500" />
      </div>
    </div>
  );
}
