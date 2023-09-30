import { WithClassName } from "@/types/withClassName";

export const QuotationMark = ({ className }: WithClassName) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 96"
      fill="none"
    >
      <filter
        id="innerShadow"
        x="0"
        y="12"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
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
          result="effect1_innerShadow_891_13"
        />
      </filter>
      <g filter="url(#innerShadow)">
        <path
          d="M56.068 84L56.068 54.436C56.068 31.62 70.992 16.156 92 12L95.98 20.604C86.252 24.272 80 35.156 80 44H96V84H56.068ZM0 84V54.436C0 31.62 14.992 16.152 36 12L39.984 20.604C30.252 24.272 24 35.156 24 44H39.932L39.932 84L0 84Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
