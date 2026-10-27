import React, { useEffect, useRef, useState } from 'react';

// ─── Sticky section index with scroll-spy, matching the case-study
// pages. Narrow rail (number + dot) fixed in the page's own left
// gutter, visible from `lg` (1024px) up — below that there isn't
// enough side padding to fit it without sitting on top of content.
// The label only appears as a hover flyout, never on the active item
// by itself, so it never permanently covers body text while
// scrolling. Smooth-scroll on click is handled by the global
// anchor-click listener in Index.tsx.

const SECTIONS: { id: string; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'case-study', label: 'Work' },
  { id: 'resources', label: 'Resources' },
  { id: 'about', label: 'About' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

const HomeToc: React.FC = () => {
  const [active, setActive] = useState<string>(SECTIONS[0].id);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const targets = SECTIONS
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!targets.length) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    targets.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 z-40"
    >
      <ol className="flex flex-col gap-3">
        {SECTIONS.map(({ id, label }, i) => {
          const isActive = active === id;
          return (
            <li key={id} className="relative">
              <a
                href={`#${id}`}
                className={
                  'group relative flex items-center gap-2 transition-opacity duration-200 ' +
                  (isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100')
                }
              >
                <span
                  className={
                    'font-mono text-[10px] tracking-wide w-3.5 shrink-0 ' +
                    (isActive ? 'text-primary' : 'text-muted-foreground')
                  }
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className={
                    'w-[5px] h-[5px] rounded-full shrink-0 transition-transform duration-200 ' +
                    (isActive ? 'bg-primary scale-150' : 'bg-muted-foreground/50')
                  }
                />
                <span
                  className="pointer-events-none absolute left-[26px] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground opacity-0 shadow-sm transition-opacity duration-150 group-hover:opacity-100"
                >
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default HomeToc;
