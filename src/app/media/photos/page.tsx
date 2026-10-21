import type { Metadata } from 'next';
import { PhotosView } from '@/views/Photos/PhotosView';

export const metadata: Metadata = { title: 'Фото', description: 'Фотоотчёты с матчей и событий клуба.' };

export default function Page() {
  return <PhotosView />;
}
