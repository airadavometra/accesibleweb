import { VisuallyHidden } from "@/components/VisuallyHidden/VisuallyHidden";
import classNames from "classnames";
import { ReactNode } from "react";
import s from "./Button.module.css";

type ButtonProps = {
  text: string;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
  type: "primary" | "secondary" | "icon";
};

export const Button = ({
  text,
  icon,
  onClick,
  className,
  type,
}: ButtonProps) => {
  return (
    <button className={classNames(s[type], className)} onClick={onClick}>
      {type === "icon" ? (
        <>
          {icon}
          <VisuallyHidden>{text}</VisuallyHidden>
        </>
      ) : (
        <>
          {text}
          <div aria-hidden="true" className={s.hidden}>
            {text}
          </div>
        </>
      )}
    </button>
  );
};
