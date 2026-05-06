import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight, Loader2 } from 'lucide-react';
import { fetchPosts, formatDate } from '@/lib/notion';
import type { BlogPost } from '@/types/blog';

// ─── Category pill ────────────────────────────────────────────────────────────

const CategoryPill: React.FC<{
  label: string;
  active: boolean;
  onClick: () => void;
}> = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`text-xs font-medium px-4 py-1.5 rounded-full border transition-all duration-150 ${
      active
        ? 'bg-primary text-primary-foreground border-primary'
        : 'bg-transparent border-border/40 text-muted-foreground hover:border-foreground/30 hover:text-foreground'
    }`}
  >
    {label}
  </button>
);

// ─── Post card ────────────────────────────────────────────────────────────────

const PostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <Link
    to={`/blog/${post.id}`}
    className="group block rounded-xl border border-border/20 bg-background hover:border-foreground/20 hover:shadow-lg transition-all duration-200 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
  >
    {/* Cover image */}
    {post.cover && (
      <div className="w-full overflow-hidden" style={{ aspectRatio: '16/7' }}>
        <img
          src={post.cover}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
    )}

    <div className="p-5 md:p-6">
      {/* Category + date */}
      <div className="flex items-center gap-3 mb-3">
        {post.category && (
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
            {post.category}
          </span>
        )}
        {post.date && (
          <span className="text-[11px] text-muted-foreground">{formatDate(post.date)}</span>
        )}
        {post.featured && (
          <span className="ml-auto text-[10px] font-semibold uppercase tracking-[0.12em] px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
            Destacado
          </span>
        )}
      </div>

      {/* Title + arrow */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3
          className="font-display font-bold leading-snug text-foreground"
          style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)' }}
        >
          {post.title}
        </h3>
        <div className="flex-shrink-0 w-7 h-7 rounded-full border border-border/30 flex items-center justify-center mt-0.5 text-muted-foreground transition-all duration-200 group-hover:bg-foreground group-hover:border-foreground group-hover:text-background">
          <ArrowUpRight size={13} />
        </div>
      </div>

      {/* Summary */}
      {post.summary && (
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
          {post.summary}
        </p>
      )}

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-3 py-1 rounded-full border border-border/30 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  </Link>
);

// ─── Blog page ────────────────────────────────────────────────────────────────

const CATEGORIES = ['Todos', 'DesignOps', 'AI', 'Tools', 'Case Study'];

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('Todos');

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchPosts()
      .then(setPosts)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const filtered =
    activeCategory === 'Todos'
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Blog — Alfonso Zamorano</title>
        <meta
          name="description"
          content="Reflexiones sobre diseño de producto, DesignOps, IA y herramientas que uso en el día a día."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* ── Header ── */}
        <div className="px-6 md:px-12 max-w-7xl mx-auto pt-28 md:pt-36 pb-10 md:pb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-6 h-px bg-muted-foreground/40" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Notas y reflexiones
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.05] mb-6">
            Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Diseño de producto, DesignOps, IA y todo lo que experimento en el camino.
          </p>
        </div>

        {/* ── Category filters ── */}
        <div className="px-6 md:px-12 max-w-7xl mx-auto pb-8 md:pb-12">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <CategoryPill
                key={cat}
                label={cat}
                active={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              />
            ))}
          </div>
        </div>

        {/* ── Posts grid ── */}
        <div className="px-6 md:px-12 max-w-7xl mx-auto pb-24 md:pb-32">
          {loading && (
            <div className="flex items-center justify-center py-24">
              <Loader2 size={28} className="animate-spin text-muted-foreground" />
            </div>
          )}

          {error && (
            <div className="py-16 text-center">
              <p className="text-muted-foreground">
                No se pudieron cargar los artículos.{' '}
                <button
                  onClick={() => {
                    setError(null);
                    setLoading(true);
                    fetchPosts()
                      .then(setPosts)
                      .catch((e) => setError(e.message))
                      .finally(() => setLoading(false));
                  }}
                  className="underline hover:text-foreground transition-colors"
                >
                  Reintentar
                </button>
              </p>
            </div>
          )}

          {!loading && !error && filtered.length === 0 && (
            <p className="py-16 text-center text-muted-foreground">
              No hay artículos en esta categoría todavía.
            </p>
          )}

          {!loading && !error && filtered.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filtered.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
