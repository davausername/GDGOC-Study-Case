import { useFetch } from "../../hooks/useFetch";
import { Skeleton } from "../ui/Skeleton";

import gdgocLogo from "../../assets/img/GDGoC_UGM_identity.svg";
import instagramLogo from "../../assets/img/Instagram.svg";
import youtubeLogo from "../../assets/img/YouTube.svg";
import brandSignature from "../../assets/img/Brand_signature.svg";

export default function Footer() {
  const { data, loading } = useFetch("/navigation");

  return (
    <footer className="w-full border-t border-[#DADCE0] bg-[#F1F3F4] py-12">
      {/* 1. Aligned to the 1200px layout container */}
      <div className="container-custom flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* Brand Identity */}
        <div className="space-y-3">
          <a href="/" className="inline-block">
            <img src={gdgocLogo} alt="GDGoC UGM Identity" className="h-9 w-auto" />
          </a>
        </div>
        
        {/* Navigation Links Column */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-[#202124]">Explore</h4>
          <ul className="flex flex-col gap-2">
            {loading ? (
              <li className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-24" />
              </li>
            ) : (
              data?.data?.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="text-sm font-medium text-[#5F6368] hover:text-[#1967D2] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Social / Info Column */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-[#202124]">Keep in loop</h4>
          
          <div className="flex flex-col space-y-2">
            <a 
              href="https://instagram.com/gdgoc.ugm" 
              target="_blank" 
              rel="noreferrer" 
              className="text-sm font-medium text-[#1967D2] hover:underline"
            >
              @gdgoc.ugm
            </a>

            {/* Social Icons wrapped cleanly */}
            <div className="flex items-center gap-3 pt-1">
              <a 
                href="https://instagram.com/gdgoc.ugm" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram"
                className="hover:opacity-80 transition-opacity"
              >
                <img src={instagramLogo} alt="Instagram Logo" className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com/@gdgocugm" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="YouTube"
                className="hover:opacity-80 transition-opacity"
              >
                <img src={youtubeLogo} alt="YouTube Logo" className="w-5 h-5" />
              </a>
            </div>
          </div>

          <p className="text-xs text-[#5F6368]">Learn together. Build together.</p>
        </div>
      </div>

      {/* Bottom Bar & Signature */}
      <div className="container-custom mt-10 pt-6 border-t border-[#DADCE0] flex flex-col items-center gap-6">
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs text-[#5F6368] gap-2">
          <div>
            <p>© GDGoC Universitas Gadjah Mada • 2026/2027</p>
            <img src={brandSignature} alt="GDGoC Brand Signature" className="inline-block pt-5" />
          </div>
          <p>Made for the campus. Open to possibilities.</p>
        </div>
      </div>
    </footer>
  );
}