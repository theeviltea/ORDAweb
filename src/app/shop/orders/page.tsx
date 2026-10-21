import type { Metadata } from 'next';
import { ShopOrdersView } from '@/views/ShopOrders/ShopOrdersView';

export const metadata: Metadata = { title: 'Мои заказы', description: 'Статусы доставки и история покупок.' };

export default function Page() {
  return <ShopOrdersView />;
}
