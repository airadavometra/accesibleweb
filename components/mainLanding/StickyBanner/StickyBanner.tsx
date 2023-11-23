import s from "./StickyBanner.module.css";
import { useRouter } from "next/router";
import WidthContainer from "@/components/common/WidthContainer/WidthContainer";
import { EyeOpen } from "@/icons/EyeOpen";
import { EyeClosed } from "@/icons/EyeClosed";
import { Exit } from "@/icons/Exit";
import { Button } from "../Button/Button";

type StickeHeaderProps = {
  onEndChallenge: () => void;
};

export const StickyBanner = ({ onEndChallenge }: StickeHeaderProps) => {
  const router = useRouter();
  const isAccessible = router.pathname.includes("/accessible");

  return (
    <div className={s.stickyHeader}>
      <WidthContainer className={s.widthContainer}>
        <div className={s.accessibleLabelContainer}>
          {isAccessible ? (
            <>
              <EyeOpen className={s.eyeIcon} />
              <span className={s.accessibleLabel} id="service-accessible-label">
                Accessible
              </span>
            </>
          ) : (
            <>
              <EyeClosed className={s.eyeIcon} />
              <span className={s.accessibleLabel} id="service-accessible-label">
                Inaccessible
              </span>
            </>
          )}
        </div>
        <Button
          id="service-remind-task"
          text="Exit simulation"
          onClick={onEndChallenge}
          type="primary"
          className={s.button}
          iconLeft={<Exit className={s.eyeIcon} />}
        />
      </WidthContainer>
    </div>
  );
};
