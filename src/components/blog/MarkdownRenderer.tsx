import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import { useRef, useEffect } from "react";
import { generateHeadingId, extractTextFromChildren } from "../../lib/blog-utils";

const components: Components = {
  h2: ({ children }) => {
    const text = extractTextFromChildren(children);
    const id = generateHeadingId(text);
    return (
      <h2
        id={id}
        className="scroll-mt-28 pt-10 mt-4 text-[1.85rem] md:text-[2.1rem] font-bold tracking-[-0.015em] text-ink leading-tight relative"
      >
        <span className="absolute -left-5 top-[0.95em] hidden lg:block h-7 w-[3px] rounded-full bg-gradient-brand" />
        {children}
      </h2>
    );
  },
  h3: ({ children }) => {
    const text = extractTextFromChildren(children);
    const id = generateHeadingId(text);
    return (
      <h3
        id={id}
        className="scroll-mt-28 pt-3 mt-2 text-[1.4rem] md:text-[1.5rem] font-bold tracking-tight text-ink"
      >
        {children}
      </h3>
    );
  },
  h4: ({ children }) => {
    const text = extractTextFromChildren(children);
    const id = generateHeadingId(text);
    return (
      <h4 id={id} className="scroll-mt-28 pt-2 mt-2 text-[1.2rem] font-bold text-ink">
        {children}
      </h4>
    );
  },
  h5: ({ children }) => {
    const text = extractTextFromChildren(children);
    const id = generateHeadingId(text);
    return (
      <h5 id={id} className="scroll-mt-28 pt-2 mt-2 text-[1.1rem] font-bold text-ink">
        {children}
      </h5>
    );
  },
  h6: ({ children }) => {
    const text = extractTextFromChildren(children);
    const id = generateHeadingId(text);
    return (
      <h6 id={id} className="scroll-mt-28 pt-2 mt-2 text-[1rem] font-bold text-ink">
        {children}
      </h6>
    );
  },
  p: ({ children }) => (
    <p className="text-[1.15rem] md:text-[1.18rem] leading-[1.85] text-ink/90 font-normal">
      {children}
    </p>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-8 border-l-[3px] border-orange pl-6 py-1">
      <p className="font-display text-[1.45rem] md:text-[1.6rem] leading-[1.4] text-ink italic">
        {children}
      </p>
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
  ),
  pre: ({ children }) => (
    <pre className="my-6 rounded-xl overflow-hidden border border-ink/15">
      <div className="flex items-center justify-between px-4 py-2 bg-ink/95 border-b border-white/10">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-orange/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-teal/80" />
        </div>
        <span className="text-[10px] font-mono uppercase tracking-wider text-white/50">code</span>
      </div>
      <div className="overflow-x-auto bg-ink text-white/90 p-5 text-sm leading-relaxed">
        {children}
      </div>
    </pre>
  ),
  ul: ({ children }) => <ul className="space-y-3 pl-1 my-2">{children}</ul>,
  li: ({ children }) => (
    <li className="flex gap-3 text-[1.08rem] text-ink/90 leading-[1.75]">
      <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
      <span>{children}</span>
    </li>
  ),
  img: ({ src, alt }) => (
    <figure className="my-8">
      <div className="flex h-64 items-center justify-center rounded-xl bg-gradient-brand-soft border border-border">
        <img src={src} alt={alt} className="rounded-xl" />
      </div>
      <figcaption className="mt-2 text-xs text-ink-soft text-center">{alt}</figcaption>
    </figure>
  ),
  a: ({ href, children }) => (
    <a href={href} className="text-teal hover:underline">
      {children}
    </a>
  ),
};

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const firstP = containerRef.current.querySelector("p:first-of-type");
      if (firstP) {
        firstP.classList.add("blog-drop-cap");
      }
    }
  }, [content]);

  return (
    <div ref={containerRef} className="space-y-6">
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  );
};
