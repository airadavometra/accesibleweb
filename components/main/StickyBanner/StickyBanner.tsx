import { Button } from "@/components/main/Button/Button";
import s from "./StickyBanner.module.css";

type StickeHeaderProps = {
  onRemindTask: () => void;
  onEndChallenge: () => void;
};

export const StickyBanner = ({
  onRemindTask,
  onEndChallenge,
}: StickeHeaderProps) => {
  return (
    <div className={s.stickyHeader}>
      <Button
        id="service-remind-task"
        text="Remind task"
        onClick={onRemindTask}
        type="secondary"
        className={s.button}
      />
      <Button
        id="service-remind-task"
        text="End challenge"
        onClick={onEndChallenge}
        type="primary"
        className={s.button}
      />
    </div>
  );
};
