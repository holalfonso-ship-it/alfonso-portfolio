import type { BlogPost, BlogPostDetail } from '@/types/blog';

// In dev, Vite proxy can forward /api → Vercel dev; in prod it's the same origin.
const BASE = '';

export async function fetchPosts(): Promise<BlogPost[]> {
  const res = await fetch(`${BASE}/api/notion/posts`);
  if (!res.ok) throw new Error('Failed to fetch posts');
  const { posts } = await res.json();
  return posts;
}

export async function fetchPost(id: string): Promise<BlogPostDetail> {
  const res = await fetch(`${BASE}/api/notion/post/${id}`);
  if (!res.ok) throw new Error('Failed to fetch post');
  const { post } = await res.json();
  return post;
}

// ─── Date formatter ───────────────────────────────────────────────────────────

export function formatDate(dateStr: string | null): string {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
