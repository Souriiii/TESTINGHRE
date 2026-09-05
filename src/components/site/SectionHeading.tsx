import type { ReactNode } from "react";
import { MaskLine, Reveal } from "./Reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
  aside,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-8 border-t border-border/60 pt-8 md:flex-row md:items-end md:justify-between">
      <div className="flex items-start gap-6 md:gap-10">
        <span className="index-numeral mt-1 text-4xl leading-none md:text-6xl">{index}</span>
        <div>
          <Reveal y={12}>
            <span className="eyebrow">{eyebrow}</span>
          </Reveal>
          <h2 className="mt-4 font-display text-4xl leading-[0.95] font-light tracking-tight text-balance sm:text-5xl md:text-6xl">
            <MaskLine>{title}</MaskLine>
          </h2>
        </div>
      </div>
      {aside ? (
        <Reveal y={12} className="max-w-sm md:text-right">
          {aside}
        </Reveal>
      ) : null}
    </div>
  );
}
