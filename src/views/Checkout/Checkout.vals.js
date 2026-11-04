/* eslint-disable */
// Логика экрана, перенесённая из дизайн-макета (canvas). self = { state, setState, props }.
export const tick = false;

export function vals(self) {
  const s = self.state || {};
  const fees = { pickup: 0, courier: 1500, post: 2500 };
  const ship = s.ship ?? 'pickup';
  const agree = s.agree ?? false;
  const fmt = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₸';
  const ids = Object.keys(fees);
  const by = (f) => Object.fromEntries(ids.map((k) => [k, f(k === ship, k)]));
  return {
    yes: true,
    on: by((on) => String(on)),
    border: by((on) => (on ? '#129ED9' : '#FFFFFF')),
    ring: by((on) => (on ? '#129ED9' : '#8391AD')),
    dot: by((on) => (on ? '#129ED9' : 'transparent')),
    pick: by((_, k) => () => self.setState({ ship: k })),
    feeLabel: fees[ship] ? fmt(fees[ship]) : 'Бесплатно',
    total: fmt(24990 + fees[ship]),
    agree,
    agreeStr: String(agree),
    toggle: () => self.setState({ agree: !agree }),
    locked: String(!agree),
    boxBorder: agree ? '#0B7DB0' : '#8391AD',
    boxBg: agree ? '#0B7DB0' : '#FFFFFF',
    payHref: agree ? 'WebCheckoutPaid.dc.html' : '#',
    payBg: agree ? '#129ED9' : 'rgba(255, 255, 255, 0.12)',
    payFg: agree ? '#FFFFFF' : '#A9BCD6',
    hint: agree ? 'Оплата на защищённой странице Halyk Bank' : 'Отметьте согласие с офертой, чтобы перейти к оплате',
    hintColor: agree ? '#A9BCD6' : '#FF8A8F',
  };
}
