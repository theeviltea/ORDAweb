'use client';

/* Сгенерировано из дизайн-макета ORDA (canvas). Разметка повторяет макет 1:1. */
import Link from 'next/link';
import { asset } from '@/lib/asset';
import { Icon } from '@/components/Icon';
import { Star } from '@/components/Star';
import { useDC } from '@/lib/dc';
import { vals, tick } from './PhotoAlbum.vals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function PhotoAlbumView(props: {}) {
  const self = useDC(props, tick);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const v: any = vals(self);
  return (
    <>
      <div style={{ width: '100%', background: '#172A51', paddingBottom: '1px', fontFamily: "'Roboto Condensed', sans-serif", color: '#172A51' }}>
        <section style={{ position: 'relative', overflow: 'hidden', padding: '40px 0 36px' }} aria-label="Фотоальбом">
          <Star w={220} h={360} fill="rgba(18, 158, 217, 0.12)" style={{ position: 'absolute', right: '-60px', top: '-80px' }} />
          <Star w={20} h={20} fill="#129ED9" style={{ position: 'absolute', left: '56%', top: '46px' }} />
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
              <Link style={{ color: '#7FA3C9', textDecoration: 'none' }} href="/media">
                Медиа
              </Link>
              <Icon name="arrow-right-01" size={14} weight={2} color="#7FA3C9" />
              <Link style={{ color: '#7FA3C9', textDecoration: 'none' }} href="/media/photos">
                Фото
              </Link>
              <Icon name="arrow-right-01" size={14} weight={2} color="#7FA3C9" />
              <span style={{ color: '#CFE3F2' }}>Альбом</span>
            </nav>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 600px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h1
                  style={{
                    margin: '0',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '64px',
                    fontWeight: '600',
                    lineHeight: '0.95',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                  }}
                >
                  Ордабасы — Кайрат: эмоции победного матча
                </h1>
                <span style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', fontSize: '16px', color: '#CFE3F2' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Icon name="calendar-03" size={18} color="#CFE3F2" />
                    24 сентября 2026
                  </span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#7CC6E9' }} />
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Icon name="camera-01" size={18} color="#CFE3F2" />
                    48 фото
                  </span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#7CC6E9' }} />
                  <span>фотограф Ерлан Сапаров</span>
                </span>
              </div>
              <span style={{ display: 'flex', gap: '10px' }}>
                <button
                  style={{
                    height: '52px',
                    padding: '0 22px',
                    borderRadius: '16px',
                    border: '0',
                    background: 'rgba(255, 255, 255, 0.1)',
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
                  <Icon name="download-04" size={20} weight={1.8} color="#FFFFFF" />
                  Скачать альбом
                </button>
                <button
                  style={{
                    height: '52px',
                    padding: '0 22px',
                    borderRadius: '16px',
                    border: '0',
                    background: '#FFFFFF',
                    color: '#172A51',
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
                  <Icon name="share-08" size={20} weight={1.8} color="#172A51" />
                  Поделиться
                </button>
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
            background: '#1F3562',
            padding: '32px 0',
          }}
          aria-label="Просмотр фото"
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
              gap: '20px',
            }}
          >
            <div style={{ position: 'relative', aspectRatio: '16 / 9', borderRadius: '26px', overflow: 'hidden', background: '#172A51' }}>
              {v.v0 && (
                <>
                  <img
                    style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: '60% center' }}
                    src={asset('/img/video-goal.webp')}
                    alt={v.caption}
                  />
                </>
              )}
              {v.v1 && (
                <>
                  <img
                    style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: '60% 30%' }}
                    src={asset('/img/news-shout.webp')}
                    alt={v.caption}
                  />
                </>
              )}
              {v.v2 && (
                <>
                  <img
                    style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                    src={asset('/img/news-trio.webp')}
                    alt={v.caption}
                  />
                </>
              )}
              {v.v3 && (
                <>
                  <img
                    style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                    src={asset('/img/news-huddle.webp')}
                    alt={v.caption}
                  />
                </>
              )}
              {v.v4 && (
                <>
                  <img
                    style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
                    src={asset('/img/photo-fans.webp')}
                    alt={v.caption}
                  />
                </>
              )}
              <span
                style={{
                  position: 'absolute',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  height: '160px',
                  background: 'linear-gradient(180deg, rgba(23, 42, 81, 0) 0%, rgba(23, 42, 81, 0.85) 100%)',
                }}
                aria-hidden="true"
              />
              <span
                style={{
                  position: 'absolute',
                  left: '24px',
                  top: '24px',
                  height: '36px',
                  padding: '0 14px',
                  borderRadius: '18px',
                  background: 'rgba(23, 42, 81, 0.72)',
                  color: '#FFFFFF',
                  fontSize: '15px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Icon name="camera-01" size={18} weight={1.8} color="#FFFFFF" />
                {v.counter}
              </span>
              <span
                style={{
                  position: 'absolute',
                  right: '24px',
                  top: '24px',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'rgba(23, 42, 81, 0.72)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                aria-label="На весь экран"
              >
                <Icon name="arrow-expand-01" size={20} weight={1.8} color="#FFFFFF" />
              </span>
              <button
                style={{
                  position: 'absolute',
                  left: '24px',
                  top: '50%',
                  width: '60px',
                  height: '60px',
                  marginTop: '-30px',
                  border: '0',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.92)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 8px 20px rgba(10, 18, 36, 0.3)',
                }}
                type="button"
                aria-label="Предыдущее фото"
                onClick={v.prev}
              >
                <Icon name="arrow-left-01" size={26} weight={2} color="#172A51" />
              </button>
              <button
                style={{
                  position: 'absolute',
                  right: '24px',
                  top: '50%',
                  width: '60px',
                  height: '60px',
                  marginTop: '-30px',
                  border: '0',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.92)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 8px 20px rgba(10, 18, 36, 0.3)',
                }}
                type="button"
                aria-label="Следующее фото"
                onClick={v.next}
              >
                <Icon name="arrow-right-01" size={26} weight={2} color="#172A51" />
              </button>
              <span style={{ position: 'absolute', left: '32px', right: '32px', bottom: '28px', color: '#FFFFFF', fontSize: '22px', fontWeight: '700' }}>
                {v.caption}
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: '12px' }}>
              <button
                style={{
                  position: 'relative',
                  height: '96px',
                  padding: '0',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: `3px solid ${v.b0}`,
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  background: '#172A51',
                }}
                type="button"
                aria-label="Фото 1"
                onClick={v.pick0}
              >
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: '60% center' }}
                  src={asset('/img/video-goal.webp')}
                  alt=""
                />
              </button>
              <button
                style={{
                  position: 'relative',
                  height: '96px',
                  padding: '0',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: `3px solid ${v.b1}`,
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  background: '#172A51',
                }}
                type="button"
                aria-label="Фото 2"
                onClick={v.pick1}
              >
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: '60% 30%' }}
                  src={asset('/img/news-shout.webp')}
                  alt=""
                />
              </button>
              <button
                style={{
                  position: 'relative',
                  height: '96px',
                  padding: '0',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: `3px solid ${v.b2}`,
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  background: '#172A51',
                }}
                type="button"
                aria-label="Фото 3"
                onClick={v.pick2}
              >
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                  src={asset('/img/news-trio.webp')}
                  alt=""
                />
              </button>
              <button
                style={{
                  position: 'relative',
                  height: '96px',
                  padding: '0',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: `3px solid ${v.b3}`,
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  background: '#172A51',
                }}
                type="button"
                aria-label="Фото 4"
                onClick={v.pick3}
              >
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                  src={asset('/img/news-huddle.webp')}
                  alt=""
                />
              </button>
              <button
                style={{
                  position: 'relative',
                  height: '96px',
                  padding: '0',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: `3px solid ${v.b4}`,
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  background: '#172A51',
                }}
                type="button"
                aria-label="Фото 5"
                onClick={v.pick4}
              >
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
                  src={asset('/img/photo-fans.webp')}
                  alt=""
                />
              </button>
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
          aria-label="Все фото"
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
                Все фото альбома
              </h2>
              <span style={{ fontSize: '16px', color: '#5B6B8C' }}>показано 10 из 48</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gridAutoRows: '200px', gap: '14px' }}>
              <span style={{ position: 'relative', gridColumn: 'span 2', gridRow: 'span 2', borderRadius: '20px', overflow: 'hidden', background: '#EEF3F8' }}>
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                  src={asset('/img/video-goal.webp')}
                  alt=""
                />
              </span>
              <span style={{ position: 'relative', gridColumn: 'span 1', gridRow: 'span 1', borderRadius: '20px', overflow: 'hidden', background: '#EEF3F8' }}>
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                  src={asset('/img/news-shout.webp')}
                  alt=""
                />
              </span>
              <span style={{ position: 'relative', gridColumn: 'span 1', gridRow: 'span 1', borderRadius: '20px', overflow: 'hidden', background: '#EEF3F8' }}>
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                  src={asset('/img/photo-fans.webp')}
                  alt=""
                />
              </span>
              <span style={{ position: 'relative', gridColumn: 'span 1', gridRow: 'span 2', borderRadius: '20px', overflow: 'hidden', background: '#EEF3F8' }}>
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                  src={asset('/img/news-trio.webp')}
                  alt=""
                />
              </span>
              <span style={{ position: 'relative', gridColumn: 'span 1', gridRow: 'span 1', borderRadius: '20px', overflow: 'hidden', background: '#EEF3F8' }}>
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                  src={asset('/img/news-huddle.webp')}
                  alt=""
                />
              </span>
              <span style={{ position: 'relative', gridColumn: 'span 2', gridRow: 'span 1', borderRadius: '20px', overflow: 'hidden', background: '#EEF3F8' }}>
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                  src={asset('/img/photo-action.webp')}
                  alt=""
                />
              </span>
              <span style={{ position: 'relative', gridColumn: 'span 1', gridRow: 'span 1', borderRadius: '20px', overflow: 'hidden', background: '#EEF3F8' }}>
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                  src={asset('/img/photo-smoke.webp')}
                  alt=""
                />
              </span>
              <span style={{ position: 'relative', gridColumn: 'span 1', gridRow: 'span 1', borderRadius: '20px', overflow: 'hidden', background: '#EEF3F8' }}>
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                  src={asset('/img/photo-solo.webp')}
                  alt=""
                />
              </span>
              <span style={{ position: 'relative', gridColumn: 'span 1', gridRow: 'span 1', borderRadius: '20px', overflow: 'hidden', background: '#EEF3F8' }}>
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                  src={asset('/img/video-training.webp')}
                  alt=""
                />
              </span>
              <span style={{ position: 'relative', gridColumn: 'span 2', gridRow: 'span 1', borderRadius: '20px', overflow: 'hidden', background: '#EEF3F8' }}>
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                  src={asset('/img/news-teamphoto.webp')}
                  alt=""
                />
              </span>
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
              Загрузить ещё 38 фото
              <Icon name="arrow-down-01" size={18} weight={2} color="#172A51" />
            </button>
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
          aria-label="Другие фотоотчёты"
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
                Другие фотоотчёты
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
                href="/media/photos"
              >
                Все фото
                <Icon name="arrow-right-01" size={18} weight={2} color="#0B7DB0" />
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '20px' }}>
              <Link
                style={{
                  position: 'relative',
                  display: 'block',
                  height: '260px',
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
                  height: '260px',
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
              <Link
                style={{
                  position: 'relative',
                  display: 'block',
                  height: '260px',
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
                  <span style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1.2' }}>Встреча с юными болельщиками</span>
                  <span style={{ fontSize: '15px', color: '#CFE3F2' }}>8 сентября 2026</span>
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
