import { Link } from "react-router-dom";
import gdgocLogo from "../../assets/img/GDGoC_UGM_identity.svg";
import instagramLogo from "../../assets/img/Instagram.svg";
import youtubeLogo from "../../assets/img/YouTube.svg";
import brandSignature from "../../assets/img/Brand_signature.svg";

const FOOTER_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Overview", to: "/#tracks" },
  { label: "Contact", to: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-google-border bg-google-bg-surface py-10 sm:py-12">
      <div className="container-custom grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-[1.5fr_0.7fr_0.8fr] md:gap-10">
        <div className="space-y-3">
          <Link to="/" className="inline-flex rounded focus-visible:outline-2 focus-visible:outline-google-blue">
            <img
              src={gdgocLogo}
              alt="Google Developer Groups on Campus, Universitas Gadjah Mada"
              className="h-9 w-auto"
            />
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-google-text-sub">
            A student community for curious minds, shared learning, and
            technology with purpose.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-bold text-google-text-main">
            Explore
          </h2>
          <ul className="space-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-sm text-google-text-sub transition-colors hover:text-google-blue-hover"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-sm font-bold text-google-text-main">
            Keep in the loop
          </h2>
          <a
            href="https://instagram.com/gdgoc.ugm"
            target="_blank"
            rel="noreferrer"
            className="block text-sm font-medium text-google-blue-hover hover:underline"
          >
            @gdgoc.ugm
          </a>
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/gdgoc.ugm"
              target="_blank"
              rel="noreferrer"
              aria-label="GDGoC UGM on Instagram"
              className="rounded focus-visible:outline-2 focus-visible:outline-google-blue"
            >
              <img src={instagramLogo} alt="" className="h-5 w-5" />
            </a>
            <a
              href="https://youtube.com/@gdgocugm"
              target="_blank"
              rel="noreferrer"
              aria-label="GDGoC UGM on YouTube"
              className="rounded focus-visible:outline-2 focus-visible:outline-google-blue"
            >
              <img src={youtubeLogo} alt="" className="h-5 w-5" />
            </a>
          </div>
          <p className="text-xs text-google-text-sub">
            Learn together. Build together.
          </p>
        </div>
      </div>

      <div className="container-custom mt-8 border-t border-google-border pt-5">
        <div className="flex flex-col gap-3 text-xs text-google-text-sub sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <p>© GDGoC Universitas Gadjah Mada · 2026/2027</p>
            <img
              src={brandSignature}
              alt="Google brand colors"
              className="h-1 w-20"
            />
          </div>
          <p>Made for the campus. Open to possibilities.</p>
        </div>
      </div>
    </footer>
  );
}
