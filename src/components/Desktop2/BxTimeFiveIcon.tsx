import { memo, SVGProps } from 'react';

const BxTimeFiveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M14 2.33333C7.567 2.33333 2.33333 7.567 2.33333 14C2.33333 20.433 7.567 25.6667 14 25.6667C20.433 25.6667 25.6667 20.433 25.6667 14C25.6667 7.567 20.433 2.33333 14 2.33333ZM14 23.3333C8.85383 23.3333 4.66667 19.1462 4.66667 14C4.66667 8.85383 8.85383 4.66667 14 4.66667C19.1462 4.66667 23.3333 8.85383 23.3333 14C23.3333 19.1462 19.1462 23.3333 14 23.3333Z'
      fill='white'
    />
    <path d='M15.1667 8.16667H12.8333V14.483L16.6752 18.3248L18.3248 16.6752L15.1667 13.517V8.16667Z' fill='white' />
  </svg>
);
const Memo = memo(BxTimeFiveIcon);
export { Memo as BxTimeFiveIcon };
