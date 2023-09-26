import { WithClassName } from "@/types/withClassName";

export const FooterWave = ({ className }: WithClassName) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1400 480"
    >
      <filter id="inset-shadow">
        <feOffset dx="0" dy="4" />
        <feGaussianBlur stdDeviation="8" result="offset-blur" />
        <feComposite
          operator="out"
          in="SourceGraphic"
          in2="offset-blur"
          result="inverse"
        />
        <feFlood
          flood-color="var(--text-color)"
          flood-opacity=".15"
          result="color"
        />
        <feComposite operator="in" in="color" in2="inverse" result="shadow" />
        <feComposite operator="over" in="shadow" in2="SourceGraphic" />
      </filter>
      <g
        filter="url(#inset-shadow)"
        transform="translate(700,240) scale(1,-1) translate(-700,-240)"
      >
        <path d="" fill="currentColor" opacity="1">
          <animate
            attributeName="d"
            dur="12.5s"
            repeatCount="indefinite"
            keyTimes="0;0.333;0.667;1"
            calcMode="spline"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
            begin="0s"
            values="M0 0L 0 306.17211308917484Q 140 293.42702367670336  280 251.5172172240759T 560 246.00692850855404T 840 226.67397054690122T 1120 191.10499964648287T 1400 190.9654105110542L 1400 0 Z;M0 0L 0 299.5504366540913Q 140 302.1265517561165  280 262.7260106677817T 560 254.82257462500834T 840 245.11270004435454T 1120 215.19605540655698T 1400 172.76780444324604L 1400 0 Z;M0 0L 0 299.6432802586469Q 140 306.66350398405217  280 287.82994210263223T 560 259.5960845372744T 840 206.8795157085044T 1120 220.77503859497415T 1400 194.24216257561096L 1400 0 Z;M0 0L 0 306.17211308917484Q 140 293.42702367670336  280 251.5172172240759T 560 246.00692850855404T 840 226.67397054690122T 1120 191.10499964648287T 1400 190.9654105110542L 1400 0 Z"
          ></animate>
        </path>
      </g>
    </svg>
  );
};
