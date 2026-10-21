'use client';

/* Сгенерировано из дизайн-макета ORDA (canvas). Разметка повторяет макет 1:1. */
import Link from 'next/link';
import { asset } from '@/lib/asset';
import { Icon } from '@/components/Icon';
import { Star } from '@/components/Star';
import { useDC } from '@/lib/dc';
import { vals, tick } from './Footer.vals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function FooterView(props: {}) {
  const self = useDC(props, tick);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const v: any = vals(self);
  return (
    <>
      <div style={{ width: '100%', background: '#172A51', fontFamily: "'Roboto Condensed', sans-serif" }}>
        <footer style={{ position: 'relative', overflow: 'hidden', color: '#FFFFFF', padding: '40px 0 28px' }}>
          <Star w={360} h={360} fill="rgba(18, 158, 217, 0.1)" style={{ position: 'absolute', left: '-140px', bottom: '-160px' }} />
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
            <div style={{ display: 'flex', gap: '48px', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: '18px', maxWidth: '360px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <img style={{ width: '52px', height: '63px', objectFit: 'contain' }} src={asset('/img/crest-white.svg')} alt="ФК «Ордабасы»" />
                  <span
                    style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '40px', fontWeight: '600', lineHeight: '1', letterSpacing: '0.04em' }}
                  >
                    ORDA
                  </span>
                </span>
                <span style={{ fontSize: '16px', lineHeight: '1.5', color: '#CFE3F2' }}>
                  Один город. Одна команда. Официальный сайт футбольного клуба «Ордабасы».
                </span>
                <span style={{ display: 'flex', gap: '10px' }}>
                  <Link
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    href="/"
                    aria-label="Instagram"
                  >
                    <Icon name="instagram" size={20} weight={1.6} color="#FFFFFF" />
                  </Link>
                  <Link
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    href="/"
                    aria-label="YouTube"
                  >
                    <Icon name="youtube" size={20} weight={1.6} color="#FFFFFF" />
                  </Link>
                  <Link
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    href="/"
                    aria-label="Telegram"
                  >
                    <Icon name="telegram" size={20} weight={1.6} color="#FFFFFF" />
                  </Link>
                </span>
              </div>
              <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '14px', minWidth: '160px' }} aria-label="Клуб">
                  <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FFFFFF' }}>Клуб</span>
                  <Link style={{ fontSize: '16px', color: '#CFE3F2', textDecoration: 'none' }} href="/#interview">
                    О клубе
                  </Link>
                  <Link style={{ fontSize: '16px', color: '#CFE3F2', textDecoration: 'none' }} href="/">
                    История
                  </Link>
                  <Link style={{ fontSize: '16px', color: '#CFE3F2', textDecoration: 'none' }} href="/">
                    Стадион
                  </Link>
                  <Link style={{ fontSize: '16px', color: '#CFE3F2', textDecoration: 'none' }} href="/media">
                    Новости клуба
                  </Link>
                  <Link style={{ fontSize: '16px', color: '#CFE3F2', textDecoration: 'none' }} href="/">
                    Контакты
                  </Link>
                </nav>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '14px', minWidth: '160px' }} aria-label="Команды">
                  <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FFFFFF' }}>Команды</span>
                  <Link style={{ fontSize: '16px', color: '#CFE3F2', textDecoration: 'none' }} href="/team">
                    Основной состав
                  </Link>
                  <Link style={{ fontSize: '16px', color: '#CFE3F2', textDecoration: 'none' }} href="/team">
                    Молодёжная команда
                  </Link>
                  <Link style={{ fontSize: '16px', color: '#CFE3F2', textDecoration: 'none' }} href="/team">
                    Женская команда
                  </Link>
                  <Link style={{ fontSize: '16px', color: '#CFE3F2', textDecoration: 'none' }} href="/team">
                    Академия
                  </Link>
                </nav>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '14px', minWidth: '160px' }} aria-label="Футбол">
                  <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FFFFFF' }}>Футбол</span>
                  <Link style={{ fontSize: '16px', color: '#CFE3F2', textDecoration: 'none' }} href="/matches">
                    Календарь матчей
                  </Link>
                  <Link style={{ fontSize: '16px', color: '#CFE3F2', textDecoration: 'none' }} href="/matches">
                    Турнирная таблица
                  </Link>
                  <Link style={{ fontSize: '16px', color: '#CFE3F2', textDecoration: 'none' }} href="/media#video">
                    Видео
                  </Link>
                  <Link style={{ fontSize: '16px', color: '#CFE3F2', textDecoration: 'none' }} href="/tickets">
                    Билеты
                  </Link>
                </nav>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '14px', minWidth: '160px' }} aria-label="Болельщикам">
                  <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FFFFFF' }}>
                    Болельщикам
                  </span>
                  <Link style={{ fontSize: '16px', color: '#CFE3F2', textDecoration: 'none' }} href="/shop">
                    Клубный магазин
                  </Link>
                  <Link style={{ fontSize: '16px', color: '#CFE3F2', textDecoration: 'none' }} href="/fans">
                    Фан-зона
                  </Link>
                  <Link style={{ fontSize: '16px', color: '#CFE3F2', textDecoration: 'none' }} href="/profile">
                    Личный кабинет
                  </Link>
                  <Link style={{ fontSize: '16px', color: '#CFE3F2', textDecoration: 'none' }} href="/profile">
                    Помощь
                  </Link>
                </nav>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '16px',
                flexWrap: 'wrap',
                paddingTop: '24px',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                fontSize: '14px',
                color: '#CFE3F2',
              }}
            >
              <span>© ФК «Ордабасы». Все права защищены.</span>
              <Link style={{ color: '#CFE3F2', textDecoration: 'none' }} href="/">
                Политика конфиденциальности
              </Link>
              <span style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}>Шымкент · Қазақстан</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
