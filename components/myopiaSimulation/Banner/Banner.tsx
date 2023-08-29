import Image from "next/image";
import s from "./Banner.module.css";

type BannerProps = {
  imgSrc: string;
  text: string;
};

export const Banner = ({ imgSrc, text }: BannerProps) => {
  return (
    <section className={s.container}>
      <Image
        aria-hidden
        className={s.background}
        fill
        src={imgSrc}
        alt="banner background"
      />
      <div className={s.gradient} />
      <p className={s.text}>{text}</p>
    </section>
  );
};
