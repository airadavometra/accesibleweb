import WidthContainer from "@/components/WidthContainer/WidthContainer";
import classNames from "classnames";
import s from "./Bestsellers.module.css";

export const Bestsellers = () => {
  return (
    <section className={s.bestsellers}>
      <WidthContainer className={s.widthContainer}>
        <h2>Meet our bestsellers</h2>
        <div className={classNames(s.section, s.descriptionSection)}>
          <h1 className={s.title}>Take a bite</h1>
          <p className={s.description}>
            Discover{" "}
            <b>
              <i>fresh</i>
            </b>
            , where fresh, organic fruits and vegetables meet sustainable,
            eco-conscious values. Taste the difference, fuel your life.
          </p>
          <button className={s.button}>Go shopping</button>
        </div>
      </WidthContainer>
    </section>
  );
};
