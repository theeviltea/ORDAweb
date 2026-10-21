import type { Metadata, Viewport } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { FooterView } from '@/views/Footer/FooterView';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'ORDA — ФК «Ордабасы»', template: '%s — ORDA' },
  description: 'Официальный сайт футбольного клуба «Ордабасы», Шымкент.',
  icons: { icon: (process.env.NEXT_PUBLIC_BASE_PATH || '') + '/img/crest.png' },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#172A51' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <FooterView />
      </body>
    </html>
  );
}
