import * as React from 'react';
import { SVGProps } from 'react';

const AngleDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5.01938 5.75871L0.785645 1.52497L2.19756 0.114059L5.01938 2.93688L7.84121 0.114059L9.25312 1.52497L5.01938 5.75871Z" fill={props.fill ?? "#413F3F"}/>
  </svg>
);

export default AngleDownIcon;
