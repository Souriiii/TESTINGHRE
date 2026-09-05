import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { NAV, PROJECTS } from "@/data/site";
import { Wordmark } from "./Wordmark";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={
          "fixed top-0 right-0 left-0 z-50 transition-all duration-500 " +
          (scrolled
            ? "border-b border-border/70 bg-background/90 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent")
        }
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-10 md:py-6">
          <Link to="/" aria-label="HRE Development home" className="shrink-0">
            <Wordmark compact={scrolled} />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="group font-display text-[0.7rem] font-semibold tracking-[0.24em] text-foreground/70 uppercase transition-colors hover:text-foreground"
                activeProps={{ className: "text-brass" }}
              >
                {item.label}
                <span className="mt-1.5 block h-px w-0 bg-brass transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="relative hidden group overflow-hidden border border-emerald/60 px-6 py-3 font-display text-[0.65rem] font-semibold tracking-[0.28em] text-emerald uppercase transition-colors duration-500 hover:text-primary-foreground sm:inline-flex"
            >
              <span className="relative z-10">Instant Call</span>
              <span className="absolute inset-0 -translate-y-full bg-emerald transition-transform duration-500 group-hover:translate-y-0" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] border border-border/70 transition-colors hover:border-brass/70"
            >
              <span className="h-px w-5 bg-foreground" />
              <span className="h-px w-3 bg-terracotta" />
              <span className="h-px w-5 bg-foreground" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[60] grain bg-background"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mx-auto flex h-full max-w-[1600px] flex-col px-5 py-4 md:px-10 md:py-6">
              <div className="flex items-center justify-between">
                <Wordmark />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-11 w-11 items-center justify-center border border-border/70 font-display text-lg text-brass transition-colors hover:border-brass/70"
                >
                  ✕
                </button>
              </div>

              <div className="grid flex-1 grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <ul className="mt-10 lg:mt-0">
                  {NAV.map((item, i) => (
                    <motion.li
                      key={item.to}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="border-b border-border/40"
                      onMouseEnter={() => setHovered(i % PROJECTS.length)}
                    >
                      <Link
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className="group flex items-baseline gap-5 py-4"
                      >
                        <span className="font-display text-[0.6rem] tracking-[0.3em] text-brass/70">
                          0{i + 1}
                        </span>
                        <span className="font-display text-4xl leading-none font-light tracking-tight text-foreground/80 uppercase transition-all duration-500 group-hover:translate-x-3 group-hover:text-brass sm:text-5xl md:text-6xl">
                          {item.label}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="hidden h-[62vh] items-end lg:flex">
                  <div className="relative h-full w-full overflow-hidden">
                    {PROJECTS.map((p, i) => (
                      <img
                        key={p.id}
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        width={1200}
                        height={1504}
                        className={
                          "absolute inset-0 h-full w-full object-cover transition-all duration-700 " +
                          (hovered === i ? "scale-100 opacity-100" : "scale-105 opacity-0")
                        }
                      />
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <p className="eyebrow">{PROJECTS[hovered]?.status}</p>
                      <p className="mt-2 font-display text-2xl font-light">
                        {PROJECTS[hovered]?.name}
                      </p>
                      <p className="text-sm text-muted-foreground">{PROJECTS[hovered]?.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/40 pt-5">
                <p className="font-display text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">
                  Building with Purpose — Since 1993
                </p>
                <a
                  href="https://www.instagram.com/hredevelopment/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-display text-[0.6rem] tracking-[0.3em] text-brass uppercase"
                >
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
