import { asset } from '@/lib/asset';

const BLOB = {
  '25e29e12f7f93b02c8537aebe1770bd0': 'team-cutout.webp',
  '422b1260a83e7661a19f69e845f35b78': 'player-shaizada.webp',
  '8634a54b8936feceb41e130402de2636': 'media-natel.webp',
  aeb7cf2c19d2c9d049e515305eb0636c: 'player-amir.webp',
  b6ab680e70d11388a1dfd6d58b9e062a: 'people/amanovich.webp',
};
const blob = (id) => asset('/img/' + (BLOB[id] || id));
/* eslint-disable */
// Логика экрана, перенесённая из дизайн-макета (canvas). self = { state, setState, props }.
export const tick = false;

export function vals(self) {
  const pl = (num, name, role, id) => ({ num, name, role, photo: blob(id), href: 'WebPlayer.dc.html' });
  return {
    yes: true,
    players: [
      pl('15', 'Жасулан Әмір', 'Защитник', 'aeb7cf2c19d2c9d049e515305eb0636c'),
      pl('55', 'Алекса Аманович', 'Защитник', 'b6ab680e70d11388a1dfd6d58b9e062a'),
      pl('19', 'Леонардо Натель', 'Нападающий', '8634a54b8936feceb41e130402de2636'),
      pl('1', 'Бекхан Шайзада', 'Вратарь', '422b1260a83e7661a19f69e845f35b78'),
      pl('11', 'Юрий Вакулко', 'Полузащитник', '25e29e12f7f93b02c8537aebe1770bd0'),
    ],
  };
}
