import { PlayerCardInnerView } from '@/views/PlayerCardInner/PlayerCardInnerView';

export type Person = { num: string; name: string; role: string; photo: string; href?: string };

export function PlayerCard({ person }: { person: Person }) {
  return <PlayerCardInnerView person={person} />;
}
