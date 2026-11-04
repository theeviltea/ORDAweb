'use client';

/* Сгенерировано из дизайн-макета ORDA (canvas). Разметка повторяет макет 1:1. */
import Link from 'next/link';
import { asset } from '@/lib/asset';
import { Icon } from '@/components/Icon';
import { Star } from '@/components/Star';
import { useDC } from '@/lib/dc';
import { vals, tick } from './Legal.vals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function LegalView(props: {}) {
  const self = useDC(props, tick);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const v: any = vals(self);
  return (
    <>
      <div style={{ width: '100%', background: '#172A51', paddingBottom: '1px', fontFamily: "'Roboto Condensed', sans-serif", color: '#172A51' }}>
        <section style={{ position: 'relative', overflow: 'hidden', padding: '48px 0 44px' }} aria-label="Документы">
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
                  <span style={{ color: '#CFE3F2' }}>Документы</span>
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
                  Документы и реквизиты
                </h1>
                <p style={{ margin: '0', maxWidth: '560px', fontSize: '19px', lineHeight: '1.5', color: '#CFE3F2' }}>
                  Сведения о клубе, контакты поддержки, условия покупки, оплаты, доставки и возврата.
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))', gap: '24px', alignItems: 'start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
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
                    О клубе
                  </h2>
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
                      <Icon name="legal-document-01" size={20} weight={1.6} color="#129ED9" />
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
                      <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#5B6B8C' }}>Юрлицо</span>
                      <span style={{ fontSize: '17px', fontWeight: '600', lineHeight: '1.35' }}>
                        [Полное наименование юрлица, например ТОО «Футбольный клуб «Ордабасы»]
                      </span>
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
                      <Icon name="legal-document-01" size={20} weight={1.6} color="#129ED9" />
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
                      <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#5B6B8C' }}>БИН</span>
                      <span style={{ fontSize: '17px', fontWeight: '600', lineHeight: '1.35' }}>[БИН]</span>
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
                      <Icon name="location-01" size={20} weight={1.6} color="#129ED9" />
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
                      <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#5B6B8C' }}>
                        Страна, город
                      </span>
                      <span style={{ fontSize: '17px', fontWeight: '600', lineHeight: '1.35' }}>Казахстан, Шымкент</span>
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
                      <Icon name="building-03" size={20} weight={1.6} color="#129ED9" />
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
                      <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#5B6B8C' }}>
                        Юридический адрес
                      </span>
                      <span style={{ fontSize: '17px', fontWeight: '600', lineHeight: '1.35' }}>[Юридический адрес]</span>
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
                      <Icon name="location-01" size={20} weight={1.6} color="#129ED9" />
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
                      <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#5B6B8C' }}>
                        Фактический адрес
                      </span>
                      <span style={{ fontSize: '17px', fontWeight: '600', lineHeight: '1.35' }}>[Фактический адрес]</span>
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
                      <Icon name="clock-01" size={20} weight={1.6} color="#129ED9" />
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
                      <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#5B6B8C' }}>
                        График работы поддержки
                      </span>
                      <span style={{ fontSize: '17px', fontWeight: '600', lineHeight: '1.35' }}>
                        Пн–Пт 09:00–18:00, в дни домашних матчей — до окончания матча
                      </span>
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
                      <Icon name="call" size={20} weight={1.6} color="#129ED9" />
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
                      <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#5B6B8C' }}>
                        Телефон поддержки
                      </span>
                      <a style={{ fontSize: '17px', fontWeight: '600', textDecoration: 'none' }} href="#">
                        [+7 7xx xxx xx xx]
                      </a>
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
                      <Icon name="mail-01" size={20} weight={1.6} color="#129ED9" />
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
                      <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#5B6B8C' }}>E-mail</span>
                      <a style={{ fontSize: '17px', fontWeight: '600', textDecoration: 'none' }} href="#">
                        [support@ordabasy.kz]
                      </a>
                    </span>
                  </div>
                </div>
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
                    Пункт выдачи
                  </h2>
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
                      <Icon name="store-01" size={20} weight={1.6} color="#129ED9" />
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
                      <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#5B6B8C' }}>
                        Пункт выдачи
                      </span>
                      <span style={{ fontSize: '17px', fontWeight: '600', lineHeight: '1.35' }}>Фан-шоп «Ордабасы»</span>
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
                      <Icon name="location-01" size={20} weight={1.6} color="#129ED9" />
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
                      <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#5B6B8C' }}>Адрес</span>
                      <span style={{ fontSize: '17px', fontWeight: '600', lineHeight: '1.35' }}>Казахстан, г. Шымкент, [Адрес фан-шопа]</span>
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
                      <Icon name="clock-01" size={20} weight={1.6} color="#129ED9" />
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
                      <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#5B6B8C' }}>
                        Режим работы
                      </span>
                      <span style={{ fontSize: '17px', fontWeight: '600', lineHeight: '1.35' }}>Ежедневно 10:00–20:00, в дни матчей — до 22:00</span>
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
                      <Icon name="call" size={20} weight={1.6} color="#129ED9" />
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
                      <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#5B6B8C' }}>
                        Телефон
                      </span>
                      <a style={{ fontSize: '17px', fontWeight: '600', textDecoration: 'none' }} href="#">
                        [+7 7xx xxx xx xx]
                      </a>
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
                      <Icon name="location-01" size={20} weight={1.6} color="#129ED9" />
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
                      <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#5B6B8C' }}>
                        Как добраться
                      </span>
                      <span style={{ fontSize: '17px', fontWeight: '600', lineHeight: '1.35' }}>[Как добраться: ориентиры, вход, парковка]</span>
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ padding: '28px', borderRadius: '24px', background: '#F2F6FA', display: 'flex', flexDirection: 'column', gap: '8px' }}>
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
                    Документы
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Link
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        minHeight: '72px',
                        padding: '12px 0',
                        borderBottom: '1px solid #DCE3EE',
                        color: '#172A51',
                        textDecoration: 'none',
                      }}
                      href="/legal/documents#offer"
                    >
                      <span
                        style={{
                          flexShrink: '0',
                          width: '44px',
                          height: '44px',
                          borderRadius: '14px',
                          background: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon name="file-01" size={22} weight={1.6} color="#129ED9" />
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: '1', minWidth: '0' }}>
                        <span style={{ fontSize: '18px', fontWeight: '700' }}>Публичная оферта</span>
                        <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Условия покупки товаров и билетов</span>
                      </span>
                      <Icon name="arrow-right-01" size={20} weight={1.8} color="#8E9BB5" />
                    </Link>
                    <Link
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        minHeight: '72px',
                        padding: '12px 0',
                        borderBottom: '1px solid #DCE3EE',
                        color: '#172A51',
                        textDecoration: 'none',
                      }}
                      href="/legal/documents#privacy"
                    >
                      <span
                        style={{
                          flexShrink: '0',
                          width: '44px',
                          height: '44px',
                          borderRadius: '14px',
                          background: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon name="shield-01" size={22} weight={1.6} color="#129ED9" />
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: '1', minWidth: '0' }}>
                        <span style={{ fontSize: '18px', fontWeight: '700' }}>Политика конфиденциальности</span>
                        <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Какие данные собираем и как защищаем</span>
                      </span>
                      <Icon name="arrow-right-01" size={20} weight={1.8} color="#8E9BB5" />
                    </Link>
                    <Link
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        minHeight: '72px',
                        padding: '12px 0',
                        borderBottom: '1px solid #DCE3EE',
                        color: '#172A51',
                        textDecoration: 'none',
                      }}
                      href="/legal/documents#personal-data"
                    >
                      <span
                        style={{
                          flexShrink: '0',
                          width: '44px',
                          height: '44px',
                          borderRadius: '14px',
                          background: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon name="security-check" size={22} weight={1.6} color="#129ED9" />
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: '1', minWidth: '0' }}>
                        <span style={{ fontSize: '18px', fontWeight: '700' }}>Согласие на обработку персональных данных</span>
                        <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Согласие по Закону РК о персональных данных</span>
                      </span>
                      <Icon name="arrow-right-01" size={20} weight={1.8} color="#8E9BB5" />
                    </Link>
                    <Link
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        minHeight: '72px',
                        padding: '12px 0',
                        borderBottom: '1px solid #DCE3EE',
                        color: '#172A51',
                        textDecoration: 'none',
                      }}
                      href="/legal/documents#order"
                    >
                      <span
                        style={{
                          flexShrink: '0',
                          width: '44px',
                          height: '44px',
                          borderRadius: '14px',
                          background: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon name="shopping-cart-check-01" size={22} weight={1.6} color="#129ED9" />
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: '1', minWidth: '0' }}>
                        <span style={{ fontSize: '18px', fontWeight: '700' }}>Как оформить заказ</span>
                        <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Пошагово: от выбора до получения</span>
                      </span>
                      <Icon name="arrow-right-01" size={20} weight={1.8} color="#8E9BB5" />
                    </Link>
                    <Link
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        minHeight: '72px',
                        padding: '12px 0',
                        borderBottom: '1px solid #DCE3EE',
                        color: '#172A51',
                        textDecoration: 'none',
                      }}
                      href="/legal/documents#payment"
                    >
                      <span
                        style={{
                          flexShrink: '0',
                          width: '44px',
                          height: '44px',
                          borderRadius: '14px',
                          background: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon name="credit-card" size={22} weight={1.6} color="#129ED9" />
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: '1', minWidth: '0' }}>
                        <span style={{ fontSize: '18px', fontWeight: '700' }}>Оплата и безопасность</span>
                        <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Visa, Mastercard, Halyk ePay, 3-D Secure</span>
                      </span>
                      <Icon name="arrow-right-01" size={20} weight={1.8} color="#8E9BB5" />
                    </Link>
                    <Link
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        minHeight: '72px',
                        padding: '12px 0',
                        borderBottom: '1px solid #DCE3EE',
                        color: '#172A51',
                        textDecoration: 'none',
                      }}
                      href="/legal/documents#delivery"
                    >
                      <span
                        style={{
                          flexShrink: '0',
                          width: '44px',
                          height: '44px',
                          borderRadius: '14px',
                          background: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon name="delivery-truck-01" size={22} weight={1.6} color="#129ED9" />
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: '1', minWidth: '0' }}>
                        <span style={{ fontSize: '18px', fontWeight: '700' }}>Доставка и самовывоз</span>
                        <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Сроки, стоимость, пункт выдачи</span>
                      </span>
                      <Icon name="arrow-right-01" size={20} weight={1.8} color="#8E9BB5" />
                    </Link>
                    <Link
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        minHeight: '72px',
                        padding: '12px 0',
                        borderBottom: '1px solid #DCE3EE',
                        color: '#172A51',
                        textDecoration: 'none',
                      }}
                      href="/legal/documents#returns"
                    >
                      <span
                        style={{
                          flexShrink: '0',
                          width: '44px',
                          height: '44px',
                          borderRadius: '14px',
                          background: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon name="delivery-return-01" size={22} weight={1.6} color="#129ED9" />
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: '1', minWidth: '0' }}>
                        <span style={{ fontSize: '18px', fontWeight: '700' }}>Обмен и возврат</span>
                        <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Обмен, возврат товара и денег на карту</span>
                      </span>
                      <Icon name="arrow-right-01" size={20} weight={1.8} color="#8E9BB5" />
                    </Link>
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
                    Оплата
                  </h2>
                  <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.5', color: '#5B6B8C' }}>
                    Принимаем карты Visa и Mastercard. Оплата проходит на защищённой странице Halyk Bank, клуб не видит и не хранит данные карты. Цены указаны в
                    казахстанских тенге и включают НДС. Комиссия за оплату картой не взимается.
                  </p>
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
                          background: '#FFFFFF',
                          border: '1px solid #DCE3EE',
                          color: '#172A51',
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
                        <Icon name="link-square-02" size={15} weight={1.8} color="#5B6B8C" />
                      </a>
                    </div>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', lineHeight: '1.35', color: '#5B6B8C' }}>
                      <Icon name="security-check" size={16} weight={1.8} color="#137040" />
                      Платежи защищены 3-D Secure: Visa Secure и Mastercard Identity Check
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
