import type { Metadata } from 'next';
import { PlayerView } from '@/views/Player/PlayerView';

export const metadata: Metadata = { title: 'Эльхан Астанов', description: 'Профиль игрока «Ордабасы»: биография, статистика, награды.' };

export default function Page() {
  return <PlayerView />;
}
