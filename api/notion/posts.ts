import type { VercelRequest, VercelResponse } from '@vercel/node';

const NOTION_DB_ID = 'b8fde9a5d3ec4bfe8a38de284dc38a86';
const NOTION_API = 'https://api.notion.com/v1';
const NOTION_VERSION = '2022-06-28';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const apiKey = process.env.NOTION_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'NOTION_API_KEY not configured' });

  try {
    const body = {
      filter: {
        or: [
          { property: 'Estado', select: { equals: 'En blog' } },
          { property: 'Estado', select: { equals: 'Publicado en LK' } },
        ],
      },
      sorts: [
        { property: 'Fecha publicación', direction: 'descending' },
      ],
    };

    const response = await fetch(`${NOTION_API}/databases/${NOTION_DB_ID}/query`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Notion-Version': NOTION_VERSION,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const error = await response.text();
      return res.status(response.status).json({ error });
    }

    const data = await response.json();

    // Normalise to a simpler shape so the client doesn't need to parse Notion raw props
    const posts = data.results.map((page: any) => {
      const props = page.properties;
      return {
        id: page.id,
        title: props['Título']?.title?.[0]?.plain_text ?? 'Sin título',
        category: props['Categoría']?.select?.name ?? null,
        tags: props['Tags']?.multi_select?.map((t: any) => t.name) ?? [],
        summary: props['Resumen']?.rich_text?.[0]?.plain_text ?? null,
        date: props['Fecha publicación']?.date?.start ?? null,
        featured: props['Destacado']?.checkbox ?? false,
        linkedinUrl: props['URL LinkedIn']?.url ?? null,
        cover: page.cover?.external?.url ?? page.cover?.file?.url ?? null,
      };
    });

    return res.status(200).json({ posts });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
