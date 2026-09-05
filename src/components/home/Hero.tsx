import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroTowers from "@/assets/hero-towers.jpg";

const MARQUEE = [
  "Building with Purpose",
  "Since 1993",
  "340+ Projects Constructed",
  "12,000 Families Housed",
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-28%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden">
      <motion.div style={{ y: imageY }} className="absolute inset-0 -top-[8%] h-[116%]">
        <img
          src={heroTowers}
          alt="HRE Development residential towers in warm limestone catching the Dubai morning light"
          width={1920}
          height={1200}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/25 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/35 to-background/25" />
      </motion.div>

      <div className="grain pointer-events-none absolute inset-0" />

      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-end px-5 pt-32 pb-28 md:px-10"
      >
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8 flex items-center gap-4"
            >
              <span className="h-px w-16 rule-brass" />
              <span className="eyebrow">HRE Development — Dubai</span>
            </motion.div>

            <h1 className="font-display text-[3.1rem] leading-[0.88] font-extralight tracking-[-0.02em] sm:text-7xl lg:text-[6.4rem]">
              {["Building", "with Purpose"].map((line, i) => (
                <span key={line} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1.2, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
              <span className="block overflow-hidden">
                <motion.span
                  className="text-brass-gradient block italic"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.2, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
                >
                  Since 1993
                </motion.span>
              </span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.6 }}
            className="border-l-2 border-brass/50 pl-6"
          >
            <p className="max-w-md text-[0.98rem] leading-relaxed text-foreground/75">
              More than 30 years ago, HRE set the foundation for what it means to build with
              integrity in the UAE. Today, with over 340 completed construction projects and 12,000
              families housed across the Emirates, we are delivering our most ambitious chapter yet
              — real estate development built on the strength of our own hands.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="group relative overflow-hidden border border-emerald bg-emerald px-8 py-4 font-display text-[0.66rem] font-semibold tracking-[0.28em] text-primary-foreground uppercase"
              >
                <span className="relative z-10">Our Projects</span>
                <span className="absolute inset-0 translate-y-full bg-background transition-transform duration-500 group-hover:translate-y-0" />
                <span className="absolute inset-0 z-10 flex items-center justify-center text-emerald opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Our Projects
                </span>
              </Link>
              <Link
                to="/contact"
                className="group relative overflow-hidden border border-border px-8 py-4 font-display text-[0.66rem] font-semibold tracking-[0.28em] text-foreground uppercase"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-primary-foreground">
                  Get in Touch
                </span>
                <span className="absolute inset-0 -translate-x-full bg-emerald transition-transform duration-500 group-hover:translate-x-0" />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-y border-border/60 bg-sand/70 py-3 backdrop-blur-sm">
        <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="font-display text-[0.62rem] tracking-[0.4em] text-foreground/60 uppercase">
                {item}
              </span>
              <span className="h-1 w-1 rotate-45 bg-brass" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
