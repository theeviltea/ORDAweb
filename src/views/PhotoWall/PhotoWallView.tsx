'use client';

/* Сгенерировано из дизайн-макета ORDA (canvas). Разметка повторяет макет 1:1. */
import Link from 'next/link';
import { asset } from '@/lib/asset';
import { Icon } from '@/components/Icon';
import { Star } from '@/components/Star';
import { useDC } from '@/lib/dc';
import { vals, tick } from './PhotoWall.vals';
import './PhotoWall.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function PhotoWallView(props: {}) {
  const self = useDC(props, tick);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const v: any = vals(self);
  return (
    <>
      <div style={{ width: '100%', background: '#172A51', paddingBottom: '1px', fontFamily: "'Roboto Condensed', sans-serif", color: '#172A51' }}>
        <section style={{ position: 'relative', overflow: 'hidden', padding: '40px 0 44px' }} aria-label="Фото на табло">
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
              <span style={{ color: '#CFE3F2' }}>Фото на табло</span>
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
                  Фото на табло
                </h1>
                <p style={{ margin: '0', maxWidth: '600px', fontSize: '19px', lineHeight: '1.5', color: '#CFE3F2' }}>
                  Лучшие селфи с трибун показываем на большом экране в перерыве и после голов. Модерация — 2–3 минуты.
                </p>
              </div>
              <span style={{ display: 'flex', gap: '10px' }}>
                <span
                  style={{
                    height: '44px',
                    padding: '0 18px',
                    borderRadius: '22px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Icon name="tv-01" size={18} weight={1.8} color="#7CC6E9" />
                  Показано 18
                </span>
                <span
                  style={{
                    height: '44px',
                    padding: '0 18px',
                    borderRadius: '22px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Icon name="image-01" size={18} weight={1.8} color="#7CC6E9" />В очереди 42
                </span>
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
            background: '#FFFFFF',
            padding: '56px 0',
          }}
          aria-label="Отправка фото"
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
                <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '48px', fontWeight: '600', lineHeight: '1' }}>1 : 0</span>
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
                  Идёт сейчас · 32′
                </span>
                <span
                  style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '30px', fontWeight: '600', lineHeight: '1', textTransform: 'uppercase' }}
                >
                  Ордабасы — Кайрат
                </span>
                <span style={{ fontSize: '16px', color: '#E7F5FB' }}>Сб, 25 октября · Премьер-Лига, 25 тур</span>
              </span>
              <span
                style={{
                  position: 'relative',
                  height: '44px',
                  padding: '0 16px',
                  borderRadius: '22px',
                  background: 'rgba(255, 255, 255, 0.16)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '15px',
                  fontWeight: '700',
                }}
              >
                <Icon name="checkmark-circle-02" size={20} weight={1.8} color="#FFFFFF" />
                Вы на стадионе · Юг, ряд 4, место 12
              </span>
            </div>
            <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 520px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {v.empty && (
                  <>
                    <div
                      style={{
                        height: '520px',
                        borderRadius: '22px',
                        border: '2px dashed #B9CBE0',
                        background: '#FFFFFF',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '16px',
                        textAlign: 'center',
                        padding: '0 40px',
                      }}
                    >
                      <span
                        style={{
                          width: '96px',
                          height: '96px',
                          borderRadius: '30px',
                          background: '#E7F5FB',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon name="image-upload" size={46} weight={1.6} color="#129ED9" />
                      </span>
                      <span style={{ fontSize: '22px', fontWeight: '700' }}>Перетащите фото сюда</span>
                      <span style={{ maxWidth: '380px', fontSize: '16px', lineHeight: '1.5', color: '#5B6B8C' }}>
                        JPG или PNG до 10 МБ. Вертикальное фото, лицо крупно, видно шарф или форму
                      </span>
                      <button
                        style={{
                          height: '54px',
                          padding: '0 28px',
                          border: '0',
                          borderRadius: '16px',
                          background: '#0B7DB0',
                          color: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontFamily: 'inherit',
                          fontSize: '17px',
                          fontWeight: '700',
                          cursor: 'pointer',
                        }}
                        type="button"
                        onClick={v.shoot}
                      >
                        <Icon name="image-01" size={20} weight={1.8} color="#FFFFFF" />
                        Выбрать файл
                      </button>
                    </div>
                  </>
                )}
                {v.picked && (
                  <>
                    <div style={{ position: 'relative', height: '520px', borderRadius: '22px', overflow: 'hidden', background: '#DCE3EE' }}>
                      <img
                        style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: '88% 40%' }}
                        src={asset('/img/photo-fans.webp')}
                        alt="Ваше фото"
                      />
                      {v.frameBlue && (
                        <>
                          <div style={{ position: 'absolute', inset: '0', border: '8px solid #129ED9', borderRadius: '22px' }} aria-hidden="true" />
                          <div
                            style={{
                              position: 'absolute',
                              left: '0',
                              right: '0',
                              bottom: '0',
                              padding: '60px 24px 20px',
                              background: 'linear-gradient(180deg, rgba(23, 42, 81, 0) 0%, rgba(23, 42, 81, 0.92) 70%)',
                              color: '#FFFFFF',
                              display: 'flex',
                              alignItems: 'flex-end',
                              justifyContent: 'space-between',
                            }}
                          >
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                              <span
                                style={{
                                  fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                                  fontSize: '44px',
                                  fontWeight: '600',
                                  lineHeight: '1',
                                  letterSpacing: '0.04em',
                                }}
                              >
                                ORDA
                              </span>
                              <span style={{ fontSize: '16px', color: '#CFE3F2' }}>Юг · фан · ряд 4</span>
                            </span>
                            <img style={{ width: '48px', height: '58px', objectFit: 'contain' }} src={asset('/img/crest.png')} alt="" />
                          </div>
                          <Star w={34} h={34} fill="#FFFFFF" style={{ position: 'absolute', right: '26px', top: '26px' }} />
                        </>
                      )}
                      {v.frameMatch && (
                        <>
                          <div style={{ position: 'absolute', inset: '0', border: '8px solid #FFFFFF', borderRadius: '22px' }} aria-hidden="true" />
                          <span
                            style={{
                              position: 'absolute',
                              left: '24px',
                              top: '24px',
                              height: '40px',
                              padding: '0 16px',
                              borderRadius: '20px',
                              background: '#E30512',
                              color: '#FFFFFF',
                              fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                              fontSize: '19px',
                              fontWeight: '600',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            ORDA 1 : 0 КАЙРАТ
                          </span>
                          <span
                            style={{
                              position: 'absolute',
                              left: '24px',
                              bottom: '24px',
                              height: '36px',
                              padding: '0 14px',
                              borderRadius: '18px',
                              background: '#FFFFFF',
                              color: '#172A51',
                              fontSize: '15px',
                              fontWeight: '700',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            Матч-день · 25.10
                          </span>
                        </>
                      )}
                    </div>
                  </>
                )}
              </div>
              <aside
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
                {v.notSent && (
                  <>
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
                      Ваше фото
                    </h3>
                  </>
                )}
                {v.picked && (
                  <>
                    <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5B6B8C' }}>Рамка</span>
                    <div style={{ display: 'flex', gap: '10px' }} role="group" aria-label="Рамка">
                      <button
                        style={{
                          flex: '1 1 0',
                          height: '46px',
                          borderRadius: '14px',
                          border: `1.5px solid ${v.f0.border}`,
                          background: v.f0.bg,
                          color: v.f0.fg,
                          fontFamily: 'inherit',
                          fontSize: '16px',
                          fontWeight: '700',
                          cursor: 'pointer',
                        }}
                        type="button"
                        aria-pressed={v.f0.on}
                        onClick={v.f0.pick}
                      >
                        Синяя
                      </button>
                      <button
                        style={{
                          flex: '1 1 0',
                          height: '46px',
                          borderRadius: '14px',
                          border: `1.5px solid ${v.f1.border}`,
                          background: v.f1.bg,
                          color: v.f1.fg,
                          fontFamily: 'inherit',
                          fontSize: '16px',
                          fontWeight: '700',
                          cursor: 'pointer',
                        }}
                        type="button"
                        aria-pressed={v.f1.on}
                        onClick={v.f1.pick}
                      >
                        Матч-день
                      </button>
                      <button
                        style={{
                          flex: '1 1 0',
                          height: '46px',
                          borderRadius: '14px',
                          border: `1.5px solid ${v.f2.border}`,
                          background: v.f2.bg,
                          color: v.f2.fg,
                          fontFamily: 'inherit',
                          fontSize: '16px',
                          fontWeight: '700',
                          cursor: 'pointer',
                        }}
                        type="button"
                        aria-pressed={v.f2.on}
                        onClick={v.f2.pick}
                      >
                        Без рамки
                      </button>
                    </div>
                    <label style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5B6B8C' }}>
                        Подпись · необязательно
                      </span>
                      <input
                        style={{
                          height: '52px',
                          padding: '0 16px',
                          borderRadius: '14px',
                          border: '1.5px solid #DCE3EE',
                          background: '#FFFFFF',
                          fontFamily: 'inherit',
                          fontSize: '17px',
                          color: '#172A51',
                          boxSizing: 'border-box',
                        }}
                        type="text"
                        maxLength={40}
                        placeholder="Привет из сектора Юг!"
                      />
                    </label>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <button
                        style={{
                          flexShrink: '0',
                          width: '26px',
                          height: '26px',
                          padding: '0',
                          boxSizing: 'border-box',
                          borderRadius: '8px',
                          border: `2px solid ${v.boxBorder}`,
                          background: v.boxBg,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                        }}
                        type="button"
                        role="checkbox"
                        aria-checked={v.agreeStr}
                        aria-label="Согласие на показ фото"
                        onClick={v.toggle}
                      >
                        {v.agree && (
                          <>
                            <Icon name="tick-02" size={15} weight={2.8} color="#FFFFFF" />
                          </>
                        )}
                      </button>
                      <span style={{ fontSize: '16px', lineHeight: '1.5', color: '#5B6B8C' }}>
                        Согласен(на), что фото покажут на табло стадиона и в соцсетях клуба
                      </span>
                    </div>
                    <button
                      style={{
                        height: '56px',
                        border: '0',
                        borderRadius: '16px',
                        background: v.sendBg,
                        color: '#FFFFFF',
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
                      onClick={v.send}
                      aria-disabled={v.locked}
                    >
                      <Icon name="tv-01" size={20} weight={1.8} color="#FFFFFF" />
                      Отправить на табло
                    </button>
                    <button
                      style={{
                        height: '44px',
                        border: '0',
                        background: 'transparent',
                        color: '#0B7DB0',
                        fontFamily: 'inherit',
                        fontSize: '16px',
                        fontWeight: '700',
                        cursor: 'pointer',
                      }}
                      type="button"
                      onClick={v.reset}
                    >
                      Выбрать другое фото
                    </button>
                  </>
                )}
                {v.empty && (
                  <>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                        <span
                          style={{
                            flexShrink: '0',
                            width: '36px',
                            height: '36px',
                            borderRadius: '12px',
                            background: '#FFFFFF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Icon name="user" size={18} weight={1.7} color="#129ED9" />
                        </span>
                        <span style={{ fontSize: '16px', lineHeight: '1.5', color: '#3E4F70' }}>Лицо хорошо видно, можно с друзьями</span>
                      </div>
                      <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                        <span
                          style={{
                            flexShrink: '0',
                            width: '36px',
                            height: '36px',
                            borderRadius: '12px',
                            background: '#FFFFFF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Icon name="shield-01" size={18} weight={1.7} color="#129ED9" />
                        </span>
                        <span style={{ fontSize: '16px', lineHeight: '1.5', color: '#3E4F70' }}>Без рекламы, политики и оскорблений</span>
                      </div>
                      <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                        <span
                          style={{
                            flexShrink: '0',
                            width: '36px',
                            height: '36px',
                            borderRadius: '12px',
                            background: '#FFFFFF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Icon name="clock-01" size={18} weight={1.7} color="#129ED9" />
                        </span>
                        <span style={{ fontSize: '16px', lineHeight: '1.5', color: '#3E4F70' }}>Одно фото раз в 10 минут</span>
                      </div>
                      <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                        <span
                          style={{
                            flexShrink: '0',
                            width: '36px',
                            height: '36px',
                            borderRadius: '12px',
                            background: '#FFFFFF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Icon name="star" size={18} weight={1.7} color="#129ED9" />
                        </span>
                        <span style={{ fontSize: '16px', lineHeight: '1.5', color: '#3E4F70' }}>Покажут на табло — +30 баллов</span>
                      </div>
                    </div>
                  </>
                )}
                {v.sent && (
                  <>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                      <span
                        style={{
                          flexShrink: '0',
                          width: '88px',
                          height: '110px',
                          borderRadius: '16px',
                          overflow: 'hidden',
                          border: '3px solid #129ED9',
                          boxSizing: 'border-box',
                        }}
                      >
                        <img
                          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '88% 40%' }}
                          src={asset('/img/photo-fans.webp')}
                          alt="Ваше фото"
                        />
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
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
                          Фото в очереди!
                        </h3>
                        <span style={{ fontSize: '16px', lineHeight: '1.5', color: '#5B6B8C' }}>Смотрите на табло над Северной трибуной</span>
                      </span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <div style={{ position: 'relative', display: 'flex', gap: '16px', paddingBottom: '22px' }}>
                        <span
                          style={{ position: 'absolute', left: '19px', top: '44px', bottom: '-4px', width: '2px', background: '#129ED9' }}
                          aria-hidden="true"
                        />
                        <span
                          style={{
                            flexShrink: '0',
                            width: '40px',
                            height: '40px',
                            boxSizing: 'border-box',
                            borderRadius: '50%',
                            background: '#129ED9',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Icon name="tick-02" size={20} weight={2.2} color="#FFFFFF" />
                        </span>
                        <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', paddingTop: '8px' }}>
                          <span style={{ fontSize: '18px', fontWeight: '700', color: '#172A51' }}>Отправлено</span>
                          <span style={{ fontSize: '15px', color: '#5B6B8C' }}>19:42 · фото получено</span>
                        </span>
                      </div>
                      <div style={{ position: 'relative', display: 'flex', gap: '16px', paddingBottom: '22px' }}>
                        <span
                          style={{ position: 'absolute', left: '19px', top: '44px', bottom: '-4px', width: '2px', background: '#129ED9' }}
                          aria-hidden="true"
                        />
                        <span
                          style={{
                            flexShrink: '0',
                            width: '40px',
                            height: '40px',
                            boxSizing: 'border-box',
                            borderRadius: '50%',
                            background: '#129ED9',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Icon name="tick-02" size={20} weight={2.2} color="#FFFFFF" />
                        </span>
                        <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', paddingTop: '8px' }}>
                          <span style={{ fontSize: '18px', fontWeight: '700', color: '#172A51' }}>Модерация пройдена</span>
                          <span style={{ fontSize: '15px', color: '#5B6B8C' }}>Фото одобрено редактором</span>
                        </span>
                      </div>
                      <div style={{ position: 'relative', display: 'flex', gap: '16px', paddingBottom: '22px' }}>
                        <span
                          style={{ position: 'absolute', left: '19px', top: '44px', bottom: '-4px', width: '2px', background: '#DCE3EE' }}
                          aria-hidden="true"
                        />
                        <span
                          style={{
                            flexShrink: '0',
                            width: '40px',
                            height: '40px',
                            boxSizing: 'border-box',
                            borderRadius: '50%',
                            background: '#FFFFFF',
                            border: '2px solid #129ED9',
                            animation: 'g-pulse 1.6s ease-out infinite',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Icon name="tv-01" size={20} weight={2.2} color="#129ED9" />
                        </span>
                        <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', paddingTop: '8px' }}>
                          <span style={{ fontSize: '18px', fontWeight: '700', color: '#172A51' }}>В очереди на табло</span>
                          <span style={{ fontSize: '15px', color: '#5B6B8C' }}>Перед вами 4 фото · покажем примерно в 34′</span>
                        </span>
                      </div>
                      <div style={{ position: 'relative', display: 'flex', gap: '16px', paddingBottom: '22px' }}>
                        <span
                          style={{
                            flexShrink: '0',
                            width: '40px',
                            height: '40px',
                            boxSizing: 'border-box',
                            borderRadius: '50%',
                            background: '#E3EAF3',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Icon name="star" size={20} weight={2.2} color="#8E9BB5" />
                        </span>
                        <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', paddingTop: '8px' }}>
                          <span style={{ fontSize: '18px', fontWeight: '700', color: '#8E9BB5' }}>Показано на табло</span>
                          <span style={{ fontSize: '15px', color: '#5B6B8C' }}>+30 баллов сразу после показа</span>
                        </span>
                      </div>
                    </div>
                    <button
                      style={{
                        height: '52px',
                        border: '0',
                        borderRadius: '16px',
                        background: '#FFFFFF',
                        color: '#0B7DB0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        fontFamily: 'inherit',
                        fontSize: '17px',
                        fontWeight: '700',
                        cursor: 'pointer',
                      }}
                      type="button"
                      onClick={v.reset}
                    >
                      <Icon name="camera-01" size={20} weight={1.8} color="#0B7DB0" />
                      Следующее фото через 08:12
                    </button>
                  </>
                )}
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
          aria-label="Уже на табло"
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
                Уже на табло
              </h2>
              <span style={{ fontSize: '16px', color: '#5B6B8C' }}>Обновляется в реальном времени</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px' }}>
              <span style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: '20px', overflow: 'hidden', background: '#DCE3EE' }}>
                <img
                  style={{
                    position: 'absolute',
                    inset: '0',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: '70% 50%',
                    transform: 'scale(1.4)',
                    transformOrigin: '30% 30%',
                  }}
                  src={asset('/img/photo-fans.webp')}
                  alt=""
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '12px',
                    bottom: '12px',
                    height: '28px',
                    padding: '0 12px',
                    borderRadius: '14px',
                    background: 'rgba(23, 42, 81, 0.78)',
                    color: '#FFFFFF',
                    fontSize: '13px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Север
                </span>
                <span
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '12px',
                    height: '28px',
                    padding: '0 12px',
                    borderRadius: '14px',
                    background: '#E30512',
                    color: '#FFFFFF',
                    fontSize: '13px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  На экране
                </span>
              </span>
              <span style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: '20px', overflow: 'hidden', background: '#DCE3EE' }}>
                <img
                  style={{
                    position: 'absolute',
                    inset: '0',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: '8% 50%',
                    transform: 'scale(1.75)',
                    transformOrigin: '70% 60%',
                  }}
                  src={asset('/img/photo-fans.webp')}
                  alt=""
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '12px',
                    bottom: '12px',
                    height: '28px',
                    padding: '0 12px',
                    borderRadius: '14px',
                    background: 'rgba(23, 42, 81, 0.78)',
                    color: '#FFFFFF',
                    fontSize: '13px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Юг
                </span>
              </span>
              <span style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: '20px', overflow: 'hidden', background: '#DCE3EE' }}>
                <img
                  style={{
                    position: 'absolute',
                    inset: '0',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: '30% 50%',
                    transform: 'scale(2.0999999999999996)',
                    transformOrigin: '50% 80%',
                  }}
                  src={asset('/img/photo-fans.webp')}
                  alt=""
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '12px',
                    bottom: '12px',
                    height: '28px',
                    padding: '0 12px',
                    borderRadius: '14px',
                    background: 'rgba(23, 42, 81, 0.78)',
                    color: '#FFFFFF',
                    fontSize: '13px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Запад
                </span>
              </span>
              <span style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: '20px', overflow: 'hidden', background: '#DCE3EE' }}>
                <img
                  style={{
                    position: 'absolute',
                    inset: '0',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: '100% 50%',
                    transform: 'scale(1.4)',
                    transformOrigin: '20% 70%',
                  }}
                  src={asset('/img/photo-fans.webp')}
                  alt=""
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '12px',
                    bottom: '12px',
                    height: '28px',
                    padding: '0 12px',
                    borderRadius: '14px',
                    background: 'rgba(23, 42, 81, 0.78)',
                    color: '#FFFFFF',
                    fontSize: '13px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Юг
                </span>
              </span>
              <span style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: '20px', overflow: 'hidden', background: '#DCE3EE' }}>
                <img
                  style={{
                    position: 'absolute',
                    inset: '0',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: '50% 50%',
                    transform: 'scale(1.75)',
                    transformOrigin: '80% 30%',
                  }}
                  src={asset('/img/photo-fans.webp')}
                  alt=""
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '12px',
                    bottom: '12px',
                    height: '28px',
                    padding: '0 12px',
                    borderRadius: '14px',
                    background: 'rgba(23, 42, 81, 0.78)',
                    color: '#FFFFFF',
                    fontSize: '13px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Восток
                </span>
              </span>
              <span style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: '20px', overflow: 'hidden', background: '#DCE3EE' }}>
                <img
                  style={{
                    position: 'absolute',
                    inset: '0',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: '18% 50%',
                    transform: 'scale(2.0999999999999996)',
                    transformOrigin: '55% 45%',
                  }}
                  src={asset('/img/photo-fans.webp')}
                  alt=""
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '12px',
                    bottom: '12px',
                    height: '28px',
                    padding: '0 12px',
                    borderRadius: '14px',
                    background: 'rgba(23, 42, 81, 0.78)',
                    color: '#FFFFFF',
                    fontSize: '13px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Север
                </span>
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
