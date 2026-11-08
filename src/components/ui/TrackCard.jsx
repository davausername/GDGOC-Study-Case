export function TrackCard({
  badge,
  title,
  description,
  topics,
  href = "#",
  imageSrc,
}) {
  return (
    <a
      href={href}
      className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-google-border bg-white p-4 transition-shadow duration-200 hover:shadow-md sm:p-5"
    >
      <div className="space-y-3">
        <div className="flex h-36 w-full items-center justify-center overflow-hidden rounded-xl bg-google-bg-surface sm:h-40">
          <img
            src={imageSrc}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <p className="text-[0.6rem] font-semibold tracking-wide uppercase text-google-blue">
          {badge}
        </p>
        <div className="space-y-1.5">
          <h3 className="text-lg font-bold text-google-text-main transition-colors group-hover:text-google-blue-hover">
            {title}
          </h3>
          <p className="text-xs leading-relaxed text-google-text-sub sm:text-sm">
            {description}
          </p>
        </div>
      </div>
      <div className="mt-4 space-y-3 border-t border-google-border pt-3">
        <p className="text-[0.65rem] leading-relaxed text-google-text-sub">
          {topics}
        </p>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-google-blue group-hover:underline">
          Explore this track
          <span
            className="transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </span>
      </div>
    </a>
  );
}