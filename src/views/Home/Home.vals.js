import { asset } from '@/lib/asset';

const BLOB = {
  '422b1260a83e7661a19f69e845f35b78': 'player-shaizada.webp',
  '451a65d4c728c0c123a8b6ee77c6feaf': 'player-astanov.webp',
  '8634a54b8936feceb41e130402de2636': 'media-natel.webp',
  aeb7cf2c19d2c9d049e515305eb0636c: 'player-amir.webp',
  b6ab680e70d11388a1dfd6d58b9e062a: 'people/amanovich.webp',
};
const blob = (id) => asset('/img/' + (BLOB[id] || id));
/* eslint-disable */
// Логика экрана, перенесённая из дизайн-макета (canvas). self = { state, setState, props }.
export const tick = false;

export function vals(self) {
  return {
    players: [
      { num: '10', name: 'Эльхан Астанов', role: 'Полузащитник', photo: blob('451a65d4c728c0c123a8b6ee77c6feaf'), href: 'WebPlayer.dc.html' },
      { num: '15', name: 'Жасулан Әмір', role: 'Защитник', photo: blob('aeb7cf2c19d2c9d049e515305eb0636c'), href: 'WebPlayer.dc.html' },
      { num: '55', name: 'Алекса Аманович', role: 'Защитник', photo: blob('b6ab680e70d11388a1dfd6d58b9e062a'), href: 'WebPlayer.dc.html' },
      { num: '19', name: 'Леонардо Натель', role: 'Нападающий', photo: blob('8634a54b8936feceb41e130402de2636'), href: 'WebPlayer.dc.html' },
      { num: '1', name: 'Бекхан Шайзада', role: 'Вратарь', photo: blob('422b1260a83e7661a19f69e845f35b78'), href: 'WebPlayer.dc.html' },
    ],
  };
}
