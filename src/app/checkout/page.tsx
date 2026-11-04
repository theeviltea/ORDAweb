import type { Metadata } from 'next';
import { CheckoutView } from '@/views/Checkout/CheckoutView';

export const metadata: Metadata = { title: 'Оформление заказа', description: 'Оформление и оплата заказа в клубном магазине.' };

export default function Page() {
  return <CheckoutView />;
}
