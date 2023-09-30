import WidthContainer from "@/components/common/WidthContainer/WidthContainer";
import s from "./Description.module.css";
import classNames from "classnames";
import { Arrow } from "@/icons/Arrow";
import { Blob4 } from "@/icons/Blob4";
import { EyeClosed } from "@/icons/EyeClosed";
import { EyeOpen } from "@/icons/EyeOpen";

export default function Description() {
  return (
    <section id="description">
      <WidthContainer className={s.widthContainer}>
        <h2 className={s.title}>
          So how to <br />
          <span className={s.highlighted}>develop empathy?</span>
        </h2>
        <div className={s.descriptionContainer}>
          <p>
            Try our simulations and face the challenges that people with
            different abilities have in the web all the time.
          </p>
          <div className={s.cardsSection}>
            <h3 className={classNames(s.descriptionTitle, s.boldText)}>
              Every simulation has 2 parts:
            </h3>
            <div className={s.cardsContainer}>
              <div className={s.cardOuter}>
                <div className={s.cardInner}>
                  <div className={s.cardTitleContainer}>
                    <div className={s.blobContainer}>
                      <EyeClosed className={s.icon} />
                      <Blob4 className={s.blob} />
                    </div>
                    <span className={s.cardTitle}>
                      First one is deliberately{" "}
                      <span className={s.boldText}>inaccessible</span>
                    </span>
                  </div>
                  <span className={s.cardText}>
                    Pay attention to all the struggles you face on this part of
                    your journey
                  </span>
                </div>
              </div>
              <Arrow className={s.arrow} />
              <div className={s.cardOuter}>
                <div className={s.cardInner}>
                  <div className={s.cardTitleContainer}>
                    <div className={s.blobContainer}>
                      <EyeOpen className={s.icon} />
                      <Blob4 className={classNames(s.blob, s.blobRotated)} />
                    </div>
                    <span className={s.cardTitle}>
                      Second one provides{" "}
                      <span className={s.boldText}>better accessibility</span>
                    </span>
                  </div>
                  <span className={s.cardText}>
                    Focus on how your experience changed comparing to the
                    previous part
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p>
            Don&apos;t worry, <span className={s.boldText}>we will guide</span>{" "}
            you through it and make sure you won&apos;t miss anything!
          </p>
        </div>
      </WidthContainer>
    </section>
  );
}
