// src/components/features/TrackCards.jsx
import { useFetch } from "../../hooks/useFetch";
import { TrackCard } from "../ui/TrackCard";
import { Skeleton } from "../ui/Skeleton";
import searchIllustration from "../../assets/img/searchIllustration.svg";
import paintIllustration from "../../assets/img/paintIllustration.svg";
import codeIllustration from "../../assets/img/codeIllustration.svg";

const TRACK_ILLUSTRATIONS = {
  "research-discovery": searchIllustration,
  "design-creativity": paintIllustration,
  development: codeIllustration,
};

export default function TrackCards() {
  const { data, loading, error } = useFetch("/tracks");

  if (error) {
    return <p className="text-sm text-red-500">Failed to load learning tracks.</p>;
  }

  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
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
            key={track.id}
            badge={track.tagline}
            title={track.name}
            description={track.description}
            topics={track.skills?.join(" · ")}
            href="/#tracks"
            imageSrc={TRACK_ILLUSTRATIONS[track.id]}
          />
        ))
      )}
    </div>
  );
}