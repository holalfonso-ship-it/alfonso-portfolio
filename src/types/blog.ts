export interface BlogPost {
  id: string;
  title: string;
  category: string | null;
  tags: string[];
  summary: string | null;
  date: string | null; // ISO date string e.g. "2025-04-10"
  featured: boolean;
  linkedinUrl: string | null;
  cover: string | null;
}

export interface BlogPostDetail extends BlogPost {
  blocks: NotionBlock[];
}

// ─── Notion block types we handle ─────────────────────────────────────────────

export type NotionBlock =
  | ParagraphBlock
  | HeadingBlock
  | BulletedListBlock
  | NumberedListBlock
  | QuoteBlock
  | CalloutBlock
  | ImageBlock
  | DividerBlock
  | CodeBlock
  | ToggleBlock
  | ColumnListBlock
  | ColumnBlock
  | UnsupportedBlock;

interface BaseBlock {
  id: string;
  has_children: boolean;
  children?: NotionBlock[];
}

export interface RichTextItem {
  type: 'text' | 'mention' | 'equation';
  text?: { content: string; link: { url: string } | null };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: string | null;
}

export interface ParagraphBlock extends BaseBlock {
  type: 'paragraph';
  paragraph: { rich_text: RichTextItem[]; color: string };
}

export interface HeadingBlock extends BaseBlock {
  type: 'heading_1' | 'heading_2' | 'heading_3';
  heading_1?: { rich_text: RichTextItem[]; color: string; is_toggleable: boolean };
  heading_2?: { rich_text: RichTextItem[]; color: string; is_toggleable: boolean };
  heading_3?: { rich_text: RichTextItem[]; color: string; is_toggleable: boolean };
}

export interface BulletedListBlock extends BaseBlock {
  type: 'bulleted_list_item';
  bulleted_list_item: { rich_text: RichTextItem[]; color: string };
}

export interface NumberedListBlock extends BaseBlock {
  type: 'numbered_list_item';
  numbered_list_item: { rich_text: RichTextItem[]; color: string };
}

export interface QuoteBlock extends BaseBlock {
  type: 'quote';
  quote: { rich_text: RichTextItem[]; color: string };
}

export interface CalloutBlock extends BaseBlock {
  type: 'callout';
  callout: {
    rich_text: RichTextItem[];
    icon: { type: 'emoji'; emoji: string } | { type: 'external'; external: { url: string } };
    color: string;
  };
}

export interface ImageBlock extends BaseBlock {
  type: 'image';
  image:
    | { type: 'external'; external: { url: string }; caption: RichTextItem[] }
    | { type: 'file'; file: { url: string; expiry_time: string }; caption: RichTextItem[] };
}

export interface DividerBlock extends BaseBlock {
  type: 'divider';
  divider: Record<string, never>;
}

export interface CodeBlock extends BaseBlock {
  type: 'code';
  code: { rich_text: RichTextItem[]; caption: RichTextItem[]; language: string };
}

export interface ToggleBlock extends BaseBlock {
  type: 'toggle';
  toggle: { rich_text: RichTextItem[]; color: string };
}

export interface ColumnListBlock extends BaseBlock {
  type: 'column_list';
  column_list: Record<string, never>;
}

export interface ColumnBlock extends BaseBlock {
  type: 'column';
  column: Record<string, never>;
}

export interface UnsupportedBlock extends BaseBlock {
  type: string;
  [key: string]: unknown;
}
