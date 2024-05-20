import { memo, SVGProps } from 'react';

const Award_starIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <mask
      id='mask0_1_12307'
      style={{
        maskType: 'alpha',
      }}
      maskUnits='userSpaceOnUse'
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <rect width={24} height={24} fill='#D9D9D9' />
    </mask>
    <g mask='url(#mask0_1_12307)'>
      <path
        d='M9.07599 16.2505L12.001 14.4755L14.926 16.2505L14.151 12.9255L16.751 10.6755L13.326 10.4005L12.001 7.25046L10.676 10.4005L7.25099 10.6755L9.851 12.9255L9.07599 16.2505ZM12.001 23.3005L8.65099 20.0005H4.00099V15.3505L0.700994 12.0005L4.00099 8.65046V4.00046H8.65099L12.001 0.700461L15.351 4.00046H20.001V8.65046L23.301 12.0005L20.001 15.3505V20.0005H15.351L12.001 23.3005ZM12.001 20.5005L14.501 18.0005H18.001V14.5005L20.501 12.0005L18.001 9.50046V6.00046H14.501L12.001 3.50046L9.50099 6.00046H6.00099V9.50046L3.50099 12.0005L6.00099 14.5005V18.0005H9.50099L12.001 20.5005Z'
        fill='#992E9D'
      />
    </g>
  </svg>
);
const Memo = memo(Award_starIcon4);
export { Memo as Award_starIcon4 };
