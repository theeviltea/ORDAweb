'use client';

/* Сгенерировано из дизайн-макета ORDA (canvas). Разметка повторяет макет 1:1. */
import { Fragment } from 'react';
import Link from 'next/link';
import { route } from '@/lib/route';
import { asset } from '@/lib/asset';
import { Icon } from '@/components/Icon';
import { useDC } from '@/lib/dc';
import { vals, tick } from './Header.vals';
import './Header.css';

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
              <span style={{ position: 'relative' }}>
                <button
                  style={{
                    position: 'relative',
                    width: '40px',
                    height: '40px',
                    padding: '0',
                    border: '0',
                    borderRadius: '50%',
                    background: v.bellBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                  type="button"
                  aria-label={v.bellLabel}
                  aria-expanded={v.openStr}
                  aria-haspopup="dialog"
                  onClick={v.toggle}
                >
                  <Icon name="notification-01" size={20} weight={1.6} color={v.bellFg} />
                  {v.hasUnread && (
                    <>
                      <span
                        style={{
                          position: 'absolute',
                          right: '-2px',
                          top: '-2px',
                          minWidth: '18px',
                          height: '18px',
                          padding: '0 4px',
                          boxSizing: 'border-box',
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
                        {v.unread}
                      </span>
                    </>
                  )}
                </button>
                {v.open && (
                  <>
                    <button
                      style={{ position: 'fixed', inset: '0', zIndex: '40', padding: '0', border: '0', background: 'transparent', cursor: 'default' }}
                      type="button"
                      aria-label="Закрыть уведомления"
                      className="orda-bell-backdrop"
                      onClick={v.close}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        right: '-8px',
                        top: '52px',
                        zIndex: '50',
                        width: 'min(420px, calc(100vw - 32px))',
                        borderRadius: '24px',
                        background: '#FFFFFF',
                        boxShadow: '0 24px 60px rgba(10, 18, 36, 0.28), 0 0 0 1px rgba(23, 42, 81, 0.06)',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                      role="dialog"
                      aria-label="Уведомления"
                      className="orda-bell-panel"
                    >
                      <span
                        style={{
                          position: 'absolute',
                          right: '21px',
                          top: '-7px',
                          width: '14px',
                          height: '14px',
                          background: '#FFFFFF',
                          transform: 'rotate(45deg)',
                        }}
                        aria-hidden="true"
                        className="orda-bell-caret"
                      />
                      <div
                        style={{
                          position: 'relative',
                          padding: '18px 20px 12px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '12px',
                          borderBottom: '1px solid #EEF3F8',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                          <span
                            style={{
                              fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                              fontSize: '26px',
                              fontWeight: '600',
                              lineHeight: '1',
                              textTransform: 'uppercase',
                            }}
                          >
                            Уведомления
                          </span>
                          <button
                            style={{
                              padding: '0',
                              border: '0',
                              background: 'transparent',
                              color: v.readAllColor,
                              fontFamily: 'inherit',
                              fontSize: '14px',
                              fontWeight: '700',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px',
                              cursor: 'pointer',
                            }}
                            type="button"
                            onClick={v.readAll}
                          >
                            <Icon name="tick-02" size={16} weight={2.2} color={v.readAllColor} />
                            Прочитать все
                          </button>
                        </div>
                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }} role="tablist" aria-label="Тип">
                          {v.chips.map((c: any, cIdx: number) => (
                            <Fragment key={cIdx}>
                              <button
                                style={{
                                  height: '32px',
                                  padding: '0 12px',
                                  borderRadius: '16px',
                                  border: '0',
                                  background: c.bg,
                                  color: c.fg,
                                  fontFamily: 'inherit',
                                  fontSize: '13px',
                                  fontWeight: c.w,
                                  cursor: 'pointer',
                                }}
                                type="button"
                                role="tab"
                                aria-selected={c.sel}
                                onClick={c.pick}
                              >
                                {c.label}
                              </button>
                            </Fragment>
                          ))}
                        </div>
                      </div>
                      <div
                        style={{ maxHeight: '440px', overflowY: 'auto', padding: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}
                        className="orda-bell-list"
                      >
                        {v.notes.map((n: any, nIdx: number) => (
                          <Fragment key={nIdx}>
                            <Link
                              style={{
                                position: 'relative',
                                display: 'flex',
                                gap: '12px',
                                alignItems: 'flex-start',
                                padding: '12px 14px 12px 16px',
                                borderRadius: '16px',
                                background: n.rowBg,
                                color: '#172A51',
                                textDecoration: 'none',
                              }}
                              href={route(n.href)}
                              onClick={n.read}
                            >
                              {n.unread && (
                                <>
                                  <span
                                    style={{
                                      position: 'absolute',
                                      left: '0',
                                      top: '14px',
                                      bottom: '14px',
                                      width: '4px',
                                      borderRadius: '0 4px 4px 0',
                                      background: '#129ED9',
                                    }}
                                    aria-hidden="true"
                                  />
                                </>
                              )}
                              <span
                                style={{
                                  flexShrink: '0',
                                  width: '40px',
                                  height: '40px',
                                  boxSizing: 'border-box',
                                  borderRadius: '12px',
                                  background: n.tile,
                                  border: n.tileBorder,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                {n.hasImg && (
                                  <>
                                    <img style={{ width: `${n.imgW}px`, height: '26px', objectFit: 'contain' }} src={n.img} alt="" />
                                  </>
                                )}
                                {n.noImg && (
                                  <>
                                    <Icon name={n.icon} size={20} weight={1.7} color={n.iconColor} />
                                  </>
                                )}
                              </span>
                              <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: '1', minWidth: '0' }}>
                                <span style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                  <span style={{ flexGrow: '1', fontSize: '15px', fontWeight: n.weight, lineHeight: '1.25' }}>{n.title}</span>
                                  {n.unread && (
                                    <>
                                      <span
                                        style={{ flexShrink: '0', width: '8px', height: '8px', marginTop: '5px', borderRadius: '50%', background: '#129ED9' }}
                                        aria-label="Не прочитано"
                                      />
                                    </>
                                  )}
                                </span>
                                <span style={{ fontSize: '13px', lineHeight: '1.35', color: '#5B6B8C' }}>{n.text}</span>
                                <span style={{ fontSize: '12px', color: '#8E9BB5' }}>{n.meta}</span>
                              </span>
                            </Link>
                          </Fragment>
                        ))}
                        {v.empty && (
                          <>
                            <div
                              style={{ padding: '36px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textAlign: 'center' }}
                            >
                              <Icon name="notification-01" size={32} weight={1.8} color="#8E9BB5" />
                              <span style={{ fontSize: '16px', fontWeight: '700' }}>Здесь пока пусто</span>
                              <span style={{ fontSize: '14px', color: '#5B6B8C' }}>В этой категории нет уведомлений</span>
                            </div>
                          </>
                        )}
                      </div>
                      <Link
                        style={{
                          padding: '14px 20px',
                          borderTop: '1px solid #EEF3F8',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          fontSize: '14px',
                          fontWeight: '700',
                          color: '#0B7DB0',
                          textDecoration: 'none',
                        }}
                        href="/profile"
                      >
                        <Icon name="settings-01" size={16} weight={1.8} color="#0B7DB0" />
                        Настройки уведомлений
                      </Link>
                    </div>
                  </>
                )}
              </span>
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
