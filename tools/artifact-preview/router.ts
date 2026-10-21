// Мини-роутер для превью-артефакта: маршрут хранится в памяти, без смены URL.
type L = () => void;
let path = '/';
const subs = new Set<L>();
export const router = {
  get: () => path,
  go(href: string) {
    const [p, hash] = href.split('#');
    const next = p || path;
    if (next !== path) {
      path = next;
      subs.forEach((f) => f());
      window.scrollTo(0, 0);
    }
    if (hash) setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' }), 60);
  },
  sub(f: L) {
    subs.add(f);
    return () => subs.delete(f);
  },
};
