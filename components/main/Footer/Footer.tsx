import Image from "next/image";
import Link from "next/link";
import s from "./Footer.module.css";
import WidthContainer from "@/components/WidthContainer/WidthContainer";
import { Heart } from "@/icons/Heart";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Image
        className={s.background}
        fill
        src="/footer.png"
        alt="banner background"
        aria-hidden="true"
      />
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
