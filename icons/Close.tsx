import { WithClassName } from "@/types/common";

export const Close = ({ className }: WithClassName) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      stroke="#000000"
      viewBox="0 0 24 24"
      strokeWidth={1}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};
