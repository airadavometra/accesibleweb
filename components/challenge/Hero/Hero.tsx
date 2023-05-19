import WidthContainer from "@/components/WidthContainer/WidthContainer";
import classNames from "classnames";
import Image from "next/image";
import { Button } from "../Button/Button";
import s from "./Hero.module.css";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className={s.hero}>
      <WidthContainer className={s.widthContainer}>
        <div className={classNames(s.section, s.imageContainer)}>
          <Image className={s.image} src="/hero.png" alt="" fill />
        </div>
        <div className={classNames(s.section, s.descriptionSection)}>
          <div className={s.title}>Take a bite</div>
          <div className={s.description}>
            Here fresh, organic fruits and vegetables meet sustainable,
            eco-conscious values. <br /> Taste the difference, fuel your life.
          </div>
          <Link className={s.link} href="/challenge/category?category=fruits">
            Go shopping
          </Link>
        </div>
      </WidthContainer>
    </div>
  );
};
