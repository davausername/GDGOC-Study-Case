import { Button } from "../components/ui/Button";
import { ValueCard } from "../components/ui/ValueCard";
import BuildAndBelong from "../components/section/BuildAndBelong";

import CommunityMarkIMG from '../assets/img/Community_mark_artwork.svg';
import bookIcon from '../assets/img/bookIcon.svg';
import peopleIcon from '../assets/img/peopleIcon.svg';
import codeIcon from '../assets/img/codeIcon.svg';
import heartIcon from '../assets/img/heartIcon.svg';
import commitmentSparkIcon from '../assets/img/Commitment_spark.svg';


// What Guides Us Card Values
const VALUES = [
  {
    imageSrc: bookIcon,
    title: "Stay curious",
    description: "Ask the extra question. Be willing to learn something outside your comfort zone.",
    colorClass: "border-t-google-blue",
  },
  {
    imageSrc: peopleIcon,
    title: "Make room",
    description: "Welcome different perspectives, respect each other, and help people find their voice.",
    colorClass: "border-t-google-red",
  },
  {
    imageSrc: codeIcon,
    title: "Learn by building",
    description: "Try a small experiment. Share the rough version. Let feedback guide what comes next.",
    colorClass: "border-t-google-yellow",
  },
  {
    imageSrc: heartIcon,
    title: "Give something back",
    description: "Share a resource, explain what clicked, or help someone take their next step.",
    colorClass: "border-t-google-green",
  },
];


export default function About() {
  return (
    <div className="w-full space-y-20 py-12">
      
      {/* 1. Page Header / Hero */}
      <section className="container-custom grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 space-y-4">
          <p className="text-xs font-semibold tracking-wider text-google-text-sub uppercase">
            About GDGoC UGM
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-google-text-main leading-tight">
            Built by students.<br />
            <span className="text-google-blue">For what’s next.</span>
          </h1>
          <p className="text-base sm:text-lg text-google-text-sub max-w-xl">
            We’re a community of learners and makers at Universitas Gadjah Mada, connected by curiosity and the belief that technology can do good.
          </p>
          <p className="text-xs text-google-text-sub font-mono">
            UNIVERSITAS GADJAH MADA • 2026/2027
          </p>
        </div>


        {/* Hero Graphic Image */}
        <div className="md:col-span-5 flex justify-center">
          <div>
            <img src={CommunityMarkIMG} className="w-full h-full object-contain" />
          </div>
        </div>
      </section>


      {/* 2. Mission Statement Section */}
      <section className="container-custom grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-5">
          <p className="text-xs font-semibold tracking-wider text-google-text-sub uppercase">
            Why we come together
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-google-text-main mt-2">
            A bridge from “I wonder” to “I made this.”
          </h2>
        </div>
        <div className="md:col-span-7 space-y-4 text-google-text-sub text-base">
          <p>
            Learning feels different when there’s someone to exchange ideas with, a problem you care about, and the space to give it a try.
          </p>
          <p>
            That’s the spirit of Google Developer Groups on Campus at UGM. We create room for students to explore technology, develop practical skills, and learn from one another.
          </p>
        </div>
      </section>


      {/* 3. Core Values Grid */}
      <section className="container-custom space-y-8">
        <div>
          <p className="text-xs font-semibold tracking-wider text-google-text-sub uppercase">
            What guides us
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-google-text-main mt-2">
            Good technology starts with good company.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((val) => (
            <ValueCard key={val.title} {...val} />
          ))}
        </div>
      </section>


      {/* 4. Contribution Roles */}
      <section className="container-custom grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-5 space-y-3">
          <p className="text-xs font-semibold tracking-wider text-google-text-sub uppercase">
            People, not labels
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-google-text-main">
            There’s more than one way to contribute.
          </h2>
          <p className="text-sm text-google-text-sub">
            You can be learning one day and helping someone else the next. A community grows through both.
          </p>
        </div>
        <div className="md:col-span-7 space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-google-text-main">Come as a learner</h3>
            <p className="text-sm text-google-text-sub">Explore a topic, join a discussion, and ask the question that’s been on your mind.</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-google-text-main">Grow as a collaborator</h3>
            <p className="text-sm text-google-text-sub">Work with people whose skills complement yours. Discover what you can build together.</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-google-text-main">Give back as a contributor</h3>
            <p className="text-sm text-google-text-sub">Share knowledge, support a learning session, or bring an idea for the community.</p>
          </div>
          <Button href="#involved" variant="outline">
            Let’s talk about getting involved →
          </Button>
        </div>
      </section>


      {/* 5. Code of Conduct Callout Banner */}
      <section className="container-custom">
        <div className="bg-[#FEF7E0] border border-yellow-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-8 h-8 shrink-0 flex items-center justify-center">
            <img 
              src={commitmentSparkIcon}
              alt="Sparkle Icon" 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="font-bold text-google-text-main">A space to learn. A responsibility to care.</h3>
            <p className="text-sm text-google-text-sub">
              We want every conversation and learning experience to be respectful, inclusive, and constructive. Be kind, give credit, and make room for people who are just getting started.
            </p>
          </div>
        </div>
      </section>


      {/* 6. Reused CTA Banner */}
      <section className="container-custom">
        <BuildAndBelong />
      </section>

    </div>
  );
}