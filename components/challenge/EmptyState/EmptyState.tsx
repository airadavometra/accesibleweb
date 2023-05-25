import s from "./EmptyState.module.css";
import { useRouter } from "next/router";

type EmptyStateProps = {
  text: string;
};

export const EmptyState = ({ text }: EmptyStateProps) => {
  const router = useRouter();

  const onContinueShoppingClick = () => {
    router.push("/challenge");
  };

  return (
    <div className={s.container}>
      <div className={s.text}>{text}</div>
      <div role="link" onClick={onContinueShoppingClick} className={s.link}>
        Continue shopping
      </div>
    </div>
  );
};
