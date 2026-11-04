import type { Metadata } from 'next';
import { CheckoutPaidView } from '@/views/CheckoutPaid/CheckoutPaidView';

export const metadata: Metadata = { title: 'Оплата прошла', description: 'Заказ оплачен.' };

export default function Page() {
  return <CheckoutPaidView />;
}
