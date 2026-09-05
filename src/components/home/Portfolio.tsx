import { Link } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { PORTFOLIO } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

const FILTERS = ["All", "Ready", "Under Construction", "Coming Soon"] as const;

const dotFor = (status: string) =>
  status === "Ready" ? "bg-emerald" : status === "Under Construction" ? "bg-brass" : "bg-terracotta";

export function Portfolio() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [hovered, setHovered] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 220, damping: 26, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 220, damping: 26, mass: 0.5 });

  const rows = useMemo(
    () => (filter === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.status === filter)),
    [filter],
  );

  const active = rows.find((p) => p.name === hovered) ?? null;

  const onMove = (e: React.MouseEvent) => {
    const rect = listRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set(e.clientX - rect.left);
    rawY.set(e.clientY - rect.top);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28">
        <SectionHeading
          index="04"
          eyebrow="Our properties"
          title={
            <>
              The <span className="text-brass-gradient italic">Portfolio</span>
            </>
          }
          aside={
            <p className="text-sm leading-relaxed text-muted-foreground">
              Every address we develop, from delivered residences to launches still on the drawing
              board.
            </p>
          }
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className="relative overflow-hidden border border-border/70 px-5 py-2.5 font-display text-[0.6rem] font-semibold tracking-[0.24em] uppercase transition-colors duration-300 hover:border-brass/70"
            >
              {filter === f && (
                <motion.span
                  layoutId="portfolio-filter-pill"
                  className="absolute inset-0 bg-emerald"
                  transition={{ type: "spring", stiffness: 320, damping: 32 }}
                />
              )}
              <span
                className={
                  "relative z-10 transition-colors duration-300 " +
                  (filter === f ? "text-primary-foreground" : "text-muted-foreground")
                }
              >
                {f}
              </span>
            </button>
          ))}
        </div>

        {/* Desktop: cursor-tracked cinematic rows */}
        <div
          ref={listRef}
          onMouseMove={onMove}
          onMouseLeave={() => setHovered(null)}
          className="relative mt-12 hidden lg:block"
        >
          <AnimatePresence>
            {active && (
              <motion.div
                key={active.name}
                initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
                animate={{ opacity: 1, scale: 1, rotate: -2 }}
                exit={{ opacity: 0, scale: 0.94, rotate: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ x, y, translateX: "-50%", translateY: "-50%" }}
                className="pointer-events-none absolute top-0 left-0 z-20 h-[24rem] w-[18rem] overflow-hidden shadow-[0_40px_80px_-40px_rgba(0,0,0,0.45)]"
              >
                <img
                  src={active.image}
                  alt={`${active.name} — ${active.location}`}
                  loading="lazy"
                  width={1200}
                  height={1504}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 border border-brass/40" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-4">
                  <p className="font-display text-[0.58rem] tracking-[0.28em] text-brass uppercase">
                    {active.typology} · {active.year}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <ul>
            <AnimatePresence initial={false} mode="popLayout">
              {rows.map((p, i) => (
                <motion.li
                  key={p.name}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.6, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setHovered(p.name)}
                  className="group relative border-t border-border/70 last:border-b"
                >
                  <span
                    className={
                      "absolute inset-y-0 left-0 w-full origin-left scale-x-0 bg-gradient-to-r from-brass/12 via-brass/4 to-transparent transition-transform duration-700 ease-out " +
                      (hovered === p.name ? "scale-x-100" : "")
                    }
                  />
                  <Link
                    to="/projects"
                    className="relative grid grid-cols-[auto_1.3fr_1fr_auto] items-center gap-8 py-8"
                  >
                    <span className="font-display text-[0.6rem] tracking-[0.3em] text-brass/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={
                        "font-display text-3xl font-light transition-all duration-500 xl:text-4xl " +
                        (hovered === p.name
                          ? "translate-x-4 text-brass"
                          : "translate-x-0 text-foreground/70")
                      }
                    >
                      {p.name}
                    </span>
                    <span className="font-display text-[0.6rem] tracking-[0.28em] text-muted-foreground uppercase transition-all duration-500 group-hover:translate-x-2">
                      {p.location}
                    </span>
                    <span className="flex items-center justify-end gap-3">
                      <motion.span
                        animate={hovered === p.name ? { scale: 1.6, rotate: 135 } : { scale: 1, rotate: 45 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className={"h-1.5 w-1.5 " + dotFor(p.status)}
                      />
                      <span className="font-display text-[0.58rem] tracking-[0.24em] text-muted-foreground uppercase">
                        {p.status}
                      </span>
                    </span>
                  </Link>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>

        {/* Mobile / tablet: image cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:hidden">
          <AnimatePresence initial={false} mode="popLayout">
            {rows.map((p, i) => (
              <motion.div
                key={p.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <Reveal>
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
                      <span className="absolute top-3 left-3 flex items-center gap-2 border border-brass/50 bg-background/85 px-3 py-1.5 font-display text-[0.55rem] tracking-[0.22em] text-foreground uppercase backdrop-blur">
                        <span className={"h-1.5 w-1.5 rotate-45 " + dotFor(p.status)} />
                        {p.status}
                      </span>
                    </div>
                    <p className="mt-3 font-display text-xl font-light">{p.name}</p>
                    <p className="mt-1 font-display text-[0.58rem] tracking-[0.26em] text-muted-foreground uppercase">
                      {p.location} · {p.year}
                    </p>
                  </Link>
                </Reveal>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
