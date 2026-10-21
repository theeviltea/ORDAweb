import type { Metadata } from 'next';
import { ProfileView } from '@/views/Profile/ProfileView';

export const metadata: Metadata = { title: 'Личный кабинет', description: 'Билеты, покупки, достижения и настройки.' };

export default function Page() {
  return <ProfileView />;
}
