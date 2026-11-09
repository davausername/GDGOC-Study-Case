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

const TRACK_BACKGROUNDS = {
  "research-discovery": "#EAF2FF",
  "design-creativity": "#FFF7DF",
  development: "#EAF5ED",
};

const TRACK_COPY = {
  "research-discovery": {
    badge: "Explore the why",
    title: "Research & discovery",
    description:
      "Ask better questions, understand people, and turn insight into a clear problem worth solving.",
    topics: "Problem framing · User research · Product thinking",
  },
  "design-creativity": {
    badge: "Make it meaningful",
    title: "Design & creativity",
    description:
      "Translate ideas into thoughtful experiences, from a first sketch to a prototype people can use.",
    topics: "UI/UX · Visual storytelling · Prototyping",
  },
  development: {
    badge: "Bring ideas to life",
    title: "Development",
    description:
      "Learn the tools, write the code, and build useful things with people who enjoy figuring it out.",
    topics: "Web & mobile · Cloud · AI foundations",
  },
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
          <div
            key={i}
            className="min-h-[500px] overflow-hidden rounded-3xl border border-google-border bg-white"
          >
            <Skeleton className="h-[220px] w-full rounded-none" />
            <div className="space-y-4 p-6">
              <Skeleton className="h-3 w-32" />
              <Skeleton className="h-7 w-48" />
              <Skeleton className="h-16 w-full" />
              <Skeleton className="mt-6 h-4 w-36" />
            </div>
          </div>
        ))
      ) : (
        data?.data?.map((track) => {
          const copy = TRACK_COPY[track.id];

          return (
            <TrackCard
              key={track.id}
              badge={copy?.badge ?? track.tagline}
              title={copy?.title ?? track.name}
              description={copy?.description ?? track.description}
              topics={copy?.topics ?? track.skills?.join(" · ")}
              href="/#tracks"
              imageSrc={TRACK_ILLUSTRATIONS[track.id]}
              imageBackgroundColor={TRACK_BACKGROUNDS[track.id]}
            />
          );
        })
      )}
    </div>
  );
}