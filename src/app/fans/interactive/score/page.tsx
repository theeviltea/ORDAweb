import type { Metadata } from 'next';
import { HalftimeScoreView } from '@/views/HalftimeScore/HalftimeScoreView';

export const metadata: Metadata = { title: 'Счёт перерыва', description: 'Угадайте счёт первого тайма и получите баллы.' };

export default function Page() {
  return <HalftimeScoreView />;
}
