import type { APIRoute } from 'astro';
import { getEntry } from 'astro:content';

export const prerender = true;

export const GET: APIRoute = async () => {
  const entry = await getEntry('cennik', 'uslugi');
  return new Response(JSON.stringify(entry?.data ?? { kategorie: [] }), {
    headers: {
      'Content-Type': 'application/json',
      // Pozwala innym stronom (np. polozna.net) pobierać ten cennik w przeglądarce.
      'Access-Control-Allow-Origin': '*',
    },
  });
};
