import type { AnchorHTMLAttributes } from 'react';
import { router } from '../router';

export default function Link({ href, onClick, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <a
      {...rest}
      href={href}
      onClick={(e) => {
        onClick?.(e);
        if (href.startsWith('#') || /^https?:/.test(href)) return;
        e.preventDefault();
        router.go(href);
      }}
    />
  );
}
