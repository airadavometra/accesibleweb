import { WithClassName } from "@/types/withClassName";

export const HeaderWave = ({ className }: WithClassName) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMaxYMax"
      viewBox="0 0 1400 100"
    >
      <filter id="inset-shadow">
        <feOffset dx="0" dy="-4" />
        <feGaussianBlur stdDeviation="8" result="offset-blur" />
        <feComposite
          operator="out"
          in="SourceGraphic"
          in2="offset-blur"
          result="inverse"
        />
        <feFlood
          floodColor="var(--text-color)"
          floodOpacity=".15"
          result="color"
        />
        <feComposite operator="in" in="color" in2="inverse" result="shadow" />
        <feComposite operator="over" in="shadow" in2="SourceGraphic" />
      </filter>
      <g
        filter="url(#inset-shadow)"
        transform="translate(700,50) scale(1,1) translate(-700,-50)"
      >
        <path d="" fill="currentColor">
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            keyTimes="0;0.333;0.667;1"
            calcMode="spline"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
            begin="0s"
            values="M0 0L 0 71.44485152963465Q 233.33333333333334 110.27441043961231  466.6666666666667 71.75625880224067T 933.3333333333334 68.16417108724205T 1400 66.65564457884895L 1400 0 Z;M0 0L 0 72.70642406954121Q 233.33333333333334 91.2430350498279  466.6666666666667 68.96217871125965T 933.3333333333334 69.02376149220463T 1400 65.49596956788436L 1400 0 Z;M0 0L 0 73.71278949414561Q 233.33333333333334 103.03208523040978  466.6666666666667 70.50344977214436T 933.3333333333334 68.82046711188872T 1400 66.13515915012542L 1400 0 Z;M0 0L 0 71.44485152963465Q 233.33333333333334 110.27441043961231  466.6666666666667 71.75625880224067T 933.3333333333334 68.16417108724205T 1400 66.65564457884895L 1400 0 Z"
          ></animate>
        </path>
      </g>
    </svg>
  );
};
