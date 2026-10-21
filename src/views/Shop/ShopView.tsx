'use client';

/* Сгенерировано из дизайн-макета ORDA (canvas). Разметка повторяет макет 1:1. */
import { Fragment } from 'react';
import Link from 'next/link';
import { route } from '@/lib/route';
import { asset } from '@/lib/asset';
import { Icon } from '@/components/Icon';
import { Star } from '@/components/Star';
import { useDC } from '@/lib/dc';
import { vals, tick } from './Shop.vals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ShopView(props: {}) {
  const self = useDC(props, tick);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const v: any = vals(self);
  return (
    <>
      <div style={{ width: '100%', background: '#172A51', paddingBottom: '1px', fontFamily: "'Roboto Condensed', sans-serif", color: '#172A51' }}>
        <section style={{ position: 'relative', overflow: 'hidden', padding: '48px 0 44px' }} aria-label="Магазин">
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
                  <span style={{ color: '#CFE3F2' }}>Магазин</span>
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
                  Клубный магазин
                </h1>
                <p style={{ margin: '0', maxWidth: '560px', fontSize: '19px', lineHeight: '1.5', color: '#CFE3F2' }}>
                  Официальная игровая и повседневная экипировка «Ордабасы». Наши цвета — твой стиль.
                </p>
              </div>
              <Link
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  flex: '1 1 520px',
                  minHeight: '300px',
                  borderRadius: '28px',
                  background: 'linear-gradient(120deg, #1B5A93 0%, #129ED9 100%)',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  display: 'block',
                }}
                href="/shop/product"
              >
                <span
                  style={{
                    position: 'absolute',
                    right: '-6px',
                    top: '-14px',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '150px',
                    fontWeight: '700',
                    lineHeight: '0.85',
                    color: 'rgba(255, 255, 255, 0.1)',
                    textAlign: 'right',
                    whiteSpace: 'pre-line',
                  }}
                  aria-hidden="true"
                >
                  {'KIT\n2026'}
                </span>
                <Star w={22} h={22} fill="#FFFFFF" style={{ position: 'absolute', left: '46%', top: '40px' }} />
                <Star w={12} h={12} fill="#7CC6E9" style={{ position: 'absolute', right: '40px', bottom: '40px' }} />
                <img
                  style={{
                    position: 'absolute',
                    right: '10px',
                    bottom: '-40px',
                    height: '118%',
                    width: 'auto',
                    maxWidth: 'none',
                    transform: 'rotate(-6deg)',
                    filter: 'drop-shadow(0 20px 30px rgba(10, 18, 36, 0.4))',
                  }}
                  src={asset('/img/jersey.webp')}
                  alt=""
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '32px',
                    top: '32px',
                    bottom: '32px',
                    width: '48%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <span
                    style={{
                      alignSelf: 'flex-start',
                      height: '28px',
                      padding: '0 12px',
                      borderRadius: '14px',
                      background: '#E30512',
                      fontSize: '13px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    Только для вас
                  </span>
                  <span
                    style={{
                      fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                      fontSize: '38px',
                      fontWeight: '600',
                      lineHeight: '1',
                      textTransform: 'uppercase',
                    }}
                  >
                    Форма сезона 2026
                  </span>
                  <span style={{ marginTop: 'auto', display: 'flex', alignItems: 'flex-end', gap: '14px' }}>
                    <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '72px', fontWeight: '600', lineHeight: '0.85' }}>−15%</span>
                    <span style={{ fontSize: '15px', color: '#E7F5FB', paddingBottom: '6px' }}>
                      по промокоду
                      <br />
                      ORDA15
                    </span>
                  </span>
                </span>
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '28px', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '16px', color: '#CFE3F2' }}>
                  <span
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon name="delivery-truck-01" size={20} weight={1.8} color="#7CC6E9" />
                  </span>
                  Доставка по Казахстану
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '16px', color: '#CFE3F2' }}>
                  <span
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon name="store-01" size={20} weight={1.8} color="#7CC6E9" />
                  </span>
                  Самовывоз из фан-шопа на стадионе
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '16px', color: '#CFE3F2' }}>
                  <span
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon name="arrow-reload-horizontal" size={20} weight={1.8} color="#7CC6E9" />
                  </span>
                  Обмен и возврат 14 дней
                </span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }} role="tablist" aria-label="Магазин">
                <Link
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
                  href="/shop"
                >
                  Каталог
                </Link>
                <Link
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
                  href="/shop/orders"
                >
                  Мои заказы
                  <span
                    style={{
                      minWidth: '22px',
                      height: '22px',
                      padding: '0 6px',
                      borderRadius: '11px',
                      background: '#E30512',
                      color: '#FFFFFF',
                      fontSize: '12px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxSizing: 'border-box',
                    }}
                  >
                    2
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
          aria-label="Каталог"
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
                Каталог
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
                href="/shop/orders"
              >
                Мои заказы
                <Icon name="arrow-right-01" size={18} weight={2} color="#0B7DB0" />
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <aside style={{ flex: '1 1 260px', maxWidth: '300px', display: 'flex', flexDirection: 'column', gap: '22px' }} aria-label="Фильтры">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '22px', borderBottom: '1px solid #EEF3F8' }}>
                  <span style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#172A51' }}>Категории</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {v.cats.map((c: any, cIdx: number) => (
                      <Fragment key={cIdx}>
                        <button
                          style={{
                            height: '48px',
                            padding: '0 16px',
                            borderRadius: '14px',
                            border: '0',
                            background: c.bg,
                            color: c.fg,
                            fontFamily: 'inherit',
                            fontSize: '17px',
                            fontWeight: c.w,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            cursor: 'pointer',
                            textAlign: 'left',
                          }}
                          type="button"
                          onClick={c.pick}
                        >
                          {c.label}
                          <span style={{ fontSize: '14px', fontWeight: '700', color: c.count }}>{c.n}</span>
                        </button>
                      </Fragment>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '22px', borderBottom: '1px solid #EEF3F8' }}>
                  <span style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#172A51' }}>Размер</span>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        width: '48px',
                        height: '44px',
                        borderRadius: '12px',
                        background: '#FFFFFF',
                        color: '#172A51',
                        border: '1.5px solid #DCE3EE',
                        boxSizing: 'border-box',
                        fontSize: '15px',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      XS
                    </span>
                    <span
                      style={{
                        width: '48px',
                        height: '44px',
                        borderRadius: '12px',
                        background: '#FFFFFF',
                        color: '#172A51',
                        border: '1.5px solid #DCE3EE',
                        boxSizing: 'border-box',
                        fontSize: '15px',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      S
                    </span>
                    <span
                      style={{
                        width: '48px',
                        height: '44px',
                        borderRadius: '12px',
                        background: '#172A51',
                        color: '#FFFFFF',
                        border: '1.5px solid #172A51',
                        boxSizing: 'border-box',
                        fontSize: '15px',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      M
                    </span>
                    <span
                      style={{
                        width: '48px',
                        height: '44px',
                        borderRadius: '12px',
                        background: '#FFFFFF',
                        color: '#172A51',
                        border: '1.5px solid #DCE3EE',
                        boxSizing: 'border-box',
                        fontSize: '15px',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      L
                    </span>
                    <span
                      style={{
                        width: '48px',
                        height: '44px',
                        borderRadius: '12px',
                        background: '#FFFFFF',
                        color: '#172A51',
                        border: '1.5px solid #DCE3EE',
                        boxSizing: 'border-box',
                        fontSize: '15px',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      XL
                    </span>
                    <span
                      style={{
                        width: '48px',
                        height: '44px',
                        borderRadius: '12px',
                        background: '#FFFFFF',
                        color: '#172A51',
                        border: '1.5px solid #DCE3EE',
                        boxSizing: 'border-box',
                        fontSize: '15px',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      XXL
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '22px', borderBottom: '1px solid #EEF3F8' }}>
                  <span style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#172A51' }}>Цена, ₸</span>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <span
                      style={{
                        flex: '1',
                        height: '48px',
                        padding: '0 14px',
                        borderRadius: '14px',
                        background: '#F2F6FA',
                        fontSize: '16px',
                        color: '#5B6B8C',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      от 4 990
                    </span>
                    <span
                      style={{
                        flex: '1',
                        height: '48px',
                        padding: '0 14px',
                        borderRadius: '14px',
                        background: '#F2F6FA',
                        fontSize: '16px',
                        color: '#5B6B8C',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      до 34 990
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '22px', borderBottom: '1px solid #EEF3F8' }}>
                  <span style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#172A51' }}>Наличие</span>
                  <label
                    style={{ display: 'flex', alignItems: 'center', gap: '12px', minHeight: '36px', fontSize: '16px', color: '#172A51', cursor: 'pointer' }}
                  >
                    <span
                      style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '7px',
                        background: '#0B7DB0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon name="tick-02" size={14} weight={2.6} color="#FFFFFF" />
                    </span>
                    <span style={{ flexGrow: '1' }}>Есть в фан-шопе</span>
                    <span style={{ fontSize: '14px', color: '#5B6B8C' }}>6</span>
                  </label>
                  <label
                    style={{ display: 'flex', alignItems: 'center', gap: '12px', minHeight: '36px', fontSize: '16px', color: '#172A51', cursor: 'pointer' }}
                  >
                    <span
                      style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '7px',
                        border: '1.5px solid #C9D6E6',
                        boxSizing: 'border-box',
                        background: '#FFFFFF',
                      }}
                    />
                    <span style={{ flexGrow: '1' }}>Только онлайн</span>
                    <span style={{ fontSize: '14px', color: '#5B6B8C' }}>2</span>
                  </label>
                </div>
                <div
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    padding: '22px',
                    borderRadius: '22px',
                    background: '#E7F5FB',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  <Star w={70} h={110} fill="#BFE3F4" style={{ position: 'absolute', right: '-18px', top: '-18px' }} />
                  <span
                    style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', fontWeight: '700', color: '#172A51' }}
                  >
                    <img style={{ width: '26px', height: '26px' }} src={asset('/img/coin.webp')} alt="" />2 480 баллов
                  </span>
                  <span style={{ position: 'relative', fontSize: '15px', lineHeight: '1.4', color: '#5B6B8C' }}>
                    Оплачивайте до 30% покупки клубными баллами.
                  </span>
                </div>
              </aside>
              <div style={{ flex: '999 1 560px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '17px', color: '#5B6B8C' }}>{v.countLabel}</span>
                  <button
                    style={{
                      height: '48px',
                      padding: '0 18px',
                      borderRadius: '14px',
                      border: '1.5px solid #DCE3EE',
                      background: '#FFFFFF',
                      color: '#172A51',
                      fontFamily: 'inherit',
                      fontSize: '16px',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                    }}
                    type="button"
                  >
                    Сначала популярные
                    <Icon name="arrow-down-01" size={18} weight={2} color="#172A51" />
                  </button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '20px' }}>
                  {v.products.map((p: any, pIdx: number) => (
                    <Fragment key={pIdx}>
                      <Link
                        style={{
                          position: 'relative',
                          overflow: 'hidden',
                          padding: '16px',
                          borderRadius: '24px',
                          background: '#FFFFFF',
                          boxShadow: '0 2px 12px rgba(23, 42, 81, 0.08)',
                          color: '#172A51',
                          textDecoration: 'none',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '12px',
                        }}
                        href={route(p.href)}
                      >
                        <Star w={64} h={64} fill="#DCEEF8" style={{ position: 'absolute', right: '-20px', top: '-20px' }} />
                        {p.isNew && (
                          <>
                            <span
                              style={{
                                position: 'absolute',
                                left: '16px',
                                top: '16px',
                                zIndex: '1',
                                height: '26px',
                                padding: '0 10px',
                                borderRadius: '13px',
                                background: '#172A51',
                                color: '#FFFFFF',
                                fontSize: '12px',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              {p.badge}
                            </span>
                          </>
                        )}
                        {p.isHit && (
                          <>
                            <span
                              style={{
                                position: 'absolute',
                                left: '16px',
                                top: '16px',
                                zIndex: '1',
                                height: '26px',
                                padding: '0 10px',
                                borderRadius: '13px',
                                background: '#E30512',
                                color: '#FFFFFF',
                                fontSize: '12px',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              {p.badge}
                            </span>
                          </>
                        )}
                        <span
                          style={{
                            position: 'relative',
                            height: '210px',
                            borderRadius: '18px',
                            background: p.mediaBg,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {p.hasPhoto && (
                            <>
                              <img style={{ height: '200px', width: '100%', objectFit: 'contain' }} src={p.photo} alt={p.name} />
                            </>
                          )}
                          {p.noPhoto && (
                            <>
                              <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: '#8E9BB5', fontSize: '14px' }}>
                                <img style={{ width: '56px', height: '66px', objectFit: 'contain', opacity: '0.35' }} src={asset('/img/crest.png')} alt="" />
                                Фото скоро
                              </span>
                            </>
                          )}
                        </span>
                        <span style={{ display: 'flex', flexDirection: 'column', gap: '4px', flexGrow: '1' }}>
                          <span style={{ fontSize: '17px', fontWeight: '700', lineHeight: '1.25' }}>{p.name}</span>
                          <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '24px', fontWeight: '600', color: '#0B7DB0' }}>
                            {p.price}
                          </span>
                        </span>
                        <span style={{ display: 'flex', gap: '8px' }}>
                          <span
                            style={{
                              flexGrow: '1',
                              height: '48px',
                              borderRadius: '14px',
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
                            <Icon name="shopping-bag-02" size={18} weight={1.8} color="#FFFFFF" />В корзину
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
                            aria-label="В избранное"
                          >
                            <Icon name="favourite" size={20} weight={1.8} color="#172A51" />
                          </span>
                        </span>
                      </Link>
                    </Fragment>
                  ))}
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
            background: '#1F3562',
            padding: '40px 0',
          }}
          aria-label="Фан-шоп"
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
            <div style={{ display: 'flex', gap: '32px', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
                <span
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '22px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name="store-01" size={34} weight={1.6} color="#7CC6E9" />
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span
                    style={{
                      fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                      fontSize: '34px',
                      fontWeight: '600',
                      lineHeight: '1',
                      textTransform: 'uppercase',
                      color: '#FFFFFF',
                    }}
                  >
                    Фан-шоп на стадионе
                  </span>
                  <span style={{ fontSize: '17px', color: '#CFE3F2' }}>
                    Открыт в дни домашних матчей за 3 часа до начала. Самовывоз онлайн-заказов — там же.
                  </span>
                </span>
              </span>
              <Link
                style={{
                  height: '56px',
                  padding: '0 28px',
                  borderRadius: '16px',
                  background: '#FFFFFF',
                  color: '#172A51',
                  fontSize: '18px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                }}
                href="/matches"
              >
                Ближайшие матчи
                <Icon name="arrow-right-01" size={20} weight={2} color="#172A51" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
