'use client';

/* Сгенерировано из дизайн-макета ORDA (canvas). Разметка повторяет макет 1:1. */
import Link from 'next/link';
import { route } from '@/lib/route';
import { asset } from '@/lib/asset';
import { Star } from '@/components/Star';
import { useDC } from '@/lib/dc';
import { vals, tick } from './PlayerCardInner.vals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function PlayerCardInnerView(props: { person?: unknown }) {
  const self = useDC(props, tick);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const v: any = vals(self);
  return (
    <>
      <Link
        style={{
          width: '100%',
          height: '100%',
          boxSizing: 'border-box',
          borderRadius: '20px',
          overflow: 'hidden',
          background: '#FFFFFF',
          boxShadow: '0 2px 12px rgba(23, 42, 81, 0.06)',
          color: '#172A51',
          textDecoration: 'none',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: "'Roboto Condensed', sans-serif",
        }}
        href={route(v.href)}
      >
        <div style={{ position: 'relative', height: '250px', flexShrink: '0', overflow: 'hidden', background: '#FFFFFF' }}>
          <Star w={180} h={340} fill="#172A51" style={{ position: 'absolute', left: '-108px', top: '56px' }} />
          <svg
            style={{ position: 'absolute', right: '-100px', top: '-80px' }}
            aria-hidden="true"
            width="180"
            height="360"
            viewBox="0 0 24 24"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="pc-sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#129ED9" />
                <stop offset="0.55" stopColor="#7CC6E9" />
                <stop offset="1" stopColor="#E7F5FB" />
              </linearGradient>
            </defs>
            <path d="M12 0C12.8 8 16 11.2 24 12 16 12.8 12.8 16 12 24 11.2 16 8 12.8 0 12 8 11.2 11.2 8 12 0z" fill="url(#pc-sky)" />
          </svg>
          <span
            style={{
              position: 'absolute',
              left: '12px',
              top: '10px',
              fontFamily: "'SO Sporty', 'Oswald', sans-serif",
              fontSize: v.bigSize,
              fontWeight: '700',
              lineHeight: '1',
              letterSpacing: '-0.01em',
              color: '#172A51',
              textTransform: 'uppercase',
            }}
            aria-hidden="true"
          >
            {v.big}
          </span>
          <Star w={12} h={12} fill="#7CC6E9" style={{ position: 'absolute', left: '14px', top: '132px' }} keepRatio />
          <Star w={10} h={10} fill="#FFFFFF" style={{ position: 'absolute', left: '30px', top: '182px' }} keepRatio />
          <Star w={12} h={12} fill="#129ED9" style={{ position: 'absolute', right: '16px', top: '150px' }} keepRatio />
          <Star w={9} h={9} fill="#FFFFFF" style={{ position: 'absolute', right: '30px', top: '92px' }} keepRatio />
          <img
            style={{ position: 'absolute', left: '60%', top: '40px', height: '360px', width: 'auto', maxWidth: 'none', transform: 'translateX(-50%)' }}
            src={v.photo}
            alt={v.name}
          />
          <div
            style={{
              position: 'absolute',
              left: '0',
              right: '0',
              bottom: '0',
              height: '56px',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 92%)',
            }}
            aria-hidden="true"
          />
        </div>
        <div style={{ padding: '2px 12px 12px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span style={{ fontSize: '15px', fontWeight: '700', lineHeight: '1.2' }}>{v.name}</span>
          <span style={{ fontSize: '13px', color: '#5B6B8C', lineHeight: '1.25' }}>{v.role}</span>
        </div>
      </Link>
    </>
  );
}
