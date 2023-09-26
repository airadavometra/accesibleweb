import { WithClassName } from "@/types/withClassName";

export const Blob8 = ({ className }: WithClassName) => {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="inset-shadow">
        <feOffset dx="0" dy="4" />
        <feGaussianBlur stdDeviation="16" result="offset-blur" />
        <feComposite
          operator="out"
          in="SourceGraphic"
          in2="offset-blur"
          result="inverse"
        />
        <feFlood
          flood-color="var(--text-color)"
          flood-opacity=".25"
          result="color"
        />
        <feComposite operator="in" in="color" in2="inverse" result="shadow" />
        <feComposite operator="over" in="shadow" in2="SourceGraphic" />
      </filter>
      <g filter="url(#inset-shadow)">
        <path
          fill="currentColor"
          d="M53.9,-42.8C68.6,-24.6,78.3,-2.2,74.2,17.5C70.2,37.2,52.3,54.3,31.4,63.8C10.6,73.2,-13.2,75,-33.4,66.3C-53.6,57.7,-70.2,38.8,-74.8,17.4C-79.3,-3.9,-71.9,-27.7,-57.4,-45.9C-43,-64.1,-21.5,-76.7,-0.9,-76C19.6,-75.2,39.2,-61.1,53.9,-42.8Z"
          transform="translate(100 100)"
        />
      </g>
    </svg>
  );
};
