import type { Metadata } from 'next';
import { InteractiveView } from '@/views/Interactive/InteractiveView';

export const metadata: Metadata = {
  title: 'Интерактив на стадионе',
  description: 'Игры в матч-день: отметка на стадионе, фото на табло, счёт перерыва и розыгрыш призов.',
};

export default function Page() {
  return <InteractiveView />;
}
