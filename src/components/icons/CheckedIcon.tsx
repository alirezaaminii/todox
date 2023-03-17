import { SVGProps } from 'react';
import {colors} from "@/styles/colors";

const CheckedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.3337 4L6.00033 11.3333L2.66699 8"
      stroke={colors.primary}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CheckedIcon;
