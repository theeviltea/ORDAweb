/* eslint-disable */
// Логика экрана, перенесённая из дизайн-макета (canvas). self = { state, setState, props }.
export const tick = false;

export function vals(self) {
  const plain = (self.props.variant ?? 'rich') === 'plain';
  return plain
    ? {
        plain: true,
        rich: false,
        heroPad: 110,
        overlap: 56,
        titleSize: 64,
        title: 'Стадион закрыт на обслуживание 20–22 ноября',
        tag: 'Информация',
        when: 'Вчера, 17:05',
        date: '16 ноября 2026, 17:05',
      }
    : {
        plain: false,
        rich: true,
        heroPad: 110,
        overlap: 56,
        titleSize: 76,
        title: '🏆 Мы — чемпионы! «Ордабасы» на вершине Казахстана!',
        tag: 'Новости клуба',
        when: 'Сегодня, 13:19',
        date: '17 ноября 2026, 13:19',
      };
}
