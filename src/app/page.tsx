import type { Metadata } from 'next';
import { HomeView } from '@/views/Home/HomeView';

export const metadata: Metadata = {
  title: { absolute: 'ORDA — официальный сайт ФК «Ордабасы»' },
  description: 'Новости, матчи, команда, билеты и магазин футбольного клуба «Ордабасы».',
};

export default function Page() {
  return <HomeView />;
}
