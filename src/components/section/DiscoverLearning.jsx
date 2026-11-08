import { Button } from "../ui/Button";
import TrackCards from "../features/TrackCards";
import paintIllustration from "../../assets/img/paintIllustration.svg";
import searchIllustration from "../../assets/img/SearchIllustration.svg";
import codeIllustration from "../../assets/img/codeIllustration.svg";

export default function DiscoverLearning() {
  return (
    <div className="w-full space-y-20 py-12">
      
      {/* 1. Community Mission Section */}
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <div className="lg:col-span-6 space-y-4">
            <p className="text-xs font-semibold tracking-wider text-google-text-sub uppercase">
              A campus. A community.
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-google-text-main leading-tight">
              Not just learning tech. <br className="hidden sm:inline" />
              Finding your people.
            </h2>
            <div className="pt-2">
              <Button href="#about" variant="outline">
                More about GDGoC UGM
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 lg:pt-8">
            <p className="text-lg sm:text-[21px] text-google-text-main leading-relaxed">
              Google Developer Groups on Campus, Universitas Gadjah Mada brings students together around one simple idea: we can go further when we learn with each other.
            </p>
            <p className="text-base sm:text-[18px] text-google-text-sub leading-relaxed">
              From your first line of code to your next product idea, there’s room to ask questions, share what you know, and try something new.
            </p>
            <ul className="flex flex-wrap items-center gap-6 pt-2 text-sm font-medium text-google-text-sub">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-google-blue rounded-full inline-block" />
                Student-led
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-google-green rounded-full inline-block" />
                Peer-powered
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-google-yellow rounded-full inline-block" />
                Curiosity-first
              </li>
            </ul>
          </div>

        </div>
      </section>


      {/* 2. Tracks Overview Section */}
      <section className="container-custom space-y-8">
        <div className="pb-6">

          <div className="space-y-2 max-w-xl">
            <p className="text-xs font-semibold tracking-wider text-google-text-sub uppercase">
              Find your starting point
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-google-text-main">Many interests. One shared journey.</h2>
          </div>

          <div className="flex justify-between space-y-3 mt-5">
            <p className="text-sm text-google-text-sub max-w-md">
              Follow what excites you. Explore a track, then connect the dots with others.
            </p>
            <Button href="#tracks" variant="outline">See the overview</Button>
          </div>

        </div>

        {/* Dynamic Track Cards container slot */}
        <div className="w-full">
          <TrackCards />
        </div>
      </section>


      {/* 3. Formats Section (Full Bleed Background) */}
      <section className="w-full bg-google-bg-surface py-16">
        <div className="container-custom space-y-8">
          <div className="space-y-3 max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-google-text-sub uppercase">
              More than a classroom
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-google-text-main">
              Less watching. More making.
            </h2>
            <p className="text-base text-google-text-sub">
              Learn in a way that turns a new concept into something you can actually use.
            </p>
          </div>

          {/* Formats Grid slot */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Formats content cards */}
          </div>
        </div>
      </section>

    </div>
  );
}