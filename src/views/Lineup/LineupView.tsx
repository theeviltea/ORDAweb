'use client';

/* Сгенерировано из дизайн-макета ORDA (canvas). Разметка повторяет макет 1:1. */
import { Fragment } from 'react';
import Link from 'next/link';
import { asset } from '@/lib/asset';
import { Icon } from '@/components/Icon';
import { Star } from '@/components/Star';
import { useDC } from '@/lib/dc';
import { vals, tick } from './Lineup.vals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function LineupView(props: {}) {
  const self = useDC(props, tick);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const v: any = vals(self);
  return (
    <>
      <div style={{ width: '100%', background: '#172A51', paddingBottom: '1px', fontFamily: "'Roboto Condensed', sans-serif", color: '#172A51' }}>
        <section style={{ position: 'relative', overflow: 'hidden', padding: '40px 0 40px' }} aria-label="Составы">
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
              <span style={{ color: '#CFE3F2' }}>Составы</span>
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
                Состав и расстановка
              </h1>
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '17px', color: '#CFE3F2' }}>
                <Icon name="information-circle" size={20} weight={1.8} color="#7CC6E9" />
                Ожидаемый состав на матч с «Кайратом». Официальный — за час до игры.
              </span>
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
                LINE UP
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
                <span style={{ fontSize: '16px', color: '#E7F5FB' }}>Сб, 25 октября · 19:00 · Премьер-лига, 25 тур</span>
              </span>
              <Link
                style={{
                  position: 'relative',
                  height: '56px',
                  padding: '0 26px',
                  borderRadius: '16px',
                  background: '#FFFFFF',
                  color: '#172A51',
                  fontSize: '18px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                }}
                href="/tickets"
              >
                <Icon name="ticket-01" size={20} weight={1.8} color="#172A51" />
                Купить билеты
              </Link>
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
          aria-label="Расстановка"
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
              <div style={{ flex: '1.3 1 560px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
                    Расстановка
                  </h2>
                  <span
                    style={{
                      height: '40px',
                      padding: '0 16px',
                      borderRadius: '20px',
                      background: '#E7F5FB',
                      color: '#0B7DB0',
                      fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                      fontSize: '22px',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    4-3-3
                  </span>
                </div>
                <div
                  style={{
                    position: 'relative',
                    height: '760px',
                    borderRadius: '28px',
                    overflow: 'hidden',
                    background: 'repeating-linear-gradient(180deg, #1B5A93 0px, #1B5A93 76px, #1E62A0 76px, #1E62A0 152px)',
                  }}
                >
                  <div style={{ position: 'absolute', inset: '24px', border: '2px solid rgba(255, 255, 255, 0.4)', borderRadius: '8px' }} aria-hidden="true" />
                  <div
                    style={{ position: 'absolute', left: '24px', right: '24px', top: '50%', height: '2px', background: 'rgba(255, 255, 255, 0.4)' }}
                    aria-hidden="true"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      width: '150px',
                      height: '150px',
                      margin: '-75px 0 0 -75px',
                      border: '2px solid rgba(255, 255, 255, 0.4)',
                      borderRadius: '50%',
                    }}
                    aria-hidden="true"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '24px',
                      width: '320px',
                      height: '120px',
                      marginLeft: '-160px',
                      border: '2px solid rgba(255, 255, 255, 0.4)',
                      borderTop: '0',
                    }}
                    aria-hidden="true"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      bottom: '24px',
                      width: '320px',
                      height: '120px',
                      marginLeft: '-160px',
                      border: '2px solid rgba(255, 255, 255, 0.4)',
                      borderBottom: '0',
                    }}
                    aria-hidden="true"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      bottom: '24px',
                      width: '140px',
                      height: '48px',
                      marginLeft: '-70px',
                      border: '2px solid rgba(255, 255, 255, 0.4)',
                      borderBottom: '0',
                    }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                      fontSize: '64px',
                      fontWeight: '600',
                      letterSpacing: '0.06em',
                      color: 'rgba(255, 255, 255, 0.14)',
                    }}
                    aria-hidden="true"
                  >
                    ORDA
                  </span>
                  <Star w={22} h={22} fill="#7CC6E9" style={{ position: 'absolute', right: '44px', top: '44px' }} />
                  <div style={{ position: 'absolute', inset: '24px 24px 24px' }}>
                    {v.xi.map((p: any, pIdx: number) => (
                      <Fragment key={pIdx}>
                        <Link
                          style={{
                            position: 'absolute',
                            left: p.x,
                            top: p.y,
                            width: '112px',
                            marginLeft: '-56px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '6px',
                            color: '#FFFFFF',
                            textDecoration: 'none',
                          }}
                          href="/team/player"
                        >
                          <span style={{ position: 'relative', width: '76px', height: '76px' }}>
                            <span
                              style={{
                                position: 'absolute',
                                inset: '0',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                background: '#FFFFFF',
                                border: '3px solid #FFFFFF',
                                boxSizing: 'border-box',
                                boxShadow: '0 8px 18px rgba(10, 18, 36, 0.35)',
                              }}
                            >
                              <img
                                style={{
                                  position: 'absolute',
                                  left: '50%',
                                  top: '0',
                                  width: '170%',
                                  height: 'auto',
                                  maxWidth: 'none',
                                  transform: 'translateX(-50%)',
                                }}
                                src={p.photo}
                                alt=""
                              />
                            </span>
                            <span
                              style={{
                                position: 'absolute',
                                left: '-6px',
                                bottom: '-4px',
                                minWidth: '30px',
                                height: '30px',
                                padding: '0 6px',
                                borderRadius: '15px',
                                background: '#172A51',
                                border: '2px solid #FFFFFF',
                                boxSizing: 'border-box',
                                fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                                fontSize: '16px',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              {p.num}
                            </span>
                            {p.cap && (
                              <>
                                <span
                                  style={{
                                    position: 'absolute',
                                    right: '-6px',
                                    top: '-4px',
                                    width: '26px',
                                    height: '26px',
                                    borderRadius: '50%',
                                    background: '#E30512',
                                    border: '2px solid #FFFFFF',
                                    boxSizing: 'border-box',
                                    fontSize: '12px',
                                    fontWeight: '700',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                  }}
                                  title="Капитан"
                                >
                                  К
                                </span>
                              </>
                            )}
                          </span>
                          <span
                            style={{
                              padding: '3px 10px',
                              borderRadius: '10px',
                              background: 'rgba(10, 18, 36, 0.55)',
                              fontSize: '14px',
                              fontWeight: '700',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {p.short}
                          </span>
                        </Link>
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ flex: '1 1 400px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
                    Стартовый состав
                  </h2>
                  <span style={{ fontSize: '16px', color: '#5B6B8C' }}>11 игроков</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '18px 20px',
                    borderRadius: '22px',
                    background: '#1F3562',
                    color: '#FFFFFF',
                  }}
                >
                  <span
                    style={{
                      position: 'relative',
                      flexShrink: '0',
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      background: '#E7F5FB',
                    }}
                  >
                    <img
                      style={{ position: 'absolute', left: '50%', top: '0', width: '170%', height: 'auto', maxWidth: 'none', transform: 'translateX(-50%)' }}
                      src={asset('/img/people/martin.webp')}
                      alt=""
                    />
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: '1' }}>
                    <span style={{ fontSize: '19px', fontWeight: '700' }}>Андрей Мартин</span>
                    <span style={{ fontSize: '14px', color: '#CFE3F2' }}>Главный тренер</span>
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#A9BCD6' }}>Схема</span>
                    <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '34px', fontWeight: '600', lineHeight: '1' }}>4-3-3</span>
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {v.list.map((p: any, pIdx: number) => (
                    <Fragment key={pIdx}>
                      <Link
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '14px',
                          padding: '10px 0',
                          borderBottom: `1px solid ${p.line}`,
                          color: '#172A51',
                          textDecoration: 'none',
                        }}
                        href="/team/player"
                      >
                        <span
                          style={{
                            width: '34px',
                            fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                            fontSize: '22px',
                            fontWeight: '600',
                            color: '#0B7DB0',
                            textAlign: 'center',
                          }}
                        >
                          {p.num}
                        </span>
                        <span
                          style={{
                            position: 'relative',
                            flexShrink: '0',
                            width: '44px',
                            height: '44px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            background: '#E7F5FB',
                          }}
                        >
                          <img
                            style={{
                              position: 'absolute',
                              left: '50%',
                              top: '0',
                              width: '170%',
                              height: 'auto',
                              maxWidth: 'none',
                              transform: 'translateX(-50%)',
                            }}
                            src={p.photo}
                            alt=""
                          />
                        </span>
                        <span style={{ display: 'flex', flexDirection: 'column', gap: '1px', flexGrow: '1', minWidth: '0' }}>
                          <span style={{ fontSize: '17px', fontWeight: '700' }}>{p.name}</span>
                          <span style={{ fontSize: '14px', color: '#5B6B8C' }}>{p.role}</span>
                        </span>
                        {p.cap && (
                          <>
                            <span
                              style={{
                                height: '26px',
                                padding: '0 10px',
                                borderRadius: '13px',
                                background: '#E30512',
                                color: '#FFFFFF',
                                fontSize: '12px',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              Капитан
                            </span>
                          </>
                        )}
                      </Link>
                    </Fragment>
                  ))}
                </div>
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
          aria-label="Запасные"
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
                Запасные
              </h2>
              <span style={{ fontSize: '16px', color: '#5B6B8C' }}>8 игроков</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '14px' }}>
              {v.bench.map((p: any, pIdx: number) => (
                <Fragment key={pIdx}>
                  <Link
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '14px 16px',
                      borderRadius: '20px',
                      background: '#FFFFFF',
                      color: '#172A51',
                      textDecoration: 'none',
                    }}
                    href="/team/player"
                  >
                    <span
                      style={{
                        position: 'relative',
                        flexShrink: '0',
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        background: '#E7F5FB',
                      }}
                    >
                      <img
                        style={{ position: 'absolute', left: '50%', top: '0', width: '170%', height: 'auto', maxWidth: 'none', transform: 'translateX(-50%)' }}
                        src={p.photo}
                        alt=""
                      />
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
                      <span style={{ fontSize: '17px', fontWeight: '700' }}>{p.short}</span>
                      <span style={{ fontSize: '14px', color: '#5B6B8C' }}>№ {p.num}</span>
                    </span>
                  </Link>
                </Fragment>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
