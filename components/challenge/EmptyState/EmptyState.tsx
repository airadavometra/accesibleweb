import s from "./EmptyState.module.css";
import Link from "next/link";

type EmptyStateProps = {
  text: string;
};

export const EmptyState = ({ text }: EmptyStateProps) => {
  return (
    <div className={s.container}>
      <div className={s.text}>{text}</div>
      <Link href="/challenge" className={s.link}>
        Continue shopping
      </Link>
    </div>
  );
};
