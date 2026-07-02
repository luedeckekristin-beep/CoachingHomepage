// Prefixt einen Pfad mit dem konfigurierten Astro-base
// (z. B. '/CoachingHomepage'), sodass Links unter GitHub Pages funktionieren.
export function link(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const suffix = path.startsWith('/') ? path : '/' + path;
  return base + suffix;
}
