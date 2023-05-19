import { VisuallyHidden } from "@/components/VisuallyHidden/VisuallyHidden";
import classNames from "classnames";
import { ReactNode } from "react";
import s from "./Button.module.css";

type ButtonProps = {
  id?: string;
  text: string;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
  type: "primary" | "secondary" | "icon";
};

export const Button = ({
  id,
  text,
  icon,
  onClick,
  className,
  type,
}: ButtonProps) => {
  return (
    <div className={classNames(s.buttonContainer, s[type], className)}>
      <button id={id} className={s.button} onClick={onClick}>
        {type === "icon" ? (
          <>{icon}</>
        ) : (
          <>
            {text}
            <div aria-hidden="true" className={s.hidden}>
              {text}
            </div>
          </>
        )}
      </button>
    </div>
  );
};
