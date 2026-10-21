'use client';

/* Сгенерировано из дизайн-макета ORDA (canvas). Разметка повторяет макет 1:1. */
import { Fragment } from 'react';
import Link from 'next/link';
import { asset } from '@/lib/asset';
import { Icon } from '@/components/Icon';
import { Star } from '@/components/Star';
import { useDC } from '@/lib/dc';
import { vals, tick } from './Matches.vals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function MatchesView(props: {}) {
  const self = useDC(props, tick);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const v: any = vals(self);
  return (
    <>
      <div style={{ width: '100%', background: '#172A51', paddingBottom: '1px', fontFamily: "'Roboto Condensed', sans-serif", color: '#172A51' }}>
        <section style={{ position: 'relative', overflow: 'hidden', padding: '48px 0 44px' }} aria-label="Матчи">
          <Star w={220} h={360} fill="rgba(18, 158, 217, 0.12)" style={{ position: 'absolute', right: '-60px', top: '-80px' }} />
          <Star w={24} h={24} fill="#129ED9" style={{ position: 'absolute', left: '46%', top: '54px' }} />
          <Star w={12} h={12} fill="#FFFFFF" style={{ position: 'absolute', left: '62%', top: '120px' }} />
          <Star w={90} h={150} fill="rgba(124, 198, 233, 0.1)" style={{ position: 'absolute', left: '-30px', bottom: '-40px' }} />
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
              gap: '36px',
            }}
          >
            <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 520px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <nav
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
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
                  <span style={{ color: '#CFE3F2' }}>Матчи</span>
                </nav>
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
                  Матчи
                </h1>
                <p style={{ margin: '0', maxWidth: '560px', fontSize: '19px', lineHeight: '1.5', color: '#CFE3F2' }}>
                  Календарь, результаты и турнирная таблица Премьер-лиги 2026. Покупайте билеты и следите за командой.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <span
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    minWidth: '110px',
                    padding: '18px 20px',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '40px', fontWeight: '600', lineHeight: '1', color: '#FFFFFF' }}>
                    24
                  </span>
                  <span style={{ fontSize: '14px', color: '#A9BCD6' }}>матча</span>
                </span>
                <span
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    minWidth: '110px',
                    padding: '18px 20px',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '40px', fontWeight: '600', lineHeight: '1', color: '#7CC6E9' }}>
                    16
                  </span>
                  <span style={{ fontSize: '14px', color: '#A9BCD6' }}>побед</span>
                </span>
                <span
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    minWidth: '110px',
                    padding: '18px 20px',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '40px', fontWeight: '600', lineHeight: '1', color: '#FFFFFF' }}>
                    5
                  </span>
                  <span style={{ fontSize: '14px', color: '#A9BCD6' }}>ничьих</span>
                </span>
                <span
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    minWidth: '110px',
                    padding: '18px 20px',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '40px', fontWeight: '600', lineHeight: '1', color: '#FF8A92' }}>
                    3
                  </span>
                  <span style={{ fontSize: '14px', color: '#A9BCD6' }}>поражения</span>
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }} role="tablist" aria-label="Разделы">
              {v.tabs.map((t: any, tIdx: number) => (
                <Fragment key={tIdx}>
                  <button
                    style={{
                      height: '52px',
                      padding: '0 26px',
                      borderRadius: '26px',
                      border: '0',
                      background: t.bg,
                      color: t.fg,
                      fontFamily: 'inherit',
                      fontSize: '18px',
                      fontWeight: t.w,
                      cursor: 'pointer',
                    }}
                    type="button"
                    role="tab"
                    aria-selected={t.sel}
                    onClick={t.pick}
                  >
                    {t.label}
                  </button>
                </Fragment>
              ))}
            </div>
          </div>
        </section>
        {v.isSchedule && (
          <>
            <section
              style={{
                position: 'relative',
                margin: '0 max(24px, calc((100% - 1280px) / 2)) 40px',
                borderRadius: '32px',
                overflow: 'hidden',
                background: 'linear-gradient(120deg, #172A51 0%, #1B5A93 55%, #129ED9 100%)',
                padding: '48px 0',
              }}
              aria-label="Ближайший матч"
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '1280px',
                  margin: '0 auto',
                  padding: '0 40px',
                  boxSizing: 'border-box',
                  color: '#FFFFFF',
                  display: 'flex',
                  gap: '40px',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    right: '-10px',
                    top: '-30px',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '220px',
                    fontWeight: '700',
                    lineHeight: '0.85',
                    color: 'rgba(255, 255, 255, 0.06)',
                    textAlign: 'right',
                    whiteSpace: 'pre-line',
                  }}
                  aria-hidden="true"
                >
                  {'MATCH\nDAY'}
                </span>
                <Star w={26} h={26} fill="#FFFFFF" style={{ position: 'absolute', left: '44%', top: '34px' }} />
                <Star w={14} h={14} fill="#7CC6E9" style={{ position: 'absolute', right: '70px', bottom: '50px' }} />
                <Star w={110} h={180} fill="rgba(18, 158, 217, 0.35)" style={{ position: 'absolute', left: '-50px', bottom: '-70px' }} />
                <div style={{ position: 'relative', flex: '1 1 520px', display: 'flex', flexDirection: 'column', gap: '26px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        height: '30px',
                        padding: '0 14px',
                        borderRadius: '15px',
                        background: '#E30512',
                        fontSize: '13px',
                        fontWeight: '700',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      Ближайший · дома
                    </span>
                    <span style={{ fontSize: '16px', color: '#CFE3F2' }}>Премьер-лига 2026 · 25 тур · Шымкент</span>
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
                    <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', minWidth: '150px' }}>
                      <span
                        style={{
                          width: '104px',
                          height: '104px',
                          borderRadius: '50%',
                          background: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <img style={{ width: '70px', height: '84px', objectFit: 'contain' }} src={asset('/img/crest.png')} alt="" />
                      </span>
                      <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '26px', fontWeight: '600', textTransform: 'uppercase' }}>
                        Ордабасы
                      </span>
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                      <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '72px', fontWeight: '600', lineHeight: '1' }}>19:00</span>
                      <span style={{ fontSize: '17px', color: '#CFE3F2' }}>Сб, 25 октября</span>
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', minWidth: '150px' }}>
                      <span
                        style={{
                          width: '104px',
                          height: '104px',
                          borderRadius: '50%',
                          background: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <img style={{ width: '72px', height: '80px', objectFit: 'contain' }} src={asset('/img/club-kairat.webp')} alt="" />
                      </span>
                      <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '26px', fontWeight: '600', textTransform: 'uppercase' }}>
                        Кайрат
                      </span>
                    </span>
                  </div>
                </div>
                <div style={{ position: 'relative', flex: '1 1 360px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#CFE3F2' }}>
                    До начала матча
                  </span>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '10px' }}>
                    {v.countdown.map((c: any, cIdx: number) => (
                      <Fragment key={cIdx}>
                        <span
                          style={{
                            height: '84px',
                            borderRadius: '16px',
                            background: 'rgba(23, 42, 81, 0.5)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '4px',
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                              fontSize: '38px',
                              fontWeight: '600',
                              lineHeight: '1',
                              fontVariantNumeric: 'tabular-nums',
                            }}
                          >
                            {c.v}
                          </span>
                          <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#CFE3F2' }}>
                            {c.u}
                          </span>
                        </span>
                      </Fragment>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <Link
                      style={{
                        flex: '1',
                        height: '56px',
                        borderRadius: '16px',
                        background: '#FFFFFF',
                        color: '#172A51',
                        fontSize: '18px',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        textDecoration: 'none',
                      }}
                      href="/tickets"
                    >
                      <Icon name="ticket-01" size={20} weight={1.8} color="#172A51" />
                      Купить билеты
                    </Link>
                    <Link
                      style={{
                        height: '56px',
                        padding: '0 20px',
                        borderRadius: '16px',
                        border: '1.5px solid rgba(255, 255, 255, 0.5)',
                        color: '#FFFFFF',
                        fontSize: '17px',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        textDecoration: 'none',
                      }}
                      href="/matches/lineup"
                    >
                      Составы
                    </Link>
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
              aria-label="Календарь"
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
                    Календарь
                  </h2>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {v.filters.map((f: any, fIdx: number) => (
                      <Fragment key={fIdx}>
                        <button
                          style={{
                            height: '44px',
                            padding: '0 18px',
                            borderRadius: '22px',
                            border: '0',
                            background: f.bg,
                            color: f.color,
                            fontFamily: 'inherit',
                            fontSize: '16px',
                            fontWeight: f.weight,
                            cursor: 'pointer',
                          }}
                          type="button"
                          aria-pressed={f.pressed}
                          onClick={f.pick}
                        >
                          {f.label}
                        </button>
                      </Fragment>
                    ))}
                  </div>
                </div>
                {v.months.map((m: any, mIdx: number) => (
                  <Fragment key={mIdx}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <span
                        style={{
                          fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                          fontSize: '26px',
                          fontWeight: '600',
                          textTransform: 'uppercase',
                          color: '#172A51',
                        }}
                      >
                        {m.name}
                      </span>
                      {m.items.map((x: any, xIdx: number) => (
                        <Fragment key={xIdx}>
                          <div
                            style={{
                              display: 'grid',
                              gridTemplateColumns: '170px minmax(0, 1fr) 150px 260px',
                              alignItems: 'center',
                              gap: '24px',
                              padding: '22px 26px',
                              borderRadius: '22px',
                              background: '#F2F6FA',
                            }}
                          >
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                              <span style={{ fontSize: '18px', fontWeight: '700' }}>{x.date}</span>
                              <span style={{ fontSize: '14px', color: '#5B6B8C' }}>
                                {x.round} · {x.time}
                              </span>
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '18px' }}>
                              <span
                                style={{
                                  flex: '1',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'flex-end',
                                  gap: '12px',
                                  fontSize: '19px',
                                  fontWeight: x.h.weight,
                                  textAlign: 'right',
                                }}
                              >
                                {x.h.name}
                                <span
                                  style={{
                                    flexShrink: '0',
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '50%',
                                    background: '#FFFFFF',
                                    boxShadow: '0 2px 10px rgba(23, 42, 81, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden',
                                  }}
                                >
                                  {x.h.img && (
                                    <>
                                      <img style={{ width: '31px', height: '34px', objectFit: 'contain' }} src={x.h.img} alt="" />
                                    </>
                                  )}
                                  {x.h.noImg && (
                                    <>
                                      <span style={{ fontSize: '14px', fontWeight: '700', color: '#5B6B8C' }}>{x.h.short}</span>
                                    </>
                                  )}
                                </span>
                              </span>
                              <span
                                style={{
                                  fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                                  fontSize: '26px',
                                  fontWeight: '600',
                                  color: '#0B7DB0',
                                  minWidth: '80px',
                                  textAlign: 'center',
                                }}
                              >
                                {x.time}
                              </span>
                              <span style={{ flex: '1', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '19px', fontWeight: x.a.weight }}>
                                <span
                                  style={{
                                    flexShrink: '0',
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '50%',
                                    background: '#FFFFFF',
                                    boxShadow: '0 2px 10px rgba(23, 42, 81, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden',
                                  }}
                                >
                                  {x.a.img && (
                                    <>
                                      <img style={{ width: '31px', height: '34px', objectFit: 'contain' }} src={x.a.img} alt="" />
                                    </>
                                  )}
                                  {x.a.noImg && (
                                    <>
                                      <span style={{ fontSize: '14px', fontWeight: '700', color: '#5B6B8C' }}>{x.a.short}</span>
                                    </>
                                  )}
                                </span>
                                {x.a.name}
                              </span>
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px' }}>
                              <span
                                style={{
                                  height: '28px',
                                  padding: '0 12px',
                                  borderRadius: '14px',
                                  background: x.venueBg,
                                  color: x.venueColor,
                                  fontSize: '13px',
                                  fontWeight: '700',
                                  display: 'flex',
                                  alignItems: 'center',
                                }}
                              >
                                {x.venue}
                              </span>
                              <span style={{ fontSize: '14px', color: '#5B6B8C' }}>{x.city}</span>
                            </span>
                            <span style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                              {x.home && (
                                <>
                                  <Link
                                    style={{
                                      height: '44px',
                                      padding: '0 18px',
                                      borderRadius: '14px',
                                      background: '#0B7DB0',
                                      color: '#FFFFFF',
                                      fontSize: '15px',
                                      fontWeight: '700',
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '6px',
                                      textDecoration: 'none',
                                    }}
                                    href="/tickets"
                                  >
                                    <Icon name="ticket-01" size={18} weight={1.8} color="#FFFFFF" />
                                    Билеты
                                  </Link>
                                </>
                              )}
                              {x.away && (
                                <>
                                  <Link
                                    style={{
                                      height: '44px',
                                      padding: '0 18px',
                                      borderRadius: '14px',
                                      background: '#172A51',
                                      color: '#FFFFFF',
                                      fontSize: '15px',
                                      fontWeight: '700',
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '6px',
                                      textDecoration: 'none',
                                    }}
                                    href="/media#video"
                                  >
                                    <Icon name="play" size={16} color="#FFFFFF" />
                                    Трансляция
                                  </Link>
                                </>
                              )}
                              <button
                                style={{
                                  height: '44px',
                                  padding: '0 14px',
                                  borderRadius: '14px',
                                  border: `1.5px solid ${x.remBorder}`,
                                  background: x.remBg,
                                  color: x.remColor,
                                  fontFamily: 'inherit',
                                  fontSize: '15px',
                                  fontWeight: '700',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '6px',
                                  cursor: 'pointer',
                                }}
                                type="button"
                                onClick={x.toggle}
                              >
                                <Icon name={x.remIcon} size={18} weight={2} color={x.remColor} />
                                {x.remLabel}
                              </button>
                            </span>
                          </div>
                        </Fragment>
                      ))}
                    </div>
                  </Fragment>
                ))}
              </div>
            </section>
          </>
        )}
        {v.isResults && (
          <>
            <section
              style={{
                position: 'relative',
                margin: '0 max(24px, calc((100% - 1280px) / 2)) 40px',
                borderRadius: '32px',
                overflow: 'hidden',
                background: '#FFFFFF',
                padding: '56px 0',
              }}
              aria-label="Результаты"
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
                    Результаты
                  </h2>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '15px', fontWeight: '700', color: '#5B6B8C' }}>Последние 5 матчей</span>
                    <span style={{ display: 'flex', gap: '6px' }}>
                      {v.form.map((f: any, fIdx: number) => (
                        <Fragment key={fIdx}>
                          <span
                            style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '12px',
                              background: f.bg,
                              color: f.color,
                              fontSize: '16px',
                              fontWeight: '700',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            {f.l}
                          </span>
                        </Fragment>
                      ))}
                    </span>
                  </div>
                </div>
                {v.resultMonths.map((m: any, mIdx: number) => (
                  <Fragment key={mIdx}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <span
                        style={{
                          fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                          fontSize: '26px',
                          fontWeight: '600',
                          textTransform: 'uppercase',
                          color: '#172A51',
                        }}
                      >
                        {m.name}
                      </span>
                      {m.items.map((x: any, xIdx: number) => (
                        <Fragment key={xIdx}>
                          <Link
                            style={{
                              display: 'grid',
                              gridTemplateColumns: '170px minmax(0, 1fr) 140px',
                              alignItems: 'center',
                              gap: '24px',
                              padding: '22px 26px',
                              borderRadius: '22px',
                              background: '#F2F6FA',
                              color: '#172A51',
                              textDecoration: 'none',
                            }}
                            href="/matches/lineup"
                          >
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                              <span style={{ fontSize: '18px', fontWeight: '700' }}>{x.date}</span>
                              <span style={{ fontSize: '14px', color: '#5B6B8C' }}>{x.round}</span>
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '18px' }}>
                                <span
                                  style={{
                                    flex: '1',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    gap: '12px',
                                    fontSize: '19px',
                                    fontWeight: x.h.weight,
                                    textAlign: 'right',
                                  }}
                                >
                                  {x.h.name}
                                  <span
                                    style={{
                                      flexShrink: '0',
                                      width: '48px',
                                      height: '48px',
                                      borderRadius: '50%',
                                      background: '#FFFFFF',
                                      boxShadow: '0 2px 10px rgba(23, 42, 81, 0.1)',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      overflow: 'hidden',
                                    }}
                                  >
                                    {x.h.img && (
                                      <>
                                        <img style={{ width: '31px', height: '34px', objectFit: 'contain' }} src={x.h.img} alt="" />
                                      </>
                                    )}
                                    {x.h.noImg && (
                                      <>
                                        <span style={{ fontSize: '14px', fontWeight: '700', color: '#5B6B8C' }}>{x.h.short}</span>
                                      </>
                                    )}
                                  </span>
                                </span>
                                <span
                                  style={{
                                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                                    fontSize: '34px',
                                    fontWeight: '600',
                                    minWidth: '100px',
                                    textAlign: 'center',
                                    fontVariantNumeric: 'tabular-nums',
                                  }}
                                >
                                  {x.score}
                                </span>
                                <span style={{ flex: '1', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '19px', fontWeight: x.a.weight }}>
                                  <span
                                    style={{
                                      flexShrink: '0',
                                      width: '48px',
                                      height: '48px',
                                      borderRadius: '50%',
                                      background: '#FFFFFF',
                                      boxShadow: '0 2px 10px rgba(23, 42, 81, 0.1)',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      overflow: 'hidden',
                                    }}
                                  >
                                    {x.a.img && (
                                      <>
                                        <img style={{ width: '31px', height: '34px', objectFit: 'contain' }} src={x.a.img} alt="" />
                                      </>
                                    )}
                                    {x.a.noImg && (
                                      <>
                                        <span style={{ fontSize: '14px', fontWeight: '700', color: '#5B6B8C' }}>{x.a.short}</span>
                                      </>
                                    )}
                                  </span>
                                  {x.a.name}
                                </span>
                              </span>
                              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '14px', color: '#5B6B8C' }}>
                                <Icon name="football" size={16} color="#5B6B8C" />
                                {x.scorers}
                              </span>
                            </span>
                            <span
                              style={{
                                justifySelf: 'end',
                                height: '34px',
                                padding: '0 14px',
                                borderRadius: '17px',
                                background: x.resBg,
                                color: x.resColor,
                                fontSize: '14px',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              {x.res}
                            </span>
                          </Link>
                        </Fragment>
                      ))}
                    </div>
                  </Fragment>
                ))}
              </div>
            </section>
          </>
        )}
        {v.isTable && (
          <>
            <section
              style={{
                position: 'relative',
                margin: '0 max(24px, calc((100% - 1280px) / 2)) 40px',
                borderRadius: '32px',
                overflow: 'hidden',
                background: '#FFFFFF',
                padding: '56px 0',
              }}
              aria-label="Турнирная таблица"
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
                    Премьер-лига 2026
                  </h2>
                  <span style={{ fontSize: '16px', color: '#5B6B8C' }}>после 24 тура</span>
                </div>
                <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  <div style={{ flex: '3 1 640px', minWidth: '0' }}>
                    <div style={{ borderRadius: '24px', overflowX: 'auto', background: '#FFFFFF', boxShadow: '0 2px 12px rgba(23, 42, 81, 0.08)' }}>
                      <table style={{ width: '100%', minWidth: '640px', borderCollapse: 'collapse', fontSize: '17px', color: '#172A51' }}>
                        <thead>
                          <tr style={{ background: '#F2F6FA' }}>
                            <th
                              style={{
                                padding: '16px 14px',
                                textAlign: 'center',
                                fontSize: '13px',
                                fontWeight: '700',
                                letterSpacing: '0.06em',
                                color: '#5B6B8C',
                                textTransform: 'uppercase',
                              }}
                            >
                              #
                            </th>
                            <th
                              style={{
                                padding: '16px 14px',
                                textAlign: 'left',
                                fontSize: '13px',
                                fontWeight: '700',
                                letterSpacing: '0.06em',
                                color: '#5B6B8C',
                                textTransform: 'uppercase',
                              }}
                            >
                              Команда
                            </th>
                            <th
                              style={{
                                padding: '16px 14px',
                                textAlign: 'center',
                                fontSize: '13px',
                                fontWeight: '700',
                                letterSpacing: '0.06em',
                                color: '#5B6B8C',
                                textTransform: 'uppercase',
                              }}
                            >
                              И
                            </th>
                            <th
                              style={{
                                padding: '16px 14px',
                                textAlign: 'center',
                                fontSize: '13px',
                                fontWeight: '700',
                                letterSpacing: '0.06em',
                                color: '#5B6B8C',
                                textTransform: 'uppercase',
                              }}
                            >
                              В
                            </th>
                            <th
                              style={{
                                padding: '16px 14px',
                                textAlign: 'center',
                                fontSize: '13px',
                                fontWeight: '700',
                                letterSpacing: '0.06em',
                                color: '#5B6B8C',
                                textTransform: 'uppercase',
                              }}
                            >
                              Н
                            </th>
                            <th
                              style={{
                                padding: '16px 14px',
                                textAlign: 'center',
                                fontSize: '13px',
                                fontWeight: '700',
                                letterSpacing: '0.06em',
                                color: '#5B6B8C',
                                textTransform: 'uppercase',
                              }}
                            >
                              П
                            </th>
                            <th
                              style={{
                                padding: '16px 14px',
                                textAlign: 'center',
                                fontSize: '13px',
                                fontWeight: '700',
                                letterSpacing: '0.06em',
                                color: '#5B6B8C',
                                textTransform: 'uppercase',
                              }}
                            >
                              РМ
                            </th>
                            <th
                              style={{
                                padding: '16px 14px',
                                textAlign: 'center',
                                fontSize: '13px',
                                fontWeight: '700',
                                letterSpacing: '0.06em',
                                color: '#5B6B8C',
                                textTransform: 'uppercase',
                              }}
                            >
                              О
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {v.table.map((r: any, rIdx: number) => (
                            <Fragment key={rIdx}>
                              <tr style={{ background: r.bg, borderTop: '1px solid #EEF3F8' }}>
                                <td
                                  style={{
                                    padding: '14px',
                                    textAlign: 'center',
                                    fontVariantNumeric: 'tabular-nums',
                                    fontWeight: '700',
                                    color: r.posColor,
                                    boxShadow: `inset 4px 0 0 ${r.zone}`,
                                  }}
                                >
                                  {r.pos}
                                </td>
                                <td style={{ padding: '12px 14px' }}>
                                  <span style={{ display: 'flex', alignItems: 'center', gap: '14px', fontWeight: r.weight }}>
                                    <span
                                      style={{
                                        flexShrink: '0',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        background: '#FFFFFF',
                                        boxShadow: '0 2px 10px rgba(23, 42, 81, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        overflow: 'hidden',
                                      }}
                                    >
                                      {r.img && (
                                        <>
                                          <img style={{ width: '26px', height: '28px', objectFit: 'contain' }} src={r.img} alt="" />
                                        </>
                                      )}
                                      {r.noImg && (
                                        <>
                                          <span style={{ fontSize: '12px', fontWeight: '700', color: '#5B6B8C' }}>{r.short}</span>
                                        </>
                                      )}
                                    </span>
                                    {r.name}
                                  </span>
                                </td>
                                <td style={{ padding: '14px', textAlign: 'center', fontVariantNumeric: 'tabular-nums' }}>{r.p}</td>
                                <td style={{ padding: '14px', textAlign: 'center', fontVariantNumeric: 'tabular-nums' }}>{r.w}</td>
                                <td style={{ padding: '14px', textAlign: 'center', fontVariantNumeric: 'tabular-nums' }}>{r.d}</td>
                                <td style={{ padding: '14px', textAlign: 'center', fontVariantNumeric: 'tabular-nums' }}>{r.l}</td>
                                <td style={{ padding: '14px', textAlign: 'center', fontVariantNumeric: 'tabular-nums' }}>{r.gd}</td>
                                <td
                                  style={{
                                    padding: '14px',
                                    textAlign: 'center',
                                    fontVariantNumeric: 'tabular-nums',
                                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                                    fontSize: '22px',
                                    fontWeight: '600',
                                    color: r.ptsColor,
                                  }}
                                >
                                  {r.pts}
                                </td>
                              </tr>
                            </Fragment>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div
                      style={{
                        position: 'relative',
                        overflow: 'hidden',
                        padding: '28px',
                        borderRadius: '24px',
                        background: 'linear-gradient(160deg, #172A51 0%, #129ED9 100%)',
                        color: '#FFFFFF',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                      }}
                    >
                      <Star w={70} h={110} fill="rgba(255, 255, 255, 0.12)" style={{ position: 'absolute', right: '-20px', top: '-20px' }} />
                      <span style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#CFE3F2' }}>
                        После 24 тура
                      </span>
                      <span style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                        <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '96px', fontWeight: '600', lineHeight: '0.9' }}>1</span>
                        <span style={{ fontSize: '20px', fontWeight: '700' }}>место</span>
                      </span>
                      <span style={{ fontSize: '17px', color: '#E7F5FB' }}>53 очка · +27 разница мячей</span>
                    </div>
                    <div style={{ padding: '24px', borderRadius: '24px', background: '#F2F6FA', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      <span style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#172A51' }}>
                        Зоны таблицы
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: '#5B6B8C' }}>
                        <span style={{ width: '14px', height: '14px', borderRadius: '4px', background: '#129ED9' }} />
                        Лига чемпионов, 1-й квалификационный раунд
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: '#5B6B8C' }}>
                        <span style={{ width: '14px', height: '14px', borderRadius: '4px', background: '#7CC6E9' }} />
                        Лига конференций, квалификация
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: '#5B6B8C' }}>
                        <span style={{ width: '14px', height: '14px', borderRadius: '4px', background: '#E30512' }} />
                        Выбывание в Первую лигу
                      </span>
                      <span style={{ fontSize: '14px', lineHeight: '1.5', color: '#5B6B8C' }}>
                        И — игры, В — победы, Н — ничьи, П — поражения, РМ — разница мячей, О — очки.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </>
  );
}
