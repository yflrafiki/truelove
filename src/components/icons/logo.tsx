import type { SVGProps } from 'react';

export default function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2L12 22" />
      <path d="M5 12H19" />
      <path d="M12 2a5 5 0 0 1 5 5c0 5-5 7.5-5 7.5S7 12 7 7a5 5 0 0 1 5-5z" />
    </svg>
  );
}
