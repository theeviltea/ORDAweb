import type { Metadata } from 'next';
import { CheckoutTicketsView } from '@/views/CheckoutTickets/CheckoutTicketsView';

export const metadata: Metadata = { title: 'Оплата билетов', description: 'Оформление и оплата билетов на матч.' };

export default function Page() {
  return <CheckoutTicketsView />;
}
