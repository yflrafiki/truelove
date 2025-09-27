import type { SVGProps } from 'react';

export default function Logo(props: SVGProps<SVGSVGElement>) {
  const {
    // Destructure and omit props that are already defined in the SVG
    viewBox,
    fill,
    stroke,
    strokeWidth,
    strokeLinecap,
    strokeLinejoin,
    xmlns,
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      {...rest}
    >
      <g>
        <path fill="#FFD700" d="M20,20 h160 v40 H20z" />
        <path
          fill="#FFD700"
          stroke="#000080"
          strokeWidth="2"
          d="M20,60 C20,150 100,180 100,180 S180,150 180,60 H20z"
        />
        <path
          fill="none"
          stroke="#000080"
          strokeWidth="2"
          d="M20,20 h160 v40 H20 M20,60 C20,150 100,180 100,180 S180,150 180,60"
        />
        <text
          x="100"
          y="45"
          fontFamily="Arial, sans-serif"
          fontSize="16"
          fontWeight="bold"
          fill="#000080"
          textAnchor="middle"
        >
          ASSEMBLIES OF GOD
        </text>

        <path
          d="M40 85 L35 80 L65 80 L70 85 L70 110 L52.5 120 L35 110 Z"
          fill="white"
          stroke="#000080"
          strokeWidth="1.5"
        />
        <text
          x="52.5"
          y="95"
          fontFamily="serif"
          fontSize="8"
          fill="black"
          textAnchor="middle"
        >
          All The
        </text>
        <text
          x="52.5"
          y="108"
          fontFamily="serif"
          fontSize="8"
          fill="black"
          textAnchor="middle"
        >
          Gospel
        </text>

        <text
          x="125"
          y="140"
          fontFamily="serif"
          fontSize="80"
          fontWeight="bold"
          fill="#000080"
          fontStyle="italic"
          textAnchor="middle"
        >
          AG
        </text>
      </g>
    </svg>
  );
}
