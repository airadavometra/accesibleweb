import WidthContainer from "@/components/WidthContainer/WidthContainer";
import classNames from "classnames";

import s from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={s.hero}>
      <WidthContainer className={s.widthContainer}>
        <div className={classNames(s.section, s.picture)} />
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
