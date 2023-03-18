import * as React from 'react';
import { SVGProps } from 'react';

const LoadingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.878 1.46978C15.1458 1.73757 15.1458 2.21243 14.878 2.48022L11.7464 5.6118C11.4786 5.87959 11.0038 5.87959 10.736 5.6118C10.4682 5.34401 10.4682 4.86914 10.736 4.60135L13.8576 1.46978C14.1254 1.202 14.6003 1.202 14.878 1.46978Z"
      fill={props.fill || '#DC2828'}
    />
    <path
      opacity="0.5"
      d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM8 1.33333C4.26156 1.33333 1.33333 4.26156 1.33333 8C1.33333 11.7384 4.26156 14.6667 8 14.6667C11.7384 14.6667 14.6667 11.7384 14.6667 8C14.6667 4.26156 11.7384 1.33333 8 1.33333Z"
      fill={props.fill || '#DC2828'}
    />
  </svg>
);

export default LoadingIcon;