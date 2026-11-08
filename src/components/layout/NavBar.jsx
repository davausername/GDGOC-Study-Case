import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import gdgocLogo from "../../assets/img/GDGoC_UGM_identity.svg";
import { Button } from "../ui/Button";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Overview", to: "/#tracks", hash: "#tracks" },
  { label: "Contact", to: "/#contact", hash: "#contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname, hash } = useLocation();

  const closeMenu = () => setIsOpen(false);
  const isActive = (link) =>
    link.hash
      ? pathname === "/" && hash === link.hash
      : pathname === link.to;

  const renderLinks = (mobile = false) =>
    LINKS.map((link) => (
      <li key={link.label}>
        <Link
          to={link.to}
          onClick={closeMenu}
          aria-current={isActive(link) ? "page" : undefined}
          className={`block rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-google-blue ${
            isActive(link)
              ? "bg-google-blue-light text-google-blue-hover"
              : "text-google-text-sub hover:bg-google-bg-surface hover:text-google-text-main"
          } ${mobile ? "w-full" : ""}`}
        >
          {link.label}
        </Link>
      </li>
    ));

  return (
    <header className="relative z-50 border-b border-google-border bg-white">
      <nav
        className="container-custom flex min-h-16 items-center justify-between gap-4 sm:min-h-[4.5rem]"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          onClick={closeMenu}
          className="shrink-0 rounded focus-visible:outline-2 focus-visible:outline-google-blue"
        >
          <img
            src={gdgocLogo}
            alt="Google Developer Groups on Campus, Universitas Gadjah Mada"
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <div className="hidden items-center gap-5 md:flex">
          <ul className="flex items-center gap-1">{renderLinks()}</ul>
          <Button href="/#tracks" variant="primary">
            Find your track
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-google-text-main transition-colors hover:bg-google-bg-surface focus-visible:outline-2 focus-visible:outline-google-blue md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            {isOpen ? (
              <path d="m6 6 12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-b border-google-border bg-white p-4 shadow-lg md:hidden"
        >
          <ul className="flex flex-col gap-1">{renderLinks(true)}</ul>
          <Button href="/#tracks" variant="primary" className="mt-3 w-full">
            Find your track
          </Button>
        </div>
      )}
    </header>
  );
}
