import { asset } from '@/lib/asset';

const BLOB = { '451a65d4c728c0c123a8b6ee77c6feaf': 'player-astanov.webp' };
const blob = (id) => asset('/img/' + (BLOB[id] || id));
/* eslint-disable */
// Логика экрана, перенесённая из дизайн-макета (canvas). self = { state, setState, props }.
export const tick = false;

export function vals(self) {
  const p = self.props.person || {
    num: '10',
    name: 'Эльхан Астанов',
    role: 'Полузащитник',
    photo: blob('451a65d4c728c0c123a8b6ee77c6feaf'),
    href: 'Player.dc.html',
  };
  const big = p.num || 'ORDA';
  return {
    href: p.href || 'Player.dc.html',
    photo: p.photo,
    name: p.name,
    role: p.role,
    big: big,
    bigSize: big.length > 2 ? '34px' : '64px',
  };
}
