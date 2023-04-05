import { Button } from "../Button/Button";
import s from "./StickyBanner.module.css";

export const StickyBanner = () => {
  return (
    <div className={s.stickyHeader}>
      <Button
        text="Remind task"
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
        type="secondary"
      />
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
