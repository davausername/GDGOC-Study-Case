import Arrow from '../../assets/img/Arrow.svg';
import { Link } from "react-router-dom";

const VARIANTS = {
  primary:
    "bg-google-blue px-4 py-2 text-white shadow-sm hover:bg-google-blue-hover",
  secondary:
    "bg-google-bg-surface px-4 py-2 text-google-text-main hover:bg-google-border",
  outline:
    "border border-google-border px-4 py-2 text-google-text-main hover:bg-google-bg-surface",
  text: "px-0 py-2 text-google-blue-hover hover:underline",
};

export function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
}) {
  const variantStyles = VARIANTS[variant] ?? VARIANTS.primary;
  const classNames = `inline-flex min-h-10 items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-google-blue ${variantStyles} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      <img src={Arrow} alt="" aria-hidden="true" className="h-4 w-4 shrink-0" />
    </>
  );

  return href.startsWith("/") || href.startsWith("#") ? (
    <Link to={href} className={classNames}>
      {content}
    </Link>
  ) : (
    <a href={href} className={classNames}>
      {content}
    </a>
  );
}