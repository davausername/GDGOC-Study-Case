const STEPS = [
  {
    number: "01",
    title: "Follow your curiosity",
    description: "Explore the tracks and find a topic you want to understand better.",
  },
  {
    number: "02",
    title: "Learn alongside others",
    description: "Join a learning opportunity, ask a question, and share your perspective.",
  },
  {
    number: "03",
    title: "Turn learning into action",
    description: "Practice through a project, exchange feedback, and pass something on.",
  },
];

const FAQS = [
  {
    question: "Do I need to know how to code?",
    answer: "No. Start with an interest in technology and a willingness to learn. Research and design are part of the journey, too.",
  },
  {
    question: "Is this only for computer science students?",
    answer: "Different disciplines bring different perspectives. Explore the overview to find a starting point that fits your interests.",
  },
  {
    question: "How can I find learning opportunities?",
    answer: "Keep an eye on @gdgoc.ugm for community updates. You can also use the contact page to ask about getting involved.",
  },
];

export default function BuildAndBelong() {
  return (
    <div className="w-full space-y-16 py-12 sm:space-y-20 sm:py-16">
      
      {/* ---------------- SECTION 1: Feature Showcase ---------------- */}
      <section className="container-custom grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left: Mock App Interface Graphic */}
        <div className="md:col-span-6 bg-[#FEF9E7] p-6 sm:p-8 rounded-3xl border border-amber-100 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-center text-[10px] font-mono text-google-text-sub uppercase mb-4">
            <span>IDEA → PROTOTYPE</span>
            <span className="text-google-blue font-bold">&lt;/&gt;</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            {/* Window control dots */}
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block" />
            </div>

            <h4 className="text-xl sm:text-2xl font-bold text-google-text-main leading-snug">
              A little less friction.<br />A better campus day.
            </h4>

            {/* Pill Tags */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className="bg-google-blue-light text-google-blue text-xs font-semibold py-2 px-3 rounded-lg text-center">
                Discover
              </div>
              <div className="bg-[#E6F4EA] text-google-green text-xs font-semibold py-2 px-3 rounded-lg text-center">
                Connect
              </div>
              <div className="bg-[#FCE8E6] text-google-red text-xs font-semibold py-2 px-3 rounded-lg text-center">
                Share
              </div>
            </div>

            <p className="text-xs text-google-text-sub pt-2 border-t border-gray-100">
              Start with a student need. Build a small, useful solution.
            </p>
          </div>

          <p className="text-[10px] font-mono text-google-text-sub uppercase mt-4">
            EXAMPLE PROJECT BRIEF • NOT A LAUNCHED PRODUCT
          </p>
        </div>

        {/* Right: Text Copy */}
        <div className="md:col-span-6 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-google-blue inline-block" />
            <p className="text-xs font-semibold uppercase tracking-wider text-google-text-sub">
              BUILD SOMETHING THAT MATTERS
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-google-text-main leading-tight">
            Your next project could start on campus.
          </h2>
          <p className="text-sm sm:text-base text-google-text-sub leading-relaxed">
            What if finding a study partner, sharing resources, or navigating campus felt easier? Small, familiar problems can be the beginning of meaningful work.
          </p>
          <p className="text-sm sm:text-base text-google-text-sub leading-relaxed">
            Bring research, design, and development together. Try an idea, get feedback, and make the next version better.
          </p>
          <div className="pt-2">
            <a href="#tracks" className="inline-flex items-center gap-2 text-sm font-semibold text-google-blue hover:underline">
              Explore project-based learning →
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 2: 3-Step Process ---------------- */}
      <section className="container-custom space-y-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-google-blue inline-block" />
            <p className="text-xs font-semibold uppercase tracking-wider text-google-text-sub">
              MAKE YOUR FIRST MOVE
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-google-text-main max-w-xl leading-tight">
            You don’t need to have it all figured out.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step) => (
            <div key={step.number} className="space-y-3">
              <span className="text-3xl font-bold text-google-blue block border-b border-google-border pb-3">
                {step.number}
              </span>
              <h3 className="text-lg font-bold text-google-text-main">{step.title}</h3>
              <p className="text-sm text-google-text-sub leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- SECTION 3: Inclusivity Banner ---------------- */}
      <section className="w-full bg-[#E6F4EA]/60 py-12">
        <div className="container-custom flex flex-col md:flex-row items-center gap-6 sm:gap-10">
          {/* Green Star Icon */}
          <div className="w-16 h-16 shrink-0 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-14 h-14 text-google-green fill-current">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>

          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-google-text-main leading-snug">
              Different majors. Different starting points.<br />A place for all of them.
            </h3>
            <p className="text-sm sm:text-base text-google-text-sub max-w-3xl">
              You don’t have to be the most experienced person in the room. Curiosity, kindness, and a willingness to learn are a good place to start.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 4: FAQ Accordion ---------------- */}
      <section className="container-custom grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-5 space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-google-blue inline-block" />
            <p className="text-xs font-semibold uppercase tracking-wider text-google-text-sub">
              A FEW GOOD QUESTIONS
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-google-text-main leading-tight">
            Wondering<br />where to<br />begin?
          </h2>
          <a href="#contact" className="inline-flex items-center gap-1 text-sm font-semibold text-google-blue hover:underline pt-2">
            Ask us a question →
          </a>
        </div>

        <div className="md:col-span-7 divide-y divide-google-border">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group py-4" open>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-bold text-google-text-main marker:hidden sm:text-lg">
                <span>{faq.question}</span>
                <span
                  className="text-google-blue transition-transform group-open:rotate-180"
                  aria-hidden="true"
                >
                  ↓
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-google-text-sub">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}