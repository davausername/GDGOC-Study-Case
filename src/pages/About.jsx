import { ValueCard } from "../components/ui/ValueCard";
import JoinCta from "../components/section/JoinCta";

import CommunityMarkIMG from "../assets/img/Community_mark_artwork.svg";
import bookIcon from "../assets/img/bookIcon.svg";
import peopleIcon from "../assets/img/peopleIcon.svg";
import codeIcon from "../assets/img/codeIcon.svg";
import heartIcon from "../assets/img/heartIcon.svg";
import commitmentSparkIcon from "../assets/img/Commitment_spark.svg";

const VALUES = [
  {
    imageSrc: bookIcon,
    title: "Stay curious",
    description:
      "Ask the extra question. Be willing to learn something outside your comfort zone.",
    accentClass: "bg-google-blue",
  },
  {
    imageSrc: peopleIcon,
    title: "Make room",
    description:
      "Welcome different perspectives, respect each other, and help people find their voice.",
    accentClass: "bg-google-red",
  },
  {
    imageSrc: codeIcon,
    title: "Learn by building",
    description:
      "Try a small experiment. Share the rough version. Let feedback guide what comes next.",
    accentClass: "bg-google-yellow",
  },
  {
    imageSrc: heartIcon,
    title: "Give something back",
    description:
      "Share a resource, explain what clicked, or help someone take their next step.",
    accentClass: "bg-google-green",
  },
];

const ROLES = [
  {
    title: "Come as a learner",
    description:
      "Explore a topic, join a discussion, and ask the question that’s been on your mind.",
  },
  {
    title: "Grow as a collaborator",
    description:
      "Work with people whose skills complement yours. Discover what you can build together.",
  },
  {
    title: "Give back as a contributor",
    description:
      "Share knowledge, support a learning session, or bring an idea for the community.",
  },
];

export default function About() {
  return (
    <div>
      <section className="container-custom grid grid-cols-1 items-center gap-8 py-10 sm:gap-12 sm:py-14 md:grid-cols-12">
        <div className="space-y-4 md:col-span-7">
          <p className="section-eyebrow">About GDGoC UGM</p>
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-google-text-main sm:text-5xl lg:text-6xl">
            Built by students.
            <br />
            <span className="text-google-blue-hover">For what’s next.</span>
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-google-text-sub sm:text-base">
            We’re a community of learners and makers at Universitas Gadjah Mada,
            connected by curiosity and the belief that technology can do good.
          </p>
          <p className="text-[0.65rem] font-medium tracking-wide text-google-text-sub">
            UNIVERSITAS GADJAH MADA · 2026/2027
          </p>
        </div>
        <div className="md:col-span-5">
          <img
            src={CommunityMarkIMG}
            alt="Colorful GDGoC community mark"
            className="mx-auto aspect-[1.15] w-full max-w-[420px] rounded-3xl object-cover"
          />
        </div>
      </section>

      <section className="bg-google-bg-surface py-10 sm:py-14">
        <div className="container-custom grid grid-cols-1 items-start gap-6 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <p className="section-eyebrow">Why we come together</p>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-google-text-main sm:text-3xl">
              A bridge from
              <br />
              <span className="text-google-blue-hover">“I wonder”</span> to
              <br />
              <span className="text-google-blue">“I made this.”</span>
            </h2>
          </div>
          <div className="space-y-3 text-sm leading-relaxed text-google-text-sub sm:text-base md:col-span-7 md:pt-1">
            <p className="text-google-text-main">
              Learning feels different when there’s someone to exchange ideas
              with, a problem you care about, and the space to give it a try.
            </p>
            <p>
              That’s the spirit of Google Developer Groups on Campus at UGM. We
              create room for students to explore technology, develop practical
              skills, and learn from one another.
            </p>
            <p>
              Our campus is the starting point. The questions we ask and the
              things we build can reach beyond it.
            </p>
          </div>
        </div>
      </section>

      <section className="container-custom space-y-6 py-10 sm:space-y-8 sm:py-14">
        <div className="max-w-2xl">
          <p className="section-eyebrow">What guides us</p>
          <h2 className="mt-2 text-2xl font-bold leading-tight text-google-text-main sm:text-3xl">
            Good technology starts with good company.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
          {VALUES.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </div>
      </section>

      <section className="container-custom grid grid-cols-1 gap-6 py-8 sm:gap-10 sm:py-12 md:grid-cols-12">
        <div className="space-y-3 md:col-span-5">
          <p className="section-eyebrow">People, not labels</p>
          <h2 className="text-2xl font-bold leading-tight text-google-text-main sm:text-3xl">
            There’s more than one way to contribute.
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-google-text-sub">
            You can be learning one day and helping someone else the next. A
            community grows through both.
          </p>
        </div>
        <div className="divide-y divide-google-border md:col-span-7">
          {ROLES.map((role) => (
            <article key={role.title} className="py-3 first:pt-0 last:pb-4">
              <h3 className="text-base font-bold text-google-text-main sm:text-lg">
                {role.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-google-text-sub">
                {role.description}
              </p>
            </article>
          ))}
          <a
            href="https://instagram.com/gdgoc.ugm"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-google-blue-hover hover:underline"
          >
            Let’s talk about getting involved
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="bg-[#FFF7E0] py-8 sm:py-10">
        <div className="container-custom flex items-center gap-5 sm:gap-8">
          <img
            src={commitmentSparkIcon}
            alt=""
            aria-hidden="true"
            className="h-10 w-10 shrink-0 sm:h-14 sm:w-14"
          />
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-google-text-main sm:text-xl">
              A space to learn. A responsibility to care.
            </h2>
            <p className="text-sm leading-relaxed text-google-text-sub">
              We want every conversation and learning experience to be
              respectful, inclusive, and constructive. Be kind, give credit, and
              make room for people who are just getting started.
            </p>
          </div>
        </div>
      </section>

      <JoinCta />
    </div>
  );
}
