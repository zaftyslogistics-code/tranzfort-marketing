import { useEffect } from "react";
import { motion } from "framer-motion";
import type { LegalSection } from "@/data/privacy";

export function LegalContent({
  sections,
  lastUpdated,
}: {
  sections: LegalSection[];
  lastUpdated: string;
}) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          {/* Sticky TOC sidebar on desktop */}
          <aside className="hidden lg:block">
            <nav className="sticky top-28">
              <div className="text-xs uppercase tracking-[0.2em] text-ink-soft mb-4 font-semibold">
                On this page
              </div>
              <ul className="space-y-2">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="block text-sm text-ink-soft hover:text-teal transition-colors py-1"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById(s.id)
                          ?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-border text-xs text-ink-soft">
                Last updated: {lastUpdated}
              </div>
            </nav>
          </aside>

          {/* Mobile TOC inline */}
          <div className="lg:hidden mb-8">
            <details className="rounded-2xl bg-card border border-border overflow-hidden">
              <summary className="px-5 py-4 text-sm font-semibold cursor-pointer select-none flex items-center justify-between">
                <span>Table of Contents</span>
                <span className="text-ink-soft">{sections.length} sections</span>
              </summary>
              <ul className="px-5 pb-4 space-y-2">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="block text-sm text-ink-soft hover:text-teal transition-colors py-1"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById(s.id)
                          ?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {sections.map((section, idx) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.3) }}
                className="scroll-mt-28"
              >
                <div className="rounded-2xl bg-card border border-border p-6 lg:p-8">
                  <h2 className="text-xl lg:text-2xl font-bold mb-6">{section.title}</h2>
                  <div className="space-y-5 text-ink-soft leading-relaxed [&_strong]:text-ink">
                    {section.blocks.map((block, bIdx) => (
                      <BlockRenderer key={`${section.id}-${bIdx}`} block={block} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="text-center text-sm text-ink-soft pt-4">
              Last updated: {lastUpdated}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlockRenderer({ block }: { block: LegalSection["blocks"][number] }) {
  switch (block.type) {
    case "paragraph":
      return <p>{block.text}</p>;
    case "subheading":
      return <h3 className="text-lg font-semibold text-ink mt-6 mb-2">{block.text}</h3>;
    case "callout":
      return (
        <div className="rounded-xl bg-muted/60 border-l-4 border-teal p-4 text-sm font-medium text-ink">
          {block.text}
        </div>
      );
    case "bullets":
      return (
        <div>
          {block.intro && <p className="font-semibold text-ink mb-2 text-sm">{block.intro}</p>}
          <ul className="space-y-1.5 list-disc list-inside">
            {block.items.map((item, i) => (
              <li key={i} className="text-sm pl-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      );
    case "numbered":
      return (
        <ol className="space-y-2 list-decimal list-inside">
          {block.items.map((item, i) => (
            <li key={i} className="text-sm pl-1">
              {item}
            </li>
          ))}
        </ol>
      );
    default:
      return null;
  }
}
