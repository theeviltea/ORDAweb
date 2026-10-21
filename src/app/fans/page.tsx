import type { Metadata } from 'next';
import { FansView } from '@/views/Fans/FansView';

export const metadata: Metadata = { title: 'Фан-зона', description: 'Викторины, конкурсы, опросы и прогнозы.' };

export default function Page() {
  return <FansView />;
}
