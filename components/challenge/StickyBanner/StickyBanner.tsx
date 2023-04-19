import { Button } from "../Button/Button";
import s from "./StickyBanner.module.css";

type StickeHeaderProps = {
  onRemindTask: () => void;
};

export const StickyBanner = ({ onRemindTask }: StickeHeaderProps) => {
  return (
    <div className={s.stickyHeader}>
      <Button text="Remind task" onClick={onRemindTask} type="secondary" />
      <Button
        text="Give up"
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
        type="primary"
      />
    </div>
  );
};
