import classnames from "classnames";
import s from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={s.hero} aria-hidden="true">
      <div className={s.runningTextContainer}>
        <div className={classnames(s.boldHeroText, s.runningText)}>
          <span translate="no">access&nbsp;&nbsp;&nbsp;</span>
          <span translate="no">access&nbsp;&nbsp;&nbsp;</span>
          <span translate="no">access&nbsp;&nbsp;&nbsp;</span>
          <span translate="no">access&nbsp;&nbsp;&nbsp;</span>
          <span translate="no">access&nbsp;&nbsp;&nbsp;</span>
          <span translate="no">access&nbsp;&nbsp;&nbsp;</span>
          <span translate="no">access&nbsp;&nbsp;&nbsp;</span>
          <span translate="no">access&nbsp;&nbsp;&nbsp;</span>
        </div>
      </div>
      <div className={s.runningTextContainer}>
        <div className={classnames(s.runningText, s.runningLeft)}>
          <span translate="no">denied?&nbsp;&nbsp;&nbsp;</span>
          <span translate="no">denied?&nbsp;&nbsp;&nbsp;</span>
          <span translate="no">denied?&nbsp;&nbsp;&nbsp;</span>
          <span translate="no">denied?&nbsp;&nbsp;&nbsp;</span>
          <span translate="no">denied?&nbsp;&nbsp;&nbsp;</span>
          <span translate="no">denied?&nbsp;&nbsp;&nbsp;</span>
          <span translate="no">denied?&nbsp;&nbsp;&nbsp;</span>
          <span translate="no">denied?&nbsp;&nbsp;&nbsp;</span>
        </div>
      </div>
    </section>
  );
}
