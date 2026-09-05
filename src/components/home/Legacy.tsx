import { Link } from "@tanstack/react-router";
import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import legacyCraft from "@/assets/legacy-craft.jpg";
import { STATS } from "@/data/site";
import { MaskLine, Reveal } from "@/components/site/Reveal";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className="block font-display text-4xl font-extralight tabular-nums whitespace-nowrap sm:text-5xl md:text-[3.1rem]">
      {value.toLocaleString("en-US")}
      <span className="text-brass">{suffix}</span>
    </span>
  );
}

export function Legacy() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="relative">
            <Reveal>
              <div className="relative overflow-hidden">
                <img
                  src={legacyCraft}
                  alt="A worker finishing freshly poured concrete on an HRE construction site"
                  loading="lazy"
                  width={1008}
                  height={1312}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/55 to-transparent" />
              </div>
            </Reveal>
            <div className="absolute -right-4 -bottom-6 hidden border border-brass/50 bg-card px-6 py-5 shadow-[var(--shadow-monument)] md:block">
              <p className="font-display text-[0.6rem] tracking-[0.3em] text-brass uppercase">
                Own hands
              </p>
              <p className="mt-1 font-display text-lg font-light">Contractor turned developer</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-start gap-6">
              <span className="index-numeral mt-1 text-4xl leading-none md:text-6xl">01</span>
              <div>
                <Reveal y={12}>
                  <span className="eyebrow">Our legacy</span>
                </Reveal>
                <h2 className="mt-4 font-display text-4xl leading-[0.95] font-light tracking-tight sm:text-5xl md:text-[3.6rem]">
                  <MaskLine>A Legacy Built on</MaskLine>
                  <MaskLine delay={0.1} className="text-brass-gradient italic">
                    Every Floor,
                  </MaskLine>
                  <MaskLine delay={0.2}>in every house.</MaskLine>
                </h2>
              </div>
            </div>

            <Reveal delay={0.15}>
              <p className="mt-8 max-w-xl border-l-2 border-brass/50 pl-6 text-[0.98rem] leading-relaxed text-muted-foreground">
                For over three decades, HRE has been constructing the UAE's skyline. That foundation
                of precision and accountability is what now drives every real estate project we
                bring to market.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <Link
                to="/about"
                className="group mt-8 flex w-fit items-center gap-4 font-display text-[0.66rem] font-semibold tracking-[0.28em] text-brass uppercase"
              >
                Read our story
                <span className="h-px w-10 bg-brass transition-all duration-500 group-hover:w-16" />
              </Link>
            </Reveal>

            <div className="mt-14 grid grid-cols-2 gap-y-10 border-t border-border/60 pt-10 md:grid-cols-4">
              {STATS.map((stat, i) => (
                <Reveal
                  key={stat.label}
                  delay={i * 0.08}
                  className="min-w-0 border-l border-border/50 pl-4 first:border-l-0 first:pl-0 md:pl-5"
                >
                  <Counter to={stat.value} suffix={stat.suffix} />
                  <p className="mt-3 font-display text-[0.6rem] tracking-[0.26em] text-muted-foreground uppercase">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
