'use client';

/* Сгенерировано из дизайн-макета ORDA (canvas). Разметка повторяет макет 1:1. */
import Link from 'next/link';
import { asset } from '@/lib/asset';
import { Icon } from '@/components/Icon';
import { Star } from '@/components/Star';
import { useDC } from '@/lib/dc';
import { vals, tick } from './HalftimeScore.vals';
import './HalftimeScore.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function HalftimeScoreView(props: {}) {
  const self = useDC(props, tick);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const v: any = vals(self);
  return (
    <>
      <div style={{ width: '100%', background: '#172A51', paddingBottom: '1px', fontFamily: "'Roboto Condensed', sans-serif", color: '#172A51' }}>
        <section style={{ position: 'relative', overflow: 'hidden', padding: '40px 0 44px' }} aria-label="Счёт перерыва">
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
              <span style={{ color: '#CFE3F2' }}>Счёт перерыва</span>
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
                  Счёт перерыва
                </h1>
                <p style={{ margin: '0', maxWidth: '600px', fontSize: '19px', lineHeight: '1.5', color: '#CFE3F2' }}>
                  Угадайте, каким будет счёт после первого тайма. Прогнозы принимаются до 30-й минуты.
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
          aria-label="Прогноз"
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
              gap: '32px',
            }}
          >
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                gap: '28px',
                flexWrap: 'wrap',
                padding: '24px 28px',
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
                LIVE
              </span>
              <span style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img style={{ width: '44px', height: '54px', objectFit: 'contain' }} src={asset('/img/crest.png')} alt="" />
                </span>
                <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '48px', fontWeight: '600', lineHeight: '1' }}>0 : 0</span>
                <span
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img style={{ width: '48px', height: '54px', objectFit: 'contain' }} src={asset('/img/club-kairat.webp')} alt="" />
                </span>
              </span>
              <span style={{ position: 'relative', flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
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
                  Идёт сейчас · 18′
                </span>
                <span
                  style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '30px', fontWeight: '600', lineHeight: '1', textTransform: 'uppercase' }}
                >
                  Ордабасы — Кайрат
                </span>
                <span style={{ fontSize: '16px', color: '#E7F5FB' }}>Сб, 25 октября · Премьер-Лига, 25 тур</span>
              </span>
              <span style={{ position: 'relative', flex: '0 1 300px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px', color: '#E7F5FB' }}>
                  <span>Приём прогнозов до 30′</span>
                  <b style={{ color: '#FFFFFF' }}>12 мин</b>
                </span>
                <span style={{ height: '8px', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.2)', overflow: 'hidden' }}>
                  <span style={{ display: 'block', width: '60%', height: '8px', borderRadius: '4px', background: '#FFFFFF' }} />
                </span>
              </span>
            </div>
            <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div
                style={{
                  flex: '2 1 600px',
                  minWidth: '0',
                  padding: '32px',
                  borderRadius: '26px',
                  background: '#F2F6FA',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '22px',
                }}
              >
                <h3
                  style={{
                    margin: '0',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '34px',
                    fontWeight: '600',
                    lineHeight: '1',
                    textTransform: 'uppercase',
                    color: '#172A51',
                  }}
                >
                  Счёт к 45-й минуте
                </h3>
                {v.editing && (
                  <>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                      <div style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
                        <span
                          style={{
                            width: '84px',
                            height: '84px',
                            borderRadius: '50%',
                            background: '#FFFFFF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <img style={{ width: '52px', height: '62px', objectFit: 'contain' }} src={asset('/img/crest.png')} alt="" />
                        </span>
                        <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '22px', fontWeight: '600' }}>ORDA</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                          <button
                            style={{
                              width: '52px',
                              height: '52px',
                              borderRadius: '50%',
                              border: '0',
                              background: '#FFFFFF',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              padding: '0',
                            }}
                            type="button"
                            aria-label="ORDA: меньше"
                            onClick={v.oDec}
                          >
                            <Icon name="minus-sign" size={22} weight={2.2} color="#0B7DB0" />
                          </button>
                          <span
                            style={{
                              width: '80px',
                              textAlign: 'center',
                              fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                              fontSize: '96px',
                              fontWeight: '600',
                              lineHeight: '1',
                            }}
                            aria-live="polite"
                          >
                            {v.o}
                          </span>
                          <button
                            style={{
                              width: '52px',
                              height: '52px',
                              borderRadius: '50%',
                              border: '0',
                              background: '#FFFFFF',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              padding: '0',
                            }}
                            type="button"
                            aria-label="ORDA: больше"
                            onClick={v.oInc}
                          >
                            <Icon name="add-01" size={22} weight={2.2} color="#0B7DB0" />
                          </button>
                        </div>
                      </div>
                      <span
                        style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '64px', fontWeight: '600', marginTop: '150px', color: '#B9CBE0' }}
                      >
                        :
                      </span>
                      <div style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
                        <span
                          style={{
                            width: '84px',
                            height: '84px',
                            borderRadius: '50%',
                            background: '#FFFFFF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <img style={{ width: '52px', height: '62px', objectFit: 'contain' }} src={asset('/img/club-kairat.webp')} alt="" />
                        </span>
                        <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '22px', fontWeight: '600' }}>КАЙРАТ</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                          <button
                            style={{
                              width: '52px',
                              height: '52px',
                              borderRadius: '50%',
                              border: '0',
                              background: '#FFFFFF',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              padding: '0',
                            }}
                            type="button"
                            aria-label="КАЙРАТ: меньше"
                            onClick={v.kDec}
                          >
                            <Icon name="minus-sign" size={22} weight={2.2} color="#0B7DB0" />
                          </button>
                          <span
                            style={{
                              width: '80px',
                              textAlign: 'center',
                              fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                              fontSize: '96px',
                              fontWeight: '600',
                              lineHeight: '1',
                            }}
                            aria-live="polite"
                          >
                            {v.k}
                          </span>
                          <button
                            style={{
                              width: '52px',
                              height: '52px',
                              borderRadius: '50%',
                              border: '0',
                              background: '#FFFFFF',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              padding: '0',
                            }}
                            type="button"
                            aria-label="КАЙРАТ: больше"
                            onClick={v.kInc}
                          >
                            <Icon name="add-01" size={22} weight={2.2} color="#0B7DB0" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5B6B8C' }}>
                      Популярные прогнозы
                    </span>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      <button
                        style={{
                          flex: '1 1 0',
                          height: '64px',
                          borderRadius: '16px',
                          border: `1.5px solid ${v.q0.border}`,
                          background: v.q0.bg,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '2px',
                          fontFamily: 'inherit',
                          color: '#172A51',
                          cursor: 'pointer',
                          padding: '0',
                        }}
                        type="button"
                        onClick={v.q0.pick}
                        aria-pressed={v.q0.on}
                      >
                        <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '24px', fontWeight: '600', lineHeight: '1' }}>1:0</span>
                        <span style={{ fontSize: '13px', color: '#5B6B8C' }}>34% болельщиков</span>
                      </button>
                      <button
                        style={{
                          flex: '1 1 0',
                          height: '64px',
                          borderRadius: '16px',
                          border: `1.5px solid ${v.q1.border}`,
                          background: v.q1.bg,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '2px',
                          fontFamily: 'inherit',
                          color: '#172A51',
                          cursor: 'pointer',
                          padding: '0',
                        }}
                        type="button"
                        onClick={v.q1.pick}
                        aria-pressed={v.q1.on}
                      >
                        <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '24px', fontWeight: '600', lineHeight: '1' }}>0:0</span>
                        <span style={{ fontSize: '13px', color: '#5B6B8C' }}>22% болельщиков</span>
                      </button>
                      <button
                        style={{
                          flex: '1 1 0',
                          height: '64px',
                          borderRadius: '16px',
                          border: `1.5px solid ${v.q2.border}`,
                          background: v.q2.bg,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '2px',
                          fontFamily: 'inherit',
                          color: '#172A51',
                          cursor: 'pointer',
                          padding: '0',
                        }}
                        type="button"
                        onClick={v.q2.pick}
                        aria-pressed={v.q2.on}
                      >
                        <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '24px', fontWeight: '600', lineHeight: '1' }}>2:0</span>
                        <span style={{ fontSize: '13px', color: '#5B6B8C' }}>15% болельщиков</span>
                      </button>
                      <button
                        style={{
                          flex: '1 1 0',
                          height: '64px',
                          borderRadius: '16px',
                          border: `1.5px solid ${v.q3.border}`,
                          background: v.q3.bg,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '2px',
                          fontFamily: 'inherit',
                          color: '#172A51',
                          cursor: 'pointer',
                          padding: '0',
                        }}
                        type="button"
                        onClick={v.q3.pick}
                        aria-pressed={v.q3.on}
                      >
                        <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '24px', fontWeight: '600', lineHeight: '1' }}>1:1</span>
                        <span style={{ fontSize: '13px', color: '#5B6B8C' }}>12% болельщиков</span>
                      </button>
                    </div>
                    <button
                      style={{
                        height: '60px',
                        border: '0',
                        borderRadius: '18px',
                        background: '#0B7DB0',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        fontFamily: 'inherit',
                        fontSize: '19px',
                        fontWeight: '700',
                        cursor: 'pointer',
                      }}
                      type="button"
                      onClick={v.save}
                    >
                      <Icon name="football" size={22} weight={1.8} color="#FFFFFF" />
                      Сделать прогноз {v.o} : {v.k}
                    </button>
                  </>
                )}
                {v.saved && (
                  <>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', textAlign: 'center', padding: '24px 0' }}>
                      <span
                        style={{
                          width: '84px',
                          height: '84px',
                          borderRadius: '50%',
                          background: '#E8F5EE',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          animation: 'qd-pop .6s cubic-bezier(.2,1.3,.4,1) both',
                        }}
                      >
                        <Icon name="tick-02" size={42} weight={2.6} color="#137040" />
                      </span>
                      <h3
                        style={{
                          margin: '0',
                          fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                          fontSize: '36px',
                          fontWeight: '600',
                          lineHeight: '1',
                          textTransform: 'uppercase',
                          color: '#172A51',
                        }}
                      >
                        Прогноз принят
                      </h3>
                      <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '110px', fontWeight: '600', lineHeight: '1' }}>
                        {v.o} : {v.k}
                      </span>
                      <span style={{ maxWidth: '440px', fontSize: '17px', lineHeight: '1.5', color: '#5B6B8C' }}>
                        Результат пришлём в перерыве — в уведомлении и на этой странице. Изменить можно до 30-й минуты.
                      </span>
                      <button
                        style={{
                          height: '52px',
                          padding: '0 28px',
                          border: '0',
                          borderRadius: '16px',
                          background: '#FFFFFF',
                          color: '#0B7DB0',
                          fontFamily: 'inherit',
                          fontSize: '17px',
                          fontWeight: '700',
                          cursor: 'pointer',
                        }}
                        type="button"
                        onClick={v.edit}
                      >
                        Изменить прогноз
                      </button>
                    </div>
                  </>
                )}
              </div>
              <aside style={{ flex: '1 1 360px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div
                  style={{
                    padding: '28px',
                    borderRadius: '26px',
                    background: '#172A51',
                    color: '#FFFFFF',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '18px',
                  }}
                >
                  <h3
                    style={{
                      margin: '0',
                      fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                      fontSize: '26px',
                      fontWeight: '600',
                      lineHeight: '1',
                      textTransform: 'uppercase',
                      color: '#FFFFFF',
                    }}
                  >
                    Что думают трибуны
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <span style={{ display: 'flex', justifyContent: 'space-between', fontSize: '17px', fontWeight: '700' }}>
                      <span>ORDA ведёт</span>
                      <span>58%</span>
                    </span>
                    <span style={{ height: '12px', borderRadius: '6px', background: 'rgba(255, 255, 255, 0.12)', overflow: 'hidden' }}>
                      <span style={{ display: 'block', width: '58%', height: '12px', borderRadius: '6px', background: '#129ED9' }} />
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <span style={{ display: 'flex', justifyContent: 'space-between', fontSize: '17px', fontWeight: '500' }}>
                      <span>Ничья</span>
                      <span>30%</span>
                    </span>
                    <span style={{ height: '12px', borderRadius: '6px', background: 'rgba(255, 255, 255, 0.12)', overflow: 'hidden' }}>
                      <span style={{ display: 'block', width: '30%', height: '12px', borderRadius: '6px', background: '#7CC6E9' }} />
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <span style={{ display: 'flex', justifyContent: 'space-between', fontSize: '17px', fontWeight: '500' }}>
                      <span>Кайрат ведёт</span>
                      <span>12%</span>
                    </span>
                    <span style={{ height: '12px', borderRadius: '6px', background: 'rgba(255, 255, 255, 0.12)', overflow: 'hidden' }}>
                      <span style={{ display: 'block', width: '12%', height: '12px', borderRadius: '6px', background: '#5B6B8C' }} />
                    </span>
                  </div>
                  <span style={{ fontSize: '14px', color: '#A9BCD6' }}>3 860 прогнозов от болельщиков на стадионе</span>
                </div>
                <div style={{ padding: '24px 28px', borderRadius: '26px', background: '#FFF6DB', display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <img style={{ width: '48px', height: '48px', objectFit: 'contain' }} src={asset('/img/coin.webp')} alt="" />
                  <span style={{ fontSize: '17px', lineHeight: '1.5' }}>
                    <b>+20 баллов</b> за точный счёт, <b>+5</b> — если угадаете, кто ведёт после первого тайма
                  </span>
                </div>
                <div style={{ padding: '12px 28px', borderRadius: '26px', background: '#1F3562', color: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
                  <span
                    style={{
                      padding: '14px 0 4px',
                      fontSize: '13px',
                      fontWeight: '700',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#A9BCD6',
                    }}
                  >
                    Ваши прошлые прогнозы
                  </span>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                      padding: '14px 0',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
                    }}
                  >
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span style={{ fontSize: '16px', fontWeight: '700' }}>ORDA — Елимай</span>
                      <span style={{ fontSize: '14px', color: '#A9BCD6' }}>Прогноз 1:0 · счёт 2:0</span>
                    </span>
                    <span
                      style={{
                        height: '28px',
                        padding: '0 12px',
                        borderRadius: '14px',
                        background: '#1B5A93',
                        color: '#FFFFFF',
                        fontSize: '13px',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      +5
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                      padding: '14px 0',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
                    }}
                  >
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span style={{ fontSize: '16px', fontWeight: '700' }}>ORDA — Жетысу</span>
                      <span style={{ fontSize: '14px', color: '#A9BCD6' }}>Прогноз 1:0 · счёт 1:0</span>
                    </span>
                    <span
                      style={{
                        height: '28px',
                        padding: '0 12px',
                        borderRadius: '14px',
                        background: '#129ED9',
                        color: '#FFFFFF',
                        fontSize: '13px',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      +20
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '14px 0' }}>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span style={{ fontSize: '16px', fontWeight: '700' }}>ORDA — Тобыл</span>
                      <span style={{ fontSize: '14px', color: '#A9BCD6' }}>Прогноз 0:1 · счёт 0:0</span>
                    </span>
                    <span
                      style={{
                        height: '28px',
                        padding: '0 12px',
                        borderRadius: '14px',
                        background: 'rgba(255, 255, 255, 0.14)',
                        color: '#FFFFFF',
                        fontSize: '13px',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      0
                    </span>
                  </div>
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
          aria-label="Как играть"
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
                Как играть
              </h2>
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
                <span style={{ fontSize: '16px', lineHeight: '1.5', color: '#3E4F70' }}>Играют болельщики, отметившиеся на стадионе по билету</span>
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
                  <Icon name="clock-01" size={22} weight={1.7} color="#129ED9" />
                </span>
                <span style={{ fontSize: '16px', lineHeight: '1.5', color: '#3E4F70' }}>Прогнозы принимаются до 30-й минуты первого тайма</span>
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
                  <Icon name="star" size={22} weight={1.7} color="#129ED9" />
                </span>
                <span style={{ fontSize: '16px', lineHeight: '1.5', color: '#3E4F70' }}>Баллы начислим сразу после свистка на перерыв</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
