import { useState } from "react";
import { toast } from "sonner";
import { MaskLine, Reveal } from "@/components/site/Reveal";
import { PROJECTS } from "@/data/site";

export function ContactCta() {
  const [sent, setSent] = useState(false);

  return (
    <section className="grain relative overflow-hidden border-t border-border/60 bg-surface">
      <div className="relative mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <Reveal y={12}>
              <span className="eyebrow">Enquire</span>
            </Reveal>
            <h2 className="mt-5 font-display text-4xl leading-[0.92] font-light tracking-tight sm:text-5xl md:text-[4rem]">
              <MaskLine>Looking for your</MaskLine>
              <MaskLine delay={0.1}>next investment</MaskLine>
              <MaskLine delay={0.2} className="text-brass-gradient italic">
                in Dubai?
              </MaskLine>
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-7 max-w-md border-l-2 border-brass/50 pl-6 text-[0.98rem] leading-relaxed text-muted-foreground">
                Share what you are looking for and our team will come back with availability,
                payment plans and handover timelines for the residences that fit.
              </p>
            </Reveal>
            <div className="mt-10 flex flex-wrap gap-8 border-t border-border/60 pt-8">
              <div>
                <p className="font-display text-[0.58rem] tracking-[0.3em] text-muted-foreground uppercase">
                  Head office
                </p>
                <p className="mt-2 font-display text-lg font-light">Dubai, UAE</p>
              </div>
              <div>
                <p className="font-display text-[0.58rem] tracking-[0.3em] text-muted-foreground uppercase">
                  Follow
                </p>
                <a
                  href="https://www.instagram.com/hredevelopment/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block font-display text-lg font-light transition-colors hover:text-brass"
                >
                  @hredevelopment
                </a>
              </div>
            </div>
          </div>

          <Reveal delay={0.1}>
            <form
              className="border border-border/70 bg-card p-7 shadow-[var(--shadow-monument)] md:p-10"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                toast.success("Enquiry noted", {
                  description: "Our team will be in touch shortly.",
                });
              }}
            >
              <p className="font-display text-[0.6rem] tracking-[0.3em] text-brass uppercase">
                Private enquiry
              </p>

              <div className="mt-8 grid gap-6">
                <Field label="Full name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@email.com" />
                <Field label="Phone" name="phone" placeholder="+971" />

                <label className="block">
                  <span className="font-display text-[0.58rem] tracking-[0.28em] text-muted-foreground uppercase">
                    Interested in
                  </span>
                  <select
                    name="project"
                    className="mt-3 w-full border-b border-border bg-transparent py-3 font-display text-base text-foreground outline-none transition-colors focus:border-brass"
                  >
                    <option className="bg-background">Any development</option>
                    {PROJECTS.map((p) => (
                      <option key={p.id} className="bg-background">
                        {p.name}
                      </option>
                    ))}
                    <option className="bg-background">Skyhills Residences 2</option>
                  </select>
                </label>
              </div>

              <button
                type="submit"
                className="group relative mt-10 w-full overflow-hidden border border-emerald bg-emerald px-8 py-4 font-display text-[0.66rem] font-semibold tracking-[0.3em] text-primary-foreground uppercase"
              >
                <span className="relative z-10">{sent ? "Enquiry sent" : "Get in touch"}</span>
                <span className="absolute inset-0 translate-y-full bg-background transition-transform duration-500 group-hover:translate-y-0" />
                <span className="absolute inset-0 z-10 flex items-center justify-center text-emerald opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {sent ? "Enquiry sent" : "Get in touch"}
                </span>
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="font-display text-[0.58rem] tracking-[0.28em] text-muted-foreground uppercase">
        {label}
      </span>
      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-border bg-transparent py-3 font-display text-base text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-brass"
      />
    </label>
  );
}
