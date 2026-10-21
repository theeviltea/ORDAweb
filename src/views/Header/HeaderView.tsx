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
        <header style={{ position: 'relative', margin: '0', borderRadius: '0', background: '#FFFFFF', boxShadow: '0 8px 24px rgba(10, 18, 36, 0.18)' }}>
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
                      padding: '0 14px 0 10px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
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
                    <Icon name={n.icon} size={18} weight={1.8} color={n.color} />
                    {n.label}
                  </Link>
                </Fragment>
              ))}
            </nav>
            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
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
                href="/tickets"
                aria-label="Купить билеты"
                title="Купить билеты"
              >
                <Icon name="ticket-01" size={20} weight={1.6} color="#172A51" />
              </Link>
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
              <span style={{ width: '1px', height: '28px', margin: '0 4px', background: '#DCE3EE' }} aria-hidden="true" />
              <Link
                style={{
                  height: '44px',
                  padding: '0 14px 0 4px',
                  borderRadius: '22px',
                  background: '#F2F6FA',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#172A51',
                  textDecoration: 'none',
                }}
                href="/profile"
                aria-label="Личный кабинет: Бекжан, 2 480 баллов"
              >
                <img
                  style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #FFFFFF', boxSizing: 'border-box' }}
                  src={asset('/img/avatar.webp')}
                  alt=""
                />
                <span style={{ display: 'flex', flexDirection: 'column', gap: '1px', lineHeight: '1.1' }}>
                  <span style={{ fontSize: '15px', fontWeight: '700' }}>Бекжан</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', fontWeight: '700', color: '#0B7DB0' }}>
                    <img style={{ width: '14px', height: '14px', objectFit: 'contain' }} src={asset('/img/coin.webp')} alt="" />2 480
                  </span>
                </span>
              </Link>
            </span>
          </div>
        </header>
      </div>
    </>
  );
}
