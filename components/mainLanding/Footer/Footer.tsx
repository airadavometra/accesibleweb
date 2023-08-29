import Link from "next/link";
import s from "./Footer.module.css";
import WidthContainer from "@/components/common/WidthContainer/WidthContainer";
import { Heart } from "@/icons/Heart";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <picture>
        <source
          className={s.background}
          srcSet="/wave.svg"
          media="(prefers-reduced-motion: no-preference)"
        />
        <img
          className={s.background}
          src="/footer.svg"
          alt="footer background"
        />
      </picture>
      <WidthContainer className={s.textContainer}>
        <div>
          <span className={s.transparent}>
            Made with <Heart className={s.heart} /> for accessibility by{" "}
          </span>
          <Link
            href="https://www.airadavometra.space/"
            target="_blank"
            rel="noopener noreferrer"
            className={s.link}
          >
            Daria Artemova
          </Link>
        </div>
        <span className={s.transparent}>2023</span>
      </WidthContainer>
    </footer>
  );
};

export default Footer;
