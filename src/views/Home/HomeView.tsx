'use client';

/* Сгенерировано из дизайн-макета ORDA (canvas). Разметка повторяет макет 1:1. */
import { Fragment } from 'react';
import Link from 'next/link';
import { asset } from '@/lib/asset';
import { Icon } from '@/components/Icon';
import { Star } from '@/components/Star';
import { PlayerCard } from '@/components/PlayerCard';
import { useDC } from '@/lib/dc';
import { vals, tick } from './Home.vals';
import './Home.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function HomeView(props: {}) {
  const self = useDC(props, tick);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const v: any = vals(self);
  return (
    <>
      <div style={{ width: '100%', background: '#172A51', paddingBottom: '1px', fontFamily: "'Roboto Condensed', sans-serif", color: '#172A51' }}>
        <div style={{ margin: '0 0 40px', borderRadius: '0', overflow: 'hidden' }}>
          <section style={{ position: 'relative', overflow: 'hidden', background: '#172A51', color: '#FFFFFF' }} aria-label="Главное">
            <img
              style={{ position: 'absolute', right: '0', top: '-8%', width: '78%', height: '116%', objectFit: 'cover', objectPosition: '40% center' }}
              src={asset('/img/hero-flag.webp')}
              alt=""
              aria-hidden="true"
            />
            <div
              style={{
                position: 'absolute',
                inset: '0',
                background:
                  'linear-gradient(90deg, #172A51 0%, #172A51 24%, rgba(23, 42, 81, 0.82) 44%, rgba(23, 42, 81, 0.35) 70%, rgba(23, 42, 81, 0.15) 100%)',
              }}
              aria-hidden="true"
            />
            <div
              style={{
                position: 'absolute',
                left: '0',
                right: '0',
                bottom: '0',
                height: '180px',
                background: 'linear-gradient(180deg, rgba(23, 42, 81, 0) 0%, #172A51 100%)',
              }}
              aria-hidden="true"
            />
            <Star w={28} h={28} fill="#129ED9" style={{ position: 'absolute', left: '44%', top: '80px' }} />
            <Star w={14} h={14} fill="#7CC6E9" style={{ position: 'absolute', left: '41%', top: '130px' }} />
            <Star w={240} h={380} fill="rgba(18, 158, 217, 0.12)" style={{ position: 'absolute', left: '-100px', bottom: '-80px' }} />
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '0 40px',
                boxSizing: 'border-box',
                minHeight: '580px',
                display: 'flex',
                alignItems: 'stretch',
                gap: '40px',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ flex: '1 1 520px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '22px', padding: '56px 0' }}>
                <span
                  style={{
                    alignSelf: 'flex-start',
                    height: '32px',
                    padding: '0 14px',
                    borderRadius: '16px',
                    background: 'rgba(18, 158, 217, 0.18)',
                    color: '#7CC6E9',
                    fontSize: '14px',
                    fontWeight: '700',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Шымкент · с 1949 года
                </span>
                <h1
                  style={{
                    margin: '0',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '88px',
                    fontWeight: '600',
                    lineHeight: '0.9',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                  }}
                >
                  Один город.
                  <br />
                  Одна команда.
                </h1>
                <p style={{ margin: '0', maxWidth: '460px', fontSize: '20px', lineHeight: '1.45', color: '#CFE3F2' }}>
                  Наш город. Наши цвета. Наша игра. Всё, чем живёт «Ордабасы», — здесь.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                  <Link
                    style={{
                      height: '56px',
                      padding: '0 28px',
                      borderRadius: '16px',
                      background: '#129ED9',
                      color: '#FFFFFF',
                      fontSize: '18px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                    }}
                    href="/tickets"
                  >
                    <Icon name="ticket-01" size={20} weight={1.8} color="#FFFFFF" />
                    На следующий матч
                  </Link>
                  <Link
                    style={{
                      height: '56px',
                      padding: '0 24px',
                      borderRadius: '16px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1.5px solid rgba(255, 255, 255, 0.35)',
                      boxSizing: 'border-box',
                      color: '#FFFFFF',
                      fontSize: '18px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      textDecoration: 'none',
                    }}
                    href="/team"
                  >
                    Знакомьтесь с командой
                    <Icon name="arrow-right-01" size={20} weight={2} color="#FFFFFF" />
                  </Link>
                </div>
              </div>
              <div style={{ position: 'relative', flex: '1 1 480px', minHeight: '420px' }}>
                {v.heroPlayers.map((p: any, pIdx: number) => (
                  <Fragment key={pIdx}>
                    <img
                      style={{
                        position: 'absolute',
                        left: '50%',
                        bottom: '0',
                        height: '540px',
                        width: 'auto',
                        maxWidth: 'none',
                        opacity: p.op,
                        transform: `translateX(-50%) translateY(${p.dy}) scale(${p.sc})`,
                        transformOrigin: 'bottom center',
                        transition: 'opacity 0.9s ease, transform 1.1s cubic-bezier(0.2, 0.7, 0.2, 1)',
                        filter: 'drop-shadow(0 24px 40px rgba(5, 12, 28, 0.55))',
                      }}
                      src={p.photo}
                      alt={p.name}
                    />
                  </Fragment>
                ))}
                <Link
                  style={{
                    position: 'absolute',
                    right: '0',
                    bottom: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '12px 18px 12px 12px',
                    borderRadius: '22px',
                    background: 'rgba(23, 42, 81, 0.72)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                  }}
                  href="/team/player"
                >
                  <span
                    style={{
                      fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                      fontSize: '40px',
                      fontWeight: '600',
                      lineHeight: '1',
                      color: '#129ED9',
                      minWidth: '52px',
                      textAlign: 'center',
                    }}
                  >
                    {v.hero.num}
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{ fontSize: '18px', fontWeight: '700' }}>{v.hero.name}</span>
                    <span style={{ fontSize: '14px', color: '#CFE3F2' }}>{v.hero.role}</span>
                  </span>
                </Link>
                <div style={{ position: 'absolute', right: '0', bottom: '12px', display: 'flex', gap: '6px' }} aria-hidden="true">
                  {v.heroDots.map((d: any, dIdx: number) => (
                    <Fragment key={dIdx}>
                      <span style={{ width: d.w, height: '6px', borderRadius: '3px', background: d.c, transition: 'width 0.4s ease, background 0.4s ease' }} />
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <div style={{ background: '#129ED9', overflow: 'hidden' }} aria-hidden="true">
            <div style={{ height: '72px', display: 'flex', alignItems: 'center', gap: '36px', paddingLeft: '24px' }}>
              <Star w={26} h={26} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '1' }} keepRatio />
              <Star w={12} h={12} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.55' }} keepRatio />
              <Star w={18} h={18} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.8' }} keepRatio />
              <Star w={12} h={12} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.55' }} keepRatio />
              <Star w={26} h={26} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '1' }} keepRatio />
              <Star w={12} h={12} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.55' }} keepRatio />
              <Star w={18} h={18} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.8' }} keepRatio />
              <Star w={12} h={12} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.55' }} keepRatio />
              <Star w={26} h={26} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '1' }} keepRatio />
              <Star w={12} h={12} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.55' }} keepRatio />
              <Star w={18} h={18} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.8' }} keepRatio />
              <Star w={12} h={12} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.55' }} keepRatio />
              <Star w={26} h={26} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '1' }} keepRatio />
              <Star w={12} h={12} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.55' }} keepRatio />
              <Star w={18} h={18} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.8' }} keepRatio />
              <Star w={12} h={12} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.55' }} keepRatio />
              <Star w={26} h={26} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '1' }} keepRatio />
              <Star w={12} h={12} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.55' }} keepRatio />
              <Star w={18} h={18} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.8' }} keepRatio />
              <Star w={12} h={12} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.55' }} keepRatio />
              <Star w={26} h={26} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '1' }} keepRatio />
              <Star w={12} h={12} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.55' }} keepRatio />
              <Star w={18} h={18} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.8' }} keepRatio />
              <Star w={12} h={12} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.55' }} keepRatio />
              <Star w={26} h={26} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '1' }} keepRatio />
              <Star w={12} h={12} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.55' }} keepRatio />
              <Star w={18} h={18} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.8' }} keepRatio />
              <Star w={12} h={12} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.55' }} keepRatio />
              <Star w={26} h={26} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '1' }} keepRatio />
              <Star w={12} h={12} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.55' }} keepRatio />
              <Star w={18} h={18} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.8' }} keepRatio />
              <Star w={12} h={12} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.55' }} keepRatio />
              <Star w={26} h={26} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '1' }} keepRatio />
              <Star w={12} h={12} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.55' }} keepRatio />
              <Star w={18} h={18} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.8' }} keepRatio />
              <Star w={12} h={12} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.55' }} keepRatio />
              <Star w={26} h={26} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '1' }} keepRatio />
              <Star w={12} h={12} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.55' }} keepRatio />
              <Star w={18} h={18} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.8' }} keepRatio />
              <Star w={12} h={12} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.55' }} keepRatio />
              <Star w={26} h={26} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '1' }} keepRatio />
              <Star w={12} h={12} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.55' }} keepRatio />
              <Star w={18} h={18} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.8' }} keepRatio />
              <Star w={12} h={12} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.55' }} keepRatio />
              <Star w={26} h={26} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '1' }} keepRatio />
              <Star w={12} h={12} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.55' }} keepRatio />
              <Star w={18} h={18} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.8' }} keepRatio />
              <Star w={12} h={12} fill="#FFFFFF" style={{ flexShrink: '0', opacity: '0.55' }} keepRatio />
            </div>
          </div>
        </div>
        <section
          style={{
            margin: '0 max(24px, calc((100% - 1280px) / 2)) 40px',
            borderRadius: '32px',
            overflow: 'hidden',
            background: '#FFFFFF',
            color: '#172A51',
            padding: '56px 0',
          }}
          id="match"
          aria-label="Ближайший матч"
        >
          <div
            style={{
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
                Матч — больше, чем игра
              </h2>
              <Link
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  minHeight: '44px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#172A51',
                  textDecoration: 'none',
                }}
                href="/matches"
              >
                Все матчи
                <Icon name="arrow-right-01" size={18} weight={2} color="#172A51" />
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 420px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <span
                  style={{
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '52px',
                    fontWeight: '600',
                    lineHeight: '0.95',
                    textTransform: 'uppercase',
                    color: '#172A51',
                  }}
                >
                  Город играет.
                  <br />
                  Трибуны живут.
                </span>
                <p style={{ margin: '0', maxWidth: '460px', fontSize: '18px', lineHeight: '1.5', color: '#3F5578' }}>
                  Поддержи «Ордабасы» дома. Выбери своё место на трибуне и стань частью большой игры.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#3F5578' }}>
                    Дальше в календаре
                  </span>
                  <Link
                    style={{
                      height: '36px',
                      padding: '0 14px',
                      borderRadius: '18px',
                      background: '#E7F5FB',
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#172A51',
                      display: 'flex',
                      alignItems: 'center',
                      textDecoration: 'none',
                    }}
                    href="/matches"
                  >
                    Елимай
                  </Link>
                  <Link
                    style={{
                      height: '36px',
                      padding: '0 14px',
                      borderRadius: '18px',
                      background: '#E7F5FB',
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#172A51',
                      display: 'flex',
                      alignItems: 'center',
                      textDecoration: 'none',
                    }}
                    href="/matches"
                  >
                    Тобыл
                  </Link>
                  <Link
                    style={{
                      height: '36px',
                      padding: '0 14px',
                      borderRadius: '18px',
                      background: '#E7F5FB',
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#172A51',
                      display: 'flex',
                      alignItems: 'center',
                      textDecoration: 'none',
                    }}
                    href="/matches"
                  >
                    Женис
                  </Link>
                </div>
              </div>
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  flex: '1 1 520px',
                  padding: '24px',
                  borderRadius: '28px',
                  background: 'linear-gradient(180deg, #172A51 0%, #129ED9 100%)',
                  boxShadow: '0 12px 30px rgba(23, 42, 81, 0.28)',
                  color: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '18px',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: '-10px',
                    top: '40px',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '120px',
                    fontWeight: '700',
                    lineHeight: '0.86',
                    color: 'rgba(255, 255, 255, 0.07)',
                    whiteSpace: 'pre-line',
                  }}
                  aria-hidden="true"
                >
                  {'MATCH\nDAY'}
                </div>
                <Star w={20} h={20} fill="#7CC6E9" style={{ position: 'absolute', right: '34px', top: '30px' }} />
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', textAlign: 'center' }}>
                  <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '24px', fontWeight: '600' }}>Премьер-Лига 2026, 20 тур</span>
                  <span style={{ fontSize: '16px', color: '#CFE3F2' }}>24 августа 2026, 19:00 · Шымкент</span>
                </div>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                  <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                    <span
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '50%',
                        background: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <img style={{ width: '52px', height: '62px', objectFit: 'contain' }} src={asset('/img/crest.png')} alt="" />
                    </span>
                    <span
                      style={{
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '20px',
                        fontWeight: '600',
                        letterSpacing: '0.03em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Ордабасы
                    </span>
                  </span>
                  <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '28px', fontWeight: '600', color: '#CFE3F2' }}>VS</span>
                  <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                    <span
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '50%',
                        background: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <img style={{ width: '56px', height: '62px', objectFit: 'contain' }} src={asset('/img/club-tobyl.webp')} alt="" />
                    </span>
                    <span
                      style={{
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '20px',
                        fontWeight: '600',
                        letterSpacing: '0.03em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Тобыл
                    </span>
                  </span>
                </div>
                <div style={{ position: 'relative', display: 'flex', gap: '8px' }} aria-label="До матча 2 дня 5 часов 18 минут">
                  <span
                    style={{
                      flex: '1',
                      height: '64px',
                      borderRadius: '12px',
                      background: 'rgba(23, 42, 81, 0.55)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '2px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '28px',
                        fontWeight: '600',
                        lineHeight: '1',
                        color: '#FFFFFF',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      02
                    </span>
                    <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#CFE3F2' }}>дн</span>
                  </span>
                  <span
                    style={{
                      flex: '1',
                      height: '64px',
                      borderRadius: '12px',
                      background: 'rgba(23, 42, 81, 0.55)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '2px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '28px',
                        fontWeight: '600',
                        lineHeight: '1',
                        color: '#FFFFFF',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      05
                    </span>
                    <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#CFE3F2' }}>час</span>
                  </span>
                  <span
                    style={{
                      flex: '1',
                      height: '64px',
                      borderRadius: '12px',
                      background: 'rgba(23, 42, 81, 0.55)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '2px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '28px',
                        fontWeight: '600',
                        lineHeight: '1',
                        color: '#FFFFFF',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      18
                    </span>
                    <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#CFE3F2' }}>мин</span>
                  </span>
                  <span
                    style={{
                      flex: '1',
                      height: '64px',
                      borderRadius: '12px',
                      background: 'rgba(23, 42, 81, 0.55)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '2px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '28px',
                        fontWeight: '600',
                        lineHeight: '1',
                        color: '#FFFFFF',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      36
                    </span>
                    <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#CFE3F2' }}>сек</span>
                  </span>
                </div>
                <Link
                  style={{
                    position: 'relative',
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
              </div>
            </div>
          </div>
        </section>
        <section
          style={{
            margin: '0 max(24px, calc((100% - 1280px) / 2)) 40px',
            borderRadius: '32px',
            overflow: 'hidden',
            background: `#16436E url('${asset('/img/news-bg.svg')}') center bottom / cover no-repeat`,
            padding: '56px 0',
            color: '#FFFFFF',
            position: 'relative',
          }}
          aria-label="Новости"
        >
          <div
            style={{
              width: '100%',
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '0 40px',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              gap: '28px',
              position: 'relative',
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
                В центре событий
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
                href="/news"
              >
                Все новости
                <Icon name="arrow-right-01" size={18} weight={2} color="#CFE3F2" />
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <Link
                style={{
                  position: 'relative',
                  flex: '2 1 560px',
                  minHeight: '380px',
                  borderRadius: '28px',
                  overflow: 'hidden',
                  background: '#172A51',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  display: 'block',
                }}
                href="/news/article"
              >
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                  src={asset('/img/video-goal.webp')}
                  alt="Игроки «Ордабасы» в атаке"
                />
                <span
                  style={{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg, rgba(23, 42, 81, 0) 35%, rgba(23, 42, 81, 0.85) 100%)' }}
                  aria-hidden="true"
                />
                <span style={{ position: 'absolute', left: '32px', right: '32px', bottom: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <span style={{ fontSize: '14px', fontWeight: '700', color: '#CFE3F2' }}>Команда · Сегодня</span>
                  <span
                    style={{
                      fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                      fontSize: '34px',
                      fontWeight: '600',
                      lineHeight: '1.02',
                      textTransform: 'uppercase',
                    }}
                  >
                    Состав на матч с «Кайратом» объявлен
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '16px', fontWeight: '700' }}>
                    Читать материал
                    <Icon name="arrow-right-01" size={18} weight={2} color="#FFFFFF" />
                  </span>
                </span>
              </Link>
              <div style={{ flex: '1 1 340px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '12px',
                    borderRadius: '20px',
                    background: '#172A51',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                  }}
                  href="/"
                >
                  <img
                    style={{ flexShrink: '0', width: '80px', height: '80px', borderRadius: '14px', objectFit: 'cover' }}
                    src={asset('/img/news-lineup.webp')}
                    alt=""
                  />
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '0' }}>
                    <span style={{ fontSize: '18px', fontWeight: '700', lineHeight: '1.25' }}>Состав на матч с «Кайратом» объявлен</span>
                    <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Сегодня · Команда</span>
                  </span>
                </Link>
                <Link
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '12px',
                    borderRadius: '20px',
                    background: '#172A51',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                  }}
                  href="/"
                >
                  <img
                    style={{ flexShrink: '0', width: '80px', height: '80px', borderRadius: '14px', objectFit: 'cover' }}
                    src={asset('/img/news-trio.webp')}
                    alt=""
                  />
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '0' }}>
                    <span style={{ fontSize: '18px', fontWeight: '700', lineHeight: '1.25' }}>Новая домашняя форма представлена</span>
                    <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Вчера · Клуб</span>
                  </span>
                </Link>
                <Link
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '12px',
                    borderRadius: '20px',
                    background: '#172A51',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                  }}
                  href="/"
                >
                  <img
                    style={{ flexShrink: '0', width: '80px', height: '80px', borderRadius: '14px', objectFit: 'cover' }}
                    src={asset('/img/news-shout.webp')}
                    alt=""
                  />
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '0' }}>
                    <span style={{ fontSize: '18px', fontWeight: '700', lineHeight: '1.25' }}>Новый нападающий подписал контракт с клубом</span>
                    <span style={{ fontSize: '14px', color: '#CFE3F2' }}>31 июля · Клуб</span>
                  </span>
                </Link>
                <Link
                  style={{
                    marginTop: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    minHeight: '44px',
                    fontSize: '16px',
                    fontWeight: '700',
                    textDecoration: 'none',
                    color: '#FFFFFF',
                  }}
                  href="/media"
                >
                  Интервью и большие истории
                  <Icon name="arrow-up-right-01" size={20} weight={2} color="#CFE3F2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          style={{ margin: '0 max(24px, calc((100% - 1280px) / 2)) 40px', borderRadius: '32px', overflow: 'hidden', background: '#FFFFFF', color: '#172A51' }}
          id="interview"
          aria-label="Интервью"
        >
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <Link
              style={{
                position: 'relative',
                flex: '1 1 560px',
                minHeight: '520px',
                overflow: 'hidden',
                background: '#172A51',
                color: '#FFFFFF',
                textDecoration: 'none',
                display: 'block',
              }}
              href="/media"
            >
              <img
                style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%' }}
                src={asset('/img/news-shout.webp')}
                alt="Игроки «Ордабасы» празднуют гол"
              />
              <div
                style={{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg, rgba(23, 42, 81, 0) 40%, rgba(23, 42, 81, 0.92) 100%)' }}
                aria-hidden="true"
              />
              <span
                style={{
                  position: 'absolute',
                  left: '32px',
                  top: '32px',
                  height: '32px',
                  padding: '0 14px',
                  borderRadius: '16px',
                  background: '#E30512',
                  fontSize: '14px',
                  fontWeight: '700',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Один на один
              </span>
              <span
                style={{
                  position: 'absolute',
                  right: '32px',
                  top: '32px',
                  height: '32px',
                  padding: '0 14px',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.92)',
                  color: '#172A51',
                  fontSize: '14px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Icon name="clock-01" size={16} color="#172A51" />
                12 мин чтения
              </span>
              <figure
                style={{
                  position: 'absolute',
                  left: '32px',
                  right: '32px',
                  bottom: '32px',
                  margin: '0',
                  padding: '22px 24px',
                  borderRadius: '22px',
                  background: 'rgba(23, 42, 81, 0.78)',
                  backdropFilter: 'blur(8px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  overflow: 'hidden',
                }}
              >
                <Star w={90} h={90} fill="#129ED9" opacity={0.45} style={{ position: 'absolute', right: '-26px', top: '-26px' }} keepRatio />
                <span
                  style={{
                    position: 'relative',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '28px',
                    fontWeight: '600',
                    lineHeight: '1.08',
                    textTransform: 'uppercase',
                  }}
                >
                  Когда стадион поёт, ноги бегут сами
                </span>
                <figcaption style={{ position: 'relative', fontSize: '15px', color: '#A9BCD6' }}>— капитан команды</figcaption>
              </figure>
            </Link>
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                flex: '1 1 520px',
                padding: '56px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '22px',
              }}
            >
              <Star w={320} h={320} fill="#E7F5FB" style={{ position: 'absolute', right: '-120px', bottom: '-120px' }} />
              <Star w={18} h={18} fill="#129ED9" style={{ position: 'absolute', right: '56px', top: '56px' }} keepRatio />
              <span
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '15px',
                  fontWeight: '700',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#0B7DB0',
                }}
              >
                <span
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: '#E7F5FB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name="mic-01" size={20} color="#0B7DB0" />
                </span>
                Интервью
              </span>
              <span
                style={{
                  position: 'relative',
                  fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                  fontSize: '96px',
                  lineHeight: '0.5',
                  height: '36px',
                  color: '#129ED9',
                }}
                aria-hidden="true"
              >
                “
              </span>
              <h2
                style={{
                  position: 'relative',
                  margin: '0',
                  fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                  fontSize: '48px',
                  fontWeight: '600',
                  lineHeight: '1',
                  textTransform: 'uppercase',
                }}
              >
                Мы играем для тех, кто приходит на трибуны в любую погоду
              </h2>
              <span style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '18px', color: '#5B6B8C' }}>
                <span style={{ width: '36px', height: '2px', background: '#129ED9' }} />
                Капитан команды — о первом круге и целях сезона
              </span>
              <span
                style={{
                  position: 'relative',
                  alignSelf: 'flex-start',
                  maxWidth: '460px',
                  padding: '14px 16px',
                  borderRadius: '4px 18px 18px 18px',
                  background: '#E7F5FB',
                  fontSize: '17px',
                  fontWeight: '700',
                  lineHeight: '1.4',
                  color: '#0B7DB0',
                }}
              >
                Как оцените первый круг?
              </span>
              <p style={{ position: 'relative', margin: '-8px 0 0', maxWidth: '480px', fontSize: '17px', lineHeight: '1.55', color: '#172A51' }}>
                Мы довольны результатами, но не игрой в каждом матче. Были отрезки, когда выручали характер и терпение…
              </p>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginTop: '6px' }}>
                <Link
                  style={{
                    height: '56px',
                    padding: '0 28px',
                    borderRadius: '16px',
                    background: '#0B7DB0',
                    color: '#FFFFFF',
                    fontSize: '18px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                  }}
                  href="/media"
                >
                  Читать интервью
                  <Icon name="arrow-right-01" size={20} weight={2} color="#FFFFFF" />
                </Link>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '16px', fontWeight: '700', color: '#5B6B8C' }}>
                  <Icon name="favourite" size={18} weight={2} color="#5B6B8C" />
                  342
                </span>
                <span style={{ fontSize: '15px', color: '#5B6B8C' }}>Редакция ORDA · 2 дня назад</span>
              </div>
            </div>
          </div>
        </section>
        <section
          style={{ margin: '0 max(24px, calc((100% - 1280px) / 2)) 40px', borderRadius: '32px', overflow: 'hidden', background: '#E7F5FB', padding: '56px 0' }}
          id="store"
          aria-label="Магазин"
        >
          <div
            style={{
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
                Наши цвета. Твой стиль.
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
                href="/shop"
              >
                Весь магазин
                <Icon name="arrow-right-01" size={18} weight={2} color="#0B7DB0" />
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }} role="tablist" aria-label="Категории">
              <Link
                style={{
                  height: '44px',
                  padding: '0 18px',
                  borderRadius: '22px',
                  background: '#172A51',
                  color: '#FFFFFF',
                  fontSize: '16px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                }}
                href="/shop"
                role="tab"
                aria-selected="true"
              >
                Все товары
              </Link>
              <Link
                style={{
                  height: '44px',
                  padding: '0 18px',
                  borderRadius: '22px',
                  background: '#FFFFFF',
                  color: '#172A51',
                  fontSize: '16px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                }}
                href="/shop"
                role="tab"
                aria-selected="false"
              >
                Форма
              </Link>
              <Link
                style={{
                  height: '44px',
                  padding: '0 18px',
                  borderRadius: '22px',
                  background: '#FFFFFF',
                  color: '#172A51',
                  fontSize: '16px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                }}
                href="/shop"
                role="tab"
                aria-selected="false"
              >
                Одежда
              </Link>
              <Link
                style={{
                  height: '44px',
                  padding: '0 18px',
                  borderRadius: '22px',
                  background: '#FFFFFF',
                  color: '#172A51',
                  fontSize: '16px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                }}
                href="/shop"
                role="tab"
                aria-selected="false"
              >
                Аксессуары
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
              <Link
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '14px',
                  borderRadius: '20px',
                  background: '#FFFFFF',
                  boxShadow: '0 2px 12px rgba(23, 42, 81, 0.06)',
                  color: '#172A51',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
                href="/shop/product"
              >
                <Star w={56} h={56} fill="#DCEEF8" style={{ position: 'absolute', right: '-18px', top: '-18px' }} />
                <span
                  style={{
                    position: 'absolute',
                    left: '14px',
                    top: '14px',
                    zIndex: '1',
                    height: '24px',
                    padding: '0 9px',
                    borderRadius: '12px',
                    background: '#172A51',
                    color: '#FFFFFF',
                    fontSize: '12px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Новое
                </span>
                <img
                  style={{ position: 'relative', height: '150px', width: '100%', objectFit: 'contain' }}
                  src={asset('/img/jersey.webp')}
                  alt="Футболка ORDA"
                />
                <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: '1' }}>
                  <span style={{ fontSize: '16px', fontWeight: '700', lineHeight: '1.25' }}>Футболка ORDA</span>
                  <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '20px', fontWeight: '600', color: '#0B7DB0' }}>24 990 ₸</span>
                </span>
                <span
                  style={{
                    height: '44px',
                    borderRadius: '12px',
                    background: '#0B7DB0',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                  }}
                >
                  <Icon name="shopping-bag-02" size={18} weight={1.8} color="#FFFFFF" />
                  Купить
                </span>
              </Link>
              <Link
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '14px',
                  borderRadius: '20px',
                  background: '#FFFFFF',
                  boxShadow: '0 2px 12px rgba(23, 42, 81, 0.06)',
                  color: '#172A51',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
                href="/shop/product"
              >
                <Star w={56} h={56} fill="#DCEEF8" style={{ position: 'absolute', right: '-18px', top: '-18px' }} />
                <span
                  style={{
                    position: 'absolute',
                    left: '14px',
                    top: '14px',
                    zIndex: '1',
                    height: '24px',
                    padding: '0 9px',
                    borderRadius: '12px',
                    background: '#E30512',
                    color: '#FFFFFF',
                    fontSize: '12px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Хит продаж
                </span>
                <img
                  style={{ position: 'relative', height: '150px', width: '100%', objectFit: 'contain' }}
                  src={asset('/img/mug.webp')}
                  alt="Кружка «Ордабасы»"
                />
                <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: '1' }}>
                  <span style={{ fontSize: '16px', fontWeight: '700', lineHeight: '1.25' }}>Кружка «Ордабасы»</span>
                  <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '20px', fontWeight: '600', color: '#0B7DB0' }}>6 990 ₸</span>
                </span>
                <span
                  style={{
                    height: '44px',
                    borderRadius: '12px',
                    background: '#0B7DB0',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                  }}
                >
                  <Icon name="shopping-bag-02" size={18} weight={1.8} color="#FFFFFF" />
                  Купить
                </span>
              </Link>
              <Link
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '14px',
                  borderRadius: '20px',
                  background: '#FFFFFF',
                  boxShadow: '0 2px 12px rgba(23, 42, 81, 0.06)',
                  color: '#172A51',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
                href="/shop/product"
              >
                <Star w={56} h={56} fill="#DCEEF8" style={{ position: 'absolute', right: '-18px', top: '-18px' }} />
                <img
                  style={{ position: 'relative', height: '150px', width: '100%', objectFit: 'contain' }}
                  src={asset('/img/hoodie.webp')}
                  alt="Спортивное худи (синее)"
                />
                <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: '1' }}>
                  <span style={{ fontSize: '16px', fontWeight: '700', lineHeight: '1.25' }}>Спортивное худи (синее)</span>
                  <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '20px', fontWeight: '600', color: '#0B7DB0' }}>18 990 ₸</span>
                </span>
                <span
                  style={{
                    height: '44px',
                    borderRadius: '12px',
                    background: '#0B7DB0',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                  }}
                >
                  <Icon name="shopping-bag-02" size={18} weight={1.8} color="#FFFFFF" />
                  Купить
                </span>
              </Link>
              <Link
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '14px',
                  borderRadius: '20px',
                  background: '#FFFFFF',
                  boxShadow: '0 2px 12px rgba(23, 42, 81, 0.06)',
                  color: '#172A51',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
                href="/shop/product"
              >
                <Star w={56} h={56} fill="#DCEEF8" style={{ position: 'absolute', right: '-18px', top: '-18px' }} />
                <img
                  style={{ position: 'relative', height: '150px', width: '100%', objectFit: 'contain' }}
                  src={asset('/img/training-kit.webp')}
                  alt="Тренировочный комплект"
                />
                <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: '1' }}>
                  <span style={{ fontSize: '16px', fontWeight: '700', lineHeight: '1.25' }}>Тренировочный комплект</span>
                  <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '20px', fontWeight: '600', color: '#0B7DB0' }}>21 990 ₸</span>
                </span>
                <span
                  style={{
                    height: '44px',
                    borderRadius: '12px',
                    background: '#0B7DB0',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                  }}
                >
                  <Icon name="shopping-bag-02" size={18} weight={1.8} color="#FFFFFF" />
                  Купить
                </span>
              </Link>
              <Link
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '14px',
                  borderRadius: '20px',
                  background: '#FFFFFF',
                  boxShadow: '0 2px 12px rgba(23, 42, 81, 0.06)',
                  color: '#172A51',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
                href="/shop/product"
              >
                <Star w={56} h={56} fill="#DCEEF8" style={{ position: 'absolute', right: '-18px', top: '-18px' }} />
                <img
                  style={{ position: 'relative', height: '150px', width: '100%', objectFit: 'contain' }}
                  src={asset('/img/backpack.webp')}
                  alt="Рюкзак с логотипом"
                />
                <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: '1' }}>
                  <span style={{ fontSize: '16px', fontWeight: '700', lineHeight: '1.25' }}>Рюкзак с логотипом</span>
                  <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '20px', fontWeight: '600', color: '#0B7DB0' }}>14 990 ₸</span>
                </span>
                <span
                  style={{
                    height: '44px',
                    borderRadius: '12px',
                    background: '#0B7DB0',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                  }}
                >
                  <Icon name="shopping-bag-02" size={18} weight={1.8} color="#FFFFFF" />
                  Купить
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section
          style={{ position: 'relative', margin: '0 max(24px, calc((100% - 1280px) / 2)) 40px', padding: '56px 0', overflow: 'visible' }}
          id="moments"
          aria-label="Моменты"
        >
          <Star
            w={150}
            h={150}
            fill="rgba(18, 158, 217, 0.18)"
            style={{ position: 'absolute', left: '10px', top: '10px', width: '150px', height: '150px' }}
            keepRatio
          />
          <Star w={26} h={26} fill="#129ED9" style={{ position: 'absolute', left: '220px', top: '36px' }} keepRatio />
          <Star w={14} h={14} fill="#7CC6E9" style={{ position: 'absolute', left: '42%', top: '60px' }} keepRatio />
          <Star w={34} h={34} fill="#FFFFFF" style={{ position: 'absolute', right: '240px', top: '70px' }} keepRatio />
          <Star w={18} h={18} fill="#129ED9" style={{ position: 'absolute', right: '90px', bottom: '30px' }} keepRatio />
          <Star
            w={90}
            h={90}
            fill="rgba(124, 198, 233, 0.12)"
            style={{ position: 'absolute', left: '30%', bottom: '10px', width: '90px', height: '90px' }}
            keepRatio
          />
          <Star w={12} h={12} fill="#FFFFFF" style={{ position: 'absolute', left: '64%', bottom: '24px' }} keepRatio />
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
                Моменты
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
                href="/media#video"
              >
                Все моменты
                <Icon name="arrow-right-01" size={18} weight={2} color="#CFE3F2" />
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px' }}>
              <Link
                style={{
                  position: 'relative',
                  aspectRatio: '9 / 16',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  display: 'block',
                  boxShadow: '0 16px 32px rgba(8, 16, 34, 0.35)',
                }}
                href="/media"
              >
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
                  src={asset('/img/photo-solo.webp')}
                  alt=""
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    height: '55%',
                    background: 'linear-gradient(180deg, rgba(15, 29, 58, 0) 0%, rgba(15, 29, 58, 0.92) 100%)',
                  }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '16px',
                    fontWeight: '700',
                  }}
                >
                  <Icon name="play" size={16} color="#FFFFFF" />
                  48K
                </span>
                <span style={{ position: 'absolute', left: '16px', right: '16px', bottom: '18px', fontSize: '19px', fontWeight: '700', lineHeight: '1.2' }}>
                  Гол и посвящение трибунам
                </span>
              </Link>
              <Link
                style={{
                  position: 'relative',
                  aspectRatio: '9 / 16',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  display: 'block',
                  boxShadow: '0 16px 32px rgba(8, 16, 34, 0.35)',
                }}
                href="/media"
              >
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
                  src={asset('/img/photo-action.webp')}
                  alt=""
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    height: '55%',
                    background: 'linear-gradient(180deg, rgba(15, 29, 58, 0) 0%, rgba(15, 29, 58, 0.92) 100%)',
                  }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '16px',
                    fontWeight: '700',
                  }}
                >
                  <Icon name="play" size={16} color="#FFFFFF" />
                  31K
                </span>
                <span style={{ position: 'absolute', left: '16px', right: '16px', bottom: '18px', fontSize: '19px', fontWeight: '700', lineHeight: '1.2' }}>
                  Обыгрыш у бровки
                </span>
              </Link>
              <Link
                style={{
                  position: 'relative',
                  aspectRatio: '9 / 16',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  display: 'block',
                  boxShadow: '0 16px 32px rgba(8, 16, 34, 0.35)',
                }}
                href="/media"
              >
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
                  src={asset('/img/photo-fans.webp')}
                  alt=""
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    height: '55%',
                    background: 'linear-gradient(180deg, rgba(15, 29, 58, 0) 0%, rgba(15, 29, 58, 0.92) 100%)',
                  }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '16px',
                    fontWeight: '700',
                  }}
                >
                  <Icon name="play" size={16} color="#FFFFFF" />
                  27K
                </span>
                <span style={{ position: 'absolute', left: '16px', right: '16px', bottom: '18px', fontSize: '19px', fontWeight: '700', lineHeight: '1.2' }}>
                  Фан-сектор поёт гимн
                </span>
              </Link>
              <Link
                style={{
                  position: 'relative',
                  aspectRatio: '9 / 16',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  display: 'block',
                  boxShadow: '0 16px 32px rgba(8, 16, 34, 0.35)',
                }}
                href="/media"
              >
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
                  src={asset('/img/photo-smoke.webp')}
                  alt=""
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    height: '55%',
                    background: 'linear-gradient(180deg, rgba(15, 29, 58, 0) 0%, rgba(15, 29, 58, 0.92) 100%)',
                  }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '16px',
                    fontWeight: '700',
                  }}
                >
                  <Icon name="play" size={16} color="#FFFFFF" />
                  19K
                </span>
                <span style={{ position: 'absolute', left: '16px', right: '16px', bottom: '18px', fontSize: '19px', fontWeight: '700', lineHeight: '1.2' }}>
                  Празднование под файеры
                </span>
              </Link>
              <Link
                style={{
                  position: 'relative',
                  aspectRatio: '9 / 16',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  display: 'block',
                  boxShadow: '0 16px 32px rgba(8, 16, 34, 0.35)',
                }}
                href="/media"
              >
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: '42% center' }}
                  src={asset('/img/news-huddle.webp')}
                  alt=""
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    height: '55%',
                    background: 'linear-gradient(180deg, rgba(15, 29, 58, 0) 0%, rgba(15, 29, 58, 0.92) 100%)',
                  }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '16px',
                    fontWeight: '700',
                  }}
                >
                  <Icon name="play" size={16} color="#FFFFFF" />
                  15K
                </span>
                <span style={{ position: 'absolute', left: '16px', right: '16px', bottom: '18px', fontSize: '19px', fontWeight: '700', lineHeight: '1.2' }}>
                  Объятия после гола
                </span>
              </Link>
              <Link
                style={{
                  position: 'relative',
                  aspectRatio: '9 / 16',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  display: 'block',
                  boxShadow: '0 16px 32px rgba(8, 16, 34, 0.35)',
                }}
                href="/media"
              >
                <img
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }}
                  src={asset('/img/video-goal.webp')}
                  alt=""
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    height: '55%',
                    background: 'linear-gradient(180deg, rgba(15, 29, 58, 0) 0%, rgba(15, 29, 58, 0.92) 100%)',
                  }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '16px',
                    fontWeight: '700',
                  }}
                >
                  <Icon name="play" size={16} color="#FFFFFF" />
                  12K
                </span>
                <span style={{ position: 'absolute', left: '16px', right: '16px', bottom: '18px', fontSize: '19px', fontWeight: '700', lineHeight: '1.2' }}>
                  Атака по флангу
                </span>
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
            background: '#1F3562',
            padding: '56px 0',
          }}
          id="media"
          aria-label="Медиа"
        >
          <Star w={420} h={420} fill="rgba(18, 158, 217, 0.12)" style={{ position: 'absolute', right: '-160px', top: '-160px' }} />
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
                Футбол. Без фильтров.
              </h2>
              <Link
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  minHeight: '44px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
                href="/media#video"
              >
                Все видео
                <Icon name="arrow-right-01" size={18} weight={2} color="#FFFFFF" />
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              <Link style={{ display: 'flex', flexDirection: 'column', gap: '14px', color: '#FFFFFF', textDecoration: 'none' }} href="/">
                <span style={{ position: 'relative', height: '210px', borderRadius: '22px', overflow: 'hidden', background: '#172A51', display: 'block' }}>
                  <img
                    style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                    src={asset('/img/photo-fans.webp')}
                    alt=""
                  />
                  <span
                    style={{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg, rgba(23, 42, 81, 0) 40%, rgba(23, 42, 81, 0.6) 100%)' }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      position: 'absolute',
                      left: '16px',
                      top: '16px',
                      height: '26px',
                      padding: '0 10px',
                      borderRadius: '6px',
                      background: '#E30512',
                      fontSize: '12px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FFFFFF' }} />
                    LIVE
                  </span>
                  <span
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      width: '64px',
                      height: '64px',
                      margin: '-32px 0 0 -32px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.92)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon name="play" size={28} weight={2} color="#0B7DB0" />
                  </span>
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '20px', fontWeight: '700' }}>Ордабасы — Кайрат</span>
                  <span style={{ fontSize: '15px', color: '#CFE3F2' }}>Чемпионат · Полный матч</span>
                </span>
              </Link>
              <Link style={{ display: 'flex', flexDirection: 'column', gap: '14px', color: '#FFFFFF', textDecoration: 'none' }} href="/">
                <span style={{ position: 'relative', height: '210px', borderRadius: '22px', overflow: 'hidden', background: '#172A51', display: 'block' }}>
                  <img
                    style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                    src={asset('/img/photo-smoke.webp')}
                    alt=""
                  />
                  <span
                    style={{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg, rgba(23, 42, 81, 0) 40%, rgba(23, 42, 81, 0.6) 100%)' }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      width: '64px',
                      height: '64px',
                      margin: '-32px 0 0 -32px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.92)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon name="play" size={28} weight={2} color="#0B7DB0" />
                  </span>
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '20px', fontWeight: '700' }}>Тренировка команды</span>
                  <span style={{ fontSize: '15px', color: '#CFE3F2' }}>Тренировки · 12:40</span>
                </span>
              </Link>
              <Link style={{ display: 'flex', flexDirection: 'column', gap: '14px', color: '#FFFFFF', textDecoration: 'none' }} href="/">
                <span style={{ position: 'relative', height: '210px', borderRadius: '22px', overflow: 'hidden', background: '#172A51', display: 'block' }}>
                  <img
                    style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                    src={asset('/img/video-goal.webp')}
                    alt=""
                  />
                  <span
                    style={{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg, rgba(23, 42, 81, 0) 40%, rgba(23, 42, 81, 0.6) 100%)' }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      width: '64px',
                      height: '64px',
                      margin: '-32px 0 0 -32px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.92)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon name="play" size={28} weight={2} color="#0B7DB0" />
                  </span>
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '20px', fontWeight: '700' }}>Обзор матча</span>
                  <span style={{ fontSize: '15px', color: '#CFE3F2' }}>Ордабасы — Астана · 6:15</span>
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section
          style={{ margin: '0 max(24px, calc((100% - 1280px) / 2)) 40px', borderRadius: '32px', overflow: 'hidden', background: '#FFFFFF', padding: '56px 0' }}
          id="teams"
          aria-label="Команды клуба"
        >
          <div
            style={{
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
                Команда нашего города
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
                href="/team"
              >
                Весь состав
                <Icon name="arrow-right-01" size={18} weight={2} color="#0B7DB0" />
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }} role="tablist" aria-label="Команды клуба">
              <Link
                style={{
                  height: '44px',
                  padding: '0 18px',
                  borderRadius: '22px',
                  background: '#172A51',
                  color: '#FFFFFF',
                  fontSize: '16px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                }}
                href="/team"
              >
                Основной состав
              </Link>
              <Link
                style={{
                  height: '44px',
                  padding: '0 18px',
                  borderRadius: '22px',
                  background: '#E3EAF3',
                  color: '#172A51',
                  fontSize: '16px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                }}
                href="/team"
              >
                Молодёжная
              </Link>
              <Link
                style={{
                  height: '44px',
                  padding: '0 18px',
                  borderRadius: '22px',
                  background: '#E3EAF3',
                  color: '#172A51',
                  fontSize: '16px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                }}
                href="/team"
              >
                Женская
              </Link>
              <Link
                style={{
                  height: '44px',
                  padding: '0 18px',
                  borderRadius: '22px',
                  background: '#E3EAF3',
                  color: '#172A51',
                  fontSize: '16px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                }}
                href="/team"
              >
                Академия U-17
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              {v.players.map((p: any, pIdx: number) => (
                <Fragment key={pIdx}>
                  <div style={{ height: '312px' }}>
                    <PlayerCard person={p} />
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </section>
        <section
          style={{ margin: '0 max(24px, calc((100% - 1280px) / 2)) 40px', borderRadius: '32px', overflow: 'hidden', background: '#1F3562', padding: '0px' }}
          aria-label="Игрок матча"
        >
          <div
            style={{
              width: '100%',
              maxWidth: 'none',
              margin: '0 auto',
              padding: '0px',
              boxSizing: 'border-box',
              display: 'flex',
              gap: '0',
              alignItems: 'stretch',
              flexWrap: 'nowrap',
            }}
          >
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                flex: '1 1 50%',
                height: 'auto',
                borderRadius: '0',
                background: 'linear-gradient(180deg, #172A51 0%, #129ED9 100%)',
                color: '#FFFFFF',
                minHeight: '604px',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  left: '20px',
                  top: '-30px',
                  fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                  fontSize: '340px',
                  fontWeight: '700',
                  lineHeight: '1',
                  color: 'rgba(255, 255, 255, 0.1)',
                }}
                aria-hidden="true"
              >
                10
              </span>
              <Star w={60} h={100} fill="#1F3562" style={{ position: 'absolute', left: '-30px', top: '200px' }} />
              <Star w={18} h={18} fill="#7CC6E9" style={{ position: 'absolute', right: '40px', top: '60px' }} />
              <img
                style={{
                  position: 'absolute',
                  right: 'auto',
                  top: 'auto',
                  height: '580px',
                  width: 'auto',
                  maxWidth: 'none',
                  bottom: '0',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
                src={asset('/img/player-astanov.webp')}
                alt="Эльхан Астанов"
              />
              <span
                style={{
                  position: 'absolute',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  height: '200px',
                  background: 'linear-gradient(180deg, rgba(23, 42, 81, 0) 0%, rgba(23, 42, 81, 0.85) 100%)',
                }}
                aria-hidden="true"
              />
              <span style={{ position: 'absolute', left: '48px', bottom: '48px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span
                  style={{
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '72px',
                    fontWeight: '600',
                    lineHeight: '0.95',
                    textTransform: 'uppercase',
                  }}
                >
                  Эльхан
                  <br />
                  Астанов
                </span>
                <span style={{ fontSize: '20px', color: '#CFE3F2' }}>Полузащитник · № 10</span>
              </span>
              <Star w={64} h={64} fill="#BFE3F4" opacity={0.35} style={{ position: 'absolute', right: '90px', top: '150px' }} keepRatio />
              <Star w={36} h={36} fill="#7CC6E9" opacity={0.5} style={{ position: 'absolute', left: '60px', top: '300px' }} keepRatio />
              <Star w={90} h={90} fill="#1F3562" opacity={0.8} style={{ position: 'absolute', right: '-20px', bottom: '140px' }} keepRatio />
              <div
                style={{
                  position: 'absolute',
                  right: '0px',
                  top: '0px',
                  bottom: '0px',
                  width: '240px',
                  background: 'linear-gradient(90deg, rgba(31, 53, 98, 0) 0%, #1F3562 100%)',
                  pointerEvents: 'none',
                }}
                aria-hidden="true"
              />
            </div>
            <div
              style={{
                flex: '1 1 50%',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                padding: '56px',
                boxSizing: 'border-box',
                justifyContent: 'center',
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
                  color: '#FFFFFF',
                }}
              >
                Игра в деталях
              </h2>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  padding: '22px',
                  borderRadius: '24px',
                  background: '#172A51',
                  boxShadow: 'none',
                  color: '#FFFFFF',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '15px', color: '#CFE3F2' }}>Сыграно минут</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span style={{ flexGrow: '1', height: '10px', borderRadius: '5px', background: 'rgba(255, 255, 255, 0.14)', overflow: 'hidden' }}>
                      <span style={{ display: 'block', width: '100%', height: '10px', borderRadius: '5px', background: '#129ED9' }} />
                    </span>
                    <span
                      style={{
                        minWidth: '64px',
                        textAlign: 'right',
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '22px',
                        fontWeight: '600',
                        color: '#FFFFFF',
                      }}
                    >
                      8 712
                    </span>
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '15px', color: '#CFE3F2' }}>Матчи</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span style={{ flexGrow: '1', height: '10px', borderRadius: '5px', background: 'rgba(255, 255, 255, 0.14)', overflow: 'hidden' }}>
                      <span style={{ display: 'block', width: '62%', height: '10px', borderRadius: '5px', background: '#129ED9' }} />
                    </span>
                    <span
                      style={{
                        minWidth: '64px',
                        textAlign: 'right',
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '22px',
                        fontWeight: '600',
                        color: '#FFFFFF',
                      }}
                    >
                      115
                    </span>
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '15px', color: '#CFE3F2' }}>Стартовый состав</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span style={{ flexGrow: '1', height: '10px', borderRadius: '5px', background: 'rgba(255, 255, 255, 0.14)', overflow: 'hidden' }}>
                      <span style={{ display: 'block', width: '52%', height: '10px', borderRadius: '5px', background: '#129ED9' }} />
                    </span>
                    <span
                      style={{
                        minWidth: '64px',
                        textAlign: 'right',
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '22px',
                        fontWeight: '600',
                        color: '#FFFFFF',
                      }}
                    >
                      96
                    </span>
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '15px', color: '#CFE3F2' }}>Голы</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span style={{ flexGrow: '1', height: '10px', borderRadius: '5px', background: 'rgba(255, 255, 255, 0.14)', overflow: 'hidden' }}>
                      <span style={{ display: 'block', width: '28%', height: '10px', borderRadius: '5px', background: '#129ED9' }} />
                    </span>
                    <span
                      style={{
                        minWidth: '64px',
                        textAlign: 'right',
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '22px',
                        fontWeight: '600',
                        color: '#FFFFFF',
                      }}
                    >
                      8
                    </span>
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '15px', color: '#CFE3F2' }}>Голевые передачи</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span style={{ flexGrow: '1', height: '10px', borderRadius: '5px', background: 'rgba(255, 255, 255, 0.14)', overflow: 'hidden' }}>
                      <span style={{ display: 'block', width: '28%', height: '10px', borderRadius: '5px', background: '#129ED9' }} />
                    </span>
                    <span
                      style={{
                        minWidth: '64px',
                        textAlign: 'right',
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '22px',
                        fontWeight: '600',
                        color: '#FFFFFF',
                      }}
                    >
                      8
                    </span>
                  </span>
                </div>
              </div>
              <Link
                style={{
                  alignSelf: 'flex-start',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  minHeight: '44px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
                href="/team/player"
              >
                Профиль игрока
                <Icon name="arrow-right-01" size={18} weight={2} color="#CFE3F2" />
              </Link>
            </div>
          </div>
        </section>
        <section
          style={{ margin: '0 max(24px, calc((100% - 1280px) / 2)) 40px', borderRadius: '32px', overflow: 'hidden', background: '#FFFFFF', padding: '56px 0' }}
          aria-label="Турнирная таблица"
        >
          <div
            style={{
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
                В борьбе за вершину
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
                Полная таблица
                <Icon name="arrow-right-01" size={18} weight={2} color="#0B7DB0" />
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '48px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <span style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                  <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '96px', fontWeight: '600', lineHeight: '0.9', color: '#0B7DB0' }}>
                    52
                  </span>
                  <span style={{ fontSize: '20px', fontWeight: '700', color: '#5B6B8C' }}>очка</span>
                </span>
                <span style={{ fontSize: '22px', fontWeight: '700' }}>«Ордабасы» — на первом месте</span>
                <span style={{ fontSize: '14px', lineHeight: '1.5', color: '#5B6B8C' }}>
                  И — игры, В — победы, Н — ничьи, П — поражения, РМ — разница мячей, О — очки.
                </span>
              </div>
              <div
                style={{ flex: '2 1 560px', borderRadius: '24px', overflowX: 'auto', background: '#FFFFFF', boxShadow: '0 2px 12px rgba(23, 42, 81, 0.08)' }}
              >
                <table style={{ width: '100%', minWidth: '520px', borderCollapse: 'collapse', fontSize: '17px' }}>
                  <thead>
                    <tr style={{ background: '#F2F6FA' }}>
                      <th
                        style={{
                          padding: '14px 12px',
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
                          padding: '14px 12px',
                          fontSize: '13px',
                          fontWeight: '700',
                          letterSpacing: '0.06em',
                          color: '#5B6B8C',
                          textTransform: 'uppercase',
                          textAlign: 'left',
                        }}
                      >
                        Команда
                      </th>
                      <th
                        style={{
                          padding: '14px 12px',
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
                          padding: '14px 12px',
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
                          padding: '14px 12px',
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
                          padding: '14px 12px',
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
                          padding: '14px 12px',
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
                          padding: '14px 12px',
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
                    <tr style={{ background: '#E7F5FB' }}>
                      <td style={{ padding: '14px 12px', textAlign: 'center', fontVariantNumeric: 'tabular-nums', fontWeight: '700' }}>1</td>
                      <td style={{ padding: '14px 12px' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '700' }}>
                          <span
                            style={{
                              width: '36px',
                              height: '36px',
                              borderRadius: '50%',
                              background: '#FFFFFF',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <img style={{ width: '24px', height: '28px', objectFit: 'contain' }} src={asset('/img/crest.png')} alt="" />
                          </span>
                          Ордабасы
                        </span>
                      </td>
                      <td style={{ padding: '14px 12px', textAlign: 'center', fontVariantNumeric: 'tabular-nums' }}>22</td>
                      <td style={{ padding: '14px 12px', textAlign: 'center', fontVariantNumeric: 'tabular-nums' }}>16</td>
                      <td style={{ padding: '14px 12px', textAlign: 'center', fontVariantNumeric: 'tabular-nums' }}>4</td>
                      <td style={{ padding: '14px 12px', textAlign: 'center', fontVariantNumeric: 'tabular-nums' }}>2</td>
                      <td style={{ padding: '14px 12px', textAlign: 'center', fontVariantNumeric: 'tabular-nums' }}>+27</td>
                      <td
                        style={{
                          padding: '14px 12px',
                          textAlign: 'center',
                          fontVariantNumeric: 'tabular-nums',
                          fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                          fontSize: '22px',
                          fontWeight: '600',
                          color: '#0B7DB0',
                        }}
                      >
                        52
                      </td>
                    </tr>
                    <tr style={{ background: '#FFFFFF' }}>
                      <td style={{ padding: '14px 12px', textAlign: 'center', fontVariantNumeric: 'tabular-nums', fontWeight: '700' }}>2</td>
                      <td style={{ padding: '14px 12px' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '700' }}>
                          <span
                            style={{
                              width: '36px',
                              height: '36px',
                              borderRadius: '50%',
                              background: '#FFFFFF',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <img style={{ width: '24px', height: '28px', objectFit: 'contain' }} src={asset('/img/club-kairat.webp')} alt="" />
                          </span>
                          Кайрат
                        </span>
                      </td>
                      <td style={{ padding: '14px 12px', textAlign: 'center', fontVariantNumeric: 'tabular-nums' }}>22</td>
                      <td style={{ padding: '14px 12px', textAlign: 'center', fontVariantNumeric: 'tabular-nums' }}>14</td>
                      <td style={{ padding: '14px 12px', textAlign: 'center', fontVariantNumeric: 'tabular-nums' }}>5</td>
                      <td style={{ padding: '14px 12px', textAlign: 'center', fontVariantNumeric: 'tabular-nums' }}>3</td>
                      <td style={{ padding: '14px 12px', textAlign: 'center', fontVariantNumeric: 'tabular-nums' }}>+19</td>
                      <td
                        style={{
                          padding: '14px 12px',
                          textAlign: 'center',
                          fontVariantNumeric: 'tabular-nums',
                          fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                          fontSize: '22px',
                          fontWeight: '600',
                          color: '#172A51',
                        }}
                      >
                        47
                      </td>
                    </tr>
                    <tr style={{ background: '#FFFFFF' }}>
                      <td style={{ padding: '14px 12px', textAlign: 'center', fontVariantNumeric: 'tabular-nums', fontWeight: '700' }}>3</td>
                      <td style={{ padding: '14px 12px' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '700' }}>
                          <span
                            style={{
                              width: '36px',
                              height: '36px',
                              borderRadius: '50%',
                              background: '#FFFFFF',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <img style={{ width: '24px', height: '28px', objectFit: 'contain' }} src={asset('/img/club-astana.webp')} alt="" />
                          </span>
                          Астана
                        </span>
                      </td>
                      <td style={{ padding: '14px 12px', textAlign: 'center', fontVariantNumeric: 'tabular-nums' }}>22</td>
                      <td style={{ padding: '14px 12px', textAlign: 'center', fontVariantNumeric: 'tabular-nums' }}>12</td>
                      <td style={{ padding: '14px 12px', textAlign: 'center', fontVariantNumeric: 'tabular-nums' }}>5</td>
                      <td style={{ padding: '14px 12px', textAlign: 'center', fontVariantNumeric: 'tabular-nums' }}>5</td>
                      <td style={{ padding: '14px 12px', textAlign: 'center', fontVariantNumeric: 'tabular-nums' }}>+12</td>
                      <td
                        style={{
                          padding: '14px 12px',
                          textAlign: 'center',
                          fontVariantNumeric: 'tabular-nums',
                          fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                          fontSize: '22px',
                          fontWeight: '600',
                          color: '#172A51',
                        }}
                      >
                        41
                      </td>
                    </tr>
                  </tbody>
                </table>
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
            height: '400px',
            background: '#172A51',
          }}
          id="fans"
          aria-label="Для вас"
        >
          <input type="radio" name="fans-slide" id="fs0" className="fs-r" defaultChecked />
          <input type="radio" name="fans-slide" id="fs1" className="fs-r" />
          <input type="radio" name="fans-slide" id="fs2" className="fs-r" />
          <input type="radio" name="fans-slide" id="fs3" className="fs-r" />
          <div style={{ position: 'absolute', inset: '0' }}>
            <div
              style={{ position: 'absolute', inset: '0', background: 'linear-gradient(120deg, #172A51 0%, #1B5A93 55%, #129ED9 100%)' }}
              className="fs-slide fs-s0"
            >
              <div
                style={{
                  position: 'absolute',
                  right: '-10px',
                  top: '-20px',
                  fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                  fontSize: '260px',
                  fontWeight: '700',
                  lineHeight: '0.85',
                  color: 'rgba(255, 255, 255, 0.07)',
                  whiteSpace: 'pre-line',
                  textAlign: 'right',
                }}
                aria-hidden="true"
              >
                {'KIT\n2026'}
              </div>
              <Star w={26} h={26} fill="#FFFFFF" style={{ position: 'absolute', left: '48%', top: '60px' }} />
              <Star w={14} h={14} fill="#7CC6E9" style={{ position: 'absolute', right: '60px', bottom: '70px' }} />
              <Star w={120} h={200} fill="rgba(18, 158, 217, 0.25)" style={{ position: 'absolute', left: '-60px', bottom: '-60px' }} />
              <img
                style={{
                  position: 'absolute',
                  right: '6%',
                  bottom: '-60px',
                  height: '125%',
                  width: 'auto',
                  maxWidth: 'none',
                  transform: 'rotate(-6deg)',
                  filter: 'drop-shadow(0 24px 36px rgba(10, 18, 36, 0.45))',
                }}
                src={asset('/img/jersey.webp')}
                alt=""
              />
              <img
                style={{
                  position: 'absolute',
                  right: '40%',
                  top: '22%',
                  width: '64px',
                  height: '64px',
                  objectFit: 'contain',
                  transform: 'rotate(-14deg)',
                  filter: 'drop-shadow(0 8px 12px rgba(10, 18, 36, 0.35))',
                }}
                src={asset('/img/coin.webp')}
                alt=""
              />
              <img
                style={{
                  position: 'absolute',
                  right: '4%',
                  bottom: '40px',
                  width: '90px',
                  height: '90px',
                  objectFit: 'contain',
                  transform: 'rotate(10deg)',
                  filter: 'drop-shadow(0 8px 14px rgba(10, 18, 36, 0.35))',
                }}
                src={asset('/img/coin.webp')}
                alt=""
              />
              <div
                style={{
                  position: 'relative',
                  zIndex: '2',
                  height: '100%',
                  maxWidth: '1280px',
                  margin: '0 auto',
                  padding: '32px 40px 64px',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '14px',
                  width: '100%',
                }}
              >
                <span
                  style={{
                    alignSelf: 'flex-start',
                    height: '30px',
                    padding: '0 14px',
                    borderRadius: '15px',
                    background: '#E30512',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  Только для вас
                </span>
                <h2
                  style={{
                    margin: '0',
                    maxWidth: '560px',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '64px',
                    fontWeight: '600',
                    lineHeight: '0.95',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                  }}
                >
                  Форма любимой команды
                </h2>
                <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '72px', fontWeight: '600', lineHeight: '0.9', color: '#FFFFFF' }}>
                  −15%
                </span>
                <Link
                  style={{
                    alignSelf: 'flex-start',
                    marginTop: '8px',
                    height: '52px',
                    padding: '0 28px',
                    borderRadius: '26px',
                    background: '#FFFFFF',
                    color: '#172A51',
                    fontSize: '17px',
                    fontWeight: '700',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                  href="/fans"
                >
                  В магазин
                  <Icon name="arrow-right-01" size={18} weight={2} color="#172A51" />
                </Link>
              </div>
            </div>
            <div
              style={{ position: 'absolute', inset: '0', background: 'linear-gradient(120deg, #FFFFFF 0%, #E7F5FB 60%, #CFE9F6 100%)' }}
              className="fs-slide fs-s1"
            >
              <div
                style={{
                  position: 'absolute',
                  right: '30px',
                  top: '-20px',
                  fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                  fontSize: '260px',
                  fontWeight: '700',
                  lineHeight: '0.85',
                  color: '#DCEEF8',
                  whiteSpace: 'pre-line',
                  textAlign: 'right',
                }}
                aria-hidden="true"
              >
                {'LIVE\nLIVE'}
              </div>
              <Star w={80} h={140} fill="#129ED9" style={{ position: 'absolute', right: '-40px', top: '30%' }} />
              <Star w={18} h={18} fill="#129ED9" style={{ position: 'absolute', left: '46%', top: '70px' }} />
              <img
                style={{ position: 'absolute', right: '8%', top: '40px', height: '170%', width: 'auto', maxWidth: 'none' }}
                src={asset('/img/team-cutout.webp')}
                alt=""
              />
              <div
                style={{
                  position: 'absolute',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  height: '120px',
                  background: 'linear-gradient(180deg, rgba(207, 233, 246, 0) 0%, #CFE9F6 100%)',
                }}
                aria-hidden="true"
              />
              <div
                style={{
                  position: 'relative',
                  zIndex: '2',
                  height: '100%',
                  maxWidth: '1280px',
                  margin: '0 auto',
                  padding: '32px 40px 64px',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '14px',
                  width: '100%',
                }}
              >
                <span
                  style={{
                    alignSelf: 'flex-start',
                    height: '30px',
                    padding: '0 14px',
                    borderRadius: '15px',
                    background: '#E30512',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FFFFFF' }} />
                  Эксклюзив
                </span>
                <h2
                  style={{
                    margin: '0',
                    maxWidth: '560px',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '64px',
                    fontWeight: '600',
                    lineHeight: '0.95',
                    textTransform: 'uppercase',
                    color: '#172A51',
                  }}
                >
                  Прямой эфир с командой
                </h2>
                <Link
                  style={{
                    alignSelf: 'flex-start',
                    marginTop: '8px',
                    height: '52px',
                    padding: '0 28px',
                    borderRadius: '26px',
                    background: '#172A51',
                    color: '#FFFFFF',
                    fontSize: '17px',
                    fontWeight: '700',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                  href="/fans"
                >
                  Смотреть
                  <Icon name="arrow-right-01" size={18} weight={2} color="#FFFFFF" />
                </Link>
              </div>
            </div>
            <div
              style={{ position: 'absolute', inset: '0', background: 'linear-gradient(120deg, #0F1E3D 0%, #172A51 55%, #1F3562 100%)' }}
              className="fs-slide fs-s2"
            >
              <div
                style={{
                  position: 'absolute',
                  right: '-10px',
                  top: '-20px',
                  fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                  fontSize: '260px',
                  fontWeight: '700',
                  lineHeight: '0.85',
                  color: 'rgba(255, 255, 255, 0.06)',
                  whiteSpace: 'pre-line',
                  textAlign: 'right',
                }}
                aria-hidden="true"
              >
                {'GATE\nOPEN'}
              </div>
              <Star w={110} h={180} fill="#129ED9" style={{ position: 'absolute', left: '-55px', bottom: '-40px' }} />
              <Star w={16} h={16} fill="#7CC6E9" style={{ position: 'absolute', left: '46%', top: '70px' }} />
              <img
                style={{ position: 'absolute', right: '8%', top: '30px', height: '175%', width: 'auto', maxWidth: 'none' }}
                src={asset('/img/player-astanov.webp')}
                alt=""
              />
              <div
                style={{
                  position: 'absolute',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  height: '140px',
                  background: 'linear-gradient(180deg, rgba(31, 53, 98, 0) 0%, #1F3562 100%)',
                }}
                aria-hidden="true"
              />
              <div
                style={{
                  position: 'relative',
                  zIndex: '2',
                  height: '100%',
                  maxWidth: '1280px',
                  margin: '0 auto',
                  padding: '32px 40px 64px',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '14px',
                  width: '100%',
                }}
              >
                <span
                  style={{
                    alignSelf: 'flex-start',
                    height: '30px',
                    padding: '0 14px',
                    borderRadius: '15px',
                    background: '#E30512',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  Эксклюзив
                </span>
                <h2
                  style={{
                    margin: '0',
                    maxWidth: '560px',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '64px',
                    fontWeight: '600',
                    lineHeight: '0.95',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                  }}
                >
                  Билеты и доступ
                </h2>
                <Link
                  style={{
                    alignSelf: 'flex-start',
                    marginTop: '8px',
                    height: '52px',
                    padding: '0 28px',
                    borderRadius: '26px',
                    background: '#FFFFFF',
                    color: '#172A51',
                    fontSize: '17px',
                    fontWeight: '700',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                  href="/tickets"
                >
                  Купить билеты
                  <Icon name="arrow-right-01" size={18} weight={2} color="#172A51" />
                </Link>
              </div>
            </div>
            <div
              style={{ position: 'absolute', inset: '0', background: 'linear-gradient(120deg, #0B7DB0 0%, #129ED9 60%, #3FB3E4 100%)' }}
              className="fs-slide fs-s3"
            >
              <div
                style={{
                  position: 'absolute',
                  right: '-10px',
                  top: '-20px',
                  fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                  fontSize: '260px',
                  fontWeight: '700',
                  lineHeight: '0.85',
                  color: 'rgba(255, 255, 255, 0.1)',
                  whiteSpace: 'pre-line',
                  textAlign: 'right',
                }}
                aria-hidden="true"
              >
                {'+500\n+500'}
              </div>
              <Star w={22} h={22} fill="#FFFFFF" style={{ position: 'absolute', left: '46%', top: '70px' }} />
              <Star w={34} h={34} fill="#172A51" style={{ position: 'absolute', left: '40%', bottom: '80px' }} />
              <img
                style={{
                  position: 'absolute',
                  right: '10%',
                  top: '50%',
                  height: '80%',
                  width: 'auto',
                  transform: 'translateY(-50%) rotate(8deg)',
                  filter: 'drop-shadow(0 24px 34px rgba(23, 42, 81, 0.4))',
                }}
                src={asset('/img/coin.webp')}
                alt=""
              />
              <div
                style={{
                  position: 'relative',
                  zIndex: '2',
                  height: '100%',
                  maxWidth: '1280px',
                  margin: '0 auto',
                  padding: '32px 40px 64px',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '14px',
                  width: '100%',
                }}
              >
                <span
                  style={{
                    alignSelf: 'flex-start',
                    height: '30px',
                    padding: '0 14px',
                    borderRadius: '15px',
                    background: '#172A51',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  Только для вас
                </span>
                <h2
                  style={{
                    margin: '0',
                    maxWidth: '560px',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '64px',
                    fontWeight: '600',
                    lineHeight: '0.95',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                  }}
                >
                  Бонусы и награды
                </h2>
                <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '72px', fontWeight: '600', lineHeight: '0.9', color: '#FFFFFF' }}>
                  +500
                </span>
                <Link
                  style={{
                    alignSelf: 'flex-start',
                    marginTop: '8px',
                    height: '52px',
                    padding: '0 28px',
                    borderRadius: '26px',
                    background: '#FFFFFF',
                    color: '#172A51',
                    fontSize: '17px',
                    fontWeight: '700',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                  href="/profile"
                >
                  Мои баллы
                  <Icon name="arrow-right-01" size={18} weight={2} color="#172A51" />
                </Link>
              </div>
            </div>
          </div>
          <div style={{ position: 'absolute', left: '0', right: '0', bottom: '60px', zIndex: '3', pointerEvents: 'none' }}>
            <div
              style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '0 40px',
                boxSizing: 'border-box',
                display: 'flex',
                gap: '10px',
                justifyContent: 'center',
                pointerEvents: 'auto',
              }}
            >
              <label htmlFor="fs0" className="fs-dot fs-d0" aria-label="Слайд 1" />
              <label htmlFor="fs1" className="fs-dot fs-d1" aria-label="Слайд 2" />
              <label htmlFor="fs2" className="fs-dot fs-d2" aria-label="Слайд 3" />
              <label htmlFor="fs3" className="fs-dot fs-d3" aria-label="Слайд 4" />
            </div>
          </div>
          <div style={{ position: 'absolute', right: '40px', bottom: '40px', zIndex: '4', gap: '10px' }} className="fs-nav fs-n0">
            <label
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '26px',
                background: 'rgba(255, 255, 255, 0.92)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 6px 16px rgba(10, 18, 36, 0.2)',
              }}
              htmlFor="fs3"
              aria-label="Назад"
            >
              <Icon name="arrow-left-01" size={22} weight={2} color="#172A51" />
            </label>
            <label
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '26px',
                background: '#172A51',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 6px 16px rgba(10, 18, 36, 0.2)',
              }}
              htmlFor="fs1"
              aria-label="Вперёд"
            >
              <Icon name="arrow-right-01" size={22} weight={2} color="#FFFFFF" />
            </label>
          </div>
          <div style={{ position: 'absolute', right: '40px', bottom: '40px', zIndex: '4', gap: '10px' }} className="fs-nav fs-n1">
            <label
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '26px',
                background: 'rgba(255, 255, 255, 0.92)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 6px 16px rgba(10, 18, 36, 0.2)',
              }}
              htmlFor="fs0"
              aria-label="Назад"
            >
              <Icon name="arrow-left-01" size={22} weight={2} color="#172A51" />
            </label>
            <label
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '26px',
                background: '#172A51',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 6px 16px rgba(10, 18, 36, 0.2)',
              }}
              htmlFor="fs2"
              aria-label="Вперёд"
            >
              <Icon name="arrow-right-01" size={22} weight={2} color="#FFFFFF" />
            </label>
          </div>
          <div style={{ position: 'absolute', right: '40px', bottom: '40px', zIndex: '4', gap: '10px' }} className="fs-nav fs-n2">
            <label
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '26px',
                background: 'rgba(255, 255, 255, 0.92)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 6px 16px rgba(10, 18, 36, 0.2)',
              }}
              htmlFor="fs1"
              aria-label="Назад"
            >
              <Icon name="arrow-left-01" size={22} weight={2} color="#172A51" />
            </label>
            <label
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '26px',
                background: '#172A51',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 6px 16px rgba(10, 18, 36, 0.2)',
              }}
              htmlFor="fs3"
              aria-label="Вперёд"
            >
              <Icon name="arrow-right-01" size={22} weight={2} color="#FFFFFF" />
            </label>
          </div>
          <div style={{ position: 'absolute', right: '40px', bottom: '40px', zIndex: '4', gap: '10px' }} className="fs-nav fs-n3">
            <label
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '26px',
                background: 'rgba(255, 255, 255, 0.92)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 6px 16px rgba(10, 18, 36, 0.2)',
              }}
              htmlFor="fs2"
              aria-label="Назад"
            >
              <Icon name="arrow-left-01" size={22} weight={2} color="#172A51" />
            </label>
            <label
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '26px',
                background: '#172A51',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 6px 16px rgba(10, 18, 36, 0.2)',
              }}
              htmlFor="fs0"
              aria-label="Вперёд"
            >
              <Icon name="arrow-right-01" size={22} weight={2} color="#FFFFFF" />
            </label>
          </div>
        </section>
        <section
          style={{ margin: '0 max(24px, calc((100% - 1280px) / 2)) 40px', borderRadius: '32px', overflow: 'hidden', background: '#FFFFFF', padding: '48px 0' }}
          aria-label="Партнёры клуба"
        >
          <div
            style={{
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
              Партнёры клуба
            </h2>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  flex: '1 1 0',
                  height: '128px',
                  borderRadius: '20px',
                  background: '#F2F6FA',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  minWidth: '0',
                }}
                href="/"
                aria-label="Integra Construction"
              >
                <Star w={64} h={64} fill="#DCEEF8" style={{ position: 'absolute', right: '-20px', top: '-20px' }} keepRatio />
                <img
                  style={{ position: 'relative', maxWidth: '60%', maxHeight: '60px', objectFit: 'contain' }}
                  src={asset('/img/sponsor-integra.png')}
                  alt="Integra Construction"
                />
              </Link>
              <Link
                style={{
                  flex: '1 1 0',
                  height: '128px',
                  boxSizing: 'border-box',
                  padding: '20px',
                  borderRadius: '20px',
                  background: '#F2F6FA',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  minWidth: '0',
                }}
                href="/"
                aria-label="ERG"
              >
                <img
                  style={{ maxWidth: '100%', maxHeight: '72px', objectFit: 'contain', mixBlendMode: 'multiply' }}
                  src={asset('/img/sponsor-erg.png')}
                  alt="ERG"
                />
              </Link>
              <Link
                style={{
                  flex: '1 1 0',
                  height: '128px',
                  boxSizing: 'border-box',
                  padding: '20px',
                  borderRadius: '20px',
                  background: '#F2F6FA',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  minWidth: '0',
                }}
                href="/"
                aria-label="Евразия — страхование жизни"
              >
                <img
                  style={{ maxWidth: '100%', maxHeight: '52px', objectFit: 'contain' }}
                  src={asset('/img/sponsor-eurasia.png')}
                  alt="Евразия — страхование жизни"
                />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
