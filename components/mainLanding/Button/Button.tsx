import classNames from "classnames";
import s from "./Button.module.css";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  id?: string;
  text: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  href?: string;
  type: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
};

export const Button = ({
  id,
  text,
  iconLeft,
  iconRight,
  href,
  onClick,
  className,
  type,
}: ButtonProps) => {
  const buttonContent = (
    <div id={id} className={classNames(s.inner, s[type])}>
      {iconLeft}
      <div className={s.textContainer}>
        <span className={s.text}>{text}</span>
        <div aria-hidden="true" className={s.hidden}>
          {text}
        </div>
      </div>
      {iconRight}
    </div>
  );

  return href ? (
    <Link href={href} className={classNames(s.wrapper, className)}>
      {buttonContent}
    </Link>
  ) : (
    <button className={classNames(s.wrapper, className)} onClick={onClick}>
      {buttonContent}
    </button>
  );
};
