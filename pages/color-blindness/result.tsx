import WidthContainer from "@/components/common/WidthContainer/WidthContainer";
import type { NextPage } from "next";
import s from "@/styles/Result.module.css";
import Link from "next/link";
import { Arrow } from "@/icons/Arrow";
import { Check } from "@/icons/Check";
import { Blob4 } from "@/icons/Blob4";
import classNames from "classnames";
import Share from "@/components/mainLanding/Share/Share";

const ResultPage: NextPage = () => {
  return (
    <main className={s.main}>
      <WidthContainer className={s.widthContainer}>
        <h1 className={s.title}>Color blindness</h1>
        <div className={s.sections}>
          <section className={s.descriptionSection}>
            <span className={s.text}>
              Have you noticed some difference between these 2 versions of the
              shop?
            </span>
            <span className={s.text}>
              Hope this new experience will help you to{" "}
              <span className={s.boldText}>
                create more accessible websites.
              </span>
            </span>
          </section>
          <section className={s.section}>
            <h2 className={s.sectionTitle}>
              How can we improve accessibility for this case?
            </h2>
            <ul className={s.list}>
              <li className={s.listItem}>
                <div className={s.actionIconContainer}>
                  <Check className={s.actionIcon} />
                  <Blob4 className={s.actionIconBlob} />
                </div>
                <span>Add alt text for every important image</span>
              </li>
              <li className={s.listItem}>
                <div className={s.actionIconContainer}>
                  <Check className={s.actionIcon} />
                  <Blob4
                    className={classNames(
                      s.actionIconBlob,
                      s.actionIconBlobRotated
                    )}
                  />
                </div>
                <span>
                  Use semantic HTML, especially for interactive elements
                </span>
              </li>
              <li className={s.listItem}>
                <div className={s.actionIconContainer}>
                  <Check className={s.actionIcon} />
                  <Blob4 className={s.actionIconBlob} />
                </div>
                <span>
                  Do not overwrite root font size and use rem for most font size
                  properties
                </span>
              </li>
            </ul>
            <Link href={"/checklist"} className={s.checklistLink}>
              <span>
                See more recommendations in{" "}
                <span className={s.highlighted}>
                  our accessibility checklist
                </span>
              </span>
            </Link>
          </section>
          <section className={s.section}>
            <h2 className={s.sectionTitle}>Check out other simulations:</h2>
            <ul className={s.list}>
              <li>
                <Link
                  href={"/myopia"}
                  className={classNames(s.listItem, s.simulationLink)}
                >
                  <Arrow className={s.arrowIcon} />
                  Myopia
                </Link>
              </li>
              <li>
                <Link
                  href={"/tremor"}
                  className={classNames(s.listItem, s.simulationLink)}
                >
                  <Arrow className={s.arrowIcon} />
                  Tremor
                </Link>
              </li>
              <li>
                <Link
                  href={"/blindness"}
                  className={classNames(s.listItem, s.simulationLink)}
                >
                  <Arrow className={s.arrowIcon} />
                  Blindness
                </Link>
              </li>
              <li>
                <Link
                  href={"/dyslexia"}
                  className={classNames(s.listItem, s.simulationLink)}
                >
                  <Arrow className={s.arrowIcon} />
                  Dyslexia
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </WidthContainer>
      <Share />
    </main>
  );
};

export default ResultPage;
