'use client';

/* Сгенерировано из дизайн-макета ORDA (canvas). Разметка повторяет макет 1:1. */
import { Fragment } from 'react';
import Link from 'next/link';
import { asset } from '@/lib/asset';
import { Icon } from '@/components/Icon';
import { Star } from '@/components/Star';
import { useDC } from '@/lib/dc';
import { vals, tick } from './Article.vals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ArticleView(props: {}) {
  const self = useDC(props, tick);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const v: any = vals(self);
  return (
    <>
      <div style={{ width: '100%', background: '#172A51', paddingBottom: '1px', fontFamily: "'Roboto Condensed', sans-serif", color: '#172A51' }}>
        <section style={{ position: 'relative', overflow: 'hidden', padding: '40px 0 0' }} aria-label="Статья">
          <Star w={220} h={360} fill="rgba(18, 158, 217, 0.12)" style={{ position: 'absolute', right: '-60px', top: '-80px' }} />
          <Star w={20} h={20} fill="#129ED9" style={{ position: 'absolute', left: '52%', top: '50px' }} />
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
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flexWrap: 'wrap',
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
              <Link style={{ color: '#7FA3C9', textDecoration: 'none' }} href="/news">
                Новости
              </Link>
              <Icon name="arrow-right-01" size={14} weight={2} color="#7FA3C9" />
              <span style={{ color: '#CFE3F2' }}>Матч</span>
            </nav>
            <div style={{ maxWidth: '980px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <span style={{ display: 'flex', gap: '8px' }}>
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
                <span
                  style={{
                    height: '30px',
                    padding: '0 12px',
                    borderRadius: '15px',
                    background: 'rgba(255, 255, 255, 0.12)',
                    color: '#FFFFFF',
                    fontSize: '13px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Команда
                </span>
              </span>
              <h1
                style={{
                  margin: '0',
                  fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                  fontSize: '64px',
                  fontWeight: '600',
                  lineHeight: '0.96',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  textWrap: 'balance',
                }}
              >
                «Ордабасы» сохранил лидерство и завершил первый круг на вершине таблицы
              </h1>
              <span style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', fontSize: '16px', color: '#CFE3F2' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Icon name="calendar-03" size={18} color="#CFE3F2" />
                  18 мая 2025
                </span>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#7CC6E9' }} />
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Icon name="clock-01" size={18} color="#CFE3F2" />4 мин чтения
                </span>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#7CC6E9' }} />
                <span>Пресс-служба ORDA</span>
              </span>
            </div>
          </div>
          <div
            style={{
              position: 'relative',
              height: '560px',
              margin: '40px max(24px, calc((100% - 1280px) / 2)) 0',
              borderRadius: '32px 32px 0 0',
              overflow: 'hidden',
              background: '#1F3562',
            }}
          >
            <img
              style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%' }}
              src={asset('/img/news-huddle.webp')}
              alt="Игроки «Ордабасы» празднуют гол"
            />
          </div>
        </section>
        <section
          style={{
            position: 'relative',
            margin: '0 max(24px, calc((100% - 1280px) / 2)) 40px',
            overflow: 'hidden',
            background: '#FFFFFF',
            padding: '56px 0',
            borderRadius: '0 0 32px 32px',
          }}
          aria-label="Текст новости"
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
            <div style={{ display: 'flex', gap: '56px', alignItems: 'flex-start', flexWrap: 'wrap', color: '#172A51' }}>
              <article style={{ flex: '999 1 600px', minWidth: '0', maxWidth: '760px', display: 'flex', flexDirection: 'column', gap: '26px' }}>
                <p style={{ margin: '0', fontSize: '23px', fontWeight: '500', lineHeight: '1.55', color: '#172A51' }}>
                  Шымкентский «Ордабасы» одержал уверенную победу в домашнем матче над принципиальным соперником, что позволило команде укрепить свои позиции на
                  первой строчке турнирной таблицы КПЛ. Болельщики заполнили трибуны стадиона имени Хаджимукана Мунайтпасова, создав невероятную атмосферу
                  поддержки.
                </p>
                <p style={{ margin: '0', fontSize: '19px', lineHeight: '1.7', color: '#26375A' }}>
                  С первых минут матча подопечные главного тренера завладели инициативой, активно прессингуя соперника на каждом участке поля. Быстрый гол в
                  середине первого тайма определил дальнейший ход игры, заставив гостей раскрываться и допускать тактические ошибки.
                </p>
                <figure style={{ margin: '8px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <span style={{ position: 'relative', display: 'block', height: '420px', borderRadius: '24px', overflow: 'hidden', background: '#EEF3F8' }}>
                    <img
                      style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                      src={asset('/img/news-teamphoto.webp')}
                      alt="Стартовый состав перед матчем"
                    />
                  </span>
                  <figcaption style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', color: '#5B6B8C' }}>
                    <Icon name="image-01" size={18} color="#5B6B8C" />
                    Стартовый состав перед матчем
                  </figcaption>
                </figure>
                <p style={{ margin: '0', fontSize: '19px', lineHeight: '1.7', color: '#26375A' }}>
                  Во второй половине встречи команда продемонстрировала идеальную дисциплину в обороне и слаженность во всех линиях. Завершающий гол на
                  последних минутах окончательно снял все вопросы о победителе этого захватывающего противостояния. Теперь футболисты готовятся к следующему
                  этапу лиги.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', paddingTop: '22px', borderTop: '1px solid #EEF3F8' }}>
                  {v.liked && (
                    <>
                      <button
                        style={{
                          height: '48px',
                          padding: '0 18px',
                          borderRadius: '24px',
                          border: '0',
                          background: '#FDECEE',
                          color: '#C8040F',
                          fontFamily: 'inherit',
                          fontSize: '16px',
                          fontWeight: '700',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          cursor: 'pointer',
                        }}
                        type="button"
                        aria-pressed="true"
                        onClick={v.toggleLike}
                      >
                        <Icon name="favourite" size={20} weight={1.8} color="#C8040F" filled />
                        {v.likes}
                      </button>
                    </>
                  )}
                  {v.notLiked && (
                    <>
                      <button
                        style={{
                          height: '48px',
                          padding: '0 18px',
                          borderRadius: '24px',
                          border: '0',
                          background: '#F2F6FA',
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
                        aria-pressed="false"
                        onClick={v.toggleLike}
                      >
                        <Icon name="favourite" size={20} weight={1.8} color="#172A51" />
                        {v.likes}
                      </button>
                    </>
                  )}
                  <span style={{ flexGrow: '1' }} />
                  <span style={{ fontSize: '15px', fontWeight: '700', color: '#5B6B8C' }}>Поделиться</span>
                  <span
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: '#F2F6FA',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    aria-label="Telegram"
                  >
                    <Icon name="telegram" size={20} weight={1.7} color="#172A51" />
                  </span>
                  <span
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: '#F2F6FA',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    aria-label="Instagram"
                  >
                    <Icon name="instagram" size={20} weight={1.7} color="#172A51" />
                  </span>
                  <span
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: '#F2F6FA',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    aria-label="Скопировать ссылку"
                  >
                    <Icon name="link-01" size={20} weight={1.7} color="#172A51" />
                  </span>
                </div>
              </article>
              <aside style={{ flex: '1 1 300px', maxWidth: '360px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ padding: '24px', borderRadius: '24px', background: '#F2F6FA', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <span style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Теги</span>
                  <span style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        height: '36px',
                        padding: '0 14px',
                        borderRadius: '18px',
                        background: '#FFFFFF',
                        fontSize: '15px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      Премьер-лига
                    </span>
                    <span
                      style={{
                        height: '36px',
                        padding: '0 14px',
                        borderRadius: '18px',
                        background: '#FFFFFF',
                        fontSize: '15px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      Первый круг
                    </span>
                    <span
                      style={{
                        height: '36px',
                        padding: '0 14px',
                        borderRadius: '18px',
                        background: '#FFFFFF',
                        fontSize: '15px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      Турнирная таблица
                    </span>
                    <span
                      style={{
                        height: '36px',
                        padding: '0 14px',
                        borderRadius: '18px',
                        background: '#FFFFFF',
                        fontSize: '15px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      Домашний матч
                    </span>
                  </span>
                </div>
                <Link
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    padding: '24px',
                    borderRadius: '24px',
                    background: 'linear-gradient(150deg, #172A51 0%, #129ED9 100%)',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                  href="/matches"
                >
                  <Star w={70} h={110} fill="rgba(255, 255, 255, 0.12)" style={{ position: 'absolute', right: '-20px', top: '-20px' }} />
                  <span
                    style={{ position: 'relative', fontSize: '13px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#CFE3F2' }}
                  >
                    Таблица после первого круга
                  </span>
                  <span style={{ position: 'relative', display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                    <span style={{ fontFamily: "'SO Sporty', 'Oswald', sans-serif", fontSize: '72px', fontWeight: '600', lineHeight: '0.9' }}>1</span>
                    <span style={{ fontSize: '18px', fontWeight: '700' }}>место</span>
                  </span>
                  <span style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '15px', fontWeight: '700' }}>
                    Турнирная таблица
                    <Icon name="arrow-right-01" size={16} weight={2} color="#FFFFFF" />
                  </span>
                </Link>
              </aside>
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
          aria-label="Комментарии"
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
                Комментарии · 3
              </h2>
            </div>
            <div style={{ maxWidth: '820px', display: 'flex', flexDirection: 'column', color: '#172A51' }}>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center', padding: '14px 14px 14px 20px', borderRadius: '22px', background: '#F2F6FA' }}>
                <span style={{ flexGrow: '1', fontSize: '17px', color: '#8E9BB5' }}>Напишите комментарий…</span>
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
                  <Icon name="sent" size={18} weight={1.8} color="#FFFFFF" />
                  Отправить
                </Link>
              </div>
              {v.comments.map((c: any, cIdx: number) => (
                <Fragment key={cIdx}>
                  <div style={{ display: 'flex', gap: '16px', padding: '20px 0', borderBottom: '1px solid #EEF3F8' }}>
                    <span
                      style={{
                        flexShrink: '0',
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: '#E7F5FB',
                        color: '#0B7DB0',
                        fontSize: '18px',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {c.initial}
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', flexGrow: '1', minWidth: '0' }}>
                      <span style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                        <span style={{ fontSize: '17px', fontWeight: '700' }}>{c.name}</span>
                        <span style={{ fontSize: '14px', color: '#8E9BB5' }}>{c.time}</span>
                      </span>
                      <span style={{ fontSize: '17px', lineHeight: '1.5', color: '#26375A' }}>{c.text}</span>
                    </span>
                    <button
                      style={{
                        alignSelf: 'flex-start',
                        height: '40px',
                        padding: '0 14px',
                        borderRadius: '20px',
                        border: '0',
                        background: c.bg,
                        color: c.fg,
                        fontFamily: 'inherit',
                        fontSize: '15px',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        cursor: 'pointer',
                      }}
                      type="button"
                      aria-pressed={c.pressed}
                      onClick={c.like}
                    >
                      <Icon name="favourite" size={18} weight={1.8} color={c.fg} />
                      {c.count}
                    </button>
                  </div>
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
            background: '#E7F5FB',
            padding: '56px 0',
          }}
          aria-label="Читайте также"
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
                Читайте также
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
                href="/news"
              >
                Все новости
                <Icon name="arrow-right-01" size={18} weight={2} color="#0B7DB0" />
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '20px' }}>
              <Link
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: '#FFFFFF',
                  color: '#172A51',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                href="/news/article"
              >
                <span style={{ position: 'relative', height: '200px', background: '#EEF3F8' }}>
                  <img
                    style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                    src={asset('/img/news-lineup.webp')}
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
                      fontSize: '12px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    Команда
                  </span>
                </span>
                <span style={{ padding: '18px 20px 22px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1.25' }}>Состав на матч с «Кайратом» объявлен</span>
                  <span style={{ fontSize: '14px', color: '#8E9BB5' }}>Сегодня</span>
                </span>
              </Link>
              <Link
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: '#FFFFFF',
                  color: '#172A51',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                href="/news/article"
              >
                <span style={{ position: 'relative', height: '200px', background: '#EEF3F8' }}>
                  <img
                    style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                    src={asset('/img/news-trio.webp')}
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
                      fontSize: '12px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    Клуб
                  </span>
                </span>
                <span style={{ padding: '18px 20px 22px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1.25' }}>Новая домашняя форма представлена</span>
                  <span style={{ fontSize: '14px', color: '#8E9BB5' }}>Вчера</span>
                </span>
              </Link>
              <Link
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: '#FFFFFF',
                  color: '#172A51',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                href="/news/article"
              >
                <span style={{ position: 'relative', height: '200px', background: '#EEF3F8' }}>
                  <img
                    style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                    src={asset('/img/news-shout.webp')}
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
                      fontSize: '12px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    Трансферы
                  </span>
                </span>
                <span style={{ padding: '18px 20px 22px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1.25' }}>Новый нападающий подписал контракт с клубом</span>
                  <span style={{ fontSize: '14px', color: '#8E9BB5' }}>31 июля</span>
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
