import HeroImg from '../../assets/img/Ideas_coming_together.svg';
import { Button } from '../ui/Button';

export default function HeroBanner() {
  return (
    <header className="w-full bg-white">
      <div className="container-custom grid grid-cols-1 items-center gap-8 py-8 sm:gap-10 sm:py-12 lg:grid-cols-2 lg:gap-12 lg:py-14">
        <div className="space-y-5 sm:space-y-6">
          <p className="section-eyebrow">GDGoC UGM · 2026/2027</p>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-google-text-main sm:text-5xl lg:text-6xl xl:text-7xl">
            Big ideas.{" "}
            <br className="hidden sm:block" />
            <span className="text-google-blue-hover">Built together.</span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-google-text-sub sm:text-lg">
            A place for curious minds at Universitas Gadjah Mada to learn, connect, and build technology that matters.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button href="/#tracks" variant="primary">
              Find your learning track
            </Button>
            <Button href="/about" variant="outline">
              Get to know us
            </Button>
          </div>
          <p className="flex items-center gap-2 text-xs text-google-text-sub">
            <span className="inline-flex gap-1" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-google-blue" />
              <span className="h-2 w-2 rounded-full bg-google-red" />
              <span className="h-2 w-2 rounded-full bg-google-yellow" />
              <span className="h-2 w-2 rounded-full bg-google-green" />
            </span>
            Different backgrounds. A shared curiosity.
          </p>
        </div>
        <div className="w-full">
          <img
            src={HeroImg}
            alt="Illustration of creative ideas coming together"
            className="mx-auto max-h-[420px] w-full max-w-[560px] rounded-3xl object-cover lg:max-h-[460px]"
          />
        </div>
      </div>

      <div className="border-y border-google-border bg-white">
        <ul className="container-custom flex flex-col justify-between gap-3 py-4 text-xs font-medium text-google-text-main sm:flex-row sm:items-center sm:gap-4 sm:py-3">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-google-blue" aria-hidden="true" />
              Learn by doing
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-google-red" aria-hidden="true" />
              Connect across disciplines
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-google-green" aria-hidden="true" />
              Build with purpose
            </li>
        </ul>
      </div>
    </header>
  );
}