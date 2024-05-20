import { memo, SVGProps } from 'react';

const GroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M22.9994 1.00243C22.1725 0.163954 20.9667 -0.179824 19.8219 0.0965578L4.53612 3.30909C1.63329 3.73864 -0.371683 6.44008 0.0578643 9.34286C0.224856 10.4714 0.750671 11.5162 1.55751 12.3228L3.19625 13.9626C3.27298 14.0383 3.31586 14.1417 3.31525 14.2495V17.2731C3.31746 19.1541 4.84175 20.6784 6.72276 20.6806H9.74632C9.85426 20.6806 9.95784 20.7234 10.0343 20.7996L11.673 22.4384C12.6639 23.4358 14.0115 23.9972 15.4175 23.9981C15.9978 23.9977 16.5743 23.9028 17.1242 23.7172C19.022 23.0869 20.401 21.4389 20.6867 19.4598L23.8993 4.22199C24.1879 3.06519 23.846 1.84193 22.9994 1.00243ZM3.12131 7.82742C3.39305 6.98787 4.12635 6.38163 5.00204 6.27266C5.03738 6.26798 5.07234 6.26198 5.10703 6.25467L18.4271 3.45509L6.31487 15.5603V14.2495C6.31707 13.3452 5.95693 12.4777 5.31503 11.8408L3.67825 10.2021C3.04782 9.5855 2.83073 8.66004 3.12131 7.82742ZM17.7412 18.8939C17.7332 18.9289 17.7282 18.9638 17.7232 18.9988C17.5496 20.2654 16.3821 21.1513 15.1156 20.9777C14.6152 20.9091 14.151 20.6787 13.7938 20.3217L12.156 18.6839C11.5188 18.0418 10.651 17.6817 9.74637 17.684H8.43556L20.5448 5.5718L17.7412 18.8939Z'
      fill='#374957'
    />
  </svg>
);
const Memo = memo(GroupIcon);
export { Memo as GroupIcon };
