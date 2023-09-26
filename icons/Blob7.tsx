import { WithClassName } from "@/types/withClassName";

export const Blob7 = ({ className }: WithClassName) => {
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
          d="M56.8,-43.2C72.6,-25.5,83.7,-1.9,79.3,18.4C74.9,38.6,54.9,55.6,33.3,64.1C11.7,72.6,-11.7,72.7,-30.8,63.6C-49.9,54.5,-64.7,36.3,-69.8,15.5C-74.9,-5.3,-70.3,-28.8,-57,-46C-43.7,-63.2,-21.9,-74,-0.7,-73.5C20.5,-72.9,41,-61,56.8,-43.2Z"
          transform="translate(100 100)"
        />
      </g>
    </svg>
  );
};
