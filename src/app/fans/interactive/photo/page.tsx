import type { Metadata } from 'next';
import { PhotoWallView } from '@/views/PhotoWall/PhotoWallView';

export const metadata: Metadata = { title: 'Фото на табло', description: 'Отправьте селфи с трибуны — лучшие фото покажут на большом экране стадиона.' };

export default function Page() {
  return <PhotoWallView />;
}
