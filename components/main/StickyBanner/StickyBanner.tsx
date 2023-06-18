import { Button } from "@/components/main/Button/Button";
import s from "./StickyBanner.module.css";
import { useRouter } from "next/router";

type StickeHeaderProps = {
  onRemindTask: () => void;
  onEndChallenge: () => void;
};

export const StickyBanner = ({
  onRemindTask,
  onEndChallenge,
}: StickeHeaderProps) => {
  const router = useRouter();
  const isAccessible = router.pathname.startsWith("/challenge/accessible");

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
