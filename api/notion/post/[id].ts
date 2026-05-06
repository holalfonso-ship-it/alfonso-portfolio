import type { VercelRequest, VercelResponse } from '@vercel/node';

const NOTION_API = 'https://api.notion.com/v1';
const NOTION_VERSION = '2022-06-28';

async function fetchAllBlocks(blockId: string, apiKey: string): Promise<any[]> {
  const blocks: any[] = [];
  let cursor: string | undefined;

  do {
    const url = new URL(`${NOTION_API}/blocks/${blockId}/children`);
    url.searchParams.set('page_size', '100');
    if (cursor) url.searchParams.set('start_cursor', cursor);

    const res = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Notion-Version': NOTION_VERSION,
      },
    });

    if (!res.ok) throw new Error(`Notion error: ${res.status}`);
    const data = await res.json();
    blocks.push(...data.results);
    cursor = data.has_more ? data.next_cursor : undefined;
  } while (cursor);

  return blocks;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const apiKey = process.env.NOTION_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'NOTION_API_KEY not configured' });

  const { id } = req.query;
  if (!id || typeof id !== 'string') return res.status(400).json({ error: 'Missing post id' });

  try {
    // Fetch page metadata
    const pageRes = await fetch(`${NOTION_API}/pages/${id}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Notion-Version': NOTION_VERSION,
      },
    });

    if (!pageRes.ok) return res.status(pageRes.status).json({ error: 'Page not found' });
    const page = await pageRes.json();

    // Fetch content blocks
    const blocks = await fetchAllBlocks(id, apiKey);

    const props = page.properties;
    const post = {
      id: page.id,
      title: props['Título']?.title?.[0]?.plain_text ?? 'Sin título',
      category: props['Categoría']?.select?.name ?? null,
      tags: props['Tags']?.multi_select?.map((t: any) => t.name) ?? [],
      summary: props['Resumen']?.rich_text?.[0]?.plain_text ?? null,
      date: props['Fecha publicación']?.date?.start ?? null,
      featured: props['Destacado']?.checkbox ?? false,
      linkedinUrl: props['URL LinkedIn']?.url ?? null,
      cover: page.cover?.external?.url ?? page.cover?.file?.url ?? null,
      blocks,
    };

    return res.status(200).json({ post });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
