import type { Metadata } from 'next';
import { TicketsView } from '@/views/Tickets/TicketsView';

export const metadata: Metadata = { title: 'Покупка билетов', description: 'Билеты на домашние матчи «Ордабасы».' };

export default function Page() {
  return <TicketsView />;
}
