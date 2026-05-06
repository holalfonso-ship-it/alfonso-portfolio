import React from 'react';
import type {
  NotionBlock,
  RichTextItem,
  ParagraphBlock,
  HeadingBlock,
  BulletedListBlock,
  NumberedListBlock,
  QuoteBlock,
  CalloutBlock,
  ImageBlock,
  CodeBlock,
  ToggleBlock,
} from '@/types/blog';

// ─── Rich text renderer ───────────────────────────────────────────────────────

const RichText: React.FC<{ items: RichTextItem[] }> = ({ items }) => (
  <>
    {items.map((item, i) => {
      const { bold, italic, strikethrough, underline, code } = item.annotations;
      let node: React.ReactNode = item.plain_text;

      if (code) node = <code key={i} className="px-1.5 py-0.5 rounded bg-muted/60 text-sm font-mono text-foreground/90">{node}</code>;
      if (bold) node = <strong key={i}>{node}</strong>;
      if (italic) node = <em key={i}>{node}</em>;
      if (strikethrough) node = <s key={i}>{node}</s>;
      if (underline) node = <u key={i}>{node}</u>;

      if (item.href) {
        node = (
          <a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            {node}
          </a>
        );
      }

      return <React.Fragment key={i}>{node}</React.Fragment>;
    })}
  </>
);

// ─── Individual block renderers ───────────────────────────────────────────────

const Paragraph: React.FC<{ block: ParagraphBlock }> = ({ block }) => {
  const text = block.paragraph.rich_text;
  if (!text.length) return <div className="h-4" />;
  return (
    <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
      <RichText items={text} />
    </p>
  );
};

const Heading: React.FC<{ block: HeadingBlock }> = ({ block }) => {
  const data = block[block.type as 'heading_1' | 'heading_2' | 'heading_3'];
  const text = data?.rich_text ?? [];

  if (block.type === 'heading_1') {
    return (
      <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-12 mb-5 text-foreground">
        <RichText items={text} />
      </h2>
    );
  }
  if (block.type === 'heading_2') {
    return (
      <h3 className="text-2xl md:text-3xl font-display font-bold tracking-tight mt-10 mb-4 text-foreground">
        <RichText items={text} />
      </h3>
    );
  }
  return (
    <h4 className="text-xl md:text-2xl font-display font-semibold mt-8 mb-3 text-foreground">
      <RichText items={text} />
    </h4>
  );
};

const BulletItem: React.FC<{ block: BulletedListBlock }> = ({ block }) => (
  <li className="text-base md:text-lg text-foreground/80 leading-relaxed mb-1.5 pl-1">
    <RichText items={block.bulleted_list_item.rich_text} />
  </li>
);

const NumberedItem: React.FC<{ block: NumberedListBlock }> = ({ block }) => (
  <li className="text-base md:text-lg text-foreground/80 leading-relaxed mb-1.5 pl-1">
    <RichText items={block.numbered_list_item.rich_text} />
  </li>
);

const Quote: React.FC<{ block: QuoteBlock }> = ({ block }) => (
  <blockquote className="border-l-2 border-primary/50 pl-6 my-8 text-lg md:text-xl text-foreground/70 italic leading-relaxed">
    <RichText items={block.quote.rich_text} />
  </blockquote>
);

const Callout: React.FC<{ block: CalloutBlock }> = ({ block }) => {
  const emoji = block.callout.icon?.type === 'emoji' ? block.callout.icon.emoji : '💡';
  return (
    <div className="flex gap-4 items-start my-6 px-5 py-4 rounded-xl bg-primary/8 border border-primary/20">
      <span className="text-xl flex-shrink-0 mt-0.5">{emoji}</span>
      <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
        <RichText items={block.callout.rich_text} />
      </p>
    </div>
  );
};

const ImageBlock: React.FC<{ block: ImageBlock }> = ({ block }) => {
  const src = block.image.type === 'external'
    ? block.image.external.url
    : block.image.file.url;
  const caption = block.image.caption;
  return (
    <figure className="my-10">
      <div className="w-full overflow-hidden rounded-xl bg-secondary/30">
        <img
          src={src}
          alt={caption?.[0]?.plain_text ?? ''}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
      {caption && caption.length > 0 && (
        <figcaption className="mt-3 text-xs text-muted-foreground pl-4 border-l border-border/40 leading-relaxed">
          <RichText items={caption} />
        </figcaption>
      )}
    </figure>
  );
};

const Code: React.FC<{ block: CodeBlock }> = ({ block }) => (
  <pre className="my-6 p-5 rounded-xl bg-muted/50 border border-border/30 overflow-x-auto">
    <code className="text-sm font-mono text-foreground/90 leading-relaxed">
      {block.code.rich_text.map((t) => t.plain_text).join('')}
    </code>
  </pre>
);

const Toggle: React.FC<{ block: ToggleBlock; children?: NotionBlock[] }> = ({ block, children }) => (
  <details className="my-4 rounded-xl border border-border/30 overflow-hidden">
    <summary className="px-5 py-3.5 cursor-pointer text-base font-medium text-foreground hover:bg-muted/30 transition-colors select-none">
      <RichText items={block.toggle.rich_text} />
    </summary>
    {children && children.length > 0 && (
      <div className="px-5 pb-4 pt-2 border-t border-border/20">
        <BlockList blocks={children} />
      </div>
    )}
  </details>
);

// ─── Group consecutive list items ─────────────────────────────────────────────

function groupBlocks(blocks: NotionBlock[]) {
  const groups: Array<{ type: 'list-ul' | 'list-ol' | 'single'; items: NotionBlock[] }> = [];

  for (const block of blocks) {
    const last = groups[groups.length - 1];

    if (block.type === 'bulleted_list_item') {
      if (last?.type === 'list-ul') {
        last.items.push(block);
      } else {
        groups.push({ type: 'list-ul', items: [block] });
      }
    } else if (block.type === 'numbered_list_item') {
      if (last?.type === 'list-ol') {
        last.items.push(block);
      } else {
        groups.push({ type: 'list-ol', items: [block] });
      }
    } else {
      groups.push({ type: 'single', items: [block] });
    }
  }

  return groups;
}

// ─── Block list (recursive) ───────────────────────────────────────────────────

export const BlockList: React.FC<{ blocks: NotionBlock[] }> = ({ blocks }) => {
  const groups = groupBlocks(blocks);

  return (
    <>
      {groups.map((group, gi) => {
        if (group.type === 'list-ul') {
          return (
            <ul key={gi} className="list-disc list-outside pl-6 mb-4 space-y-1">
              {group.items.map((block) => (
                <BulletItem key={block.id} block={block as BulletedListBlock} />
              ))}
            </ul>
          );
        }
        if (group.type === 'list-ol') {
          return (
            <ol key={gi} className="list-decimal list-outside pl-6 mb-4 space-y-1">
              {group.items.map((block) => (
                <NumberedItem key={block.id} block={block as NumberedListBlock} />
              ))}
            </ol>
          );
        }

        const block = group.items[0];
        return <SingleBlock key={block.id} block={block} />;
      })}
    </>
  );
};

// ─── Single block dispatcher ──────────────────────────────────────────────────

const SingleBlock: React.FC<{ block: NotionBlock }> = ({ block }) => {
  switch (block.type) {
    case 'paragraph':
      return <Paragraph block={block as ParagraphBlock} />;
    case 'heading_1':
    case 'heading_2':
    case 'heading_3':
      return <Heading block={block as HeadingBlock} />;
    case 'quote':
      return <Quote block={block as QuoteBlock} />;
    case 'callout':
      return <Callout block={block as CalloutBlock} />;
    case 'image':
      return <ImageBlock block={block as ImageBlock} />;
    case 'divider':
      return <hr className="my-10 border-border/30" />;
    case 'code':
      return <Code block={block as CodeBlock} />;
    case 'toggle':
      return <Toggle block={block as ToggleBlock} children={block.children} />;
    case 'column_list':
      // Render columns side by side
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
          {block.children?.map((col) => (
            <div key={col.id}>
              {col.children && <BlockList blocks={col.children} />}
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
};

export default BlockList;
