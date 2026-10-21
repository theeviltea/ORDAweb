/* eslint-disable */
// Логика экрана, перенесённая из дизайн-макета (canvas). self = { state, setState, props }.
export const tick = false;

export function vals(self) {
  const f = (self.state || {}).f ?? 'all';
  return {
    yes: true,
    filters: [
      ['all', 'Все · 3'],
      ['active', 'Активные · 2'],
      ['done', 'Завершённые · 1'],
    ].map(([id, label]) => ({
      label,
      pressed: f === id ? 'true' : 'false',
      bg: f === id ? '#172A51' : '#FFFFFF',
      fg: f === id ? '#FFFFFF' : '#172A51',
      w: f === id ? 700 : 500,
      pick: () => self.setState({ f: id }),
    })),
    showActive: f !== 'done',
    showDone: f !== 'active',
  };
}
