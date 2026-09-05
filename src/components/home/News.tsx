import { Link } from "@tanstack/react-router";
import { NEWS } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export function News() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28">
        <SectionHeading
          index="06"
          eyebrow="Events, PR and news"
          title={
            <>
              From the <span className="text-brass-gradient italic">Newsroom</span>
            </>
          }
          aside={
            <Link
              to="/news"
              className="group flex w-fit items-center gap-4 font-display text-[0.66rem] font-semibold tracking-[0.28em] text-brass uppercase md:ml-auto"
            >
              All news
              <span className="h-px w-10 bg-brass transition-all duration-500 group-hover:w-16" />
            </Link>
          }
        />

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {NEWS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <Link to="/news" className="group block">
                <div
                  className={
                    "relative overflow-hidden " +
                    (i === 1 ? "aspect-[4/5] md:mt-12" : "aspect-[4/3]")
                  }
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    width={900}
                    height={700}
                    className="h-full w-full object-cover grayscale-[35%] transition-all duration-[1200ms] group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <span className="absolute top-4 left-4 border border-brass/60 bg-background/85 px-3 py-1.5 font-display text-[0.55rem] tracking-[0.24em] text-brass uppercase backdrop-blur">
                    {item.kicker}
                  </span>
                </div>
                <p className="mt-5 font-display text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">
                  {item.date}
                </p>
                <h3 className="mt-3 font-display text-xl leading-snug font-light text-balance transition-colors duration-500 group-hover:text-brass">
                  {item.title}
                </h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
