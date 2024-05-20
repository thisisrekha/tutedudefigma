import { memo, SVGProps } from 'react';

const BiImageAltIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_1_13141)'>
      <path
        d='M7 2.5C7 3.16304 6.73661 3.79893 6.26777 4.26777C5.79893 4.73661 5.16304 5 4.5 5C3.83696 5 3.20107 4.73661 2.73223 4.26777C2.26339 3.79893 2 3.16304 2 2.5C2 1.83696 2.26339 1.20107 2.73223 0.732233C3.20107 0.263392 3.83696 0 4.5 0C5.16304 0 5.79893 0.263392 6.26777 0.732233C6.73661 1.20107 7 1.83696 7 2.5V2.5ZM11.225 6.553C11.1312 6.50602 11.025 6.48973 10.9215 6.50642C10.8179 6.52311 10.7223 6.57194 10.648 6.646L6.938 11.356L4.278 8.584C4.18196 8.52006 4.06676 8.4913 3.95194 8.5026C3.83712 8.5139 3.72973 8.56456 3.648 8.646L0.00200081 13V15C0.00200081 15.2652 0.107358 15.5196 0.294894 15.7071C0.48243 15.8946 0.736784 16 1.002 16H15.002C15.1333 16 15.2634 15.9741 15.3847 15.9239C15.506 15.8736 15.6162 15.8 15.7091 15.7071C15.802 15.6142 15.8756 15.504 15.9259 15.3827C15.9761 15.2614 16.002 15.1313 16.002 15V10.5L11.225 6.553V6.553Z'
        fill='black'
      />
    </g>
    <defs>
      <clipPath id='clip0_1_13141'>
        <rect width={16} height={16} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(BiImageAltIcon);
export { Memo as BiImageAltIcon };
