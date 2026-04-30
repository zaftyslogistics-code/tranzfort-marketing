export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  author: string;
  authorRole?: string;
  featured?: boolean;
  coverImage?: string;
  readingTime?: number;
  content: string;
}
