import * as React from 'react';
import { SVGProps } from 'react';

const OptionsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.00667 8H4M8.00667 8H8M12.0067 8H12"
      stroke="#48566A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default OptionsIcon;
