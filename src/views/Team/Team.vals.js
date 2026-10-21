import { asset } from '@/lib/asset';

const BLOB = {
  '01d1ae1df5c99d4f3d5d9685a4789895': 'people/abdukhalyk.webp',
  '159d9745d2d0b444c11fc086ce10a61d': 'people/turganov.webp',
  '1dabea0bfc66402b80bc57bfae6ff6dc': 'people/kapacina.webp',
  '21868d0c8a32204dd8e472307667ac20': 'people/kilama.webp',
  '25e29e12f7f93b02c8537aebe1770bd0': 'team-cutout.webp',
  '2c899b6c722819a4d0538052fd407b16': 'people/sabdenov.webp',
  '30b8215a92c4f1d7c4e47b0753716e09': 'media-astanov.webp',
  '422b1260a83e7661a19f69e845f35b78': 'player-shaizada.webp',
  '451a65d4c728c0c123a8b6ee77c6feaf': 'player-astanov.webp',
  '494649d1eb1b34e992a10eb41bbd4140': 'people/reshitka.webp',
  '4cdda45ca5bb961b065c445a61b6a1f1': 'people/zhaksybaev.webp',
  '4e813d86d7e5b596c5bb1bf929fcaee6': 'people/kunkhodzhaev.webp',
  '5733046afe6376c07089e1deb6b19313': 'people/nota.webp',
  '5d1d1b954a6f0c7f4f28a2cdacdcfcd5': 'people/antich.webp',
  '7264806ff5639022a034650435efbaf0': 'people/zaitsev.webp',
  '752cbff1c8cdc1227a967f8e3030f082': 'people/b-toktybay.webp',
  '7b88d41674151e557c2267805e2ddea2': 'people/naumets.webp',
  '8454250d8389679a1c8aec8f2c44c54b': 'people/mitkov.webp',
  '8634a54b8936feceb41e130402de2636': 'media-natel.webp',
  '90ef7da37daa96af49321004e26f586d': 'people/zhanibekov.webp',
  '97c87d8b2a6f96bbd16876c08dbf0ca0': 'people/sultaniyazov.webp',
  '98075290ddb2f982f373801140e82dea': 'people/martin.webp',
  '999921f85c3e900d66bf490d51c32383': 'people/romanenko.webp',
  '9b8bd489ef054cda2b9afa0aec10f3b6': 'people/abagna.webp',
  '9dd4d211b896b1265fcfa9fa2f142d36': 'media-toktybay.webp',
  a0384ec7bcf410311da0713d532d54c4: 'people/silva.webp',
  a3e0b92ff2f170cbc3966a1b56646ff0: 'people/derbisbaev.webp',
  aa533890f0a1ed6237a8d575a4e41040: 'people/khalmatov.webp',
  aaa4e889bc3b85f0d772473e11328ca1: 'people/ergebekov.webp',
  aeb7cf2c19d2c9d049e515305eb0636c: 'player-amir.webp',
  b688973c9b1b25e7f35958842f7ad93b: 'player-moraes.webp',
  b6ab680e70d11388a1dfd6d58b9e062a: 'people/amanovich.webp',
  c0dbc1d099b4f36b40a80d9c9761deb9: 'people/tolepbergen.webp',
  d72975a3e2755d873fd0b01f58461080: 'people/maly.webp',
  f6e980028e2ebd8bc0006833637f4a09: 'people/smatulla.webp',
};
const blob = (id) => asset('/img/' + (BLOB[id] || id));
/* eslint-disable */
// Логика экрана, перенесённая из дизайн-макета (canvas). self = { state, setState, props }.
export const tick = false;

export function vals(self) {
  const st = self.state || {};
  const cur = st.team ?? 'main';
  const pl = (num, name, role, id) => ({ num, name, role, photo: blob(id), href: 'Player.dc.html' });
  const sf = (name, role, id) => ({ num: '', name, role, photo: blob(id), href: 'WebTeam.dc.html' });
  const g = (id, title, people) => ({ id, title, people, anchor: '#' + id, count: String(people.length) });
  const players = [
    g('goalkeepers', 'Вратари', [
      pl('1', 'Бекхан Шайзада', 'Вратарь', '422b1260a83e7661a19f69e845f35b78'),
      pl('13', 'Кажымукан Толепберген', 'Вратарь', 'c0dbc1d099b4f36b40a80d9c9761deb9'),
      pl('24', 'Аян Абдухалык', 'Вратарь', '01d1ae1df5c99d4f3d5d9685a4789895'),
    ]),
    g('defenders', 'Защитники', [
      pl('3', 'Ги-Марселин Килама', 'Защитник', '21868d0c8a32204dd8e472307667ac20'),
      pl('5', 'Никола Антич', 'Защитник', '5d1d1b954a6f0c7f4f28a2cdacdcfcd5'),
      pl('8', 'Улар Жаксыбаев', 'Защитник', '4cdda45ca5bb961b065c445a61b6a1f1'),
      pl('14', 'Али Турганов', 'Защитник', '159d9745d2d0b444c11fc086ce10a61d'),
      pl('15', 'Жасулан Әмір', 'Защитник', 'aeb7cf2c19d2c9d049e515305eb0636c'),
      pl('22', 'Султанбек Астанов', 'Защитник', '30b8215a92c4f1d7c4e47b0753716e09'),
      pl('25', 'Сергей Малый', 'Защитник', 'd72975a3e2755d873fd0b01f58461080'),
      pl('55', 'Алекса Аманович', 'Защитник', 'b6ab680e70d11388a1dfd6d58b9e062a'),
    ]),
    g('midfielders', 'Полузащитники', [
      pl('10', 'Эльхан Астанов', 'Полузащитник', '451a65d4c728c0c123a8b6ee77c6feaf'),
      pl('11', 'Юрий Вакулко', 'Полузащитник', '25e29e12f7f93b02c8537aebe1770bd0'),
      pl('16', 'Кристиан-Михай Капацина', 'Полузащитник', '1dabea0bfc66402b80bc57bfae6ff6dc'),
      pl('17', 'Зикрилло Султаниязов', 'Полузащитник', '97c87d8b2a6f96bbd16876c08dbf0ca0'),
      pl('21', 'Биржан Токтыбай', 'Полузащитник', '752cbff1c8cdc1227a967f8e3030f082'),
      pl('23', 'Муроджон Халматов', 'Полузащитник', 'aa533890f0a1ed6237a8d575a4e41040'),
      pl('77', 'Давид Абагна', 'Полузащитник', '9b8bd489ef054cda2b9afa0aec10f3b6'),
    ]),
    g('forwards', 'Нападающие', [
      pl('7', 'Владислав Наумец', 'Нападающий', '7b88d41674151e557c2267805e2ddea2'),
      pl('9', 'Эвертон Мораес', 'Нападающий', 'b688973c9b1b25e7f35958842f7ad93b'),
      pl('19', 'Леонардо Натель', 'Нападающий', '8634a54b8936feceb41e130402de2636'),
      pl('20', 'Магжан Токтыбай', 'Нападающий', '9dd4d211b896b1265fcfa9fa2f142d36'),
      pl('45', 'Димитар Митков', 'Нападающий', '8454250d8389679a1c8aec8f2c44c54b'),
    ]),
  ];
  const staff = [
    g('coaches', 'Тренерский штаб', [
      sf('Андрей Мартин', 'Главный тренер', '98075290ddb2f982f373801140e82dea'),
      sf('Марчел Решитка', 'Ассистент главного тренера', '494649d1eb1b34e992a10eb41bbd4140'),
      sf('Фархад Жанибеков', 'Ассистент главного тренера', '90ef7da37daa96af49321004e26f586d'),
      sf('Игорь Зайцев', 'Ассистент главного тренера', '7264806ff5639022a034650435efbaf0'),
      sf('Денис Романенко', 'Тренер вратарей', '999921f85c3e900d66bf490d51c32383'),
      sf('Луиш Альберту да Силва', 'Тренер по физподготовке', 'a0384ec7bcf410311da0713d532d54c4'),
    ]),
    g('personnel', 'Административный персонал', [
      sf('Николай Нота', 'Врач', '5733046afe6376c07089e1deb6b19313'),
      sf('Ербол Сабденов', 'Врач', '2c899b6c722819a4d0538052fd407b16'),
      sf('Кайратали Кунходжаев', 'Массажист', '4e813d86d7e5b596c5bb1bf929fcaee6'),
      sf('Досхан Сматулла', 'Массажист', 'f6e980028e2ebd8bc0006833637f4a09'),
      sf('Самат Дербисбаев', 'Администратор', 'a3e0b92ff2f170cbc3966a1b56646ff0'),
      sf('Ерлан Ергебеков', 'Администратор', 'aaa4e889bc3b85f0d772473e11328ca1'),
    ]),
  ];
  const T = [
    { id: 'main', title: 'Основной состав', tag: 'Премьер-лига', note: '23 игрока · 12 в штабе', league: 'Премьер-лига Казахстана' },
    { id: 'youth', title: 'Молодёжная', tag: 'Скоро', note: 'Состав готовится', league: 'Уточняется' },
    { id: 'women', title: 'Женская', tag: 'Скоро', note: 'Состав готовится', league: 'Уточняется' },
    { id: 'academy', title: 'Академия U-17', tag: 'Скоро', note: 'Состав готовится', league: 'Уточняется' },
  ];
  const curT = T.find((t) => t.id === cur) || T[0];
  return {
    yes: true,
    isMain: cur === 'main',
    isOther: cur !== 'main',
    cur: curT,
    toMain: () => self.setState({ team: 'main' }),
    teams: T.map((t) => {
      const on = t.id === cur;
      return {
        ...t,
        sel: on ? 'true' : 'false',
        bg: on ? '#FFFFFF' : 'rgba(255, 255, 255, 0.06)',
        fg: on ? '#172A51' : '#FFFFFF',
        border: on ? '#FFFFFF' : 'rgba(255, 255, 255, 0.16)',
        sub: on ? '#5B6B8C' : '#A9BCD6',
        tagBg: t.id === 'main' ? (on ? '#E7F5FB' : 'rgba(18, 158, 217, 0.25)') : on ? '#F2F6FA' : 'rgba(255, 255, 255, 0.1)',
        tagFg: t.id === 'main' ? (on ? '#0B7DB0' : '#BFE3F4') : on ? '#5B6B8C' : '#CFE3F2',
        pick: () => self.setState({ team: t.id }),
      };
    }),
    players,
    staff,
  };
}
