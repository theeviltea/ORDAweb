/* eslint-disable */
// Логика экрана, перенесённая из дизайн-макета (canvas). self = { state, setState, props }.
export const tick = false;

export function vals(self) {
  const s = self.state || {};
  const step = s.step ?? 'empty';
  const frame = s.frame ?? 0;
  const agree = s.agree ?? true;
  const f = (i) => ({
    on: String(frame === i),
    pick: () => self.setState({ frame: i }),
    border: frame === i ? '#129ED9' : '#DCE3EE',
    bg: frame === i ? '#E7F5FB' : '#FFFFFF',
    fg: frame === i ? '#0B7DB0' : '#5B6B8C',
  });
  return {
    empty: step === 'empty',
    picked: step !== 'empty',
    sent: step === 'sent',
    notSent: step !== 'sent',
    shoot: () => self.setState({ step: 'picked' }),
    reset: () => self.setState({ step: 'empty' }),
    send: () => {
      if (agree) self.setState({ step: 'sent' });
    },
    f0: f(0),
    f1: f(1),
    f2: f(2),
    frameBlue: frame === 0,
    frameMatch: frame === 1,
    agree,
    agreeStr: String(agree),
    toggle: () => self.setState({ agree: !agree }),
    boxBorder: agree ? '#0B7DB0' : '#8391AD',
    boxBg: agree ? '#0B7DB0' : '#FFFFFF',
    locked: String(!agree),
    sendBg: agree ? '#0B7DB0' : '#8EB9D3',
  };
}
