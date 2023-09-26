import { WithClassName } from "@/types/withClassName";

export const Blob1 = ({ className }: WithClassName) => {
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
          d="M45.9,-78.3C59.2,-71.7,69.6,-59,77.6,-44.9C85.6,-30.8,91.2,-15.4,91.6,0.2C91.9,15.8,87,31.6,78.5,44.8C70,58,57.8,68.5,44.1,73.9C30.4,79.3,15.2,79.6,1.2,77.5C-12.8,75.5,-25.6,71,-36.7,64.1C-47.7,57.1,-56.9,47.7,-65.2,36.6C-73.4,25.5,-80.7,12.7,-83.2,-1.4C-85.7,-15.6,-83.5,-31.2,-76.4,-44.5C-69.4,-57.7,-57.6,-68.5,-44,-75C-30.5,-81.5,-15.3,-83.7,0.5,-84.6C16.3,-85.5,32.5,-85,45.9,-78.3Z"
          transform="translate(100 100)"
        />
      </g>
    </svg>
  );
};
