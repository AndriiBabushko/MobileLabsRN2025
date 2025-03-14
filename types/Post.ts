export interface Post {
  id: string;
  user: string;
  tag?: string; // e.g. 'NEWS', 'GUIDE', etc.
  time: string;
  title: string;
  snippet: string;
  likes: number;
  comments: number;
}
