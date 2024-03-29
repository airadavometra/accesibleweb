import { WithClassName } from "@/types/withClassName";

export const Blob5 = ({ className }: WithClassName) => {
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
          d="M61.1,-47.7C77.3,-28.5,87.1,-3.2,81.4,17.4C75.8,38,54.7,54,32.7,62.6C10.6,71.2,-12.5,72.5,-31.2,63.8C-49.8,55.2,-64.2,36.5,-68.5,16C-72.9,-4.5,-67.3,-26.9,-54.3,-45.4C-41.2,-63.9,-20.6,-78.6,0.9,-79.4C22.5,-80.1,45,-67,61.1,-47.7Z"
          transform="translate(100 100)"
        />
      </g>
    </svg>
  );
};
