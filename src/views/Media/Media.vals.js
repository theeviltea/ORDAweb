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
    { title: 'Состав на матч с «Кайратом» объявлен', meta: 'Сегодня', tag: 'team', tagLabel: 'Команда', img: blob('91c0078186a4de355c825a6165877934') },
    { title: 'Новая домашняя форма представлена', meta: 'Вчера', tag: 'club', tagLabel: 'Клуб', img: blob('0745645d2aecce7d63ebe81f3d5ad107') },
    {
      title: 'Новый нападающий подписал контракт с клубом',
      meta: '31 июля',
      tag: 'transfer',
      tagLabel: 'Трансферы',
      img: blob('976f007ac43f66a04e4744a32d9a984c'),
    },
    { title: 'Продажа билетов на ответный матч квалификации', meta: '30 июля', tag: 'match', tagLabel: 'Матчи', img: blob('f8ea0e318b414cca2faba5731dac4d2e') },
  ];
  const map = { all: null, match: 'match', club: 'club', players: 'team', transfer: 'transfer' };
  const reminded = !!st.reminded;
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
      bg: id === chip ? '#172A51' : '#E3EAF3',
      fg: id === chip ? '#FFFFFF' : '#172A51',
      w: id === chip ? 700 : 500,
      pick: () => self.setState({ chip: id }),
    })),
    news: map[chip] ? all.filter((n) => n.tag === map[chip]) : all,
    reminded,
    notReminded: !reminded,
    toggleRemind: () => self.setState({ reminded: !reminded }),
  };
}
