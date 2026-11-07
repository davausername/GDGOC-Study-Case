interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return <div className={`bg-gray-200 animate-pulse rounded-lg ${className}`} />;
}


export function TrackCardSkeleton() {
  return (
    <div className="p-6 border border-gray-200 rounded-2xl bg-white space-y-4">
      <div className="flex items-center gap-3">
        {/* Icon */}
        <Skeleton className="w-10 h-10 rounded-full" />
        <div className="flex-1 space-y-2">
          {/* Title & Tagline */}
          <Skeleton className="h-5 w-1/2" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      </div>
      {/* Description lines */}
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
    </div>
  );
}


export function TrackGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <TrackCardSkeleton />
      <TrackCardSkeleton />
      <TrackCardSkeleton />
    </div>
  );
}