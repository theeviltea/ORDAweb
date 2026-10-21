'use client';

/* Сгенерировано из дизайн-макета ORDA (canvas). Разметка повторяет макет 1:1. */
import { Fragment } from 'react';
import Link from 'next/link';
import { asset } from '@/lib/asset';
import { Icon } from '@/components/Icon';
import { Star } from '@/components/Star';
import { useDC } from '@/lib/dc';
import { vals, tick } from './Product.vals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ProductView(props: {}) {
  const self = useDC(props, tick);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const v: any = vals(self);
  return (
    <>
      <div style={{ width: '100%', background: '#172A51', paddingBottom: '1px', fontFamily: "'Roboto Condensed', sans-serif", color: '#172A51' }}>
        <section style={{ position: 'relative', overflow: 'hidden', padding: '32px 0 32px' }} aria-label="Товар">
          <Star w={220} h={360} fill="rgba(18, 158, 217, 0.12)" style={{ position: 'absolute', right: '-60px', top: '-120px' }} />
          <Star w={18} h={18} fill="#129ED9" style={{ position: 'absolute', left: '58%', top: '34px' }} />
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
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
                  flexWrap: 'wrap',
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
                <Link style={{ color: '#7FA3C9', textDecoration: 'none' }} href="/shop">
                  Форма
                </Link>
                <Icon name="arrow-right-01" size={14} weight={2} color="#7FA3C9" />
                <span style={{ color: '#CFE3F2' }}>Домашняя джерси 2024/25</span>
              </nav>
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
          style={{ position: 'relative', margin: '0 max(24px, calc((100% - 1280px) / 2)) 40px', borderRadius: '32px', overflow: 'hidden', background: '#FFFFFF', padding: '56px 0' }}
          aria-label="Товар"
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
            <div style={{ display: 'flex', gap: '48px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div style={{ flex: '1.15 1 560px', display: 'flex', gap: '16px', minWidth: '0' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <button
                    style={{
                      position: 'relative',
                      width: '96px',
                      height: '96px',
                      padding: '0',
                      borderRadius: '18px',
                      border: `2px solid ${v.t0.border}`,
                      background: '#F2F6FA',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      flexShrink: '0',
                    }}
                    type="button"
                    aria-label="Фото 1"
                    onClick={v.t0.pick}
                  >
                    <img
                      style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '8px', boxSizing: 'border-box' }}
                      src={asset('/img/jersey.webp')}
                      alt=""
                    />
                  </button>
                  <button
                    style={{
                      position: 'relative',
                      width: '96px',
                      height: '96px',
                      padding: '0',
                      borderRadius: '18px',
                      border: `2px solid ${v.t1.border}`,
                      background: '#F2F6FA',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      flexShrink: '0',
                    }}
                    type="button"
                    aria-label="Фото 2"
                    onClick={v.t1.pick}
                  >
                    <span style={{ position: 'absolute', inset: '0', overflow: 'hidden' }}>
                      <img
                        style={{ position: 'absolute', left: '-95%', top: '-38%', width: '300%', height: 'auto', maxWidth: 'none' }}
                        src={asset('/img/jersey.webp')}
                        alt=""
                      />
                    </span>
                  </button>
                  <button
                    style={{
                      position: 'relative',
                      width: '96px',
                      height: '96px',
                      padding: '0',
                      borderRadius: '18px',
                      border: `2px solid ${v.t2.border}`,
                      background: '#F2F6FA',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      flexShrink: '0',
                    }}
                    type="button"
                    aria-label="Фото 3"
                    onClick={v.t2.pick}
                  >
                    <span style={{ position: 'absolute', inset: '0', overflow: 'hidden', background: 'linear-gradient(180deg, #172A51 0%, #129ED9 100%)' }}>
                      <img
                        style={{
                          position: 'absolute',
                          left: '50%',
                          top: '6px',
                          height: '170%',
                          width: 'auto',
                          maxWidth: 'none',
                          transform: 'translateX(-50%)',
                        }}
                        src={asset('/img/player-astanov.webp')}
                        alt=""
                      />
                    </span>
                  </button>
                  <button
                    style={{
                      position: 'relative',
                      width: '96px',
                      height: '96px',
                      padding: '0',
                      borderRadius: '18px',
                      border: `2px solid ${v.t3.border}`,
                      background: '#F2F6FA',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      flexShrink: '0',
                    }}
                    type="button"
                    aria-label="Фото 4"
                    onClick={v.t3.pick}
                  >
                    <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={asset('/img/news-trio.webp')} alt="" />
                  </button>
                </div>
                <div style={{ position: 'relative', flexGrow: '1', height: '640px', borderRadius: '28px', overflow: 'hidden', background: '#F2F6FA' }}>
                  {v.s0 && (
                    <>
                      <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(160deg, #F2F6FA 0%, #E7F5FB 100%)' }} />
                      <span
                        style={{
                          position: 'absolute',
                          left: '30px',
                          top: '20px',
                          fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                          fontSize: '150px',
                          fontWeight: '700',
                          lineHeight: '0.85',
                          color: '#DCEEF8',
                          whiteSpace: 'pre-line',
                        }}
                        aria-hidden="true"
                      >
                        {'KIT\n2026'}
                      </span>
                      <img
                        style={{
                          position: 'absolute',
                          inset: '0',
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          padding: '40px',
                          boxSizing: 'border-box',
                          filter: 'drop-shadow(0 24px 30px rgba(23, 42, 81, 0.18))',
                        }}
                        src={asset('/img/jersey.webp')}
                        alt="Домашняя джерси, вид спереди"
                      />
                    </>
                  )}
                  {v.s1 && (
                    <>
                      <div style={{ position: 'absolute', inset: '0', background: '#E7F5FB' }} />
                      <img
                        style={{ position: 'absolute', left: '-95%', top: '-38%', width: '300%', height: 'auto', maxWidth: 'none' }}
                        src={asset('/img/jersey.webp')}
                        alt="Вышитый герб крупно"
                      />
                    </>
                  )}
                  {v.s2 && (
                    <>
                      <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg, #172A51 0%, #129ED9 100%)' }} />
                      <Star w={24} h={24} fill="#FFFFFF" style={{ position: 'absolute', left: '40px', top: '50px' }} />
                      <img
                        style={{
                          position: 'absolute',
                          left: '50%',
                          top: '24px',
                          height: '160%',
                          width: 'auto',
                          maxWidth: 'none',
                          transform: 'translateX(-50%)',
                        }}
                        src={asset('/img/player-astanov.webp')}
                        alt="Форма на игроке"
                      />
                    </>
                  )}
                  {v.s3 && (
                    <>
                      <img
                        style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
                        src={asset('/img/news-trio.webp')}
                        alt="Команда в домашней форме"
                      />
                    </>
                  )}
                  <span
                    style={{
                      position: 'absolute',
                      left: '20px',
                      top: '20px',
                      height: '30px',
                      padding: '0 12px',
                      borderRadius: '15px',
                      background: '#172A51',
                      color: '#FFFFFF',
                      fontSize: '13px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    Новое
                  </span>
                  <span
                    style={{
                      position: 'absolute',
                      right: '20px',
                      top: '20px',
                      height: '30px',
                      padding: '0 12px',
                      borderRadius: '15px',
                      background: 'rgba(23, 42, 81, 0.75)',
                      color: '#FFFFFF',
                      fontSize: '13px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {v.photoLabel}
                  </span>
                  <span style={{ position: 'absolute', left: '20px', right: '20px', bottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
                    <button
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '26px',
                        border: '0',
                        background: 'rgba(255, 255, 255, 0.95)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 6px 16px rgba(23, 42, 81, 0.18)',
                      }}
                      type="button"
                      aria-label="Предыдущее фото"
                      onClick={v.prevPhoto}
                    >
                      <Icon name="arrow-left-01" size={22} weight={2} color="#172A51" />
                    </button>
                    <button
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '26px',
                        border: '0',
                        background: '#172A51',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 6px 16px rgba(23, 42, 81, 0.18)',
                      }}
                      type="button"
                      aria-label="Следующее фото"
                      onClick={v.nextPhoto}
                    >
                      <Icon name="arrow-right-01" size={22} weight={2} color="#FFFFFF" />
                    </button>
                  </span>
                </div>
              </div>
              <div style={{ flex: '1 1 440px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '22px', color: '#172A51' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    style={{
                      height: '28px',
                      padding: '0 12px',
                      borderRadius: '14px',
                      background: '#E7F5FB',
                      color: '#0B7DB0',
                      fontSize: '13px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    Форма · сезон 2024/25
                  </span>
                  <span
                    style={{
                      height: '28px',
                      padding: '0 12px',
                      borderRadius: '14px',
                      background: '#E8F5EE',
                      color: '#137040',
                      fontSize: '13px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#137040' }} />В наличии
                  </span>
                  <span style={{ flexGrow: '1' }} />
                  <button
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '22px',
                      border: '0',
                      background: '#F2F6FA',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                    type="button"
                    aria-label="В избранное"
                  >
                    <Icon name="favourite" size={20} weight={1.8} color="#172A51" />
                  </button>
                </span>
                <h1
                  style={{
                    margin: '0',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '56px',
                    fontWeight: '600',
                    lineHeight: '0.95',
                    textTransform: 'uppercase',
                  }}
                >
                  Домашняя джерси 2024/25
                </h1>
                <span style={{ display: 'flex', alignItems: 'baseline', gap: '14px', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '48px', fontWeight: '600', lineHeight: '1', color: '#0B7DB0' }}>
                    {v.priceNow}
                  </span>
                  {v.applied && (
                    <>
                      <span style={{ fontSize: '22px', color: '#8E9BB5', textDecoration: 'line-through' }}>{v.priceOld}</span>
                      <span
                        style={{
                          height: '28px',
                          padding: '0 10px',
                          borderRadius: '14px',
                          background: '#E30512',
                          color: '#FFFFFF',
                          fontSize: '14px',
                          fontWeight: '700',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        −15%
                      </span>
                    </>
                  )}
                </span>
                <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.55', color: '#3F5578' }}>
                  Официальная игровая форма футбольного клуба «Ордабасы» для сезона 2024/25. Технология Dri-FIT эффективно отводит влагу, обеспечивая сухость и
                  комфорт на протяжении всей игры или тренировки.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                    <span style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#172A51' }}>
                      Цвет: {v.colorName}
                    </span>
                  </span>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {v.colors.map((c: any, cIdx: number) => (
                      <Fragment key={cIdx}>
                        <button
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            border: `2px solid ${c.ring}`,
                            padding: '4px',
                            background: '#FFFFFF',
                            cursor: 'pointer',
                          }}
                          type="button"
                          aria-label={c.name}
                          aria-pressed={c.pressed}
                          onClick={c.pick}
                        >
                          <span
                            style={{
                              display: 'block',
                              width: '100%',
                              height: '100%',
                              borderRadius: '50%',
                              background: c.hex,
                              boxShadow: 'inset 0 0 0 1px #DCE3EE',
                            }}
                          />
                        </button>
                      </Fragment>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                    <span style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#172A51' }}>Размер</span>
                    <Link style={{ fontSize: '15px', fontWeight: '700', color: '#0B7DB0', textDecoration: 'none' }} href="/shop/product">
                      Таблица размеров
                    </Link>
                  </span>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {v.sizes.map((s: any, sIdx: number) => (
                      <Fragment key={sIdx}>
                        <button
                          style={{
                            width: '64px',
                            height: '52px',
                            borderRadius: '14px',
                            border: `1.5px solid ${s.border}`,
                            background: s.bg,
                            color: s.fg,
                            fontFamily: 'inherit',
                            fontSize: '16px',
                            fontWeight: '700',
                            cursor: 'pointer',
                          }}
                          type="button"
                          aria-pressed={s.pressed}
                          onClick={s.pick}
                        >
                          {s.label}
                        </button>
                      </Fragment>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                    <span style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#172A51' }}>Промокод</span>
                  </span>
                  {v.notApplied && (
                    <>
                      <span style={{ display: 'flex', gap: '10px' }}>
                        <span
                          style={{
                            flexGrow: '1',
                            height: '52px',
                            padding: '0 16px',
                            borderRadius: '14px',
                            border: '1.5px dashed #C9D6E6',
                            boxSizing: 'border-box',
                            color: '#8E9BB5',
                            fontSize: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                          }}
                        >
                          <Icon name="discount-tag-01" size={20} weight={1.7} color="#8E9BB5" />
                          Введите промокод
                        </span>
                        <button
                          style={{
                            height: '52px',
                            padding: '0 20px',
                            borderRadius: '14px',
                            border: '0',
                            background: '#E7F5FB',
                            color: '#0B7DB0',
                            fontFamily: 'inherit',
                            fontSize: '16px',
                            fontWeight: '700',
                            cursor: 'pointer',
                          }}
                          type="button"
                          onClick={v.apply}
                        >
                          Применить ORDA15
                        </button>
                      </span>
                    </>
                  )}
                  {v.applied && (
                    <>
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          height: '52px',
                          padding: '0 16px',
                          borderRadius: '14px',
                          background: '#E8F5EE',
                          color: '#137040',
                          fontSize: '16px',
                          fontWeight: '700',
                        }}
                      >
                        <Icon name="checkmark-circle-02" size={20} weight={2} color="#137040" />
                        <span style={{ flexGrow: '1' }}>Промокод ORDA15 применён · −15%</span>
                        <button
                          style={{
                            border: '0',
                            background: 'transparent',
                            color: '#137040',
                            fontFamily: 'inherit',
                            fontSize: '15px',
                            fontWeight: '700',
                            textDecoration: 'underline',
                            cursor: 'pointer',
                          }}
                          type="button"
                          onClick={v.remove}
                        >
                          Убрать
                        </button>
                      </span>
                    </>
                  )}
                </div>
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '20px', borderRadius: '22px', background: '#F2F6FA', flexWrap: 'wrap' }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', height: '52px', borderRadius: '14px', background: '#F2F6FA' }}>
                    <button
                      style={{
                        width: '52px',
                        height: '52px',
                        border: '0',
                        background: 'transparent',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      type="button"
                      aria-label="Меньше"
                      onClick={v.dec}
                    >
                      <Icon name="minus-sign" size={20} weight={2} color="#172A51" />
                    </button>
                    <span
                      style={{ minWidth: '36px', textAlign: 'center', fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '24px', fontWeight: '600' }}
                    >
                      {v.qty}
                    </span>
                    <button
                      style={{
                        width: '52px',
                        height: '52px',
                        border: '0',
                        background: 'transparent',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      type="button"
                      aria-label="Больше"
                      onClick={v.inc}
                    >
                      <Icon name="add-01" size={20} weight={2} color="#172A51" />
                    </button>
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: '1', minWidth: '120px' }}>
                    <span style={{ fontSize: '14px', color: '#5B6B8C' }}>{v.summary}</span>
                    <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '30px', fontWeight: '600', lineHeight: '1' }}>{v.total}</span>
                  </span>
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
                    href="/shop/orders"
                  >
                    <Icon name="shopping-bag-02" size={20} weight={1.8} color="#FFFFFF" />В корзину
                  </Link>
                </div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <span style={{ flex: '1 1 150px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#5B6B8C' }}>
                    <span
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '12px',
                        background: '#E7F5FB',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: '0',
                      }}
                    >
                      <Icon name="delivery-truck-01" size={20} weight={1.7} color="#129ED9" />
                    </span>
                    Доставка по Казахстану
                  </span>
                  <span style={{ flex: '1 1 150px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#5B6B8C' }}>
                    <span
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '12px',
                        background: '#E7F5FB',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: '0',
                      }}
                    >
                      <Icon name="store-01" size={20} weight={1.7} color="#129ED9" />
                    </span>
                    Самовывоз из фан-шопа
                  </span>
                  <span style={{ flex: '1 1 150px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#5B6B8C' }}>
                    <span
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '12px',
                        background: '#E7F5FB',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: '0',
                      }}
                    >
                      <Icon name="arrow-reload-horizontal" size={20} weight={1.7} color="#129ED9" />
                    </span>
                    Возврат 14 дней
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          style={{ position: 'relative', margin: '0 max(24px, calc((100% - 1280px) / 2)) 40px', borderRadius: '32px', overflow: 'hidden', background: '#FFFFFF', padding: '56px 0' }}
          aria-label="О товаре"
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
                О товаре
              </h2>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }} role="tablist" aria-label="О товаре">
                {v.tabs.map((t: any, tIdx: number) => (
                  <Fragment key={tIdx}>
                    <button
                      style={{
                        height: '48px',
                        padding: '0 22px',
                        borderRadius: '24px',
                        border: '0',
                        background: t.bg,
                        color: t.fg,
                        fontFamily: 'inherit',
                        fontSize: '17px',
                        fontWeight: t.w,
                        cursor: 'pointer',
                      }}
                      type="button"
                      role="tab"
                      aria-selected={t.sel}
                      onClick={t.pick}
                    >
                      {t.label}
                    </button>
                  </Fragment>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', alignItems: 'flex-start', color: '#172A51' }}>
              <div style={{ flex: '1.3 1 480px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '30px', fontWeight: '600', textTransform: 'uppercase' }}>
                  {v.sec.title}
                </span>
                <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.6', color: '#3F5578' }}>{v.sec.body}</p>
              </div>
              <div style={{ flex: '1 1 360px', display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '12px' }}>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '20px 22px', borderRadius: '20px', background: '#F2F6FA' }}>
                  <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Сезон</span>
                  <span style={{ fontSize: '18px', fontWeight: '700' }}>2024/25</span>
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '20px 22px', borderRadius: '20px', background: '#F2F6FA' }}>
                  <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Версия</span>
                  <span style={{ fontSize: '18px', fontWeight: '700' }}>Игровая</span>
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '20px 22px', borderRadius: '20px', background: '#F2F6FA' }}>
                  <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Герб</span>
                  <span style={{ fontSize: '18px', fontWeight: '700' }}>Вышитый</span>
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '20px 22px', borderRadius: '20px', background: '#F2F6FA' }}>
                  <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Нумерация</span>
                  <span style={{ fontSize: '18px', fontWeight: '700' }}>По запросу</span>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section
          style={{ position: 'relative', margin: '0 max(24px, calc((100% - 1280px) / 2)) 40px', borderRadius: '32px', overflow: 'hidden', background: '#E7F5FB', padding: '56px 0' }}
          aria-label="Похожие товары"
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
                Похожие товары
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
