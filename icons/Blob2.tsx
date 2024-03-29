import { WithClassName } from "@/types/withClassName";

export const Blob2 = ({ className }: WithClassName) => {
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
          floodColor="var(--text-color)"
          floodOpacity=".25"
          result="color"
        />
        <feComposite operator="in" in="color" in2="inverse" result="shadow" />
        <feComposite operator="over" in="shadow" in2="SourceGraphic" />
      </filter>
      <g filter="url(#inset-shadow)">
        <path
          fill="currentColor"
          d="M47.5,-72.6C60.6,-65.4,69.9,-50.7,77.6,-35.1C85.3,-19.4,91.5,-2.7,88.9,12.5C86.3,27.7,74.9,41.3,62.4,52C50,62.7,36.5,70.4,22,74.5C7.6,78.5,-7.8,78.8,-22.8,75.4C-37.7,72,-52.1,64.8,-62.8,53.7C-73.6,42.6,-80.7,27.6,-81.2,12.7C-81.7,-2.2,-75.7,-17,-68.6,-30.8C-61.4,-44.5,-53.2,-57.2,-41.6,-65.1C-30,-73.1,-15,-76.2,1.1,-77.9C17.1,-79.6,34.3,-79.8,47.5,-72.6Z"
          transform="translate(100 100)"
        />
      </g>
    </svg>
  );
};
