import { Calendar, Clock, User } from "lucide-react";
import type { FC } from "react";

interface BlogMetaProps {
  date: string;
  readTime?: string;
  author: string;
}

export const BlogMeta: FC<BlogMetaProps> = ({ date, readTime, author }) => {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm text-ink-soft">
      <div className="flex items-center gap-1.5">
        <Calendar className="w-4 h-4" />
        <time dateTime={date}>
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>
      {readTime && (
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" />
          <span>{readTime}</span>
        </div>
      )}
      <div className="flex items-center gap-1.5">
        <User className="w-4 h-4" />
        <span>{author}</span>
      </div>
    </div>
  );
};
