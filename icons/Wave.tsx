import { WithClassName } from "@/types/common";

export const Wave = ({ className }: WithClassName) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1400 480"
    >
      <g transform="translate(700,240) scale(1,-1) translate(-700,-240)">
        <linearGradient id="lg-0.47290123385314464" x1="0" x2="1" y1="0" y2="0">
          <stop stop-color="#000000" offset="0"></stop>
          <stop stop-color="#000000" offset="1"></stop>
        </linearGradient>
        <path d="" fill="url(#lg-0.47290123385314464)" opacity="1">
          <animate
            attributeName="d"
            dur="12.5s"
            repeatCount="indefinite"
            keyTimes="0;0.333;0.667;1"
            calcMode="spline"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
            begin="0s"
            values="M0 0L 0 315.6826342999838Q 140 335.4714020888002  280 313.83457622643016T 560 270.67441503646893T 840 212.73715569946896T 1120 178.66997885014183T 1400 128.86113530709352L 1400 0 Z;M0 0L 0 337.523863036698Q 140 351.08525798221456  280 303.95226983556773T 560 247.83730714874582T 840 231.91918985757874T 1120 155.93617337449305T 1400 117.42025463451287L 1400 0 Z;M0 0L 0 340.10020059746313Q 140 305.9997793616862  280 282.54892007171T 560 255.37056819409102T 840 191.20339278090316T 1120 158.8720751457485T 1400 120.701849628595L 1400 0 Z;M0 0L 0 315.6826342999838Q 140 335.4714020888002  280 313.83457622643016T 560 270.67441503646893T 840 212.73715569946896T 1120 178.66997885014183T 1400 128.86113530709352L 1400 0 Z"
          ></animate>
        </path>
      </g>
    </svg>
  );
};
