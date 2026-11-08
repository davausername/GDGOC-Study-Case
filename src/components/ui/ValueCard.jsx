export function ValueCard({
  imageSrc,
  title,
  description,
  accentClass = "bg-google-blue",
}) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-google-border bg-white p-4 sm:p-5">
      <span className={`mb-3 h-0.5 w-8 rounded-full ${accentClass}`} />
      <div className="space-y-3">
        <div className="flex h-6 w-6 items-center justify-center">
          <img src={imageSrc} alt="" aria-hidden="true" className="h-full w-full object-contain" />
        </div>
        <h3 className="text-base font-bold text-google-text-main">
          {title}
        </h3>
        <p className="text-xs leading-relaxed text-google-text-sub sm:text-sm">
          {description}
        </p>
      </div>
    </article>
  );
}