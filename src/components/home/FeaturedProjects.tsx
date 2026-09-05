import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { PROJECTS } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export function FeaturedProjects() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-surface">
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28">
        <SectionHeading
          index="03"
          eyebrow="Featured projects"
          title={
            <>
              Signature <span className="text-brass-gradient italic">Developments</span>
            </>
          }
          aside={
            <Link
              to="/projects"
              className="group flex w-fit items-center gap-4 font-display text-[0.66rem] font-semibold tracking-[0.28em] text-brass uppercase md:ml-auto"
            >
              View all projects
              <span className="h-px w-10 bg-brass transition-all duration-500 group-hover:w-16" />
            </Link>
          }
        />

        {/* Desktop: hover-driven showcase */}
        <div className="mt-14 hidden gap-12 lg:grid lg:grid-cols-[1fr_0.92fr]">
          <ul>
            {PROJECTS.map((p, i) => (
              <li
                key={p.id}
                onMouseEnter={() => setActive(i)}
                className={
                  "group border-t border-border/60 py-7 transition-colors last:border-b " +
                  (active === i ? "border-brass/50" : "")
                }
              >
                <Link to="/projects" className="flex items-start justify-between gap-6">
                  <div>
                    <p
                      className={
                        "font-display text-4xl leading-none font-light tracking-tight transition-all duration-500 xl:text-5xl " +
                        (active === i
                          ? "translate-x-3 text-brass"
                          : "translate-x-0 text-foreground/55")
                      }
                    >
                      {p.name}
                    </p>
                    <p className="mt-3 pl-0 font-display text-[0.62rem] tracking-[0.3em] text-muted-foreground uppercase transition-all duration-500 group-hover:pl-3">
                      {p.location}
                    </p>
                  </div>
                  <span className="mt-2 font-display text-[0.58rem] tracking-[0.26em] whitespace-nowrap text-muted-foreground uppercase">
                    {p.status}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="relative h-[620px] overflow-hidden">
            {PROJECTS.map((p, i) => (
              <img
                key={p.id}
                src={p.image}
                alt={`${p.name} — ${p.location}`}
                loading="lazy"
                width={1200}
                height={1504}
                className={
                  "absolute inset-0 h-full w-full object-cover transition-all duration-[1100ms] " +
                  (active === i
                    ? "scale-100 opacity-100 blur-0"
                    : "scale-[1.06] opacity-0 blur-[2px]")
                }
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="max-w-md text-sm leading-relaxed text-foreground/85">
                {PROJECTS[active]?.blurb}
              </p>
              <Link
                to="/projects"
                className="group mt-5 flex w-fit items-center gap-4 font-display text-[0.64rem] font-semibold tracking-[0.28em] text-brass uppercase"
              >
                View project
                <span className="h-px w-10 bg-brass transition-all duration-500 group-hover:w-16" />
              </Link>
            </div>
            <span className="index-numeral absolute top-4 right-5 text-5xl">
              0{active + 1}
            </span>
          </div>
        </div>

        {/* Mobile / tablet: stacked editorial cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:hidden">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06}>
              <Link to="/projects" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.name} — ${p.location}`}
                    loading="lazy"
                    width={1200}
                    height={1504}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 border border-brass/60 bg-background/85 px-3 py-1.5 font-display text-[0.55rem] tracking-[0.24em] text-brass uppercase backdrop-blur">
                    {p.status}
                  </span>
                </div>
                <p className="mt-4 font-display text-2xl font-light">{p.name}</p>
                <p className="mt-1 font-display text-[0.6rem] tracking-[0.28em] text-muted-foreground uppercase">
                  {p.location}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
