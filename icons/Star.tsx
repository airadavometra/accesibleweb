import { WithClassName } from "@/types/withClassName";

export const Star = ({ className }: WithClassName) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 34 33"
      fill="none"
    >
      <g filter="url(#filter0_i_858_167679)">
        <path
          d="M17 0.425781L22.15 10.8591L33.6667 12.5424L25.3334 20.6591L27.3 32.1258L17 26.7091L6.70004 32.1258L8.66671 20.6591L0.333374 12.5424L11.85 10.8591L17 0.425781Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_858_167679"
          x="0.333374"
          y="0.425781"
          width="33.3334"
          height="35.6992"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_858_167679"
          />
        </filter>
      </defs>
    </svg>
  );
};
