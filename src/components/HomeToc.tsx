import React, { useEffect, useRef, useState } from 'react';

// ─── Same sticky-index pattern as the case-study pages: number + label
// revealed on hover/active, scroll-spy via IntersectionObserver, visible
// only at 2xl (1536px) and up since there's no room for it in the margin
// below that. Smooth-scroll on click is already handled by the global
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
      className="hidden 2xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-40"
    >
      <ol className="flex flex-col gap-3">
        {SECTIONS.map(({ id, label }, i) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={
                  'group flex items-center gap-2.5 transition-opacity duration-200 ' +
                  (isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100')
                }
              >
                <span
                  className={
                    'font-mono text-[10px] tracking-wide w-4 shrink-0 ' +
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
                  className={
                    'text-xs font-medium whitespace-nowrap overflow-hidden transition-all duration-200 ' +
                    (isActive
                      ? 'max-w-[160px] opacity-100 text-primary'
                      : 'max-w-0 opacity-0 group-hover:max-w-[160px] group-hover:opacity-100 text-foreground')
                  }
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
