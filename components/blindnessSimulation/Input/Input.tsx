import { Button } from "../Button/Button";
import s from "./Input.module.css";
import { HTMLInputTypeAttribute, ReactNode } from "react";
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
    <div className={s.inputWrapper}>
      <div className={classNames(s.inputContainer, s[color])}>
        <input
          placeholder={placeholder}
          className={classNames(s.input, s[`${color}Input`])}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
        />
        {buttonAction && buttonIcon && (
          <Button
            text={buttonAction}
            type="icon"
            icon={buttonIcon}
            className={s.arrow}
          />
        )}
      </div>
    </div>
  );
};
