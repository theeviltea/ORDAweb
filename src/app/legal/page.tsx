import type { Metadata } from 'next';
import { LegalView } from '@/views/Legal/LegalView';

export const metadata: Metadata = {
  title: 'Документы и реквизиты',
  description: 'Реквизиты ФК «Ордабасы», контакты поддержки, условия покупки, оплаты, доставки и возврата.',
};

export default function Page() {
  return <LegalView />;
}
