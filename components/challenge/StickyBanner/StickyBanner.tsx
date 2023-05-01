import { Button } from "../Button/Button";
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
      />
      <Button
        id="service-remind-task"
        text="End challenge"
        onClick={onEndChallenge}
        type="primary"
      />
    </div>
  );
};
