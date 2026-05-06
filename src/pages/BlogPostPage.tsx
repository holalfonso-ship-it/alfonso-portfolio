import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Loader2, ExternalLink } from 'lucide-react';
import { fetchPost, formatDate } from '@/lib/notion';
import type { BlogPostDetail } from '@/types/blog';
import BlockList from '@/components/blog/BlockRenderer';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!id) return;
    setLoading(true);
    setError(null);
    fetchPost(id)
      .then(setPost)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 size={32} className="animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground">No se pudo cargar el artículo.</p>
        <Link to="/blog" className="text-sm text-primary underline">
          Volver al blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} — Alfonso Zamorano</title>
        {post.summary && <meta name="description" content={post.summary} />}
        <meta property="og:title" content={`${post.title} — Alfonso Zamorano`} />
        {post.summary && <meta property="og:description" content={post.summary} />}
        {post.cover && <meta property="og:image" content={post.cover} />}
      </Helmet>

      <div className="min-h-screen bg-background">

        {/* ── Back nav ── */}
        <div className="px-6 md:px-12 max-w-4xl mx-auto pt-24 pb-0">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            Blog
          </Link>
        </div>

        {/* ── Article header ── */}
        <header className="px-6 md:px-12 max-w-4xl mx-auto pt-10 pb-8 md:pb-12">

          {/* Category + date */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            {post.category && (
              <span className="text-xs font-semibold uppercase tracking-[0.14em] py-1 px-3 rounded-full bg-primary/10 text-primary">
                {post.category}
              </span>
            )}
            {post.date && (
              <span className="text-sm text-muted-foreground">{formatDate(post.date)}</span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.1] mb-6 text-foreground">
            {post.title}
          </h1>

          {/* Summary */}
          {post.summary && (
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-6">
              {post.summary}
            </p>
          )}

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full border border-border/30 text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* LinkedIn link */}
          {post.linkedinUrl && (
            <a
              href={post.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:opacity-80 transition-opacity"
            >
              <ExternalLink size={13} />
              Ver en LinkedIn
            </a>
          )}
        </header>

        {/* ── Cover image ── */}
        {post.cover && (
          <div className="w-full px-0 md:px-6 max-w-7xl mx-auto mb-12">
            <div className="relative w-full overflow-hidden rounded-none md:rounded-2xl bg-secondary/40" style={{ aspectRatio: '16/7' }}>
              <img
                src={post.cover}
                alt={post.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        )}

        {/* ── Content ── */}
        <article className="px-6 md:px-12 max-w-4xl mx-auto pb-24 md:pb-36">
          <div className="border-t border-border/20 pt-10 md:pt-14">
            {post.blocks && post.blocks.length > 0 ? (
              <BlockList blocks={post.blocks} />
            ) : (
              <p className="text-muted-foreground">Este artículo no tiene contenido todavía.</p>
            )}
          </div>

          {/* ── Footer: back + LinkedIn ── */}
          <div className="mt-16 pt-10 border-t border-border/20 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
              Todos los artículos
            </Link>
            {post.linkedinUrl && (
              <a
                href={post.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:opacity-80 transition-opacity"
              >
                Compartir en LinkedIn
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogPostPage;
