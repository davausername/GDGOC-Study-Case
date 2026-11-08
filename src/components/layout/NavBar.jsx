import { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Skeleton } from "../ui/Skeleton";
import { Button } from "../ui/Button";

import gdgocLogo from "../../assets/img/GDGoC_UGM_identity.svg";

export default function NavBar() {
  const { data, loading } = useFetch("/navigation");
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="relative w-full border-b border-google-border bg-white z-50">
      <div className="container-custom flex items-center justify-between h-20 sm:h-24">
        
        {/* Brand Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center">
          <img 
            src={gdgocLogo} 
            alt="GDGoC UGM Identity" 
            className="h-8 sm:h-9 w-auto object-contain" 
          />
        </Link>

        {/* Desktop Links & CTA */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-2">
            {loading ? (
              <li className="flex gap-4">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-16" />
              </li>
            ) : (
              data?.data?.map((item) => (
                <li key={item.href}>
                  <Link 
                    to={item.href} 
                    className="inline-block px-4 py-2 rounded-md text-sm font-medium text-google-text-main hover:text-google-blue hover:bg-google-blue-light transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))
            )}
          </ul>

          <Button href="#tracks" variant="primary">
            Find your track
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          type="button"
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-lg text-google-text-sub hover:bg-google-bg-surface focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer (Renders when hamburger is toggled) */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-google-border shadow-lg p-6 space-y-4">
          <ul className="flex flex-col space-y-2">
            {loading ? (
              <li className="space-y-2">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-6 w-32" />
              </li>
            ) : (
              data?.data?.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    onClick={closeMenu}
                    className="block py-2 text-base font-medium text-google-text-main hover:text-google-blue transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))
            )}
          </ul>

          <div className="pt-4 border-t border-google-border/60">
            <Button href="#tracks" variant="primary" className="w-full text-center">
              Find your track
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}