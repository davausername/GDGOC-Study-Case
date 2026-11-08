import { Button } from "../ui/Button";
import TrackCards from "../features/TrackCards";

const FORMATS = [
  {
    title: "Study together",
    description:
      "Work through foundations in peer learning sessions. Bring your questions; leave with a next step.",
    link: "Study groups & guided practice",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M12 4v16" />
      </>
    ),
  },
  {
    title: "Try it hands-on",
    description:
      "Explore a tool or technique in a workshop, then put it to work in a small experiment.",
    link: "Workshops & technical sessions",
    icon: <path d="m9 6-6 6 6 6m6-12 6 6-6 6" />,
  },
  {
    title: "Share the process",
    description:
      "Exchange feedback, explain your decisions, and learn from different ways of thinking.",
    link: "Project circles & sharing sessions",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20v-1a6 6 0 0 1 12 0v1M16 5.2a3 3 0 0 1 0 5.6M17 14a5 5 0 0 1 4 5v1" />
      </>
    ),
  },
];

export default function DiscoverLearning() {
  return (
    <div className="w-full space-y-16 py-12 sm:space-y-20 sm:py-16">
      <section id="about" className="container-custom">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-4 lg:col-span-5">
            <p className="section-eyebrow">A campus. A community.</p>
            <h2 className="text-3xl font-bold leading-tight text-google-text-main sm:text-4xl">
              Not just learning tech.
              <br className="hidden sm:block" /> Finding your people.
            </h2>
            <Button href="/about" variant="text">
              More about GDGoC UGM
            </Button>
          </div>

          <div className="space-y-4 lg:col-span-7 lg:pt-1">
            <p className="text-base leading-relaxed text-google-text-main sm:text-lg">
              Google Developer Groups on Campus, Universitas Gadjah Mada brings
              students together around one simple idea: we can go further when
              we learn with each other.
            </p>
            <p className="text-sm leading-relaxed text-google-text-sub sm:text-base">
              From your first line of code to your next product idea, there’s
              room to ask questions, share what you know, and try something new.
            </p>
            <ul className="flex flex-wrap gap-2 pt-1 text-xs font-medium text-google-text-sub sm:gap-3">
              {[
                ["Student-led", "bg-google-blue"],
                ["Peer-powered", "bg-google-green"],
                ["Curiosity-first", "bg-google-yellow"],
              ].map(([label, color]) => (
                <li
                  key={label}
                  className="rounded-full bg-google-bg-surface px-3 py-1.5"
                >
                  <span
                    className={`mr-1.5 inline-block h-1.5 w-1.5 rounded-full ${color}`}
                    aria-hidden="true"
                  />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="tracks" className="container-custom space-y-6 sm:space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-2">
            <p className="section-eyebrow">Find your starting point</p>
            <h2 className="text-2xl font-bold leading-tight text-google-text-main sm:text-3xl lg:text-4xl">
              Many interests. One shared journey.
            </h2>
            <p className="max-w-lg text-sm leading-relaxed text-google-text-sub">
              Follow what excites you. Explore a track, then connect the dots
              with others.
            </p>
          </div>
          <Button href="#tracks" variant="text" className="self-start sm:self-auto">
            See the overview
          </Button>
        </div>
        <TrackCards />
      </section>

      <section className="w-full bg-google-bg-surface py-12 sm:py-16">
        <div className="container-custom space-y-7 sm:space-y-8">
          <div className="max-w-2xl space-y-2">
            <p className="section-eyebrow">More than a classroom</p>
            <h2 className="text-2xl font-bold leading-tight text-google-text-main sm:text-3xl lg:text-4xl">
              Less watching. More making.
            </h2>
            <p className="text-sm leading-relaxed text-google-text-sub sm:text-base">
              Learn in a way that turns a new concept into something you can
              actually use.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {FORMATS.map((format) => (
              <article
                key={format.title}
                className="flex h-full flex-col rounded-2xl bg-white p-5 sm:p-6"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mb-4 h-5 w-5 text-google-blue"
                  aria-hidden="true"
                >
                  {format.icon}
                </svg>
                <h3 className="text-base font-bold text-google-text-main">
                  {format.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-google-text-sub">
                  {format.description}
                </p>
                <p className="mt-4 border-t border-google-border pt-3 text-xs font-semibold text-google-blue">
                  {format.link}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
