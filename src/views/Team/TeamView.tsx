'use client';

/* Сгенерировано из дизайн-макета ORDA (canvas). Разметка повторяет макет 1:1. */
import { Fragment } from 'react';
import Link from 'next/link';
import { route } from '@/lib/route';
import { asset } from '@/lib/asset';
import { Icon } from '@/components/Icon';
import { Star } from '@/components/Star';
import { PlayerCard } from '@/components/PlayerCard';
import { useDC } from '@/lib/dc';
import { vals, tick } from './Team.vals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function TeamView(props: {}) {
  const self = useDC(props, tick);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const v: any = vals(self);
  return (
    <>
      <div style={{ width: '100%', background: '#172A51', paddingBottom: '1px', fontFamily: "'Roboto Condensed', sans-serif", color: '#172A51' }}>
        <section style={{ position: 'relative', overflow: 'hidden', padding: '48px 0 48px' }} aria-label="Команды">
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
                  <span style={{ color: '#CFE3F2' }}>Команды</span>
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
                  Команды клуба
                </h1>
                <p style={{ margin: '0', maxWidth: '560px', fontSize: '19px', lineHeight: '1.5', color: '#CFE3F2' }}>
                  Основной состав, молодёжная и женская команды, академия — все команды «Ордабасы» в одном месте.
                </p>
              </div>
            </div>
            <div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}
              role="tablist"
              aria-label="Команды клуба"
            >
              {v.teams.map((t: any, tIdx: number) => (
                <Fragment key={tIdx}>
                  <button
                    style={{
                      position: 'relative',
                      overflow: 'hidden',
                      minHeight: '112px',
                      padding: '20px 22px',
                      borderRadius: '24px',
                      border: `1.5px solid ${t.border}`,
                      background: t.bg,
                      color: t.fg,
                      fontFamily: 'inherit',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '14px',
                    }}
                    type="button"
                    role="tab"
                    aria-selected={t.sel}
                    onClick={t.pick}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', width: '100%' }}>
                      <span
                        style={{
                          fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                          fontSize: '26px',
                          fontWeight: '600',
                          lineHeight: '1',
                          textTransform: 'uppercase',
                        }}
                      >
                        {t.title}
                      </span>
                      <span
                        style={{
                          height: '26px',
                          padding: '0 10px',
                          borderRadius: '13px',
                          background: t.tagBg,
                          color: t.tagFg,
                          fontSize: '12px',
                          fontWeight: '700',
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                          display: 'flex',
                          alignItems: 'center',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {t.tag}
                      </span>
                    </span>
                    <span style={{ fontSize: '15px', color: t.sub }}>{t.note}</span>
                  </button>
                </Fragment>
              ))}
            </div>
          </div>
        </section>
        {v.isMain && (
          <>
            <section
              style={{
                position: 'relative',
                margin: '0 max(24px, calc((100% - 1280px) / 2)) 40px',
                borderRadius: '32px',
                overflow: 'hidden',
                background: 'linear-gradient(120deg, #E7F5FB 0%, #CFE9F6 55%, #9FD6F0 100%)',
                padding: '56px 0',
              }}
              aria-label="Основной состав"
            >
              <span
                style={{
                  position: 'absolute',
                  right: '30px',
                  top: '-30px',
                  fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                  fontSize: '260px',
                  fontWeight: '700',
                  lineHeight: '0.85',
                  color: 'rgba(255, 255, 255, 0.55)',
                  textAlign: 'right',
                  whiteSpace: 'pre-line',
                }}
                aria-hidden="true"
              >
                {'ORDA\n2026'}
              </span>
              <Star w={120} h={200} fill="rgba(18, 158, 217, 0.18)" style={{ position: 'absolute', right: '44%', bottom: '-70px' }} />
              <Star w={22} h={22} fill="#129ED9" style={{ position: 'absolute', right: '40%', top: '60px' }} />
              <Star w={12} h={12} fill="#FFFFFF" style={{ position: 'absolute', right: '60px', bottom: '70px' }} />
              <img
                style={{ position: 'absolute', right: '0', bottom: '0', height: '108%', width: 'auto', maxWidth: 'none' }}
                src={asset('/img/media-team.webp')}
                alt="Игроки «Ордабасы»"
              />
              <div style={{ position: 'relative', width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 40px', boxSizing: 'border-box' }}>
                <div style={{ maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '50%',
                        background: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 6px 16px rgba(23, 42, 81, 0.12)',
                      }}
                    >
                      <img style={{ width: '32px', height: '38px', objectFit: 'contain' }} src={asset('/img/crest.png')} alt="" />
                    </span>
                    <span style={{ fontSize: '15px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#0B7DB0' }}>
                      ФК «Ордабасы» · Премьер-лига
                    </span>
                  </span>
                  <span
                    style={{
                      fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                      fontSize: '64px',
                      fontWeight: '600',
                      lineHeight: '0.92',
                      textTransform: 'uppercase',
                      color: '#172A51',
                    }}
                  >
                    Основной
                    <br />
                    состав
                  </span>
                  <p style={{ margin: '0', maxWidth: '480px', fontSize: '18px', lineHeight: '1.5', color: '#3F5578' }}>
                    Игроки, тренерский штаб и персонал первой команды в сезоне 2026.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '12px', maxWidth: '560px' }}>
                    <span
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                        padding: '18px 22px',
                        borderRadius: '20px',
                        background: 'rgba(255, 255, 255, 0.72)',
                      }}
                    >
                      <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '40px', fontWeight: '600', lineHeight: '1', color: '#172A51' }}>
                        23
                      </span>
                      <span style={{ fontSize: '14px', color: '#5B6B8C' }}>игрока в заявке</span>
                    </span>
                    <span
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                        padding: '18px 22px',
                        borderRadius: '20px',
                        background: 'rgba(255, 255, 255, 0.72)',
                      }}
                    >
                      <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '40px', fontWeight: '600', lineHeight: '1', color: '#172A51' }}>
                        1
                      </span>
                      <span style={{ fontSize: '14px', color: '#5B6B8C' }}>место в таблице</span>
                    </span>
                    <span
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                        padding: '18px 22px',
                        borderRadius: '20px',
                        background: 'rgba(255, 255, 255, 0.72)',
                      }}
                    >
                      <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '40px', fontWeight: '600', lineHeight: '1', color: '#172A51' }}>
                        12
                      </span>
                      <span style={{ fontSize: '14px', color: '#5B6B8C' }}>сотрудников штаба</span>
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
              id="players"
              aria-label="Игроки"
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
                    Игроки
                  </h2>
                  <button
                    style={{
                      height: '44px',
                      padding: '0 18px',
                      borderRadius: '22px',
                      border: '0',
                      background: '#172A51',
                      color: '#FFFFFF',
                      fontFamily: 'inherit',
                      fontSize: '16px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                    }}
                    type="button"
                  >
                    Сезон 2026
                    <Icon name="arrow-down-01" size={18} weight={2} color="#FFFFFF" />
                  </button>
                </div>
                <nav style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }} aria-label="Позиции">
                  {v.players.map((g: any, gIdx: number) => (
                    <Fragment key={gIdx}>
                      <Link
                        style={{
                          height: '44px',
                          padding: '0 18px',
                          borderRadius: '22px',
                          background: '#F2F6FA',
                          color: '#172A51',
                          fontSize: '16px',
                          fontWeight: '600',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          textDecoration: 'none',
                        }}
                        href={route(g.anchor)}
                      >
                        {g.title}
                        <span style={{ fontSize: '13px', fontWeight: '700', color: '#0B7DB0' }}>{g.count}</span>
                      </Link>
                    </Fragment>
                  ))}
                </nav>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '44px', marginTop: '8px' }}>
                  {v.players.map((g: any, gIdx: number) => (
                    <Fragment key={gIdx}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }} id={g.id}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                          <h3
                            style={{
                              margin: '0',
                              fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                              fontSize: '30px',
                              fontWeight: '600',
                              lineHeight: '1',
                              textTransform: 'uppercase',
                              color: '#172A51',
                            }}
                          >
                            {g.title}
                          </h3>
                          <span
                            style={{
                              height: '28px',
                              minWidth: '28px',
                              padding: '0 10px',
                              borderRadius: '14px',
                              background: '#E7F5FB',
                              color: '#0B7DB0',
                              fontSize: '14px',
                              fontWeight: '700',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxSizing: 'border-box',
                            }}
                          >
                            {g.count}
                          </span>
                          <span style={{ flexGrow: '1', height: '1px', background: '#EEF3F8' }} />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '20px' }}>
                          {g.people.map((p: any, pIdx: number) => (
                            <Fragment key={pIdx}>
                              <div style={{ height: '312px' }}>
                                <PlayerCard person={p} />
                              </div>
                            </Fragment>
                          ))}
                        </div>
                      </div>
                    </Fragment>
                  ))}
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
              id="staff"
              aria-label="Штаб и персонал"
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
                    Штаб и персонал
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
                    href="/#interview"
                  >
                    Структура клуба
                    <Icon name="arrow-right-01" size={18} weight={2} color="#0B7DB0" />
                  </Link>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '44px' }}>
                  {v.staff.map((g: any, gIdx: number) => (
                    <Fragment key={gIdx}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }} id={g.id}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                          <h3
                            style={{
                              margin: '0',
                              fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                              fontSize: '30px',
                              fontWeight: '600',
                              lineHeight: '1',
                              textTransform: 'uppercase',
                              color: '#172A51',
                            }}
                          >
                            {g.title}
                          </h3>
                          <span
                            style={{
                              height: '28px',
                              minWidth: '28px',
                              padding: '0 10px',
                              borderRadius: '14px',
                              background: '#E7F5FB',
                              color: '#0B7DB0',
                              fontSize: '14px',
                              fontWeight: '700',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxSizing: 'border-box',
                            }}
                          >
                            {g.count}
                          </span>
                          <span style={{ flexGrow: '1', height: '1px', background: '#EEF3F8' }} />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '20px' }}>
                          {g.people.map((p: any, pIdx: number) => (
                            <Fragment key={pIdx}>
                              <div style={{ height: '312px' }}>
                                <PlayerCard person={p} />
                              </div>
                            </Fragment>
                          ))}
                        </div>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
        {v.isOther && (
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
              aria-label="Команда"
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
                <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
                  <div style={{ flex: '1 1 480px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <span
                      style={{
                        alignSelf: 'flex-start',
                        height: '30px',
                        padding: '0 14px',
                        borderRadius: '15px',
                        background: '#E7F5FB',
                        color: '#0B7DB0',
                        fontSize: '14px',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <Icon name="clock-01" size={16} weight={2} color="#0B7DB0" />
                      Раздел готовится
                    </span>
                    <span
                      style={{
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '56px',
                        fontWeight: '600',
                        lineHeight: '0.95',
                        textTransform: 'uppercase',
                        color: '#172A51',
                      }}
                    >
                      {v.cur.title}
                    </span>
                    <p style={{ margin: '0', maxWidth: '560px', fontSize: '18px', lineHeight: '1.5', color: '#5B6B8C' }}>
                      Здесь появятся состав, тренерский штаб, календарь и результаты команды. Макет страницы такой же, как у основного состава.
                    </p>
                  </div>
                  <div style={{ flex: '1 1 420px', display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '12px' }}>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '20px 22px', borderRadius: '20px', background: '#F2F6FA' }}>
                      <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Турнир</span>
                      <span style={{ fontSize: '20px', fontWeight: '700', color: '#172A51' }}>{v.cur.league}</span>
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '20px 22px', borderRadius: '20px', background: '#F2F6FA' }}>
                      <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Главный тренер</span>
                      <span style={{ fontSize: '20px', fontWeight: '700', color: '#172A51' }}>Уточняется</span>
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '20px 22px', borderRadius: '20px', background: '#F2F6FA' }}>
                      <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Игроков в заявке</span>
                      <span style={{ fontSize: '20px', fontWeight: '700', color: '#172A51' }}>—</span>
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '20px 22px', borderRadius: '20px', background: '#F2F6FA' }}>
                      <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Домашняя арена</span>
                      <span style={{ fontSize: '20px', fontWeight: '700', color: '#172A51' }}>Уточняется</span>
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '12px' }}>
                  <h3
                    style={{
                      margin: '0',
                      fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                      fontSize: '30px',
                      fontWeight: '600',
                      lineHeight: '1',
                      textTransform: 'uppercase',
                      color: '#172A51',
                    }}
                  >
                    Состав
                  </h3>
                  <span style={{ flexGrow: '1', height: '1px', background: '#EEF3F8' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '20px' }}>
                  <div
                    style={{
                      position: 'relative',
                      height: '312px',
                      borderRadius: '22px',
                      overflow: 'hidden',
                      background: 'linear-gradient(180deg, #EEF3F8 0%, #E3EAF3 100%)',
                      border: '1.5px dashed #C9D6E6',
                      boxSizing: 'border-box',
                    }}
                    aria-hidden="true"
                  >
                    <Star w={70} h={110} fill="#DCE6F1" style={{ position: 'absolute', right: '-20px', top: '30px' }} />
                    <span
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '40px',
                        width: '96px',
                        height: '96px',
                        marginLeft: '-48px',
                        borderRadius: '50%',
                        background: '#DCE6F1',
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '146px',
                        width: '150px',
                        height: '150px',
                        marginLeft: '-75px',
                        borderRadius: '75px 75px 0 0',
                        background: '#DCE6F1',
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        left: '16px',
                        right: '16px',
                        bottom: '16px',
                        height: '56px',
                        borderRadius: '14px',
                        background: 'rgba(255, 255, 255, 0.8)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '6px',
                        padding: '0 14px',
                      }}
                    >
                      <span style={{ width: '70%', height: '10px', borderRadius: '5px', background: '#DCE6F1' }} />
                      <span style={{ width: '40%', height: '8px', borderRadius: '4px', background: '#E8EEF6' }} />
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'relative',
                      height: '312px',
                      borderRadius: '22px',
                      overflow: 'hidden',
                      background: 'linear-gradient(180deg, #EEF3F8 0%, #E3EAF3 100%)',
                      border: '1.5px dashed #C9D6E6',
                      boxSizing: 'border-box',
                    }}
                    aria-hidden="true"
                  >
                    <Star w={70} h={110} fill="#DCE6F1" style={{ position: 'absolute', right: '-20px', top: '30px' }} />
                    <span
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '40px',
                        width: '96px',
                        height: '96px',
                        marginLeft: '-48px',
                        borderRadius: '50%',
                        background: '#DCE6F1',
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '146px',
                        width: '150px',
                        height: '150px',
                        marginLeft: '-75px',
                        borderRadius: '75px 75px 0 0',
                        background: '#DCE6F1',
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        left: '16px',
                        right: '16px',
                        bottom: '16px',
                        height: '56px',
                        borderRadius: '14px',
                        background: 'rgba(255, 255, 255, 0.8)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '6px',
                        padding: '0 14px',
                      }}
                    >
                      <span style={{ width: '70%', height: '10px', borderRadius: '5px', background: '#DCE6F1' }} />
                      <span style={{ width: '40%', height: '8px', borderRadius: '4px', background: '#E8EEF6' }} />
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'relative',
                      height: '312px',
                      borderRadius: '22px',
                      overflow: 'hidden',
                      background: 'linear-gradient(180deg, #EEF3F8 0%, #E3EAF3 100%)',
                      border: '1.5px dashed #C9D6E6',
                      boxSizing: 'border-box',
                    }}
                    aria-hidden="true"
                  >
                    <Star w={70} h={110} fill="#DCE6F1" style={{ position: 'absolute', right: '-20px', top: '30px' }} />
                    <span
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '40px',
                        width: '96px',
                        height: '96px',
                        marginLeft: '-48px',
                        borderRadius: '50%',
                        background: '#DCE6F1',
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '146px',
                        width: '150px',
                        height: '150px',
                        marginLeft: '-75px',
                        borderRadius: '75px 75px 0 0',
                        background: '#DCE6F1',
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        left: '16px',
                        right: '16px',
                        bottom: '16px',
                        height: '56px',
                        borderRadius: '14px',
                        background: 'rgba(255, 255, 255, 0.8)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '6px',
                        padding: '0 14px',
                      }}
                    >
                      <span style={{ width: '70%', height: '10px', borderRadius: '5px', background: '#DCE6F1' }} />
                      <span style={{ width: '40%', height: '8px', borderRadius: '4px', background: '#E8EEF6' }} />
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'relative',
                      height: '312px',
                      borderRadius: '22px',
                      overflow: 'hidden',
                      background: 'linear-gradient(180deg, #EEF3F8 0%, #E3EAF3 100%)',
                      border: '1.5px dashed #C9D6E6',
                      boxSizing: 'border-box',
                    }}
                    aria-hidden="true"
                  >
                    <Star w={70} h={110} fill="#DCE6F1" style={{ position: 'absolute', right: '-20px', top: '30px' }} />
                    <span
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '40px',
                        width: '96px',
                        height: '96px',
                        marginLeft: '-48px',
                        borderRadius: '50%',
                        background: '#DCE6F1',
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '146px',
                        width: '150px',
                        height: '150px',
                        marginLeft: '-75px',
                        borderRadius: '75px 75px 0 0',
                        background: '#DCE6F1',
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        left: '16px',
                        right: '16px',
                        bottom: '16px',
                        height: '56px',
                        borderRadius: '14px',
                        background: 'rgba(255, 255, 255, 0.8)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '6px',
                        padding: '0 14px',
                      }}
                    >
                      <span style={{ width: '70%', height: '10px', borderRadius: '5px', background: '#DCE6F1' }} />
                      <span style={{ width: '40%', height: '8px', borderRadius: '4px', background: '#E8EEF6' }} />
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'relative',
                      height: '312px',
                      borderRadius: '22px',
                      overflow: 'hidden',
                      background: 'linear-gradient(180deg, #EEF3F8 0%, #E3EAF3 100%)',
                      border: '1.5px dashed #C9D6E6',
                      boxSizing: 'border-box',
                    }}
                    aria-hidden="true"
                  >
                    <Star w={70} h={110} fill="#DCE6F1" style={{ position: 'absolute', right: '-20px', top: '30px' }} />
                    <span
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '40px',
                        width: '96px',
                        height: '96px',
                        marginLeft: '-48px',
                        borderRadius: '50%',
                        background: '#DCE6F1',
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '146px',
                        width: '150px',
                        height: '150px',
                        marginLeft: '-75px',
                        borderRadius: '75px 75px 0 0',
                        background: '#DCE6F1',
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        left: '16px',
                        right: '16px',
                        bottom: '16px',
                        height: '56px',
                        borderRadius: '14px',
                        background: 'rgba(255, 255, 255, 0.8)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '6px',
                        padding: '0 14px',
                      }}
                    >
                      <span style={{ width: '70%', height: '10px', borderRadius: '5px', background: '#DCE6F1' }} />
                      <span style={{ width: '40%', height: '8px', borderRadius: '4px', background: '#E8EEF6' }} />
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'relative',
                      height: '312px',
                      borderRadius: '22px',
                      overflow: 'hidden',
                      background: 'linear-gradient(180deg, #EEF3F8 0%, #E3EAF3 100%)',
                      border: '1.5px dashed #C9D6E6',
                      boxSizing: 'border-box',
                    }}
                    aria-hidden="true"
                  >
                    <Star w={70} h={110} fill="#DCE6F1" style={{ position: 'absolute', right: '-20px', top: '30px' }} />
                    <span
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '40px',
                        width: '96px',
                        height: '96px',
                        marginLeft: '-48px',
                        borderRadius: '50%',
                        background: '#DCE6F1',
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '146px',
                        width: '150px',
                        height: '150px',
                        marginLeft: '-75px',
                        borderRadius: '75px 75px 0 0',
                        background: '#DCE6F1',
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        left: '16px',
                        right: '16px',
                        bottom: '16px',
                        height: '56px',
                        borderRadius: '14px',
                        background: 'rgba(255, 255, 255, 0.8)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '6px',
                        padding: '0 14px',
                      }}
                    >
                      <span style={{ width: '70%', height: '10px', borderRadius: '5px', background: '#DCE6F1' }} />
                      <span style={{ width: '40%', height: '8px', borderRadius: '4px', background: '#E8EEF6' }} />
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
                background: '#1F3562',
                padding: '40px 0',
              }}
              aria-label="Основной состав"
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
                <div style={{ display: 'flex', gap: '24px', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <span
                      style={{
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '32px',
                        fontWeight: '600',
                        lineHeight: '1',
                        textTransform: 'uppercase',
                        color: '#FFFFFF',
                      }}
                    >
                      А пока — основной состав
                    </span>
                    <span style={{ fontSize: '17px', color: '#CFE3F2' }}>Игроки, статистика и штаб первой команды уже на сайте.</span>
                  </span>
                  <button
                    style={{
                      height: '56px',
                      padding: '0 28px',
                      borderRadius: '16px',
                      border: '0',
                      background: '#FFFFFF',
                      color: '#172A51',
                      fontFamily: 'inherit',
                      fontSize: '18px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                    }}
                    type="button"
                    onClick={v.toMain}
                  >
                    Смотреть основной состав
                    <Icon name="arrow-right-01" size={20} weight={2} color="#172A51" />
                  </button>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </>
  );
}
