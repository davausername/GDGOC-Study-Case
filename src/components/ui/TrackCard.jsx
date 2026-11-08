// src/components/ui/TrackCard.jsx
export function TrackCard({ 
  badge, 
  title, 
  description, 
  topics, 
  href = "#", 
  imageSrc 
}) {
  return (
    <a 
      href={href}
      className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-google-border bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200"
    >
      <div className="space-y-4">
        {/* Header Illustration Image */}
        <div className="flex h-44 w-full items-center justify-center overflow-hidden rounded-xl bg-gray-50">
          <img 
            src={imageSrc} 
            alt={title} 
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
          />
        </div>

        {/* Badge / Subtitle */}
        <p className="text-xs font-bold tracking-wider uppercase text-google-blue">
          {badge}
        </p>

        {/* Card Title & Description */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-google-text-main group-hover:text-google-blue-hover transition-colors">
            {title}
          </h3>
          <p className="text-sm text-google-text-sub leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Footer & Topics */}
      <div className="mt-6 pt-4 border-t border-google-border/60 space-y-3">
        <p className="text-xs font-medium text-google-text-sub/80">
          {topics}
        </p>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-google-blue group-hover:underline">
          Explore this track <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </a>
  );
}