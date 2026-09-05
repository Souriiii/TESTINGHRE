import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import skyline from "@/assets/dubai-skyline.jpg";
import { DUBAI_PILLARS, type DubaiReason } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

function Figure({ reason }: { reason: DubaiReason }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(reduced ? reason.value : 0);

  useEffect(() => {
    if (!inView || reduced) {
      setValue(reason.value);
      return;
    }
    const controls = animate(0, reason.value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduced, reason.value]);

  return (
    <span
      ref={ref}
      className="block font-display text-[2.6rem] leading-none font-extralight tabular-nums text-brass md:text-[3.4rem]"
    >
      {reason.prefix ? <span className="text-[0.55em]">{reason.prefix}</span> : null}
      {value.toLocaleString("en-US")}
      {reason.suffix ? <span className="text-[0.55em]">{reason.suffix}</span> : null}
    </span>
  );
}

function ReasonCard({ reason }: { reason: DubaiReason }) {
  return (
    <article className="group relative flex flex-col gap-5 border-t border-border/70 pt-7">
      <span className="absolute top-0 left-0 h-px w-0 bg-brass transition-all duration-700 group-hover:w-full" />
      <div>
        <Figure reason={reason} />
        <p className="mt-2 font-display text-[0.6rem] tracking-[0.26em] text-brass/80 uppercase">
          {reason.unit}
        </p>
      </div>
      <div>
        <h3 className="font-display text-2xl leading-tight font-light md:text-[1.7rem]">
          {reason.title}
        </h3>
        <p className="mt-3 max-w-[34ch] text-[0.98rem] leading-relaxed text-muted-foreground">
          {reason.body}
        </p>
      </div>
    </article>
  );
}

export function WhyDubai() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const pillar = DUBAI_PILLARS[active]!;

  return (
    <section ref={sectionRef} className="band-dark relative overflow-hidden">
      <motion.img
        src={skyline}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1920}
        height={1088}
        style={reduced ? {} : { y: imageY }}
        className="pointer-events-none absolute inset-0 h-[112%] w-full object-cover opacity-[0.14] mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />

      <div className="relative mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28">
        <SectionHeading
          index="05"
          eyebrow="The case for the city"
          title={
            <>
              Why Invest in <span className="text-brass-gradient italic">Dubai?</span>
            </>
          }
          aside={
            <p className="text-sm leading-relaxed text-muted-foreground">
              Three reasons capital arrives — returns, access, momentum. Nine reasons it stays.
            </p>
          }
        />

        {/* Desktop: pillar rail + expanded cards */}
        <div className="mt-16 hidden gap-16 md:grid md:grid-cols-[minmax(230px,0.9fr)_2.4fr]">
          <div className="flex flex-col">
            {DUBAI_PILLARS.map((p, i) => {
              const isActive = i === active;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className="group relative border-t border-border/70 py-7 text-left last:border-b"
                >
                  {isActive ? (
                    <motion.span
                      layoutId="pillar-indicator"
                      className="absolute top-0 left-0 h-full w-px bg-brass"
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    />
                  ) : null}
                  <span className="flex items-baseline gap-4 pl-5">
                    <span className="font-display text-[0.6rem] tracking-[0.3em] text-brass/70 tabular-nums">
                      0{i + 1}
                    </span>
                    <span
                      className={
                        "font-display text-3xl font-light transition-opacity duration-500 " +
                        (isActive ? "opacity-100" : "opacity-45 group-hover:opacity-75")
                      }
                    >
                      {p.label}
                    </span>
                  </span>
                  <span
                    className={
                      "mt-2 block max-w-[24ch] pl-5 text-sm leading-relaxed text-muted-foreground transition-opacity duration-500 " +
                      (isActive ? "opacity-100" : "opacity-0")
                    }
                  >
                    {p.tagline}
                  </span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-x-10 gap-y-12 lg:grid-cols-3"
            >
              {pillar.reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ReasonCard reason={r} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile: accordion */}
        <div className="mt-12 md:hidden">
          {DUBAI_PILLARS.map((p, i) => {
            const isOpen = open === i;
            return (
              <div key={p.id} className="border-t border-border/70 last:border-b">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span>
                    <span className="font-display text-[0.6rem] tracking-[0.3em] text-brass/70">
                      0{i + 1}
                    </span>
                    <span className="mt-1 block font-display text-2xl font-light">{p.label}</span>
                  </span>
                  <span className="relative h-3 w-3 shrink-0">
                    <span className="absolute top-1/2 left-0 h-px w-full bg-brass" />
                    <span
                      className={
                        "absolute top-0 left-1/2 h-full w-px bg-brass transition-transform duration-500 " +
                        (isOpen ? "scale-y-0" : "scale-y-100")
                      }
                    />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm leading-relaxed text-muted-foreground">
                        {p.tagline}
                      </p>
                      <div className="grid gap-10 pb-10">
                        {p.reasons.map((r) => (
                          <ReasonCard key={r.title} reason={r} />
                        ))}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-16 max-w-2xl border-l-2 border-brass/50 pl-6 font-display text-xl leading-snug font-light md:text-2xl">
            The Emirate rewards patience with structure — and HRE builds to that same horizon.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
