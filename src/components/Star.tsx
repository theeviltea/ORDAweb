import type { CSSProperties } from 'react';

/** Фирменная четырёхлучевая звезда ORDA из брендбука. */
export function Star({
  w,
  h,
  fill,
  opacity,
  style,
  keepRatio,
}: {
  w: number;
  h: number;
  fill: string;
  opacity?: number;
  style?: CSSProperties;
  keepRatio?: boolean;
}) {
  return (
    <svg aria-hidden="true" width={w} height={h} viewBox="0 0 24 24" preserveAspectRatio={keepRatio ? undefined : 'none'} style={style}>
      <path d="M12 0C12.8 8 16 11.2 24 12 16 12.8 12.8 16 12 24 11.2 16 8 12.8 0 12 8 11.2 11.2 8 12 0z" fill={fill} fillOpacity={opacity} />
    </svg>
  );
}
