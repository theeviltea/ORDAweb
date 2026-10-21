'use client';

/* Сгенерировано из дизайн-макета ORDA (canvas). Разметка повторяет макет 1:1. */
import { Fragment } from 'react';
import Link from 'next/link';
import { asset } from '@/lib/asset';
import { Icon } from '@/components/Icon';
import { Star } from '@/components/Star';
import { useDC } from '@/lib/dc';
import { vals, tick } from './Media.vals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function MediaView(props: {}) {
  const self = useDC(props, tick);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const v: any = vals(self);
  return (
    <>
      <div style={{ width: '100%', background: '#172A51', paddingBottom: '1px', fontFamily: "'Roboto Condensed', sans-serif", color: '#172A51' }}>
        <section style={{ position: 'relative', overflow: 'hidden', padding: '48px 0 44px' }} aria-label="Медиа">
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
                  <span style={{ color: '#CFE3F2' }}>Медиа</span>
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
                  Медиацентр
                </h1>
                <p style={{ margin: '0', maxWidth: '560px', fontSize: '19px', lineHeight: '1.5', color: '#CFE3F2' }}>
                  Новости, видео, фото, интервью и пресс-конференции «Ордабасы». Всё о клубе — из первых рук.
                </p>
              </div>
            </div>
            <nav style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }} aria-label="Разделы медиацентра">
              <a
                style={{
                  height: '44px',
                  padding: '0 18px',
                  borderRadius: '22px',
                  background: '#FFFFFF',
                  color: '#172A51',
                  fontFamily: 'inherit',
                  fontSize: '16px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  textDecoration: 'none',
                  border: '0',
                  cursor: 'pointer',
                }}
                href="#top"
              >
                Всё
              </a>
              <a
                style={{
                  height: '44px',
                  padding: '0 18px',
                  borderRadius: '22px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#CFE3F2',
                  fontFamily: 'inherit',
                  fontSize: '16px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  textDecoration: 'none',
                  border: '0',
                  cursor: 'pointer',
                }}
                href="#news"
              >
                Новости
              </a>
              <a
                style={{
                  height: '44px',
                  padding: '0 18px',
                  borderRadius: '22px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#CFE3F2',
                  fontFamily: 'inherit',
                  fontSize: '16px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  textDecoration: 'none',
                  border: '0',
                  cursor: 'pointer',
                }}
                href="#video"
              >
                Видео
              </a>
              <a
                style={{
                  height: '44px',
                  padding: '0 18px',
                  borderRadius: '22px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#CFE3F2',
                  fontFamily: 'inherit',
                  fontSize: '16px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  textDecoration: 'none',
                  border: '0',
                  cursor: 'pointer',
                }}
                href="#photo"
              >
                Фото
              </a>
              <a
                style={{
                  height: '44px',
                  padding: '0 18px',
                  borderRadius: '22px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#CFE3F2',
                  fontFamily: 'inherit',
                  fontSize: '16px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  textDecoration: 'none',
                  border: '0',
                  cursor: 'pointer',
                }}
                href="#stories"
              >
                Статьи и интервью
              </a>
              <a
                style={{
                  height: '44px',
                  padding: '0 18px',
                  borderRadius: '22px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#CFE3F2',
                  fontFamily: 'inherit',
                  fontSize: '16px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  textDecoration: 'none',
                  border: '0',
                  cursor: 'pointer',
                }}
                href="#press"
              >
                Пресс-конференции
              </a>
            </nav>
          </div>
        </section>
        <section style={{ position: 'relative', margin: '0 0 40px', background: 'transparent', padding: '0' }} aria-label="Главное">
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
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '20px' }} id="top">
              <Link
                style={{
                  position: 'relative',
                  display: 'block',
                  height: '540px',
                  borderRadius: '28px',
                  overflow: 'hidden',
                  background: '#172A51',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
                href="/media"
              >
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: '40% center' }}
                  src={asset('/img/video-goal.webp')}
                  alt=""
                />
                <span
                  style={{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg, rgba(23, 42, 81, 0) 35%, rgba(23, 42, 81, 0.92) 100%)' }}
                  aria-hidden="true"
                />
                <span style={{ position: 'absolute', left: '32px', right: '32px', bottom: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <span
                    style={{
                      alignSelf: 'flex-start',
                      height: '28px',
                      padding: '0 12px',
                      borderRadius: '14px',
                      background: '#FFFFFF',
                      color: '#172A51',
                      fontSize: '13px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    Матч
                  </span>
                  <span
                    style={{
                      fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                      fontSize: '44px',
                      fontWeight: '600',
                      lineHeight: '1.02',
                      textTransform: 'uppercase',
                      maxWidth: '720px',
                    }}
                  >
                    «Ордабасы» сохранил лидерство и завершил первый круг на вершине таблицы
                  </span>
                  <span style={{ fontSize: '15px', color: '#CFE3F2' }}>18 мая 2025</span>
                </span>
              </Link>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Link
                  style={{
                    position: 'relative',
                    display: 'block',
                    height: '260px',
                    borderRadius: '28px',
                    overflow: 'hidden',
                    background: '#172A51',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                  }}
                  href="/media"
                >
                  <img
                    style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
                    src={asset('/img/news-lineup.webp')}
                    alt=""
                  />
                  <span
                    style={{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg, rgba(23, 42, 81, 0) 35%, rgba(23, 42, 81, 0.92) 100%)' }}
                    aria-hidden="true"
                  />
                  <span style={{ position: 'absolute', left: '24px', right: '24px', bottom: '22px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <span
                      style={{
                        alignSelf: 'flex-start',
                        height: '28px',
                        padding: '0 12px',
                        borderRadius: '14px',
                        background: '#FFFFFF',
                        color: '#172A51',
                        fontSize: '13px',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      Команда
                    </span>
                    <span
                      style={{
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '26px',
                        fontWeight: '600',
                        lineHeight: '1.02',
                        textTransform: 'uppercase',
                        maxWidth: '720px',
                      }}
                    >
                      Состав на матч с «Кайратом» объявлен
                    </span>
                    <span style={{ fontSize: '15px', color: '#CFE3F2' }}>Сегодня</span>
                  </span>
                </Link>
                <Link
                  style={{
                    position: 'relative',
                    display: 'block',
                    height: '260px',
                    borderRadius: '28px',
                    overflow: 'hidden',
                    background: '#172A51',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                  }}
                  href="/media"
                >
                  <img
                    style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: '45% center' }}
                    src={asset('/img/news-shout.webp')}
                    alt=""
                  />
                  <span
                    style={{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg, rgba(23, 42, 81, 0) 35%, rgba(23, 42, 81, 0.92) 100%)' }}
                    aria-hidden="true"
                  />
                  <span style={{ position: 'absolute', left: '24px', right: '24px', bottom: '22px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <span
                      style={{
                        alignSelf: 'flex-start',
                        height: '28px',
                        padding: '0 12px',
                        borderRadius: '14px',
                        background: '#FFFFFF',
                        color: '#172A51',
                        fontSize: '13px',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      Клуб
                    </span>
                    <span
                      style={{
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '26px',
                        fontWeight: '600',
                        lineHeight: '1.02',
                        textTransform: 'uppercase',
                        maxWidth: '720px',
                      }}
                    >
                      Новый нападающий подписал контракт с клубом
                    </span>
                    <span style={{ fontSize: '15px', color: '#CFE3F2' }}>31 июля</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          style={{ position: 'relative', margin: '0 24px 40px', borderRadius: '32px', overflow: 'hidden', background: '#FFFFFF', padding: '56px 0' }}
          id="news"
          aria-label="Новости"
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
                Новости
              </h2>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }} role="tablist" aria-label="Темы">
                {v.chips.map((c: any, cIdx: number) => (
                  <Fragment key={cIdx}>
                    <button
                      style={{
                        height: '44px',
                        padding: '0 18px',
                        borderRadius: '22px',
                        border: '0',
                        background: c.bg,
                        color: c.fg,
                        fontFamily: 'inherit',
                        fontSize: '16px',
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
              {v.news.map((n: any, nIdx: number) => (
                <Fragment key={nIdx}>
                  <Link
                    style={{
                      borderRadius: '24px',
                      overflow: 'hidden',
                      background: '#FFFFFF',
                      boxShadow: '0 2px 12px rgba(23, 42, 81, 0.08)',
                      color: '#172A51',
                      textDecoration: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                    href="/media"
                  >
                    <span style={{ position: 'relative', height: '200px', background: '#EEF3F8' }}>
                      <img style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }} src={n.img} alt="" />
                      <span
                        style={{
                          position: 'absolute',
                          left: '14px',
                          top: '14px',
                          height: '26px',
                          padding: '0 11px',
                          borderRadius: '13px',
                          background: '#FFFFFF',
                          color: '#172A51',
                          fontSize: '12px',
                          fontWeight: '700',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        {n.tagLabel}
                      </span>
                    </span>
                    <span style={{ padding: '18px 20px 22px', display: 'flex', flexDirection: 'column', gap: '10px', flexGrow: '1' }}>
                      <span style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1.25' }}>{n.title}</span>
                      <span style={{ marginTop: 'auto', fontSize: '14px', color: '#5B6B8C' }}>{n.meta}</span>
                    </span>
                  </Link>
                </Fragment>
              ))}
            </div>
            <Link
              style={{
                alignSelf: 'center',
                height: '52px',
                padding: '0 28px',
                borderRadius: '16px',
                background: '#F2F6FA',
                color: '#172A51',
                fontSize: '17px',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
              }}
              href="/media"
            >
              Показать ещё
              <Icon name="arrow-down-01" size={18} weight={2} color="#172A51" />
            </Link>
          </div>
        </section>
        <section
          style={{ position: 'relative', margin: '0 24px 40px', borderRadius: '32px', overflow: 'hidden', background: '#1F3562', padding: '56px 0' }}
          id="video"
          aria-label="Видео"
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
                  color: '#FFFFFF',
                }}
              >
                ORDA TV
              </h2>
              <Link
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  minHeight: '44px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#CFE3F2',
                  textDecoration: 'none',
                }}
                href="/media"
              >
                Все видео
                <Icon name="arrow-right-01" size={18} weight={2} color="#CFE3F2" />
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.6fr) minmax(0, 1fr)', gap: '24px', alignItems: 'start' }}>
              <Link
                style={{
                  position: 'relative',
                  display: 'block',
                  aspectRatio: '16 / 9',
                  borderRadius: '28px',
                  overflow: 'hidden',
                  background: '#172A51',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
                href="/media"
              >
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                  src={asset('/img/video-goal.webp')}
                  alt=""
                />
                <span
                  style={{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg, rgba(23, 42, 81, 0.1) 30%, rgba(23, 42, 81, 0.9) 100%)' }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '28px',
                    top: '28px',
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
                  Премьера
                </span>
                <span
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '42%',
                    width: '88px',
                    height: '88px',
                    margin: '-44px 0 0 -44px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.95)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 30px rgba(10, 18, 36, 0.35)',
                  }}
                >
                  <Icon name="play" size={34} color="#129ED9" filled />
                </span>
                <span style={{ position: 'absolute', left: '32px', right: '32px', bottom: '30px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <span
                    style={{
                      fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                      fontSize: '38px',
                      fontWeight: '600',
                      lineHeight: '1.02',
                      textTransform: 'uppercase',
                    }}
                  >
                    Ордабасы — Кайрат: лучшие моменты победы
                  </span>
                  <span style={{ fontSize: '15px', color: '#CFE3F2' }}>Обзор матча · 24 сентября · 12,4 тыс. просмотров · 08:24</span>
                </span>
              </Link>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link
                  style={{
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'center',
                    padding: '12px',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                  }}
                  href="/media"
                >
                  <span
                    style={{
                      position: 'relative',
                      flexShrink: '0',
                      width: '180px',
                      height: '104px',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      background: '#172A51',
                    }}
                  >
                    <img
                      style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                      src={asset('/img/video-training.webp')}
                      alt=""
                    />
                    <span
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        width: '40px',
                        height: '40px',
                        margin: '-20px 0 0 -20px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.92)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon name="play" size={16} color="#129ED9" filled />
                    </span>
                    <span
                      style={{
                        position: 'absolute',
                        right: '8px',
                        bottom: '8px',
                        height: '22px',
                        padding: '0 7px',
                        borderRadius: '6px',
                        background: 'rgba(10, 18, 36, 0.78)',
                        fontSize: '12px',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      04:06
                    </span>
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '0' }}>
                    <span style={{ fontSize: '18px', fontWeight: '700', lineHeight: '1.25' }}>Команда встретилась с юными болельщиками</span>
                    <span style={{ fontSize: '14px', color: '#A9BCD6' }}>Клуб · сегодня · 3,1 тыс.</span>
                  </span>
                </Link>
                <Link
                  style={{
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'center',
                    padding: '12px',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                  }}
                  href="/media"
                >
                  <span
                    style={{
                      position: 'relative',
                      flexShrink: '0',
                      width: '180px',
                      height: '104px',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      background: '#172A51',
                    }}
                  >
                    <img
                      style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                      src={asset('/img/photo-smoke.webp')}
                      alt=""
                    />
                    <span
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        width: '40px',
                        height: '40px',
                        margin: '-20px 0 0 -20px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.92)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon name="play" size={16} color="#129ED9" filled />
                    </span>
                    <span
                      style={{
                        position: 'absolute',
                        right: '8px',
                        bottom: '8px',
                        height: '22px',
                        padding: '0 7px',
                        borderRadius: '6px',
                        background: 'rgba(10, 18, 36, 0.78)',
                        fontSize: '12px',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      07:42
                    </span>
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '0' }}>
                    <span style={{ fontSize: '18px', fontWeight: '700', lineHeight: '1.25' }}>Ордабасы — Тобыл: лучшие моменты</span>
                    <span style={{ fontSize: '14px', color: '#A9BCD6' }}>Обзоры · 14 сентября · 9,8 тыс.</span>
                  </span>
                </Link>
                <Link
                  style={{
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'center',
                    padding: '12px',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                  }}
                  href="/media"
                >
                  <span
                    style={{
                      position: 'relative',
                      flexShrink: '0',
                      width: '180px',
                      height: '104px',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      background: '#172A51',
                    }}
                  >
                    <img
                      style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                      src={asset('/img/news-trio.webp')}
                      alt=""
                    />
                    <span
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        width: '40px',
                        height: '40px',
                        margin: '-20px 0 0 -20px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.92)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon name="play" size={16} color="#129ED9" filled />
                    </span>
                    <span
                      style={{
                        position: 'absolute',
                        right: '8px',
                        bottom: '8px',
                        height: '22px',
                        padding: '0 7px',
                        borderRadius: '6px',
                        background: 'rgba(10, 18, 36, 0.78)',
                        fontSize: '12px',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      02:47
                    </span>
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '0' }}>
                    <span style={{ fontSize: '18px', fontWeight: '700', lineHeight: '1.25' }}>За кадром: презентация новой формы</span>
                    <span style={{ fontSize: '14px', color: '#A9BCD6' }}>Клуб · 27 августа · 15 тыс.</span>
                  </span>
                </Link>
                <Link
                  style={{
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'center',
                    padding: '12px',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                  }}
                  href="/media"
                >
                  <span
                    style={{
                      position: 'relative',
                      flexShrink: '0',
                      width: '180px',
                      height: '104px',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      background: '#172A51',
                    }}
                  >
                    <img
                      style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                      src={asset('/img/news-teamphoto.webp')}
                      alt=""
                    />
                    <span
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        width: '40px',
                        height: '40px',
                        margin: '-20px 0 0 -20px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.92)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon name="play" size={16} color="#129ED9" filled />
                    </span>
                    <span
                      style={{
                        position: 'absolute',
                        right: '8px',
                        bottom: '8px',
                        height: '22px',
                        padding: '0 7px',
                        borderRadius: '6px',
                        background: 'rgba(10, 18, 36, 0.78)',
                        fontSize: '12px',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      05:12
                    </span>
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '0' }}>
                    <span style={{ fontSize: '18px', fontWeight: '700', lineHeight: '1.25' }}>Тренировка перед выездом в Астану</span>
                    <span style={{ fontSize: '14px', color: '#A9BCD6' }}>Тренировки · 20 сентября · 6,4 тыс.</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          style={{ position: 'relative', margin: '0 24px 40px', borderRadius: '32px', overflow: 'hidden', background: '#E7F5FB', padding: '56px 0' }}
          id="photo"
          aria-label="Фото"
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
                Фото
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
                href="/media"
              >
                Все фотоотчёты
                <Icon name="arrow-right-01" size={18} weight={2} color="#0B7DB0" />
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gridAutoRows: '220px', gap: '16px' }}>
              <div style={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
                <Link
                  style={{
                    position: 'relative',
                    display: 'block',
                    height: '456px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    background: '#172A51',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                  }}
                  href="/media"
                >
                  <img
                    style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                    src={asset('/img/video-goal.webp')}
                    alt=""
                  />
                  <span
                    style={{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg, rgba(23, 42, 81, 0) 45%, rgba(23, 42, 81, 0.88) 100%)' }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      position: 'absolute',
                      right: '16px',
                      top: '16px',
                      height: '30px',
                      padding: '0 12px',
                      borderRadius: '15px',
                      background: 'rgba(10, 18, 36, 0.6)',
                      fontSize: '14px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <Icon name="image-01" size={16} color="#FFFFFF" />
                    48
                  </span>
                  <span style={{ position: 'absolute', left: '22px', right: '22px', bottom: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <span
                      style={{
                        fontSize: '30px',
                        fontWeight: '700',
                        lineHeight: '1.2',
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        textTransform: 'uppercase',
                      }}
                    >
                      Ордабасы — Кайрат: эмоции победного матча
                    </span>
                    <span style={{ fontSize: '14px', color: '#CFE3F2' }}>24 сентября 2026</span>
                  </span>
                </Link>
              </div>
              <Link
                style={{
                  position: 'relative',
                  display: 'block',
                  height: '220px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: '#172A51',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
                href="/media"
              >
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                  src={asset('/img/video-training.webp')}
                  alt=""
                />
                <span
                  style={{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg, rgba(23, 42, 81, 0) 45%, rgba(23, 42, 81, 0.88) 100%)' }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '16px',
                    height: '30px',
                    padding: '0 12px',
                    borderRadius: '15px',
                    background: 'rgba(10, 18, 36, 0.6)',
                    fontSize: '14px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Icon name="image-01" size={16} color="#FFFFFF" />
                  36
                </span>
                <span style={{ position: 'absolute', left: '22px', right: '22px', bottom: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '19px', fontWeight: '700', lineHeight: '1.2' }}>Тренировка перед выездом в Астану</span>
                  <span style={{ fontSize: '14px', color: '#CFE3F2' }}>20 сентября</span>
                </span>
              </Link>
              <Link
                style={{
                  position: 'relative',
                  display: 'block',
                  height: '220px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: '#172A51',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
                href="/media"
              >
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                  src={asset('/img/news-huddle.webp')}
                  alt=""
                />
                <span
                  style={{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg, rgba(23, 42, 81, 0) 45%, rgba(23, 42, 81, 0.88) 100%)' }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '16px',
                    height: '30px',
                    padding: '0 12px',
                    borderRadius: '15px',
                    background: 'rgba(10, 18, 36, 0.6)',
                    fontSize: '14px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Icon name="image-01" size={16} color="#FFFFFF" />
                  52
                </span>
                <span style={{ position: 'absolute', left: '22px', right: '22px', bottom: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '19px', fontWeight: '700', lineHeight: '1.2' }}>Ордабасы — Тобыл: лучшие моменты</span>
                  <span style={{ fontSize: '14px', color: '#CFE3F2' }}>14 сентября</span>
                </span>
              </Link>
              <Link
                style={{
                  position: 'relative',
                  display: 'block',
                  height: '220px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: '#172A51',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
                href="/media"
              >
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                  src={asset('/img/photo-fans.webp')}
                  alt=""
                />
                <span
                  style={{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg, rgba(23, 42, 81, 0) 45%, rgba(23, 42, 81, 0.88) 100%)' }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '16px',
                    height: '30px',
                    padding: '0 12px',
                    borderRadius: '15px',
                    background: 'rgba(10, 18, 36, 0.6)',
                    fontSize: '14px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Icon name="image-01" size={16} color="#FFFFFF" />
                  64
                </span>
                <span style={{ position: 'absolute', left: '22px', right: '22px', bottom: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '19px', fontWeight: '700', lineHeight: '1.2' }}>Кубковый вечер на стадионе</span>
                  <span style={{ fontSize: '14px', color: '#CFE3F2' }}>1 сентября</span>
                </span>
              </Link>
              <Link
                style={{
                  position: 'relative',
                  display: 'block',
                  height: '220px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: '#172A51',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
                href="/media"
              >
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                  src={asset('/img/news-trio.webp')}
                  alt=""
                />
                <span
                  style={{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg, rgba(23, 42, 81, 0) 45%, rgba(23, 42, 81, 0.88) 100%)' }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '16px',
                    height: '30px',
                    padding: '0 12px',
                    borderRadius: '15px',
                    background: 'rgba(10, 18, 36, 0.6)',
                    fontSize: '14px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Icon name="image-01" size={16} color="#FFFFFF" />
                  31
                </span>
                <span style={{ position: 'absolute', left: '22px', right: '22px', bottom: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '19px', fontWeight: '700', lineHeight: '1.2' }}>За кадром: новая форма команды</span>
                  <span style={{ fontSize: '14px', color: '#CFE3F2' }}>27 августа</span>
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section
          style={{ position: 'relative', margin: '0 24px 40px', borderRadius: '32px', overflow: 'hidden', background: '#FFFFFF', padding: '56px 0' }}
          id="stories"
          aria-label="Статьи и интервью"
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
                Статьи и интервью
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
                href="/media"
              >
                Все материалы
                <Icon name="arrow-right-01" size={18} weight={2} color="#0B7DB0" />
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  flex: '1 1 200px',
                  height: '120px',
                  padding: '20px 22px',
                  boxSizing: 'border-box',
                  borderRadius: '22px',
                  background: '#172A51',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
                href="/media"
              >
                <Star w={70} h={110} fill="#129ED9" style={{ position: 'absolute', right: '-16px', top: '-14px' }} />
                <span
                  style={{
                    position: 'relative',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '26px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                  }}
                >
                  Один на один
                </span>
                <span style={{ position: 'relative', fontSize: '15px', opacity: '0.8' }}>24 интервью</span>
              </Link>
              <Link
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  flex: '1 1 200px',
                  height: '120px',
                  padding: '20px 22px',
                  boxSizing: 'border-box',
                  borderRadius: '22px',
                  background: '#129ED9',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
                href="/media"
              >
                <Star w={70} h={110} fill="#7CC6E9" style={{ position: 'absolute', right: '-16px', top: '-14px' }} />
                <span
                  style={{
                    position: 'relative',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '26px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                  }}
                >
                  За кадром
                </span>
                <span style={{ position: 'relative', fontSize: '15px', opacity: '0.8' }}>12 историй</span>
              </Link>
              <Link
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  flex: '1 1 200px',
                  height: '120px',
                  padding: '20px 22px',
                  boxSizing: 'border-box',
                  borderRadius: '22px',
                  background: '#F2F6FA',
                  color: '#172A51',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
                href="/media"
              >
                <Star w={70} h={110} fill="#DCEEF8" style={{ position: 'absolute', right: '-16px', top: '-14px' }} />
                <span
                  style={{
                    position: 'relative',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '26px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                  }}
                >
                  Академия
                </span>
                <span style={{ position: 'relative', fontSize: '15px', opacity: '0.8' }}>9 материалов</span>
              </Link>
              <Link
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  flex: '1 1 200px',
                  height: '120px',
                  padding: '20px 22px',
                  boxSizing: 'border-box',
                  borderRadius: '22px',
                  background: '#E7F5FB',
                  color: '#172A51',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
                href="/media"
              >
                <Star w={70} h={110} fill="#BFE3F4" style={{ position: 'absolute', right: '-16px', top: '-14px' }} />
                <span
                  style={{
                    position: 'relative',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '26px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                  }}
                >
                  Колонки
                </span>
                <span style={{ position: 'relative', fontSize: '15px', opacity: '0.8' }}>6 авторов</span>
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
              <Link
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: '#FFFFFF',
                  boxShadow: '0 2px 12px rgba(23, 42, 81, 0.08)',
                  color: '#172A51',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                href="/media"
              >
                <span style={{ position: 'relative', height: '210px', background: '#EEF3F8' }}>
                  <img
                    style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                    src={asset('/img/news-shout.webp')}
                    alt=""
                  />
                </span>
                <span style={{ padding: '18px 20px 22px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#0B7DB0' }}>Интервью</span>
                  <span style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1.25' }}>Вратарь команды — о сухих матчах и работе с защитой</span>
                  <span style={{ fontSize: '14px', color: '#5B6B8C' }}>8 мин · 3 дня назад</span>
                </span>
              </Link>
              <Link
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: '#FFFFFF',
                  boxShadow: '0 2px 12px rgba(23, 42, 81, 0.08)',
                  color: '#172A51',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                href="/media"
              >
                <span style={{ position: 'relative', height: '210px', background: '#EEF3F8' }}>
                  <img
                    style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                    src={asset('/img/news-huddle.webp')}
                    alt=""
                  />
                </span>
                <span style={{ padding: '18px 20px 22px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#C8040F' }}>Лонгрид</span>
                  <span style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1.25' }}>
                    Как «Ордабасы» готовился к сезону: сборы, нагрузки, новые лица
                  </span>
                  <span style={{ fontSize: '14px', color: '#5B6B8C' }}>15 мин · 5 дней назад</span>
                </span>
              </Link>
              <Link
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: '#FFFFFF',
                  boxShadow: '0 2px 12px rgba(23, 42, 81, 0.08)',
                  color: '#172A51',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                href="/media"
              >
                <span style={{ position: 'relative', height: '210px', background: '#EEF3F8' }}>
                  <img
                    style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                    src={asset('/img/photo-fans.webp')}
                    alt=""
                  />
                </span>
                <span style={{ padding: '18px 20px 22px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#137040' }}>Колонка</span>
                  <span style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1.25' }}>Почему трибуны Шымкента — двенадцатый игрок команды</span>
                  <span style={{ fontSize: '14px', color: '#5B6B8C' }}>6 мин · неделю назад</span>
                </span>
              </Link>
              <Link
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: '#FFFFFF',
                  boxShadow: '0 2px 12px rgba(23, 42, 81, 0.08)',
                  color: '#172A51',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                href="/media"
              >
                <span style={{ position: 'relative', height: '210px', background: '#EEF3F8' }}>
                  <img
                    style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                    src={asset('/img/photo-action.webp')}
                    alt=""
                  />
                </span>
                <span style={{ padding: '18px 20px 22px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#0B7DB0' }}>Интервью</span>
                  <span style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1.25' }}>Молодёжь клуба: путь из академии в основной состав</span>
                  <span style={{ fontSize: '14px', color: '#5B6B8C' }}>10 мин · 2 недели назад</span>
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section
          style={{ position: 'relative', margin: '0 24px 40px', borderRadius: '32px', overflow: 'hidden', background: '#F2F6FA', padding: '56px 0' }}
          id="press"
          aria-label="Пресс-конференции"
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
                Пресс-конференции
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
                href="/media"
              >
                Все пресс-конференции
                <Icon name="arrow-right-01" size={18} weight={2} color="#0B7DB0" />
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'stretch', flexWrap: 'wrap' }}>
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  flex: '1 1 420px',
                  padding: '32px',
                  borderRadius: '28px',
                  background: 'linear-gradient(160deg, #172A51 0%, #129ED9 100%)',
                  color: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    right: '-6px',
                    top: '-16px',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '130px',
                    fontWeight: '700',
                    lineHeight: '0.86',
                    color: 'rgba(255, 255, 255, 0.08)',
                    textAlign: 'right',
                    whiteSpace: 'pre-line',
                  }}
                  aria-hidden="true"
                >
                  {'PRESS\nLIVE'}
                </span>
                <span
                  style={{
                    position: 'relative',
                    alignSelf: 'flex-start',
                    height: '30px',
                    padding: '0 14px',
                    borderRadius: '15px',
                    background: 'rgba(255, 255, 255, 0.16)',
                    fontSize: '13px',
                    fontWeight: '700',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#E30512' }} />
                  Скоро в эфире
                </span>
                <span
                  style={{
                    position: 'relative',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '38px',
                    fontWeight: '600',
                    lineHeight: '1.02',
                    textTransform: 'uppercase',
                  }}
                >
                  Предматчевая пресс-конференция перед «Кайратом»
                </span>
                <span style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '16px', color: '#E7F5FB' }}>
                  <Icon name="calendar-03" size={18} color="#E7F5FB" />
                  Пт, 24 октября · 12:00
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#7CC6E9' }} />
                  <Icon name="mic-01" size={18} color="#E7F5FB" />
                  Главный тренер
                </span>
                {v.reminded && (
                  <>
                    <button
                      style={{
                        position: 'relative',
                        alignSelf: 'flex-start',
                        height: '54px',
                        padding: '0 24px',
                        borderRadius: '16px',
                        border: '1.5px solid rgba(255, 255, 255, 0.6)',
                        background: 'transparent',
                        color: '#FFFFFF',
                        fontFamily: 'inherit',
                        fontSize: '17px',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                      }}
                      type="button"
                      onClick={v.toggleRemind}
                    >
                      <Icon name="tick-02" size={20} weight={2.2} color="#FFFFFF" />
                      Напомним за 15 минут
                    </button>
                  </>
                )}
                {v.notReminded && (
                  <>
                    <button
                      style={{
                        position: 'relative',
                        alignSelf: 'flex-start',
                        height: '54px',
                        padding: '0 24px',
                        borderRadius: '16px',
                        border: '0',
                        background: '#FFFFFF',
                        color: '#172A51',
                        fontFamily: 'inherit',
                        fontSize: '17px',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                      }}
                      type="button"
                      onClick={v.toggleRemind}
                    >
                      <Icon name="notification-01" size={20} color="#172A51" />
                      Напомнить о начале
                    </button>
                  </>
                )}
              </div>
              <div style={{ flex: '1.3 1 520px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link
                  style={{
                    display: 'flex',
                    gap: '18px',
                    alignItems: 'center',
                    padding: '14px',
                    borderRadius: '22px',
                    background: '#FFFFFF',
                    color: '#172A51',
                    textDecoration: 'none',
                  }}
                  href="/media"
                >
                  <span
                    style={{
                      position: 'relative',
                      flexShrink: '0',
                      width: '200px',
                      height: '116px',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      background: '#172A51',
                    }}
                  >
                    <img
                      style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                      src={asset('/img/video-training.webp')}
                      alt=""
                    />
                    <span
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        width: '42px',
                        height: '42px',
                        margin: '-21px 0 0 -21px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.95)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon name="play" size={18} color="#172A51" />
                    </span>
                    <span
                      style={{
                        position: 'absolute',
                        right: '8px',
                        bottom: '8px',
                        height: '22px',
                        padding: '0 7px',
                        borderRadius: '6px',
                        background: 'rgba(23, 42, 81, 0.82)',
                        color: '#FFFFFF',
                        fontSize: '12px',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      18:42
                    </span>
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '0' }}>
                    <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#0B7DB0' }}>
                      После матча
                    </span>
                    <span style={{ fontSize: '19px', fontWeight: '700', lineHeight: '1.25' }}>Итоги матча с «Тоболом»: оценка игры и состояние команды</span>
                    <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Главный тренер и капитан · 19 окт</span>
                  </span>
                </Link>
                <Link
                  style={{
                    display: 'flex',
                    gap: '18px',
                    alignItems: 'center',
                    padding: '14px',
                    borderRadius: '22px',
                    background: '#FFFFFF',
                    color: '#172A51',
                    textDecoration: 'none',
                  }}
                  href="/media"
                >
                  <span
                    style={{
                      position: 'relative',
                      flexShrink: '0',
                      width: '200px',
                      height: '116px',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      background: '#172A51',
                    }}
                  >
                    <img
                      style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                      src={asset('/img/news-lineup.webp')}
                      alt=""
                    />
                    <span
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        width: '42px',
                        height: '42px',
                        margin: '-21px 0 0 -21px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.95)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon name="play" size={18} color="#172A51" />
                    </span>
                    <span
                      style={{
                        position: 'absolute',
                        right: '8px',
                        bottom: '8px',
                        height: '22px',
                        padding: '0 7px',
                        borderRadius: '6px',
                        background: 'rgba(23, 42, 81, 0.82)',
                        color: '#FFFFFF',
                        fontSize: '12px',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      12:05
                    </span>
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '0' }}>
                    <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#0B7DB0' }}>До матча</span>
                    <span style={{ fontSize: '19px', fontWeight: '700', lineHeight: '1.25' }}>Перед выездом в Тобол: соперник, состав, задачи</span>
                    <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Главный тренер · 15 окт</span>
                  </span>
                </Link>
                <Link
                  style={{
                    display: 'flex',
                    gap: '18px',
                    alignItems: 'center',
                    padding: '14px',
                    borderRadius: '22px',
                    background: '#FFFFFF',
                    color: '#172A51',
                    textDecoration: 'none',
                  }}
                  href="/media"
                >
                  <span
                    style={{
                      position: 'relative',
                      flexShrink: '0',
                      width: '200px',
                      height: '116px',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      background: '#172A51',
                    }}
                  >
                    <img
                      style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                      src={asset('/img/news-stadium.webp')}
                      alt=""
                    />
                    <span
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        width: '42px',
                        height: '42px',
                        margin: '-21px 0 0 -21px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.95)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon name="play" size={18} color="#172A51" />
                    </span>
                    <span
                      style={{
                        position: 'absolute',
                        right: '8px',
                        bottom: '8px',
                        height: '22px',
                        padding: '0 7px',
                        borderRadius: '6px',
                        background: 'rgba(23, 42, 81, 0.82)',
                        color: '#FFFFFF',
                        fontSize: '12px',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      24:10
                    </span>
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '0' }}>
                    <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#0B7DB0' }}>Брифинг</span>
                    <span style={{ fontSize: '19px', fontWeight: '700', lineHeight: '1.25' }}>Спортивный директор о трансферном окне и планах клуба</span>
                    <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Спортивный директор · 10 окт</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
