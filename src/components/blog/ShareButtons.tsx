import { useState } from "react";
import { Share2, Link as LinkIcon } from "lucide-react";
import type { BlogPost } from "../../lib/blog";

interface ShareButtonsProps {
  post: BlogPost;
  dark?: boolean;
}

export function ShareButtons({ post, dark = false }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "";
  const text = encodeURIComponent(post.title);
  const enc = encodeURIComponent(url);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // noop
    }
  };

  if (dark) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 flex items-center gap-1.5">
          <Share2 className="h-3.5 w-3.5" /> Share
        </span>
        <a
          aria-label="Share on Twitter"
          href={`https://twitter.com/intent/tweet?text=${text}&url=${enc}`}
          target="_blank"
          rel="noreferrer"
          className="h-8 w-8 grid place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:border-teal-glow hover:text-teal-glow transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
            <path d="M18.244 2H21l-6.52 7.45L22 22h-6.84l-4.78-6.24L4.8 22H2l7.02-8.02L2 2h7.02l4.32 5.71L18.244 2zm-2.4 18h1.78L8.27 4H6.4l9.444 16z" />
          </svg>
        </a>
        <a
          aria-label="Share on LinkedIn"
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc}`}
          target="_blank"
          rel="noreferrer"
          className="h-8 w-8 grid place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:border-teal-glow hover:text-teal-glow transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
            <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 17V10.4H6.16V17h2.18zM7.25 9.43a1.27 1.27 0 100-2.54 1.27 1.27 0 000 2.54zM18 17v-3.78c0-1.96-1.05-2.86-2.45-2.86-1.13 0-1.64.62-1.93 1.06v-.91h-2.18c.03.62 0 6.6 0 6.6h2.18v-3.69c0-.2.01-.4.07-.54.16-.4.52-.81 1.13-.81.8 0 1.12.61 1.12 1.5V17H18z" />
          </svg>
        </a>
        <button
          aria-label="Copy link"
          onClick={copy}
          className="h-8 w-8 grid place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:border-orange-glow hover:text-orange-glow transition-colors"
        >
          <LinkIcon className="h-3 w-3" />
        </button>
        {copied && <span className="text-xs text-orange-glow font-semibold ml-1">Copied!</span>}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink-soft flex items-center gap-1.5">
        <Share2 className="h-3.5 w-3.5" /> Share
      </span>
      <a
        aria-label="Share on Twitter"
        href={`https://twitter.com/intent/tweet?text=${text}&url=${enc}`}
        target="_blank"
        rel="noreferrer"
        className="h-8 w-8 grid place-items-center rounded-full border border-border hover:border-teal hover:text-teal transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
          <path d="M18.244 2H21l-6.52 7.45L22 22h-6.84l-4.78-6.24L4.8 22H2l7.02-8.02L2 2h7.02l4.32 5.71L18.244 2zm-2.4 18h1.78L8.27 4H6.4l9.444 16z" />
        </svg>
      </a>
      <a
        aria-label="Share on LinkedIn"
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc}`}
        target="_blank"
        rel="noreferrer"
        className="h-8 w-8 grid place-items-center rounded-full border border-border hover:border-teal hover:text-teal transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
          <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 17V10.4H6.16V17h2.18zM7.25 9.43a1.27 1.27 0 100-2.54 1.27 1.27 0 000 2.54zM18 17v-3.78c0-1.96-1.05-2.86-2.45-2.86-1.13 0-1.64.62-1.93 1.06v-.91h-2.18c.03.62 0 6.6 0 6.6h2.18v-3.69c0-.2.01-.4.07-.54.16-.4.52-.81 1.13-.81.8 0 1.12.61 1.12 1.5V17H18z" />
        </svg>
      </a>
      <button
        aria-label="Copy link"
        onClick={copy}
        className="h-8 w-8 grid place-items-center rounded-full border border-border hover:border-orange hover:text-orange transition-colors"
      >
        <LinkIcon className="h-3 w-3" />
      </button>
      {copied && <span className="text-xs text-teal font-semibold ml-1">Copied!</span>}
    </div>
  );
}
