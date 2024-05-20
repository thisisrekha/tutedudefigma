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
      d='M2.00522 3.00032C2.83365 3.00032 3.50522 2.32875 3.50522 1.50032C3.50522 0.671893 2.83365 0.000320435 2.00522 0.000320435C1.17679 0.000320435 0.505219 0.671893 0.505219 1.50032C0.505219 2.32875 1.17679 3.00032 2.00522 3.00032Z'
      fill='#374957'
    />
  </svg>
);
const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
