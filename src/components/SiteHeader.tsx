'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { HeaderView } from '@/views/Header/HeaderView';

const sections: [string, string][] = [
  ['/team', 'team'],
  ['/matches', 'matches'],
  ['/media', 'media'],
  ['/news', 'media'],
  ['/shop', 'shop'],
  ['/fans', 'fans'],
  ['/tickets', 'none'],
  ['/profile', 'none'],
];

export function SiteHeader() {
  const path = usePathname() || '/';
  const hit = sections.find(([p]) => path === p || path.startsWith(p + '/'));
  // Панель прилипает, когда уехала верхняя полоса (32px) — с этого момента включаем прозрачность.
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 32);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <div className={scrolled ? 'site-header is-scrolled' : 'site-header'}>
      <HeaderView active={hit ? hit[1] : 'home'} />
    </div>
  );
}
