import s from "./EmptyState.module.css";
import Link from "next/link";

type EmptyStateProps = {
  text: string;
  path: string;
};

export const EmptyState = ({ text, path }: EmptyStateProps) => {
  return (
    <div className={s.container}>
      <span className={s.text}>{text}</span>
      <Link href={`/${path}/accessible/main`} className={s.link}>
        Continue shopping
      </Link>
    </div>
  );
};
