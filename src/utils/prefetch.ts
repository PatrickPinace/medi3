/**
 * Pobiera JSON z Apps Script podczas budowania strony, żeby formularz pokazał się od razu
 * (bez czekania 2-6 s na skrypt). Przeglądarka i tak odświeża dane w tle.
 * Gdy skrypt nie odpowie, zwraca null i strona działa po staremu (pobiera dane po otwarciu).
 */
const memo = new Map<string, { at: number; value: unknown }>();

export async function prefetchJson<T = any>(
  url: string,
  valid: (d: any) => boolean = () => true,
  ttlMs = 5 * 60_000,
): Promise<T | null> {
  if (!url) return null;
  const hit = memo.get(url);
  if (hit && Date.now() - hit.at < ttlMs) return hit.value as T | null;
  let value: T | null = null;
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 25_000);
    const res = await fetch(url, { signal: ctrl.signal });
    clearTimeout(timer);
    if (res.ok) {
      const d = await res.json();
      if (valid(d)) value = d as T;
    }
  } catch {
    value = null;
  }
  memo.set(url, { at: Date.now(), value });
  return value;
}
