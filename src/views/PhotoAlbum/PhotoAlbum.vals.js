/* eslint-disable */
// Логика экрана, перенесённая из дизайн-макета (canvas). self = { state, setState, props }.
export const tick = false;

export function vals(self) {
  const S = ['Победный гол и эмоции трибун', 'Эмоции после гола', 'Радость после гола', 'Команда празднует победу', 'Фан-сектор поддерживает команду'];
  const i = (self.state || {}).i ?? 0;
  const n = S.length;
  const out = {
    yes: true,
    counter: 12 + i + ' / 48',
    caption: S[i],
    prev: () => self.setState({ i: (i - 1 + n) % n }),
    next: () => self.setState({ i: (i + 1) % n }),
  };
  S.forEach((s, k) => {
    out['v' + k] = k === i;
    out['b' + k] = k === i ? '#129ED9' : 'transparent';
    out['pick' + k] = () => self.setState({ i: k });
  });
  return out;
}
