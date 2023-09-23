import Image from "next/image";
import s from "./Banner.module.css";

type BannerProps = {
  imgSrc: string;
  text: string;
};

export const Banner = ({ imgSrc, text }: BannerProps) => {
  return (
    <div className={s.container}>
      <Image aria-hidden className={s.background} fill src={imgSrc} alt="" />
      <div className={s.gradient} />
      <div className={s.text}>{text}</div>
    </div>
  );
};
