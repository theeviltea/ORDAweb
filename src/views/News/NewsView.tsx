'use client';

/* Сгенерировано из дизайн-макета ORDA (canvas). Разметка повторяет макет 1:1. */
import { Fragment } from 'react';
import Link from 'next/link';
import { asset } from '@/lib/asset';
import { Icon } from '@/components/Icon';
import { Star } from '@/components/Star';
import { useDC } from '@/lib/dc';
import { vals, tick } from './News.vals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function NewsView(props: {}) {
  const self = useDC(props, tick);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const v: any = vals(self);
  return (
    <>
      <div style={{ width: '100%', background: '#172A51', paddingBottom: '1px', fontFamily: "'Roboto Condensed', sans-serif", color: '#172A51' }}>
        <section style={{ position: 'relative', overflow: 'hidden', padding: '48px 0 44px' }} aria-label="Новости">
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
                  <span style={{ color: '#CFE3F2' }}>Новости</span>
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
                  Новости
                </h1>
                <p style={{ margin: '0', maxWidth: '560px', fontSize: '19px', lineHeight: '1.5', color: '#CFE3F2' }}>
                  Матчи, команда, трансферы и жизнь клуба — всё, что происходит с «Ордабасы».
                </p>
              </div>
            </div>
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
          aria-label="Лента новостей"
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
            <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div style={{ flex: '999 1 640px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '24px', color: '#172A51' }}>
                {v.showFeatured && (
                  <>
                    <Link
                      style={{
                        position: 'relative',
                        display: 'block',
                        minHeight: '480px',
                        borderRadius: '28px',
                        overflow: 'hidden',
                        background: '#172A51',
                        color: '#FFFFFF',
                        textDecoration: 'none',
                      }}
                      href="/news/article"
                    >
                      <img
                        style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%' }}
                        src={asset('/img/news-huddle.webp')}
                        alt=""
                      />
                      <span
                        style={{
                          position: 'absolute',
                          inset: '0',
                          background: 'linear-gradient(180deg, rgba(23, 42, 81, 0) 30%, rgba(23, 42, 81, 0.94) 100%)',
                        }}
                        aria-hidden="true"
                      />
                      <span
                        style={{ position: 'absolute', left: '36px', right: '36px', bottom: '34px', display: 'flex', flexDirection: 'column', gap: '14px' }}
                      >
                        <span style={{ display: 'flex', gap: '8px' }}>
                          <span
                            style={{
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
                            Главное
                          </span>
                          <span
                            style={{
                              height: '30px',
                              padding: '0 12px',
                              borderRadius: '15px',
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
                        </span>
                        <span
                          style={{
                            fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                            fontSize: '52px',
                            fontWeight: '600',
                            lineHeight: '0.98',
                            textTransform: 'uppercase',
                            maxWidth: '820px',
                          }}
                        >
                          «Ордабасы» сохранил лидерство и завершил первый круг на вершине таблицы
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '16px', color: '#CFE3F2' }}>
                          <span>18 мая 2025</span>
                          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#7CC6E9' }} />
                          <span>4 мин чтения</span>
                          <span style={{ flexGrow: '1' }} />
                          <span
                            style={{
                              height: '48px',
                              padding: '0 22px',
                              borderRadius: '16px',
                              background: '#FFFFFF',
                              color: '#172A51',
                              fontSize: '17px',
                              fontWeight: '700',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                            }}
                          >
                            Читать
                            <Icon name="arrow-right-01" size={18} weight={2} color="#172A51" />
                          </span>
                        </span>
                      </span>
                    </Link>
                  </>
                )}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
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
                        href="/news/article"
                      >
                        <span style={{ position: 'relative', height: '210px', background: '#EEF3F8' }}>
                          <img
                            style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: n.pos }}
                            src={n.img}
                            alt=""
                          />
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
                          <span style={{ fontSize: '21px', fontWeight: '700', lineHeight: '1.25' }}>{n.title}</span>
                          <span style={{ fontSize: '16px', lineHeight: '1.45', color: '#5B6B8C' }}>{n.lead}</span>
                          <span style={{ marginTop: 'auto', paddingTop: '6px', fontSize: '14px', color: '#8E9BB5' }}>{n.meta}</span>
                        </span>
                      </Link>
                    </Fragment>
                  ))}
                </div>
                {v.none && (
                  <>
                    <div style={{ padding: '40px', borderRadius: '24px', background: '#F2F6FA', textAlign: 'center', fontSize: '17px', color: '#5B6B8C' }}>
                      В этой рубрике пока нет новостей
                    </div>
                  </>
                )}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <span
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: '#172A51',
                      color: '#FFFFFF',
                      fontSize: '17px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    1
                  </span>
                  <span
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: '#F2F6FA',
                      color: '#172A51',
                      fontSize: '17px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    2
                  </span>
                  <span
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: '#F2F6FA',
                      color: '#172A51',
                      fontSize: '17px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    3
                  </span>
                  <span
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: '#F2F6FA',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon name="arrow-right-01" size={20} weight={2} color="#172A51" />
                  </span>
                </div>
              </div>
              <aside style={{ flex: '1 1 320px', maxWidth: '380px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    padding: '26px',
                    borderRadius: '26px',
                    background: 'linear-gradient(150deg, #172A51 0%, #129ED9 100%)',
                    color: '#FFFFFF',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '18px',
                  }}
                >
                  <Star w={80} h={130} fill="rgba(255, 255, 255, 0.12)" style={{ position: 'absolute', right: '-24px', top: '-24px' }} />
                  <span
                    style={{ position: 'relative', fontSize: '13px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#CFE3F2' }}
                  >
                    Ближайший матч · 25 тур
                  </span>
                  <span style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                      <span
                        style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '50%',
                          background: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <img style={{ width: '38px', height: '46px', objectFit: 'contain' }} src={asset('/img/crest.png')} alt="" />
                      </span>
                      <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '16px', fontWeight: '600' }}>ORDA</span>
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '38px', fontWeight: '600', lineHeight: '1' }}>19:00</span>
                      <span style={{ fontSize: '14px', color: '#CFE3F2' }}>Сб, 25 октября</span>
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                      <span
                        style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '50%',
                          background: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <img style={{ width: '40px', height: '46px', objectFit: 'contain' }} src={asset('/img/club-kairat.webp')} alt="" />
                      </span>
                      <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '16px', fontWeight: '600' }}>КАЙРАТ</span>
                    </span>
                  </span>
                  <Link
                    style={{
                      position: 'relative',
                      height: '50px',
                      borderRadius: '14px',
                      background: '#FFFFFF',
                      color: '#172A51',
                      fontSize: '16px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                    }}
                    href="/matches"
                  >
                    <Icon name="ticket-01" size={18} weight={1.8} color="#172A51" />
                    Купить билеты
                  </Link>
                </div>
                <div style={{ padding: '8px 24px 12px', borderRadius: '26px', background: '#F2F6FA' }}>
                  <span
                    style={{
                      display: 'block',
                      padding: '18px 0 6px',
                      fontSize: '14px',
                      fontWeight: '700',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Популярное
                  </span>
                  <Link
                    style={{
                      display: 'flex',
                      gap: '14px',
                      alignItems: 'flex-start',
                      padding: '14px 0',
                      borderBottom: '1px solid #EEF3F8',
                      color: '#172A51',
                      textDecoration: 'none',
                    }}
                    href="/news/article"
                  >
                    <span
                      style={{
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '30px',
                        fontWeight: '600',
                        lineHeight: '1',
                        color: '#129ED9',
                        minWidth: '26px',
                      }}
                    >
                      1
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ fontSize: '17px', fontWeight: '700', lineHeight: '1.3' }}>Новая домашняя форма представлена</span>
                      <span style={{ fontSize: '14px', color: '#8E9BB5' }}>Вчера · Клуб</span>
                    </span>
                  </Link>
                  <Link
                    style={{
                      display: 'flex',
                      gap: '14px',
                      alignItems: 'flex-start',
                      padding: '14px 0',
                      borderBottom: '1px solid #EEF3F8',
                      color: '#172A51',
                      textDecoration: 'none',
                    }}
                    href="/news/article"
                  >
                    <span
                      style={{
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '30px',
                        fontWeight: '600',
                        lineHeight: '1',
                        color: '#129ED9',
                        minWidth: '26px',
                      }}
                    >
                      2
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ fontSize: '17px', fontWeight: '700', lineHeight: '1.3' }}>Новый нападающий подписал контракт с клубом</span>
                      <span style={{ fontSize: '14px', color: '#8E9BB5' }}>31 июля · Трансферы</span>
                    </span>
                  </Link>
                  <Link
                    style={{
                      display: 'flex',
                      gap: '14px',
                      alignItems: 'flex-start',
                      padding: '14px 0',
                      borderBottom: '1px solid #EEF3F8',
                      color: '#172A51',
                      textDecoration: 'none',
                    }}
                    href="/news/article"
                  >
                    <span
                      style={{
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '30px',
                        fontWeight: '600',
                        lineHeight: '1',
                        color: '#129ED9',
                        minWidth: '26px',
                      }}
                    >
                      3
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ fontSize: '17px', fontWeight: '700', lineHeight: '1.3' }}>Состав на матч с «Кайратом» объявлен</span>
                      <span style={{ fontSize: '14px', color: '#8E9BB5' }}>Сегодня · Команда</span>
                    </span>
                  </Link>
                </div>
                <Link
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    padding: '24px',
                    borderRadius: '26px',
                    background: '#1F3562',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                  href="/"
                >
                  <Star w={60} h={100} fill="rgba(18, 158, 217, 0.35)" style={{ position: 'absolute', right: '-16px', top: '-14px' }} />
                  <span
                    style={{
                      position: 'relative',
                      width: '52px',
                      height: '52px',
                      borderRadius: '16px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon name="telegram" size={26} weight={1.6} color="#7CC6E9" />
                  </span>
                  <span style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{ fontSize: '18px', fontWeight: '700' }}>Новости в Telegram</span>
                    <span style={{ fontSize: '14px', color: '#CFE3F2' }}>Главное о клубе — сразу в телефоне</span>
                  </span>
                </Link>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
