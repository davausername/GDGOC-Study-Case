// src/components/features/TrackCards.jsx
import { useFetch } from "../../hooks/useFetch";
import { TrackCard } from "../ui/TrackCard";
import { Skeleton } from "../ui/Skeleton";

export default function TrackCards() {
  const { data, loading, error } = useFetch("/tracks");

  if (error) {
    return <p className="text-sm text-red-500">Failed to load learning tracks.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {loading ? (
        Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-105 rounded-2xl border border-google-border p-6 space-y-4 bg-white">
            <Skeleton className="h-44 w-full rounded-xl" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-4 w-36 mt-6" />
          </div>
        ))
      ) : (
        data?.data?.map((track) => (
          <TrackCard
            key={track.id || track.title}
            badge={track.badge || track.category}
            title={track.title}
            description={track.description}
            topics={track.topics}
            href={track.href || `#${track.id}`}
            imageSrc={track.image || track.icon_url}
          />
        ))
      )}
    </div>
  );
}