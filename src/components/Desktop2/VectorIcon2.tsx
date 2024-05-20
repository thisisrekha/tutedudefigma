import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    preserveAspectRatio='none'
    viewBox='0 0 21.33333396911621 21.33333396911621'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M2.00435 2.8336C2.6947 2.8336 3.25435 2.27396 3.25435 1.5836C3.25435 0.893244 2.6947 0.3336 2.00435 0.3336C1.31399 0.3336 0.754349 0.893244 0.754349 1.5836C0.754349 2.27396 1.31399 2.8336 2.00435 2.8336Z'
      fill='#992E9D'
    />
  </svg>
);
const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
