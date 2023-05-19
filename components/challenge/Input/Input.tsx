import { Button } from "../Button/Button";
import s from "./Input.module.css";
import { ReactNode } from "react";
import classNames from "classnames";

type InputProps = {
  placeholder: string;
  buttonAction?: string;
  buttonIcon?: ReactNode;
  color: "black" | "white";
  value?: string;
  onChange: (newValue?: string) => void;
};

export const Input = ({
  placeholder,
  buttonAction,
  buttonIcon,
  color,
  value,
  onChange,
}: InputProps) => {
  return (
    <div className={classNames(s.inputContainer, s[color])}>
      <input
        className={classNames(s.input, s[`${color}Input`])}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        value={value}
        placeholder={placeholder}
      />
      {buttonAction && buttonIcon && (
        <Button text={buttonAction} type="icon" icon={buttonIcon} />
      )}
    </div>
  );
};
