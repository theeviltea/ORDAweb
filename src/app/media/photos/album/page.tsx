import type { Metadata } from 'next';
import { PhotoAlbumView } from '@/views/PhotoAlbum/PhotoAlbumView';

export const metadata: Metadata = { title: 'Ордабасы — Кайрат: эмоции победного матча', description: 'Фотоальбом «Ордабасы».' };

export default function Page() {
  return <PhotoAlbumView />;
}
