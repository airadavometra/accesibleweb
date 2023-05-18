import WidthContainer from "@/components/WidthContainer/WidthContainer";
import classNames from "classnames";
import Image from "next/image";
import s from "./Quote.module.css";

type QuoteProps = {
  imgSrc: string;
  text: string;
  author: string;
};

export const Quote = ({ imgSrc, text, author }: QuoteProps) => {
  return (
    <section className={s.quote}>
      <WidthContainer className={s.widthContainer}>
        <div className={classNames(s.section, s.quoteSection)}>
          <p className={s.text}>{`"${text}"`}</p>
          <span className={s.author}>{`- ${author}`}</span>
        </div>
        <div className={classNames(s.section, s.imageContainer)}>
          <Image className={s.image} src={imgSrc} alt="background" fill />
        </div>
      </WidthContainer>
    </section>
  );
};
