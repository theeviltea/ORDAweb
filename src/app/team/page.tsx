import type { Metadata } from 'next';
import { TeamView } from '@/views/Team/TeamView';

export const metadata: Metadata = { title: 'Команды клуба', description: 'Основной состав, молодёжная и женская команды, академия «Ордабасы».' };

export default function Page() {
  return <TeamView />;
}
