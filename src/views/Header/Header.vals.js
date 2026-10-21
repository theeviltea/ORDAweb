/* eslint-disable */
// Логика экрана, перенесённая из дизайн-макета (canvas). self = { state, setState, props }.
export const tick = false;

export function vals(self) {
  const a = self.props.active ?? 'home';
  const items = [
    ['home', 'Главная', 'WebMain.dc.html', 'fire'],
    ['team', 'Команды', 'WebTeam.dc.html', 'users'],
    ['matches', 'Матчи', 'WebMatches.dc.html', 'football'],
    ['media', 'Медиа', 'WebMedia.dc.html', 'news-01'],
    ['shop', 'Магазин', 'WebShop.dc.html', 'shopping-bag-02'],
    ['fans', 'Фан-зона', 'WebFans.dc.html', 'champion'],
  ];
  return {
    nav: items.map(([id, label, href, icon]) => ({
      label,
      href,
      icon,
      current: id === a ? 'page' : 'false',
      bg: id === a ? '#E7F5FB' : 'transparent',
      color: id === a ? '#0B7DB0' : '#172A51',
      weight: id === a ? 700 : 500,
    })),
  };
}
