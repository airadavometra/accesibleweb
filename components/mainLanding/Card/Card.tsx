import classNames from "classnames";
import s from "./Card.module.css";
import { ReactNode } from "react";

type CardProps = {
  style: "filled" | "border";
  children: ReactNode;
};

export const Card = ({ style, children }: CardProps) => {
  return (
    <div className={s.cardOuter}>
      <div className={classNames(s.cardInner, s[style])}>{children}</div>
    </div>
  );
};
