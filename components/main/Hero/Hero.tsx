import classnames from "classnames";
import s from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={s.hero}>
      <div className={s.runningTextContainer}>
        <div className={classnames(s.boldHeroText, s.runningText)}>
          <span>access&nbsp;&nbsp;&nbsp;</span>
          <span>access&nbsp;&nbsp;&nbsp;</span>
          <span>access&nbsp;&nbsp;&nbsp;</span>
          <span>access&nbsp;&nbsp;&nbsp;</span>
          <span>access&nbsp;&nbsp;&nbsp;</span>
          <span>access&nbsp;&nbsp;&nbsp;</span>
          <span>access&nbsp;&nbsp;&nbsp;</span>
          <span>access&nbsp;&nbsp;&nbsp;</span>
        </div>
      </div>
      <div className={s.runningTextContainer}>
        <div className={classnames(s.runningText, s.runningLeft)}>
          <span>denied?&nbsp;&nbsp;&nbsp;</span>
          <span>denied?&nbsp;&nbsp;&nbsp;</span>
          <span>denied?&nbsp;&nbsp;&nbsp;</span>
          <span>denied?&nbsp;&nbsp;&nbsp;</span>
          <span>denied?&nbsp;&nbsp;&nbsp;</span>
          <span>denied?&nbsp;&nbsp;&nbsp;</span>
          <span>denied?&nbsp;&nbsp;&nbsp;</span>
          <span>denied?&nbsp;&nbsp;&nbsp;</span>
        </div>
      </div>
    </section>
  );
}
