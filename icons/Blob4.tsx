import { WithClassName } from "@/types/withClassName";

export const Blob4 = ({ className }: WithClassName) => {
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
          d="M59.5,-48.3C74.8,-28.3,83.3,-3.7,78.3,17.9C73.4,39.4,55.1,57.9,32.6,69.2C10.2,80.5,-16.3,84.8,-38.4,75.7C-60.5,66.6,-78.2,44.3,-82.3,20.5C-86.4,-3.3,-76.9,-28.5,-60.9,-48.7C-44.9,-68.8,-22.5,-83.8,-0.2,-83.7C22.1,-83.6,44.2,-68.2,59.5,-48.3Z"
          transform="translate(100 100)"
        />
      </g>
    </svg>
  );
};
