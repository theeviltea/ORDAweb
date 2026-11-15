'use client';

/* Сгенерировано из дизайн-макета ORDA (canvas). Разметка повторяет макет 1:1. */
import Link from 'next/link';
import { asset } from '@/lib/asset';
import { Icon } from '@/components/Icon';
import { Star } from '@/components/Star';
import { useDC } from '@/lib/dc';
import { vals, tick } from './Interactive.vals';
import './Interactive.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function InteractiveView(props: {}) {
  const self = useDC(props, tick);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const v: any = vals(self);
  return (
    <>
      <div style={{ width: '100%', background: '#172A51', paddingBottom: '1px', fontFamily: "'Roboto Condensed', sans-serif", color: '#172A51' }}>
        <section style={{ position: 'relative', overflow: 'hidden', padding: '40px 0 44px' }} aria-label="Интерактив">
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
                  Интерактив
                </h1>
                <p style={{ margin: '0', maxWidth: '600px', fontSize: '19px', lineHeight: '1.5', color: '#CFE3F2' }}>
                  Игры прямо на стадионе: фото на табло, прогноз счёта к перерыву и розыгрыш призов среди болельщиков с билетами.
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
          aria-label="Матч"
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
                Игры на стадионе
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              <Link
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '26px',
                  borderRadius: '26px',
                  background: '#FFFFFF',
                  boxShadow: '0 2px 16px rgba(23, 42, 81, 0.07)',
                  color: '#172A51',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  minHeight: '300px',
                  boxSizing: 'border-box',
                }}
                href="/fans/interactive"
              >
                <Star w={90} h={90} fill="#F2F6FA" style={{ position: 'absolute', right: '-24px', top: '-24px' }} />
                <span
                  style={{
                    position: 'relative',
                    width: '64px',
                    height: '64px',
                    borderRadius: '20px',
                    background: '#FDE6E7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name="mic-01" size={32} weight={1.7} color="#E30512" />
                </span>
                <span
                  style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '28px', fontWeight: '600', lineHeight: '1', textTransform: 'uppercase' }}
                >
                  Шумомер
                </span>
                <span style={{ fontSize: '16px', lineHeight: '1.5', color: '#5B6B8C' }}>Поддержите голосом: самый громкий сектор покажут на табло</span>
                <span style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      alignSelf: 'flex-start',
                      height: '26px',
                      padding: '0 10px',
                      borderRadius: '13px',
                      background: '#EEF3F8',
                      color: '#5B6B8C',
                      fontSize: '12px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Icon name="smart-phone-01" size={15} weight={2} color="#5B6B8C" />
                    Только в приложении
                  </span>
                  <Icon name="arrow-right-01" size={22} weight={2} color="#0B7DB0" />
                </span>
              </Link>
              <Link
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '26px',
                  borderRadius: '26px',
                  background: '#FFFFFF',
                  boxShadow: '0 2px 16px rgba(23, 42, 81, 0.07)',
                  color: '#172A51',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  minHeight: '300px',
                  boxSizing: 'border-box',
                }}
                href="/fans/interactive/photo"
              >
                <Star w={90} h={90} fill="#F2F6FA" style={{ position: 'absolute', right: '-24px', top: '-24px' }} />
                <span
                  style={{
                    position: 'relative',
                    width: '64px',
                    height: '64px',
                    borderRadius: '20px',
                    background: '#E7F5FB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name="camera-01" size={32} weight={1.7} color="#129ED9" />
                </span>
                <span
                  style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '28px', fontWeight: '600', lineHeight: '1', textTransform: 'uppercase' }}
                >
                  Фото на табло
                </span>
                <span style={{ fontSize: '16px', lineHeight: '1.5', color: '#5B6B8C' }}>Отправьте селфи с трибуны — лучшие попадут на большой экран</span>
                <span style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
                    Идёт сейчас
                  </span>
                  <Icon name="arrow-right-01" size={22} weight={2} color="#0B7DB0" />
                </span>
              </Link>
              <Link
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '26px',
                  borderRadius: '26px',
                  background: '#FFFFFF',
                  boxShadow: '0 2px 16px rgba(23, 42, 81, 0.07)',
                  color: '#172A51',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  minHeight: '300px',
                  boxSizing: 'border-box',
                }}
                href="/fans/interactive/score"
              >
                <Star w={90} h={90} fill="#F2F6FA" style={{ position: 'absolute', right: '-24px', top: '-24px' }} />
                <span
                  style={{
                    position: 'relative',
                    width: '64px',
                    height: '64px',
                    borderRadius: '20px',
                    background: '#E7F5FB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name="football" size={32} weight={1.7} color="#129ED9" />
                </span>
                <span
                  style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '28px', fontWeight: '600', lineHeight: '1', textTransform: 'uppercase' }}
                >
                  Счёт перерыва
                </span>
                <span style={{ fontSize: '16px', lineHeight: '1.5', color: '#5B6B8C' }}>Угадайте счёт к 45-й минуте и получите +20 баллов</span>
                <span style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      alignSelf: 'flex-start',
                      height: '26px',
                      padding: '0 10px',
                      borderRadius: '13px',
                      background: '#EEF3F8',
                      color: '#5B6B8C',
                      fontSize: '12px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Icon name="clock-01" size={15} weight={2} color="#5B6B8C" />
                    До 30′
                  </span>
                  <Icon name="arrow-right-01" size={22} weight={2} color="#0B7DB0" />
                </span>
              </Link>
              <Link
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '26px',
                  borderRadius: '26px',
                  background: '#FFFFFF',
                  boxShadow: '0 2px 16px rgba(23, 42, 81, 0.07)',
                  color: '#172A51',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  minHeight: '300px',
                  boxSizing: 'border-box',
                }}
                href="/fans/interactive/draw"
              >
                <Star w={90} h={90} fill="#F2F6FA" style={{ position: 'absolute', right: '-24px', top: '-24px' }} />
                <span
                  style={{
                    position: 'relative',
                    width: '64px',
                    height: '64px',
                    borderRadius: '20px',
                    background: '#E7F5FB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name="gift" size={32} weight={1.7} color="#129ED9" />
                </span>
                <span
                  style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '28px', fontWeight: '600', lineHeight: '1', textTransform: 'uppercase' }}
                >
                  Розыгрыш в перерыве
                </span>
                <span style={{ fontSize: '16px', lineHeight: '1.5', color: '#5B6B8C' }}>
                  Ваш билет участвует автоматически — главный приз джерси с автографами
                </span>
                <span style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      alignSelf: 'flex-start',
                      height: '26px',
                      padding: '0 10px',
                      borderRadius: '13px',
                      background: '#EEF3F8',
                      color: '#5B6B8C',
                      fontSize: '12px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Icon name="clock-01" size={15} weight={2} color="#5B6B8C" />В перерыве
                  </span>
                  <Icon name="arrow-right-01" size={22} weight={2} color="#0B7DB0" />
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
            background: '#E7F5FB',
            padding: '56px 0',
          }}
          aria-label="Как это работает"
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
                Как это работает
              </h2>
            </div>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 260px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span
                  style={{
                    flexShrink: '0',
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: '#129ED9',
                    color: '#FFFFFF',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '24px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  1
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '19px', fontWeight: '700' }}>Приходите на матч</span>
                  <span style={{ fontSize: '16px', lineHeight: '1.5', color: '#5B6B8C' }}>Игры открываются за 2 часа до начала</span>
                </span>
              </div>
              <div style={{ flex: '1 1 260px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span
                  style={{
                    flexShrink: '0',
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: '#129ED9',
                    color: '#FFFFFF',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '24px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  2
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '19px', fontWeight: '700' }}>Отметьтесь по билету</span>
                  <span style={{ fontSize: '16px', lineHeight: '1.5', color: '#5B6B8C' }}>В приложении или на сайте с телефона — «Я на стадионе»</span>
                </span>
              </div>
              <div style={{ flex: '1 1 260px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span
                  style={{
                    flexShrink: '0',
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: '#129ED9',
                    color: '#FFFFFF',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '24px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  3
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '19px', fontWeight: '700' }}>Играйте и копите баллы</span>
                  <span style={{ fontSize: '16px', lineHeight: '1.5', color: '#5B6B8C' }}>Баллы придут после финального свистка</span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
