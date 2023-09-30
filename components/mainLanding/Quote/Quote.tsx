import WidthContainer from "@/components/common/WidthContainer/WidthContainer";
import s from "./Quote.module.css";
import { QuotationMark } from "@/icons/QuotationMark";
import Link from "next/link";

export default function Quote() {
  return (
    <section className={s.quoteSection}>
      <WidthContainer className={s.widthContainer}>
        <div className={s.quoteContainer}>
          <QuotationMark className={s.quotationMarkIcon} />
          <div className={s.quoteTextContainer}>
            <span className={s.quoteText}>
              <span className={s.boldText}>I knew</span> some people see things
              blurred,
              <br />
              <span className={s.boldText}>
                but I couldn&apos;t imagine
              </span>{" "}
              it&apos;s actually that difficult...
            </span>
            <span className={s.author}>
              — basically every second person after trying{" "}
              <Link href="/myopia" className={s.link}>
                the Blurred vision simulation
              </Link>
            </span>
          </div>
        </div>
      </WidthContainer>
    </section>
  );
}
