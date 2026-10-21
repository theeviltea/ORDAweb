/* eslint-disable */
// Логика экрана, перенесённая из дизайн-макета (canvas). self = { state, setState, props }.
export const tick = false;

export function vals(self) {
  const st = self.state || {};
  const sec = st.sec ?? self.props.section ?? 'overview';
  const go = (id) => () => self.setState({ sec: id });
  const N = [
    ['overview', 'Обзор', 'dashboard-square-01', ''],
    ['tickets', 'Мои билеты', 'ticket-01', '1'],
    ['orders', 'Покупки', 'shopping-bag-02', '12'],
    ['achievements', 'Достижения', 'champion', '3'],
    ['data', 'Личные данные', 'user', ''],
    ['settings', 'Настройки', 'settings-01', ''],
  ];
  const tg = st.tg || { m1: true, m2: true, m3: false, c1: true, c2: true, c3: true };
  const T = [
    ['m1', 'Напоминания о матчах', 'За день и за час до начала'],
    ['m2', 'Голы и счёт', 'В прямом эфире во время игры'],
    ['m3', 'Составы', 'Когда клуб объявит состав'],
    ['c1', 'Новости клуба', 'Главные события и интервью'],
    ['c2', 'Предложения', 'Билеты, магазин и скидки'],
    ['c3', 'Баллы и награды', 'Начисления и новые уровни'],
  ];
  const lang = st.lang ?? 'ru';
  const vals = {
    yes: true,
    toOverview: go('overview'),
    goTickets: go('tickets'),
    goOrders: go('orders'),
    goAch: go('achievements'),
    nav: N.map(([id, label, icon, badge]) => {
      const on = id === sec;
      return {
        label,
        icon,
        badge,
        current: on ? 'page' : 'false',
        bg: on ? '#172A51' : 'transparent',
        fg: on ? '#FFFFFF' : '#172A51',
        w: on ? 700 : 500,
        iconBg: on ? 'rgba(255, 255, 255, 0.12)' : '#F2F6FA',
        iconFg: on ? '#7CC6E9' : '#172A51',
        badgeFg: on ? '#7CC6E9' : '#5B6B8C',
        pick: go(id),
      };
    }),
    toggles: T.map(([id, title, sub]) => {
      const on = !!tg[id];
      return {
        title,
        sub,
        on: on ? 'true' : 'false',
        track: on ? '#0B7DB0' : '#DCE3EE',
        knob: on ? '23px' : '3px',
        flip: () => self.setState({ tg: { ...tg, [id]: !on } }),
      };
    }),
    langs: [
      ['kz', 'Қазақша'],
      ['ru', 'Русский'],
      ['en', 'English'],
    ].map(([id, label]) => ({
      label,
      pressed: id === lang ? 'true' : 'false',
      bg: id === lang ? '#172A51' : '#FFFFFF',
      fg: id === lang ? '#FFFFFF' : '#172A51',
      border: id === lang ? '#172A51' : '#DCE3EE',
      pick: () => self.setState({ lang: id }),
    })),
  };
  N.forEach(([id]) => {
    vals['is_' + id] = id === sec;
  });
  return vals;
}
