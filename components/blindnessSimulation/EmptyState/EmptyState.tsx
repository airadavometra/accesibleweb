import { useRouter } from "next/router";
import s from "./EmptyState.module.css";

type EmptyStateProps = {
  text: string;
};

export const EmptyState = ({ text }: EmptyStateProps) => {
  const router = useRouter();

  const onContinueShoppingClick = () => {
    router.push("/blindness/main");
  };
  return (
    <div className={s.container}>
      <span className={s.text}>{text}</span>
      <div onClick={onContinueShoppingClick} className={s.link}>
        Continue shopping
      </div>
    </div>
  );
};
