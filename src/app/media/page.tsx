import type { Metadata } from 'next';
import { MediaView } from '@/views/Media/MediaView';

export const metadata: Metadata = { title: 'Медиацентр', description: 'Новости, видео, фото, интервью и пресс-конференции.' };

export default function Page() {
  return <MediaView />;
}
