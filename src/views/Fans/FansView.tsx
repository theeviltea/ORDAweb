'use client';

/* Сгенерировано из дизайн-макета ORDA (canvas). Разметка повторяет макет 1:1. */
import { Fragment } from 'react';
import Link from 'next/link';
import { asset } from '@/lib/asset';
import { Icon } from '@/components/Icon';
import { Star } from '@/components/Star';
import { useDC } from '@/lib/dc';
import { vals, tick } from './Fans.vals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function FansView(props: {}) {
  const self = useDC(props, tick);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const v: any = vals(self);
  return (
    <>
      <div style={{ width: '100%', background: '#172A51', paddingBottom: '1px', fontFamily: "'Roboto Condensed', sans-serif", color: '#172A51' }}>
        <section style={{ position: 'relative', overflow: 'hidden', padding: '48px 0 44px' }} aria-label="Фан-зона">
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
                  <span style={{ color: '#CFE3F2' }}>Фан-зона</span>
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
                  Фан-зона
                </h1>
                <p style={{ margin: '0', maxWidth: '560px', fontSize: '19px', lineHeight: '1.5', color: '#CFE3F2' }}>
                  Викторины, конкурсы, опросы и прогнозы. Участвуйте, копите баллы и обменивайте их на призы клуба.
                </p>
              </div>
              <Link
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  flex: '0 1 460px',
                  padding: '28px',
                  borderRadius: '28px',
                  background: 'linear-gradient(140deg, #1B5A93 0%, #129ED9 100%)',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
                href="/profile"
              >
                <span
                  style={{
                    position: 'absolute',
                    right: '-6px',
                    top: '-16px',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '120px',
                    fontWeight: '700',
                    lineHeight: '0.86',
                    color: 'rgba(255, 255, 255, 0.1)',
                  }}
                  aria-hidden="true"
                >
                  LVL 21
                </span>
                <span style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <img
                    style={{ width: '56px', height: '56px', filter: 'drop-shadow(0 6px 10px rgba(10, 18, 36, 0.3))' }}
                    src={asset('/img/coin.webp')}
                    alt=""
                  />
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '48px', fontWeight: '600', lineHeight: '1' }}>2 480</span>
                    <span style={{ fontSize: '15px', color: '#E7F5FB' }}>баллов · уровень «Болельщик»</span>
                  </span>
                </span>
                <span style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ height: '10px', borderRadius: '5px', background: 'rgba(255, 255, 255, 0.25)', overflow: 'hidden' }}>
                    <span style={{ display: 'block', width: '83%', height: '10px', borderRadius: '5px', background: '#FFFFFF' }} />
                  </span>
                  <span style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#E7F5FB' }}>
                    <span>ещё 520 до «Легенды»</span>
                    <span style={{ fontWeight: '700' }}>Мои достижения →</span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section
          style={{ position: 'relative', margin: '0 24px 40px', borderRadius: '32px', overflow: 'hidden', background: '#FFFFFF', padding: '56px 0' }}
          aria-label="Разделы фан-зоны"
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
                Играй за «Ордабасы»
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '20px' }}>
              <Link
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  height: '220px',
                  padding: '26px',
                  boxSizing: 'border-box',
                  borderRadius: '26px',
                  background: '#172A51',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
                href="/fans"
              >
                <Star w={110} h={180} fill="rgba(18, 158, 217, 0.35)" style={{ position: 'absolute', right: '-30px', bottom: '-60px' }} />
                <Star w={14} h={14} fill="rgba(18, 158, 217, 0.35)" style={{ position: 'absolute', right: '46%', top: '30px' }} />
                <span
                  style={{
                    position: 'relative',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '34px',
                    fontWeight: '600',
                    lineHeight: '1',
                    textTransform: 'uppercase',
                    maxWidth: '60%',
                  }}
                >
                  Викторины
                </span>
                <span style={{ position: 'relative', fontSize: '16px', color: '#CFE3F2', maxWidth: '55%' }}>Проверьте знания о клубе</span>
                <span
                  style={{
                    position: 'relative',
                    marginTop: 'auto',
                    alignSelf: 'flex-start',
                    height: '40px',
                    padding: '0 16px',
                    borderRadius: '20px',
                    background: '#FFFFFF',
                    color: '#172A51',
                    fontSize: '15px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  Открыть
                  <Icon name="arrow-right-01" size={16} weight={2} color="#172A51" />
                </span>
                <img
                  style={{
                    position: 'absolute',
                    right: '18px',
                    top: '50%',
                    width: '150px',
                    height: '150px',
                    marginTop: '-75px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 12px 20px rgba(23, 42, 81, 0.25))',
                  }}
                  src={asset('/img/icon3d-quiz.png')}
                  alt=""
                />
              </Link>
              <Link
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  height: '220px',
                  padding: '26px',
                  boxSizing: 'border-box',
                  borderRadius: '26px',
                  background: '#129ED9',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
                href="/fans"
              >
                <Star w={110} h={180} fill="rgba(255, 255, 255, 0.22)" style={{ position: 'absolute', right: '-30px', bottom: '-60px' }} />
                <Star w={14} h={14} fill="rgba(255, 255, 255, 0.22)" style={{ position: 'absolute', right: '46%', top: '30px' }} />
                <span
                  style={{
                    position: 'relative',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '34px',
                    fontWeight: '600',
                    lineHeight: '1',
                    textTransform: 'uppercase',
                    maxWidth: '60%',
                  }}
                >
                  Конкурсы
                </span>
                <span style={{ position: 'relative', fontSize: '16px', color: '#E7F5FB', maxWidth: '55%' }}>Призы и розыгрыши</span>
                <span
                  style={{
                    position: 'relative',
                    marginTop: 'auto',
                    alignSelf: 'flex-start',
                    height: '40px',
                    padding: '0 16px',
                    borderRadius: '20px',
                    background: '#FFFFFF',
                    color: '#172A51',
                    fontSize: '15px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  Открыть
                  <Icon name="arrow-right-01" size={16} weight={2} color="#172A51" />
                </span>
                <img
                  style={{
                    position: 'absolute',
                    right: '18px',
                    top: '50%',
                    width: '150px',
                    height: '150px',
                    marginTop: '-75px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 12px 20px rgba(23, 42, 81, 0.25))',
                  }}
                  src={asset('/img/icon3d-contest.png')}
                  alt=""
                />
              </Link>
              <Link
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  height: '220px',
                  padding: '26px',
                  boxSizing: 'border-box',
                  borderRadius: '26px',
                  background: '#E7F5FB',
                  color: '#172A51',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
                href="/fans"
              >
                <Star w={110} h={180} fill="#BFE3F4" style={{ position: 'absolute', right: '-30px', bottom: '-60px' }} />
                <Star w={14} h={14} fill="#BFE3F4" style={{ position: 'absolute', right: '46%', top: '30px' }} />
                <span
                  style={{
                    position: 'relative',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '34px',
                    fontWeight: '600',
                    lineHeight: '1',
                    textTransform: 'uppercase',
                    maxWidth: '60%',
                  }}
                >
                  Опросы
                </span>
                <span style={{ position: 'relative', fontSize: '16px', color: '#5B6B8C', maxWidth: '55%' }}>Голос болельщика</span>
                <span
                  style={{
                    position: 'relative',
                    marginTop: 'auto',
                    alignSelf: 'flex-start',
                    height: '40px',
                    padding: '0 16px',
                    borderRadius: '20px',
                    background: '#172A51',
                    color: '#FFFFFF',
                    fontSize: '15px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  Открыть
                  <Icon name="arrow-right-01" size={16} weight={2} color="#FFFFFF" />
                </span>
                <img
                  style={{
                    position: 'absolute',
                    right: '18px',
                    top: '50%',
                    width: '150px',
                    height: '150px',
                    marginTop: '-75px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 12px 20px rgba(23, 42, 81, 0.25))',
                  }}
                  src={asset('/img/icon3d-poll.png')}
                  alt=""
                />
              </Link>
              <Link
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  height: '220px',
                  padding: '26px',
                  boxSizing: 'border-box',
                  borderRadius: '26px',
                  background: '#E7F5FB',
                  color: '#172A51',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
                href="/fans"
              >
                <Star w={110} h={180} fill="#BFE3F4" style={{ position: 'absolute', right: '-30px', bottom: '-60px' }} />
                <Star w={14} h={14} fill="#BFE3F4" style={{ position: 'absolute', right: '46%', top: '30px' }} />
                <span
                  style={{
                    position: 'relative',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '34px',
                    fontWeight: '600',
                    lineHeight: '1',
                    textTransform: 'uppercase',
                    maxWidth: '60%',
                  }}
                >
                  Прогнозы
                </span>
                <span style={{ position: 'relative', fontSize: '16px', color: '#5B6B8C', maxWidth: '55%' }}>Угадайте счёт матча</span>
                <span
                  style={{
                    position: 'relative',
                    marginTop: 'auto',
                    alignSelf: 'flex-start',
                    height: '40px',
                    padding: '0 16px',
                    borderRadius: '20px',
                    background: '#172A51',
                    color: '#FFFFFF',
                    fontSize: '15px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  Открыть
                  <Icon name="arrow-right-01" size={16} weight={2} color="#FFFFFF" />
                </span>
                <img
                  style={{
                    position: 'absolute',
                    right: '18px',
                    top: '50%',
                    width: '150px',
                    height: '150px',
                    marginTop: '-75px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 12px 20px rgba(23, 42, 81, 0.25))',
                  }}
                  src={asset('/img/icon3d-results.png')}
                  alt=""
                />
              </Link>
              <Link
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  height: '220px',
                  padding: '26px',
                  boxSizing: 'border-box',
                  borderRadius: '26px',
                  background: '#172A51',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
                href="/fans"
              >
                <Star w={110} h={180} fill="rgba(18, 158, 217, 0.35)" style={{ position: 'absolute', right: '-30px', bottom: '-60px' }} />
                <Star w={14} h={14} fill="rgba(18, 158, 217, 0.35)" style={{ position: 'absolute', right: '46%', top: '30px' }} />
                <span
                  style={{
                    position: 'relative',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '34px',
                    fontWeight: '600',
                    lineHeight: '1',
                    textTransform: 'uppercase',
                    maxWidth: '60%',
                  }}
                >
                  Задания
                </span>
                <span style={{ position: 'relative', fontSize: '16px', color: '#CFE3F2', maxWidth: '55%' }}>Баллы за активность</span>
                <span
                  style={{
                    position: 'relative',
                    marginTop: 'auto',
                    alignSelf: 'flex-start',
                    height: '40px',
                    padding: '0 16px',
                    borderRadius: '20px',
                    background: '#FFFFFF',
                    color: '#172A51',
                    fontSize: '15px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  Открыть
                  <Icon name="arrow-right-01" size={16} weight={2} color="#172A51" />
                </span>
                <img
                  style={{
                    position: 'absolute',
                    right: '18px',
                    top: '50%',
                    width: '150px',
                    height: '150px',
                    marginTop: '-75px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 12px 20px rgba(23, 42, 81, 0.25))',
                  }}
                  src={asset('/img/icon3d-tasks.png')}
                  alt=""
                />
              </Link>
              <Link
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  height: '220px',
                  padding: '26px',
                  boxSizing: 'border-box',
                  borderRadius: '26px',
                  background: '#129ED9',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
                href="/fans"
              >
                <Star w={110} h={180} fill="rgba(255, 255, 255, 0.22)" style={{ position: 'absolute', right: '-30px', bottom: '-60px' }} />
                <Star w={14} h={14} fill="rgba(255, 255, 255, 0.22)" style={{ position: 'absolute', right: '46%', top: '30px' }} />
                <span
                  style={{
                    position: 'relative',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '34px',
                    fontWeight: '600',
                    lineHeight: '1',
                    textTransform: 'uppercase',
                    maxWidth: '60%',
                  }}
                >
                  Интерактив
                </span>
                <span style={{ position: 'relative', fontSize: '16px', color: '#E7F5FB', maxWidth: '55%' }}>Игры на стадионе</span>
                <span
                  style={{
                    position: 'relative',
                    marginTop: 'auto',
                    alignSelf: 'flex-start',
                    height: '40px',
                    padding: '0 16px',
                    borderRadius: '20px',
                    background: '#FFFFFF',
                    color: '#172A51',
                    fontSize: '15px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  Открыть
                  <Icon name="arrow-right-01" size={16} weight={2} color="#172A51" />
                </span>
                <img
                  style={{
                    position: 'absolute',
                    right: '18px',
                    top: '50%',
                    width: '150px',
                    height: '150px',
                    marginTop: '-75px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 12px 20px rgba(23, 42, 81, 0.25))',
                  }}
                  src={asset('/img/icon3d-interactive.png')}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </section>
        <section
          style={{ position: 'relative', margin: '0 24px 40px', borderRadius: '32px', overflow: 'hidden', background: '#FFFFFF', padding: '56px 0' }}
          aria-label="Опрос и прогноз"
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
                Голос болельщика
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
                href="/fans"
              >
                Все опросы и прогнозы
                <Icon name="arrow-right-01" size={18} weight={2} color="#0B7DB0" />
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'stretch', flexWrap: 'wrap' }}>
              <div
                style={{
                  flex: '1 1 520px',
                  padding: '32px',
                  borderRadius: '28px',
                  background: '#F2F6FA',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '18px',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      height: '30px',
                      padding: '0 14px',
                      borderRadius: '15px',
                      background: '#172A51',
                      color: '#FFFFFF',
                      fontSize: '13px',
                      fontWeight: '700',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    Игрок матча
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '15px', color: '#5B6B8C' }}>
                    <Icon name="clock-01" size={16} color="#5B6B8C" />
                    Голосование до 23:59
                  </span>
                </span>
                <span
                  style={{
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '34px',
                    fontWeight: '600',
                    lineHeight: '1.05',
                    textTransform: 'uppercase',
                    color: '#172A51',
                  }}
                >
                  Кто лучший игрок матча с «Елимаем»?
                </span>
                <span style={{ fontSize: '16px', color: '#5B6B8C' }}>Ордабасы 3 : 1 Елимай · 24 тур</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {v.poll.map((o: any, oIdx: number) => (
                    <Fragment key={oIdx}>
                      <button
                        style={{
                          position: 'relative',
                          overflow: 'hidden',
                          height: '64px',
                          padding: '0 18px',
                          borderRadius: '16px',
                          border: `1.5px solid ${o.border}`,
                          background: '#FFFFFF',
                          fontFamily: 'inherit',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '14px',
                          cursor: 'pointer',
                          color: '#172A51',
                        }}
                        type="button"
                        onClick={o.pick}
                        aria-pressed={o.pressed}
                      >
                        <span style={{ position: 'absolute', left: '0', top: '0', bottom: '0', width: o.bar, background: o.barBg }} aria-hidden="true" />
                        <span
                          style={{
                            position: 'relative',
                            fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                            fontSize: '26px',
                            fontWeight: '600',
                            color: '#0B7DB0',
                            minWidth: '34px',
                          }}
                        >
                          {o.num}
                        </span>
                        <span style={{ position: 'relative', flexGrow: '1', textAlign: 'left', fontSize: '18px', fontWeight: '700' }}>{o.name}</span>
                        <span style={{ position: 'relative', fontSize: '17px', fontWeight: '700', color: o.pctColor }}>{o.pct}</span>
                      </button>
                    </Fragment>
                  ))}
                </div>
                {v.voted && (
                  <>
                    <span
                      style={{
                        height: '52px',
                        padding: '0 18px',
                        borderRadius: '16px',
                        background: '#E8F5EE',
                        color: '#137040',
                        fontSize: '16px',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <Icon name="checkmark-circle-02" size={20} weight={2} color="#137040" />
                      Голос принят · +10 баллов · 1 284 голоса
                    </span>
                  </>
                )}
                {v.notVoted && (
                  <>
                    <span
                      style={{
                        height: '52px',
                        padding: '0 18px',
                        borderRadius: '16px',
                        background: '#FFFFFF',
                        color: '#5B6B8C',
                        fontSize: '16px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <Icon name="touch-interaction-01" size={20} color="#5B6B8C" />
                      Выберите игрока — за голос +10 баллов
                    </span>
                  </>
                )}
              </div>
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  flex: '1 1 460px',
                  padding: '32px',
                  borderRadius: '28px',
                  background: 'linear-gradient(160deg, #172A51 0%, #1B5A93 60%, #129ED9 100%)',
                  color: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '22px',
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
                    color: 'rgba(255, 255, 255, 0.07)',
                    textAlign: 'right',
                    whiteSpace: 'pre-line',
                  }}
                  aria-hidden="true"
                >
                  {'PRO\nGNOZ'}
                </span>
                <span style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#CFE3F2' }}>
                    Ваш прогноз · 25 тур
                  </span>
                  <span style={{ fontSize: '17px', color: '#E7F5FB' }}>Сб, 25 октября · 19:00 · приём до начала матча</span>
                </span>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '22px' }}>
                  <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '110px' }}>
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
                      <img style={{ width: '46px', height: '56px', objectFit: 'contain' }} src={asset('/img/crest.png')} alt="" />
                    </span>
                    <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '20px', fontWeight: '600', textTransform: 'uppercase' }}>
                      Ордабасы
                    </span>
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                    <button
                      style={{
                        width: '52px',
                        height: '40px',
                        borderRadius: '12px',
                        border: '0',
                        background: 'rgba(255, 255, 255, 0.12)',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                      }}
                      type="button"
                      aria-label="Больше"
                      onClick={v.hInc}
                    >
                      <Icon name="arrow-up-01" size={20} weight={2} color="#FFFFFF" />
                    </button>
                    <span
                      style={{
                        width: '88px',
                        height: '96px',
                        borderRadius: '20px',
                        background: '#FFFFFF',
                        color: '#172A51',
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '60px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {v.h}
                    </span>
                    <button
                      style={{
                        width: '52px',
                        height: '40px',
                        borderRadius: '12px',
                        border: '0',
                        background: 'rgba(255, 255, 255, 0.12)',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                      }}
                      type="button"
                      aria-label="Меньше"
                      onClick={v.hDec}
                    >
                      <Icon name="arrow-down-01" size={20} weight={2} color="#FFFFFF" />
                    </button>
                  </span>
                  <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '48px', fontWeight: '600', color: '#CFE3F2' }}>:</span>
                  <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                    <button
                      style={{
                        width: '52px',
                        height: '40px',
                        borderRadius: '12px',
                        border: '0',
                        background: 'rgba(255, 255, 255, 0.12)',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                      }}
                      type="button"
                      aria-label="Больше"
                      onClick={v.aInc}
                    >
                      <Icon name="arrow-up-01" size={20} weight={2} color="#FFFFFF" />
                    </button>
                    <span
                      style={{
                        width: '88px',
                        height: '96px',
                        borderRadius: '20px',
                        background: '#FFFFFF',
                        color: '#172A51',
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '60px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {v.a}
                    </span>
                    <button
                      style={{
                        width: '52px',
                        height: '40px',
                        borderRadius: '12px',
                        border: '0',
                        background: 'rgba(255, 255, 255, 0.12)',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                      }}
                      type="button"
                      aria-label="Меньше"
                      onClick={v.aDec}
                    >
                      <Icon name="arrow-down-01" size={20} weight={2} color="#FFFFFF" />
                    </button>
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '110px' }}>
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
                      <img style={{ width: '50px', height: '56px', objectFit: 'contain' }} src={asset('/img/club-kairat.webp')} alt="" />
                    </span>
                    <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '20px', fontWeight: '600', textTransform: 'uppercase' }}>
                      Кайрат
                    </span>
                  </span>
                </div>
                <span style={{ position: 'relative', display: 'flex', gap: '10px', justifyContent: 'center', fontSize: '14px', color: '#E7F5FB' }}>
                  <span
                    style={{
                      height: '32px',
                      padding: '0 12px',
                      borderRadius: '16px',
                      background: 'rgba(255, 255, 255, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    Точный счёт +50
                  </span>
                  <span
                    style={{
                      height: '32px',
                      padding: '0 12px',
                      borderRadius: '16px',
                      background: 'rgba(255, 255, 255, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    Исход +10
                  </span>
                </span>
                {v.saved && (
                  <>
                    <button
                      style={{
                        position: 'relative',
                        height: '56px',
                        borderRadius: '16px',
                        border: '1.5px solid rgba(255, 255, 255, 0.6)',
                        background: 'transparent',
                        color: '#FFFFFF',
                        fontFamily: 'inherit',
                        fontSize: '17px',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                      }}
                      type="button"
                      onClick={v.save}
                    >
                      <Icon name="tick-02" size={20} weight={2.2} color="#FFFFFF" />
                      Прогноз {v.h} : {v.a} принят
                    </button>
                  </>
                )}
                {v.notSaved && (
                  <>
                    <button
                      style={{
                        position: 'relative',
                        height: '56px',
                        borderRadius: '16px',
                        border: '0',
                        background: '#FFFFFF',
                        color: '#172A51',
                        fontFamily: 'inherit',
                        fontSize: '17px',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                      }}
                      type="button"
                      onClick={v.save}
                    >
                      Сохранить прогноз
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
        <section
          style={{ position: 'relative', margin: '0 24px 40px', borderRadius: '32px', overflow: 'hidden', background: '#E7F5FB', padding: '56px 0' }}
          aria-label="Задания и рейтинг"
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
                Задания и рейтинг
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
                href="/fans"
              >
                Все задания
                <Icon name="arrow-right-01" size={18} weight={2} color="#0B7DB0" />
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div style={{ flex: '1.4 1 560px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    padding: '26px',
                    borderRadius: '24px',
                    background: 'linear-gradient(140deg, #172A51 0%, #129ED9 100%)',
                    color: '#FFFFFF',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      right: '-4px',
                      top: '-12px',
                      fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                      fontSize: '110px',
                      fontWeight: '700',
                      lineHeight: '0.86',
                      color: 'rgba(255, 255, 255, 0.08)',
                    }}
                    aria-hidden="true"
                  >
                    5/7
                  </span>
                  <span style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <img style={{ width: '60px', height: '60px', objectFit: 'contain' }} src={asset('/img/icon3d-tasks.png')} alt="" />
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                      <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '30px', fontWeight: '600', lineHeight: '1' }}>
                        Серия 5 дней
                      </span>
                      <span style={{ fontSize: '15px', color: '#CFE3F2' }}>Ещё 2 дня — и +100 баллов за неделю</span>
                    </span>
                  </span>
                  <span style={{ position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                      <span
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          background: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon name="fire" size={20} weight={2} color="#E30512" />
                      </span>
                      <span style={{ fontSize: '13px', color: '#CFE3F2' }}>Пн</span>
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                      <span
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          background: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon name="fire" size={20} weight={2} color="#E30512" />
                      </span>
                      <span style={{ fontSize: '13px', color: '#CFE3F2' }}>Вт</span>
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                      <span
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          background: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon name="fire" size={20} weight={2} color="#E30512" />
                      </span>
                      <span style={{ fontSize: '13px', color: '#CFE3F2' }}>Ср</span>
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                      <span
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          background: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon name="fire" size={20} weight={2} color="#E30512" />
                      </span>
                      <span style={{ fontSize: '13px', color: '#CFE3F2' }}>Чт</span>
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                      <span
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          background: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon name="fire" size={20} weight={2} color="#E30512" />
                      </span>
                      <span style={{ fontSize: '13px', color: '#CFE3F2' }}>Пт</span>
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                      <span
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.14)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      />
                      <span style={{ fontSize: '13px', color: '#CFE3F2' }}>Сб</span>
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                      <span
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.14)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <img style={{ width: '24px', height: '24px' }} src={asset('/img/coin.webp')} alt="" />
                      </span>
                      <span style={{ fontSize: '13px', color: '#CFE3F2' }}>Вс</span>
                    </span>
                  </span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '16px 18px',
                    borderRadius: '20px',
                    background: '#FFFFFF',
                    opacity: '0.7',
                  }}
                >
                  <span
                    style={{
                      flexShrink: '0',
                      width: '52px',
                      height: '52px',
                      borderRadius: '16px',
                      background: '#EEF3F8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon name="smart-phone-01" size={24} weight={1.7} color="#8E9BB5" />
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', flexGrow: '1', minWidth: '0' }}>
                    <span style={{ fontSize: '18px', fontWeight: '700', color: '#172A51' }}>Зайти на сайт или в приложение</span>
                    <span style={{ fontSize: '14px', color: '#5B6B8C', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <img style={{ width: '18px', height: '18px' }} src={asset('/img/coin.webp')} alt="" />
                      +5 · ежедневно
                    </span>
                  </span>
                  <span
                    style={{
                      height: '40px',
                      padding: '0 14px',
                      borderRadius: '20px',
                      background: '#E8F5EE',
                      color: '#137040',
                      fontSize: '15px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <Icon name="tick-02" size={16} weight={2.4} color="#137040" />
                    Получено
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 18px', borderRadius: '20px', background: '#FFFFFF' }}>
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
                    <Icon name="news-01" size={24} weight={1.7} color="#129ED9" />
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', flexGrow: '1', minWidth: '0' }}>
                    <span style={{ fontSize: '18px', fontWeight: '700', color: '#172A51' }}>Прочитать новость</span>
                    <span style={{ fontSize: '14px', color: '#5B6B8C', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <img style={{ width: '18px', height: '18px' }} src={asset('/img/coin.webp')} alt="" />
                      +10 · 1 из 1
                    </span>
                  </span>
                  <Link
                    style={{
                      height: '40px',
                      padding: '0 16px',
                      borderRadius: '20px',
                      background: '#0B7DB0',
                      color: '#FFFFFF',
                      fontSize: '15px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      textDecoration: 'none',
                    }}
                    href="/fans"
                  >
                    Забрать
                  </Link>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 18px', borderRadius: '20px', background: '#FFFFFF' }}>
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
                    <Icon name="star" size={24} weight={1.7} color="#129ED9" />
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', flexGrow: '1', minWidth: '0' }}>
                    <span style={{ fontSize: '18px', fontWeight: '700', color: '#172A51' }}>Пройти викторину</span>
                    <span style={{ fontSize: '14px', color: '#5B6B8C', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <img style={{ width: '18px', height: '18px' }} src={asset('/img/coin.webp')} alt="" />
                      +20 · «Узнай игрока по фактам»
                    </span>
                  </span>
                  <Link
                    style={{
                      height: '40px',
                      padding: '0 16px',
                      borderRadius: '20px',
                      background: '#E7F5FB',
                      color: '#0B7DB0',
                      fontSize: '15px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      textDecoration: 'none',
                    }}
                    href="/fans"
                  >
                    Перейти
                  </Link>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 18px', borderRadius: '20px', background: '#FFFFFF' }}>
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
                    <Icon name="play" size={24} weight={1.7} color="#129ED9" />
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', flexGrow: '1', minWidth: '0' }}>
                    <span style={{ fontSize: '18px', fontWeight: '700', color: '#172A51' }}>Посмотреть 3 видео</span>
                    <span style={{ fontSize: '14px', color: '#5B6B8C', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <img style={{ width: '18px', height: '18px' }} src={asset('/img/coin.webp')} alt="" />
                      +30 · ORDA TV
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '6px' }}>
                      <span style={{ flexGrow: '1', height: '6px', borderRadius: '3px', background: '#E7F5FB', overflow: 'hidden' }}>
                        <span style={{ display: 'block', width: '66%', height: '6px', borderRadius: '3px', background: '#129ED9' }} />
                      </span>
                      <span style={{ fontSize: '13px', fontWeight: '700', color: '#0B7DB0' }}>2/3</span>
                    </span>
                  </span>
                  <Link
                    style={{
                      height: '40px',
                      padding: '0 16px',
                      borderRadius: '20px',
                      background: '#E7F5FB',
                      color: '#0B7DB0',
                      fontSize: '15px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      textDecoration: 'none',
                    }}
                    href="/fans"
                  >
                    Перейти
                  </Link>
                </div>
              </div>
              <div style={{ flex: '1 1 360px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div
                  style={{
                    padding: '24px',
                    borderRadius: '24px',
                    background: '#1F3562',
                    color: '#FFFFFF',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}
                >
                  <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#A9BCD6' }}>
                    Лучшие прогнозисты
                  </span>
                  <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '30px', fontWeight: '600', textTransform: 'uppercase' }}>
                    Сезон 2026
                  </span>
                  <span style={{ fontSize: '15px', color: '#CFE3F2' }}>128 место из 4 120 · 12 прогнозов · 4 точных</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px 16px', borderRadius: '16px', background: '#FFFFFF' }}>
                  <span style={{ width: '32px', fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '22px', fontWeight: '600', color: '#0B7DB0' }}>
                    1
                  </span>
                  <span
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: '#F2F6FA',
                      color: '#172A51',
                      fontSize: '14px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    АК
                  </span>
                  <span style={{ flexGrow: '1', fontSize: '17px', fontWeight: '600', color: '#172A51' }}>Арман К.</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '17px', fontWeight: '700', color: '#172A51' }}>
                    <img style={{ width: '20px', height: '20px' }} src={asset('/img/coin.webp')} alt="" />1 240
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px 16px', borderRadius: '16px', background: '#FFFFFF' }}>
                  <span style={{ width: '32px', fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '22px', fontWeight: '600', color: '#0B7DB0' }}>
                    2
                  </span>
                  <span
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: '#F2F6FA',
                      color: '#172A51',
                      fontSize: '14px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    ДМ
                  </span>
                  <span style={{ flexGrow: '1', fontSize: '17px', fontWeight: '600', color: '#172A51' }}>Динара М.</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '17px', fontWeight: '700', color: '#172A51' }}>
                    <img style={{ width: '20px', height: '20px' }} src={asset('/img/coin.webp')} alt="" />1 180
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px 16px', borderRadius: '16px', background: '#FFFFFF' }}>
                  <span style={{ width: '32px', fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '22px', fontWeight: '600', color: '#0B7DB0' }}>
                    3
                  </span>
                  <span
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: '#F2F6FA',
                      color: '#172A51',
                      fontSize: '14px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    ЕТ
                  </span>
                  <span style={{ flexGrow: '1', fontSize: '17px', fontWeight: '600', color: '#172A51' }}>Ержан Т.</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '17px', fontWeight: '700', color: '#172A51' }}>
                    <img style={{ width: '20px', height: '20px' }} src={asset('/img/coin.webp')} alt="" />1 110
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px 16px', borderRadius: '16px', background: '#E7F5FB' }}>
                  <span style={{ width: '32px', fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '22px', fontWeight: '600', color: '#5B6B8C' }}>
                    128
                  </span>
                  <span
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: '#172A51',
                      color: '#FFFFFF',
                      fontSize: '14px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    Вы
                  </span>
                  <span style={{ flexGrow: '1', fontSize: '17px', fontWeight: '700', color: '#172A51' }}>Вы</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '17px', fontWeight: '700', color: '#172A51' }}>
                    <img style={{ width: '20px', height: '20px' }} src={asset('/img/coin.webp')} alt="" />
                    260
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          style={{ position: 'relative', margin: '0 24px 40px', borderRadius: '32px', overflow: 'hidden', background: '#FFFFFF', padding: '56px 0' }}
          aria-label="Конкурсы"
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
                Конкурсы
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
                href="/fans"
              >
                Все конкурсы
                <Icon name="arrow-right-01" size={18} weight={2} color="#0B7DB0" />
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
              <div
                style={{
                  padding: '20px',
                  borderRadius: '24px',
                  background: '#FFFFFF',
                  boxShadow: '0 2px 12px rgba(23, 42, 81, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <span
                  style={{
                    height: '180px',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    background: 'linear-gradient(180deg, #172A51, #129ED9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img style={{ width: '130px', height: '130px', objectFit: 'contain' }} src={asset('/img/jersey.webp')} alt="" />
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '21px', fontWeight: '700', lineHeight: '1.2', color: '#172A51' }}>Выиграй форму с автографами</span>
                  <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Фото с матча · 186 участников · до 20 октября</span>
                </span>
                <span
                  style={{
                    padding: '10px 12px',
                    borderRadius: '12px',
                    background: '#E7F5FB',
                    color: '#0B7DB0',
                    fontSize: '14px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Icon name="calendar-03" size={16} weight={2} color="#0B7DB0" />
                  Новый конкурс · приём заявок открыт
                </span>
                <Link
                  style={{
                    marginTop: 'auto',
                    height: '52px',
                    borderRadius: '16px',
                    background: '#0B7DB0',
                    color: '#FFFFFF',
                    fontSize: '17px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                  }}
                  href="/fans"
                >
                  Участвовать
                </Link>
              </div>
              <div
                style={{
                  padding: '20px',
                  borderRadius: '24px',
                  background: '#FFFFFF',
                  boxShadow: '0 2px 12px rgba(23, 42, 81, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <span
                  style={{
                    height: '180px',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    background: '#EEF3F8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={asset('/img/photo-fans.webp')} alt="" />
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '21px', fontWeight: '700', lineHeight: '1.2', color: '#172A51' }}>На матч всей семьёй</span>
                  <span style={{ fontSize: '14px', color: '#5B6B8C' }}>4 билета · 342 участника · итоги 18 октября</span>
                </span>
                <span
                  style={{
                    padding: '10px 12px',
                    borderRadius: '12px',
                    background: '#E8F5EE',
                    color: '#137040',
                    fontSize: '14px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Icon name="checkmark-circle-02" size={16} weight={2} color="#137040" />
                  Ты участвуешь · заявка принята
                </span>
                <Link
                  style={{
                    marginTop: 'auto',
                    height: '52px',
                    borderRadius: '16px',
                    background: '#E7F5FB',
                    color: '#0B7DB0',
                    fontSize: '17px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                  }}
                  href="/fans"
                >
                  Моя заявка
                </Link>
              </div>
              <div
                style={{
                  padding: '20px',
                  borderRadius: '24px',
                  background: '#FFFFFF',
                  boxShadow: '0 2px 12px rgba(23, 42, 81, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <span
                  style={{
                    height: '180px',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    background: '#E7F5FB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img style={{ width: '130px', height: '130px', objectFit: 'contain' }} src={asset('/img/trophy.webp')} alt="" />
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '21px', fontWeight: '700', lineHeight: '1.2', color: '#172A51' }}>Лучший фанатский плакат</span>
                  <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Клубный шарф · 128 участников</span>
                </span>
                <span
                  style={{
                    padding: '10px 12px',
                    borderRadius: '12px',
                    background: '#EEF3F8',
                    color: '#5B6B8C',
                    fontSize: '14px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Icon name="champion" size={16} weight={2} color="#5B6B8C" />
                  Завершён · победители объявлены
                </span>
                <Link
                  style={{
                    marginTop: 'auto',
                    height: '52px',
                    borderRadius: '16px',
                    background: '#E7F5FB',
                    color: '#0B7DB0',
                    fontSize: '17px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                  }}
                  href="/fans"
                >
                  Посмотреть победителей
                </Link>
              </div>
              <div
                style={{
                  padding: '20px',
                  borderRadius: '24px',
                  background: '#FFFFFF',
                  boxShadow: '0 2px 12px rgba(23, 42, 81, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <span
                  style={{
                    height: '180px',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    background: '#E7F5FB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img style={{ width: '130px', height: '130px', objectFit: 'contain' }} src={asset('/img/icon3d-contest.png')} alt="" />
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '21px', fontWeight: '700', lineHeight: '1.2', color: '#172A51' }}>Встреча с любимым игроком</span>
                  <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Скоро · старт 25 октября</span>
                </span>
                <span
                  style={{
                    padding: '10px 12px',
                    borderRadius: '12px',
                    background: '#EEF3F8',
                    color: '#5B6B8C',
                    fontSize: '14px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Icon name="clock-01" size={16} weight={2} color="#5B6B8C" />
                  Старт 25 октября
                </span>
                <Link
                  style={{
                    marginTop: 'auto',
                    height: '52px',
                    borderRadius: '16px',
                    background: '#E7F5FB',
                    color: '#0B7DB0',
                    fontSize: '17px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                  }}
                  href="/fans"
                >
                  Напомнить
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
