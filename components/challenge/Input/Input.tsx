import WidthContainer from "@/components/WidthContainer/WidthContainer";
import { SendArrow } from "@/icons/SendArrow";
import { NavigationItem } from "@/types/navigationItem";
import { Button } from "../Button/Button";
import s from "./Input.module.css";
import { ReactNode } from "react";
import classNames from "classnames";

type InputProps = {
  placeholder: string;
  buttonAction?: string;
  buttonIcon?: ReactNode;
  color: "black" | "white";
};

export const Input = ({
  placeholder,
  buttonAction,
  buttonIcon,
  color,
}: InputProps) => {
  return (
    <div className={classNames(s.inputContainer, s[color])}>
      <input placeholder={placeholder} className={s.input} />
      {buttonAction && buttonIcon && (
        <Button
          text={buttonAction}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
          type="icon"
          icon={buttonIcon}
        />
      )}
    </div>
  );
};
