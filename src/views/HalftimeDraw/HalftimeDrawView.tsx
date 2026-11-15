'use client';

/* Сгенерировано из дизайн-макета ORDA (canvas). Разметка повторяет макет 1:1. */
import { Fragment } from 'react';
import Link from 'next/link';
import { asset } from '@/lib/asset';
import { Icon } from '@/components/Icon';
import { Star } from '@/components/Star';
import { useDC } from '@/lib/dc';
import { vals, tick } from './HalftimeDraw.vals';
import './HalftimeDraw.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function HalftimeDrawView(props: {}) {
  const self = useDC(props, tick);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const v: any = vals(self);
  return (
    <>
      <div style={{ width: '100%', background: '#172A51', paddingBottom: '1px', fontFamily: "'Roboto Condensed', sans-serif", color: '#172A51' }}>
        <section style={{ position: 'relative', overflow: 'hidden', padding: '40px 0 44px' }} aria-label="Розыгрыш в перерыве">
          <Star w={220} h={360} fill="rgba(18, 158, 217, 0.12)" style={{ position: 'absolute', right: '-60px', top: '-80px' }} />
          <Star w={20} h={20} fill="#129ED9" style={{ position: 'absolute', left: '44%', top: '46px' }} />
          <Star w={12} h={12} fill="#FFFFFF" style={{ position: 'absolute', left: '62%', top: '120px' }} />
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
              gap: '22px',
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
              <Link style={{ color: '#7FA3C9', textDecoration: 'none' }} href="/fans">
                Фан-зона
              </Link>
              <Icon name="arrow-right-01" size={14} weight={2} color="#7FA3C9" />
              <Link style={{ color: '#7FA3C9', textDecoration: 'none' }} href="/fans/interactive">
                Интерактив
              </Link>
              <Icon name="arrow-right-01" size={14} weight={2} color="#7FA3C9" />
              <span style={{ color: '#CFE3F2' }}>Розыгрыш</span>
            </nav>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '32px', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 520px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
                  Розыгрыш в перерыве
                </h1>
                <p style={{ margin: '0', maxWidth: '600px', fontSize: '19px', lineHeight: '1.5', color: '#CFE3F2' }}>
                  Каждый билет, отмеченный на стадионе, участвует автоматически. Победителя выбираем в перерыве — на табло и в прямом эфире.
                </p>
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
          aria-label="Приз"
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
              gap: '28px',
            }}
          >
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                gap: '32px',
                flexWrap: 'wrap',
                padding: '40px',
                borderRadius: '30px',
                background: 'linear-gradient(130deg, #172A51 0%, #129ED9 100%)',
                color: '#FFFFFF',
              }}
            >
              <Star w={160} h={260} fill="rgba(255, 255, 255, 0.12)" style={{ position: 'absolute', right: '34%', top: '-90px' }} />
              <div style={{ position: 'relative', flex: '1 1 420px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <span
                  style={{
                    alignSelf: 'flex-start',
                    height: '26px',
                    padding: '0 10px',
                    borderRadius: '13px',
                    background: '#FFFFFF',
                    color: '#172A51',
                    fontSize: '12px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Главный приз
                </span>
                <span
                  style={{
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '56px',
                    fontWeight: '600',
                    lineHeight: '0.95',
                    textTransform: 'uppercase',
                  }}
                >
                  Игровая джерси с автографами
                </span>
                <span style={{ maxWidth: '460px', fontSize: '18px', lineHeight: '1.5', color: '#E7F5FB' }}>
                  Подписана всей командой после победы над «Астаной». Ещё 2 мяча с автографами и 5 × 500 баллов.
                </span>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      height: '44px',
                      padding: '0 16px',
                      borderRadius: '22px',
                      background: 'rgba(255, 255, 255, 0.14)',
                      fontSize: '16px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <Icon name="football" size={18} weight={1.8} color="#FFFFFF" />2 × мяч с автографами
                  </span>
                  <span
                    style={{
                      height: '44px',
                      padding: '0 16px',
                      borderRadius: '22px',
                      background: 'rgba(255, 255, 255, 0.14)',
                      fontSize: '16px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <Icon name="star" size={18} weight={1.8} color="#FFFFFF" />5 × 500 баллов
                  </span>
                </div>
              </div>
              <img
                style={{
                  position: 'relative',
                  flex: '0 0 340px',
                  width: '340px',
                  height: '340px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 20px 30px rgba(10, 18, 36, 0.45))',
                  animation: 'qd-float 3.2s ease-in-out infinite',
                }}
                src={asset('/img/jersey.webp')}
                alt="Игровая джерси"
              />
            </div>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'stretch', flexWrap: 'wrap' }}>
              <div
                style={{
                  flex: '1 1 380px',
                  minWidth: '0',
                  padding: '28px',
                  borderRadius: '26px',
                  background: '#F2F6FA',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '18px',
                }}
              >
                <h3
                  style={{
                    margin: '0',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '28px',
                    fontWeight: '600',
                    lineHeight: '1',
                    textTransform: 'uppercase',
                    color: '#172A51',
                  }}
                >
                  Ваш билет участвует
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '12px' }}>
                  <span style={{ padding: '16px', borderRadius: '18px', background: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5B6B8C' }}>Сектор</span>
                    <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '30px', fontWeight: '600', lineHeight: '1' }}>Юг</span>
                  </span>
                  <span style={{ padding: '16px', borderRadius: '18px', background: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5B6B8C' }}>Ряд</span>
                    <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '30px', fontWeight: '600', lineHeight: '1' }}>4</span>
                  </span>
                  <span style={{ padding: '16px', borderRadius: '18px', background: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5B6B8C' }}>Место</span>
                    <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '30px', fontWeight: '600', lineHeight: '1' }}>12</span>
                  </span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 16px',
                    borderRadius: '16px',
                    background: '#E8F5EE',
                    color: '#137040',
                    fontSize: '16px',
                    fontWeight: '700',
                  }}
                >
                  <Icon name="checkmark-circle-02" size={22} weight={1.8} color="#137040" />
                  Вы отметились на стадионе — участие подтверждено
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{ fontSize: '15px', color: '#5B6B8C' }}>До розыгрыша</span>
                    <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '48px', fontWeight: '600', lineHeight: '1' }}>{v.left}</span>
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                    <span style={{ fontSize: '15px', color: '#5B6B8C' }}>Участников</span>
                    <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '48px', fontWeight: '600', lineHeight: '1' }}>3 860</span>
                  </span>
                </div>
              </div>
              <div
                style={{
                  flex: '1.4 1 520px',
                  minWidth: '0',
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '28px',
                  borderRadius: '26px',
                  background: '#172A51',
                  color: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                <Star w={80} h={130} fill="rgba(18, 158, 217, 0.3)" style={{ position: 'absolute', right: '-20px', top: '-30px' }} />
                <span style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                  <h3
                    style={{
                      margin: '0',
                      fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                      fontSize: '28px',
                      fontWeight: '600',
                      lineHeight: '1',
                      textTransform: 'uppercase',
                      color: '#FFFFFF',
                    }}
                  >
                    Прямой эфир
                  </h3>
                  <span
                    style={{
                      alignSelf: 'flex-start',
                      height: '26px',
                      padding: '0 10px',
                      borderRadius: '13px',
                      background: '#E30512',
                      color: '#FFFFFF',
                      fontSize: '12px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#FFFFFF', animation: 'g-blink 1.2s ease-in-out infinite' }} />
                    На табло и здесь
                  </span>
                </span>
                <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '14px', textAlign: 'center' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#A9BCD6' }}>Сектор</span>
                  <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#A9BCD6' }}>Ряд</span>
                  <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#A9BCD6' }}>Место</span>
                  {v.drum.map((d: any, dIdx: number) => (
                    <Fragment key={dIdx}>
                      <span
                        style={{
                          position: 'relative',
                          height: '96px',
                          overflow: 'hidden',
                          borderRadius: '18px',
                          background: 'rgba(255, 255, 255, 0.08)',
                          fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                          fontSize: '56px',
                          fontWeight: '600',
                        }}
                      >
                        {d.spin && (
                          <>
                            <span style={{ position: 'absolute', left: '0', right: '0', top: '0', animation: `g-roll ${d.speed} linear infinite` }}>
                              <span style={{ display: 'block', height: '96px', lineHeight: '96px' }}>07</span>
                              <span style={{ display: 'block', height: '96px', lineHeight: '96px' }}>31</span>
                              <span style={{ display: 'block', height: '96px', lineHeight: '96px' }}>12</span>
                              <span style={{ display: 'block', height: '96px', lineHeight: '96px' }}>24</span>
                              <span style={{ display: 'block', height: '96px', lineHeight: '96px' }}>05</span>
                              <span style={{ display: 'block', height: '96px', lineHeight: '96px' }}>18</span>
                              <span style={{ display: 'block', height: '96px', lineHeight: '96px' }}>29</span>
                              <span style={{ display: 'block', height: '96px', lineHeight: '96px' }}>03</span>
                              <span style={{ display: 'block', height: '96px', lineHeight: '96px' }}>15</span>
                              <span style={{ display: 'block', height: '96px', lineHeight: '96px' }}>22</span>
                              <span style={{ display: 'block', height: '96px', lineHeight: '96px' }}>07</span>
                              <span style={{ display: 'block', height: '96px', lineHeight: '96px' }}>31</span>
                              <span style={{ display: 'block', height: '96px', lineHeight: '96px' }}>12</span>
                              <span style={{ display: 'block', height: '96px', lineHeight: '96px' }}>24</span>
                              <span style={{ display: 'block', height: '96px', lineHeight: '96px' }}>05</span>
                              <span style={{ display: 'block', height: '96px', lineHeight: '96px' }}>18</span>
                              <span style={{ display: 'block', height: '96px', lineHeight: '96px' }}>29</span>
                              <span style={{ display: 'block', height: '96px', lineHeight: '96px' }}>03</span>
                              <span style={{ display: 'block', height: '96px', lineHeight: '96px' }}>15</span>
                              <span style={{ display: 'block', height: '96px', lineHeight: '96px' }}>22</span>
                            </span>
                          </>
                        )}
                        {d.still && (
                          <>
                            <span style={{ display: 'block', height: '96px', lineHeight: '96px', color: d.color }}>{d.v}</span>
                          </>
                        )}
                      </span>
                    </Fragment>
                  ))}
                </div>
                <span style={{ position: 'relative', textAlign: 'center', fontSize: '17px', lineHeight: '1.5', color: '#CFE3F2' }} aria-live="polite">
                  {v.caption}
                </span>
                {v.idle && (
                  <>
                    <button
                      style={{
                        position: 'relative',
                        height: '56px',
                        border: '0',
                        borderRadius: '16px',
                        background: '#FFFFFF',
                        color: '#172A51',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        fontFamily: 'inherit',
                        fontSize: '18px',
                        fontWeight: '700',
                        cursor: 'pointer',
                      }}
                      type="button"
                      onClick={v.start}
                    >
                      <Icon name="play" size={20} weight={1.8} color="#172A51" />
                      Смотреть розыгрыш
                    </button>
                  </>
                )}
                {v.won && (
                  <>
                    <div
                      style={{
                        position: 'relative',
                        display: 'flex',
                        gap: '16px',
                        alignItems: 'center',
                        padding: '18px',
                        borderRadius: '20px',
                        background: '#FFFFFF',
                        color: '#172A51',
                        animation: 'qd-pop .6s cubic-bezier(.2,1.4,.4,1) both',
                      }}
                    >
                      <span
                        style={{
                          flexShrink: '0',
                          width: '56px',
                          height: '56px',
                          borderRadius: '50%',
                          background: '#FDE6E7',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon name="gift" size={28} weight={1.8} color="#E30512" />
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span style={{ fontSize: '19px', fontWeight: '700' }}>Это вы! Джерси ваша</span>
                        <span style={{ fontSize: '15px', lineHeight: '1.45', color: '#5B6B8C' }}>
                          Подойдите к стойке фан-шопа у входа «Юг» до конца матча и покажите QR-код в приложении
                        </span>
                      </span>
                    </div>
                  </>
                )}
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
            background: '#E7F5FB',
            padding: '56px 0',
          }}
          aria-label="Прошлые победители"
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
              gap: '28px',
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
                Прошлые победители
              </h2>
            </div>
            <div style={{ padding: '4px 28px', borderRadius: '26px', background: '#F2F6FA' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px 0', borderBottom: '1px solid #DCE3EE' }}>
                <span
                  style={{
                    flexShrink: '0',
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name="gift" size={22} weight={1.7} color="#129ED9" />
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: '1' }}>
                  <span style={{ fontSize: '17px', fontWeight: '700' }}>Шарф и кепка клуба</span>
                  <span style={{ fontSize: '14px', color: '#5B6B8C' }}>ORDA — Елимай · 19 октября</span>
                </span>
                <span style={{ fontSize: '16px', fontWeight: '700' }}>Север · 8 · 21</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px 0', borderBottom: '1px solid #DCE3EE' }}>
                <span
                  style={{
                    flexShrink: '0',
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name="football" size={22} weight={1.7} color="#129ED9" />
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: '1' }}>
                  <span style={{ fontSize: '17px', fontWeight: '700' }}>Мяч с автографами</span>
                  <span style={{ fontSize: '14px', color: '#5B6B8C' }}>ORDA — Жетысу · 28 сентября</span>
                </span>
                <span style={{ fontSize: '16px', fontWeight: '700' }}>Запад · 15 · 3</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px 0', borderBottom: '1px solid #DCE3EE' }}>
                <span
                  style={{
                    flexShrink: '0',
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name="gift" size={22} weight={1.7} color="#129ED9" />
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: '1' }}>
                  <span style={{ fontSize: '17px', fontWeight: '700' }}>Билеты на весь сезон</span>
                  <span style={{ fontSize: '14px', color: '#5B6B8C' }}>ORDA — Тобыл · 24 августа</span>
                </span>
                <span style={{ fontSize: '16px', fontWeight: '700' }}>Юг · 2 · 17</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px 0' }}>
                <span
                  style={{
                    flexShrink: '0',
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name="star" size={22} weight={1.7} color="#129ED9" />
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: '1' }}>
                  <span style={{ fontSize: '17px', fontWeight: '700' }}>1 000 баллов</span>
                  <span style={{ fontSize: '14px', color: '#5B6B8C' }}>ORDA — Атырау · 10 августа</span>
                </span>
                <span style={{ fontSize: '16px', fontWeight: '700' }}>Восток · 11 · 9</span>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <div style={{ padding: '22px', borderRadius: '22px', background: '#F2F6FA', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '14px',
                    background: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name="ticket-01" size={22} weight={1.7} color="#129ED9" />
                </span>
                <span style={{ fontSize: '16px', lineHeight: '1.5', color: '#3E4F70' }}>Участвует каждый билет, отмеченный через «Я на стадионе»</span>
              </div>
              <div style={{ padding: '22px', borderRadius: '22px', background: '#F2F6FA', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '14px',
                    background: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name="tv-01" size={22} weight={1.7} color="#129ED9" />
                </span>
                <span style={{ fontSize: '16px', lineHeight: '1.5', color: '#3E4F70' }}>Розыгрыш идёт в перерыве — на табло и здесь</span>
              </div>
              <div style={{ padding: '22px', borderRadius: '22px', background: '#F2F6FA', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '14px',
                    background: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name="gift" size={22} weight={1.7} color="#129ED9" />
                </span>
                <span style={{ fontSize: '16px', lineHeight: '1.5', color: '#3E4F70' }}>Приз выдают на стойке фан-шопа у входа «Юг» до конца матча</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
