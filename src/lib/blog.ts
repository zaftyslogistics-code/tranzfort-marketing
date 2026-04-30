export interface BlogAuthor {
  name: string;
  role: string;
  initials: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  author: BlogAuthor;
  featured?: boolean;
  coverImage?: string;
  readTime?: string;
  content: string;

  // NEW FIELDS NEEDED FOR OLD DESIGN
  subtitle?: string;
  coverEmoji?: string;
}
