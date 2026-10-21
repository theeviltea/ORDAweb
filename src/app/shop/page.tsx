import type { Metadata } from 'next';
import { ShopView } from '@/views/Shop/ShopView';

export const metadata: Metadata = { title: 'Клубный магазин', description: 'Официальная экипировка «Ордабасы».' };

export default function Page() {
  return <ShopView />;
}
