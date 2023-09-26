import s from "./Hero.module.css";
import { Blob5 } from "@/icons/Blob5";
import { Arrow } from "@/icons/Arrow";
import WidthContainer from "@/components/common/WidthContainer/WidthContainer";
import classNames from "classnames";

export default function Hero() {
  return (
    <section className={s.hero} aria-hidden="true">
      <WidthContainer className={s.textContainer}>
        <div className={s.leftPiece}>
          <span className={s.extraSmall}>walk in others&apos;</span>
          <div className={s.withWhitespace}>
            <span className={classNames(s.medium, s.bold, s.highlighted)}>
              digital
            </span>
            <span className={s.medium}>shoes,</span>
          </div>
        </div>
        <div className={s.rightPiece}>
          <div className={s.withWhitespace}>
            <span className={s.extraSmall}>see the</span>
            <span className={classNames(s.small, s.bold)}>true value</span>
          </div>
          <div className={s.withWhitespace}>
            <span className={s.extraSmall}>of</span>
            <span className={classNames(s.big, s.bold, s.highlighted)}>
              accessibility
            </span>
          </div>
        </div>
      </WidthContainer>
      <div className={s.scrollDown}>
        <span>scroll</span>
        <div className={s.blobContainer}>
          <Arrow className={s.arrow} />
          <Blob5 className={s.blob} />
        </div>
        <span>down</span>
      </div>
    </section>
  );
}
