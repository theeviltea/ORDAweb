'use client';

/* Сгенерировано из дизайн-макета ORDA (canvas). Разметка повторяет макет 1:1. */
import Link from 'next/link';
import { asset } from '@/lib/asset';
import { Icon } from '@/components/Icon';
import { Star } from '@/components/Star';
import { useDC } from '@/lib/dc';
import { vals, tick } from './Tickets.vals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function TicketsView(props: {}) {
  const self = useDC(props, tick);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const v: any = vals(self);
  return (
    <>
      <div style={{ width: '100%', background: '#172A51', paddingBottom: '1px', fontFamily: "'Roboto Condensed', sans-serif", color: '#172A51' }}>
        <section style={{ position: 'relative', overflow: 'hidden', padding: '40px 0 40px' }} aria-label="Покупка билетов">
          <Star w={220} h={360} fill="rgba(18, 158, 217, 0.12)" style={{ position: 'absolute', right: '-60px', top: '-80px' }} />
          <Star w={20} h={20} fill="#129ED9" style={{ position: 'absolute', left: '44%', top: '46px' }} />
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '0 40px',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flexWrap: 'wrap',
                fontSize: '14px',
                fontWeight: '700',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#7FA3C9',
              }}
              aria-label="Навигация"
            >
              <Link style={{ color: '#7FA3C9', textDecoration: 'none' }} href="/">
                Главная
              </Link>
              <Icon name="arrow-right-01" size={14} weight={2} color="#7FA3C9" />
              <Link style={{ color: '#7FA3C9', textDecoration: 'none' }} href="/matches">
                Матчи
              </Link>
              <Icon name="arrow-right-01" size={14} weight={2} color="#7FA3C9" />
              <span style={{ color: '#CFE3F2' }}>Билеты</span>
            </nav>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
              <h1
                style={{
                  margin: '0',
                  fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                  fontSize: '80px',
                  fontWeight: '600',
                  lineHeight: '0.92',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                }}
              >
                Покупка билетов
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: '#FFFFFF',
                      color: '#172A51',
                      fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                      fontSize: '18px',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    1
                  </span>
                  <span style={{ fontSize: '16px', fontWeight: '700', color: '#FFFFFF' }}>Трибуна и количество</span>
                </span>
                <span style={{ width: '40px', height: '2px', background: 'rgba(255, 255, 255, 0.2)' }} />
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#CFE3F2',
                      fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                      fontSize: '18px',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    2
                  </span>
                  <span style={{ fontSize: '16px', fontWeight: '500', color: '#A9BCD6' }}>Данные покупателя</span>
                </span>
                <span style={{ width: '40px', height: '2px', background: 'rgba(255, 255, 255, 0.2)' }} />
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#CFE3F2',
                      fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                      fontSize: '18px',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    3
                  </span>
                  <span style={{ fontSize: '16px', fontWeight: '500', color: '#A9BCD6' }}>Оплата</span>
                </span>
              </div>
            </div>
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                gap: '32px',
                flexWrap: 'wrap',
                padding: '28px 32px',
                borderRadius: '28px',
                background: 'linear-gradient(120deg, #1B5A93 0%, #129ED9 100%)',
                color: '#FFFFFF',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  right: '-6px',
                  top: '-20px',
                  fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                  fontSize: '150px',
                  fontWeight: '700',
                  lineHeight: '0.85',
                  color: 'rgba(255, 255, 255, 0.08)',
                }}
                aria-hidden="true"
              >
                MATCH DAY
              </span>
              <span style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '18px' }}>
                <span
                  style={{
                    width: '76px',
                    height: '76px',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img style={{ width: '50px', height: '60px', objectFit: 'contain' }} src={asset('/img/crest.png')} alt="" />
                </span>
                <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '30px', fontWeight: '600' }}>VS</span>
                <span
                  style={{
                    width: '76px',
                    height: '76px',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img style={{ width: '54px', height: '60px', objectFit: 'contain' }} src={asset('/img/club-kairat.webp')} alt="" />
                </span>
              </span>
              <span style={{ position: 'relative', flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span
                  style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '40px', fontWeight: '600', lineHeight: '1', textTransform: 'uppercase' }}
                >
                  Ордабасы — Кайрат
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', color: '#E7F5FB' }}>
                  <Icon name="location-01" size={18} color="#E7F5FB" />
                  Стадион им. Кажымукана Мунайтпасова, Шымкент
                </span>
              </span>
              <span style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '56px', fontWeight: '600', lineHeight: '1' }}>19:00</span>
                <span style={{ fontSize: '16px', color: '#E7F5FB' }}>Сб, 25 октября · 25 тур</span>
              </span>
            </div>
          </div>
        </section>
        <section
          style={{
            position: 'relative',
            margin: '0 max(24px, calc((100% - 1280px) / 2)) 40px',
            borderRadius: '32px',
            overflow: 'hidden',
            background: '#FFFFFF',
            padding: '56px 0',
          }}
          aria-label="Выбор трибуны"
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '0 40px',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              gap: '0px',
            }}
          >
            <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap', color: '#172A51' }}>
              <div style={{ flex: '999 1 600px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
                  <h2
                    style={{
                      margin: '0',
                      fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                      fontSize: '40px',
                      fontWeight: '600',
                      lineHeight: '1',
                      textTransform: 'uppercase',
                      color: '#172A51',
                    }}
                  >
                    Выберите трибуну
                  </h2>
                  <span style={{ fontSize: '16px', color: '#5B6B8C' }}>цены за 1 место</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '96px minmax(0, 1fr) 96px', gridTemplateRows: '88px 380px 88px', gap: '10px' }}>
                  <button
                    style={{
                      gridColumn: '1 / 4',
                      borderRadius: '44px 44px 14px 14px',
                      border: `2px solid ${v.s.N.border}`,
                      background: v.s.N.bg,
                      color: v.s.N.color,
                      fontFamily: 'inherit',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '0',
                    }}
                    type="button"
                    onClick={v.s.N.pick}
                    aria-pressed={v.s.N.on}
                  >
                    <span style={{ fontSize: '15px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Северная</span>
                    <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '24px', fontWeight: '600' }}>3 500 ₸</span>
                  </button>
                  <button
                    style={{
                      borderRadius: '14px',
                      border: `2px solid ${v.s.W.border}`,
                      background: v.s.W.bg,
                      color: v.s.W.color,
                      fontFamily: 'inherit',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '0',
                    }}
                    type="button"
                    onClick={v.s.W.pick}
                    aria-pressed={v.s.W.on}
                  >
                    <span
                      style={{
                        fontSize: '15px',
                        fontWeight: '700',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        writingMode: 'vertical-rl',
                        transform: 'rotate(180deg)',
                      }}
                    >
                      Западная
                    </span>
                    <span
                      style={{
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '24px',
                        fontWeight: '600',
                        writingMode: 'vertical-rl',
                        transform: 'rotate(180deg)',
                      }}
                    >
                      5 000 ₸
                    </span>
                  </button>
                  <div
                    style={{ position: 'relative', borderRadius: '18px', overflow: 'hidden', background: 'linear-gradient(180deg, #172A51 0%, #129ED9 100%)' }}
                    aria-hidden="true"
                  >
                    <div style={{ position: 'absolute', inset: '18px', border: '2px solid rgba(255, 255, 255, 0.35)', borderRadius: '6px' }} />
                    <div style={{ position: 'absolute', top: '18px', bottom: '18px', left: '50%', width: '2px', background: 'rgba(255, 255, 255, 0.35)' }} />
                    <div
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        width: '110px',
                        height: '110px',
                        margin: '-55px 0 0 -55px',
                        border: '2px solid rgba(255, 255, 255, 0.35)',
                        borderRadius: '50%',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        left: '18px',
                        top: '50%',
                        width: '70px',
                        height: '180px',
                        marginTop: '-90px',
                        border: '2px solid rgba(255, 255, 255, 0.35)',
                        borderLeft: '0',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        right: '18px',
                        top: '50%',
                        width: '70px',
                        height: '180px',
                        marginTop: '-90px',
                        border: '2px solid rgba(255, 255, 255, 0.35)',
                        borderRight: '0',
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '36px',
                        fontWeight: '600',
                        letterSpacing: '0.06em',
                        color: 'rgba(255, 255, 255, 0.5)',
                      }}
                    >
                      ORDA
                    </span>
                    <Star w={18} h={18} fill="#7CC6E9" style={{ position: 'absolute', right: '40px', top: '40px' }} />
                  </div>
                  <button
                    style={{
                      borderRadius: '14px',
                      border: `2px solid ${v.s.E.border}`,
                      background: v.s.E.bg,
                      color: v.s.E.color,
                      fontFamily: 'inherit',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '0',
                    }}
                    type="button"
                    onClick={v.s.E.pick}
                    aria-pressed={v.s.E.on}
                  >
                    <span style={{ fontSize: '15px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', writingMode: 'vertical-rl' }}>
                      Восточная · VIP
                    </span>
                    <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '24px', fontWeight: '600', writingMode: 'vertical-rl' }}>
                      12 000 ₸
                    </span>
                  </button>
                  <button
                    style={{
                      gridColumn: '1 / 4',
                      borderRadius: '14px 14px 44px 44px',
                      border: `2px solid ${v.s.S.border}`,
                      background: v.s.S.bg,
                      color: v.s.S.color,
                      fontFamily: 'inherit',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '0',
                    }}
                    type="button"
                    onClick={v.s.S.pick}
                    aria-pressed={v.s.S.on}
                  >
                    <span style={{ fontSize: '15px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Южная · фан-сектор</span>
                    <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '24px', fontWeight: '600' }}>2 000 ₸</span>
                  </button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', fontSize: '15px', color: '#5B6B8C' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span
                      style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '5px',
                        background: '#E7F5FB',
                        border: '2px solid #B8E2F4',
                        boxSizing: 'border-box',
                      }}
                    />
                    Свободно
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span
                      style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '5px',
                        background: '#0B7DB0',
                        border: '2px solid #0B7DB0',
                        boxSizing: 'border-box',
                      }}
                    />
                    Выбрано
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span
                      style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '5px',
                        background: '#EEF3F8',
                        border: '2px solid #EEF3F8',
                        boxSizing: 'border-box',
                      }}
                    />
                    Мало мест
                  </span>
                </div>
              </div>
              <aside style={{ flex: '1 1 360px', maxWidth: '420px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ padding: '26px', borderRadius: '26px', background: '#F2F6FA', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5B6B8C' }}>Трибуна</span>
                  <span style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '12px' }}>
                    <span
                      style={{
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '30px',
                        fontWeight: '600',
                        lineHeight: '1',
                        textTransform: 'uppercase',
                      }}
                    >
                      {v.zone.name}
                    </span>
                    <span
                      style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '30px', fontWeight: '600', color: '#0B7DB0', whiteSpace: 'nowrap' }}
                    >
                      {v.zone.priceLabel} ₸
                    </span>
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: '700', color: v.zone.leftColor }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: v.zone.leftColor }} />
                    {v.zone.left}
                  </span>
                  <span style={{ fontSize: '16px', lineHeight: '1.5', color: '#3F5578' }}>{v.zone.note}</span>
                </div>
                <div
                  style={{
                    padding: '26px',
                    borderRadius: '26px',
                    background: '#FFFFFF',
                    border: '1.5px solid #EEF3F8',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '18px',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span style={{ fontSize: '18px', fontWeight: '700' }}>Количество</span>
                      <span style={{ fontSize: '14px', color: '#5B6B8C' }}>до 6 билетов на аккаунт</span>
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', height: '52px', borderRadius: '14px', background: '#F2F6FA' }}>
                      <button
                        style={{
                          width: '52px',
                          height: '52px',
                          border: '0',
                          background: 'transparent',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        type="button"
                        aria-label="Меньше"
                        onClick={v.dec}
                      >
                        <Icon name="minus-sign" size={20} weight={2} color="#172A51" />
                      </button>
                      <span
                        style={{ minWidth: '40px', textAlign: 'center', fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '26px', fontWeight: '600' }}
                      >
                        {v.qty}
                      </span>
                      <button
                        style={{
                          width: '52px',
                          height: '52px',
                          border: '0',
                          background: 'transparent',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        type="button"
                        aria-label="Больше"
                        onClick={v.inc}
                      >
                        <Icon name="add-01" size={20} weight={2} color="#172A51" />
                      </button>
                    </span>
                  </span>
                  <span style={{ height: '1px', background: '#EEF3F8' }} />
                  <span style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', fontSize: '16px' }}>
                    <span style={{ color: '#5B6B8C' }}>{v.summary}</span>
                    <span style={{ fontWeight: '700' }}>{v.totalLabel} ₸</span>
                  </span>
                  <span style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', fontSize: '16px' }}>
                    <span style={{ color: '#5B6B8C' }}>Сервисный сбор</span>
                    <span style={{ fontWeight: '700' }}>0 ₸</span>
                  </span>
                  <span style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '18px', fontWeight: '700' }}>Итого</span>
                    <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '40px', fontWeight: '600', lineHeight: '1' }}>
                      {v.totalLabel} ₸
                    </span>
                  </span>
                  <Link
                    style={{
                      height: '60px',
                      borderRadius: '18px',
                      background: '#0B7DB0',
                      color: '#FFFFFF',
                      fontSize: '19px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      textDecoration: 'none',
                    }}
                    href="/profile"
                  >
                    <Icon name="ticket-01" size={22} weight={1.8} color="#FFFFFF" />
                    Перейти к оплате
                  </Link>
                  <span style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '14px', lineHeight: '1.4', color: '#5B6B8C' }}>
                    <Icon name="information-circle" size={18} weight={1.8} color="#5B6B8C" />
                    Билеты появятся в личном кабинете в разделе «Мои билеты» с QR-кодом для входа.
                  </span>
                </div>
              </aside>
            </div>
          </div>
        </section>
        <section
          style={{
            position: 'relative',
            margin: '0 max(24px, calc((100% - 1280px) / 2)) 40px',
            borderRadius: '32px',
            overflow: 'hidden',
            background: '#E7F5FB',
            padding: '56px 0',
          }}
          aria-label="Важно знать"
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '0 40px',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            <h2
              style={{
                margin: '0',
                fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                fontSize: '40px',
                fontWeight: '600',
                lineHeight: '1',
                textTransform: 'uppercase',
                color: '#172A51',
              }}
            >
              Важно знать
            </h2>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', color: '#172A51' }}>
              <div
                style={{
                  flex: '1 1 240px',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  padding: '22px',
                  borderRadius: '22px',
                  background: '#FFFFFF',
                }}
              >
                <span
                  style={{
                    flexShrink: '0',
                    width: '52px',
                    height: '52px',
                    borderRadius: '16px',
                    background: '#E7F5FB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name="clock-01" size={26} weight={1.7} color="#129ED9" />
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '18px', fontWeight: '700' }}>Вход с 17:30</span>
                  <span style={{ fontSize: '15px', lineHeight: '1.45', color: '#5B6B8C' }}>Ворота открываются за полтора часа до начала матча.</span>
                </span>
              </div>
              <div
                style={{
                  flex: '1 1 240px',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  padding: '22px',
                  borderRadius: '22px',
                  background: '#FFFFFF',
                }}
              >
                <span
                  style={{
                    flexShrink: '0',
                    width: '52px',
                    height: '52px',
                    borderRadius: '16px',
                    background: '#E7F5FB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name="qr-code" size={26} weight={1.7} color="#129ED9" />
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '18px', fontWeight: '700' }}>Вход по QR-коду</span>
                  <span style={{ fontSize: '15px', lineHeight: '1.45', color: '#5B6B8C' }}>
                    Покажите код из «Моих билетов» на турникете — распечатывать не нужно.
                  </span>
                </span>
              </div>
              <div
                style={{
                  flex: '1 1 240px',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  padding: '22px',
                  borderRadius: '22px',
                  background: '#FFFFFF',
                }}
              >
                <span
                  style={{
                    flexShrink: '0',
                    width: '52px',
                    height: '52px',
                    borderRadius: '16px',
                    background: '#E7F5FB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name="user-group-02" size={26} weight={1.7} color="#129ED9" />
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '18px', fontWeight: '700' }}>Фан-сектор</span>
                  <span style={{ fontSize: '15px', lineHeight: '1.45', color: '#5B6B8C' }}>
                    Южная трибуна — стоячие места, флаги и баннеры активной поддержки.
                  </span>
                </span>
              </div>
              <div
                style={{
                  flex: '1 1 240px',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  padding: '22px',
                  borderRadius: '22px',
                  background: '#FFFFFF',
                }}
              >
                <span
                  style={{
                    flexShrink: '0',
                    width: '52px',
                    height: '52px',
                    borderRadius: '16px',
                    background: '#E7F5FB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name="ticket-01" size={26} weight={1.7} color="#129ED9" />
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '18px', fontWeight: '700' }}>До 6 билетов</span>
                  <span style={{ fontSize: '15px', lineHeight: '1.45', color: '#5B6B8C' }}>На один аккаунт. Билет можно передать другу через приложение.</span>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section
          style={{
            position: 'relative',
            margin: '0 max(24px, calc((100% - 1280px) / 2)) 40px',
            borderRadius: '32px',
            overflow: 'hidden',
            background: '#FFFFFF',
            padding: '56px 0',
          }}
          aria-label="Другие матчи"
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '0 40px',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
              <h2
                style={{
                  margin: '0',
                  fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                  fontSize: '40px',
                  fontWeight: '600',
                  lineHeight: '1',
                  textTransform: 'uppercase',
                  color: '#172A51',
                }}
              >
                Другие домашние матчи
              </h2>
              <Link
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  minHeight: '44px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#0B7DB0',
                  textDecoration: 'none',
                }}
                href="/matches"
              >
                Календарь
                <Icon name="arrow-right-01" size={18} weight={2} color="#0B7DB0" />
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '200px minmax(0, 1fr) 160px',
                  alignItems: 'center',
                  gap: '24px',
                  padding: '22px 26px',
                  borderRadius: '22px',
                  background: '#F2F6FA',
                  color: '#172A51',
                }}
              >
                <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '18px', fontWeight: '700' }}>Вс, 9 ноября</span>
                  <span style={{ fontSize: '14px', color: '#5B6B8C' }}>27 тур · 15:00</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '19px', fontWeight: '700' }}>
                  <span
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img style={{ width: '30px', height: '36px', objectFit: 'contain' }} src={asset('/img/crest.png')} alt="" />
                  </span>
                  Ордабасы — Астана
                </span>
                <Link
                  style={{
                    justifySelf: 'end',
                    height: '48px',
                    padding: '0 20px',
                    borderRadius: '14px',
                    background: '#0B7DB0',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                  }}
                  href="/tickets"
                >
                  <Icon name="ticket-01" size={18} weight={1.8} color="#FFFFFF" />
                  Билеты
                </Link>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '200px minmax(0, 1fr) 160px',
                  alignItems: 'center',
                  gap: '24px',
                  padding: '22px 26px',
                  borderRadius: '22px',
                  background: '#F2F6FA',
                  color: '#172A51',
                }}
              >
                <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '18px', fontWeight: '700' }}>Ср, 19 ноября</span>
                  <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Кубок, 1/2 · 18:00</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '19px', fontWeight: '700' }}>
                  <span
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img style={{ width: '30px', height: '36px', objectFit: 'contain' }} src={asset('/img/crest.png')} alt="" />
                  </span>
                  Ордабасы — Актобе
                </span>
                <Link
                  style={{
                    justifySelf: 'end',
                    height: '48px',
                    padding: '0 20px',
                    borderRadius: '14px',
                    background: '#0B7DB0',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                  }}
                  href="/tickets"
                >
                  <Icon name="ticket-01" size={18} weight={1.8} color="#FFFFFF" />
                  Билеты
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
