import type { Metadata } from 'next';
import { NewsView } from '@/views/News/NewsView';

export const metadata: Metadata = { title: 'Новости', description: 'Новости футбольного клуба «Ордабасы».' };

export default function Page() {
  return <NewsView />;
}
