export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-baseline gap-2 leading-none">
      <span
        className="font-display font-light tracking-[0.28em] text-foreground"
        style={{ fontSize: compact ? "1.05rem" : "1.35rem" }}
      >
        HRE
      </span>
      <span className="h-4 w-px bg-brass/60" aria-hidden="true" />
      <span className="font-display text-[0.5rem] font-semibold tracking-[0.4em] text-brass uppercase">
        Development
      </span>
    </span>
  );
}
