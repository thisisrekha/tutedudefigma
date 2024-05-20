import { memo, SVGProps } from 'react';

const GroupIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M23.0381 6.88409C20.6097 3.13732 16.4637 0.858547 11.999 0.816658C7.53423 0.858547 3.38823 3.13732 0.959804 6.88409C-0.31995 8.76221 -0.31995 11.2322 0.959804 13.1104C3.38686 16.8594 7.5331 19.1406 11.999 19.1838C16.4637 19.1419 20.6097 16.8632 23.0382 13.1164C24.3206 11.2369 24.3206 8.76357 23.0381 6.88409ZM20.5533 11.4075C18.6992 14.3483 15.4753 16.1424 11.999 16.1682C8.52265 16.1425 5.29872 14.3483 3.44463 11.4075C2.86662 10.5583 2.86662 9.44209 3.44463 8.59295C5.29867 5.65221 8.5226 3.85805 11.999 3.83228C15.4753 3.85801 18.6992 5.65221 20.5533 8.59295C21.1313 9.44209 21.1313 10.5583 20.5533 11.4075Z'
      fill='#B73BBE'
    />
    <path
      d='M11.9989 14.0209C14.2195 14.0209 16.0197 12.2207 16.0197 10C16.0197 7.77941 14.2195 5.97923 11.9989 5.97923C9.77823 5.97923 7.97805 7.77941 7.97805 10C7.97805 12.2207 9.77823 14.0209 11.9989 14.0209Z'
      fill='#B73BBE'
    />
  </svg>
);
const Memo = memo(GroupIcon2);
export { Memo as GroupIcon2 };
