import { createRoot } from 'react-dom/client';
import { useEffect } from 'react';
import { usePathname } from './shims/navigation';
import { router } from './router';
import { SiteHeader } from '@/components/SiteHeader';
import { FooterView } from '@/views/Footer/FooterView';
import { HomeView } from '@/views/Home/HomeView';
import { HomeMotion } from '@/components/HomeMotion';
import { TeamView } from '@/views/Team/TeamView';
import { MatchesView } from '@/views/Matches/MatchesView';
import { MediaView } from '@/views/Media/MediaView';
import { ShopView } from '@/views/Shop/ShopView';
import { ProductView } from '@/views/Product/ProductView';
import { ShopOrdersView } from '@/views/ShopOrders/ShopOrdersView';
import { FansView } from '@/views/Fans/FansView';
import { ProfileView } from '@/views/Profile/ProfileView';
import { PlayerView } from '@/views/Player/PlayerView';
import { NewsView } from '@/views/News/NewsView';
import { ArticleView } from '@/views/Article/ArticleView';
import { TicketsView } from '@/views/Tickets/TicketsView';
import { LineupView } from '@/views/Lineup/LineupView';
import { PhotosView } from '@/views/Photos/PhotosView';
import { PhotoAlbumView } from '@/views/PhotoAlbum/PhotoAlbumView';

const pages: Record<string, [string, () => JSX.Element]> = {
  '/': [
    'ORDA — официальный сайт',
    () => (
      <>
        <HomeView />
        <HomeMotion />
      </>
    ),
  ],
  '/team': ['Команды клуба', () => <TeamView />],
  '/matches': ['Матчи', () => <MatchesView />],
  '/media': ['Медиацентр', () => <MediaView />],
  '/shop': ['Клубный магазин', () => <ShopView />],
  '/shop/product': ['Карточка товара', () => <ProductView />],
  '/shop/orders': ['Мои заказы', () => <ShopOrdersView />],
  '/fans': ['Фан-зона', () => <FansView />],
  '/profile': ['Личный кабинет', () => <ProfileView />],
  '/team/player': ['Профиль игрока', () => <PlayerView />],
  '/news': ['Новости', () => <NewsView />],
  '/news/article': ['Новость', () => <ArticleView />],
  '/tickets': ['Покупка билетов', () => <TicketsView />],
  '/matches/lineup': ['Состав и расстановка', () => <LineupView />],
  '/media/photos': ['Фото', () => <PhotosView />],
  '/media/photos/album': ['Фотоальбом', () => <PhotoAlbumView />],
};
// Прямые ссылки на разделы: <ссылка артефакта>#team, #matches, #product …
const tokens: Record<string, string> = {
  team: '/team',
  matches: '/matches',
  media: '/media',
  shop: '/shop',
  product: '/shop/product',
  orders: '/shop/orders',
  fans: '/fans',
  profile: '/profile',
};

function App() {
  const path = usePathname();
  const [, render] = pages[path] ?? pages['/'];
  useEffect(() => {
    const t = tokens[location.hash.slice(1)];
    if (t) router.go(t);
  }, []);
  return (
    <>
      <SiteHeader />
      <main key={path}>{render()}</main>
      <FooterView />
    </>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
