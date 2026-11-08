import { Button } from "../ui/Button";

export default function JoinCta() {
  return (
    <section
      id="contact"
      className="container-custom py-8 sm:py-12"
      aria-labelledby="join-heading"
    >
      <div className="flex flex-col gap-6 rounded-3xl bg-google-blue-light p-6 sm:p-10 md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="max-w-2xl space-y-3">
          <p className="section-eyebrow">Your next chapter</p>
          <h2
            id="join-heading"
            className="text-2xl font-bold leading-tight text-google-text-main sm:text-3xl"
          >
            Bring your curiosity.
            <br /> We’ll build from there.
          </h2>
          <p className="text-sm leading-relaxed text-google-text-sub sm:text-base">
            Find a learning track, meet a collaborator, or start a conversation.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 md:shrink-0">
          <Button href="/#tracks" variant="primary">
            Explore the overview
          </Button>
          <a
            href="https://instagram.com/gdgoc.ugm"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center text-sm font-semibold text-google-blue-hover hover:underline"
          >
            Talk to the community
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
