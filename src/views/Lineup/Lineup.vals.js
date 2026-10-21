import { asset } from '@/lib/asset';

const BLOB = {
  '159d9745d2d0b444c11fc086ce10a61d': 'people/turganov.webp',
  '1dabea0bfc66402b80bc57bfae6ff6dc': 'people/kapacina.webp',
  '21868d0c8a32204dd8e472307667ac20': 'people/kilama.webp',
  '25e29e12f7f93b02c8537aebe1770bd0': 'team-cutout.webp',
  '30b8215a92c4f1d7c4e47b0753716e09': 'media-astanov.webp',
  '422b1260a83e7661a19f69e845f35b78': 'player-shaizada.webp',
  '451a65d4c728c0c123a8b6ee77c6feaf': 'player-astanov.webp',
  '4cdda45ca5bb961b065c445a61b6a1f1': 'people/zhaksybaev.webp',
  '5d1d1b954a6f0c7f4f28a2cdacdcfcd5': 'people/antich.webp',
  '752cbff1c8cdc1227a967f8e3030f082': 'people/b-toktybay.webp',
  '7b88d41674151e557c2267805e2ddea2': 'people/naumets.webp',
  '8634a54b8936feceb41e130402de2636': 'media-natel.webp',
  '97c87d8b2a6f96bbd16876c08dbf0ca0': 'people/sultaniyazov.webp',
  '9b8bd489ef054cda2b9afa0aec10f3b6': 'people/abagna.webp',
  '9dd4d211b896b1265fcfa9fa2f142d36': 'media-toktybay.webp',
  aa533890f0a1ed6237a8d575a4e41040: 'people/khalmatov.webp',
  aeb7cf2c19d2c9d049e515305eb0636c: 'player-amir.webp',
  b688973c9b1b25e7f35958842f7ad93b: 'player-moraes.webp',
  c0dbc1d099b4f36b40a80d9c9761deb9: 'people/tolepbergen.webp',
};
const blob = (id) => asset('/img/' + (BLOB[id] || id));
/* eslint-disable */
// Логика экрана, перенесённая из дизайн-макета (canvas). self = { state, setState, props }.
export const tick = false;

export function vals(self) {
  const xi = [
    ['19', 'Натель', 'Леонардо Натель', 'Нападающий', '8634a54b8936feceb41e130402de2636', '20%', '6%'],
    ['9', 'Мораес', 'Эвертон Мораес', 'Нападающий', 'b688973c9b1b25e7f35958842f7ad93b', '50%', '2%'],
    ['11', 'Вакулко', 'Юрий Вакулко', 'Полузащитник', '25e29e12f7f93b02c8537aebe1770bd0', '80%', '6%'],
    ['17', 'Султаниязов', 'Зикрилло Султаниязов', 'Полузащитник', '97c87d8b2a6f96bbd16876c08dbf0ca0', '22%', '31%'],
    ['10', 'Э. Астанов', 'Эльхан Астанов', 'Полузащитник', '451a65d4c728c0c123a8b6ee77c6feaf', '50%', '27%', true],
    ['16', 'Капацина', 'Кристиан-Михай Капацина', 'Полузащитник', '1dabea0bfc66402b80bc57bfae6ff6dc', '78%', '31%'],
    ['15', 'Әмір', 'Жасулан Әмір', 'Защитник', 'aeb7cf2c19d2c9d049e515305eb0636c', '13%', '56%'],
    ['5', 'Антич', 'Никола Антич', 'Защитник', '5d1d1b954a6f0c7f4f28a2cdacdcfcd5', '37%', '60%'],
    ['3', 'Килама', 'Ги-Марселин Килама', 'Защитник', '21868d0c8a32204dd8e472307667ac20', '63%', '60%'],
    ['22', 'С. Астанов', 'Султанбек Астанов', 'Защитник', '30b8215a92c4f1d7c4e47b0753716e09', '87%', '56%'],
    ['1', 'Шайзада', 'Бекхан Шайзада', 'Вратарь', '422b1260a83e7661a19f69e845f35b78', '50%', '82%'],
  ].map(([num, short, name, role, id, x, y, cap]) => ({ num, short, name, role, photo: blob(id), x, y, cap: !!cap }));
  const order = ['Вратарь', 'Защитник', 'Полузащитник', 'Нападающий'];
  const list = xi
    .slice()
    .sort((a, b) => order.indexOf(a.role) - order.indexOf(b.role))
    .map((p, i, arr) => ({ ...p, line: i === arr.length - 1 ? 'transparent' : '#EEF3F8' }));
  const bench = [
    ['13', 'Толепберген', 'c0dbc1d099b4f36b40a80d9c9761deb9'],
    ['14', 'Турганов', '159d9745d2d0b444c11fc086ce10a61d'],
    ['8', 'Жаксыбаев', '4cdda45ca5bb961b065c445a61b6a1f1'],
    ['23', 'Халматов', 'aa533890f0a1ed6237a8d575a4e41040'],
    ['21', 'Б. Токтыбай', '752cbff1c8cdc1227a967f8e3030f082'],
    ['20', 'М. Токтыбай', '9dd4d211b896b1265fcfa9fa2f142d36'],
    ['7', 'Наумец', '7b88d41674151e557c2267805e2ddea2'],
    ['77', 'Абагна', '9b8bd489ef054cda2b9afa0aec10f3b6'],
  ].map(([num, short, id]) => ({ num, short, photo: blob(id) }));
  return { yes: true, xi, list, bench, benchCount: String(bench.length) };
}
