import s from "./EmptyState.module.css";
import Link from "next/link";

type EmptyStateProps = {
  text: string;
};

export const EmptyState = ({ text }: EmptyStateProps) => {
  return (
    <div className={s.container}>
      <span className={s.text}>{text}</span>
      <Link href="/challenge" className={s.link}>
        Continue shopping
      </Link>
    </div>
  );
};
