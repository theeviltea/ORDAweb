'use client';

/* Сгенерировано из дизайн-макета ORDA (canvas). Разметка повторяет макет 1:1. */
import { Fragment } from 'react';
import Link from 'next/link';
import { asset } from '@/lib/asset';
import { Icon } from '@/components/Icon';
import { Star } from '@/components/Star';
import { PlayerCard } from '@/components/PlayerCard';
import { useDC } from '@/lib/dc';
import { vals, tick } from './Player.vals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function PlayerView(props: {}) {
  const self = useDC(props, tick);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const v: any = vals(self);
  return (
    <>
      <div style={{ width: '100%', background: '#172A51', paddingBottom: '1px', fontFamily: "'Roboto Condensed', sans-serif", color: '#172A51' }}>
        <div style={{ height: '40px' }} />
        <section
          style={{
            position: 'relative',
            margin: '0 max(24px, calc((100% - 1280px) / 2)) 40px',
            borderRadius: '32px',
            overflow: 'hidden',
            background: 'linear-gradient(120deg, #172A51 0%, #1B5A93 55%, #129ED9 100%)',
            padding: '40px 0 48px',
          }}
          aria-label="Игрок"
        >
          <span
            style={{
              position: 'absolute',
              right: '2%',
              top: '-60px',
              fontFamily: "'SO Sporty', 'Oswald', sans-serif",
              fontSize: '560px',
              fontWeight: '700',
              lineHeight: '0.85',
              color: 'rgba(255, 255, 255, 0.07)',
            }}
            aria-hidden="true"
          >
            10
          </span>
          <Star w={160} h={260} fill="rgba(18, 158, 217, 0.35)" style={{ position: 'absolute', left: '46%', bottom: '-90px' }} />
          <Star w={26} h={26} fill="#FFFFFF" style={{ position: 'absolute', left: '52%', top: '70px' }} />
          <Star w={14} h={14} fill="#7CC6E9" style={{ position: 'absolute', right: '48px', top: '120px' }} />
          <img
            style={{
              position: 'absolute',
              right: '6%',
              bottom: '0',
              height: '102%',
              width: 'auto',
              maxWidth: 'none',
              filter: 'drop-shadow(0 30px 40px rgba(10, 18, 36, 0.45))',
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
              height: '120px',
              background: 'linear-gradient(180deg, rgba(23, 42, 81, 0) 0%, rgba(23, 42, 81, 0.6) 100%)',
            }}
            aria-hidden="true"
          />
          <div
            style={{ position: 'relative', width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 40px', boxSizing: 'border-box', color: '#FFFFFF' }}
          >
            <div style={{ maxWidth: '620px', minHeight: '560px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '22px' }}>
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
                <Link style={{ color: '#7FA3C9', textDecoration: 'none' }} href="/team">
                  Команды
                </Link>
                <Icon name="arrow-right-01" size={14} weight={2} color="#7FA3C9" />
                <span style={{ color: '#CFE3F2' }}>Эльхан Астанов</span>
              </nav>
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
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
                  <img style={{ width: '28px', height: '34px', objectFit: 'contain' }} src={asset('/img/crest.png')} alt="ORDA" />
                </span>
                <span
                  style={{
                    height: '30px',
                    padding: '0 12px',
                    borderRadius: '15px',
                    background: 'rgba(255, 255, 255, 0.14)',
                    fontSize: '14px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Основной состав
                </span>
                <span
                  style={{
                    height: '30px',
                    padding: '0 12px',
                    borderRadius: '15px',
                    background: 'rgba(255, 255, 255, 0.14)',
                    fontSize: '14px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Сборная Казахстана
                </span>
              </span>
              <span style={{ display: 'flex', alignItems: 'flex-end', gap: '22px' }}>
                <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '120px', fontWeight: '600', lineHeight: '0.8', color: '#129ED9' }}>
                  10
                </span>
                <h1
                  style={{
                    margin: '0',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '80px',
                    fontWeight: '600',
                    lineHeight: '0.9',
                    textTransform: 'uppercase',
                  }}
                >
                  Эльхан
                  <br />
                  Астанов
                </h1>
              </span>
              <span style={{ fontSize: '20px', color: '#CFE3F2' }}>Полузащитник · левый вингер</span>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <span
                  style={{
                    flex: '1 1 120px',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    padding: '18px 20px',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                  }}
                >
                  <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '44px', fontWeight: '600', lineHeight: '1' }}>115</span>
                  <span style={{ fontSize: '14px', color: '#CFE3F2' }}>матчей</span>
                </span>
                <span
                  style={{
                    flex: '1 1 120px',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    padding: '18px 20px',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                  }}
                >
                  <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '44px', fontWeight: '600', lineHeight: '1' }}>8</span>
                  <span style={{ fontSize: '14px', color: '#CFE3F2' }}>голов</span>
                </span>
                <span
                  style={{
                    flex: '1 1 120px',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    padding: '18px 20px',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                  }}
                >
                  <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '44px', fontWeight: '600', lineHeight: '1' }}>8</span>
                  <span style={{ fontSize: '14px', color: '#CFE3F2' }}>передач</span>
                </span>
                <span
                  style={{
                    flex: '1 1 120px',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    padding: '18px 20px',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                  }}
                >
                  <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '44px', fontWeight: '600', lineHeight: '1' }}>8 712</span>
                  <span style={{ fontSize: '14px', color: '#CFE3F2' }}>минут</span>
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
          aria-label="Об игроке"
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
            <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap', color: '#172A51' }}>
              <div style={{ flex: '1.2 1 480px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
                  Биография
                </h2>
                <p style={{ margin: '0', fontSize: '19px', lineHeight: '1.6', color: '#3F5578' }}>
                  Эльхан Астанов — казахстанский футболист, полузащитник и левый вингер «Ордабасы». Под 10-м номером он действует на фланге, помогает развивать
                  атаки и создаёт моменты для партнёров.
                </p>
                <p style={{ margin: '0', fontSize: '19px', lineHeight: '1.6', color: '#3F5578' }}>
                  Астанов также выступает за сборную Казахстана. Его игру отличают скорость, техника и уверенная работа с мячом.
                </p>
              </div>
              <div style={{ flex: '1 1 420px', display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '12px', alignContent: 'start' }}>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '20px 22px', borderRadius: '20px', background: '#F2F6FA' }}>
                  <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Возраст</span>
                  <span style={{ fontSize: '20px', fontWeight: '700' }}>26</span>
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '20px 22px', borderRadius: '20px', background: '#F2F6FA' }}>
                  <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Рост</span>
                  <span style={{ fontSize: '20px', fontWeight: '700' }}>186 см</span>
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '20px 22px', borderRadius: '20px', background: '#F2F6FA' }}>
                  <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Гражданство</span>
                  <span style={{ fontSize: '20px', fontWeight: '700' }}>Казахстан</span>
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '20px 22px', borderRadius: '20px', background: '#F2F6FA' }}>
                  <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Нога</span>
                  <span style={{ fontSize: '20px', fontWeight: '700' }}>Правая</span>
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '20px 22px', borderRadius: '20px', background: '#F2F6FA' }}>
                  <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Амплуа</span>
                  <span style={{ fontSize: '20px', fontWeight: '700' }}>Левый вингер</span>
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '20px 22px', borderRadius: '20px', background: '#F2F6FA' }}>
                  <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Игрок сборной</span>
                  <span style={{ fontSize: '20px', fontWeight: '700' }}>Казахстан</span>
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
            background: '#E7F5FB',
            padding: '56px 0',
          }}
          aria-label="Статистика"
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
            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'flex-start', color: '#172A51' }}>
              <div style={{ flex: '1.3 1 520px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
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
                    Статистика
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
                <div style={{ padding: '28px', borderRadius: '24px', background: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <span style={{ fontSize: '17px', color: '#5B6B8C' }}>Сыграно минут</span>
                      <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '28px', fontWeight: '600' }}>8 712</span>
                    </span>
                    <span style={{ height: '12px', borderRadius: '6px', background: '#E7F5FB', overflow: 'hidden' }}>
                      <span
                        style={{ display: 'block', width: '90%', height: '12px', borderRadius: '6px', background: 'linear-gradient(90deg, #0B7DB0, #129ED9)' }}
                      />
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <span style={{ fontSize: '17px', color: '#5B6B8C' }}>Матчи</span>
                      <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '28px', fontWeight: '600' }}>115</span>
                    </span>
                    <span style={{ height: '12px', borderRadius: '6px', background: '#E7F5FB', overflow: 'hidden' }}>
                      <span
                        style={{ display: 'block', width: '70%', height: '12px', borderRadius: '6px', background: 'linear-gradient(90deg, #0B7DB0, #129ED9)' }}
                      />
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <span style={{ fontSize: '17px', color: '#5B6B8C' }}>Стартовый состав</span>
                      <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '28px', fontWeight: '600' }}>96</span>
                    </span>
                    <span style={{ height: '12px', borderRadius: '6px', background: '#E7F5FB', overflow: 'hidden' }}>
                      <span
                        style={{ display: 'block', width: '60%', height: '12px', borderRadius: '6px', background: 'linear-gradient(90deg, #0B7DB0, #129ED9)' }}
                      />
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <span style={{ fontSize: '17px', color: '#5B6B8C' }}>Голы</span>
                      <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '28px', fontWeight: '600' }}>8</span>
                    </span>
                    <span style={{ height: '12px', borderRadius: '6px', background: '#E7F5FB', overflow: 'hidden' }}>
                      <span
                        style={{ display: 'block', width: '34%', height: '12px', borderRadius: '6px', background: 'linear-gradient(90deg, #0B7DB0, #129ED9)' }}
                      />
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <span style={{ fontSize: '17px', color: '#5B6B8C' }}>Голевые передачи</span>
                      <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '28px', fontWeight: '600' }}>8</span>
                    </span>
                    <span style={{ height: '12px', borderRadius: '6px', background: '#E7F5FB', overflow: 'hidden' }}>
                      <span
                        style={{ display: 'block', width: '34%', height: '12px', borderRadius: '6px', background: 'linear-gradient(90deg, #0B7DB0, #129ED9)' }}
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ flex: '1 1 360px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
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
                  Награды
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '18px 20px', borderRadius: '20px', background: '#FFFFFF' }}>
                    <span
                      style={{
                        flexShrink: '0',
                        width: '52px',
                        height: '52px',
                        borderRadius: '16px',
                        background: 'linear-gradient(160deg, #172A51 0%, #129ED9 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon name="champion" size={26} weight={1.7} color="#FFFFFF" />
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span style={{ fontSize: '18px', fontWeight: '700' }}>Чемпион Казахстана</span>
                      <span style={{ fontSize: '14px', color: '#5B6B8C' }}>22/23 · FC Ordabasy</span>
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '18px 20px', borderRadius: '20px', background: '#FFFFFF' }}>
                    <span
                      style={{
                        flexShrink: '0',
                        width: '52px',
                        height: '52px',
                        borderRadius: '16px',
                        background: 'linear-gradient(160deg, #172A51 0%, #129ED9 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon name="champion" size={26} weight={1.7} color="#FFFFFF" />
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span style={{ fontSize: '18px', fontWeight: '700' }}>Обладатель Кубка Казахстана</span>
                      <span style={{ fontSize: '14px', color: '#5B6B8C' }}>21/22 · FC Ordabasy</span>
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '18px 20px', borderRadius: '20px', background: '#FFFFFF' }}>
                    <span
                      style={{
                        flexShrink: '0',
                        width: '52px',
                        height: '52px',
                        borderRadius: '16px',
                        background: 'linear-gradient(160deg, #172A51 0%, #129ED9 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon name="champion" size={26} weight={1.7} color="#FFFFFF" />
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span style={{ fontSize: '18px', fontWeight: '700' }}>Обладатель Кубка Лиги Казахстана</span>
                      <span style={{ fontSize: '14px', color: '#5B6B8C' }}>23/24 · FC Astana</span>
                    </span>
                  </div>
                </div>
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
          aria-label="Другие игроки"
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
                Другие игроки
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '20px' }}>
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
      </div>
    </>
  );
}
