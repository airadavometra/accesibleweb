import Link from "next/link";
import s from "./Footer.module.css";
import WidthContainer from "@/components/WidthContainer/WidthContainer";
import { Heart } from "@/icons/Heart";
import { Wave } from "@/icons/Wave";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Wave className={s.background} />
      <WidthContainer className={s.textContainer}>
        <div>
          <span className={s.transparent}>
            Made with <Heart className={s.heart} /> for accessibility by{" "}
          </span>
          <Link href="https://www.airadavometra.space/" className={s.link}>
            Daria Artemova
          </Link>
        </div>
        <span className={s.transparent}>2023</span>
      </WidthContainer>
    </footer>
  );
};

export default Footer;
