import Link from "next/link";
import s from "./Footer.module.css";
import WidthContainer from "@/components/common/WidthContainer/WidthContainer";
import { Heart } from "@/icons/Heart";
import useMediaQuery from "@/hooks/useMediaQuery";
import { FooterWave } from "@/icons/FooterWave";

const Footer = () => {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduced)");

  return (
    <footer className={s.footer}>
      {reducedMotion ? (
        <FooterWave className={s.footerWave} />
      ) : (
        <FooterWave className={s.footerWave} />
      )}
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
