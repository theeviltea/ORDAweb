/* eslint-disable */
// Логика экрана, перенесённая из дизайн-макета (canvas). self = { state, setState, props }.
export const tick = false;

export function vals(self) {
  const s = self.state || {};
  const o = s.o ?? 1,
    k = s.k ?? 0,
    mode = s.mode ?? 'edit';
  const q = (i, a, b) => {
    const on = o === a && k === b;
    return { on: String(on), border: on ? '#129ED9' : '#DCE3EE', bg: on ? '#E7F5FB' : '#FFFFFF', pick: () => self.setState({ o: a, k: b }) };
  };
  const c = (v) => Math.max(0, Math.min(9, v));
  return {
    o,
    k,
    editing: mode === 'edit',
    saved: mode === 'saved',
    oInc: () => self.setState({ o: c(o + 1) }),
    oDec: () => self.setState({ o: c(o - 1) }),
    kInc: () => self.setState({ k: c(k + 1) }),
    kDec: () => self.setState({ k: c(k - 1) }),
    q0: q(0, 1, 0),
    q1: q(1, 0, 0),
    q2: q(2, 2, 0),
    q3: q(3, 1, 1),
    save: () => self.setState({ mode: 'saved' }),
    edit: () => self.setState({ mode: 'edit' }),
  };
}
