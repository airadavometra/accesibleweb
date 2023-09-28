import { WithClassName } from "@/types/withClassName";

export const Blob6 = ({ className }: WithClassName) => {
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
          d="M63.5,-52.1C78.1,-32.3,82.9,-6.2,77.4,17.5C71.8,41.1,55.9,62.1,34.6,72.7C13.3,83.3,-13.5,83.5,-33.5,72.6C-53.4,61.8,-66.6,40,-70.6,17.5C-74.6,-5,-69.6,-28.2,-56.3,-47.7C-43,-67.2,-21.5,-82.9,1.5,-84.1C24.4,-85.3,48.9,-71.9,63.5,-52.1Z"
          transform="translate(100 100)"
        />
      </g>
    </svg>
  );
};
