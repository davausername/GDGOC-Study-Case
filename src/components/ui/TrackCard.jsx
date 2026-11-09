export function TrackCard({
  badge,
  title,
  description,
  topics,
  href = "#",
  imageSrc,
  imageBackgroundColor = "#fff",
}) {
  return (
    <a
      href={href}
      className="group flex h-full min-h-[515px] flex-col overflow-hidden rounded-3xl border border-google-border bg-white transition-shadow duration-200 hover:shadow-md"
    >
      <div
        className="flex h-[220px] w-full shrink-0 justify-center overflow-hidden"
        style={{ backgroundColor: imageBackgroundColor }}
      >
        <img
          src={imageSrc}
          alt=""
          aria-hidden="true"
          className="block h-auto w-full max-w-[400px] shrink-0 self-start transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[0.65rem] font-semibold tracking-wide uppercase text-google-blue">
          {badge}
        </p>
        <div className="mt-4">
          <h3 className="text-xl font-bold leading-tight text-google-text-main transition-colors group-hover:text-google-blue-hover sm:text-[1.65rem]">
            {title}
          </h3>
          <p className="mt-4 text-base leading-6 text-google-text-sub">
            {description}
          </p>
        </div>
        <div className="mt-auto pt-5">
          <div className="border-t border-google-border pt-4">
            <p className="text-[0.8rem] leading-5 text-google-text-sub">
              {topics}
            </p>
            <span className="mt-3 inline-flex items-center gap-2 text-base font-semibold text-google-blue">
              Explore this track
              <span
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}