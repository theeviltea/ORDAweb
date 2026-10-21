import type { Metadata } from 'next';
import { ProductView } from '@/views/Product/ProductView';

export const metadata: Metadata = { title: 'Домашняя джерси 2024/25', description: 'Карточка товара клубного магазина.' };

export default function Page() {
  return <ProductView />;
}
