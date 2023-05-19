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
    <div className={s.quote}>
      <WidthContainer className={s.widthContainer}>
        <div className={classNames(s.section, s.quoteSection)}>
          <div className={s.text}>{`"${text}"`}</div>
          <div className={s.author}>{`- ${author}`}</div>
        </div>
        <div className={classNames(s.section, s.imageContainer)}>
          <Image className={s.image} src={imgSrc} alt="" fill />
        </div>
      </WidthContainer>
    </div>
  );
};
