import WidthContainer from "@/components/common/WidthContainer/WidthContainer";
import s from "./ChecklistAds.module.css";
import classNames from "classnames";
import Link from "next/link";
import { Blob4 } from "@/icons/Blob4";
import { Check } from "@/icons/Check";

export default function ChecklistAds() {
  return (
    <section id="checklist">
      <WidthContainer className={s.widthContainer}>
        <h2 className={s.title}>
          Want to learn how <br />
          <span className={s.highlighted}>
            to improve your website accessibility?
          </span>
        </h2>
        <ul className={s.adviceList}>
          <li className={s.advice}>
            <div className={s.adviceIconContainer}>
              <Check className={s.adviceIcon} />
              <Blob4 className={s.adviceIconBlob} />
            </div>
            <span className={s.adviceText}>
              Add alt text for every important image
            </span>
          </li>
          <li className={s.advice}>
            <div className={s.adviceIconContainer}>
              <Check className={s.adviceIcon} />
              <Blob4
                className={classNames(
                  s.adviceIconBlob,
                  s.adviceIconBlobRotated
                )}
              />
            </div>
            <span className={s.adviceText}>
              Make sure all texts, borders and icons have a sufficient contrast
              ratio
            </span>
          </li>
          <li className={s.advice}>
            <div className={s.adviceIconContainer}>
              <Check className={s.adviceIcon} />
              <Blob4 className={s.adviceIconBlob} />
            </div>
            <span className={s.adviceText}>
              Do not overwrite root font size and use rem for most font size
              properties
            </span>
          </li>
        </ul>
        <div className={s.linkContainer}>
          <span className={s.moreRecommendations}>
            See more recommendations in
          </span>
          <Link href="/checklist" className={s.link}>
            our accessibility checklist
          </Link>
        </div>
      </WidthContainer>
    </section>
  );
}
