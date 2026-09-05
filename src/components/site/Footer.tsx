import { Link } from "@tanstack/react-router";
import { NAV } from "@/data/site";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="band-dark grain border-t border-border/60">
      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Wordmark />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Real estate development built on the strength of our own hands. Over three decades of
              construction across the Emirates, now shaping homes in Dubai.
            </p>
            <p className="mt-8 font-display text-[0.6rem] tracking-[0.32em] text-brass uppercase">
              Building with Purpose
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <p className="eyebrow mb-2">Navigate</p>
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="w-fit font-display text-sm tracking-wide text-foreground/75 transition-colors hover:text-brass"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="eyebrow mb-2">Connect</p>
            <a
              href="https://www.instagram.com/hredevelopment/"
              target="_blank"
              rel="noreferrer"
              className="w-fit font-display text-sm text-foreground/75 transition-colors hover:text-brass"
            >
              Instagram
            </a>
            <Link
              to="/contact"
              className="w-fit font-display text-sm text-foreground/75 transition-colors hover:text-brass"
            >
              Enquire about a residence
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">Dubai, United Arab Emirates</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border/50 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} HRE Development. All rights reserved.
          </p>
          <p className="font-display text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">
            Established 1993 — United Arab Emirates
          </p>
        </div>
      </div>
    </footer>
  );
}
