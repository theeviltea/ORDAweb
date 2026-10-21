'use client';

import { useEffect } from 'react';

/**
 * Анимации главной: блоки мягко появляются при прокрутке, в некоторых блоках —
 * параллакс (фото, звёзды, крупные надписи). Отключается при prefers-reduced-motion.
 */
export function HomeMotion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const main = document.querySelector('main');
    if (!main) return;

    // --- появление блоков ---
    const blocks = Array.from(main.querySelectorAll<HTMLElement>('section[aria-label]')).filter(
      (s) => s.getAttribute('aria-label') !== 'Главное' && !s.closest('section[aria-label] section'),
    );
    const groups: HTMLElement[][] = [];
    blocks.forEach((sec) => {
      const kids: HTMLElement[] = [];
      sec.querySelectorAll<HTMLElement>('div').forEach((d) => {
        const st = getComputedStyle(d);
        if ((st.display === 'grid' || (st.display === 'flex' && st.flexWrap === 'wrap')) && d.children.length >= 3 && !d.closest('[role="tablist"]')) {
          Array.from(d.children).forEach((c) => c instanceof HTMLElement && c.getBoundingClientRect().height > 80 && kids.push(c));
        }
      });
      groups.push(kids);
    });

    const vh = window.innerHeight;
    const hidden = new Set<HTMLElement>();
    blocks.forEach((sec, i) => {
      if (sec.getBoundingClientRect().top < vh * 0.9) return; // уже на экране — не прячем
      sec.classList.add('rv');
      hidden.add(sec);
      groups[i].forEach((c, k) => {
        c.classList.add('rv-item');
        c.style.transitionDelay = `${Math.min(k, 8) * 70 + 120}ms`;
      });
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add('rv-in');
          io.unobserve(e.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
    );
    hidden.forEach((s) => io.observe(s));

    // --- параллакс ---
    type P = { el: HTMLElement | SVGElement; k: number; base: string };
    const items: P[] = [];
    const add = (el: Element | null, k: number) => {
      if (!(el instanceof HTMLElement || el instanceof SVGElement)) return;
      // двигаем только декор, лежащий поверх раскладки (звёзды, надписи, фото), но не иконки
      if (el.getAttribute('fill') === 'none' || getComputedStyle(el).position !== 'absolute') {
        if (!(el instanceof HTMLImageElement)) return;
      }
      items.push({ el, k, base: el.style.transform || '' });
    };
    const hero = main.querySelector('section[aria-label="Главное"]');
    if (hero) {
      hero.querySelectorAll(':scope > svg').forEach((s, i) => add(s, [0.35, 0.5, -0.15][i] ?? 0.2));
      add(hero.querySelector(':scope > img'), 0.1); // флаг на фоне
    }
    const player = main.querySelector('section[aria-label="Игрок матча"]');
    if (player) {
      player.querySelectorAll('span[aria-hidden]').forEach((s) => s.textContent?.trim() === '10' && add(s, -0.18));
      player.querySelectorAll('svg').forEach((s, i) => i < 2 && add(s, 0.2 + i * 0.15));
    }
    main
      .querySelectorAll(
        'section[aria-label="Моменты"] > svg, section[aria-label="Партнёры клуба"] svg, section[aria-label="Медиа"] > svg, section[aria-label="Интервью"] svg',
      )
      .forEach((s, i) => add(s, 0.12 + (i % 3) * 0.08));
    const news = main.querySelector<HTMLElement>('section[aria-label="Новости"]');

    let raf = 0;
    const frame = () => {
      raf = 0;
      const h = window.innerHeight;
      items.forEach(({ el, k, base }) => {
        const host = (el.closest('section') as HTMLElement) || el.parentElement!;
        const r = host.getBoundingClientRect();
        if (r.bottom < -200 || r.top > h + 200) return;
        const off = (r.top + r.height / 2 - h / 2) * k;
        el.style.transform = `${base} translate3d(0, ${off.toFixed(1)}px, 0)`;
      });
      if (news) {
        const r = news.getBoundingClientRect();
        news.style.backgroundPosition = `center calc(100% + ${((r.top - h / 2) * 0.15).toFixed(1)}px)`;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };
    frame();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return null;
}
