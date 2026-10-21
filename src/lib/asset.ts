/** Путь к файлу из /public с учётом basePath (GitHub Pages публикует сайт в подпапке). */
const base = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function asset(path: string): string {
  return base + path;
}
