import { Link } from "@tanstack/react-router";
import { LATEST_LAUNCH } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";

export function LatestLaunch() {
  return (
    <section className="band-dark grain relative">
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28">
        <Reveal>
          <div className="relative grid overflow-hidden border border-border/70 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative flex flex-col justify-between gap-10 p-8 md:p-12">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-terracotta opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-terracotta" />
                </span>
                <span className="eyebrow">Latest Launch — {LATEST_LAUNCH.status}</span>
              </div>

              <div>
                <p className="font-display text-[0.62rem] tracking-[0.36em] text-muted-foreground uppercase">
                  {LATEST_LAUNCH.location}
                </p>
                <h3 className="mt-4 font-display text-4xl leading-[0.95] font-light tracking-tight sm:text-5xl">
                  {LATEST_LAUNCH.name}
                </h3>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {LATEST_LAUNCH.blurb}
                </p>
              </div>

              <Link
                to="/projects"
                className="group flex w-fit items-center gap-4 font-display text-[0.66rem] font-semibold tracking-[0.28em] text-brass uppercase"
              >
                Register interest
                <span className="h-px w-10 bg-brass transition-all duration-500 group-hover:w-16" />
              </Link>

              <span className="index-numeral pointer-events-none absolute -bottom-6 right-6 text-[7rem] leading-none">
                02
              </span>
            </div>

            <div className="relative min-h-[320px] overflow-hidden lg:min-h-[520px]">
              <img
                src={LATEST_LAUNCH.image}
                alt={`${LATEST_LAUNCH.name} in ${LATEST_LAUNCH.location}`}
                loading="lazy"
                width={1600}
                height={912}
                className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/25 to-transparent lg:from-background/95" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
