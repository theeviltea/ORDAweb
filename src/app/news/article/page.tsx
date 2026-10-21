import type { Metadata } from 'next';
import { ArticleView } from '@/views/Article/ArticleView';

export const metadata: Metadata = { title: '«Ордабасы» сохранил лидерство', description: 'Новость клуба «Ордабасы».' };

export default function Page() {
  return <ArticleView />;
}
