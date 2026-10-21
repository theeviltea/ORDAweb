import { asset } from '@/lib/asset';

const BLOB = {
  '08afe8a040f25cc1ddaa650f2e960143': 'jacket.webp',
  '2f7305bce77367049cd8639226678a7b': 'jersey.webp',
  '3567dd74e0e12b90534d956c94fee54a': 'training-kit.webp',
  '42132e9425566cbb39dfc39dbb8cbefe': 'flag.webp',
  '45a77801c66e8a02023d98ffdc0f3641': 'mug.webp',
  '7d7e72eeb47455c24a3a0c474a0baf0c': 'backpack.webp',
  '941d5fa33c25469c18bc36d52fadc5ee': 'hoodie.webp',
};
const blob = (id) => asset('/img/' + (BLOB[id] || id));
/* eslint-disable */
// Логика экрана, перенесённая из дизайн-макета (canvas). self = { state, setState, props }.
export const tick = false;

export function vals(self) {
  const st = self.state || {};
  const cat = st.cat ?? 'all';
  const all = [
    { name: 'Домашняя джерси 2024/25', price: '24 990 ₸', badge: 'Новое', tone: 'new', c: 'kit', photo: blob('2f7305bce77367049cd8639226678a7b') },
    { name: 'Кружка «Ордабасы»', price: '6 990 ₸', badge: 'Хит продаж', tone: 'hit', c: 'acc', photo: blob('45a77801c66e8a02023d98ffdc0f3641') },
    { name: 'Спортивное худи (синее)', price: '18 990 ₸', badge: '', tone: '', c: 'wear', photo: blob('941d5fa33c25469c18bc36d52fadc5ee') },
    { name: 'Шарф болельщика ORDA', price: '7 990 ₸', badge: '', tone: '', c: 'acc', photo: '', href: 'ProductNoPhoto.dc.html' },
    { name: 'Тренировочный комплект', price: '21 990 ₸', badge: '', tone: '', c: 'kit', photo: blob('3567dd74e0e12b90534d956c94fee54a') },
    { name: 'Зимняя куртка клуба', price: '34 990 ₸', badge: '', tone: '', c: 'wear', photo: blob('08afe8a040f25cc1ddaa650f2e960143') },
    { name: 'Рюкзак с логотипом', price: '14 990 ₸', badge: '', tone: '', c: 'acc', photo: blob('7d7e72eeb47455c24a3a0c474a0baf0c') },
    { name: 'Флаг болельщика 1,5 м', price: '4 990 ₸', badge: '', tone: '', c: 'acc', photo: blob('42132e9425566cbb39dfc39dbb8cbefe') },
  ];
  const C = [
    ['all', 'Все товары'],
    ['kit', 'Форма'],
    ['wear', 'Одежда'],
    ['acc', 'Аксессуары'],
  ];
  const list = all.filter((p) => cat === 'all' || p.c === cat);
  const n = list.length;
  return {
    yes: true,
    cats: C.map(([id, label]) => ({
      label,
      n: String(id === 'all' ? all.length : all.filter((p) => p.c === id).length),
      bg: id === cat ? '#172A51' : 'transparent',
      fg: id === cat ? '#FFFFFF' : '#172A51',
      w: id === cat ? 700 : 500,
      count: id === cat ? '#7CC6E9' : '#5B6B8C',
      pick: () => self.setState({ cat: id }),
    })),
    countLabel: n + ' ' + (n === 1 ? 'товар' : n < 5 ? 'товара' : 'товаров'),
    products: list.map((p) => ({
      ...p,
      href: p.href || 'WebProduct.dc.html',
      hasPhoto: !!p.photo,
      noPhoto: !p.photo,
      mediaBg: p.photo ? '#F7FAFC' : '#EEF3F8',
      isNew: p.tone === 'new',
      isHit: p.tone === 'hit',
    })),
  };
}
