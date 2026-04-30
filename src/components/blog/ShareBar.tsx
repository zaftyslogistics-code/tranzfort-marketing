import { Copy, Link, Share2, X } from "lucide-react";
import { useState } from "react";

interface ShareBarProps {
  title: string;
  url: string;
}

export const ShareBar = ({ title, url }: ShareBarProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={copyToClipboard}
        className="p-2 rounded-lg hover:bg-muted transition-colors text-ink-soft hover:text-ink"
        title="Copy link"
      >
        {copied ? <Share2 className="w-5 h-5 text-teal" /> : <Copy className="w-5 h-5" />}
      </button>
      <a
        href={shareUrls.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg hover:bg-muted transition-colors text-ink-soft hover:text-ink"
        title="Share on X"
      >
        <X className="w-5 h-5" />
      </a>
      <a
        href={shareUrls.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg hover:bg-muted transition-colors text-ink-soft hover:text-ink"
        title="Share on LinkedIn"
      >
        <Link className="w-5 h-5" />
      </a>
    </div>
  );
};
