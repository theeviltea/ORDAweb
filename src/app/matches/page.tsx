import type { Metadata } from 'next';
import { MatchesView } from '@/views/Matches/MatchesView';

export const metadata: Metadata = { title: 'Матчи', description: 'Календарь, результаты и турнирная таблица.' };

export default function Page() {
  return <MatchesView />;
}
