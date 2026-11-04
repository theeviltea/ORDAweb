import type { Metadata } from 'next';
import { DocsView } from '@/views/Docs/DocsView';

export const metadata: Metadata = {
  title: 'Оферта и правила',
  description: 'Публичная оферта, политика конфиденциальности, оплата, доставка, обмен и возврат.',
};

export default function Page() {
  return <DocsView />;
}
