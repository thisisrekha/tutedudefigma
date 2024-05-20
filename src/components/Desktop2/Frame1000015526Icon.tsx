import { memo, SVGProps } from 'react';

const Frame1000015526Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 558 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={558} height={10} rx={5} fill='white' fillOpacity={0.15} />
    <g filter='url(#filter0_i_1_13126)'>
      <rect width={159} height={10} rx={5} fill='#FFC41B' />
    </g>
    <circle cx={159} cy={5} r={11} fill='#FFC41B' stroke='white' strokeWidth={3} />
    <defs>
      <filter
        id='filter0_i_1_13126'
        x={0}
        y={0}
        width={159}
        height={12}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0' />
        <feBlend mode='normal' in2='shape' result='effect1_innerShadow_1_13126' />
      </filter>
    </defs>
  </svg>
);
const Memo = memo(Frame1000015526Icon);
export { Memo as Frame1000015526Icon };
