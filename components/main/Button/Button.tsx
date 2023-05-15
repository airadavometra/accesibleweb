import classNames from "classnames";
import s from "./Button.module.css";
import Link from "next/link";

type ButtonProps = {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  type: "primary" | "secondary";
};

export const Button = ({
  text,
  href,
  onClick,
  className,
  type,
}: ButtonProps) => {
  return href ? (
    <Link href={href} className={classNames(s[type], className)}>
      {text}
      <div aria-hidden="true" className={s.hidden}>
        {text}
      </div>
    </Link>
  ) : (
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
