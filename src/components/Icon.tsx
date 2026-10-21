import { icons } from './icons';

type Props = { name: string; size?: number; color?: string; weight?: number; filled?: boolean };

/** Hugeicons (stroke rounded), сетка 24×24. weight — толщина линии. */
export function Icon({ name, size = 24, color = '#172A51', weight = 1.5, filled }: Props) {
  const ic = (icons as Record<string, { s: string; f?: string; w?: number }>)[name];
  if (!ic) return <span aria-hidden="true" style={{ display: 'inline-block', width: size, height: size, flexShrink: 0 }} />;
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, display: 'block' }}>
      <path d={ic.s} fill={filled ? color : 'none'} stroke={color} strokeWidth={ic.w ?? weight} strokeLinecap="round" strokeLinejoin="round" />
      {ic.f ? <path d={ic.f} fill={color} /> : null}
    </svg>
  );
}
