/* eslint-disable */
// Логика экрана, перенесённая из дизайн-макета (canvas). self = { state, setState, props }.
export const tick = false;

export function vals(self) {
  const st = self.state || {};
  const liked = st.liked || { c2: true };
  const art = !!st.art;
  const defs = [
    {
      id: 'c1',
      initial: 'А',
      name: 'Алексей К.',
      time: '2 часа назад',
      text: 'Какая невероятная игра! Заслуженная победа нашего клуба! Ордабасы чемпион!',
      base: 14,
    },
    {
      id: 'c2',
      initial: 'Д',
      name: 'Динара М.',
      time: '3 часа назад',
      text: 'Атмосфера на стадионе была потрясающая, сорвала весь голос. Ждём золотые медали!',
      base: 8,
    },
    {
      id: 'c3',
      initial: 'Б',
      name: 'Бауыржан Т.',
      time: '5 часов назад',
      text: 'Отличная тактика тренера. Защита сыграла просто идеально, без шансов для соперника.',
      base: 21,
    },
  ];
  return {
    yes: true,
    liked: art,
    notLiked: !art,
    likes: String(128 + (art ? 1 : 0)),
    toggleLike: () => self.setState({ art: !art }),
    comments: defs.map((c) => {
      const on = !!liked[c.id];
      return {
        ...c,
        pressed: on ? 'true' : 'false',
        count: c.base + (on ? 1 : 0),
        bg: on ? '#FDECEE' : '#F2F6FA',
        fg: on ? '#C8040F' : '#5B6B8C',
        like: () => self.setState({ liked: { ...liked, [c.id]: !on } }),
      };
    }),
  };
}
