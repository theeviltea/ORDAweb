'use client';

/* Сгенерировано из дизайн-макета ORDA (canvas). Разметка повторяет макет 1:1. */
import { Fragment } from 'react';
import Link from 'next/link';
import { asset } from '@/lib/asset';
import { Icon } from '@/components/Icon';
import { Star } from '@/components/Star';
import { useDC } from '@/lib/dc';
import { vals, tick } from './ShopOrders.vals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ShopOrdersView(props: {}) {
  const self = useDC(props, tick);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const v: any = vals(self);
  return (
    <>
      <div style={{ width: '100%', background: '#172A51', paddingBottom: '1px', fontFamily: "'Roboto Condensed', sans-serif", color: '#172A51' }}>
        <section style={{ position: 'relative', overflow: 'hidden', padding: '48px 0 44px' }} aria-label="Мои заказы">
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
                  <Link style={{ color: '#7FA3C9', textDecoration: 'none' }} href="/shop">
                    Магазин
                  </Link>
                  <Icon name="arrow-right-01" size={14} weight={2} color="#7FA3C9" />
                  <span style={{ color: '#CFE3F2' }}>Мои заказы</span>
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
                  Мои заказы
                </h1>
                <p style={{ margin: '0', maxWidth: '560px', fontSize: '19px', lineHeight: '1.5', color: '#CFE3F2' }}>
                  Статусы доставки, самовывоз и история покупок в клубном магазине.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '8px' }} role="tablist" aria-label="Магазин">
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
                  href="/shop"
                >
                  Каталог
                </Link>
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
          style={{ position: 'relative', margin: '0 max(24px, calc((100% - 1280px) / 2)) 40px', borderRadius: '32px', overflow: 'hidden', background: '#F2F6FA', padding: '56px 0' }}
          aria-label="Заказы"
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
                Заказы
              </h2>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {v.filters.map((f: any, fIdx: number) => (
                  <Fragment key={fIdx}>
                    <button
                      style={{
                        height: '44px',
                        padding: '0 18px',
                        borderRadius: '22px',
                        border: '0',
                        background: f.bg,
                        color: f.fg,
                        fontFamily: 'inherit',
                        fontSize: '16px',
                        fontWeight: f.w,
                        cursor: 'pointer',
                      }}
                      type="button"
                      aria-pressed={f.pressed}
                      onClick={f.pick}
                    >
                      {f.label}
                    </button>
                  </Fragment>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div style={{ flex: '999 1 600px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {v.showActive && (
                  <>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      <article
                        style={{
                          padding: '26px 28px',
                          borderRadius: '26px',
                          background: '#FFFFFF',
                          boxShadow: '0 2px 14px rgba(23, 42, 81, 0.08)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '20px',
                          color: '#172A51',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                          <span style={{ display: 'flex', alignItems: 'baseline', gap: '14px', flexWrap: 'wrap' }}>
                            <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '30px', fontWeight: '600', textTransform: 'uppercase' }}>
                              Заказ № 1102
                            </span>
                            <span style={{ fontSize: '15px', color: '#5B6B8C' }}>14 октября 2026, 11:20</span>
                          </span>
                          <span
                            style={{
                              height: '32px',
                              padding: '0 14px',
                              borderRadius: '16px',
                              background: '#E7F5FB',
                              color: '#0B7DB0',
                              fontSize: '14px',
                              fontWeight: '700',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            В пути
                          </span>
                        </div>
                        <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: '240px' }}>
                            <span
                              style={{
                                flexShrink: '0',
                                width: '76px',
                                height: '76px',
                                borderRadius: '16px',
                                background: '#F2F6FA',
                                overflow: 'hidden',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <img
                                style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '6px', boxSizing: 'border-box' }}
                                src={asset('/img/hoodie.webp')}
                                alt=""
                              />
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                              <span style={{ fontSize: '17px', fontWeight: '700' }}>Спортивное худи (синее)</span>
                              <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Размер M · 1 шт.</span>
                            </span>
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: '240px' }}>
                            <span
                              style={{
                                flexShrink: '0',
                                width: '76px',
                                height: '76px',
                                borderRadius: '16px',
                                background: '#F2F6FA',
                                overflow: 'hidden',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <img
                                style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '6px', boxSizing: 'border-box' }}
                                src={asset('/img/backpack.webp')}
                                alt=""
                              />
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                              <span style={{ fontSize: '17px', fontWeight: '700' }}>Рюкзак с логотипом</span>
                              <span style={{ fontSize: '14px', color: '#5B6B8C' }}>1 шт.</span>
                            </span>
                          </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-start', padding: '20px 24px', borderRadius: '20px', background: '#F2F6FA' }}>
                          <span style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', position: 'relative' }}>
                            <span
                              style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                background: '#0B7DB0',
                                border: '2px solid #0B7DB0',
                                boxSizing: 'border-box',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <Icon name="tick-02" size={16} weight={2.6} color="#FFFFFF" />
                            </span>
                            <span style={{ fontSize: '14px', fontWeight: '700', color: '#172A51' }}>Оформлен</span>
                          </span>
                          <span style={{ flex: '1.2', height: '3px', marginTop: '15px', borderRadius: '2px', background: '#0B7DB0' }} />
                          <span style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', position: 'relative' }}>
                            <span
                              style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                background: '#0B7DB0',
                                border: '2px solid #0B7DB0',
                                boxSizing: 'border-box',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <Icon name="tick-02" size={16} weight={2.6} color="#FFFFFF" />
                            </span>
                            <span style={{ fontSize: '14px', fontWeight: '700', color: '#172A51' }}>Собран</span>
                          </span>
                          <span style={{ flex: '1.2', height: '3px', marginTop: '15px', borderRadius: '2px', background: '#0B7DB0' }} />
                          <span style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', position: 'relative' }}>
                            <span
                              style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                background: '#0B7DB0',
                                border: '2px solid #0B7DB0',
                                boxSizing: 'border-box',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <Icon name="delivery-truck-01" size={16} weight={1.8} color="#FFFFFF" />
                            </span>
                            <span style={{ fontSize: '14px', fontWeight: '700', color: '#172A51' }}>В пути</span>
                          </span>
                          <span style={{ flex: '1.2', height: '3px', marginTop: '15px', borderRadius: '2px', background: '#DCE3EE' }} />
                          <span style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', position: 'relative' }}>
                            <span
                              style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                background: '#FFFFFF',
                                border: '2px solid #DCE3EE',
                                boxSizing: 'border-box',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            />
                            <span style={{ fontSize: '14px', fontWeight: '500', color: '#5B6B8C' }}>Доставлен</span>
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '16px',
                            paddingTop: '18px',
                            borderTop: '1px solid #EEF3F8',
                            flexWrap: 'wrap',
                          }}
                        >
                          <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '16px', color: '#5B6B8C' }}>
                            <Icon name="delivery-truck-01" size={20} weight={1.6} color="#5B6B8C" />
                            Курьер привезёт завтра, 10:00–14:00
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <span style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                              <span style={{ fontSize: '15px', color: '#5B6B8C' }}>Итого</span>
                              <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '32px', fontWeight: '600' }}>33 980 ₸</span>
                            </span>
                            <Link
                              style={{
                                height: '52px',
                                padding: '0 22px',
                                borderRadius: '16px',
                                background: '#0B7DB0',
                                color: '#FFFFFF',
                                fontSize: '17px',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                textDecoration: 'none',
                              }}
                              href="/shop/orders"
                            >
                              <Icon name="location-01" size={20} weight={1.8} color="#FFFFFF" />
                              Отследить заказ
                            </Link>
                          </span>
                        </div>
                      </article>
                      <article
                        style={{
                          padding: '26px 28px',
                          borderRadius: '26px',
                          background: '#FFFFFF',
                          boxShadow: '0 2px 14px rgba(23, 42, 81, 0.08)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '20px',
                          color: '#172A51',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                          <span style={{ display: 'flex', alignItems: 'baseline', gap: '14px', flexWrap: 'wrap' }}>
                            <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '30px', fontWeight: '600', textTransform: 'uppercase' }}>
                              Заказ № 0973
                            </span>
                            <span style={{ fontSize: '15px', color: '#5B6B8C' }}>1 октября 2026, 14:08</span>
                          </span>
                          <span
                            style={{
                              height: '32px',
                              padding: '0 14px',
                              borderRadius: '16px',
                              background: '#E8F5EE',
                              color: '#137040',
                              fontSize: '14px',
                              fontWeight: '700',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            Готов к выдаче
                          </span>
                        </div>
                        <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: '240px' }}>
                            <span
                              style={{
                                flexShrink: '0',
                                width: '76px',
                                height: '76px',
                                borderRadius: '16px',
                                background: '#F2F6FA',
                                overflow: 'hidden',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <img
                                style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '6px', boxSizing: 'border-box' }}
                                src={asset('/img/mug.webp')}
                                alt=""
                              />
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                              <span style={{ fontSize: '17px', fontWeight: '700' }}>Кружка «Ордабасы»</span>
                              <span style={{ fontSize: '14px', color: '#5B6B8C' }}>1 шт. · 6 990 ₸</span>
                            </span>
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: '240px' }}>
                            <span
                              style={{
                                flexShrink: '0',
                                width: '76px',
                                height: '76px',
                                borderRadius: '16px',
                                background: '#F2F6FA',
                                overflow: 'hidden',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <img
                                style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '6px', boxSizing: 'border-box' }}
                                src={asset('/img/flag.webp')}
                                alt=""
                              />
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                              <span style={{ fontSize: '17px', fontWeight: '700' }}>Флаг болельщика 1,5 м</span>
                              <span style={{ fontSize: '14px', color: '#5B6B8C' }}>1 шт. · 4 990 ₸</span>
                            </span>
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '14px',
                            padding: '18px 20px',
                            borderRadius: '20px',
                            background: '#E8F5EE',
                            color: '#137040',
                          }}
                        >
                          <Icon name="store-01" size={24} weight={1.7} color="#137040" />
                          <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                            <span style={{ fontSize: '17px', fontWeight: '700' }}>Самовывоз из фан-шопа на стадионе</span>
                            <span style={{ fontSize: '15px' }}>Заберите до 25 октября — покажите номер заказа на кассе</span>
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '16px',
                            paddingTop: '18px',
                            borderTop: '1px solid #EEF3F8',
                            flexWrap: 'wrap',
                          }}
                        >
                          <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '16px', color: '#5B6B8C' }}>
                            <Icon name="location-01" size={20} weight={1.6} color="#5B6B8C" />
                            Стадион им. К. Мунайтпасова
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <span style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                              <span style={{ fontSize: '15px', color: '#5B6B8C' }}>Итого</span>
                              <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '32px', fontWeight: '600' }}>11 980 ₸</span>
                            </span>
                            <Link
                              style={{
                                height: '52px',
                                padding: '0 22px',
                                borderRadius: '16px',
                                background: '#E7F5FB',
                                color: '#0B7DB0',
                                fontSize: '17px',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                textDecoration: 'none',
                              }}
                              href="/matches"
                            >
                              Как добраться
                            </Link>
                          </span>
                        </div>
                      </article>
                    </div>
                  </>
                )}
                {v.showDone && (
                  <>
                    <article
                      style={{
                        padding: '26px 28px',
                        borderRadius: '26px',
                        background: '#FFFFFF',
                        boxShadow: '0 2px 14px rgba(23, 42, 81, 0.08)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        color: '#172A51',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                        <span style={{ display: 'flex', alignItems: 'baseline', gap: '14px', flexWrap: 'wrap' }}>
                          <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '30px', fontWeight: '600', textTransform: 'uppercase' }}>
                            Заказ № 1048
                          </span>
                          <span style={{ fontSize: '15px', color: '#5B6B8C' }}>18 сентября 2026, 19:42</span>
                        </span>
                        <span
                          style={{
                            height: '32px',
                            padding: '0 14px',
                            borderRadius: '16px',
                            background: '#EEF3F8',
                            color: '#5B6B8C',
                            fontSize: '14px',
                            fontWeight: '700',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          Доставлен
                        </span>
                      </div>
                      <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: '240px' }}>
                          <span
                            style={{
                              flexShrink: '0',
                              width: '76px',
                              height: '76px',
                              borderRadius: '16px',
                              background: '#F2F6FA',
                              overflow: 'hidden',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <img
                              style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '6px', boxSizing: 'border-box' }}
                              src={asset('/img/jersey.webp')}
                              alt=""
                            />
                          </span>
                          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                            <span style={{ fontSize: '17px', fontWeight: '700' }}>Домашняя джерси 2024/25</span>
                            <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Размер L · 1 шт.</span>
                          </span>
                        </span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '16px',
                          paddingTop: '18px',
                          borderTop: '1px solid #EEF3F8',
                          flexWrap: 'wrap',
                        }}
                      >
                        <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '16px', color: '#5B6B8C' }}>
                          <Icon name="checkmark-circle-02" size={20} weight={1.6} color="#5B6B8C" />
                          Доставлено курьером 21 сентября
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                          <span style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                            <span style={{ fontSize: '15px', color: '#5B6B8C' }}>Итого</span>
                            <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '32px', fontWeight: '600' }}>24 990 ₸</span>
                          </span>
                          <Link
                            style={{
                              height: '52px',
                              padding: '0 22px',
                              borderRadius: '16px',
                              background: '#E7F5FB',
                              color: '#0B7DB0',
                              fontSize: '17px',
                              fontWeight: '700',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              textDecoration: 'none',
                            }}
                            href="/shop/product"
                          >
                            <Icon name="shopping-bag-02" size={20} weight={1.8} color="#0B7DB0" />
                            Купить снова
                          </Link>
                        </span>
                      </div>
                    </article>
                  </>
                )}
              </div>
              <aside style={{ flex: '1 1 300px', maxWidth: '360px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
                    Покупки в 2026
                  </span>
                  <span style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '12px' }}>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '44px', fontWeight: '600', lineHeight: '1' }}>3</span>
                      <span style={{ fontSize: '14px', color: '#CFE3F2' }}>заказа</span>
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '44px', fontWeight: '600', lineHeight: '1' }}>2</span>
                      <span style={{ fontSize: '14px', color: '#CFE3F2' }}>в работе</span>
                    </span>
                  </span>
                  <span
                    style={{
                      position: 'relative',
                      paddingTop: '14px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                    }}
                  >
                    <span style={{ fontSize: '15px', color: '#CFE3F2' }}>Сумма покупок</span>
                    <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '28px', fontWeight: '600' }}>70 950 ₸</span>
                  </span>
                </div>
                <div style={{ padding: '22px', borderRadius: '22px', background: '#E7F5FB', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '17px', fontWeight: '700', color: '#172A51' }}>
                    <img style={{ width: '26px', height: '26px' }} src={asset('/img/coin.webp')} alt="" />2 480 баллов
                  </span>
                  <span style={{ fontSize: '15px', lineHeight: '1.45', color: '#5B6B8C' }}>Оплачивайте до 30% следующей покупки клубными баллами.</span>
                </div>
                <Link
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '20px 22px',
                    borderRadius: '22px',
                    border: '1.5px solid #EEF3F8',
                    color: '#172A51',
                    textDecoration: 'none',
                  }}
                  href="/profile"
                >
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
                    <Icon name="customer-support" size={24} weight={1.6} color="#129ED9" />
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{ fontSize: '17px', fontWeight: '700' }}>Вопрос по заказу?</span>
                    <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Центр поддержки · ответим за час</span>
                  </span>
                </Link>
              </aside>
            </div>
          </div>
        </section>
        <section
          style={{ position: 'relative', margin: '0 max(24px, calc((100% - 1280px) / 2)) 40px', borderRadius: '32px', overflow: 'hidden', background: '#FFFFFF', padding: '56px 0' }}
          aria-label="Рекомендации"
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
                Вам может понравиться
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
                Весь каталог
                <Icon name="arrow-right-01" size={18} weight={2} color="#0B7DB0" />
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '20px' }}>
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
                href="/shop/product"
              >
                <Star w={64} h={64} fill="#DCEEF8" style={{ position: 'absolute', right: '-20px', top: '-20px' }} />
                <span
                  style={{
                    position: 'relative',
                    height: '200px',
                    borderRadius: '18px',
                    background: '#F7FAFC',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img style={{ height: '190px', width: '100%', objectFit: 'contain' }} src={asset('/img/training-kit.webp')} alt="Тренировочный комплект" />
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '17px', fontWeight: '700' }}>Тренировочный комплект</span>
                  <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '24px', fontWeight: '600', color: '#0B7DB0' }}>21 990 ₸</span>
                </span>
              </Link>
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
                href="/shop/product"
              >
                <Star w={64} h={64} fill="#DCEEF8" style={{ position: 'absolute', right: '-20px', top: '-20px' }} />
                <span
                  style={{
                    position: 'relative',
                    height: '200px',
                    borderRadius: '18px',
                    background: '#F7FAFC',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img style={{ height: '190px', width: '100%', objectFit: 'contain' }} src={asset('/img/hoodie.webp')} alt="Спортивное худи (синее)" />
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '17px', fontWeight: '700' }}>Спортивное худи (синее)</span>
                  <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '24px', fontWeight: '600', color: '#0B7DB0' }}>18 990 ₸</span>
                </span>
              </Link>
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
                href="/shop/product"
              >
                <Star w={64} h={64} fill="#DCEEF8" style={{ position: 'absolute', right: '-20px', top: '-20px' }} />
                <span
                  style={{
                    position: 'relative',
                    height: '200px',
                    borderRadius: '18px',
                    background: '#F7FAFC',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img style={{ height: '190px', width: '100%', objectFit: 'contain' }} src={asset('/img/jacket.webp')} alt="Зимняя куртка клуба" />
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '17px', fontWeight: '700' }}>Зимняя куртка клуба</span>
                  <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '24px', fontWeight: '600', color: '#0B7DB0' }}>34 990 ₸</span>
                </span>
              </Link>
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
                href="/shop/product"
              >
                <Star w={64} h={64} fill="#DCEEF8" style={{ position: 'absolute', right: '-20px', top: '-20px' }} />
                <span
                  style={{
                    position: 'relative',
                    height: '200px',
                    borderRadius: '18px',
                    background: '#F7FAFC',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img style={{ height: '190px', width: '100%', objectFit: 'contain' }} src={asset('/img/flag.webp')} alt="Флаг болельщика 1,5 м" />
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '17px', fontWeight: '700' }}>Флаг болельщика 1,5 м</span>
                  <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '24px', fontWeight: '600', color: '#0B7DB0' }}>4 990 ₸</span>
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
