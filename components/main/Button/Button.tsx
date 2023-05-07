import classNames from "classnames";
import s from "./Button.module.css";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  type: "primary" | "secondary";
};

export const Button = ({ text, onClick, className, type }: ButtonProps) => {
  return (
    <button className={classNames(s[type], className)} onClick={onClick}>
      <>
        {text}
        <div aria-hidden="true" className={s.hidden}>
          {text}
        </div>
      </>
    </button>
  );
};
