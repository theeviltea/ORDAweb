/* eslint-disable */
// Логика экрана, перенесённая из дизайн-макета (canvas). self = { state, setState, props }.
export const tick = false;

export function vals(self) {
  const st = self.state || {};
  const photo = st.photo ?? 0,
    size = st.size ?? 'M',
    color = st.color ?? 'blue',
    qty = st.qty ?? 1,
    tab = st.tab ?? 'desc';
  const applied = (st.promo ?? 'none') === 'applied';
  const base = 24990,
    unit = applied ? Math.round(base * 0.85) : base;
  const fmt = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const C = [
    { id: 'blue', name: 'голубой', hex: '#129ED9' },
    { id: 'white', name: 'белый', hex: '#FFFFFF' },
  ];
  const S = [
    { id: 'desc', label: 'Описание', title: 'Описание', body: 'Игровая версия формы с вышитым гербом клуба и именной нумерацией по запросу.' },
    { id: 'spec', label: 'Характеристики', title: 'Характеристики', body: 'Состав: [состав ткани]. Посадка: [тип посадки]. Уход: [условия стирки].' },
    {
      id: 'ship',
      label: 'Доставка и возврат',
      title: 'Доставка и возврат',
      body: 'Доставка по Казахстану: [сроки]. Возврат в течение [N] дней при сохранении бирок.',
    },
  ];
  const t = (i) => ({ border: photo === i ? '#129ED9' : '#EEF3F8', pick: () => self.setState({ photo: i }) });
  return {
    yes: true,
    photoLabel: photo + 1 + ' / 4',
    s0: photo === 0,
    s1: photo === 1,
    s2: photo === 2,
    s3: photo === 3,
    t0: t(0),
    t1: t(1),
    t2: t(2),
    t3: t(3),
    prevPhoto: () => self.setState({ photo: (photo + 3) % 4 }),
    nextPhoto: () => self.setState({ photo: (photo + 1) % 4 }),
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((s) => ({
      label: s,
      pressed: s === size ? 'true' : 'false',
      bg: s === size ? '#172A51' : '#FFFFFF',
      fg: s === size ? '#FFFFFF' : '#172A51',
      border: s === size ? '#172A51' : '#DCE3EE',
      pick: () => self.setState({ size: s }),
    })),
    colors: C.map((c) => ({
      ...c,
      pressed: c.id === color ? 'true' : 'false',
      ring: c.id === color ? '#129ED9' : 'transparent',
      pick: () => self.setState({ color: c.id }),
    })),
    colorName: (C.find((c) => c.id === color) || C[0]).name,
    qty,
    inc: () => self.setState({ qty: Math.min(9, qty + 1) }),
    dec: () => self.setState({ qty: Math.max(1, qty - 1) }),
    applied,
    notApplied: !applied,
    apply: () => self.setState({ promo: 'applied' }),
    remove: () => self.setState({ promo: 'none' }),
    priceNow: fmt(unit) + ' ₸',
    priceOld: fmt(base) + ' ₸',
    total: fmt(unit * qty) + ' ₸',
    summary: 'Размер ' + size + ' · ' + qty + ' шт.' + (applied ? ' · ORDA15' : ''),
    tabs: S.map((s) => ({
      label: s.label,
      sel: s.id === tab ? 'true' : 'false',
      bg: s.id === tab ? '#172A51' : '#E3EAF3',
      fg: s.id === tab ? '#FFFFFF' : '#172A51',
      w: s.id === tab ? 700 : 500,
      pick: () => self.setState({ tab: s.id }),
    })),
    sec: S.find((s) => s.id === tab) || S[0],
  };
}
