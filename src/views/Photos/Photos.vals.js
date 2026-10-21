/* eslint-disable */
// Логика экрана, перенесённая из дизайн-макета (canvas). self = { state, setState, props }.
export const tick = false;

export function vals(self) {
  const c = (self.state || {}).c ?? 0;
  const L = ['Все', 'Матчи', 'Тренировки', 'События', 'Клуб'];
  return {
    yes: true,
    chips: L.map((label, i) => ({
      label,
      sel: i === c ? 'true' : 'false',
      bg: i === c ? '#FFFFFF' : 'rgba(255, 255, 255, 0.08)',
      fg: i === c ? '#172A51' : '#CFE3F2',
      w: i === c ? 700 : 500,
      pick: () => self.setState({ c: i }),
    })),
  };
}
