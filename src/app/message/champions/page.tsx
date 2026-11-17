import type { Metadata } from 'next';
import { BroadcastView } from '@/views/Broadcast/BroadcastView';

export const metadata: Metadata = { title: 'Мы — чемпионы! «Ордабасы» на вершине Казахстана!', description: 'Сообщение клуба: чемпионский парад 22 ноября.' };

export default function Page() {
  return <BroadcastView variant="rich" />;
}
