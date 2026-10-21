import { useSyncExternalStore } from 'react';
import { router } from '../router';

export function usePathname() {
  return useSyncExternalStore(router.sub, router.get, router.get);
}
