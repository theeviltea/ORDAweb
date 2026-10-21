/* eslint-disable */
// Логика экрана, перенесённая из дизайн-макета (canvas). self = { state, setState, props }.
export const tick = false;

export function vals(self) {
  const st = self.state || {};
  const sel = st.zone ?? 'S';
  const qty = st.qty ?? 2;
  const Z = {
    N: { name: 'Северная', price: 3500, left: 'Осталось 412 мест', few: false, note: 'Центр поля сбоку от ворот. Хороший обзор атак ORDA во втором тайме.' },
    S: {
      name: 'Южная · фан-сектор',
      price: 2000,
      left: 'Осталось 148 мест',
      few: false,
      note: 'Сектор активной поддержки: стоячие места, флаги и баннеры. Вход с 17:30.',
    },
    W: { name: 'Западная', price: 5000, left: 'Осталось 36 мест', few: true, note: 'Центральная трибуна под навесом, места у скамейки запасных.' },
    E: { name: 'Восточная · VIP', price: 12000, left: 'Осталось 9 мест', few: true, note: 'Ложа с отдельным входом, кейтеринг в перерыве и парковка.' },
  };
  const fmt = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const s = {};
  Object.keys(Z).forEach((k) => {
    const on = k === sel;
    s[k] = {
      on: on ? 'true' : 'false',
      bg: on ? '#0B7DB0' : Z[k].few ? '#EEF3F8' : '#E7F5FB',
      border: on ? '#0B7DB0' : Z[k].few ? '#EEF3F8' : '#B8E2F4',
      color: on ? '#FFFFFF' : '#172A51',
      pick: () => self.setState({ zone: k }),
    };
  });
  const z = Z[sel];
  const word = qty === 1 ? 'билет' : qty < 5 ? 'билета' : 'билетов';
  return {
    yes: true,
    s,
    zone: { ...z, priceLabel: fmt(z.price), leftColor: z.few ? '#C8040F' : '#137040' },
    qty,
    inc: () => self.setState({ qty: Math.min(6, qty + 1) }),
    dec: () => self.setState({ qty: Math.max(1, qty - 1) }),
    summary: qty + ' ' + word + ' × ' + fmt(z.price) + ' ₸',
    totalLabel: fmt(z.price * qty),
  };
}
