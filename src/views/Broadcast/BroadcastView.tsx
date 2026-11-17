'use client';

/* Сгенерировано из дизайн-макета ORDA (canvas). Разметка повторяет макет 1:1. */
import Link from 'next/link';
import { asset } from '@/lib/asset';
import { Icon } from '@/components/Icon';
import { Star } from '@/components/Star';
import { useDC } from '@/lib/dc';
import { vals, tick } from './Broadcast.vals';
import './Broadcast.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function BroadcastView(props: { variant?: string }) {
  const self = useDC(props, tick);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const v: any = vals(self);
  return (
    <>
      <div style={{ width: '100%', background: '#172A51', paddingBottom: '1px', fontFamily: "'Roboto Condensed', sans-serif", color: '#172A51' }}>
        <section
          style={{
            position: 'relative',
            overflow: 'hidden',
            padding: `48px 0 ${v.heroPad}px`,
            background: 'linear-gradient(160deg, #172A51 0%, #0B3A6B 60%, #0B7DB0 130%)',
          }}
          aria-label="Сообщение клуба"
        >
          <Star w={320} h={320} fill="rgba(18, 158, 217, 0.16)" style={{ position: 'absolute', right: '-90px', top: '-60px' }} keepRatio />
          <Star
            w={30}
            h={30}
            fill="#FFFFFF"
            style={{ position: 'absolute', right: '22%', top: '70px', animation: 'bc-twinkle 3s ease-in-out infinite' }}
            keepRatio
          />
          <Star
            w={14}
            h={14}
            fill="#7CC6E9"
            style={{ position: 'absolute', right: '15%', top: '170px', animation: 'bc-twinkle 4s ease-in-out .6s infinite' }}
            keepRatio
          />
          <Star w={110} h={110} fill="rgba(255, 255, 255, 0.05)" style={{ position: 'absolute', left: '-40px', bottom: '30px' }} keepRatio />
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
              color: '#FFFFFF',
              animation: 'bc-rise .6s ease-out both',
            }}
          >
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
              <span style={{ color: '#CFE3F2' }}>Сообщение клуба</span>
            </nav>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <span
                style={{
                  flexShrink: '0',
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
                }}
              >
                <img style={{ width: '32px', height: '39px', objectFit: 'contain' }} src={asset('/img/crest.png')} alt="" />
              </span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '19px', fontWeight: '700' }}>
                  ФК «Ордабасы»
                  <Icon name="checkmark-badge-01" size={19} weight={2} color="#7CC6E9" />
                </span>
                <span style={{ fontSize: '15px', color: '#A9C6E3' }}>{v.when}</span>
              </span>
              <span
                style={{
                  height: '30px',
                  padding: '0 13px',
                  marginLeft: '8px',
                  borderRadius: '15px',
                  background: 'rgba(255, 255, 255, 0.14)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#E7F5FB',
                }}
              >
                <Icon name="notification-01" size={15} weight={2} color="#7CC6E9" />
                {v.tag}
              </span>
            </div>
            <h1
              style={{
                margin: '0',
                maxWidth: '980px',
                fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                fontSize: `clamp(40px, 6vw, ${v.titleSize}px)`,
                fontWeight: '600',
                lineHeight: '0.95',
                textTransform: 'uppercase',
                textWrap: 'balance',
              }}
            >
              {v.title}
            </h1>
          </div>
        </section>
        <section
          style={{
            position: 'relative',
            margin: `-${v.overlap}px max(24px, calc((100% - 1280px) / 2)) 40px`,
            borderRadius: '32px',
            background: '#FFFFFF',
            padding: '40px 0',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '0 40px',
              boxSizing: 'border-box',
              display: 'flex',
              gap: '40px',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
            }}
          >
            <article style={{ flex: '1 1 560px', minWidth: '0', maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '22px', color: '#172A51' }}>
              {v.rich && (
                <>
                  <img
                    style={{
                      display: 'block',
                      width: '100%',
                      height: 'auto',
                      aspectRatio: '16 / 8',
                      borderRadius: '24px',
                      objectFit: 'cover',
                      objectPosition: 'center 35%',
                    }}
                    src={asset('/img/news-huddle.webp')}
                    alt="Игроки «Ордабасы» празднуют чемпионство"
                  />
                  <p style={{ margin: '0', fontSize: '22px', fontWeight: '700', lineHeight: '1.4', color: '#172A51' }}>
                    Шымкент, мы сделали это! «Ордабасы» — чемпион Казахстана сезона 2026.
                  </p>
                  <p style={{ margin: '0', fontSize: '19px', lineHeight: '1.6', color: '#33415F' }}>
                    Спасибо каждому, кто был с командой весь сезон: на трибунах, у экранов и в выездных секторах. Этот титул —{' '}
                    <b style={{ color: '#172A51' }}>наш общий</b>.
                  </p>
                  <div style={{ padding: '24px', borderRadius: '22px', background: '#F2F6FA', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <span
                      style={{
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '26px',
                        fontWeight: '600',
                        lineHeight: '1',
                        textTransform: 'uppercase',
                      }}
                    >
                      Празднуем вместе
                    </span>
                    <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                      <span
                        style={{
                          flexShrink: '0',
                          width: '40px',
                          height: '40px',
                          borderRadius: '12px',
                          background: '#E7F5FB',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon name="calendar-03" size={20} weight={1.8} color="#129ED9" />
                      </span>
                      <span style={{ paddingTop: '8px', fontSize: '18px', lineHeight: '1.45' }}>
                        <b>22 ноября, 18:00</b> — чемпионский парад от площади Ордабасы до стадиона
                      </span>
                    </div>
                    <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                      <span
                        style={{
                          flexShrink: '0',
                          width: '40px',
                          height: '40px',
                          borderRadius: '12px',
                          background: '#E7F5FB',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon name="champion" size={20} weight={1.8} color="#129ED9" />
                      </span>
                      <span style={{ paddingTop: '8px', fontSize: '18px', lineHeight: '1.45' }}>Команда покажет кубок болельщикам на стадионе</span>
                    </div>
                    <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                      <span
                        style={{
                          flexShrink: '0',
                          width: '40px',
                          height: '40px',
                          borderRadius: '12px',
                          background: '#E7F5FB',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon name="location-01" size={20} weight={1.8} color="#129ED9" />
                      </span>
                      <span style={{ paddingTop: '8px', fontSize: '18px', lineHeight: '1.45' }}>Вход свободный, сбор у главного входа</span>
                    </div>
                  </div>
                  <blockquote
                    style={{
                      margin: '4px 0',
                      padding: '4px 0 4px 20px',
                      borderLeft: '4px solid #129ED9',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    }}
                  >
                    <span style={{ fontSize: '22px', fontStyle: 'italic', lineHeight: '1.45' }}>
                      «Этот кубок мы выиграли вместе с трибунами. Увидимся на параде!»
                    </span>
                    <span style={{ fontSize: '15px', fontWeight: '700', color: '#5B6B8C' }}>Капитан команды</span>
                  </blockquote>
                  <p style={{ margin: '0', fontSize: '19px', lineHeight: '1.6', color: '#33415F' }}>
                    Подробности и маршрут — в{' '}
                    <Link style={{ fontWeight: '700', color: '#0B7DB0' }} href="/news">
                      программе праздника
                    </Link>
                    .
                  </p>
                  <Link
                    style={{
                      alignSelf: 'flex-start',
                      height: '56px',
                      padding: '0 28px',
                      borderRadius: '16px',
                      background: '#129ED9',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '18px',
                      fontWeight: '700',
                      textDecoration: 'none',
                    }}
                    href="/media/photos"
                  >
                    <Icon name="image-01" size={22} weight={1.8} color="#FFFFFF" />
                    Смотреть фото с праздника
                  </Link>
                </>
              )}
              {v.plain && (
                <>
                  <p style={{ margin: '0', fontSize: '19px', lineHeight: '1.6', color: '#33415F' }}>
                    Уважаемые болельщики! С 20 по 22 ноября стадион имени Х. Мунайтпасова закрыт на плановое обслуживание газона.
                  </p>
                  <p style={{ margin: '0', fontSize: '19px', lineHeight: '1.6', color: '#33415F' }}>
                    Экскурсии по стадиону в эти дни переносятся — мы свяжемся со всеми, кто записался. Фан-шоп у входа «Юг» работает в обычном режиме, с 10:00
                    до 20:00.
                  </p>
                  <p style={{ margin: '0', fontSize: '19px', lineHeight: '1.6', color: '#33415F' }}>Спасибо за понимание!</p>
                </>
              )}
            </article>
            <aside style={{ flex: '0 1 340px', minWidth: '260px', position: 'sticky', top: '110px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div
                style={{
                  padding: '24px',
                  borderRadius: '24px',
                  background: '#172A51',
                  color: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                <span
                  style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '24px', fontWeight: '600', lineHeight: '1', textTransform: 'uppercase' }}
                >
                  Поделиться
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <button
                    style={{
                      height: '48px',
                      padding: '0 16px',
                      borderRadius: '14px',
                      border: '0',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontFamily: 'inherit',
                      fontSize: '16px',
                      fontWeight: '700',
                      cursor: 'pointer',
                    }}
                    type="button"
                  >
                    <Icon name="link-square-02" size={20} weight={1.8} color="#FFFFFF" />
                    Скопировать ссылку
                  </button>
                  <button
                    style={{
                      height: '48px',
                      padding: '0 16px',
                      borderRadius: '14px',
                      border: '0',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontFamily: 'inherit',
                      fontSize: '16px',
                      fontWeight: '700',
                      cursor: 'pointer',
                    }}
                    type="button"
                  >
                    <Icon name="telegram" size={20} weight={1.8} color="#FFFFFF" />
                    Telegram
                  </button>
                  <button
                    style={{
                      height: '48px',
                      padding: '0 16px',
                      borderRadius: '14px',
                      border: '0',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontFamily: 'inherit',
                      fontSize: '16px',
                      fontWeight: '700',
                      cursor: 'pointer',
                    }}
                    type="button"
                  >
                    <Icon name="whatsapp" size={20} weight={1.8} color="#FFFFFF" />
                    WhatsApp
                  </button>
                </div>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    paddingTop: '12px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.14)',
                    fontSize: '14px',
                    color: '#A9C6E3',
                  }}
                >
                  <Icon name="notification-01" size={15} weight={1.8} color="#A9C6E3" />
                  Рассылка клуба · {v.date}
                </span>
              </div>
              <div style={{ padding: '24px', borderRadius: '24px', background: '#F2F6FA', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <span
                  style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '24px', fontWeight: '600', lineHeight: '1', textTransform: 'uppercase' }}
                >
                  Не пропускайте новости
                </span>
                <span style={{ fontSize: '16px', lineHeight: '1.5', color: '#5B6B8C' }}>
                  Сообщения клуба, матчи и билеты — в приложении ORDA с уведомлениями.
                </span>
                <Link
                  style={{
                    height: '48px',
                    borderRadius: '14px',
                    background: '#129ED9',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontSize: '16px',
                    fontWeight: '700',
                    textDecoration: 'none',
                  }}
                  href="/"
                >
                  <Icon name="smart-phone-01" size={20} weight={1.8} color="#FFFFFF" />
                  Скачать приложение
                </Link>
                <Link
                  style={{
                    height: '48px',
                    borderRadius: '14px',
                    background: '#FFFFFF',
                    border: '1.5px solid #DCE3EE',
                    boxSizing: 'border-box',
                    color: '#172A51',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    fontWeight: '700',
                    textDecoration: 'none',
                  }}
                  href="/media"
                >
                  Все новости клуба
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
}
