import { asset } from '@/lib/asset';

const BLOB = { '4d67ab61286e744506c62d829f1e53db': 'crest.png', '6ac67cb63f6032b91fdcf04bb39e891d': 'coin.webp' };
const blob = (id) => asset('/img/' + (BLOB[id] || id));
/* eslint-disable */
// Логика экрана, перенесённая из дизайн-макета (canvas). self = { state, setState, props }.
export const tick = false;

export function vals(self) {
  const a = self.props.active ?? 'home';
  const st = self.state || {};
  const open = st.open ?? !!self.props.open;
  const read = st.read || {};
  const chip = st.chip ?? 'all';
  const items = [
    ['home', 'Главная', 'WebMain.dc.html', 'fire'],
    ['team', 'Команды', 'WebTeam.dc.html', 'users'],
    ['matches', 'Матчи', 'WebMatches.dc.html', 'football'],
    ['media', 'Медиа', 'WebMedia.dc.html', 'news-01'],
    ['shop', 'Магазин', 'WebShop.dc.html', 'shopping-bag-02'],
    ['fans', 'Фан-зона', 'WebFans.dc.html', 'champion'],
  ];
  const crest = blob('4d67ab61286e744506c62d829f1e53db');
  const coin = blob('6ac67cb63f6032b91fdcf04bb39e891d');
  const all = [
    {
      id: 'champ',
      k: 'club',
      img: crest,
      title: '🏆 Мы — чемпионы! «Ордабасы» на вершине Казахстана!',
      text: 'Шымкент, мы сделали это! Спасибо каждому, кто был с командой весь сезон. 22 ноября — чемпионский парад',
      meta: '2 мин назад · ФК «Ордабасы»',
      href: 'WebBroadcast.dc.html',
    },
    {
      id: 'goal',
      k: 'match',
      icon: 'football',
      title: 'Гол! ORDA 1 : 0',
      text: '23′ — открываем счёт ударом с линии штрафной',
      meta: '12 мин назад · Матчи',
      href: 'WebMatches.dc.html',
    },
    {
      id: 'tickets',
      k: 'match',
      icon: 'ticket-01',
      title: 'Продажа билетов открыта',
      text: 'Матч с «Кайратом», 25 октября. Фан-сектор уже доступен',
      meta: '18 мин назад · Билеты',
      href: 'WebTickets.dc.html',
    },
    {
      id: 'points',
      k: 'club',
      img: coin,
      title: '+80 баллов за викторину',
      text: '«Чемпионский сезон»: 8 из 10 правильных ответов',
      meta: '1 час назад · Фан-зона',
      href: 'WebProfile.dc.html',
    },
    {
      id: 'stadium',
      k: 'club',
      img: crest,
      title: 'Стадион закрыт на обслуживание 20–22 ноября',
      text: 'Фан-шоп у входа «Юг» работает в обычном режиме',
      meta: 'Вчера, 17:05 · ФК «Ордабасы»',
      href: 'WebBroadcastPlain.dc.html',
      readInit: true,
    },
    {
      id: 'order',
      k: 'shop',
      icon: 'delivery-truck-01',
      title: 'Заказ № 1048 в пути',
      text: 'Курьер привезёт домашнюю джерси завтра с 10:00 до 14:00',
      meta: 'Вчера, 19:42 · Магазин',
      href: 'WebShopOrders.dc.html',
      readInit: true,
    },
    {
      id: 'promo',
      k: 'shop',
      icon: 'discount-tag-01',
      title: 'Скидка 15% на форму',
      text: 'Промокод ORDA15 действует до 31 октября',
      meta: '22 октября · Для вас',
      href: 'WebShop.dc.html',
      readInit: true,
    },
  ];
  const isRead = (n) => read[n.id] ?? !!n.readInit;
  const unread = all.filter((n) => !isRead(n)).length;
  const labels = { all: 'Все', match: 'Матчи', club: 'Клуб', shop: 'Магазин' };
  const notes = all
    .filter((n) => chip === 'all' || n.k === chip)
    .map((n) => {
      const r = isRead(n);
      const isCrest = n.img === crest;
      return {
        ...n,
        unread: !r,
        weight: r ? 500 : 700,
        rowBg: r ? '#FFFFFF' : '#F5FAFD',
        hasImg: !!n.img,
        noImg: !n.img,
        img: n.img || '',
        imgW: isCrest ? 22 : 26,
        icon: n.icon || 'notification-01',
        tile: isCrest ? '#FFFFFF' : r ? '#F2F6FA' : '#E7F5FB',
        tileBorder: isCrest ? '1px solid #DCE3EE' : '0',
        iconColor: r ? '#5B6B8C' : '#129ED9',
        read: () => self.setState({ read: { ...read, [n.id]: true }, open: false }),
      };
    });
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
    open,
    openStr: String(open),
    toggle: () => self.setState({ open: !open }),
    close: () => self.setState({ open: false }),
    bellBg: open ? '#172A51' : '#F2F6FA',
    bellFg: open ? '#FFFFFF' : '#172A51',
    bellLabel: unread ? 'Уведомления: ' + unread + ' непрочитанных' : 'Уведомления',
    unread,
    hasUnread: unread > 0,
    readAllColor: unread ? '#0B7DB0' : '#8E9BB5',
    readAll: () => {
      const r = {};
      all.forEach((n) => {
        r[n.id] = true;
      });
      self.setState({ read: r });
    },
    chips: Object.keys(labels).map((id) => {
      const u = all.filter((n) => (id === 'all' || n.k === id) && !isRead(n)).length;
      const on = id === chip;
      return {
        label: labels[id] + (u ? ' · ' + u : ''),
        sel: String(on),
        bg: on ? '#172A51' : '#E3EAF3',
        fg: on ? '#FFFFFF' : '#172A51',
        w: on ? 700 : 500,
        pick: () => self.setState({ chip: id }),
      };
    }),
    notes,
    empty: notes.length === 0,
  };
}
