import s from "./Hero.module.css";
import { Blob4 } from "@/icons/Blob4";
import { Arrow } from "@/icons/Arrow";
import WidthContainer from "@/components/common/WidthContainer/WidthContainer";
import classNames from "classnames";
import Link from "next/link";
import { motion } from "framer-motion";
import { scrollDownVariants } from "@/motions/homePage";

export default function Hero() {
  const smoothScrollIntoView = (e: React.MouseEvent) => {
    e.preventDefault();
    const destination = document.querySelector("#facts");
    if (destination) {
      destination.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={s.hero} aria-hidden="true">
      <WidthContainer className={s.textContainer}>
        <div className={s.leftPiece}>
          <span className={s.extraSmall}>walk in others&apos;</span>
          <span>
            <span className={classNames(s.medium, s.bold, s.highlighted)}>
              digital
            </span>
            <span className={s.medium}> shoes,</span>
          </span>
        </div>
        <div className={s.rightPiece}>
          <span>
            <span className={s.extraSmall}>see the </span>
            <span className={classNames(s.small, s.bold)}>true value</span>
          </span>
          <span>
            <span className={s.extraSmall}>of </span>
            <span className={classNames(s.big, s.bold, s.highlighted)}>
              accessibility
            </span>
          </span>
        </div>
      </WidthContainer>
      <motion.div variants={scrollDownVariants} whileHover="hover">
        <Link
          href="#facts"
          onClick={smoothScrollIntoView}
          className={s.scrollDown}
        >
          <span>scroll</span>
          <div className={s.blobContainer}>
            <Arrow className={s.arrow} />
            <Blob4 className={s.blob} />
          </div>
          <span>down</span>
        </Link>
      </motion.div>
    </section>
  );
}
