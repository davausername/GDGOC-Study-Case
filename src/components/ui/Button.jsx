import Arrow from '../../assets/img/Arrow.svg';

export function Button({ children, href = "#", variant = "primary", className = "" }) {

    const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shadow-sm";

    const variants = {
        primary: "bg-[#4284F4] text-white hover:bg-blue-400",
        secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
        outline: "border border-gray-300 text-gray-700 hover:bg-gray-50"
    };

    return (
    <a 
      href={href} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
      <img src={Arrow} alt="" aria-hidden="true" className="w-4 h-4 shrink-0" />
    </a>
  );
}