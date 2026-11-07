import { Button } from "../ui/Button";

export default function BuildAndBelong() {
  return (
    <section className="w-full my-16">
      {/* 1. Aligned within your 1200px custom container grid */}
      <div className="container-custom">
        <div className="bg-[#EAF2FF] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left Column: Heading & Content */}
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#1967D2]">
              Your next chapter
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-gray-900 leading-tight">
              Bring your curiosity.
              <br className="hidden sm:inline" /> We’ll build from there.
            </h2>
            <p className="text-base sm:text-lg text-[#5F6368]">
              Find a learning track, meet a collaborator, or start a conversation.
            </p>
          </div>

          {/* Right Column: CTA Actions */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 w-full md:w-auto shrink-0 justify-center">
            <Button href="#tracks" variant="primary">
              Explore the overview
            </Button>
            <Button href="#community" variant="outline">
              Talk to the community
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}