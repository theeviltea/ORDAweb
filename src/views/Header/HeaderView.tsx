'use client';

/* Сгенерировано из дизайн-макета ORDA (canvas). Разметка повторяет макет 1:1. */
import { Fragment } from 'react';
import Link from 'next/link';
import { route } from '@/lib/route';
import { asset } from '@/lib/asset';
import { Icon } from '@/components/Icon';
import { useDC } from '@/lib/dc';
import { vals, tick } from './Header.vals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function HeaderView(props: { active?: string }) {
  const self = useDC(props, tick);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const v: any = vals(self);
  return (
    <>
      <div style={{ width: '100%', fontFamily: "'Roboto Condensed', sans-serif", color: '#172A51' }}>
        <div style={{ background: '#172A51', color: '#CFE3F2' }}>
          <div
            style={{
              width: '100%',
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '0 40px',
              boxSizing: 'border-box',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            <span>Футбольный клуб «Ордабасы» · Шымкент</span>
            <span style={{ display: 'flex', gap: '16px' }}>
              <Link style={{ color: '#CFE3F2', textDecoration: 'none' }} href="/">
                Қаз
              </Link>
              <Link style={{ color: '#FFFFFF', textDecoration: 'none' }} href="/">
                Рус
              </Link>
              <Link style={{ color: '#CFE3F2', textDecoration: 'none' }} href="/">
                Eng
              </Link>
            </span>
          </div>
        </div>
        <header style={{ position: 'relative', margin: '0', borderRadius: '0', background: '#FFFFFF', boxShadow: '0 8px 24px rgba(10, 18, 36, 0.22)' }}>
          <div
            style={{
              width: '100%',
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '0 40px',
              boxSizing: 'border-box',
              minHeight: '64px',
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              flexWrap: 'wrap',
            }}
          >
            <Link
              style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#172A51', textDecoration: 'none' }}
              href="/"
              aria-label="ФК «Ордабасы» — главная"
            >
              <img style={{ width: '30px', height: '36px', objectFit: 'contain' }} src={asset('/img/crest.png')} alt="" />
              <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '26px', fontWeight: '600', lineHeight: '1', letterSpacing: '0.04em' }}>
                ORDA
              </span>
            </Link>
            <nav style={{ flexGrow: '1', display: 'flex', justifyContent: 'center', gap: '2px', flexWrap: 'wrap' }} aria-label="Основное меню">
              {v.nav.map((n: any, nIdx: number) => (
                <Fragment key={nIdx}>
                  <Link
                    style={{
                      height: '36px',
                      padding: '0 14px',
                      display: 'flex',
                      alignItems: 'center',
                      borderRadius: '18px',
                      fontSize: '15px',
                      fontWeight: n.weight,
                      color: n.color,
                      background: n.bg,
                      textDecoration: 'none',
                    }}
                    href={route(n.href)}
                    aria-current={n.current}
                  >
                    {n.label}
                  </Link>
                </Fragment>
              ))}
            </nav>
            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Link
                style={{
                  position: 'relative',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#F2F6FA',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                href="/shop"
                aria-label="Корзина"
              >
                <Icon name="shopping-bag-02" size={20} weight={1.6} color="#172A51" />
                <span
                  style={{
                    position: 'absolute',
                    right: '-2px',
                    top: '-2px',
                    minWidth: '18px',
                    height: '18px',
                    borderRadius: '9px',
                    background: '#E30512',
                    color: '#FFFFFF',
                    fontSize: '11px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  2
                </span>
              </Link>
              <Link
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#F2F6FA',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                href="/profile"
                aria-label="Личный кабинет"
              >
                <Icon name="user-circle" size={20} weight={1.6} color="#172A51" />
              </Link>
              <Link
                style={{
                  height: '40px',
                  padding: '0 18px',
                  borderRadius: '14px',
                  background: '#0B7DB0',
                  color: '#FFFFFF',
                  fontSize: '15px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                }}
                href="/tickets"
              >
                <Icon name="ticket-01" size={18} weight={1.8} color="#FFFFFF" />
                Купить билеты
              </Link>
            </span>
          </div>
        </header>
      </div>
    </>
  );
}
