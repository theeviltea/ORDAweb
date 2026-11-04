'use client';

/* Сгенерировано из дизайн-макета ORDA (canvas). Разметка повторяет макет 1:1. */
import Link from 'next/link';
import { route } from '@/lib/route';
import { asset } from '@/lib/asset';
import { Icon } from '@/components/Icon';
import { Star } from '@/components/Star';
import { useDC } from '@/lib/dc';
import { vals, tick } from './CheckoutTickets.vals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CheckoutTicketsView(props: {}) {
  const self = useDC(props, tick);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const v: any = vals(self);
  return (
    <>
      <div style={{ width: '100%', background: '#172A51', paddingBottom: '1px', fontFamily: "'Roboto Condensed', sans-serif", color: '#172A51' }}>
        <section style={{ position: 'relative', overflow: 'hidden', padding: '48px 0 44px' }} aria-label="Оформление">
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
                  <span style={{ color: '#CFE3F2' }}>Оформление</span>
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
                  Оформление заказа
                </h1>
                <p style={{ margin: '0', maxWidth: '560px', fontSize: '19px', lineHeight: '1.5', color: '#CFE3F2' }}>
                  Проверьте билеты и оплатите картой на защищённой странице Halyk Bank.
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
            padding: '40px 0',
          }}
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
              gap: '24px',
            }}
          >
            <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 560px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ padding: '28px', borderRadius: '24px', background: '#F2F6FA', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <h2
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
                    Билеты
                  </h2>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                    <span
                      style={{
                        width: '88px',
                        height: '88px',
                        borderRadius: '18px',
                        background: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon name="ticket-01" size={40} weight={1.6} color="#129ED9" />
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '4px', flexGrow: '1', minWidth: '0' }}>
                      <span style={{ fontSize: '20px', fontWeight: '700' }}>ORDA — Кайрат</span>
                      <span style={{ fontSize: '15px', color: '#5B6B8C' }}>Сб, 25 октября · 19:00 · 2 билета · Южная трибуна</span>
                    </span>
                    <span style={{ fontSize: '20px', fontWeight: '700', whiteSpace: 'nowrap' }}>12 000 ₸</span>
                  </div>
                </div>
                <div style={{ padding: '28px', borderRadius: '24px', background: '#F2F6FA', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h2
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
                    Получение
                  </h2>
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <Icon name="smart-phone-01" size={24} weight={1.6} color="#129ED9" />
                    <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.5', color: '#5B6B8C' }}>
                      Электронные билеты появятся в личном кабинете и в приложении в разделе «Мои билеты» сразу после оплаты — печатать не нужно.
                    </p>
                  </div>
                </div>
                <div style={{ padding: '28px', borderRadius: '24px', background: '#F2F6FA', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h2
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
                    Согласие
                  </h2>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
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
                      aria-label="Согласие с офертой"
                      onClick={v.toggle}
                    >
                      {v.agree && (
                        <>
                          <Icon name="tick-02" size={15} weight={2.8} color="#FFFFFF" />
                        </>
                      )}
                    </button>
                    <span style={{ fontSize: '16px', lineHeight: '1.5', color: '#5B6B8C' }}>
                      Я ознакомился и согласен с{' '}
                      <Link style={{ fontWeight: '700', textDecoration: 'none' }} href="/legal/documents#offer">
                        публичной офертой
                      </Link>
                      ,{' '}
                      <Link style={{ fontWeight: '700', textDecoration: 'none' }} href="/legal/documents#returns">
                        условиями возврата
                      </Link>{' '}
                      и{' '}
                      <Link style={{ fontWeight: '700', textDecoration: 'none' }} href="/legal/documents#privacy">
                        политикой конфиденциальности
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <aside
                style={{
                  flex: '0 1 420px',
                  minWidth: '300px',
                  position: 'sticky',
                  top: '110px',
                  padding: '28px',
                  borderRadius: '24px',
                  background: '#172A51',
                  color: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <h2
                  style={{
                    margin: '0',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '28px',
                    fontWeight: '600',
                    lineHeight: '1',
                    textTransform: 'uppercase',
                  }}
                >
                  Итого
                </h2>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '17px' }}>
                  <span style={{ color: '#CFE3F2' }}>Билеты</span>
                  <b>12 000 ₸</b>
                </div>
                <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.14)' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontSize: '18px', fontWeight: '700' }}>К оплате</span>
                  <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '40px', fontWeight: '600', lineHeight: '1' }}>{v.total}</span>
                </div>
                <span style={{ fontSize: '13px', lineHeight: '1.4', color: '#A9BCD6' }}>
                  Цены указаны в казахстанских тенге и включают НДС. Комиссия за оплату картой не взимается.
                </span>
                <Link
                  style={{
                    height: '60px',
                    borderRadius: '18px',
                    background: v.payBg,
                    color: v.payFg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    fontSize: '19px',
                    fontWeight: '700',
                    textDecoration: 'none',
                  }}
                  href={route(v.payHref)}
                  aria-disabled={v.locked}
                >
                  <Icon name="credit-card" size={22} weight={1.8} color={v.payFg} />
                  Оплатить {v.total}
                </Link>
                <span style={{ textAlign: 'center', fontSize: '14px', color: v.hintColor }} aria-live="polite">
                  {v.hint}
                </span>
                <div style={{ paddingTop: '6px', borderTop: '1px solid rgba(255, 255, 255, 0.14)' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}
                      aria-label="Принимаем Visa и Mastercard, оплата через Halyk ePay"
                    >
                      <img style={{ width: '60px', height: '38px', borderRadius: '6px' }} src={asset('/img/pay-visa.png')} alt="Visa" />
                      <img style={{ width: '60px', height: '38px', borderRadius: '6px' }} src={asset('/img/pay-mastercard.png')} alt="Mastercard" />
                      <a
                        style={{
                          height: '38px',
                          boxSizing: 'border-box',
                          padding: '0 12px',
                          borderRadius: '6px',
                          background: 'rgba(255, 255, 255, 0.08)',
                          border: '1px solid rgba(255, 255, 255, 0.18)',
                          color: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '14px',
                          fontWeight: '700',
                          textDecoration: 'none',
                        }}
                        href="https://epayment.kz"
                        aria-label="Halyk ePay — epayment.kz"
                      >
                        Halyk ePay
                        <Icon name="link-square-02" size={15} weight={1.8} color="#CFE3F2" />
                      </a>
                    </div>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', lineHeight: '1.35', color: '#CFE3F2' }}>
                      <Icon name="security-check" size={16} weight={1.8} color="#7FD3A2" />
                      Платежи защищены 3-D Secure: Visa Secure и Mastercard Identity Check
                    </span>
                  </div>
                </div>
                <Link style={{ fontSize: '14px', fontWeight: '700', color: '#7CC6E9', textDecoration: 'none' }} href="/legal/documents#payment">
                  Как мы защищаем платежи
                </Link>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
