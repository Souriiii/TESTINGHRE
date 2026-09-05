import { Link } from "@tanstack/react-router";
import { MaskLine, Reveal } from "./Reveal";

export function ComingSoonPage({
  index,
  eyebrow,
  title,
  body,
}: {
  index: string;
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="relative flex min-h-[80svh] items-center">
      <div className="mx-auto w-full max-w-[1600px] px-5 pt-40 pb-24 md:px-10">
        <div className="flex items-start gap-6 md:gap-10">
          <span className="index-numeral mt-2 text-5xl leading-none md:text-7xl">{index}</span>
          <div>
            <Reveal y={12}>
              <span className="eyebrow">{eyebrow}</span>
            </Reveal>
            <h1 className="mt-5 font-display text-4xl leading-[0.92] font-light tracking-tight sm:text-6xl md:text-[4.5rem]">
              <MaskLine>{title}</MaskLine>
            </h1>
            <Reveal delay={0.15}>
              <p className="mt-7 max-w-lg border-l-2 border-brass/50 pl-6 text-[0.98rem] leading-relaxed text-muted-foreground">
                {body}
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <Link
                to="/"
                className="group mt-9 flex w-fit items-center gap-4 font-display text-[0.66rem] font-semibold tracking-[0.28em] text-brass uppercase"
              >
                Back to home
                <span className="h-px w-10 bg-brass transition-all duration-500 group-hover:w-16" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
