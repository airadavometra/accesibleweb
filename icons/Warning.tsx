import { WithClassName } from "@/types/withClassName";

export const Warning = ({ className }: WithClassName) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clip-path="url(#clip0_816_143561)">
        <path
          d="M12 22.91C18.0249 22.91 22.9091 18.0258 22.9091 12.0009C22.9091 5.97596 18.0249 1.0918 12 1.0918C5.97505 1.0918 1.09088 5.97596 1.09088 12.0009C1.09088 18.0258 5.97505 22.91 12 22.91Z"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 7.63672V12.0004"
          stroke="var(--text-color)"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 16.3633H12.0108"
          stroke="var(--text-color)"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_816_143561">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
