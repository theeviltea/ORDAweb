/* eslint-disable */
// Логика экрана, перенесённая из дизайн-макета (canvas). self = { state, setState, props }.
export const tick = true;

export function vals(self) {
  const s = self.state || {};
  const phase = s.phase ?? 'idle';
  const stop = s.stop ?? 0;
  const secs = 384 - (Math.floor(self.now / 1000) % 384);
  const left = String(Math.floor(secs / 60)).padStart(2, '0') + ':' + String(secs % 60).padStart(2, '0');
  const win = ['ЮГ', '04', '12'];
  const start = () => {
    self.setState({ phase: 'spin', stop: 0 });
    self.t1 = setTimeout(() => self.setState({ stop: 1 }), 1400);
    self.t2 = setTimeout(() => self.setState({ stop: 2 }), 2400);
    self.t3 = setTimeout(() => self.setState({ stop: 3, phase: 'won' }), 3400);
  };
  const spinning = phase !== 'idle';
  const drum = win.map((v, i) => ({
    spin: spinning && stop <= i,
    still: !spinning || stop > i,
    v: spinning ? v : '—',
    color: phase === 'won' ? '#7CC6E9' : '#FFFFFF',
    speed: 0.5 + i * 0.12 + 's',
  }));
  return {
    left: phase === 'idle' ? left : 'идёт',
    drum,
    idle: phase === 'idle',
    won: phase === 'won',
    start,
    caption:
      phase === 'idle'
        ? 'Начнётся в перерыве — смотрите на табло или здесь'
        : phase === 'won'
          ? 'Победитель: сектор Юг, ряд 4, место 12'
          : 'Выбираем победителя…',
  };
}
