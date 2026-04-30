import { useEffect, useState } from "react";

export interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export const TableOfContents = ({ headings }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -66%" },
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <div className="hidden lg:block sticky top-28">
      <h4 className="text-sm font-semibold text-ink mb-4 uppercase tracking-wider">On this page</h4>
      <nav className="space-y-2">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={`block text-sm py-1.5 px-3 rounded-lg transition-colors ${
              activeId === heading.id
                ? "bg-teal/10 text-teal font-medium"
                : "text-ink-soft hover:text-ink hover:bg-muted/50"
            }`}
            style={{ paddingLeft: `${(heading.level - 1) * 12 + 12}px` }}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
};
