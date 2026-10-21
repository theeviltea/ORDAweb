/* eslint-disable */
// Логика экрана, перенесённая из дизайн-макета (canvas). self = { state, setState, props }.
export const tick = false;

export function vals(self) {
  const a = self.props.active ?? 'home';
  const items = [
    ['home', 'Главная', 'WebMain.dc.html'],
    ['team', 'Команды', 'WebTeam.dc.html'],
    ['matches', 'Матчи', 'WebMatches.dc.html'],
    ['media', 'Медиа', 'WebMedia.dc.html'],
    ['shop', 'Магазин', 'WebShop.dc.html'],
    ['fans', 'Фан-зона', 'WebFans.dc.html'],
    ['club', 'О клубе', 'WebMain.dc.html#interview'],
  ];
  return {
    nav: items.map(([id, label, href]) => ({
      label,
      href,
      current: id === a ? 'page' : 'false',
      bg: id === a ? '#E7F5FB' : 'transparent',
      color: id === a ? '#0B7DB0' : '#172A51',
      weight: id === a ? 700 : 500,
    })),
  };
}
