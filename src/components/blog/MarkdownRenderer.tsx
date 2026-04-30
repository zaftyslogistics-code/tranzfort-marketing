import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";

const components: Components = {
  h2: ({ children }) => (
    <h2 className="text-2xl md:text-3xl font-bold mt-14 mb-5 text-ink">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl md:text-2xl font-semibold mt-10 mb-4 text-ink">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-[17px] md:text-lg leading-8 text-ink-soft mb-6">{children}</p>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-teal pl-5 italic text-ink-soft bg-muted/40 py-4 rounded-r-2xl my-6">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
  ),
  pre: ({ children }) => (
    <pre className="bg-gradient-dark text-white p-6 rounded-2xl overflow-x-auto text-sm my-8">
      {children}
    </pre>
  ),
  img: ({ src, alt }) => (
    <img src={src} alt={alt} className="rounded-2xl w-full my-8 border border-border shadow-soft" />
  ),
  a: ({ href, children }) => (
    <a href={href} className="text-teal hover:underline">
      {children}
    </a>
  ),
  ul: ({ children }) => <ul className="list-disc pl-6 space-y-2 mb-6 text-ink-soft">{children}</ul>,
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 space-y-2 mb-6 text-ink-soft">{children}</ol>
  ),
};

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  );
};
