import { asset } from '@/lib/asset';

const BLOB = {
  '1ea5bd152c7e4e312fc1be4cf9678acd': 'club-tobyl.webp',
  '4d67ab61286e744506c62d829f1e53db': 'crest.png',
  '5cc82d38a94b6843191f09c25fcd5f6c': 'club-kairat.webp',
  e870cd650ed647fdb24d5a26e1d0d2d1: 'club-astana.webp',
};
const blob = (id) => asset('/img/' + (BLOB[id] || id));
/* eslint-disable */
// Логика экрана, перенесённая из дизайн-макета (canvas). self = { state, setState, props }.
export const tick = true;

export function vals(self) {
  const st = self.state || {};
  const tab = st.tab ?? self.props.tab ?? 'schedule';
  const C = {
    Ордабасы: blob('4d67ab61286e744506c62d829f1e53db'),
    Тобыл: blob('1ea5bd152c7e4e312fc1be4cf9678acd'),
    Кайрат: blob('5cc82d38a94b6843191f09c25fcd5f6c'),
    Астана: blob('e870cd650ed647fdb24d5a26e1d0d2d1'),
  };
  const team = (name, short) => ({
    name,
    short: short || name.slice(0, 2).toUpperCase(),
    img: C[name] || '',
    noImg: !C[name],
    weight: name === 'Ордабасы' ? 700 : 500,
  });
  const ORDA = team('Ордабасы', 'ОР');
  const pad = (n) => String(n).padStart(2, '0');
  const s = Math.floor(Math.max(0, new Date('2026-10-25T19:00:00+05:00').getTime() - self.now) / 1000);
  const countdown = [
    { v: pad(Math.floor(s / 86400)), u: 'дн' },
    { v: pad(Math.floor(s / 3600) % 24), u: 'ч' },
    { v: pad(Math.floor(s / 60) % 60), u: 'мин' },
    { v: pad(s % 60), u: 'сек' },
  ];
  const filter = st.filter ?? 'all';
  const rem = st.rem || { m2: true };
  const up = [
    { id: 'm2', month: 'Ноябрь', round: '26 тур', date: 'Сб, 1 ноября', time: '17:00', city: 'Костанай', home: false, h: team('Тобыл'), a: ORDA },
    { id: 'm3', month: 'Ноябрь', round: '27 тур', date: 'Вс, 9 ноября', time: '15:00', city: 'Шымкент', home: true, h: ORDA, a: team('Астана') },
    { id: 'm4', month: 'Ноябрь', round: 'Кубок, 1/2', date: 'Ср, 19 ноября', time: '18:00', city: 'Шымкент', home: true, h: ORDA, a: team('Актобе', 'АК') },
  ]
    .filter((m) => filter === 'all' || (filter === 'home' ? m.home : !m.home))
    .map((m) => {
      const on = !!rem[m.id];
      return {
        ...m,
        away: !m.home,
        venue: m.home ? 'Дома' : 'В гостях',
        venueBg: m.home ? '#E7F5FB' : '#FFFFFF',
        venueColor: m.home ? '#0B7DB0' : '#5B6B8C',
        remIcon: on ? 'tick-02' : 'notification-01',
        remLabel: on ? 'Напомним' : 'Напомнить',
        remBg: on ? '#E7F5FB' : '#FFFFFF',
        remBorder: on ? '#E7F5FB' : '#DCE3EE',
        remColor: on ? '#0B7DB0' : '#172A51',
        toggle: () => self.setState({ rem: { ...rem, [m.id]: !on } }),
      };
    });
  const group = (list) => {
    const out = [];
    list.forEach((m) => {
      let g = out.find((x) => x.name === m.month);
      if (!g) {
        g = { name: m.month, items: [] };
        out.push(g);
      }
      g.items.push(m);
    });
    return out;
  };
  const res = (o, sc) => {
    const [x, y] = sc.split(':').map(Number);
    const me = o.home ? x : y,
      op = o.home ? y : x;
    const r = me > op ? ['Победа', '#0B7DB0', '#FFFFFF'] : me === op ? ['Ничья', '#E3EAF3', '#172A51'] : ['Поражение', '#FDECEE', '#C8040F'];
    return { ...o, score: x + ' : ' + y, res: r[0], resBg: r[1], resColor: r[2] };
  };
  const past = [
    res(
      {
        month: 'Октябрь',
        round: '24 тур',
        date: '19 октября',
        home: true,
        h: ORDA,
        a: team('Елимай', 'ЕЛ'),
        scorers: 'Э. Астанов 23’, Натель 61’, Мораес 88’',
      },
      '3:1',
    ),
    res({ month: 'Октябрь', round: '23 тур', date: '5 октября', home: false, h: team('Кызылжар', 'КЖ'), a: ORDA, scorers: 'Вакулко 47’' }, '1:1'),
    res({ month: 'Сентябрь', round: '22 тур', date: '28 сентября', home: true, h: ORDA, a: team('Жетысу', 'ЖТ'), scorers: 'Мораес 12’, 54’' }, '2:0'),
    res({ month: 'Сентябрь', round: '21 тур', date: '21 сентября', home: false, h: team('Кайрат'), a: ORDA, scorers: 'Капацина 70’' }, '2:1'),
    res(
      { month: 'Сентябрь', round: '20 тур', date: '14 сентября', home: true, h: ORDA, a: team('Атырау', 'АТ'), scorers: 'Натель 9’, Э. Астанов 34’ (пен.)' },
      '2:0',
    ),
  ];
  const fl = { Победа: ['В', '#0B7DB0', '#FFFFFF'], Ничья: ['Н', '#E3EAF3', '#172A51'], Поражение: ['П', '#FDECEE', '#C8040F'] };
  const rows = [
    ['Ордабасы', 'ОР', 16, 5, 3, 27],
    ['Кайрат', 'КА', 15, 5, 4, 19],
    ['Астана', 'АС', 13, 6, 5, 14],
    ['Тобыл', 'ТО', 12, 6, 6, 9],
    ['Актобе', 'АК', 11, 6, 7, 6],
    ['Елимай', 'ЕЛ', 10, 7, 7, 3],
    ['Жетысу', 'ЖТ', 9, 7, 8, 0],
    ['Кызылжар', 'КЖ', 9, 5, 10, -3],
    ['Атырау', 'АТ', 8, 6, 10, -5],
    ['Женис', 'ЖН', 7, 7, 10, -6],
    ['Кайсар', 'КС', 6, 8, 10, -9],
    ['Улытау', 'УЛ', 6, 5, 13, -14],
    ['Окжетпес', 'ОК', 5, 5, 14, -17],
    ['Каспий', 'КП', 3, 6, 15, -24],
  ];
  const table = rows.map((r, i) => {
    const me = r[0] === 'Ордабасы';
    const img = C[r[0]] || '';
    return {
      pos: i + 1,
      name: r[0],
      short: r[1],
      img,
      noImg: !img,
      p: r[2] + r[3] + r[4],
      w: r[2],
      d: r[3],
      l: r[4],
      gd: (r[5] > 0 ? '+' : '') + r[5],
      pts: r[2] * 3 + r[3],
      bg: me ? '#E7F5FB' : '#FFFFFF',
      weight: me ? 700 : 500,
      ptsColor: me ? '#0B7DB0' : '#172A51',
      posColor: me ? '#172A51' : '#5B6B8C',
      zone: i === 0 ? '#129ED9' : i < 3 ? '#7CC6E9' : i >= 12 ? '#E30512' : 'transparent',
    };
  });
  const T = [
    ['schedule', 'Расписание'],
    ['results', 'Результаты'],
    ['table', 'Таблица'],
  ];
  return {
    yes: true,
    tabs: T.map(([id, label]) => ({
      label,
      sel: id === tab ? 'true' : 'false',
      bg: id === tab ? '#FFFFFF' : 'rgba(255, 255, 255, 0.08)',
      fg: id === tab ? '#172A51' : '#CFE3F2',
      w: id === tab ? 700 : 500,
      pick: () => self.setState({ tab: id }),
    })),
    isSchedule: tab === 'schedule',
    isResults: tab === 'results',
    isTable: tab === 'table',
    filters: [
      ['all', 'Все'],
      ['home', 'Дома'],
      ['away', 'В гостях'],
    ].map(([id, label]) => ({
      label,
      pressed: filter === id ? 'true' : 'false',
      bg: filter === id ? '#172A51' : '#E3EAF3',
      color: filter === id ? '#FFFFFF' : '#172A51',
      weight: filter === id ? 700 : 500,
      pick: () => self.setState({ filter: id }),
    })),
    countdown,
    months: group(up),
    resultMonths: group(past),
    form: past
      .slice()
      .reverse()
      .map((m) => ({ l: fl[m.res][0], bg: fl[m.res][1], color: fl[m.res][2] })),
    table,
  };
}
