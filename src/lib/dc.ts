'use client';

import { useCallback, useEffect, useMemo, useReducer, useState } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
type State = Record<string, any>;

const SSR_NOW = Date.parse('2026-10-21T12:00:00+06:00');

/**
 * Мини-аналог DCLogic из дизайн-макета: state/setState с мёржем, props и forceUpdate.
 * Логика экранов (*.vals.js) получает этот объект как `self`.
 */
export function useDC<P extends object>(props: P, tick = false) {
  const [state, set] = useState<State>({});
  const [, force] = useReducer((n: number) => n + 1, 0);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const setState = useCallback((patch: State | ((s: State) => State)) => {
    set((s) => ({ ...s, ...(typeof patch === 'function' ? patch(s) : patch) }));
  }, []);

  useEffect(() => {
    if (!tick) return;
    const id = setInterval(force, 1000);
    return () => clearInterval(id);
  }, [tick]);

  // До гидрации время фиксировано, чтобы серверная и клиентская разметка совпали.
  const now = mounted ? Date.now() : SSR_NOW;
  return useMemo(() => ({ state, setState, props, forceUpdate: force, now }), [state, setState, props, now]);
}
