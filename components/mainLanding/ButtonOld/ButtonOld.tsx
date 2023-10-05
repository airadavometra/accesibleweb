import classNames from "classnames";
import s from "./ButtonOld.module.css";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonOldProps = {
  id?: string;
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  type: "primary" | "secondary";
  icon?: ReactNode;
};

export const ButtonOld = ({
  id,
  text,
  href,
  onClick,
  className,
  type,
  icon,
}: ButtonOldProps) => {
  return href ? (
    <Link href={href} className={classNames(s[type], className)}>
      <div id={id}>
        {text}
        <div aria-hidden="true" className={s.hidden}>
          {text}
        </div>
      </div>
    </Link>
  ) : (
    <button className={classNames(s[type], className)} onClick={onClick}>
      <>
        <div id={id}>
          {text}
          <div aria-hidden="true" className={s.hidden}>
            {text}
          </div>
        </div>
        {icon}
      </>
    </button>
  );
};
