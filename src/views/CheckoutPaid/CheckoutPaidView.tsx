'use client';

/* Сгенерировано из дизайн-макета ORDA (canvas). Разметка повторяет макет 1:1. */
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { Star } from '@/components/Star';
import { useDC } from '@/lib/dc';
import { vals, tick } from './CheckoutPaid.vals';
import './CheckoutPaid.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CheckoutPaidView(props: {}) {
  const self = useDC(props, tick);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const v: any = vals(self);
  return (
    <>
      <div style={{ width: '100%', background: '#172A51', paddingBottom: '1px', fontFamily: "'Roboto Condensed', sans-serif", color: '#172A51' }}>
        <section
          style={{
            position: 'relative',
            margin: '0 max(24px, calc((100% - 1280px) / 2)) 40px',
            borderRadius: '32px',
            overflow: 'hidden',
            background: 'linear-gradient(180deg, #172A51 0%, #129ED9 100%)',
            padding: '96px 0',
            marginTop: '24px',
          }}
          aria-label="Оплата прошла"
        >
          <Star w={120} h={120} fill="#FFFFFF" style={{ position: 'absolute', right: '12%', top: '60px', animation: 'qd-twinkle 3s ease-in-out infinite' }} />
          <Star
            w={260}
            h={260}
            fill="#FFFFFF"
            style={{ position: 'absolute', left: '-80px', bottom: '-80px', animation: 'qd-twinkle 6s ease-in-out .3s infinite' }}
          />
          <div
            style={{
              position: 'relative',
              maxWidth: '640px',
              margin: '0 auto',
              padding: '0 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '18px',
              textAlign: 'center',
              color: '#FFFFFF',
            }}
          >
            <span
              style={{
                width: '112px',
                height: '112px',
                borderRadius: '50%',
                background: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'qd-pop .8s cubic-bezier(.2,1.3,.4,1) both',
              }}
            >
              <Icon name="checkmark-circle-02" size={64} weight={1.8} color="#137040" />
            </span>
            <h1
              style={{
                margin: '0',
                fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                fontSize: '64px',
                fontWeight: '600',
                lineHeight: '0.95',
                textTransform: 'uppercase',
                animation: 'qd-rise .7s ease-out .3s both',
              }}
            >
              Оплата прошла
            </h1>
            <p style={{ margin: '0', fontSize: '19px', lineHeight: '1.5', color: '#E7F5FB', animation: 'qd-rise .7s ease-out .5s both' }}>
              Заказ № 004217-118 на 24 990 ₸. Электронный чек отправили на bek777@mail.kz. Статус заказа — в разделе «Мои заказы», мы пришлём уведомление, когда
              он будет готов.
            </p>
            <div
              style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '8px', animation: 'qd-rise .6s ease-out .8s both' }}
            >
              <Link
                style={{
                  height: '56px',
                  padding: '0 28px',
                  borderRadius: '16px',
                  background: '#FFFFFF',
                  color: '#0B7DB0',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '18px',
                  fontWeight: '700',
                  textDecoration: 'none',
                }}
                href="/shop/orders"
              >
                Мои заказы
              </Link>
              <Link
                style={{
                  height: '56px',
                  padding: '0 28px',
                  boxSizing: 'border-box',
                  borderRadius: '16px',
                  border: '1.5px solid rgba(255, 255, 255, 0.6)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '18px',
                  fontWeight: '700',
                  textDecoration: 'none',
                }}
                href="/shop"
              >
                Вернуться в магазин
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
