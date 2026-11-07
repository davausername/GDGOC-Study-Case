import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Skeleton } from "../ui/Skeleton";
import { Button } from "../ui/Button";

import gdgocLogo from "../../assets/img/GDGoC_UGM_identity.svg";

export default function NavBar() {
  const { data, loading } = useFetch("/navigation");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-[#DADCE0] bg-white">
      {/* 1. Max 1200px container wrapper centered with padding */}
      <div className="container-custom flex items-center justify-between h-24">
        
        {/* Brand Logo with responsive sizing */}
        <a href="/" className="flex items-center">
          <img 
            src={gdgocLogo} 
            alt="GDGoC UGM Identity" 
            className="h-9 w-auto object-contain" 
          />
        </a>

        {/* Dynamic Navigation Links */}
        <ul className="flex items-center gap-2">
          {loading ? (
            <li className="flex gap-4">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
            </li>
          ) : (
            data?.data?.map((item) => (
              <li key={item.href}>
                {/* 2. Fixed evaluated JS string {item.href} */}
                <a 
                  href={item.href} 
                  className="inline-block px-4 py-2 rounded-md font-medium text-[#1967D2] hover:bg-[#EAF2FF] transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))
          )}
        </ul>

        {/* Action CTA */}
        <Button href="#tracks" variant="primary">
          Find your track
        </Button>
      </div>
    </nav>
  );
}