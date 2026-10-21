'use client';

import { usePathname } from 'next/navigation';
import { HeaderView } from '@/views/Header/HeaderView';

const sections: [string, string][] = [
  ['/team', 'team'],
  ['/matches', 'matches'],
  ['/media', 'media'],
  ['/news', 'media'],
  ['/shop', 'shop'],
  ['/fans', 'fans'],
  ['/profile', 'none'],
];

export function SiteHeader() {
  const path = usePathname() || '/';
  const hit = sections.find(([p]) => path === p || path.startsWith(p + '/'));
  return (
    <div className="site-header">
      <HeaderView active={hit ? hit[1] : 'home'} />
    </div>
  );
}
