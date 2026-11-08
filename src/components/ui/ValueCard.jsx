// src/components/ui/ValueCard.jsx
export function ValueCard({ imageSrc, title, description, colorClass = "border-t-google-blue" }) {
  return (
    <div className={`flex flex-col justify-between p-4 sm:p-6 rounded-2xl border border-google-border bg-white shadow-sm border-t-4 ${colorClass}`}>
      <div className="space-y-3 sm:space-y-4">
        {/* Responsive icon sizing for mini viewports */}
        <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
          <img src={imageSrc} alt={title} className="w-full h-full object-contain" />
        </div>
        
        {/* Scaling font size */}
        <h3 className="text-base sm:text-lg font-bold text-google-text-main">
          {title}
        </h3>
        
        <p className="text-xs sm:text-sm text-google-text-sub leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}