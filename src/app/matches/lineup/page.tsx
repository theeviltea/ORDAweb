import type { Metadata } from 'next';
import { LineupView } from '@/views/Lineup/LineupView';

export const metadata: Metadata = { title: 'Состав и расстановка', description: 'Состав «Ордабасы» на матч и расстановка.' };

export default function Page() {
  return <LineupView />;
}
