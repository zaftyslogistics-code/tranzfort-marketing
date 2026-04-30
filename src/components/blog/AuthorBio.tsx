import type { FC } from "react";

interface AuthorBioProps {
  author: string;
  role?: string;
  bio?: string;
}

export const AuthorBio: FC<AuthorBioProps> = ({ author, role, bio }) => {
  const initials = author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-2xl">
      <div className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center text-white font-semibold shrink-0">
        {initials}
      </div>
      <div>
        <div className="font-semibold text-ink">{author}</div>
        {role && <div className="text-sm text-ink-soft mb-2">{role}</div>}
        {bio && <p className="text-sm text-ink-soft leading-relaxed">{bio}</p>}
      </div>
    </div>
  );
};
