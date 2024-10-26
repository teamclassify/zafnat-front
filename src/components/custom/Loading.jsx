import { Skeleton } from "@/components/ui/skeleton";

export function LoadingGrid() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
      <Skeleton className="h-[200px] w-full rounded-xl" />
      <Skeleton className="h-[200px] w-full rounded-xl" />
      <Skeleton className="h-[200px] w-full rounded-xl" />
      <Skeleton className="h-[200px] w-full rounded-xl" />
      <Skeleton className="h-[200px] w-full rounded-xl" />
      <Skeleton className="h-[200px] w-full rounded-xl" />
    </div>
  );
}
