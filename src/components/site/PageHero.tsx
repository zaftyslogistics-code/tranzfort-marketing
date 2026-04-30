import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  desc,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  desc: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative bg-gradient-dark text-white overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, oklch(0.55 0.11 195 / 0.4), transparent 60%)",
        }}
      />
      <div className="relative max-w-5xl mx-auto px-5 lg:px-8 py-24 lg:py-32 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.2em] text-white/80">
          {eyebrow}
        </div>
        <h1 className="mt-5 text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
          {title}
        </h1>
        <p className="mt-5 text-lg text-white/75 max-w-2xl mx-auto">{desc}</p>
        {children && <div className="mt-8 flex justify-center">{children}</div>}
      </div>
    </section>
  );
}
