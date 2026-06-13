import type { SVGProps } from 'react';

type SvgProps = SVGProps<SVGSVGElement>;

export function IconMax({ width = 22, height = 22, ...rest }: SvgProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" aria-hidden="true" {...rest}>
      <path
        d="M21.255 2.255c.3-.117.63-.117.93 0 .608.236.91.96.674 1.568l-6.17 16.03c-.32.831-1.24 1.24-2.055.897-.357-.153-.64-.46-.785-.825l-2.02-5.09 4.466-4.466c.238-.238.238-.623 0-.86-.237-.238-.622-.238-.86 0l-5.08 2.02-5.09-2.02c-.367-.148-.672-.428-.825-.786-.343-.814.065-1.734.896-2.054l16.03-6.17Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconPhone({ width = 22, height = 22, ...rest }: SvgProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" aria-hidden="true" {...rest}>
      <path
        d="M17.707 14.293a1 1 0 0 0-1.414 0l-1.586 1.586c-.301.302-.765.37-1.139.163-1.117-.617-2.258-1.78-3.266-3.266-.206-.3-.174-.706.073-.974l1.506-1.647a1 1 0 0 0-.04-1.404L7.52 5.126a1 1 0 0 0-1.3-.07C5.03 5.99 4.5 6.95 4.5 8c0 4.69 5.81 11.5 10.5 11.5 1.05 0 2.01-.53 2.944-1.72a1 1 0 0 0-.07-1.3l-2.167-2.187Z"
        fill="currentColor"
      />
    </svg>
  );
}

type IconMenuProps = SvgProps & { open: boolean };

export function IconMenu({ open, className, ...rest }: IconMenuProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...rest}>
      {open ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  );
}
