import Link from "next/link";
import { FC } from "react";
import WidthContainer from "../WidthContainer/WidthContainer";
import s from "./FooterLink.module.css";

const FooterLink: FC = () => {
  return (
    <section className={s.libraryLinkSection}>
      <WidthContainer className={s.libraryLinkContainer}>
        <Link className={s.libraryLink} href="/library">
          check out <br />
          our accessibility library
        </Link>
      </WidthContainer>
    </section>
  );
};

export default FooterLink;
