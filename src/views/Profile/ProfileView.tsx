'use client';

/* Сгенерировано из дизайн-макета ORDA (canvas). Разметка повторяет макет 1:1. */
import { Fragment } from 'react';
import Link from 'next/link';
import { asset } from '@/lib/asset';
import { Icon } from '@/components/Icon';
import { Star } from '@/components/Star';
import { useDC } from '@/lib/dc';
import { vals, tick } from './Profile.vals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ProfileView(props: {}) {
  const self = useDC(props, tick);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const v: any = vals(self);
  return (
    <>
      <div style={{ width: '100%', background: '#172A51', paddingBottom: '1px', fontFamily: "'Roboto Condensed', sans-serif", color: '#172A51' }}>
        <section style={{ position: 'relative', overflow: 'hidden', padding: '48px 0 44px' }} aria-label="Личный кабинет">
          <Star w={220} h={360} fill="rgba(18, 158, 217, 0.12)" style={{ position: 'absolute', right: '-60px', top: '-80px' }} />
          <Star w={24} h={24} fill="#129ED9" style={{ position: 'absolute', left: '46%', top: '54px' }} />
          <Star w={12} h={12} fill="#FFFFFF" style={{ position: 'absolute', left: '62%', top: '140px' }} />
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
            <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 560px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
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
                  <span style={{ color: '#CFE3F2' }}>Личный кабинет</span>
                </nav>
                <div style={{ display: 'flex', alignItems: 'center', gap: '28px', flexWrap: 'wrap' }}>
                  <span style={{ position: 'relative', flexShrink: '0', width: '132px', height: '132px' }}>
                    <span
                      style={{
                        position: 'absolute',
                        inset: '0',
                        borderRadius: '50%',
                        padding: '4px',
                        boxSizing: 'border-box',
                        background: '#FFFFFF',
                        display: 'flex',
                      }}
                    >
                      <img style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} src={asset('/img/avatar.webp')} alt="Бекжан" />
                    </span>
                    <span
                      style={{
                        position: 'absolute',
                        right: '2px',
                        bottom: '6px',
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: '#0B7DB0',
                        border: '4px solid #172A51',
                        boxSizing: 'border-box',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      title="Подтверждённый профиль"
                    >
                      <Icon name="tick-02" size={16} weight={2.6} color="#FFFFFF" />
                    </span>
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h1
                      style={{
                        margin: '0',
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '72px',
                        fontWeight: '600',
                        lineHeight: '0.92',
                        textTransform: 'uppercase',
                        color: '#FFFFFF',
                      }}
                    >
                      Бекжан Садыков
                    </h1>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', fontSize: '16px', color: '#CFE3F2' }}>
                      <span
                        style={{
                          height: '30px',
                          padding: '0 12px',
                          borderRadius: '15px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          fontWeight: '700',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        ORDA ID 004 217
                      </span>
                      Болельщик с 2019
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#7CC6E9' }} />
                      Шымкент
                    </span>
                  </span>
                </div>
              </div>
              <button
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  flex: '0 1 440px',
                  padding: '26px 28px',
                  border: '0',
                  fontFamily: 'inherit',
                  textAlign: 'left',
                  cursor: 'pointer',
                  borderRadius: '28px',
                  background: 'linear-gradient(140deg, #1B5A93 0%, #129ED9 100%)',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
                type="button"
                onClick={v.goAch}
              >
                <span
                  style={{
                    position: 'absolute',
                    right: '-6px',
                    top: '-16px',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '110px',
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
                    style={{ width: '52px', height: '52px', filter: 'drop-shadow(0 6px 10px rgba(10, 18, 36, 0.3))' }}
                    src={asset('/img/coin.webp')}
                    alt=""
                  />
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '46px', fontWeight: '600', lineHeight: '1' }}>2 480</span>
                    <span style={{ fontSize: '15px', color: '#E7F5FB' }}>баллов · уровень 21 «Болельщик»</span>
                  </span>
                </span>
                <span style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ height: '10px', borderRadius: '5px', background: 'rgba(255, 255, 255, 0.25)', overflow: 'hidden' }}>
                    <span style={{ display: 'block', width: '78%', height: '10px', borderRadius: '5px', background: '#FFFFFF' }} />
                  </span>
                  <span style={{ fontSize: '14px', color: '#E7F5FB' }}>ещё 520 до «Легенды»</span>
                </span>
              </button>
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
          aria-label="Кабинет"
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
              <aside style={{ flex: '1 1 260px', maxWidth: '290px', display: 'flex', flexDirection: 'column', gap: '6px' }} aria-label="Разделы кабинета">
                {v.nav.map((n: any, nIdx: number) => (
                  <Fragment key={nIdx}>
                    <button
                      style={{
                        height: '56px',
                        padding: '0 16px',
                        borderRadius: '16px',
                        border: '0',
                        background: n.bg,
                        color: n.fg,
                        fontFamily: 'inherit',
                        fontSize: '17px',
                        fontWeight: n.w,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                      type="button"
                      onClick={n.pick}
                      aria-current={n.current}
                    >
                      <span
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '11px',
                          background: n.iconBg,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon name={n.icon} size={20} weight={1.7} color={n.iconFg} />
                      </span>
                      <span style={{ flexGrow: '1' }}>{n.label}</span>
                      <span style={{ fontSize: '14px', fontWeight: '700', color: n.badgeFg }}>{n.badge}</span>
                    </button>
                  </Fragment>
                ))}
                <span style={{ height: '1px', background: '#EEF3F8', margin: '10px 0' }} />
                <Link
                  style={{
                    height: '52px',
                    padding: '0 16px',
                    borderRadius: '16px',
                    color: '#172A51',
                    fontSize: '16px',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    textDecoration: 'none',
                  }}
                  href="/profile"
                >
                  <span
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '11px',
                      background: '#F2F6FA',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon name="customer-support" size={20} weight={1.7} color="#172A51" />
                  </span>
                  Центр поддержки
                </Link>
                <Link
                  style={{
                    height: '52px',
                    padding: '0 16px',
                    borderRadius: '16px',
                    color: '#C8040F',
                    fontSize: '16px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    textDecoration: 'none',
                  }}
                  href="/profile"
                >
                  <span
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '11px',
                      background: '#FDECEE',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon name="logout-01" size={20} weight={1.8} color="#C8040F" />
                  </span>
                  Выйти из аккаунта
                </Link>
              </aside>
              <div style={{ flex: '999 1 560px', minWidth: '0', color: '#172A51' }}>
                {v.is_overview && (
                  <>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
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
                          Ближайший матч
                        </h3>
                        <button
                          style={{
                            border: '0',
                            background: 'transparent',
                            padding: '0',
                            minHeight: '40px',
                            color: '#0B7DB0',
                            fontFamily: 'inherit',
                            fontSize: '16px',
                            fontWeight: '700',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            cursor: 'pointer',
                          }}
                          type="button"
                          onClick={v.goTickets}
                        >
                          Все билеты
                          <Icon name="arrow-right-01" size={18} weight={2} color="#0B7DB0" />
                        </button>
                      </div>
                      <article
                        style={{
                          display: 'flex',
                          borderRadius: '26px',
                          overflow: 'hidden',
                          background: '#FFFFFF',
                          boxShadow: '0 6px 24px rgba(23, 42, 81, 0.1)',
                          flexWrap: 'wrap',
                        }}
                      >
                        <div
                          style={{
                            position: 'relative',
                            overflow: 'hidden',
                            flex: '1.4 1 380px',
                            padding: '28px',
                            background: 'linear-gradient(140deg, #172A51 0%, #129ED9 100%)',
                            color: '#FFFFFF',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '22px',
                          }}
                        >
                          <span
                            style={{
                              position: 'absolute',
                              left: '10px',
                              top: '-10px',
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
                          </span>
                          <Star w={14} h={14} fill="#7CC6E9" style={{ position: 'absolute', right: '30px', top: '26px' }} />
                          <span style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                            <span style={{ fontSize: '15px', color: '#CFE3F2' }}>Премьер-лига · 25 тур</span>
                            <span
                              style={{
                                height: '28px',
                                padding: '0 12px',
                                borderRadius: '14px',
                                background: '#FFFFFF',
                                color: '#172A51',
                                fontSize: '13px',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              Через 4 дня
                            </span>
                          </span>
                          <span style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: '12px' }}>
                            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
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
                                <img style={{ width: '42px', height: '52px', objectFit: 'contain' }} src={asset('/img/crest.png')} alt="" />
                              </span>
                              <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '20px', fontWeight: '600' }}>ORDA</span>
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                              <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '48px', fontWeight: '600', lineHeight: '1' }}>
                                19:00
                              </span>
                              <span style={{ fontSize: '15px', color: '#CFE3F2' }}>Сб, 25 октября</span>
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
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
                                <img style={{ width: '46px', height: '52px', objectFit: 'contain' }} src={asset('/img/club-kairat.webp')} alt="" />
                              </span>
                              <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '20px', fontWeight: '600' }}>КАЙРАТ</span>
                            </span>
                          </span>
                        </div>
                        <div style={{ position: 'relative', width: '0', borderLeft: '2px dashed #DCE3EE' }}>
                          <span
                            style={{
                              position: 'absolute',
                              left: '-14px',
                              top: '-14px',
                              width: '26px',
                              height: '26px',
                              borderRadius: '50%',
                              background: '#FFFFFF',
                            }}
                            aria-hidden="true"
                          />
                          <span
                            style={{
                              position: 'absolute',
                              left: '-14px',
                              bottom: '-14px',
                              width: '26px',
                              height: '26px',
                              borderRadius: '50%',
                              background: '#FFFFFF',
                            }}
                            aria-hidden="true"
                          />
                        </div>
                        <div style={{ flex: '1 1 300px', padding: '26px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                          <span style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '10px' }}>
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                              <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#5B6B8C' }}>
                                Сектор
                              </span>
                              <span style={{ fontSize: '18px', fontWeight: '700' }}>Юг · фан</span>
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                              <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#5B6B8C' }}>
                                Ряд
                              </span>
                              <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '26px', fontWeight: '600', lineHeight: '1' }}>4</span>
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                              <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#5B6B8C' }}>
                                Места
                              </span>
                              <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '26px', fontWeight: '600', lineHeight: '1' }}>
                                12, 13
                              </span>
                            </span>
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', color: '#5B6B8C' }}>
                            <Icon name="location-01" size={18} weight={1.6} color="#5B6B8C" />
                            Стадион им. К. Мунайтпасова · вход с 17:30
                          </span>
                          <span style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px' }}>
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                              <span style={{ color: '#5B6B8C' }}>Владелец</span>
                              <span style={{ fontWeight: '700' }}>Бекжан Садыков</span>
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', textAlign: 'right' }}>
                              <span style={{ color: '#5B6B8C' }}>Заказ</span>
                              <span style={{ fontWeight: '700' }}>№ 1264</span>
                            </span>
                          </span>
                          <span style={{ marginTop: 'auto', display: 'flex', gap: '10px' }}>
                            <Link
                              style={{
                                flexGrow: '1',
                                height: '52px',
                                borderRadius: '16px',
                                background: '#0B7DB0',
                                color: '#FFFFFF',
                                fontSize: '17px',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                textDecoration: 'none',
                              }}
                              href="/profile"
                            >
                              <Icon name="qr-code" size={20} weight={1.8} color="#FFFFFF" />
                              Показать QR-код
                            </Link>
                            <button
                              style={{
                                width: '52px',
                                height: '52px',
                                borderRadius: '16px',
                                border: '0',
                                background: '#E7F5FB',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                              }}
                              type="button"
                              aria-label="Передать билет"
                            >
                              <Icon name="share-08" size={20} weight={1.8} color="#0B7DB0" />
                            </button>
                          </span>
                        </div>
                      </article>
                      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        <Link
                          style={{
                            flex: '1 1 160px',
                            padding: '20px',
                            borderRadius: '20px',
                            background: '#0B7DB0',
                            color: '#FFFFFF',
                            textDecoration: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                          }}
                          href="/matches"
                        >
                          <span
                            style={{
                              width: '44px',
                              height: '44px',
                              borderRadius: '13px',
                              background: 'rgba(255, 255, 255, 0.16)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Icon name="ticket-01" size={22} weight={1.7} color="#FFFFFF" />
                          </span>
                          <span style={{ fontSize: '17px', fontWeight: '700' }}>Купить билеты</span>
                        </Link>
                        <Link
                          style={{
                            flex: '1 1 160px',
                            padding: '20px',
                            borderRadius: '20px',
                            background: '#E7F5FB',
                            color: '#172A51',
                            textDecoration: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                          }}
                          href="/shop"
                        >
                          <span
                            style={{
                              width: '44px',
                              height: '44px',
                              borderRadius: '13px',
                              background: '#FFFFFF',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Icon name="shopping-bag-02" size={22} weight={1.7} color="#129ED9" />
                          </span>
                          <span style={{ fontSize: '17px', fontWeight: '700' }}>Клубный магазин</span>
                        </Link>
                        <Link
                          style={{
                            flex: '1 1 160px',
                            padding: '20px',
                            borderRadius: '20px',
                            background: '#E7F5FB',
                            color: '#172A51',
                            textDecoration: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                          }}
                          href="/fans"
                        >
                          <span
                            style={{
                              width: '44px',
                              height: '44px',
                              borderRadius: '13px',
                              background: '#FFFFFF',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Icon name="star" size={22} weight={1.7} color="#129ED9" />
                          </span>
                          <span style={{ fontSize: '17px', fontWeight: '700' }}>Фан-зона</span>
                        </Link>
                        <Link
                          style={{
                            flex: '1 1 160px',
                            padding: '20px',
                            borderRadius: '20px',
                            background: '#E7F5FB',
                            color: '#172A51',
                            textDecoration: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                          }}
                          href="/profile"
                        >
                          <span
                            style={{
                              width: '44px',
                              height: '44px',
                              borderRadius: '13px',
                              background: '#FFFFFF',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Icon name="gift" size={22} weight={1.7} color="#129ED9" />
                          </span>
                          <span style={{ fontSize: '17px', fontWeight: '700' }}>Обменять баллы</span>
                        </Link>
                      </div>
                      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                        <div style={{ flex: '1 1 380px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
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
                              Покупки
                            </h3>
                            <button
                              style={{
                                border: '0',
                                background: 'transparent',
                                padding: '0',
                                minHeight: '40px',
                                color: '#0B7DB0',
                                fontFamily: 'inherit',
                                fontSize: '16px',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                                cursor: 'pointer',
                              }}
                              type="button"
                              onClick={v.goOrders}
                            >
                              Все
                              <Icon name="arrow-right-01" size={18} weight={2} color="#0B7DB0" />
                            </button>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px', borderRadius: '18px', background: '#F2F6FA' }}>
                            <span
                              style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '14px',
                                background: '#FFFFFF',
                                overflow: 'hidden',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <img
                                style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px', boxSizing: 'border-box' }}
                                src={asset('/img/mug.webp')}
                                alt=""
                              />
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: '1', minWidth: '0' }}>
                              <span style={{ fontSize: '16px', fontWeight: '700' }}>Заказ № 0973</span>
                              <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Кружка, флаг · 6 490 ₸</span>
                            </span>
                            <span
                              style={{
                                height: '26px',
                                padding: '0 10px',
                                borderRadius: '13px',
                                background: '#E3EAF3',
                                color: '#5B6B8C',
                                fontSize: '12px',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              В обработке
                            </span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px', borderRadius: '18px', background: '#F2F6FA' }}>
                            <span
                              style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '14px',
                                background: '#FFFFFF',
                                overflow: 'hidden',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <img
                                style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px', boxSizing: 'border-box' }}
                                src={asset('/img/jersey.webp')}
                                alt=""
                              />
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: '1', minWidth: '0' }}>
                              <span style={{ fontSize: '16px', fontWeight: '700' }}>Заказ № 1048</span>
                              <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Домашняя джерси · 24 990 ₸</span>
                            </span>
                            <span
                              style={{
                                height: '26px',
                                padding: '0 10px',
                                borderRadius: '13px',
                                background: '#E8F5EE',
                                color: '#137040',
                                fontSize: '12px',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              Доставлен
                            </span>
                          </div>
                        </div>
                        <div style={{ flex: '1 1 380px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
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
                              Значки
                            </h3>
                            <button
                              style={{
                                border: '0',
                                background: 'transparent',
                                padding: '0',
                                minHeight: '40px',
                                color: '#0B7DB0',
                                fontFamily: 'inherit',
                                fontSize: '16px',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                                cursor: 'pointer',
                              }}
                              type="button"
                              onClick={v.goAch}
                            >
                              Все
                              <Icon name="arrow-right-01" size={18} weight={2} color="#0B7DB0" />
                            </button>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '10px' }}>
                            <span
                              style={{
                                aspectRatio: '1 / 1',
                                borderRadius: '20px',
                                background: 'linear-gradient(160deg, #172A51 0%, #129ED9 100%)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '6px',
                                padding: '8px',
                                boxSizing: 'border-box',
                                textAlign: 'center',
                              }}
                              title="Первый свисток"
                            >
                              <Icon name="whistle" size={28} weight={1.7} color="#FFFFFF" />
                              <span style={{ fontSize: '12px', fontWeight: '700', color: '#FFFFFF' }}>Первый свисток</span>
                            </span>
                            <span
                              style={{
                                aspectRatio: '1 / 1',
                                borderRadius: '20px',
                                background: 'linear-gradient(160deg, #172A51 0%, #129ED9 100%)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '6px',
                                padding: '8px',
                                boxSizing: 'border-box',
                                textAlign: 'center',
                              }}
                              title="Прогнозист"
                            >
                              <Icon name="football" size={28} weight={1.7} color="#FFFFFF" />
                              <span style={{ fontSize: '12px', fontWeight: '700', color: '#FFFFFF' }}>Прогнозист</span>
                            </span>
                            <span
                              style={{
                                aspectRatio: '1 / 1',
                                borderRadius: '20px',
                                background: 'linear-gradient(160deg, #172A51 0%, #129ED9 100%)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '6px',
                                padding: '8px',
                                boxSizing: 'border-box',
                                textAlign: 'center',
                              }}
                              title="Квиз-мастер"
                            >
                              <Icon name="quiz-02" size={28} weight={1.7} color="#FFFFFF" />
                              <span style={{ fontSize: '12px', fontWeight: '700', color: '#FFFFFF' }}>Квиз-мастер</span>
                            </span>
                            <span
                              style={{
                                aspectRatio: '1 / 1',
                                borderRadius: '20px',
                                background: '#EEF3F8',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '6px',
                                padding: '8px',
                                boxSizing: 'border-box',
                                textAlign: 'center',
                              }}
                              title="Легенда"
                            >
                              <Icon name="lock" size={28} weight={1.7} color="#A9B6C9" />
                              <span style={{ fontSize: '12px', fontWeight: '700', color: '#5B6B8C' }}>Легенда</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {v.is_tickets && (
                  <>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
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
                          Мои билеты
                        </h3>
                        <span style={{ display: 'flex', gap: '8px' }}>
                          <button
                            style={{
                              height: '44px',
                              padding: '0 18px',
                              borderRadius: '22px',
                              background: '#172A51',
                              color: '#FFFFFF',
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
                            type="button"
                          >
                            Активные · 1
                          </button>
                          <button
                            style={{
                              height: '44px',
                              padding: '0 18px',
                              borderRadius: '22px',
                              background: '#E3EAF3',
                              color: '#172A51',
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
                            type="button"
                          >
                            Прошедшие · 3
                          </button>
                        </span>
                      </div>
                      <article
                        style={{
                          display: 'flex',
                          borderRadius: '26px',
                          overflow: 'hidden',
                          background: '#FFFFFF',
                          boxShadow: '0 6px 24px rgba(23, 42, 81, 0.1)',
                          flexWrap: 'wrap',
                        }}
                      >
                        <div
                          style={{
                            position: 'relative',
                            overflow: 'hidden',
                            flex: '1.4 1 380px',
                            padding: '28px',
                            background: 'linear-gradient(140deg, #172A51 0%, #129ED9 100%)',
                            color: '#FFFFFF',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '22px',
                          }}
                        >
                          <span
                            style={{
                              position: 'absolute',
                              left: '10px',
                              top: '-10px',
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
                          </span>
                          <Star w={14} h={14} fill="#7CC6E9" style={{ position: 'absolute', right: '30px', top: '26px' }} />
                          <span style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                            <span style={{ fontSize: '15px', color: '#CFE3F2' }}>Премьер-лига · 25 тур</span>
                            <span
                              style={{
                                height: '28px',
                                padding: '0 12px',
                                borderRadius: '14px',
                                background: '#FFFFFF',
                                color: '#172A51',
                                fontSize: '13px',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              Через 4 дня
                            </span>
                          </span>
                          <span style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: '12px' }}>
                            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
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
                                <img style={{ width: '42px', height: '52px', objectFit: 'contain' }} src={asset('/img/crest.png')} alt="" />
                              </span>
                              <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '20px', fontWeight: '600' }}>ORDA</span>
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                              <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '48px', fontWeight: '600', lineHeight: '1' }}>
                                19:00
                              </span>
                              <span style={{ fontSize: '15px', color: '#CFE3F2' }}>Сб, 25 октября</span>
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
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
                                <img style={{ width: '46px', height: '52px', objectFit: 'contain' }} src={asset('/img/club-kairat.webp')} alt="" />
                              </span>
                              <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '20px', fontWeight: '600' }}>КАЙРАТ</span>
                            </span>
                          </span>
                        </div>
                        <div style={{ position: 'relative', width: '0', borderLeft: '2px dashed #DCE3EE' }}>
                          <span
                            style={{
                              position: 'absolute',
                              left: '-14px',
                              top: '-14px',
                              width: '26px',
                              height: '26px',
                              borderRadius: '50%',
                              background: '#FFFFFF',
                            }}
                            aria-hidden="true"
                          />
                          <span
                            style={{
                              position: 'absolute',
                              left: '-14px',
                              bottom: '-14px',
                              width: '26px',
                              height: '26px',
                              borderRadius: '50%',
                              background: '#FFFFFF',
                            }}
                            aria-hidden="true"
                          />
                        </div>
                        <div style={{ flex: '1 1 300px', padding: '26px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                          <span style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '10px' }}>
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                              <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#5B6B8C' }}>
                                Сектор
                              </span>
                              <span style={{ fontSize: '18px', fontWeight: '700' }}>Юг · фан</span>
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                              <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#5B6B8C' }}>
                                Ряд
                              </span>
                              <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '26px', fontWeight: '600', lineHeight: '1' }}>4</span>
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                              <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#5B6B8C' }}>
                                Места
                              </span>
                              <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '26px', fontWeight: '600', lineHeight: '1' }}>
                                12, 13
                              </span>
                            </span>
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', color: '#5B6B8C' }}>
                            <Icon name="location-01" size={18} weight={1.6} color="#5B6B8C" />
                            Стадион им. К. Мунайтпасова · вход с 17:30
                          </span>
                          <span style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px' }}>
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                              <span style={{ color: '#5B6B8C' }}>Владелец</span>
                              <span style={{ fontWeight: '700' }}>Бекжан Садыков</span>
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', textAlign: 'right' }}>
                              <span style={{ color: '#5B6B8C' }}>Заказ</span>
                              <span style={{ fontWeight: '700' }}>№ 1264</span>
                            </span>
                          </span>
                          <span style={{ marginTop: 'auto', display: 'flex', gap: '10px' }}>
                            <Link
                              style={{
                                flexGrow: '1',
                                height: '52px',
                                borderRadius: '16px',
                                background: '#0B7DB0',
                                color: '#FFFFFF',
                                fontSize: '17px',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                textDecoration: 'none',
                              }}
                              href="/profile"
                            >
                              <Icon name="qr-code" size={20} weight={1.8} color="#FFFFFF" />
                              Показать QR-код
                            </Link>
                            <button
                              style={{
                                width: '52px',
                                height: '52px',
                                borderRadius: '16px',
                                border: '0',
                                background: '#E7F5FB',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                              }}
                              type="button"
                              aria-label="Передать билет"
                            >
                              <Icon name="share-08" size={20} weight={1.8} color="#0B7DB0" />
                            </button>
                          </span>
                        </div>
                      </article>
                      <div
                        style={{
                          padding: '16px 18px',
                          borderRadius: '18px',
                          background: '#E7F5FB',
                          color: '#0B7DB0',
                          display: 'flex',
                          gap: '12px',
                          fontSize: '15px',
                          lineHeight: '1.4',
                        }}
                      >
                        <Icon name="information-circle" size={22} weight={1.8} color="#0B7DB0" />
                        <span>Покажите QR-код на входе. Билет можно передать другу — он придёт ему в приложение.</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
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
                          Прошедшие матчи
                        </h3>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', borderRadius: '20px', background: '#F2F6FA' }}>
                          <span
                            style={{
                              width: '52px',
                              height: '52px',
                              borderRadius: '50%',
                              background: '#FFFFFF',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '15px', color: '#5B6B8C' }}>ЕЛ</span>
                          </span>
                          <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: '1' }}>
                            <span style={{ fontSize: '18px', fontWeight: '700' }}>ORDA — Елимай</span>
                            <span style={{ fontSize: '14px', color: '#5B6B8C' }}>19 октября · билет использован</span>
                          </span>
                          <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '28px', fontWeight: '600' }}>3 : 1</span>
                          <span
                            style={{
                              height: '30px',
                              padding: '0 12px',
                              borderRadius: '15px',
                              background: '#0B7DB0',
                              color: '#FFFFFF',
                              fontSize: '13px',
                              fontWeight: '700',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            Победа
                          </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', borderRadius: '20px', background: '#F2F6FA' }}>
                          <span
                            style={{
                              width: '52px',
                              height: '52px',
                              borderRadius: '50%',
                              background: '#FFFFFF',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '15px', color: '#5B6B8C' }}>ЖЕ</span>
                          </span>
                          <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: '1' }}>
                            <span style={{ fontSize: '18px', fontWeight: '700' }}>ORDA — Жетысу</span>
                            <span style={{ fontSize: '14px', color: '#5B6B8C' }}>28 сентября · билет использован</span>
                          </span>
                          <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '28px', fontWeight: '600' }}>2 : 0</span>
                          <span
                            style={{
                              height: '30px',
                              padding: '0 12px',
                              borderRadius: '15px',
                              background: '#0B7DB0',
                              color: '#FFFFFF',
                              fontSize: '13px',
                              fontWeight: '700',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            Победа
                          </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', borderRadius: '20px', background: '#F2F6FA' }}>
                          <span
                            style={{
                              width: '52px',
                              height: '52px',
                              borderRadius: '50%',
                              background: '#FFFFFF',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <img style={{ width: '30px', height: '34px', objectFit: 'contain' }} src={asset('/img/club-tobyl.webp')} alt="" />
                          </span>
                          <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: '1' }}>
                            <span style={{ fontSize: '18px', fontWeight: '700' }}>ORDA — Тобыл</span>
                            <span style={{ fontSize: '14px', color: '#5B6B8C' }}>24 августа · билет использован</span>
                          </span>
                          <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '28px', fontWeight: '600' }}>1 : 1</span>
                          <span
                            style={{
                              height: '30px',
                              padding: '0 12px',
                              borderRadius: '15px',
                              background: '#E3EAF3',
                              color: '#172A51',
                              fontSize: '13px',
                              fontWeight: '700',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            Ничья
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {v.is_orders && (
                  <>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
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
                          История покупок
                        </h3>
                        <span style={{ display: 'flex', gap: '8px' }}>
                          <button
                            style={{
                              height: '44px',
                              padding: '0 18px',
                              borderRadius: '22px',
                              background: '#172A51',
                              color: '#FFFFFF',
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
                            type="button"
                          >
                            Все
                          </button>
                          <button
                            style={{
                              height: '44px',
                              padding: '0 18px',
                              borderRadius: '22px',
                              background: '#E3EAF3',
                              color: '#172A51',
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
                            type="button"
                          >
                            Магазин
                          </button>
                          <button
                            style={{
                              height: '44px',
                              padding: '0 18px',
                              borderRadius: '22px',
                              background: '#E3EAF3',
                              color: '#172A51',
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
                            type="button"
                          >
                            Билеты
                          </button>
                        </span>
                      </div>
                      <article
                        style={{
                          padding: '22px 24px',
                          borderRadius: '22px',
                          background: '#FFFFFF',
                          border: '1.5px solid #EEF3F8',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '16px',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                          <span style={{ display: 'flex', alignItems: 'baseline', gap: '14px' }}>
                            <span style={{ fontSize: '19px', fontWeight: '700' }}>Заказ № 0973</span>
                            <span style={{ fontSize: '14px', color: '#5B6B8C' }}>1 октября 2026, 14:08</span>
                          </span>
                          <span
                            style={{
                              height: '30px',
                              padding: '0 12px',
                              borderRadius: '15px',
                              background: '#E3EAF3',
                              color: '#5B6B8C',
                              fontSize: '13px',
                              fontWeight: '700',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            В обработке
                          </span>
                        </div>
                        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: '220px' }}>
                            <span
                              style={{
                                flexShrink: '0',
                                width: '64px',
                                height: '64px',
                                borderRadius: '14px',
                                background: '#F2F6FA',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                              }}
                            >
                              <img
                                style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px', boxSizing: 'border-box' }}
                                src={asset('/img/mug.webp')}
                                alt=""
                              />
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                              <span style={{ fontSize: '16px', fontWeight: '700' }}>Кружка ORDA, синяя</span>
                              <span style={{ fontSize: '14px', color: '#5B6B8C' }}>1 шт. · 4 990 ₸</span>
                            </span>
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: '220px' }}>
                            <span
                              style={{
                                flexShrink: '0',
                                width: '64px',
                                height: '64px',
                                borderRadius: '14px',
                                background: '#F2F6FA',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                              }}
                            >
                              <img
                                style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px', boxSizing: 'border-box' }}
                                src={asset('/img/flag.webp')}
                                alt=""
                              />
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                              <span style={{ fontSize: '16px', fontWeight: '700' }}>Флаг клуба</span>
                              <span style={{ fontSize: '14px', color: '#5B6B8C' }}>1 шт. · 1 500 ₸</span>
                            </span>
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '12px',
                            paddingTop: '14px',
                            borderTop: '1px solid #EEF3F8',
                            flexWrap: 'wrap',
                          }}
                        >
                          <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', color: '#5B6B8C' }}>
                            <Icon name="store-01" size={18} weight={1.6} color="#5B6B8C" />
                            Самовывоз из фан-шопа на стадионе
                          </span>
                          <span style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                            <span style={{ fontSize: '15px', color: '#5B6B8C' }}>Итого</span>
                            <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '26px', fontWeight: '600' }}>6 490 ₸</span>
                          </span>
                        </div>
                      </article>
                      <article
                        style={{
                          padding: '22px 24px',
                          borderRadius: '22px',
                          background: '#FFFFFF',
                          border: '1.5px solid #EEF3F8',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '16px',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                          <span style={{ display: 'flex', alignItems: 'baseline', gap: '14px' }}>
                            <span style={{ fontSize: '19px', fontWeight: '700' }}>Заказ № 1264</span>
                            <span style={{ fontSize: '14px', color: '#5B6B8C' }}>20 сентября 2026, 19:42</span>
                          </span>
                          <span
                            style={{
                              height: '30px',
                              padding: '0 12px',
                              borderRadius: '15px',
                              background: '#E7F5FB',
                              color: '#0B7DB0',
                              fontSize: '13px',
                              fontWeight: '700',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            Оплачен
                          </span>
                        </div>
                        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: '220px' }}>
                            <span
                              style={{
                                flexShrink: '0',
                                width: '64px',
                                height: '64px',
                                borderRadius: '14px',
                                background: 'linear-gradient(180deg, #172A51 0%, #129ED9 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                              }}
                            >
                              <Icon name="ticket-01" size={28} weight={1.6} color="#FFFFFF" />
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                              <span style={{ fontSize: '16px', fontWeight: '700' }}>ORDA — Кайрат</span>
                              <span style={{ fontSize: '14px', color: '#5B6B8C' }}>25 окт · Фан-сектор Юг · ряд 4 · 2 билета</span>
                            </span>
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '12px',
                            paddingTop: '14px',
                            borderTop: '1px solid #EEF3F8',
                            flexWrap: 'wrap',
                          }}
                        >
                          <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', color: '#5B6B8C' }}>
                            <Icon name="qr-code" size={18} weight={1.6} color="#5B6B8C" />
                            Билеты в разделе «Мои билеты»
                          </span>
                          <span style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                            <span style={{ fontSize: '15px', color: '#5B6B8C' }}>Итого</span>
                            <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '26px', fontWeight: '600' }}>4 000 ₸</span>
                          </span>
                        </div>
                      </article>
                      <article
                        style={{
                          padding: '22px 24px',
                          borderRadius: '22px',
                          background: '#FFFFFF',
                          border: '1.5px solid #EEF3F8',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '16px',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                          <span style={{ display: 'flex', alignItems: 'baseline', gap: '14px' }}>
                            <span style={{ fontSize: '19px', fontWeight: '700' }}>Заказ № 1048</span>
                            <span style={{ fontSize: '14px', color: '#5B6B8C' }}>18 сентября 2026, 19:42</span>
                          </span>
                          <span
                            style={{
                              height: '30px',
                              padding: '0 12px',
                              borderRadius: '15px',
                              background: '#E8F5EE',
                              color: '#137040',
                              fontSize: '13px',
                              fontWeight: '700',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            Доставлен
                          </span>
                        </div>
                        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: '220px' }}>
                            <span
                              style={{
                                flexShrink: '0',
                                width: '64px',
                                height: '64px',
                                borderRadius: '14px',
                                background: '#F2F6FA',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                              }}
                            >
                              <img
                                style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px', boxSizing: 'border-box' }}
                                src={asset('/img/jersey.webp')}
                                alt=""
                              />
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                              <span style={{ fontSize: '16px', fontWeight: '700' }}>Домашняя джерси 2026</span>
                              <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Размер L · 1 шт.</span>
                            </span>
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '12px',
                            paddingTop: '14px',
                            borderTop: '1px solid #EEF3F8',
                            flexWrap: 'wrap',
                          }}
                        >
                          <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', color: '#5B6B8C' }}>
                            <Icon name="delivery-truck-01" size={18} weight={1.6} color="#5B6B8C" />
                            Доставлено курьером 21 сентября
                          </span>
                          <span style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                            <span style={{ fontSize: '15px', color: '#5B6B8C' }}>Итого</span>
                            <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '26px', fontWeight: '600' }}>24 990 ₸</span>
                          </span>
                        </div>
                      </article>
                    </div>
                  </>
                )}
                {v.is_achievements && (
                  <>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
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
                          Достижения
                        </h3>
                        <Link
                          style={{
                            height: '48px',
                            padding: '0 20px',
                            borderRadius: '14px',
                            background: '#0B7DB0',
                            color: '#FFFFFF',
                            fontSize: '16px',
                            fontWeight: '700',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            textDecoration: 'none',
                          }}
                          href="/profile"
                        >
                          <Icon name="gift" size={18} weight={1.8} color="#FFFFFF" />
                          Обменять баллы
                        </Link>
                      </div>
                      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        <span
                          style={{
                            flex: '1 1 140px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px',
                            padding: '20px 22px',
                            borderRadius: '20px',
                            background: '#F2F6FA',
                          }}
                        >
                          <span
                            style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '40px', fontWeight: '600', lineHeight: '1', color: '#0B7DB0' }}
                          >
                            3
                          </span>
                          <span style={{ fontSize: '15px', color: '#5B6B8C' }}>значка получено</span>
                        </span>
                        <span
                          style={{
                            flex: '1 1 140px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px',
                            padding: '20px 22px',
                            borderRadius: '20px',
                            background: '#F2F6FA',
                          }}
                        >
                          <span
                            style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '40px', fontWeight: '600', lineHeight: '1', color: '#172A51' }}
                          >
                            2
                          </span>
                          <span style={{ fontSize: '15px', color: '#5B6B8C' }}>в процессе</span>
                        </span>
                        <span
                          style={{
                            flex: '1 1 140px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px',
                            padding: '20px 22px',
                            borderRadius: '20px',
                            background: '#F2F6FA',
                          }}
                        >
                          <span
                            style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '40px', fontWeight: '600', lineHeight: '1', color: '#8E9BB5' }}
                          >
                            2
                          </span>
                          <span style={{ fontSize: '15px', color: '#5B6B8C' }}>закрыто</span>
                        </span>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
                        <div
                          style={{
                            padding: '20px',
                            borderRadius: '22px',
                            background: '#FFFFFF',
                            border: '1.5px solid #EEF3F8',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                          }}
                        >
                          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span
                              style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '18px',
                                background: 'linear-gradient(160deg, #172A51 0%, #129ED9 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <Icon name="whistle" size={28} weight={1.7} color="#FFFFFF" />
                            </span>
                            <span
                              style={{
                                height: '26px',
                                padding: '0 10px',
                                borderRadius: '13px',
                                background: '#E8F5EE',
                                color: '#137040',
                                fontSize: '12px',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              Получено
                            </span>
                          </span>
                          <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <span style={{ fontSize: '18px', fontWeight: '700' }}>Первый свисток</span>
                            <span style={{ fontSize: '14px', lineHeight: '1.4', color: '#5B6B8C' }}>Посетите свой первый домашний матч · 18 сентября</span>
                          </span>
                        </div>
                        <div
                          style={{
                            padding: '20px',
                            borderRadius: '22px',
                            background: '#FFFFFF',
                            border: '1.5px solid #EEF3F8',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                          }}
                        >
                          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span
                              style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '18px',
                                background: 'linear-gradient(160deg, #172A51 0%, #129ED9 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <Icon name="football" size={28} weight={1.7} color="#FFFFFF" />
                            </span>
                            <span
                              style={{
                                height: '26px',
                                padding: '0 10px',
                                borderRadius: '13px',
                                background: '#E8F5EE',
                                color: '#137040',
                                fontSize: '12px',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              Получено
                            </span>
                          </span>
                          <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <span style={{ fontSize: '18px', fontWeight: '700' }}>Прогнозист</span>
                            <span style={{ fontSize: '14px', lineHeight: '1.4', color: '#5B6B8C' }}>Угадайте счёт трёх матчей · 5 октября</span>
                          </span>
                        </div>
                        <div
                          style={{
                            padding: '20px',
                            borderRadius: '22px',
                            background: '#FFFFFF',
                            border: '1.5px solid #EEF3F8',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                          }}
                        >
                          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span
                              style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '18px',
                                background: 'linear-gradient(160deg, #172A51 0%, #129ED9 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <Icon name="quiz-02" size={28} weight={1.7} color="#FFFFFF" />
                            </span>
                            <span
                              style={{
                                height: '26px',
                                padding: '0 10px',
                                borderRadius: '13px',
                                background: '#E8F5EE',
                                color: '#137040',
                                fontSize: '12px',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              Получено
                            </span>
                          </span>
                          <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <span style={{ fontSize: '18px', fontWeight: '700' }}>Квиз-мастер</span>
                            <span style={{ fontSize: '14px', lineHeight: '1.4', color: '#5B6B8C' }}>Ответьте верно на 10 вопросов подряд · 12 октября</span>
                          </span>
                        </div>
                        <div
                          style={{
                            padding: '20px',
                            borderRadius: '22px',
                            background: '#FFFFFF',
                            border: '1.5px solid #EEF3F8',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                          }}
                        >
                          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span
                              style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '18px',
                                background: '#E7F5FB',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <Icon name="ticket-01" size={28} weight={1.7} color="#129ED9" />
                            </span>
                            <span
                              style={{
                                height: '26px',
                                padding: '0 10px',
                                borderRadius: '13px',
                                background: '#E7F5FB',
                                color: '#0B7DB0',
                                fontSize: '12px',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              В процессе
                            </span>
                          </span>
                          <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <span style={{ fontSize: '18px', fontWeight: '700' }}>Верный болельщик</span>
                            <span style={{ fontSize: '14px', lineHeight: '1.4', color: '#5B6B8C' }}>Посетите 5 домашних матчей</span>
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ flexGrow: '1', height: '6px', borderRadius: '3px', background: '#E7F5FB', overflow: 'hidden' }}>
                              <span style={{ display: 'block', width: '60%', height: '6px', borderRadius: '3px', background: '#129ED9' }} />
                            </span>
                            <span style={{ fontSize: '13px', fontWeight: '700', color: '#0B7DB0' }}>3 из 5</span>
                          </span>
                        </div>
                        <div
                          style={{
                            padding: '20px',
                            borderRadius: '22px',
                            background: '#FFFFFF',
                            border: '1.5px solid #EEF3F8',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                          }}
                        >
                          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span
                              style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '18px',
                                background: '#E7F5FB',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <Icon name="fire" size={28} weight={1.7} color="#129ED9" />
                            </span>
                            <span
                              style={{
                                height: '26px',
                                padding: '0 10px',
                                borderRadius: '13px',
                                background: '#E7F5FB',
                                color: '#0B7DB0',
                                fontSize: '12px',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              В процессе
                            </span>
                          </span>
                          <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <span style={{ fontSize: '18px', fontWeight: '700' }}>Серия</span>
                            <span style={{ fontSize: '14px', lineHeight: '1.4', color: '#5B6B8C' }}>Заходите на сайт или в приложение 7 дней подряд</span>
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ flexGrow: '1', height: '6px', borderRadius: '3px', background: '#E7F5FB', overflow: 'hidden' }}>
                              <span style={{ display: 'block', width: '71%', height: '6px', borderRadius: '3px', background: '#129ED9' }} />
                            </span>
                            <span style={{ fontSize: '13px', fontWeight: '700', color: '#0B7DB0' }}>5 из 7</span>
                          </span>
                        </div>
                        <div
                          style={{
                            padding: '20px',
                            borderRadius: '22px',
                            background: '#FFFFFF',
                            border: '1.5px solid #EEF3F8',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            opacity: '0.75',
                          }}
                        >
                          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span
                              style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '18px',
                                background: '#EEF3F8',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <Icon name="lock" size={28} weight={1.7} color="#A9B6C9" />
                            </span>
                            <span
                              style={{
                                height: '26px',
                                padding: '0 10px',
                                borderRadius: '13px',
                                background: '#EEF3F8',
                                color: '#5B6B8C',
                                fontSize: '12px',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              Закрыто
                            </span>
                          </span>
                          <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <span style={{ fontSize: '18px', fontWeight: '700' }}>Легенда трибуны</span>
                            <span style={{ fontSize: '14px', lineHeight: '1.4', color: '#5B6B8C' }}>Посетите 20 матчей за один сезон</span>
                          </span>
                        </div>
                        <div
                          style={{
                            padding: '20px',
                            borderRadius: '22px',
                            background: '#FFFFFF',
                            border: '1.5px solid #EEF3F8',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            opacity: '0.75',
                          }}
                        >
                          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span
                              style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '18px',
                                background: '#EEF3F8',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <Icon name="lock" size={28} weight={1.7} color="#A9B6C9" />
                            </span>
                            <span
                              style={{
                                height: '26px',
                                padding: '0 10px',
                                borderRadius: '13px',
                                background: '#EEF3F8',
                                color: '#5B6B8C',
                                fontSize: '12px',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              Закрыто
                            </span>
                          </span>
                          <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <span style={{ fontSize: '18px', fontWeight: '700' }}>Железная серия</span>
                            <span style={{ fontSize: '14px', lineHeight: '1.4', color: '#5B6B8C' }}>Не пропустите 5 домашних игр подряд</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {v.is_data && (
                  <>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
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
                          Личные данные
                        </h3>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '22px', padding: '20px', borderRadius: '22px', background: '#F2F6FA' }}>
                        <span
                          style={{
                            width: '88px',
                            height: '88px',
                            borderRadius: '50%',
                            padding: '3px',
                            boxSizing: 'border-box',
                            background: '#FFFFFF',
                            display: 'flex',
                          }}
                        >
                          <img style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} src={asset('/img/avatar.webp')} alt="" />
                        </span>
                        <span style={{ display: 'flex', flexDirection: 'column', gap: '4px', flexGrow: '1' }}>
                          <span style={{ fontSize: '18px', fontWeight: '700' }}>Фото профиля</span>
                          <span style={{ fontSize: '14px', color: '#5B6B8C' }}>JPG или PNG, до 5 МБ</span>
                        </span>
                        <button
                          style={{
                            height: '48px',
                            padding: '0 18px',
                            borderRadius: '14px',
                            border: '0',
                            background: '#FFFFFF',
                            color: '#172A51',
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
                          <Icon name="camera-01" size={18} weight={1.8} color="#172A51" />
                          Изменить фото
                        </button>
                      </div>
                      <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
                        <label style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          <span style={{ fontSize: '14px', fontWeight: '700', color: '#5B6B8C' }}>Имя</span>
                          <span
                            style={{
                              height: '56px',
                              padding: '0 18px',
                              borderRadius: '16px',
                              background: '#F2F6FA',
                              border: '1.5px solid #EEF3F8',
                              boxSizing: 'border-box',
                              fontSize: '17px',
                              color: '#172A51',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                            }}
                          >
                            Бекжан
                          </span>
                        </label>
                        <label style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          <span style={{ fontSize: '14px', fontWeight: '700', color: '#5B6B8C' }}>Фамилия</span>
                          <span
                            style={{
                              height: '56px',
                              padding: '0 18px',
                              borderRadius: '16px',
                              background: '#F2F6FA',
                              border: '1.5px solid #EEF3F8',
                              boxSizing: 'border-box',
                              fontSize: '17px',
                              color: '#172A51',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                            }}
                          >
                            Садыков
                          </span>
                        </label>
                      </div>
                      <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
                        <label style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          <span style={{ fontSize: '14px', fontWeight: '700', color: '#5B6B8C' }}>Номер телефона</span>
                          <span
                            style={{
                              height: '56px',
                              padding: '0 18px',
                              borderRadius: '16px',
                              background: '#F2F6FA',
                              border: '1.5px solid #EEF3F8',
                              boxSizing: 'border-box',
                              fontSize: '17px',
                              color: '#172A51',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                            }}
                          >
                            <span style={{ color: '#8E9BB5' }}>+7</span>707 123 45 67
                            <span style={{ flexGrow: '1' }} />
                            <Icon name="checkmark-circle-02" size={20} weight={2} color="#137040" />
                          </span>
                          <span style={{ fontSize: '13px', fontWeight: '700', color: '#137040' }}>Номер подтверждён</span>
                        </label>
                        <label style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          <span style={{ fontSize: '14px', fontWeight: '700', color: '#5B6B8C' }}>Эл. почта</span>
                          <span
                            style={{
                              height: '56px',
                              padding: '0 18px',
                              borderRadius: '16px',
                              background: '#F2F6FA',
                              border: '1.5px solid #EEF3F8',
                              boxSizing: 'border-box',
                              fontSize: '17px',
                              color: '#172A51',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                            }}
                          >
                            bek777@mail.kz
                          </span>
                        </label>
                      </div>
                      <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
                        <label style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          <span style={{ fontSize: '14px', fontWeight: '700', color: '#5B6B8C' }}>Дата рождения</span>
                          <span
                            style={{
                              height: '56px',
                              padding: '0 18px',
                              borderRadius: '16px',
                              background: '#F2F6FA',
                              border: '1.5px solid #EEF3F8',
                              boxSizing: 'border-box',
                              fontSize: '17px',
                              color: '#172A51',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                            }}
                          >
                            14.03.1998
                            <span style={{ flexGrow: '1' }} />
                            <Icon name="calendar-03" size={20} weight={1.6} color="#5B6B8C" />
                          </span>
                        </label>
                        <label style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          <span style={{ fontSize: '14px', fontWeight: '700', color: '#5B6B8C' }}>Город</span>
                          <span
                            style={{
                              height: '56px',
                              padding: '0 18px',
                              borderRadius: '16px',
                              background: '#F2F6FA',
                              border: '1.5px solid #EEF3F8',
                              boxSizing: 'border-box',
                              fontSize: '17px',
                              color: '#172A51',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                            }}
                          >
                            Шымкент
                          </span>
                        </label>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '16px',
                          padding: '18px 20px',
                          borderRadius: '20px',
                          border: '1.5px solid #EEF3F8',
                        }}
                      >
                        <span
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '13px',
                            background: '#E7F5FB',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Icon name="lock" size={22} weight={1.6} color="#129ED9" />
                        </span>
                        <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: '1' }}>
                          <span style={{ fontSize: '17px', fontWeight: '700' }}>Пароль</span>
                          <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Изменён 2 месяца назад · смена через код из SMS</span>
                        </span>
                        <Link
                          style={{
                            height: '44px',
                            padding: '0 16px',
                            borderRadius: '14px',
                            background: '#E7F5FB',
                            color: '#0B7DB0',
                            fontSize: '15px',
                            fontWeight: '700',
                            display: 'flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                          }}
                          href="/profile"
                        >
                          Изменить
                        </Link>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
                        <button
                          style={{
                            border: '0',
                            background: 'transparent',
                            color: '#C8040F',
                            fontFamily: 'inherit',
                            fontSize: '15px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            padding: '0',
                          }}
                          type="button"
                        >
                          Удалить аккаунт
                        </button>
                        <span style={{ display: 'flex', gap: '10px' }}>
                          <button
                            style={{
                              height: '54px',
                              padding: '0 22px',
                              borderRadius: '16px',
                              border: '1.5px solid #DCE3EE',
                              background: '#FFFFFF',
                              color: '#172A51',
                              fontFamily: 'inherit',
                              fontSize: '17px',
                              fontWeight: '700',
                              cursor: 'pointer',
                            }}
                            type="button"
                            onClick={v.toOverview}
                          >
                            Отмена
                          </button>
                          <button
                            style={{
                              height: '54px',
                              padding: '0 26px',
                              borderRadius: '16px',
                              border: '0',
                              background: '#0B7DB0',
                              color: '#FFFFFF',
                              fontFamily: 'inherit',
                              fontSize: '17px',
                              fontWeight: '700',
                              cursor: 'pointer',
                            }}
                            type="button"
                            onClick={v.toOverview}
                          >
                            Сохранить изменения
                          </button>
                        </span>
                      </div>
                    </div>
                  </>
                )}
                {v.is_settings && (
                  <>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
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
                          Настройки
                        </h3>
                      </div>
                      <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1.3 1 420px', padding: '4px 24px 8px', borderRadius: '22px', border: '1.5px solid #EEF3F8' }}>
                          <span
                            style={{
                              display: 'block',
                              padding: '18px 0 6px',
                              fontSize: '14px',
                              fontWeight: '700',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              color: '#172A51',
                            }}
                          >
                            Уведомления
                          </span>
                          <span style={{ display: 'block', fontSize: '14px', color: '#5B6B8C' }}>Сообщения о билетах и заказах приходят всегда.</span>
                          {v.toggles.map((t: any, tIdx: number) => (
                            <Fragment key={tIdx}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 0', borderBottom: '1px solid #EEF3F8' }}>
                                <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: '1' }}>
                                  <span style={{ fontSize: '17px', fontWeight: '700' }}>{t.title}</span>
                                  <span style={{ fontSize: '14px', color: '#5B6B8C' }}>{t.sub}</span>
                                </span>
                                <button
                                  style={{
                                    position: 'relative',
                                    flexShrink: '0',
                                    width: '52px',
                                    height: '32px',
                                    borderRadius: '16px',
                                    border: '0',
                                    background: t.track,
                                    cursor: 'pointer',
                                    padding: '0',
                                  }}
                                  type="button"
                                  role="switch"
                                  aria-checked={t.on}
                                  aria-label={t.title}
                                  onClick={t.flip}
                                >
                                  <span
                                    style={{
                                      position: 'absolute',
                                      top: '3px',
                                      left: t.knob,
                                      width: '26px',
                                      height: '26px',
                                      borderRadius: '50%',
                                      background: '#FFFFFF',
                                      boxShadow: '0 2px 6px rgba(23, 42, 81, 0.25)',
                                    }}
                                  />
                                </button>
                              </div>
                            </Fragment>
                          ))}
                        </div>
                        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                          <div
                            style={{
                              padding: '22px 24px',
                              borderRadius: '22px',
                              border: '1.5px solid #EEF3F8',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '14px',
                            }}
                          >
                            <span style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#172A51' }}>
                              Язык сайта
                            </span>
                            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                              {v.langs.map((l: any, lIdx: number) => (
                                <Fragment key={lIdx}>
                                  <button
                                    style={{
                                      height: '48px',
                                      padding: '0 20px',
                                      borderRadius: '14px',
                                      border: `1.5px solid ${l.border}`,
                                      background: l.bg,
                                      color: l.fg,
                                      fontFamily: 'inherit',
                                      fontSize: '16px',
                                      fontWeight: '700',
                                      cursor: 'pointer',
                                    }}
                                    type="button"
                                    onClick={l.pick}
                                    aria-pressed={l.pressed}
                                  >
                                    {l.label}
                                  </button>
                                </Fragment>
                              ))}
                            </div>
                          </div>
                          <div
                            style={{
                              padding: '22px 24px',
                              borderRadius: '22px',
                              border: '1.5px solid #EEF3F8',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '12px',
                            }}
                          >
                            <span style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#172A51' }}>
                              Безопасность
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px' }}>
                              <Icon name="shield-01" size={22} weight={1.6} color="#129ED9" />
                              <span style={{ flexGrow: '1' }}>Вход по коду из SMS</span>
                              <span style={{ fontSize: '14px', fontWeight: '700', color: '#137040' }}>Включён</span>
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px' }}>
                              <Icon name="smart-phone-01" size={22} weight={1.6} color="#129ED9" />
                              <span style={{ flexGrow: '1' }}>Активные сеансы</span>
                              <span style={{ fontSize: '14px', fontWeight: '700', color: '#5B6B8C' }}>2 устройства</span>
                            </span>
                          </div>
                          <Link
                            style={{
                              position: 'relative',
                              overflow: 'hidden',
                              padding: '22px 24px',
                              borderRadius: '22px',
                              background: '#1F3562',
                              color: '#FFFFFF',
                              textDecoration: 'none',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '14px',
                            }}
                            href="/profile"
                          >
                            <Star w={60} h={100} fill="rgba(18, 158, 217, 0.35)" style={{ position: 'absolute', right: '-16px', top: '-14px' }} />
                            <span
                              style={{
                                position: 'relative',
                                width: '48px',
                                height: '48px',
                                borderRadius: '14px',
                                background: 'rgba(255, 255, 255, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <Icon name="customer-support" size={24} weight={1.6} color="#7CC6E9" />
                            </span>
                            <span style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                              <span style={{ fontSize: '17px', fontWeight: '700' }}>Центр поддержки</span>
                              <span style={{ fontSize: '14px', color: '#CFE3F2' }}>Ответим в течение часа</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
