import { asset } from '@/lib/asset';

const BLOB = {
  '0745645d2aecce7d63ebe81f3d5ad107': 'news-trio.webp',
  '91c0078186a4de355c825a6165877934': 'news-lineup.webp',
  '976f007ac43f66a04e4744a32d9a984c': 'news-shout.webp',
  f8ea0e318b414cca2faba5731dac4d2e: 'news-stadium.webp',
};
const blob = (id) => asset('/img/' + (BLOB[id] || id));
/* eslint-disable */
// Логика экрана, перенесённая из дизайн-макета (canvas). self = { state, setState, props }.
export const tick = false;

export function vals(self) {
  const st = self.state || {};
  const chip = st.chip ?? 'all';
  const all = [
    {
      title: 'Состав на матч с «Кайратом» объявлен',
      lead: 'Главный тренер определился с составом на ключевой матч 25-го тура.',
      meta: 'Сегодня · 2 мин',
      tag: 'team',
      tagLabel: 'Команда',
      img: blob('91c0078186a4de355c825a6165877934'),
      pos: 'center 30%',
    },
    {
      title: 'Новая домашняя форма представлена',
      lead: 'Клуб показал комплект, в котором команда проведёт домашние матчи сезона.',
      meta: 'Вчера · 3 мин',
      tag: 'club',
      tagLabel: 'Клуб',
      img: blob('0745645d2aecce7d63ebe81f3d5ad107'),
      pos: 'center',
    },
    {
      title: 'Новый нападающий подписал контракт с клубом',
      lead: 'Усиление атаки перед вторым кругом: подробности соглашения.',
      meta: '31 июля · 3 мин',
      tag: 'transfer',
      tagLabel: 'Трансферы',
      img: blob('976f007ac43f66a04e4744a32d9a984c'),
      pos: 'center 25%',
    },
    {
      title: 'Продажа билетов на ответный матч квалификации',
      lead: 'Как купить билеты и когда открываются ворота стадиона.',
      meta: '30 июля · 2 мин',
      tag: 'match',
      tagLabel: 'Матчи',
      img: blob('f8ea0e318b414cca2faba5731dac4d2e'),
      pos: 'center',
    },
  ];
  const map = { all: null, match: 'match', club: 'club', players: 'team', transfer: 'transfer' };
  const f = map[chip];
  const news = f ? all.filter((n) => n.tag === f) : all;
  return {
    yes: true,
    chips: [
      ['all', 'Все'],
      ['match', 'Матчи'],
      ['club', 'Клуб'],
      ['players', 'Игроки'],
      ['transfer', 'Трансферы'],
    ].map(([id, label]) => ({
      label,
      sel: id === chip ? 'true' : 'false',
      bg: id === chip ? '#FFFFFF' : 'rgba(255, 255, 255, 0.08)',
      fg: id === chip ? '#172A51' : '#CFE3F2',
      w: id === chip ? 700 : 500,
      pick: () => self.setState({ chip: id }),
    })),
    news,
    none: news.length === 0,
    showFeatured: chip === 'all' || chip === 'match',
  };
}
