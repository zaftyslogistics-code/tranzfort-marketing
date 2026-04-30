import type { FC } from "react";

interface BlogTagProps {
  tag: string;
}

const tagColors: Record<string, string> = {
  AI: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
  Product: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
  Engineering: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
  "Driver Story": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  Industry: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
};

export const BlogTag: FC<BlogTagProps> = ({ tag }) => {
  const colorClass =
    tagColors[tag] || "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClass}`}
    >
      {tag}
    </span>
  );
};
