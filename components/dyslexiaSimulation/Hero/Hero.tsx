import WidthContainer from "@/components/common/WidthContainer/WidthContainer";
import classNames from "classnames";
import Image from "next/image";
import s from "./Hero.module.css";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className={s.hero}>
      <WidthContainer className={s.widthContainer}>
        <div className={classNames(s.section, s.imageContainer)}>
          <Image
            className={s.image}
            src="/hero.png"
            alt="fruits and veggies"
            fill
          />
        </div>
        <div className={classNames(s.section, s.descriptionSection)}>
          <h1 className={s.title}>Take a bite</h1>
          <p className={s.description}>
            Here fresh, organic fruits and vegetables meet sustainable,
            eco-conscious values. <br /> Taste the difference, fuel your life.
          </p>
          <Link className={s.link} href="/dyslexia/category?category=fruits">
            Go shopping
          </Link>
        </div>
      </WidthContainer>
    </section>
  );
};
