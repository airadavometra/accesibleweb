import WidthContainer from "@/components/common/WidthContainer/WidthContainer";
import type { NextPage } from "next";
import s from "@/styles/Result.module.css";
import { Button } from "@/components/mainLanding/Button/Button";
import Link from "next/link";
import { Arrow } from "@/icons/Arrow";
import classnames from "classnames";

const ResultPage: NextPage = () => {
  return (
    <main className={s.main}>
      <WidthContainer className={s.widthContainer}>
        <h1 className={s.title}>Dyslexia result</h1>
        <section className={s.gridSection}>
          <p className={s.text}>Some message? </p>
          <p className={s.text}>
            By designing websites with inclusivity and adaptability in mind, we
            can create a more equitable digital space. This not only benefits
            individuals with chronic or temporary disabilities but also ensures
            a comfortable and effective browsing experience for all users.
          </p>
        </section>
        <section className={classnames(s.gridSection, s.otherChallenges)}>
          <div className={classnames(s.group, s.accessibleGroup)}>
            <div className={s.group}>
              <h2>Also check this out</h2>
              <p className={s.text}>
                Try a similar challenge, but with one key difference: this
                version is more accessible than the one you visited before. You
                can experience how an accessible website can be a gamechanger
                and make the web more inclusive and user-friendly.
              </p>
            </div>
            <div className={s.group}>
              <Button
                text={"Try accessible version"}
                type={"primary"}
                href="/dyslexia/accessible/main"
              />
              <Button
                text={"Or try the broken one again"}
                type={"secondary"}
                href="/dyslexia/main"
              />
            </div>
          </div>
          <div className={s.group}>
            <h2>And try other challenges:</h2>
            <ul className={s.otherChallengesList}>
              <li key={"myopia"} className={s.listItem}>
                <Arrow className={s.arrow} />
                <Link href={"/myopia"} className={s.link}>
                  Myopia
                </Link>
              </li>
              <li key={"blindness"} className={s.listItem}>
                <Arrow className={s.arrow} />
                <Link href={"/blindness"} className={s.link}>
                  Blindness
                </Link>
              </li>
              <li key={"tremor"} className={s.listItem}>
                <Arrow className={s.arrow} />
                <Link href={"/tremor"} className={s.link}>
                  Tremor
                </Link>
              </li>
              <li key={"color-blindness"} className={s.listItem}>
                <Arrow className={s.arrow} />
                <Link href={"/color-blindness"} className={s.link}>
                  Color blindness
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </WidthContainer>
    </main>
  );
};

export default ResultPage;
