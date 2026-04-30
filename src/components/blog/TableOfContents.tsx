import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { List } from "lucide-react";

export interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export const TableOfContents = ({ headings }: TableOfContentsProps) => {
  const [active, setActive] = useState<string>(headings[0]?.id ?? "");

  useEffect(() => {
    if (!headings.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0.01 },
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  return (
    <nav aria-label="Table of contents" className="text-[13px]">
      <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-ink-soft">
        <List className="h-3 w-3" /> On this page
      </div>
      <ul className="space-y-0.5 relative border-l border-border">
        {headings.map((h) => {
          const isActive = active === h.id;
          return (
            <li key={h.id} className={h.level === 3 ? "pl-3" : ""}>
              <a
                href={`#${h.id}`}
                className={`relative block pl-3 py-1.5 leading-snug transition-colors ${
                  isActive ? "text-teal font-semibold" : "text-ink-soft hover:text-ink"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="toc-indicator"
                    className="absolute -left-px top-0 bottom-0 w-[2px] rounded-full bg-gradient-brand"
                  />
                )}
                {h.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
