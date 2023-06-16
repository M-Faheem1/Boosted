import * as React from "react";
const SvgCopy = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <g fill="#fff" clipPath="url(#copy_svg__a)">
      <path d="M11.156 13.126H5.031a1.968 1.968 0 0 1-1.968-1.969V5.032A1.969 1.969 0 0 1 5.03 3.063h6.125a1.969 1.969 0 0 1 1.969 1.97v6.124a1.969 1.969 0 0 1-1.969 1.969Z" />
      <path d="M4.375 2.188h6.45A1.971 1.971 0 0 0 8.969.876H2.844A1.969 1.969 0 0 0 .875 2.845V8.97a1.972 1.972 0 0 0 1.313 1.856v-6.45a2.188 2.188 0 0 1 2.187-2.188Z" />
    </g>
    <defs>
      <clipPath id="copy_svg__a">
        <path fill="#fff" d="M0 0h14v14H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCopy;
