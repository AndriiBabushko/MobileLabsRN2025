export interface ChatItem {
  id: string;
  username: string;
  avatar?: string;
  status?: 'online' | 'offline';
  snippet: string; // last message or status text
  date: string; // e.g. "14 Jun"
  unreadCount?: number; // number of unread messages
}
