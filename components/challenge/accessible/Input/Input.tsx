import WidthContainer from "@/components/WidthContainer/WidthContainer";
import { SendArrow } from "@/icons/SendArrow";
import { NavigationItem } from "@/types/navigationItem";
import { Button } from "../Button/Button";
import s from "./Input.module.css";
import { HTMLInputTypeAttribute, ReactNode } from "react";
import classNames from "classnames";

type InputProps = {
  label: string;
  placeholder: string;
  buttonAction?: string;
  buttonIcon?: ReactNode;
  color: "black" | "white";
  value?: string;
  type: HTMLInputTypeAttribute;
  required?: boolean;
  onChange: (newValue?: string) => void;
};

export const Input = ({
  label,
  placeholder,
  buttonAction,
  buttonIcon,
  color,
  value,
  type,
  required,
  onChange,
}: InputProps) => {
  return (
    <div className={s.inputWrapper}>
      <label className={classNames(s.label, s[color])} htmlFor={label}>
        {label}
      </label>
      <div className={classNames(s.inputContainer, s[color])}>
        <input
          name={label}
          placeholder={placeholder}
          className={classNames(s.input, s[`${color}Input`])}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
          type={type}
          required={required}
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
