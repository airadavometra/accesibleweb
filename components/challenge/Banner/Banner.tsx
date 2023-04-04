import s from "./Banner.module.css";

export const Banner = () => {
  return (
    <div className={s.stickyHeader}>
      <button className={s.primaryButton}>
        Remind task
        <div aria-hidden="true" className={s.hidden}>
          Remind task
        </div>
      </button>
      <button className={s.secondaryButton}>
        Give up
        <div aria-hidden="true" className={s.hidden}>
          Give up
        </div>
      </button>
    </div>
  );
};
