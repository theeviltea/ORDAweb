import type { Metadata } from 'next';
import { BroadcastView } from '@/views/Broadcast/BroadcastView';

export const metadata: Metadata = { title: 'Стадион закрыт на обслуживание 20–22 ноября', description: 'Сообщение клуба для болельщиков.' };

export default function Page() {
  return <BroadcastView variant="plain" />;
}
