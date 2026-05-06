import type { VercelRequest, VercelResponse } from '@vercel/node';

const NOTION_DB_ID = 'b8fde9a5d3ec4bfe8a38de284dc38a86';
const NOTION_API = 'https://api.notion.com/v1';
const NOTION_VERSION = '2022-06-28';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const apiKey = process.env.NOTION_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'NOTION_API_KEY not configured' });

  const response = await fetch(`${NOTION_API}/databases/${NOTION_DB_ID}/query`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Notion-Version': NOTION_VERSION,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}), // sin filtro
  });

  const data = await response.json();

  const summary = data.results?.map((page: any) => ({
    id: page.id,
    title: page.properties?.['Título']?.title?.[0]?.plain_text ?? '(sin título)',
    estado: page.properties?.['Estado']?.select?.name ?? '(vacío)',
    allProps: Object.keys(page.properties),
  }));

  return res.status(200).json({ total: data.results?.length, posts: summary });
}
