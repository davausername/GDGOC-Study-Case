import HeroImg from '../../assets/img/Ideas_coming_together.svg';
import { Button } from '../ui/Button';

export default function HeroBanner() {
  return (
    <header className="w-full bg-white pt-8 pb-12">
      {/* Main Hero Container using custom CSS utility */}
      <div className="container-custom flex flex-col lg:flex-row items-center justify-between gap-12 py-8 lg:py-16">
        
        {/* Left Column: Text & CTAs */}
        <section className="flex-1 max-w-2xl space-y-6">
          <ul className="text-sm font-semibold tracking-wide text-[#5F6368]">
            <li>GDGoC UGM • 2026/2027</li>
          </ul>

          <h1 className="text-4xl sm:text-6xl lg:text-[80px] font-bold text-gray-900 leading-[1.1] tracking-tight">
            Big ideas.<br /><span className="text-[#1967D2]">Built together.</span>
          </h1>

          <p className="text-lg sm:text-[21px] text-[#5F6368] leading-relaxed">
            A place for curious minds at Universitas Gadjah Mada to learn, connect, and build technology that matters.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button href="#tracks" variant="primary">Find your learning track</Button>
            <Button href="#about" variant="outline">Get to know us</Button>
          </div>

          <p className="text-sm text-[#5F6368]">Different backgrounds. A shared curiosity.</p> 
        </section>

        {/* Right Column: Hero Graphic */}
        <div className="flex-1 flex justify-center w-full max-w-md lg:max-w-none">
          <img 
            src={HeroImg} 
            alt="Big ideas built together illustration" 
            className="w-full h-auto object-contain max-h-[480px]"
          />
        </div>
      </div>

      {/* Ticker / Highlights Bar */}
      <div className="w-full border-y border-gray-200 bg-gray-50/50">
        <div className="container-custom">
          <ul className="flex flex-col sm:flex-row items-center justify-between gap-4 py-5 text-sm font-medium text-gray-600 list-disc list-inside sm:list-none">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#4284F4] inline-block sm:inline" />
              Learn by doing
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#34A853] inline-block sm:inline" />
              Connect across disciplines
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FBBC05] inline-block sm:inline" />
              Build with purpose
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}