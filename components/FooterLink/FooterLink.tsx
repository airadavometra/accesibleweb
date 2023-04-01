import { libraryLinkVariants } from "@/motions/homePage";
import { motion } from "framer-motion";
import Link from "next/link";
import WidthContainer from "../WidthContainer/WidthContainer";
import s from "./FooterLink.module.css";

const FooterLink = () => {
  return (
    <section className={s.libraryLinkSection}>
      <WidthContainer className={s.libraryLinkContainer}>
        <motion.div
          variants={libraryLinkVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          whileHover="hover"
          exit="exit"
        >
          <Link className={s.libraryLink} href="/library">
            check out <br />
            our accessibility library
          </Link>
        </motion.div>
      </WidthContainer>
    </section>
  );
};

export default FooterLink;
