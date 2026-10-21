'use client';

/* Сгенерировано из дизайн-макета ORDA (canvas). Разметка повторяет макет 1:1. */
import { Fragment } from 'react';
import Link from 'next/link';
import { asset } from '@/lib/asset';
import { Icon } from '@/components/Icon';
import { Star } from '@/components/Star';
import { useDC } from '@/lib/dc';
import { vals, tick } from './Photos.vals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function PhotosView(props: {}) {
  const self = useDC(props, tick);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const v: any = vals(self);
  return (
    <>
      <div style={{ width: '100%', background: '#172A51', paddingBottom: '1px', fontFamily: "'Roboto Condensed', sans-serif", color: '#172A51' }}>
        <section style={{ position: 'relative', overflow: 'hidden', padding: '48px 0 44px' }} aria-label="Фото">
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
                  <Link style={{ color: '#7FA3C9', textDecoration: 'none' }} href="/media">
                    Медиа
                  </Link>
                  <Icon name="arrow-right-01" size={14} weight={2} color="#7FA3C9" />
                  <span style={{ color: '#CFE3F2' }}>Фото</span>
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
                  Фото
                </h1>
                <p style={{ margin: '0', maxWidth: '560px', fontSize: '19px', lineHeight: '1.5', color: '#CFE3F2' }}>
                  Фотоотчёты с матчей, тренировок и событий клуба. Лучшие моменты «Ордабасы» в кадре.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }} role="tablist" aria-label="Рубрики">
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
          aria-label="Свежие фотоотчёты"
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
                Свежие фотоотчёты
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '20px' }}>
              <Link
                style={{
                  position: 'relative',
                  display: 'block',
                  height: '520px',
                  borderRadius: '26px',
                  overflow: 'hidden',
                  background: '#172A51',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
                href="/media/photos/album"
              >
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
                  src={asset('/img/video-goal.webp')}
                  alt=""
                />
                <span
                  style={{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg, rgba(23, 42, 81, 0) 45%, rgba(23, 42, 81, 0.9) 100%)' }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '20px',
                    top: '20px',
                    height: '30px',
                    padding: '0 12px',
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
                  Новое
                </span>
                <span
                  style={{
                    position: 'absolute',
                    right: '18px',
                    top: '18px',
                    height: '32px',
                    padding: '0 12px',
                    borderRadius: '16px',
                    background: 'rgba(10, 18, 36, 0.6)',
                    fontSize: '14px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Icon name="camera-01" size={16} weight={1.8} color="#FFFFFF" />
                  48
                </span>
                <span style={{ position: 'absolute', left: '28px', right: '28px', bottom: '28px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span
                    style={{
                      fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                      fontSize: '40px',
                      fontWeight: '600',
                      lineHeight: '1',
                      textTransform: 'uppercase',
                    }}
                  >
                    Ордабасы — Кайрат: эмоции победного матча
                  </span>
                  <span style={{ fontSize: '15px', color: '#CFE3F2' }}>24 сентября 2026 · фотограф Ерлан Сапаров</span>
                </span>
              </Link>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Link
                  style={{
                    position: 'relative',
                    display: 'block',
                    height: '250px',
                    borderRadius: '26px',
                    overflow: 'hidden',
                    background: '#172A51',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                  }}
                  href="/media/photos/album"
                >
                  <img
                    style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
                    src={asset('/img/video-training.webp')}
                    alt=""
                  />
                  <span
                    style={{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg, rgba(23, 42, 81, 0) 45%, rgba(23, 42, 81, 0.9) 100%)' }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      position: 'absolute',
                      right: '18px',
                      top: '18px',
                      height: '32px',
                      padding: '0 12px',
                      borderRadius: '16px',
                      background: 'rgba(10, 18, 36, 0.6)',
                      fontSize: '14px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <Icon name="camera-01" size={16} weight={1.8} color="#FFFFFF" />
                    36
                  </span>
                  <span style={{ position: 'absolute', left: '22px', right: '22px', bottom: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <span style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1.2' }}>Тренировка перед выездом в Астану</span>
                    <span style={{ fontSize: '15px', color: '#CFE3F2' }}>20 сентября 2026</span>
                  </span>
                </Link>
                <Link
                  style={{
                    position: 'relative',
                    display: 'block',
                    height: '250px',
                    borderRadius: '26px',
                    overflow: 'hidden',
                    background: '#172A51',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                  }}
                  href="/media/photos/album"
                >
                  <img
                    style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                    src={asset('/img/news-huddle.webp')}
                    alt=""
                  />
                  <span
                    style={{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg, rgba(23, 42, 81, 0) 45%, rgba(23, 42, 81, 0.9) 100%)' }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      position: 'absolute',
                      right: '18px',
                      top: '18px',
                      height: '32px',
                      padding: '0 12px',
                      borderRadius: '16px',
                      background: 'rgba(10, 18, 36, 0.6)',
                      fontSize: '14px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <Icon name="camera-01" size={16} weight={1.8} color="#FFFFFF" />
                    52
                  </span>
                  <span style={{ position: 'absolute', left: '22px', right: '22px', bottom: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <span style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1.2' }}>Ордабасы — Тобыл: лучшие моменты</span>
                    <span style={{ fontSize: '15px', color: '#CFE3F2' }}>14 сентября 2026</span>
                  </span>
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
          aria-label="Все фотоотчёты"
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
                Все фотоотчёты
              </h2>
              <span style={{ fontSize: '16px', color: '#5B6B8C' }}>9 альбомов · 399 фото</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '20px' }}>
              <Link
                style={{
                  position: 'relative',
                  display: 'block',
                  height: '300px',
                  borderRadius: '26px',
                  overflow: 'hidden',
                  background: '#172A51',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
                href="/media/photos/album"
              >
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
                  src={asset('/img/photo-fans.webp')}
                  alt=""
                />
                <span
                  style={{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg, rgba(23, 42, 81, 0) 45%, rgba(23, 42, 81, 0.9) 100%)' }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    position: 'absolute',
                    right: '18px',
                    top: '18px',
                    height: '32px',
                    padding: '0 12px',
                    borderRadius: '16px',
                    background: 'rgba(10, 18, 36, 0.6)',
                    fontSize: '14px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Icon name="camera-01" size={16} weight={1.8} color="#FFFFFF" />
                  28
                </span>
                <span style={{ position: 'absolute', left: '22px', right: '22px', bottom: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1.2' }}>Встреча команды с юными болельщиками</span>
                  <span style={{ fontSize: '15px', color: '#CFE3F2' }}>8 сентября 2026</span>
                </span>
              </Link>
              <Link
                style={{
                  position: 'relative',
                  display: 'block',
                  height: '300px',
                  borderRadius: '26px',
                  overflow: 'hidden',
                  background: '#172A51',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
                href="/media/photos/album"
              >
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                  src={asset('/img/photo-smoke.webp')}
                  alt=""
                />
                <span
                  style={{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg, rgba(23, 42, 81, 0) 45%, rgba(23, 42, 81, 0.9) 100%)' }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    position: 'absolute',
                    right: '18px',
                    top: '18px',
                    height: '32px',
                    padding: '0 12px',
                    borderRadius: '16px',
                    background: 'rgba(10, 18, 36, 0.6)',
                    fontSize: '14px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Icon name="camera-01" size={16} weight={1.8} color="#FFFFFF" />
                  64
                </span>
                <span style={{ position: 'absolute', left: '22px', right: '22px', bottom: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1.2' }}>Кубковый вечер на стадионе</span>
                  <span style={{ fontSize: '15px', color: '#CFE3F2' }}>1 сентября 2026</span>
                </span>
              </Link>
              <Link
                style={{
                  position: 'relative',
                  display: 'block',
                  height: '300px',
                  borderRadius: '26px',
                  overflow: 'hidden',
                  background: '#172A51',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
                href="/media/photos/album"
              >
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                  src={asset('/img/news-trio.webp')}
                  alt=""
                />
                <span
                  style={{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg, rgba(23, 42, 81, 0) 45%, rgba(23, 42, 81, 0.9) 100%)' }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    position: 'absolute',
                    right: '18px',
                    top: '18px',
                    height: '32px',
                    padding: '0 12px',
                    borderRadius: '16px',
                    background: 'rgba(10, 18, 36, 0.6)',
                    fontSize: '14px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Icon name="camera-01" size={16} weight={1.8} color="#FFFFFF" />
                  31
                </span>
                <span style={{ position: 'absolute', left: '22px', right: '22px', bottom: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1.2' }}>За кадром: новая форма команды</span>
                  <span style={{ fontSize: '15px', color: '#CFE3F2' }}>27 августа 2026</span>
                </span>
              </Link>
              <Link
                style={{
                  position: 'relative',
                  display: 'block',
                  height: '300px',
                  borderRadius: '26px',
                  overflow: 'hidden',
                  background: '#172A51',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
                href="/media/photos/album"
              >
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%' }}
                  src={asset('/img/photo-solo.webp')}
                  alt=""
                />
                <span
                  style={{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg, rgba(23, 42, 81, 0) 45%, rgba(23, 42, 81, 0.9) 100%)' }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    position: 'absolute',
                    right: '18px',
                    top: '18px',
                    height: '32px',
                    padding: '0 12px',
                    borderRadius: '16px',
                    background: 'rgba(10, 18, 36, 0.6)',
                    fontSize: '14px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Icon name="camera-01" size={16} weight={1.8} color="#FFFFFF" />
                  44
                </span>
                <span style={{ position: 'absolute', left: '22px', right: '22px', bottom: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1.2' }}>Победа молодёжной команды</span>
                  <span style={{ fontSize: '15px', color: '#CFE3F2' }}>21 августа 2026</span>
                </span>
              </Link>
              <Link
                style={{
                  position: 'relative',
                  display: 'block',
                  height: '300px',
                  borderRadius: '26px',
                  overflow: 'hidden',
                  background: '#172A51',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
                href="/media/photos/album"
              >
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
                  src={asset('/img/photo-action.webp')}
                  alt=""
                />
                <span
                  style={{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg, rgba(23, 42, 81, 0) 45%, rgba(23, 42, 81, 0.9) 100%)' }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    position: 'absolute',
                    right: '18px',
                    top: '18px',
                    height: '32px',
                    padding: '0 12px',
                    borderRadius: '16px',
                    background: 'rgba(10, 18, 36, 0.6)',
                    fontSize: '14px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Icon name="camera-01" size={16} weight={1.8} color="#FFFFFF" />
                  39
                </span>
                <span style={{ position: 'absolute', left: '22px', right: '22px', bottom: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1.2' }}>Обыгрыш у бровки: матч с «Жетысу»</span>
                  <span style={{ fontSize: '15px', color: '#CFE3F2' }}>28 сентября 2026</span>
                </span>
              </Link>
              <Link
                style={{
                  position: 'relative',
                  display: 'block',
                  height: '300px',
                  borderRadius: '26px',
                  overflow: 'hidden',
                  background: '#172A51',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
                href="/media/photos/album"
              >
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%' }}
                  src={asset('/img/news-shout.webp')}
                  alt=""
                />
                <span
                  style={{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg, rgba(23, 42, 81, 0) 45%, rgba(23, 42, 81, 0.9) 100%)' }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    position: 'absolute',
                    right: '18px',
                    top: '18px',
                    height: '32px',
                    padding: '0 12px',
                    borderRadius: '16px',
                    background: 'rgba(10, 18, 36, 0.6)',
                    fontSize: '14px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Icon name="camera-01" size={16} weight={1.8} color="#FFFFFF" />
                  57
                </span>
                <span style={{ position: 'absolute', left: '22px', right: '22px', bottom: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1.2' }}>Голы и эмоции сентября</span>
                  <span style={{ fontSize: '15px', color: '#CFE3F2' }}>30 сентября 2026</span>
                </span>
              </Link>
            </div>
            <button
              style={{
                alignSelf: 'center',
                height: '52px',
                padding: '0 28px',
                borderRadius: '16px',
                border: '0',
                background: '#F2F6FA',
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
            >
              Показать ещё
              <Icon name="arrow-down-01" size={18} weight={2} color="#172A51" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
