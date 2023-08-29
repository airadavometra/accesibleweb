import classNames from "classnames";
import s from "./Button.module.css";
import Link from "next/link";

type ButtonProps = {
  id?: string;
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  type: "primary" | "secondary";
};

export const Button = ({
  id,
  text,
  href,
  onClick,
  className,
  type,
}: ButtonProps) => {
  return href ? (
    <Link id={id} href={href} className={classNames(s[type], className)}>
      {text}
      <div aria-hidden="true" className={s.hidden}>
        {text}
      </div>
    </Link>
  ) : (
    <button
      id={id}
      className={classNames(s[type], className)}
      onClick={onClick}
    >
      <>
        {text}
        <div aria-hidden="true" className={s.hidden}>
          {text}
        </div>
      </>
    </button>
  );
};
