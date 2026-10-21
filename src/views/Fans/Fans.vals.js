/* eslint-disable */
// Логика экрана, перенесённая из дизайн-макета (canvas). self = { state, setState, props }.
export const tick = false;

export function vals(self) {
  const st = self.state || {};
  const pick = st.pick ?? null;
  const base = [
    ['10', 'Эльхан Астанов', 46],
    ['9', 'Эвертон Мораес', 27],
    ['1', 'Бекхан Шайзада', 15],
    ['22', 'Султанбек Астанов', 12],
  ];
  const voted = pick !== null;
  const h = st.h ?? 2,
    a = st.a ?? 1;
  const saved = !!st.saved;
  const clamp = (v) => Math.max(0, Math.min(9, v));
  return {
    yes: true,
    voted,
    notVoted: !voted,
    poll: base.map(([num, name, pct], i) => ({
      num,
      name,
      pct: voted ? pct + '%' : '',
      pressed: pick === i ? 'true' : 'false',
      bar: voted ? pct + '%' : '0%',
      barBg: pick === i ? '#CFE9F6' : '#EEF3F8',
      border: pick === i ? '#129ED9' : '#E3EAF3',
      pctColor: pick === i ? '#0B7DB0' : '#5B6B8C',
      pick: () => self.setState({ pick: i }),
    })),
    h,
    a,
    saved,
    notSaved: !saved,
    hInc: () => self.setState({ h: clamp(h + 1), saved: false }),
    hDec: () => self.setState({ h: clamp(h - 1), saved: false }),
    aInc: () => self.setState({ a: clamp(a + 1), saved: false }),
    aDec: () => self.setState({ a: clamp(a - 1), saved: false }),
    save: () => self.setState({ saved: !saved }),
  };
}
