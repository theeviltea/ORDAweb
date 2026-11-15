import type { Metadata } from 'next';
import { HalftimeDrawView } from '@/views/HalftimeDraw/HalftimeDrawView';

export const metadata: Metadata = { title: 'Розыгрыш в перерыве', description: 'Розыгрыш призов среди болельщиков на стадионе.' };

export default function Page() {
  return <HalftimeDrawView />;
}
