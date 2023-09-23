import WidthContainer from "@/components/common/WidthContainer/WidthContainer";
import classNames from "classnames";
import Image from "next/image";
import s from "./Hero.module.css";
import { useRouter } from "next/router";

export const Hero = () => {
  const router = useRouter();

  const onClick = () => {
    router.push("/blindness/category?category=fruits");
  };
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
          <div onClick={onClick} className={s.link}>
            Go shopping
          </div>
        </div>
      </WidthContainer>
    </div>
  );
};
